import fs from "node:fs/promises";
import path from "node:path";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.VITE_SUPABASE_URL || "https://yrjxadfyjaofmcnveohp.supabase.co";
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const bucketName = process.env.SUPABASE_STORAGE_BUCKET || "listing-images";
const imageRoot = process.env.CAMPIQ_IMAGE_ROOT || "E:/campiq图片";

if (!serviceRoleKey) {
  console.error("Missing SUPABASE_SERVICE_ROLE_KEY.");
  console.error("Set it in PowerShell first, then run this script again.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { persistSession: false },
});

const mimeByExt = {
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif",
};

function isImage(fileName) {
  return Object.hasOwn(mimeByExt, path.extname(fileName).toLowerCase());
}

function normalizeTitle(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "");
}

function safeStorageName(value) {
  const safe = String(value || "")
    .normalize("NFKD")
    .replace(/[^\w.\-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
  return safe || "listing";
}

function toStoragePath(folder, fileName) {
  return `${safeStorageName(folder)}/${safeStorageName(fileName)}`.replaceAll("\\", "/");
}

async function ensurePublicBucket() {
  const { data: buckets, error: listError } = await supabase.storage.listBuckets();
  if (listError) throw listError;

  const existing = buckets.find((bucket) => bucket.name === bucketName);
  if (existing) {
    if (!existing.public) {
      const { error } = await supabase.storage.updateBucket(bucketName, { public: true });
      if (error) throw error;
    }
    return;
  }

  const { error } = await supabase.storage.createBucket(bucketName, {
    public: true,
    fileSizeLimit: "20MB",
    allowedMimeTypes: Object.values(mimeByExt),
  });
  if (error) throw error;
}

async function getListingTitleMap() {
  const { data, error } = await supabase
    .from("listings")
    .select("id,title")
    .order("id", { ascending: true });
  if (error) throw error;

  const exact = new Map();
  const normalized = new Map();
  for (const listing of data || []) {
    exact.set(listing.title, listing);
    normalized.set(normalizeTitle(listing.title), listing);
  }
  return { exact, normalized };
}

async function uploadFolder(folderName) {
  const folderPath = path.join(imageRoot, folderName);
  const entries = await fs.readdir(folderPath, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile() && isImage(entry.name))
    .map((entry) => entry.name)
    .sort();

  const publicUrls = [];
  for (const fileName of files) {
    const localPath = path.join(folderPath, fileName);
    const storagePath = toStoragePath(folderName, fileName);
    const bytes = await fs.readFile(localPath);
    const contentType = mimeByExt[path.extname(fileName).toLowerCase()];

    const { error } = await supabase.storage
      .from(bucketName)
      .upload(storagePath, bytes, {
        contentType,
        upsert: true,
      });
    if (error) throw new Error(`${storagePath}: ${error.message}`);

    const { data } = supabase.storage.from(bucketName).getPublicUrl(storagePath);
    publicUrls.push(data.publicUrl);
  }
  return publicUrls;
}

await ensurePublicBucket();
const listingMaps = await getListingTitleMap();

const rootEntries = await fs.readdir(imageRoot, { withFileTypes: true });
const folders = rootEntries
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

let uploadedFiles = 0;
let updatedListings = 0;
const unmatched = [];

for (const folderName of folders) {
  const listing =
    listingMaps.exact.get(folderName) ||
    listingMaps.normalized.get(normalizeTitle(folderName));

  const urls = await uploadFolder(folderName);
  uploadedFiles += urls.length;

  if (!listing) {
    unmatched.push(folderName);
    console.log(`Uploaded ${urls.length} image(s), but no matching listing title: ${folderName}`);
    continue;
  }

  const { error } = await supabase
    .from("listings")
    .update({ images: urls })
    .eq("id", listing.id);
  if (error) throw error;

  updatedListings += 1;
  console.log(`Updated ${listing.title}: ${urls.length} image(s)`);
}

console.log("");
console.log(JSON.stringify({
  bucketName,
  imageRoot,
  folders: folders.length,
  uploadedFiles,
  updatedListings,
  unmatched,
}, null, 2));
