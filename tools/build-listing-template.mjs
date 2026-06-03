import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outDir = "outputs";
await fs.mkdir(outDir, { recursive: true });

const workbook = Workbook.create();
const main = workbook.worksheets.add("房源收集表");
const guide = workbook.worksheets.add("字段说明");
const scripts = workbook.worksheets.add("私信话术");

const headers = [
  "收集状态", "必填?", "房源标题", "房源类型", "发布者名字", "地区/小区",
  "具体地址", "租期类型", "几室", "几卫", "房型显示", "月租($)",
  "可入住/可租时间", "Utilities", "停车", "充电桩", "宠物", "性别要求",
  "近公交?", "客厅是否住人/客厅位", "家具", "洗衣", "押金/费用",
  "室友情况", "联系方式", "原帖链接", "照片链接/说明", "详细描述", "备注"
];

const examples = [
  [
    "待确认", "必填", "IV 2B2B 主卧暑期转租", "主卧/单间", "Anna",
    "Isla Vista / The Loop", "6500 block Del Playa Dr", "暑期转租",
    2, 2, "2B2B", 1450, "2026/06/15-2026/09/15",
    "不包，约$60/月", "有，$75/月", "无", "可养猫，需管理处批准",
    "女生优先", "是", "否", "带家具", "小区洗衣房", "押金$1000",
    "另外2位女生室友，安静", "IG: @example / 微信: example",
    "https://facebook.com/...", "卧室、客厅、厨房、卫生间各1张",
    "离UCSB骑车8分钟，房间采光好，可以看房。", ""
  ],
  [
    "已发布", "必填", "Goleta Studio 长租", "Studio/整套", "Mike",
    "Goleta", "Apartment name only", "长租",
    0, 1, "Studio", 2200, "2026/08/01起",
    "水垃圾包，电网自付", "有street parking", "不确定", "不允许宠物",
    "不限", "否", "否", "不带家具", "室内洗衣", "押金一个月租金",
    "无室友", "Email: example@email.com",
    "", "需要补照片",
    "适合一个人或情侣，近超市。", "地址暂不公开"
  ]
];

main.getRange("A1:AC1").values = [headers];
main.getRange("A2:AC3").values = examples;
main.getRange("A4:AC80").values = Array.from({ length: 77 }, () => Array(headers.length).fill(""));

main.getRange("A1:AC1").format = {
  fill: "#0F766E",
  font: { bold: true, color: "#FFFFFF" },
  wrapText: true,
};
main.getRange("A2:AC80").format = { wrapText: true };
main.getRange("L2:L80").format.numberFormat = "$#,##0";
main.getRange("A1:AC80").format.borders = {
  insideHorizontal: { style: "Continuous", color: "#D9E2E0" },
  insideVertical: { style: "Continuous", color: "#D9E2E0" },
};

const widths = [90, 70, 210, 130, 110, 170, 210, 110, 70, 70, 100, 90, 170, 160, 120, 90, 130, 120, 90, 150, 100, 120, 130, 190, 210, 220, 220, 300, 180];
widths.forEach((w, i) => {
  main.getRangeByIndexes(0, i, 1, 1).format.columnWidthPx = w;
});
main.getRange("A1:AC1").format.rowHeightPx = 42;
main.getRange("A2:AC80").format.rowHeightPx = 58;
main.freezePanes.freezeRows(1);
main.tables.add("A1:AC80", true, "ListingsCollectionTable");

main.getRange("A2:A80").dataValidation = { rule: { type: "list", values: ["待确认", "信息不全", "可发布", "已发布", "已下架"] } };
main.getRange("B2:B80").dataValidation = { rule: { type: "list", values: ["必填", "选填"] } };
main.getRange("D2:D80").dataValidation = { rule: { type: "list", values: ["整套", "主卧/单间", "次卧/单间", "合住房间", "客厅位", "Studio", "1B1B", "2B2B", "3B2B", "求租"] } };
main.getRange("H2:H80").dataValidation = { rule: { type: "list", values: ["长租", "短租", "暑期转租", "接lease", "sublease", "month-to-month", "不确定"] } };
main.getRange("P2:P80").dataValidation = { rule: { type: "list", values: ["有", "无", "不确定"] } };
main.getRange("S2:S80").dataValidation = { rule: { type: "list", values: ["是", "否", "不确定"] } };
main.getRange("T2:T80").dataValidation = { rule: { type: "list", values: ["是", "否", "客厅位", "不确定"] } };

guide.getRange("A1:D1").values = [["字段", "是否必须", "怎么问", "对应网站后台"]];
const guideRows = [
  ["房源标题", "必填", "一句话描述这个房源，比如 IV 2B2B 主卧暑期转租。", "title"],
  ["房源类型", "必填", "整套、单间、Studio、客厅位、转租、接lease？", "listing_type"],
  ["发布者名字", "建议填", "请问怎么称呼你？", "name"],
  ["地区/小区", "必填", "在哪个区域或小区？比如 IV、Goleta、The Loop。", "area"],
  ["具体地址", "必填/后台用", "完整地址是什么？如果不想公开，可前台只显示小区。", "address/location"],
  ["租期类型", "必填", "长租、短租、暑期转租，还是接lease？", "lease_type"],
  ["几室几卫", "必填", "这个房源是几室几卫？", "bedrooms/bathrooms"],
  ["房型显示", "必填", "写成 2B2B、1B1B、Studio 等。", "room_format"],
  ["月租", "必填", "月租多少？是每人价格还是整套价格？", "price"],
  ["可入住/可租时间", "必填", "什么时候可以入住？可租到什么时候？", "move_in_date"],
  ["Utilities", "必填", "水电网气包不包？不包的话大概多少钱？", "utilities"],
  ["停车", "必填", "有没有车位？免费还是收费？", "parking"],
  ["充电桩", "必填", "有没有 EV charging？不确定也可以写不确定。", "ev_charging"],
  ["宠物", "必填", "是否允许猫狗？需要额外押金吗？", "pets"],
  ["性别要求", "必填", "是否女生优先/男生优先/不限？", "gender_preference"],
  ["近公交", "必填", "附近有没有公交？到学校方便吗？", "nearby_bus"],
  ["客厅是否住人", "必填", "客厅是否有人住？或者这个房源是否是客厅位？", "living_room_as_bedroom"],
  ["联系方式", "必填", "最方便的联系方式是什么？微信/IG/Facebook/电话/邮箱。", "contact_info"],
  ["照片", "强烈建议", "能否发卧室、客厅、厨房、卫生间、小区照片？", "images"],
  ["原帖链接", "内部记录", "把 Facebook 原帖链接保存下来，方便回查和认领。", "source_url"],
  ["详细描述", "建议填", "室友、家具、洗衣、押金、看房方式、注意事项。", "description"]
];
guide.getRange(`A2:D${guideRows.length + 1}`).values = guideRows;
guide.getRange("A1:D1").format = { fill: "#0F766E", font: { bold: true, color: "#FFFFFF" } };
guide.getRange("A:D").format = { wrapText: true };
[160, 90, 420, 190].forEach((w, i) => guide.getRangeByIndexes(0, i, 1, 1).format.columnWidthPx = w);
guide.getRange("A2:D30").format.rowHeightPx = 48;
guide.freezePanes.freezeRows(1);
guide.tables.add(`A1:D${guideRows.length + 1}`, true, "FieldGuideTable");

scripts.getRange("A1:B1").values = [["场景", "可复制话术"]];
const chineseScript = `你好！我看到你发的房源，请问现在还 available 吗？

我在整理 UCSB / IV 附近的学生房源，会免费帮房东/转租同学发布到 Campiq 上，让更多学生看到。如果你愿意，我可以帮你把房源整理发布。

方便的话可以发我这些信息吗？
1. 月租是多少？是每人还是整套？
2. 什么时间可以入住/可租到什么时候？
3. 地址或小区名？
4. 房型是 Studio / 1B1B / 2B2B / 单间 / 合住房间？
5. 几室几卫？
6. Utilities 包不包含？不包的话大概多少钱？
7. 有没有车位？
8. 是否允许宠物？
9. 是否带家具？
10. 有没有性别要求？
11. 最方便的联系方式？
12. 可以发几张房源照片吗？

如果之后租出去了，你直接告诉我，我会帮你下架。`;

const englishScript = `Hi! I saw your housing post and wanted to ask if it is still available.

I'm helping collect UCSB / IV housing listings for Campiq, a student housing platform. We can help post your listing for free so more students can see it.

If you're interested, could you send me the basic info?
1. Monthly rent, per person or whole unit:
2. Available dates:
3. Address or apartment name:
4. Room type: studio / 1B1B / 2B2B / single room / shared room:
5. Bedrooms and bathrooms:
6. Utilities included or not:
7. Parking available?
8. Pets allowed?
9. Furnished or unfurnished?
10. Any gender preference?
11. Best contact method:
12. Photos of the place:

If it gets rented later, you can just message me and I'll help remove it.`;

scripts.getRange("A2:B3").values = [
  ["中文私信", chineseScript],
  ["English DM", englishScript],
];
scripts.getRange("A1:B1").format = { fill: "#0F766E", font: { bold: true, color: "#FFFFFF" } };
scripts.getRange("A:B").format = { wrapText: true };
scripts.getRange("A:A").format.columnWidthPx = 140;
scripts.getRange("B:B").format.columnWidthPx = 760;
scripts.getRange("A2:B3").format.rowHeightPx = 310;
scripts.freezePanes.freezeRows(1);

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(`${outDir}/Campiq房源信息收集模板.xlsx`);
