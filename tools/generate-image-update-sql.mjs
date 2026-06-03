import fs from "node:fs/promises";
import path from "node:path";

const root = "E:/campiq图片";
const bucket = "listing-images";
const supabaseUrl = "https://yrjxadfyjaofmcnveohp.supabase.co";
const outputSql = "D:/ME/Campiq/campiq-improved/supabase/update-listing-images-after-upload.sql";
const outputManifest = "D:/ME/Campiq/campiq-improved/supabase/listing-images-upload-manifest.csv";

function sqlString(value) {
  return `'${String(value).replace(/'/g, "''")}'`;
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, "\"\"")}"`;
  return text;
}

function publicUrl(folder, file) {
  const encodedPath = [folder, file].map((part) => encodeURIComponent(part)).join("/");
  return `${supabaseUrl}/storage/v1/object/public/${bucket}/${encodedPath}`;
}

const entries = await fs.readdir(root, { withFileTypes: true });
const folders = entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
const manifestRows = [["listing_title", "local_folder", "local_file", "storage_path", "public_url"]];
const statements = [];

for (const folder of folders) {
  const folderPath = path.join(root, folder);
  const files = (await fs.readdir(folderPath, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && /\.(jpe?g|png|webp|gif)$/i.test(entry.name))
    .map((entry) => entry.name)
    .sort();

  const urls = files.map((file) => publicUrl(folder, file));
  for (const file of files) {
    manifestRows.push([folder, folderPath, file, `${folder}/${file}`, publicUrl(folder, file)]);
  }

  if (!urls.length) continue;

  statements.push(`update public.listings
set images = array[
  ${urls.map(sqlString).join(",\n  ")}
]::text[]
where title = ${sqlString(folder)};`);
}

const sql = `-- Run this after uploading E:\\campiq图片 into the public Supabase Storage bucket: ${bucket}
-- The uploaded Storage paths must stay like: listing-images/<listing title folder>/<image file>
-- This updates listings.images by matching public.listings.title to each local folder name.

${statements.join("\n\n")}
`;

const manifest = manifestRows.map((row) => row.map(csvCell).join(",")).join("\n");

await fs.writeFile(outputSql, sql, "utf8");
await fs.writeFile(outputManifest, manifest, "utf8");
console.log(JSON.stringify({ outputSql, outputManifest, folders: folders.length, files: manifestRows.length - 1 }, null, 2));
