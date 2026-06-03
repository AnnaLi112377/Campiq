import fs from "node:fs/promises";

const inputPath = "C:/Users/DELL/Downloads/Copy of Campiq房源信息收集模板 - 房源收集表.csv";
const outputPath = "D:/ME/Campiq/campiq-improved/supabase/listings-import-ready.csv";
const noDateOutputPath = "D:/ME/Campiq/campiq-improved/supabase/listings-import-ready-no-date.csv";

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let inQuotes = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (char === "\"") {
      if (inQuotes && next === "\"") {
        cell += "\"";
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
      continue;
    }

    if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
      continue;
    }

    if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") i += 1;
      row.push(cell);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      cell = "";
      continue;
    }

    cell += char;
  }

  row.push(cell);
  if (row.some((value) => value !== "")) rows.push(row);
  return rows;
}

function csvCell(value) {
  const text = value === null || value === undefined ? "" : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, "\"\"")}"`;
  return text;
}

function clean(value) {
  return String(value ?? "").trim();
}

function getNumber(value, fallback = "") {
  const text = clean(value).replace(/,/g, "");
  const match = text.match(/\d+(?:\.\d+)?/);
  return match ? match[0] : fallback;
}

function unknown(value) {
  return clean(value) || "-";
}

function normalizeLease(value) {
  const text = clean(value).toLowerCase();
  return text.includes("长") || text.includes("long") ? "longTerm" : "shortTerm";
}

function normalizeDate(value) {
  const text = clean(value);
  if (!text) return "";

  const iso = text.match(/\b(20\d{2})[-/](\d{1,2})[-/](\d{1,2})\b/);
  if (iso) {
    const [, year, month, day] = iso;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  const monthNames = {
    january: "01",
    february: "02",
    march: "03",
    april: "04",
    may: "05",
    june: "06",
    july: "07",
    august: "08",
    september: "09",
    october: "10",
    november: "11",
    december: "12",
  };
  const monthDate = text.match(/\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})\b/i);
  if (monthDate) {
    const year = text.match(/\b(20\d{2})\b/)?.[1] || "2026";
    return `${year}-${monthNames[monthDate[1].toLowerCase()]}-${monthDate[2].padStart(2, "0")}`;
  }

  const numeric = text.match(/\b(\d{1,2})\/(\d{1,2})\/(20\d{2})\b/);
  if (numeric) {
    const [, month, day, year] = numeric;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }

  return "";
}

function contactJson(value) {
  const text = clean(value);
  const contact = {};
  const email = text.match(/\S+@\S+\.\S+/);
  const phone = text.match(/\b\d{3}[- .]?\d{3}[- .]?\d{4}\b/);

  if (email) contact.email = email[0];
  if (phone) contact.phone = phone[0];
  if (/wechat|微信/i.test(text)) contact.wechat = text;
  if (/instagram|ig|@/i.test(text) && !email) contact.instagram = text;
  if (text && Object.keys(contact).length === 0) contact.instagram = text;

  return JSON.stringify(contact);
}

function postgresTextArray(items) {
  const values = items.map(clean).filter(Boolean);
  if (!values.length) return "{}";
  return `{${values.map((item) => `"${item.replace(/"/g, "\\\"")}"`).join(",")}}`;
}

function imageArray(value) {
  const links = clean(value).split(/[\s,;]+/).filter((part) => /^https?:\/\//i.test(part));
  return postgresTextArray(links);
}

const raw = await fs.readFile(inputPath);
const text = new TextDecoder("utf-8").decode(raw).replace(/^\uFEFF/, "");
const rows = parseCsv(text);
const headers = rows[0].map(clean);
const index = Object.fromEntries(headers.map((header, i) => [header, i]));
const value = (row, header) => row[index[header]];

const outputHeaders = [
  "title",
  "listing_type",
  "post_mode",
  "name",
  "area",
  "address",
  "location",
  "lease_type",
  "bedrooms",
  "bathrooms",
  "room_format",
  "price",
  "min_budget",
  "max_budget",
  "move_in_date",
  "utilities",
  "parking",
  "ev_charging",
  "pets",
  "gender_preference",
  "nearby_bus",
  "living_room_as_bedroom",
  "description",
  "contact_info",
  "images",
  "tags",
  "verified",
];

const sourceRows = rows.slice(1).filter((row) => clean(value(row, "收集状态")) === "可发布");
const outputRows = sourceRows.map((row) => {
  const title = clean(value(row, "房源标题")) || "UCSB housing listing";
  const listingType = clean(value(row, "房源类型")) || "Rental";
  const area = clean(value(row, "地区/小区")) || "UCSB";
  const address = clean(value(row, "具体地址")) || area;
  const leaseRaw = value(row, "租期类型");
  const notes = [
    value(row, "详细描述"),
    clean(value(row, "可入住/可租时间")) ? `Available dates: ${value(row, "可入住/可租时间")}` : "",
    clean(value(row, "家具")) ? `Furniture: ${value(row, "家具")}` : "",
    clean(value(row, "洗衣")) ? `Laundry: ${value(row, "洗衣")}` : "",
    clean(value(row, "押金/费用")) ? `Deposit/fees: ${value(row, "押金/费用")}` : "",
    clean(value(row, "室友情况")) ? `Roommates: ${value(row, "室友情况")}` : "",
    clean(value(row, "备注")) ? `Notes: ${value(row, "备注")}` : "",
    clean(value(row, "原帖链接")) ? `Source: ${value(row, "原帖链接")}` : "",
  ].map(clean).filter(Boolean).join("\n\n");

  return [
    title,
    listingType,
    "offer",
    value(row, "发布者名字"),
    area,
    address,
    address,
    normalizeLease(leaseRaw),
    getNumber(value(row, "几室")),
    getNumber(value(row, "几卫")),
    clean(value(row, "房型显示")) || listingType,
    getNumber(value(row, "月租($)"), "0"),
    "0",
    "0",
    normalizeDate(value(row, "可入住/可租时间")),
    unknown(value(row, "Utilities")),
    unknown(value(row, "停车")),
    unknown(value(row, "充电桩")),
    unknown(value(row, "宠物")),
    unknown(value(row, "性别要求")),
    unknown(value(row, "近公交?")),
    unknown(value(row, "客厅是否住人/客厅位")),
    notes,
    contactJson(value(row, "联系方式（微信，ig，电话号码，邮箱皆可 用户愿意提供多少都可以至少一个）")),
    imageArray(value(row, "照片链接/说明")),
    postgresTextArray(["Housing", "UCSB", clean(leaseRaw)]),
    "true",
  ];
});

const csv = [outputHeaders, ...outputRows]
  .map((row) => row.map(csvCell).join(","))
  .join("\n");

const moveInDateIndex = outputHeaders.indexOf("move_in_date");
const csvWithoutMoveInDate = [outputHeaders, ...outputRows]
  .map((row) => row.filter((_, index) => index !== moveInDateIndex).map(csvCell).join(","))
  .join("\n");

await fs.writeFile(outputPath, csv, "utf8");
await fs.writeFile(noDateOutputPath, csvWithoutMoveInDate, "utf8");
console.log(JSON.stringify({ outputPath, noDateOutputPath, rows: outputRows.length }, null, 2));
