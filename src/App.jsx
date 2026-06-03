import React, { useMemo, useState, useEffect } from "react";
import { supabase } from "./lib/supabase";

function CampiqLogo() {
  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-amber-400 to-orange-600 shadow-sm">
      <svg viewBox="0 0 64 64" className="h-11 w-11" aria-hidden="true">
        <circle cx="32" cy="32" r="25" fill="#fff7ed" />
        <circle cx="32" cy="24" r="7" fill="#f97316" />
        <circle cx="22" cy="35" r="6" fill="#f59e0b" />
        <circle cx="42" cy="35" r="6" fill="#ea580c" />
        <path d="M17 39c8 9 22 12 30 0" fill="none" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" />
        <path d="M24 40c5 4 11 5 16 0" fill="none" stroke="#fed7aa" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const dictionary = {
  en: {
    safer: "UCSB housing, subleases, roommates, forums, and campus life.",
    listings: "Housing",
    roommate: "Roommates",
    forum: "Forum",
    how: "How it works",
    
    join: "Collaborate / Join / Feedback",
    submitListing: "＋ Post Housing",
    backHome: "← Back Home",
    badge: "UCSB housing, Isla Vista rentals, roommates, forum, and student resources",
    heroTitle: "Bring everything students need for UCSB life into one place.",
    heroText: "Campiq helps UCSB students find housing, subleases, Isla Vista rentals, compatible roommates, campus discussions, and student resources.",
    browse: "Browse Housing",
    findRoommate: "Find Roommates",
    submitPost: "Submit a Post",
    firstFocus: "First launch focus",
    listingTitle: "UCSB Housing Listings",
    listingText: "Campiq brings together UCSB housing, sublease, lease takeover, and Isla Vista rental posts from different student communities, making the listing pool broader than a single group chat or one social platform.",
    searchPlaceholder: "Search by area, room type, tag...",
    maxPrice: "Max price",
    reviewed: "✓ Reviewed",
    needsReview: "Needs review",
    viewDetails: "View Details",
    housingPageTitle: "UCSB Housing Search",
    housingPageIntro: "Browse UCSB housing posts, Isla Vista rentals, subleases, lease takeovers, and housing requests from local students and international students. Filter by long-term or short-term lease, room type, laundry, area, and price range.",
    roomType: "Room type",
    allTypes: "All types",
    wholeUnit: "Whole unit",
    masterRoom: "Master room",
    sideRoom: "Side bedroom",
    livingRoom: "Living room",
    laundry: "In-unit laundry",
    anyLaundry: "Any laundry",
    hasLaundry: "Has in-unit laundry",
    noLaundry: "No in-unit laundry / not listed",
    minPrice: "Min price",
    resetFilters: "Reset filters",
    leaseType: "Lease type",
    allLeaseTypes: "All lease types",
    shortTerm: "Short-term",
    longTerm: "Long-term",
    suggestionTitle: "Suggestions & feedback",
    suggestionPlaceholder: "Share your ideas, feature requests, or feedback for Campiq...",
    howTitle: "Why Campiq can have richer UCSB housing resources",
    howText: "Most UCSB housing and Isla Vista sublease information is separated across language groups, friend circles, Instagram, WeChat, and group chats. Campiq is designed to connect these channels first at UCSB, then support more campus communities.",
    reportTitle: "Report a suspicious listing",
    reportText: "Found a fake post, scam risk, wrong price, or outdated listing? Send us the link and details.",
    reportPlaceholder: "Paste listing link and explain the issue...",
    submitReport: "Submit Report",
    joinTitle: "Collaborate, join, or share feedback",
    joinText: "For collaboration, joining Campiq, feedback, or suggestions, contact us by email.",
    name: "Your name",
    contact: "Email / WeChat / IG",
    contactCampiq: "Contact Campiq",
    socialTitle: "Built for social sharing",
    socialText: "Every listing can later be shared to Instagram, WeChat, group chats, or friends. The website works as the database, and social platforms bring the traffic.",
    brandTitle: "Campiq UCSB official student platform",
    brandText: "Campiq is a UCSB-first student platform for housing, subleases, roommates, campus forum, and student resources. Students may search for Campiq UCSB, UCSB Campiq, UCSB housing, UCSB sublease, UCSB roommates, or joincampiq.com to find the official Campiq website.",
    brandKeywords: ["Campiq UCSB", "UCSB Campiq", "UCSB housing", "UCSB sublease", "UCSB roommates", "joincampiq.com"],
    footer: "© 2026 Campiq. Student housing information platform. First launch: UCSB housing, Isla Vista subleases, and roommate matching.",
    postTitle: "Post housing or request housing",
    postIntro: "Users can either post an available place or publish a housing request if they are looking for a lease, sublease, or roommate.",
    autoTranslate: "Future auto-translation system",
    autoTranslateText: "In the real product, users can post in English or Chinese. The system will store the original text and generate translated versions, so each viewer can choose their preferred language.",
    formName: "Your name",
    formContact: "Contact info",
    formTitle: "Listing title",
    formArea: "Area / neighborhood",
    formPrice: "Monthly rent",
    formDates: "Available dates",
    formDescriptionPlaceholder: "Describe room type, furniture, roommates, utilities, rules, and anything important...",
    originalLanguage: "Original post language",
    submitForReview: "Publish Now",
    postType: "What do you want to post?",
    offerHousing: "I have a place to rent out",
    seekHousing: "I am looking for housing / lease takeover",
    seekingTitle: "What are you looking for?",
    moveInTime: "Preferred move-in time",
    budgetRange: "Budget range",
    addPost: "Post housing request",
    age: "Age",
    year: "Year",
    nationality: "Nationality",
    interests: "Interests",
    smoking: "Smoking",
    weed: "Cannabis",
    schedule: "Sleep schedule",
    hasCar: "Has a car",
    parking: "Parking",
    evCharging: "EV charging",
    messagingTitle: "Private in-app messaging",
    messagingText: "Users can chat inside Campiq first instead of posting personal contact information publicly. This helps reduce spam, scams, and unwanted advertising messages.",
    drinking: "Drinking",
    pets: "Pets",
    roommateExpectation: "Roommate expectations",
    matchScore: "Match",
    smartMatchTitle: "Smart roommate matching",
    smartMatchText: "Users can fill out their own profile and also describe what they expect from a roommate. Campiq can compare dorm/apartment preference, lifestyle, budget, age, year, nationality preference, pets, smoking, drinking, and interests to recommend the best matches.",
    myProfile: "My profile",
    idealRoommate: "Ideal roommate",
    roommateTitle: "Find a roommate before school starts",
    roommateText: "A roommate page is a strong growth entry for incoming freshmen. They may not be ready to sign a lease yet, but they are already looking for compatible people.",
    roommateCta: "Explore Roommate Board",
    roommatePageTitle: "Roommate Matching Board",
    roommatePageIntro: "Students can post roommate preferences, lifestyle habits, budget, dorm/apartment plans, and contact info. Campiq can become useful before they even start looking for housing.",
    postRoommate: "Post Roommate Profile",
    viewProfile: "View Profile",
    forumTitle: "Campus Forum",
    forumIntro: "A searchable student forum where questions, course tips, professor reviews, dining hall opinions, second-hand posts, and event discussions can stay visible instead of disappearing in group chats.",
    forumCta: "Explore Forum",
    forumPost: "Start a discussion",
    forumSearch: "Search course tips, professors, food, events...",
    forumAll: "All topics",
    forumCourses: "Courses",
    forumProfessors: "Professors",
    forumFood: "Dining",
    forumSecondhand: "Second-hand",
    forumEvents: "Events",
    forumLife: "Campus life",
    messages: "Messages",
    comments: "comments",
    myPosts: "My Posts",
    myFavoritesTitle: "My Favorites",
    myFavoritesIntro: "Your saved housing posts, roommate profiles, and forum discussions.",
    myHousingPosts: "My Housing Posts",
    myRoommatePosts: "My Roommate Posts",
    myForumPosts: "My Forum Posts",
    save: "Save",
    saved: "Saved",
    unsave: "Remove from favorites",
    noFavorites: "No saved items yet",
    noPostsYet: "You have not posted anything yet",
    createDiscussionTitle: "Start a discussion",
    discussionTitle: "Discussion title",
    discussionCategory: "Topic category",
    discussionBody: "Write your question or post details...",
    discussionTags: "Tags, separated by commas",
    addImage: "Upload images later",
    publishDiscussion: "Publish discussion",
    steps: [
      "UCSB housing posts from local students and international students can appear in one shared space.",
      "UCSB housing, UCSB subleases, and UCSB roommate posts can be shown in English or Chinese, so language is no longer a barrier to finding housing.",
      "More connected campus communities mean more Isla Vista subleases, roommate options, lease takeovers, and apartment leads.",
    ],
  },
  zh: {
    safer: "UCSB 租房、转租、找室友、论坛和校园生活。",
    listings: "租房",
    roommate: "找室友",
    forum: "论坛",
    how: "运作方式",
    
    join: "合作 / 加入我们 / 意见反馈",
    submitListing: "＋ 发布租房信息",
    backHome: "← 返回首页",
    badge: "UCSB 租房、Isla Vista 房源、转租、找室友和校园资源",
    heroTitle: "把 UCSB 学生需要的校园生活资源集中到一个地方",
    heroText: "Campiq 帮 UCSB 学生寻找租房、转租、Isla Vista 房源、合适室友、校园讨论和学生资源。",
    browse: "浏览租房",
    findRoommate: "找室友",
    submitPost: "发布信息",
    firstFocus: "第一阶段重点",
    listingTitle: "UCSB 租房信息",
    listingText: "Campiq 把 UCSB 租房、转租、lease takeover 和 Isla Vista 房源集中起来，而不是只依赖某一个微信群、Instagram 账号或朋友圈。",
    searchPlaceholder: "搜索地区、房型、标签……",
    maxPrice: "最高价格",
    reviewed: "✓ 已审核",
    needsReview: "待审核",
    viewDetails: "查看详情",
    housingPageTitle: "UCSB 租房搜索",
    housingPageIntro: "浏览来自本地学生和国际学生的 UCSB 租房、Isla Vista 房源、转租、lease takeover 和求租信息。可以按长租短租、房型、套内洗衣、地区和价格区间筛选。",
    roomType: "房型",
    allTypes: "全部房型",
    wholeUnit: "整套",
    masterRoom: "主卧",
    sideRoom: "侧卧",
    livingRoom: "厅卧",
    laundry: "套内洗衣机",
    anyLaundry: "不限洗衣机",
    hasLaundry: "有套内洗衣机",
    noLaundry: "无套内洗衣机 / 未注明",
    minPrice: "最低价格",
    resetFilters: "重置筛选",
    leaseType: "租期类型",
    allLeaseTypes: "全部租期",
    shortTerm: "短租",
    longTerm: "长租",
    suggestionTitle: "意见与反馈",
    suggestionPlaceholder: "欢迎留下你对 Campiq 的建议、功能想法或反馈……",
    howTitle: "为什么 Campiq 的 UCSB 房源会更丰富",
    howText: "现在很多 UCSB 租房、Isla Vista 转租信息分散在中文圈、本地学生圈、Instagram、微信和各种群聊里。Campiq 的重点是先把 UCSB 的这些渠道连接起来，再支持更多校园社区。",
    reportTitle: "举报可疑房源",
    reportText: "如果你发现虚假房源、诈骗风险、价格错误或已过期信息，可以把链接和情况发给我们。",
    reportPlaceholder: "粘贴房源链接，并说明问题……",
    submitReport: "提交举报",
    joinTitle: "合作 / 加入我们 / 意见反馈",
    joinText: "如果你想合作、加入 Campiq，或有任何意见与建议，请通过邮箱联系我们",
    name: "你的名字",
    contact: "邮箱 / 微信 / IG",
    contactCampiq: "联系 Campiq",
    socialTitle: "为社交传播而设计",
    socialText: "未来每个房源都可以分享到 Instagram、微信、群聊或朋友。网站作为信息数据库，社交平台负责带来流量。",
    brandTitle: "Campiq UCSB 官方学生平台",
    brandText: "Campiq 是从 UCSB 开始的学生平台，提供 UCSB 租房、转租、找室友、校园论坛和学生资源。学生可以通过搜索 Campiq UCSB、UCSB Campiq、UCSB housing、UCSB 租房、UCSB 转租、UCSB 找室友或 joincampiq.com 找到 Campiq 官网。",
    brandKeywords: ["Campiq UCSB", "UCSB Campiq", "UCSB 租房", "UCSB 转租", "UCSB 找室友", "joincampiq.com"],
    footer: "© 2026 Campiq。学生租房信息平台。第一阶段：UCSB 租房、Isla Vista 转租和室友匹配。",
    postTitle: "发布房源 / 求租信息",
    postIntro: "用户既可以发布可出租的房源，也可以发布求租信息，比如想接 lease、找短租、找长租或找合租。",
    autoTranslate: "未来自动翻译系统",
    autoTranslateText: "正式产品里，用户可以用英文或中文发布。系统会保存原文，并自动生成翻译版本，这样每个浏览者都可以选择自己想看的语言。",
    formName: "你的名字",
    formContact: "联系方式",
    formTitle: "房源标题",
    formArea: "地区 / 小区",
    formPrice: "月租",
    formDates: "可租时间",
    formDescriptionPlaceholder: "写清楚房型、家具、室友、utilities、规则和其他重要信息……",
    originalLanguage: "原始发布语言",
    submitForReview: "直接发布",
    postType: "你想发布什么？",
    offerHousing: "我有房子要出租/转租",
    seekHousing: "我在找房 / 想接 lease",
    seekingTitle: "你想找什么样的房子？",
    moveInTime: "希望入住时间",
    budgetRange: "预算范围",
    addPost: "发布求租信息",
    age: "年龄",
    year: "年级",
    nationality: "国籍",
    interests: "兴趣爱好",
    smoking: "是否抽烟",
    weed: "是否抽大麻",
    schedule: "作息时间",
    hasCar: "是否有车",
    parking: "车位",
    evCharging: "充电设施",
    messagingTitle: "站内私信系统",
    messagingText: "用户可以先在 Campiq 站内聊天，而不是直接公开联系方式。这样能减少广告骚扰、诈骗和代写私信。",
    drinking: "是否喝酒",
    pets: "是否有宠物",
    roommateExpectation: "对室友的期待",
    matchScore: "匹配度",
    smartMatchTitle: "智能室友匹配",
    smartMatchText: "用户可以填写自己的介绍，也可以填写自己期待的室友类型。Campiq 可以根据宿舍/校外租房偏好、生活习惯、预算、年龄、年级、国籍偏好、宠物、抽烟喝酒和兴趣爱好来推荐最匹配的人。",
    myProfile: "我的资料",
    idealRoommate: "理想室友",
    roommateTitle: "开学前先找到合适室友",
    roommateText: "找室友页面很适合拉新生用户。新生可能还没开始签房子，但已经会提前找生活习惯合适的人。",
    roommateCta: "进入找室友板块",
    roommatePageTitle: "找室友匹配板块",
    roommatePageIntro: "学生可以发布室友偏好、生活习惯、预算、宿舍/公寓计划和联系方式。Campiq 可以在他们真正找房前就开始被使用。",
    postRoommate: "发布室友资料",
    viewProfile: "查看资料",
    forumTitle: "校园论坛",
    forumIntro: "一个可以长期搜索和保留的学生论坛。选课建议、教授评价、食堂体验、二手交易、活动信息和校园生活讨论不会像微信群一样很快被刷走。",
    forumCta: "进入论坛",
    forumPost: "发起讨论",
    forumSearch: "搜索水课、教授、食堂、活动……",
    forumAll: "全部话题",
    forumCourses: "选课/水课",
    forumProfessors: "教授评价",
    forumFood: "食堂/吃饭",
    forumSecondhand: "二手交易",
    forumEvents: "活动",
    forumLife: "校园生活",
    messages: "消息",
    comments: "条评论",
    myPosts: "我的帖子",
    myFavoritesTitle: "我的收藏",
    myFavoritesIntro: "你保存的租房信息、室友资料和论坛讨论。",
    myHousingPosts: "我的租房信息",
    myRoommatePosts: "我的室友贴",
    myForumPosts: "我的论坛讨论",
    save: "收藏",
    saved: "已收藏",
    unsave: "移除收藏",
    noFavorites: "还没有收藏过任何内容",
    noPostsYet: "你还没有发布任何内容",
    createDiscussionTitle: "发起讨论",
    discussionTitle: "讨论标题",
    discussionCategory: "话题分类",
    discussionBody: "写下你的问题或帖子内容……",
    discussionTags: "标签，用逗号分隔",
    addImage: "之后可上传图片",
    publishDiscussion: "发布讨论",
    steps: [
      "本地学生和国际学生的房源可以出现在同一个平台。",
      "房源可以用英文或中文展示，语言不再限制信息流动。",
      "连接的学生圈层越多，转租、室友和公寓线索就越丰富。",
    ],
  },
};

const missingRelationCodes = new Set(["42P01", "PGRST205"]);

function isMissingRelation(error) {
  return error && (missingRelationCodes.has(error.code) || /could not find the table|does not exist/i.test(error.message || ""));
}

function toArray(value, fallback = []) {
  return Array.isArray(value) ? value : fallback;
}

function getParkingLabel(value, lang = "en") {
  const labels = {
    "-": { en: "-", zh: "-" },
    Included: { en: "Parking included in rent", zh: "车位包含在房租里" },
    Paid: { en: "Parking available for extra fee", zh: "有车位，需要额外缴费" },
    None: { en: "No parking", zh: "没有停车位" },
    Street: { en: "Street parking / not guaranteed", zh: "街边停车 / 不保证车位" },
    Yes: { en: "Parking available", zh: "有车位" },
    No: { en: "No parking", zh: "没有停车位" },
  };
  return labels[value]?.[lang] || value || (lang === "zh" ? "未填写" : "Not listed");
}

function hasParking(value) {
  return Boolean(value && !["-", "No", "None"].includes(value));
}

function displayListingText(value, lang = "en") {
  const text = String(value || "");
  if (!text) return text;

  const exactPairs = [
    ["Student housing, roommates, and campus life", "学生租房、找室友和校园生活"],
    ["Campiq housing", "Campiq 房源"],
    ["Campiq Housing", "Campiq 房源"],
    ["Housing", "租房"],
    ["Rental", "出租"],
    ["Available dates", "可租时间"],
    ["Available now", "现在可入住"],
    ["View details", "查看详情"],
    ["Furniture", "家具"],
    ["Laundry", "洗衣"],
    ["Deposit/fees", "押金/费用"],
    ["Roommates", "室友情况"],
    ["Notes", "备注"],
    ["Source", "原帖链接"],
    ["Included", "已包含"],
    ["Not included", "不包含"],
    ["Not listed", "未填写"],
    ["Flexible", "灵活"],
    ["Utilities included", "包水电网"],
    ["All utilities included", "水电网全包"],
    ["Fully Furnished", "带家具"],
    ["Furnished", "带家具"],
    ["Shared Laundry Room", "公共洗衣房"],
    ["Parking included in rent", "车位包含在房租里"],
    ["Parking available for extra fee", "有车位，需要额外缴费"],
    ["Parking available", "有车位"],
    ["No parking", "无车位"],
    ["Street parking / not guaranteed", "街边停车 / 不保证车位"],
    ["Street parking", "街边停车"],
    ["Available (optional, cost not specified)", "可停车（选配，费用未注明）"],
    ["EV charging available", "可充电"],
    ["No EV charging", "不可充电"],
    ["No pets", "无宠物"],
    ["Pet friendly", "宠物友好"],
    ["Female", "女生"],
    ["Male", "男生"],
    ["Co-ed", "不限男女"],
    ["No preference", "不限"],
    ["Master room", "主卧"],
    ["Private room", "单间"],
    ["Private Room", "单间"],
    ["Private bathroom", "独立卫生间"],
    ["Shared bathroom", "共用卫生间"],
    ["Shared room", "合住房间"],
    ["Shared Room", "合住房间"],
    ["Shared Double", "双人间床位"],
    ["Bed Space", "床位"],
    ["Living room", "客厅"],
    ["Living Room", "客厅"],
    ["Whole unit", "整套"],
    ["Whole Unit", "整套"],
    ["Apartment", "公寓"],
    ["Apartments", "公寓"],
    ["Townhouse", "联排房"],
    ["Studio", "Studio"],
    ["Summer", "暑期"],
    ["Fall", "秋季"],
    ["Winter", "冬季"],
    ["Spring", "春季"],
    ["Sublease", "转租"],
    ["Lease Takeover", "接 lease"],
    ["Long-term", "长租"],
    ["Short-term / sublease", "短租 / 转租"],
    ["Short-term", "短租"],
    ["Yes", "是"],
    ["No", "否"],
    ["true", "是"],
    ["false", "否"],
    ["State Apartments", "State Apartments 公寓"],
    ["State 公寓s", "State Apartments 公寓"],
  ];
  const zhToEnPairs = exactPairs.map(([en, zh]) => [zh, en]);
  const pairs = lang === "zh" ? exactPairs : zhToEnPairs;
  const normalized = text.trim();
  const exact = pairs.find(([from]) => from.toLowerCase() === normalized.toLowerCase());
  if (exact) return exact[1];

  if (lang === "en") {
    return zhToEnPairs.reduce((current, [from, to]) => current.replaceAll(from, to), text);
  }

  const phrasePairs = pairs
    .filter(([from]) => from.length > 3)
    .sort((a, b) => b[0].length - a[0].length);
  let translated = phrasePairs.reduce((current, [from, to]) => {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return current.replace(new RegExp(`\\b${escaped}\\b`, "gi"), to);
  }, text);

  const wordPairs = [
    ["electricity", "电"],
    ["gas", "燃气"],
    ["water", "水"],
    ["trash", "垃圾费"],
    ["month", "月"],
    ["Available", "可入住"],
    ["walking distance", "步行距离"],
    ["beach", "海边"],
    ["kitchen", "厨房"],
    ["bathrooms", "卫生间"],
    ["bathroom", "卫生间"],
    ["bedrooms", "卧室"],
    ["bedroom", "卧室"],
    ["roommates", "室友"],
    ["roommate", "室友"],
    ["shared", "共用"],
    ["Bed", "卧室"],
    ["Bath", "卫生间"],
  ];
  translated = wordPairs.reduce((current, [from, to]) => {
    const escaped = from.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return current.replace(new RegExp(`\\b${escaped}\\b`, "gi"), to);
  }, translated);
  return translated;
}

function displayListingValue(value, lang = "en") {
  const text = value === null || value === undefined || value === "" ? "-" : String(value);
  if (text === "-") return "-";
  return displayListingText(text, lang);
}

function getContactRows(contact = {}, lang = "en") {
  const labels = {
    email: lang === "en" ? "Email" : "邮箱",
    phone: lang === "en" ? "Phone number" : "电话号码",
    instagram: "Instagram",
    wechat: lang === "en" ? "WeChat" : "微信",
  };
  const phonePattern = /(?:phone|tel|电话)|(?:\+?\d[\d\s().-]{6,}\d)/i;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const instagramPattern = /(?:instagram|insta|ig)\s*[:：]?|(?:^|\s)@[a-z0-9._]+/i;
  const rows = [
    ["email", contact.email],
    ["phone", contact.phone],
    ["instagram", contact.instagram],
    ["wechat", contact.wechat],
  ].flatMap(([key, rawValue]) => {
    if (!rawValue) return [];
    const value = String(rawValue).trim();
    const lower = value.toLowerCase();
    let type = key;
    if (key !== "phone" && phonePattern.test(value)) type = "phone";
    else if (key !== "email" && emailPattern.test(value)) type = "email";
    else if (key !== "phone" && (key === "instagram" || instagramPattern.test(value))) type = "instagram";
    else if (lower.includes("wechat") || lower.includes("weixin") || lower.includes("微信")) type = "wechat";

    const cleaned = value
      .replace(/^(?:email|e-mail|邮箱)\s*[:：]\s*/i, "")
      .replace(/^(?:phone number|phone|tel|电话)\s*[:：]\s*/i, "")
      .replace(/^(?:instagram|insta|ig)\s*[:：]\s*/i, "")
      .replace(/^(?:wechat|weixin|微信)\s*[:：]\s*/i, "")
      .trim();

    return [{ label: labels[type] || labels[key], value: cleaned || value }];
  });

  const seen = new Set();
  return rows.filter((row) => {
    const id = `${row.label}:${row.value}`.toLowerCase();
    if (seen.has(id)) return false;
    seen.add(id);
    return true;
  });
}

const pagePaths = {
  home: "/",
  housing: "/housing",
  roommate: "/roommates",
  forum: "/forum",
  messages: "/messages",
  chat: "/messages",
  submit: "/post",
  adminImport: "/admin-import",
  adminRoommateImport: "/admin-roommate-import",
  postRoommate: "/roommates/post",
  createDiscussion: "/forum/new",
  join: "/join",
  me: "/me",
  report: "/report",
};

const pathPages = {
  "/": "home",
  "/housing": "housing",
  "/roommates": "roommate",
  "/roommate": "roommate",
  "/forum": "forum",
  "/messages": "messages",
  "/post": "submit",
  "/submit": "submit",
  "/admin-import": "adminImport",
  "/admin-roommate-import": "adminRoommateImport",
  "/roommates/post": "postRoommate",
  "/forum/new": "createDiscussion",
  "/join": "join",
  "/me": "me",
  "/report": "report",
};

const pageMeta = {
  home: {
    title: "Campiq | UCSB Housing, Subleases, Roommates & Isla Vista Rentals",
    description: "Campiq helps UCSB students find housing, subleases, roommates, Isla Vista rentals, campus discussions, and student resources. Starting at UCSB, built to grow into a nationwide campus life platform.",
  },
  housing: {
    title: "UCSB Housing on Campiq | Subleases, Lease Takeovers & Isla Vista Rentals",
    description: "Browse UCSB housing, Isla Vista rentals, student subleases, lease takeovers, housing requests, and apartment leads on Campiq.",
  },
  roommate: {
    title: "UCSB Roommates on Campiq | Find Student Roommates",
    description: "Find compatible UCSB roommates by lifestyle, housing plans, budget, schedule, dorm or apartment preferences, pets, and campus habits.",
  },
  forum: {
    title: "Campiq UCSB Forum | Campus Discussions and Student Tips",
    description: "Explore searchable UCSB student discussions, course tips, professor reviews, campus life posts, events, second-hand listings, and housing questions.",
  },
  messages: {
    title: "Campiq Messages | Private Messages and Forum Notifications",
    description: "Check Campiq private messages, forum replies, housing alerts, and student notifications.",
  },
  chat: {
    title: "Campiq Chat | Student Messages",
    description: "Reply to Campiq private messages and student conversations.",
  },
  submit: {
    title: "Post UCSB Housing on Campiq",
    description: "Post a UCSB housing listing, Isla Vista sublease, lease takeover, roommate search, or housing request on Campiq.",
  },
  adminImport: {
    title: "Campiq Listing Import",
    description: "Review and import manually collected housing posts into Campiq.",
  },
  adminRoommateImport: {
    title: "Campiq Roommate Import",
    description: "Review and import manually collected roommate posts into Campiq.",
  },
  postRoommate: {
    title: "Post a UCSB Roommate Profile on Campiq",
    description: "Create a UCSB roommate profile with housing plans, lifestyle preferences, budget, dorm or apartment preferences, and contact options.",
  },
  createDiscussion: {
    title: "Start a UCSB Discussion on Campiq",
    description: "Ask UCSB questions, share course tips, post campus life updates, discuss housing, and start student discussions on Campiq.",
  },
  join: {
    title: "Join or Contact Campiq",
    description: "Contact Campiq to share feedback, collaborate, report issues, or help build a UCSB-first student platform that can grow to more campuses.",
  },
  me: {
    title: "My Campiq Account",
    description: "Sign in to Campiq to manage favorites, housing posts, roommate profiles, forum posts, and account activity.",
  },
  report: {
    title: "Report a Campiq Listing",
    description: "Report suspicious, outdated, inaccurate, or risky UCSB housing listings, Isla Vista subleases, or student posts to Campiq.",
  },
};

function normalizePath(pathname) {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/+$/, "");
}

function pageFromLocation() {
  if (typeof window === "undefined") return "home";
  return pathPages[normalizePath(window.location.pathname)] || "home";
}

function setMetaTag(selector, attribute, value) {
  if (typeof document === "undefined") return;
  const tag = document.head.querySelector(selector);
  if (tag) tag.setAttribute(attribute, value);
}

function formatListing(item) {
  const hasBedrooms = item.bedrooms !== null && item.bedrooms !== undefined && item.bedrooms !== "";
  const hasBathrooms = item.bathrooms !== null && item.bathrooms !== undefined && item.bathrooms !== "";
  const isStudioListing = item.room_format === "Studio" || item.listing_type === "Studio" || Number(item.bedrooms) === 0 && hasBedrooms;
  const roomFormat = item.room_format || (hasBedrooms ? (isStudioListing ? "Studio" : `${item.bedrooms} Bed${hasBathrooms ? ` ${item.bathrooms} Bath` : ""}`) : "Room format not listed");
  const tags = toArray(item.tags, ["Housing"]);
  const translated = item.translations || {};
  const titleEn = item.title_en || translated.title_en || translated.en?.title || item.title || "Untitled";
  const titleZh = item.title_zh || translated.title_zh || translated.zh?.title || item.title || "未命名";
  const typeEn = item.listing_type_en || translated.listing_type_en || translated.en?.listing_type || item.listing_type || "Rental";
  const typeZh = item.listing_type_zh || translated.listing_type_zh || translated.zh?.listing_type || item.listing_type || "租房";
  const descriptionEn = item.description_en || translated.description_en || translated.en?.description || item.description || "";
  const descriptionZh = item.description_zh || translated.description_zh || translated.zh?.description || item.description || "";
  const tagsEn = item.tags_en || translated.tags_en || translated.en?.tags || tags;
  const tagsZh = item.tags_zh || translated.tags_zh || translated.zh?.tags || tags;

  return {
    id: item.id,
    raw: item,
    createdBy: item.created_by || "",
    userEmail: item.user_email || "",
    title: { en: titleEn, zh: titleZh },
    type: { en: typeEn, zh: typeZh },
    price: item.price ?? 0,
    leaseType: item.lease_type || "shortTerm",
    roomFormat,
    roomType: item.listing_type || roomFormat,
    laundry: item.utilities === "Included",
    parking: hasParking(item.parking),
    parkingValue: item.parking || "",
    parkingLabel: { en: getParkingLabel(item.parking, "en"), zh: getParkingLabel(item.parking, "zh") },
    evCharging: item.ev_charging === "Yes",
    area: item.area || item.location || "Isla Vista",
    address: item.address || item.location || "",
    beds: { en: hasBedrooms ? (isStudioListing ? "Studio" : `${item.bedrooms} Bed`) : "Room not listed", zh: hasBedrooms ? (isStudioListing ? "Studio" : `${item.bedrooms} 卧室`) : "房型未填写" },
    bathrooms: hasBathrooms ? item.bathrooms : "",
    moveInDate: item.move_in_date || "",
    dates: { en: item.move_in_date ? `Available ${item.move_in_date}` : "Available now", zh: item.move_in_date ? `可入住 ${item.move_in_date}` : "现在可入住" },
    description: { en: descriptionEn, zh: descriptionZh },
    utilities: item.utilities || "Included",
    contact: item.contact_info || {},
    images: toArray(item.images),
    tags: { en: tagsEn, zh: tagsZh },
    verified: item.verified ?? true,
    location: item.location || item.address || "",
    budgetRange: { min: item.min_budget || 0, max: item.max_budget || 0 },
  };
}

function formatRoommate(r) {
  return {
    id: r.id,
    raw: r.data || {},
    match: r.data?.match || 75,
    name: r.data?.name || r.data?.name_en || r.data?.name_zh || "Anonymous",
    school: r.data?.school || "",
    age: r.data?.age || "",
    grade: r.data?.grade || r.data?.year || r.data?.year_en || r.data?.year_zh || "",
    gender: r.data?.gender || "",
    nationality: r.data?.nationality || r.data?.nationality_en || r.data?.nationality_zh || "",
    major: r.data?.major || "",
    housingPreference: r.data?.housingPreference || r.data?.housingPreference_en || r.data?.housingPreference_zh || "",
    sleepSchedule: r.data?.sleepSchedule || r.data?.sleepSchedule_en || r.data?.sleepSchedule_zh || "",
    smoking: r.data?.smoking || r.data?.smoking_en || r.data?.smoking_zh || "",
    drinking: r.data?.drinking || r.data?.drinking_en || r.data?.drinking_zh || "",
    pets: r.data?.pets || r.data?.pets_en || r.data?.pets_zh || "",
    weed: r.data?.weed || r.data?.weed_en || r.data?.weed_zh || "",
    hasCar: r.data?.hasCar || r.data?.hasCar_en || r.data?.hasCar_zh || "",
    cleanliness: r.data?.cleanliness || r.data?.cleanliness_en || r.data?.cleanliness_zh || "",
    interests: r.data?.interests || r.data?.interests_en || r.data?.interests_zh || "",
    about: r.data?.about || r.data?.about_en || r.data?.about_zh || "",
    preferredGender: r.data?.preferredGender || r.data?.preferredGender_en || r.data?.preferredGender_zh || "",
    preferredGrade: r.data?.preferredGrade || r.data?.preferredGrade_en || r.data?.preferredGrade_zh || "",
    preferredSleepSchedule: r.data?.preferredSleepSchedule || r.data?.preferredSleepSchedule_en || r.data?.preferredSleepSchedule_zh || "",
    preferredSmoking: r.data?.preferredSmoking || r.data?.preferredSmoking_en || r.data?.preferredSmoking_zh || "",
    preferredDrinking: r.data?.preferredDrinking || r.data?.preferredDrinking_en || r.data?.preferredDrinking_zh || "",
    preferredPets: r.data?.preferredPets || r.data?.preferredPets_en || r.data?.preferredPets_zh || "",
    preferredWeed: r.data?.preferredWeed || r.data?.preferredWeed_en || r.data?.preferredWeed_zh || "",
    budgetRange: r.data?.budgetRange || r.data?.budgetRange_en || r.data?.budgetRange_zh || "",
    moveInTime: r.data?.moveInTime || r.data?.moveInTime_en || r.data?.moveInTime_zh || "",
    otherExpectations: r.data?.otherExpectations || r.data?.otherExpectations_en || r.data?.otherExpectations_zh || "",
    contactEmail: r.data?.contactEmail || "",
    contactPhone: r.data?.contactPhone || "",
    contactWeChat: r.data?.contactWeChat || "",
    contactInstagram: r.data?.contactInstagram || "",
    status: r.data?.status || "Looking",
    photos: toArray(r.data?.photos),
    tags: r.data?.tags || r.data?.tags_en || r.data?.tags_zh || [],
  };
}

function formatForumPost(p) {
  const commentsData = toArray(p.data?.comments);
  return {
    id: p.id,
    category: p.data?.category || "life",
    title: { en: p.data?.title_en || p.data?.title || "Untitled", zh: p.data?.title_zh || p.data?.title || "未命名" },
    body: { en: p.data?.body_en || p.data?.body || "", zh: p.data?.body_zh || p.data?.body || "" },
    author: { en: p.data?.author_en || p.data?.author || "Anonymous", zh: p.data?.author_zh || p.data?.author || "匿名" },
    comments: commentsData.length,
    commentsData,
    tags: { en: p.data?.tags_en || p.data?.tags || [], zh: p.data?.tags_zh || p.data?.tags || [] },
    timestamp: p.data?.timestamp || p.created_at,
    raw: p.data || {},
  };
}

const listingTypeOptions = [
  { en: "Entire unit", zh: "整套出租" },
  { en: "Private room", zh: "单间出租" },
  { en: "Shared room", zh: "合住房间" },
  { en: "Bed space", zh: "床位" },
  { en: "Housing request", zh: "求租" },
  { en: "Roommate search", zh: "找室友" },
];

const budgetOptions = [0, 500, 750, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000];

const bedOptions = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5+"];
const bathOptions = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5+"];

const emptyImportDraft = {
  title: "",
  area: "",
  address: "",
  leaseType: "shortTerm",
  listingType: "Private room",
  bedrooms: "",
  bathrooms: "",
  price: "",
  moveInDate: "",
  utilities: "-",
  parking: "-",
  evCharging: "-",
  pets: "-",
  contactEmail: "",
  contactPhone: "",
  contactWeChat: "",
  contactInstagram: "",
  contactFacebook: "",
  description: "",
  imageUrls: "",
  sourceLink: "",
  roommateNeeded: false,
  roommateNeededCount: "",
  currentRoommates: "",
  permissionNeeded: true,
};

const emptyRoommateImportDraft = {
  name: "",
  school: "UCSB",
  age: "",
  grade: "",
  gender: "",
  nationality: "",
  major: "",
  housingPreference: "",
  sleepSchedule: "",
  smoking: "",
  drinking: "",
  pets: "",
  weed: "",
  hasCar: "",
  cleanliness: "",
  interests: "",
  budgetRange: "",
  moveInTime: "",
  preferredGender: "",
  preferredSleepSchedule: "",
  preferredSmoking: "",
  preferredDrinking: "",
  preferredPets: "",
  preferredWeed: "",
  otherExpectations: "",
  contactEmail: "",
  contactPhone: "",
  contactWeChat: "",
  contactInstagram: "",
  sourceLink: "",
  photoUrls: "",
  about: "",
  permissionNeeded: true,
};

function firstMatch(text, patterns, fallback = "") {
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match?.[1]) return match[1].trim();
  }
  return fallback;
}

function normalizeDateCandidate(value) {
  if (!value) return "";
  const text = String(value).trim();
  const iso = text.match(/\b(20\d{2})[-/](\d{1,2})[-/](\d{1,2})\b/);
  if (iso) {
    const [, year, month, day] = iso;
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  }
  const monthDay = text.match(/\b(1[0-2]|0?[1-9])[-/](3[01]|[12]\d|0?[1-9])\b/);
  if (monthDay) {
    const year = new Date().getFullYear();
    return `${year}-${monthDay[1].padStart(2, "0")}-${monthDay[2].padStart(2, "0")}`;
  }
  return "";
}

function parseHousingPost(rawText) {
  const text = String(rawText || "").replace(/\r/g, "\n").trim();
  const lower = text.toLowerCase();
  const urls = Array.from(new Set(text.match(/https?:\/\/[^\s)]+/gi) || []));
  const imageUrls = urls.filter((url) => /\.(png|jpe?g|webp|gif)(\?|#|$)/i.test(url));
  const sourceLink = urls.find((url) => /facebook\.com|fb\.com|instagram\.com|reddit\.com|docs\.google\.com/i.test(url)) || urls.find((url) => !imageUrls.includes(url)) || "";
  const lines = text.split("\n").map((line) => line.trim()).filter(Boolean);
  const titleLine = lines.find((line) => !/^https?:\/\//i.test(line) && line.length > 8) || "";

  const price = firstMatch(text, [
    /(?:rent|price|月租|租金|价格)\D{0,12}\$?\s*([0-9]{3,5})/i,
    /\$\s*([0-9]{3,5})(?:\s*\/?\s*(?:mo|month|月))?/i,
    /([0-9]{3,5})\s*(?:\/?\s*(?:mo|month|月)|刀|usd)/i,
  ]);
  const bedrooms = firstMatch(text, [
    /([0-9](?:\.5)?)\s*(?:bed|bd|br|beds|bedroom|bedrooms|卧|房)/i,
    /([0-9](?:\.5)?)\s*b\s*[\/, ]+\s*[0-9](?:\.5)?\s*b/i,
  ]);
  const bathrooms = firstMatch(text, [
    /([0-9](?:\.5)?)\s*(?:bath|ba|baths|bathroom|bathrooms|卫|卫生间)/i,
    /[0-9](?:\.5)?\s*b\s*[\/, ]+\s*([0-9](?:\.5)?)\s*b/i,
  ]);
  const moveInCandidate = firstMatch(text, [
    /(?:move[ -]?in|available|avail|入住|起租|可租|开始)\D{0,18}((?:20\d{2}[-/])?\d{1,2}[-/]\d{1,2})/i,
  ]);
  const area = firstMatch(text, [
    /(?:area|neighborhood|地区|区域|小区)\s*[:：-]?\s*([^\n,，]+)/i,
    /\b(Isla Vista|IV|Goleta|UCSB|Santa Barbara)\b/i,
  ], lower.includes("iv") ? "Isla Vista" : "");
  const address = firstMatch(text, [
    /(?:address|location|地址|位置)\s*[:：-]?\s*([^\n]+)/i,
    /\b(\d{3,5}\s+[A-Za-z0-9 .'-]+(?:St|Street|Rd|Road|Ave|Avenue|Dr|Drive|Ln|Lane|Trigo|Camino|Sabado|Del Playa|Sueno)[^\n,]*)/i,
  ]);
  const email = firstMatch(text, [/\b([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})\b/i]);
  const phone = firstMatch(text, [/(\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/]);
  const wechat = firstMatch(text, [/(?:wechat|weixin|微信)\s*[:：-]?\s*([A-Za-z][A-Za-z0-9_-]{4,})/i]);
  const instagram = firstMatch(text, [/(?:ig|instagram)\s*[:：@-]?\s*([A-Za-z0-9._]{3,})/i]);

  const listingType = lower.includes("studio") ? "Entire unit"
    : lower.includes("shared") || lower.includes("合住") ? "Shared room"
    : lower.includes("entire") || lower.includes("整套") ? "Entire unit"
    : "Private room";
  const leaseType = /long.?term|year|12 month|长租/i.test(text) ? "longTerm" : "shortTerm";
  const utilities = /utilities?.{0,20}(included|包)|水电.{0,8}包/i.test(text) ? "Included" : /utilit|水电/i.test(text) ? "Not included" : "-";
  const parking = /parking.{0,20}(included|yes|available)|车位.{0,8}(包|有)/i.test(text) ? "Included" : /street parking|街边/i.test(text) ? "Street" : /no parking|无车位|没有车位/i.test(text) ? "None" : "-";
  const pets = /pet friendly|pets allowed|可宠|宠物友好/i.test(text) ? "Allowed" : /no pets|not allowed|不可宠|无宠/i.test(text) ? "Not allowed" : "-";
  const roommateNeeded = /looking for.{0,40}(people|roommates?|tenants?)|take over a double|roommate needed|找室友|找人|招室友|缺室友|接房/i.test(text);
  const roommateNeededCount = firstMatch(text, [
    /looking for\s+(?:two|2)\s+(?:people|roommates?|tenants?)/i,
    /(?:need|looking for|找|招|缺)\D{0,8}([1-9])\D{0,8}(?:people|roommates?|人|室友)/i,
  ], /looking for\s+two/i.test(text) ? "2" : "");
  const currentRoommates = firstMatch(text, [
    /roommates?\s+are\s+([^\n.]+)/i,
    /(?:current roommates?|现有室友|室友情况)\s*[:：-]?\s*([^\n]+)/i,
  ]);

  return {
    ...emptyImportDraft,
    title: titleLine.slice(0, 120) || (area ? `${area} housing lead` : ""),
    area: area === "IV" ? "Isla Vista" : area,
    address,
    leaseType,
    listingType,
    bedrooms: lower.includes("studio") ? "0" : bedrooms,
    bathrooms: lower.includes("studio") ? "1" : bathrooms,
    price,
    moveInDate: normalizeDateCandidate(moveInCandidate),
    utilities,
    parking,
    pets,
    contactEmail: email,
    contactPhone: phone,
    contactWeChat: wechat,
    contactInstagram: instagram,
    contactFacebook: sourceLink && /facebook\.com|fb\.com/i.test(sourceLink) ? sourceLink : "",
    description: text,
    imageUrls: imageUrls.join("\n"),
    sourceLink,
    roommateNeeded,
    roommateNeededCount,
    currentRoommates,
    permissionNeeded: true,
  };
}

function parseRoommatePost(rawText) {
  const text = String(rawText || "").replace(/\r/g, "\n").trim();
  const lower = text.toLowerCase();
  const urls = Array.from(new Set(text.match(/https?:\/\/[^\s)]+/gi) || []));
  const photoUrls = urls.filter((url) => /\.(png|jpe?g|webp|gif)(\?|#|$)/i.test(url));
  const sourceLink = urls.find((url) => /facebook\.com|fb\.com|instagram\.com|reddit\.com|docs\.google\.com/i.test(url)) || urls.find((url) => !photoUrls.includes(url)) || "";

  const email = firstMatch(text, [/\b([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})\b/i]);
  const phone = firstMatch(text, [/(\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4})/]);
  const wechat = firstMatch(text, [/(?:wechat|weixin|微信)\s*[:：-]?\s*([A-Za-z][A-Za-z0-9_-]{4,})/i]);
  const instagram = firstMatch(text, [/(?:ig|instagram)\s*[:：@-]?\s*([A-Za-z0-9._]{3,})/i]);
  const name = firstMatch(text, [
    /(?:name|姓名|名字)\s*[:：-]?\s*([^\n,，]+)/i,
  ]);
  const age = firstMatch(text, [
    /(?:age|年龄)\s*[:：-]?\s*(\d{1,2})/i,
    /\b(\d{2})\s*(?:years old|yo|岁)\b/i,
  ]);
  const major = firstMatch(text, [/(?:major|专业)\s*[:：-]?\s*([^\n,，]+)/i]);
  const nationality = firstMatch(text, [/(?:nationality|国籍|来自)\s*[:：-]?\s*([^\n,，]+)/i]);
  const budget = firstMatch(text, [
    /(?:budget|预算)\D{0,12}(\$?\s*\d{3,5}(?:\s*[-~到至]\s*\$?\s*\d{3,5})?)/i,
    /\$\s*(\d{3,5}(?:\s*[-~]\s*\d{3,5})?)\s*(?:\/?\s*(?:mo|month|月))?/i,
  ]);
  const moveIn = firstMatch(text, [
    /(?:move[ -]?in|available|入住|起租|可租|开始)\D{0,20}([^\n,，]+)/i,
  ]);

  const grade = /freshman|大一|新生/i.test(text) ? "Freshman"
    : /sophomore|大二/i.test(text) ? "Sophomore"
    : /junior|大三/i.test(text) ? "Junior"
    : /senior|大四/i.test(text) ? "Senior"
    : /grad|graduate|研究生/i.test(text) ? "Graduate"
    : firstMatch(text, [/(?:grade|year|年级)\s*[:：-]?\s*([^\n,，]+)/i]);
  const gender = /female|girl|woman|女生|女/i.test(text) ? "Female"
    : /male|boy|man|男生|男/i.test(text) ? "Male"
    : "";
  const preferredGender = /female only|girls only|女生优先|只要女生|限女/i.test(text) ? "Female"
    : /male only|boys only|男生优先|只要男生|限男/i.test(text) ? "Male"
    : /no preference|不限|无所谓/i.test(text) ? "No preference"
    : "";
  const sleepSchedule = /early sleeper|早睡/i.test(text) ? "Early sleeper"
    : /late sleeper|night owl|晚睡|熬夜/i.test(text) ? "Late sleeper"
    : "";
  const smoking = /no smoking|don't smoke|不抽烟|不吸烟/i.test(text) ? "No" : /smok/i.test(text) || /抽烟|吸烟/i.test(text) ? "Yes" : "";
  const drinking = /no drinking|不喝酒/i.test(text) ? "No" : /drink|喝酒/i.test(text) ? "Sometimes" : "";
  const pets = /no pets|无宠|不养宠/i.test(text) ? "No pets" : /pet friendly|有宠|养宠|猫|狗/i.test(text) ? "Pet friendly" : "";
  const weed = /no weed|no cannabis|不抽大麻|不麻/i.test(text) ? "No" : /weed|cannabis|大麻/i.test(text) ? "Yes" : "";
  const hasCar = /has a car|have a car|有车/i.test(text) ? "Yes" : /no car|没车|无车/i.test(text) ? "No" : "";
  const housingPreference = /dorm|宿舍/i.test(text) ? "On-campus dorm"
    : /apartment|公寓|校外/i.test(text) ? "Off-campus apartment"
    : /both|都可以/i.test(text) ? "Open to both"
    : "";
  const cleanliness = /clean|干净|整洁/i.test(text) ? "Clean" : "";
  const interests = firstMatch(text, [/(?:interests?|hobbies|兴趣|爱好)\s*[:：-]?\s*([^\n]+)/i]);

  return {
    ...emptyRoommateImportDraft,
    name,
    school: /ucsb/i.test(text) ? "UCSB" : "UCSB",
    age,
    grade,
    gender,
    nationality,
    major,
    housingPreference,
    sleepSchedule,
    smoking,
    drinking,
    pets,
    weed,
    hasCar,
    cleanliness,
    interests,
    budgetRange: budget,
    moveInTime: moveIn,
    preferredGender,
    preferredSleepSchedule: sleepSchedule,
    preferredSmoking: smoking === "No" ? "No smoking" : "",
    preferredDrinking: drinking === "No" ? "No drinking" : "",
    preferredPets: pets === "No pets" ? "No pets" : "",
    preferredWeed: weed === "No" ? "No cannabis" : "",
    contactEmail: email,
    contactPhone: phone,
    contactWeChat: wechat,
    contactInstagram: instagram,
    sourceLink,
    photoUrls: photoUrls.join("\n"),
    about: text,
    permissionNeeded: true,
  };
}

const forumPosts = [
  {
    id: 1,
    category: "courses",
    title: { en: "Easy GE classes for first-year students?", zh: "大一有什么比较水的 GE 课？" },
    body: { en: "People keep asking this in class group chats. Let's collect real experiences by quarter and professor.", zh: "很多人都会在新生群里问这个问题。可以按 quarter 和教授整理大家真实上课体验。" },
    author: { en: "UCSB 2025 student", zh: "UCSB 2025 届学生" },
    comments: 28,
    tags: { en: ["GE", "Freshman", "Course planning"], zh: ["GE", "大一", "选课"] },
  },
  {
    id: 2,
    category: "professors",
    title: { en: "Professor review: what should I know before enrolling?", zh: "教授评价：选课前需要注意什么？" },
    body: { en: "A place to share workload, grading style, lecture style, and exam difficulty.", zh: "可以分享 workload、给分方式、讲课风格和考试难度。" },
    author: { en: "Transfer student", zh: "转学生" },
    comments: 16,
    tags: { en: ["Professor", "Review", "Grades"], zh: ["教授", "评价", "给分"] },
  },
  {
    id: 3,
    category: "food",
    title: { en: "Which dining hall is actually good this week?", zh: "这周哪个食堂比较好吃？" },
    body: { en: "Post daily dining hall opinions here so students do not have to ask in WeChat every day.", zh: "可以每天更新食堂体验，不用每天都在微信群里重新问。" },
    author: { en: "Local student", zh: "本地学生" },
    comments: 41,
    tags: { en: ["Dining", "Portola", "Campus food"], zh: ["食堂", "Portola", "校园吃饭"] },
  },
  {
    id: 4,
    category: "secondhand",
    title: { en: "Second-hand monitor, bike, furniture thread", zh: "二手显示器、自行车、家具集中帖" },
    body: { en: "A cleaner place for second-hand posts that are easy to find later.", zh: "把二手信息集中起来，之后也能搜索到。" },
    author: { en: "Campiq user", zh: "Campiq 用户" },
    comments: 12,
    tags: { en: ["Second-hand", "Furniture", "Electronics"], zh: ["二手", "家具", "电子产品"] },
  },
];

const roommateProfiles = [
  {
    id: 1,
    match: 90,
    name: { en: "Incoming freshman looking for dorm roommate", zh: "新生想找宿舍室友" },
    school: "UCSB 2026",
    age: 18,
    year: { en: "Freshman", zh: "大一" },
    nationality: { en: "China", zh: "中国" },
    budget: { en: "Dorm / shared room", zh: "宿舍 / 合住房间" },
    lifestyle: { en: "Quiet at night, clean, likes cooking", zh: "晚上安静，爱干净，喜欢做饭" },
    interests: { en: "Cooking, coffee shops, K-pop", zh: "做饭、咖啡店、K-pop" },
    smoking: { en: "No smoking", zh: "不抽烟" },
    drinking: { en: "Rarely drinks", zh: "很少喝酒" },
    pets: { en: "No pets, okay with cats", zh: "无宠物，可以接受猫" },
    expectation: { en: "Wants a clean roommate with a similar sleep schedule.", zh: "希望室友爱干净，作息接近。" },
    schedule: { en: "Sleeps before 1am", zh: "凌晨1点前睡" },
    weed: { en: "No cannabis", zh: "不抽大麻" },
    hasCar: { en: "No car", zh: "没车" },
    tags: { en: ["Female", "Non-smoker", "Early sleeper"], zh: ["女生", "不抽烟", "早睡"] },
  },
  {
    id: 2,
    match: 77,
    name: { en: "Looking for apartment roommates", zh: "想找公寓室友" },
    school: "UCSB / SBCC",
    age: 19,
    year: { en: "Sophomore", zh: "大二" },
    nationality: { en: "United States", zh: "美国" },
    budget: { en: "$1,300 - $1,800/month", zh: "$1,300 - $1,800/月" },
    lifestyle: { en: "Social but respectful, okay with guests", zh: "外向但尊重边界，可以接受朋友来访" },
    interests: { en: "Beach, gym, movies", zh: "海边、健身、电影" },
    smoking: { en: "No smoking indoors", zh: "室内不抽烟" },
    drinking: { en: "Social drinking", zh: "社交场合喝酒" },
    pets: { en: "Has no pets", zh: "没有宠物" },
    expectation: { en: "Wants someone friendly, respectful, and okay with occasional guests.", zh: "希望室友友好、尊重边界，可以接受偶尔有朋友来。" },
    schedule: { en: "Usually sleeps around 12am", zh: "一般12点左右睡" },
    weed: { en: "Okay with cannabis", zh: "可以接受大麻" },
    hasCar: { en: "Has a car", zh: "有车" },
    tags: { en: ["Apartment", "Goleta", "Bus access"], zh: ["公寓", "Goleta", "公交方便"] },
  },
  {
    id: 4,
    match: 68,
    name: { en: "Transfer student roommate search", zh: "转学生找室友" },
    school: "Transfer 2026",
    age: 20,
    year: { en: "Junior", zh: "大三" },
    nationality: { en: "Korea", zh: "韩国" },
    budget: { en: "Under $2,000/month", zh: "$2,000/月以内" },
    lifestyle: { en: "Study-focused, clean common areas", zh: "学习为主，公共区域保持整洁" },
    interests: { en: "Study cafes, hiking, photography", zh: "自习咖啡店、徒步、摄影" },
    smoking: { en: "Non-smoker", zh: "不抽烟" },
    drinking: { en: "Does not drink often", zh: "不常喝酒" },
    pets: { en: "No pets", zh: "无宠物" },
    expectation: { en: "Prefers a quiet roommate who keeps shared spaces clean.", zh: "偏好安静、能保持公共区域整洁的室友。" },
    schedule: { en: "Early sleeper", zh: "早睡" },
    weed: { en: "No cannabis", zh: "不抽大麻" },
    hasCar: { en: "Has a car", zh: "有车" },
    tags: { en: ["Quiet", "Clean", "Long-term"], zh: ["安静", "干净", "长期"] },
  },
];

function Button({ children, variant = "dark", className = "", ...props }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] active:scale-[0.98]";
  const styles = {
    dark: "bg-zinc-900 text-white hover:bg-orange-600",
    light: "bg-white text-zinc-900 border border-orange-200 hover:bg-orange-50",
    red: "bg-red-700 text-white hover:bg-red-800",
    orange: "bg-orange-500 text-white hover:bg-orange-600",
  };
  return <button className={`${base} ${styles[variant]} ${className}`} {...props}>{children}</button>;
}

function Card({ children, className = "", ...props }) {
  return <div className={`rounded-3xl bg-white shadow-sm ${className}`} {...props}>{children}</div>;
}

function Header({ lang, setLang, t, setPage, showBack = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(() => {
    if (typeof window === "undefined") return 0;
    return Number(window.localStorage.getItem("campiq-unread-count") || 0);
  });

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const syncUnreadCount = () => {
      setUnreadCount(Number(window.localStorage.getItem("campiq-unread-count") || 0));
    };
    window.addEventListener("campiq-unread-count", syncUnreadCount);
    window.addEventListener("storage", syncUnreadCount);
    return () => {
      window.removeEventListener("campiq-unread-count", syncUnreadCount);
      window.removeEventListener("storage", syncUnreadCount);
    };
  }, []);

  const go = (target) => {
    setPage(target);
    setMobileOpen(false);
  };

  const navItems = [
    { key: "home", label: "Home" },
    { key: "housing", label: t.listings },
    { key: "roommate", label: t.roommate },
    { key: "forum", label: t.forum },
    { key: "join", label: t.join },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-2 text-left">
          <CampiqLogo />
          <div>
            <div className="text-lg font-bold tracking-tight">Campiq</div>
          </div>
        </button>

        <nav className="hidden items-center justify-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          {!showBack && navItems.map((item) => (
            <button key={item.key} onClick={() => go(item.key)} className="hover:text-orange-500">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="h-10 rounded-xl border border-orange-200 bg-white px-3 text-sm outline-none">
            <option value="en">English</option>
            <option value="zh">中文</option>
          </select>
          {!showBack && (
            <button
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-orange-200 bg-white text-lg md:hidden"
              aria-label="Open mobile menu"
            >
              ☰
            </button>
          )}
          {!showBack && (
            <>
              <button
                onClick={() => go("messages")}
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-orange-200 bg-white text-zinc-700 transition hover:border-orange-300 hover:text-orange-600"
                aria-label={lang === "en" ? "Notifications and messages" : "通知和消息"}
                title={lang === "en" ? "Notifications and messages" : "通知和消息"}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                  <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute -right-1 -top-1 min-w-5 rounded-full bg-orange-500 px-1.5 py-0.5 text-[10px] font-bold leading-none text-white">
                    {unreadCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => go("me")}
                className="inline-flex h-10 items-center justify-center rounded-xl border border-orange-200 bg-white px-3 text-sm font-semibold text-zinc-700 transition hover:border-orange-300 hover:text-orange-600"
                aria-label={lang === "en" ? "My account" : "我的账号"}
                title={lang === "en" ? "My account" : "我的账号"}
              >
                {lang === "en" ? "Me" : "我的"}
              </button>
            </>
          )}
          {showBack ? (
            <Button variant="light" onClick={() => go("home")}>{t.backHome}</Button>
          ) : null}
        </div>
      </div>

      {mobileOpen && !showBack && (
        <div className="border-t bg-white px-4 py-4 md:hidden">
          <div className="grid gap-2 text-sm font-semibold text-zinc-700">
            {navItems.map((item) => (
              <button key={item.key} onClick={() => go(item.key)} className="rounded-2xl bg-stone-50 px-4 py-3 text-left">
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function CreateDiscussionPage({ lang, setLang, t, setPage, onCreatePost }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");

  const publish = async (e) => {
    e?.preventDefault?.();
    const payload = { title_en: title, title_zh: title, body_en: body, body_zh: body, category, tags: tags.split(",").map((s) => s.trim()).filter(Boolean), author_en: "Demo", author_zh: "演示用户" };
    await onCreatePost?.(payload);
    setPage("forum");
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-orange-800">
            {t.forumTitle}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{t.createDiscussionTitle}</h1>
          <p className="mt-3 text-zinc-600">
            {lang === "en"
              ? "Create a post that other students can search, save, and comment on later."
              : "发布一个可以被之后的学生搜索、保存和评论的帖子。"}
          </p>
        </div>

        <Card>
          <form onSubmit={publish} className="grid gap-5 p-6">
            <input value={title} onChange={(e) => setTitle(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={t.discussionTitle} />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-orange-300">
              <option value="">{t.discussionCategory}</option>
              <option value="courses">{t.forumCourses}</option>
              <option value="professors">{t.forumProfessors}</option>
              <option value="food">{t.forumFood}</option>
              <option value="secondhand">{t.forumSecondhand}</option>
              <option value="events">{t.forumEvents}</option>
              <option value="life">{t.forumLife}</option>
              <option value="listings">{t.listings}</option>
              <option value="roommate">{t.roommate}</option>
            </select>
            <textarea value={body} onChange={(e) => setBody(e.target.value)} className="h-52 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={t.discussionBody} />
            <input value={tags} onChange={(e) => setTags(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={t.discussionTags} />
            <div className="rounded-2xl border border-dashed bg-stone-50 p-6 text-center text-sm text-zinc-500">{t.addImage}</div>
            <div className="flex flex-wrap gap-3">
              <Button type="submit">{t.publishDiscussion}</Button>
              <Button variant="light" onClick={() => setPage("forum")}>{t.backHome}</Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}

function ForumPage({ lang, setLang, t, setPage, onSelectPost, forumPosts }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const posts = useMemo(() => {
    return (forumPosts || []).filter((post) => {
      const titleText = post?.title?.[lang] || (typeof post?.title === "string" ? post.title : "");
      const bodyText = post?.body?.[lang] || (typeof post?.body === "string" ? post.body : "");
      const tagsText = (post?.tags?.[lang] || []).map(tag => tag).join(" ");
      const text = `${titleText} ${bodyText} ${tagsText}`.toLowerCase();
      const matchesQuery = text.includes((query || "").toLowerCase());
      const matchesCategory = category === "all" || post.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category, lang]);

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-orange-800">
              {lang === "en" ? "Persistent student knowledge" : "可沉淀的学生信息"}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.forumTitle}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{t.forumIntro}</p>
          </div>
          <Card className="bg-gradient-to-br from-amber-50 to-orange-100">
            <div className="p-6">
              <h2 className="text-xl font-bold">{lang === "en" ? "Why forum?" : "为什么要做论坛？"}</h2>
              <p className="mt-1 text-sm text-zinc-600">
                {lang === "en" ? "Group chats are fast, but old information gets buried. Forum posts can be searched, commented on, updated, and shared across class years." : "微信群很快，但旧信息很容易被刷掉。论坛内容可以搜索、评论、更新，也能跨届保留下来。"}
              </p>
              <Button className="mt-5" onClick={() => setPage("createDiscussion")}>{t.forumPost}</Button>
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <div className="grid gap-4 p-5 md:grid-cols-[1fr_240px_auto]">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.forumSearch} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" />
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="all">{t.forumAll}</option>
              <option value="courses">{t.forumCourses}</option>
              <option value="professors">{t.forumProfessors}</option>
              <option value="food">{t.forumFood}</option>
              <option value="secondhand">{t.forumSecondhand}</option>
              <option value="events">{t.forumEvents}</option>
              <option value="life">{t.forumLife}</option>
            </select>
            <Button onClick={() => setPage("createDiscussion")}>{t.forumPost}</Button>
          </div>
        </Card>

        <div className="grid gap-5">
          {posts.map((post) => (
            <Card key={post.id} className="transition hover:-translate-y-1 hover:shadow-xl cursor-pointer" onClick={() => onSelectPost?.(post)}>
              <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-orange-800">
                    {post?.category === "courses" ? t.forumCourses : post?.category === "professors" ? t.forumProfessors : post?.category === "food" ? t.forumFood : post?.category === "secondhand" ? t.forumSecondhand : post?.category === "events" ? t.forumEvents : t.forumLife}
                  </span>
                  <span className="text-sm text-zinc-500">{post?.author?.[lang] || "Anonymous"}</span>
                </div>
                <h3 className="text-2xl font-bold">{post?.title?.[lang] || "Untitled"}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{post?.body?.[lang] || "No content"}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post?.tags?.[lang]?.map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] text-zinc-600">{tag}</span>)}
                </div>
                <div className="mt-5 flex items-center justify-between border-t pt-4 text-sm text-zinc-500">
                  <span>{post?.comments || 0} {t.comments}</span>
                  <Button variant="light" onClick={() => onSelectPost?.(post)}>{lang === "en" ? "Open discussion" : "查看讨论"}</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function SubmitPage({ lang, setLang, t, setPage, user, onCreateListing }) {
  const [postMode, setPostMode] = useState("offer");
  const [isStudio, setIsStudio] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    title: "",
    area: "",
    address: "",
    leaseType: "shortTerm",
    listingType: "",
    bedrooms: "",
    bathrooms: "",
    moveInDate: "",
    minBudget: "",
    maxBudget: "",
    price: "",
    utilities: "",
    parking: "",
    evCharging: "",
    pets: "",
    genderPref: "",
    nearbyBus: "",
    livingRoomBedroom: "",
    description: "",
    contactEmail: "",
    contactPhone: "",
    contactWeChat: "",
    contactInstagram: "",
    contactFacebook: "",
    images: [],
  });

  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }));

  const listingTypeOptions = [
    { en: "Entire unit", zh: "整套出租" },
    { en: "Private room", zh: "单间出租" },
    { en: "Shared room", zh: "合住房间" },
    { en: "Bed space", zh: "床位" },
  ];

  const parkingOptions = [
    { value: "-", en: "-", zh: "-" },
    { value: "Included", en: "Parking included in rent", zh: "车位包含在房租里" },
    { value: "Paid", en: "Parking available for extra fee", zh: "有车位，需要额外缴费" },
    { value: "None", en: "No parking", zh: "没有停车位" },
    { value: "Street", en: "Street parking / not guaranteed", zh: "街边停车 / 不保证车位" },
  ];

  const bedOptions = ["0", "0.5", "1", "1.5", "2", "2.5", "3", "3.5", "4", "4.5", "5+"];
  const budgetOptions = [0, 500, 750, 1000, 1250, 1500, 1750, 2000, 2500, 3000, 3500, 4000, 4500, 5000];

  const getLabel = (enText, zhText) => (lang === "zh" ? zhText : enText);

  const handleImageChange = (e) => update("images", Array.from(e.target.files || []));

  const handleSubmit = async () => {
    if (!user) {
      setShowAuthPrompt(true);
      return;
    }

    const errors = [];
    if (!form.title?.trim()) errors.push(getLabel("Listing title is required.", "房源标题为必填项。"));
    if (!form.area?.trim()) errors.push(getLabel("Area is required.", "地区为必填项。"));
    if (postMode === "offer" && !form.address?.trim()) errors.push(getLabel("Exact address is required.", "具体地址为必填项。"));
    if (!form.moveInDate) errors.push(getLabel("Available date is required.", "可入住日期为必填项。"));
    if (postMode === "offer" && !form.listingType) errors.push(getLabel("Listing type is required.", "房源类型为必填项。"));
    if (postMode === "offer" && !form.utilities) errors.push(getLabel("Utilities selection is required.", "水电费选择为必填项。"));
    if (postMode === "offer" && !form.parking) errors.push(getLabel("Parking selection is required.", "车位选择为必填项。"));
    if (postMode === "offer" && !form.evCharging) errors.push(getLabel("EV charging selection is required.", "充电设施选择为必填项。"));
    if (postMode === "offer" && !form.pets) errors.push(getLabel("Pets preference is required.", "宠物偏好为必填项。"));
    if (postMode === "offer" && !form.genderPref) errors.push(getLabel("Gender preference is required.", "性别要求为必填项。"));
    if (postMode === "offer" && !form.nearbyBus) errors.push(getLabel("Nearby bus selection is required.", "公交可达性为必填项。"));
    if (postMode === "offer" && !form.livingRoomBedroom) errors.push(getLabel("Living room / bedroom layout selection is required.", "厅卧结构为必填项。"));
    if (postMode === "offer" && !isStudio) {
      if (!form.bedrooms) errors.push(getLabel("Bedrooms is required.", "卧室数量为必填项。"));
      if (!form.bathrooms) errors.push(getLabel("Bathrooms is required.", "卫生间数量为必填项。"));
    }
    if (!form.contactEmail && !form.contactPhone && !form.contactWeChat && !form.contactInstagram && !form.contactFacebook) {
      errors.push(getLabel("You must provide at least one contact method before publishing.", "发布前必须提供至少一种联系方式。"));
    }
    if (postMode === "offer" && !form.price) errors.push(getLabel("Monthly rent is required.", "月租为必填项。"));
    if (postMode === "seek" && !form.minBudget && !form.maxBudget) errors.push(getLabel("Budget range is required for requests.", "求租时预算范围为必填项。"));

    if (errors.length > 0) {
      setValidationErrors(errors);
      setFeedback(errors[0]);
      return;
    }

    setIsSubmitting(true);
    setFeedback("");
    setValidationErrors([]);

    const payload = {
      title: form.title || form.area || (postMode === "offer" ? "Rental listing" : "Housing need"),
      listing_type: form.listingType || (postMode === "offer" ? "Entire unit" : "Housing request"),
      preferred_room_type: form.listingType || "",
      post_mode: postMode,
      name: form.name,
      area: form.area,
      address: form.address,
      location: form.address || form.area,
      lease_type: form.leaseType,
      bedrooms: isStudio ? 0 : Number(form.bedrooms || 0),
      bathrooms: isStudio ? 1 : Number(form.bathrooms || 0),
      room_format: isStudio ? "Studio" : `${form.bedrooms} Bed ${form.bathrooms} Bath`,
      price: Number(form.price) || 0,
      min_budget: Number(form.minBudget) || 0,
      max_budget: Number(form.maxBudget) || 0,
      move_in_date: form.moveInDate,
      utilities: form.utilities,
      parking: form.parking,
      ev_charging: form.evCharging,
      pets: form.pets,
      gender_preference: form.genderPref,
      nearby_bus: form.nearbyBus,
      living_room_as_bedroom: form.livingRoomBedroom,
      description: form.description,
      contact_info: {
        email: form.contactEmail,
        phone: form.contactPhone,
        wechat: form.contactWeChat,
        instagram: form.contactInstagram,
        facebook: form.contactFacebook,
      },
      images: postMode === "offer" ? form.images || [] : [],
      created_by: user?.id,
      user_email: user?.email,
    };

    const result = await onCreateListing(payload);
    setIsSubmitting(false);
    if (result) {
      setFeedback(postMode === "offer"
        ? (lang === "zh" ? "房源已提交，正在载入最新列表。" : "Listing submitted. Loading the newest listings.")
        : (lang === "zh" ? "求租需求已提交。" : "Housing request submitted."));
      setTimeout(() => setPage("housing"), 1000);
    } else {
      setFeedback(lang === "zh" ? "提交失败，请重试。" : "Submit failed. Please try again.");
    }
  };


  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">{t.postTitle}</h1>
          <p className="mt-3 max-w-2xl text-zinc-600">{t.postIntro}</p>
          <div className="mt-6 grid gap-3 rounded-3xl bg-white p-2 shadow-sm sm:grid-cols-2">
            <button onClick={() => setPostMode("offer")} className={`rounded-2xl px-5 py-3 text-sm font-semibold ${postMode === "offer" ? "bg-zinc-900 text-white" : "bg-stone-50 text-zinc-700"}`}>
              {t.offerHousing}
            </button>
            <button onClick={() => setPostMode("seek")} className={`rounded-2xl px-5 py-3 text-sm font-semibold ${postMode === "seek" ? "bg-zinc-900 text-white" : "bg-stone-50 text-zinc-700"}`}>
              {t.seekHousing}
            </button>
          </div>
        </div>

        {!user && showAuthPrompt ? (
          <Card className="mb-6 bg-amber-50">
            <div className="p-6">
              <h2 className="text-xl font-bold">{getLabel("Login or register to post housing and contact other students.", "登录或注册后，可发布房源并与用户联系。")}</h2>
              <p className="mt-2 text-zinc-600">{getLabel("Visit the Me page and create an account to save posts, upload images, and manage listings.", "请前往“我”页面创建账号，保存帖子、上传图片并管理房源。")}</p>
              <Button className="mt-5" onClick={() => setPage("me")}>{getLabel("Go to Me", "前往“我”页面")}</Button>
            </div>
          </Card>
        ) : null}

        <Card>
          <div className="border-b px-6 py-5">
            <h2 className="text-2xl font-bold">{postMode === "offer" ? t.offerHousing : t.seekingTitle}</h2>
            <p className="mt-2 text-sm text-zinc-500">{postMode === "offer" ? getLabel("Fill out the details of the place you want to rent or sublease.", "填写你想出租/转租的房源信息。") : getLabel("Fill out the housing you need so matched roommates or landlords can reach you.", "填写你的求租需求，让有房源的人联系你。")}</p>
          </div>
          {validationErrors.length > 0 && (
            <div className="border-b px-6 py-5 bg-rose-50 text-rose-700">
              <p className="font-semibold">{lang === "zh" ? "请修正以下问题：" : "Please fix the following issues:"}</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                {validationErrors.map((error, index) => <li key={index}>{error}</li>)}
              </ul>
            </div>
          )}
          <div className="grid gap-5 p-6 md:grid-cols-2">
            <input value={form.name} onChange={(e) => update("name", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Contact name (optional)", "联系人姓名（选填）")} />
            <input value={form.title} onChange={(e) => update("title", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={postMode === "offer" ? getLabel("Listing title", "房源标题") : getLabel("Housing request title", "求租标题")} />
            <input value={form.area} onChange={(e) => update("area", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Area / Neighborhood", "地区 / 小区")} />
            <select value={form.leaseType} onChange={(e) => update("leaseType", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="shortTerm">{getLabel("Short-term", "短租")}</option>
              <option value="longTerm">{getLabel("Long-term", "长租")}</option>
            </select>
            <select value={form.listingType} onChange={(e) => update("listingType", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{postMode === "offer" ? getLabel("Listing Type", "房源类型") : getLabel("Preferred room type", "偏好房型")}</option>
              {listingTypeOptions.map((opt) => (
                <option key={opt.en} value={opt.en}>{lang === "zh" ? opt.zh : opt.en}</option>
              ))}
            </select>
            {postMode === "offer" && (
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <input type="checkbox" checked={isStudio} onChange={(e) => setIsStudio(e.target.checked)} className="h-4 w-4" />
                  {getLabel("Studio", "Studio")}
                </label>
              </div>
            )}
            {postMode === "offer" && !isStudio && (
              <>
                <div className="md:col-span-2 rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="mb-3 text-sm font-semibold text-zinc-900">{getLabel("Layout / Room structure", "Layout / 房型结构")}</div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <select value={form.bedrooms} onChange={(e) => update("bedrooms", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                      <option value="" disabled>{getLabel("Bedrooms", "卧室")}</option>
                      {bedOptions.map((val) => <option key={val} value={val}>{val}</option>)}
                    </select>
                    <select value={form.bathrooms} onChange={(e) => update("bathrooms", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                      <option value="" disabled>{getLabel("Bathrooms", "卫生间")}</option>
                      {bedOptions.map((val) => <option key={val} value={val}>{val}</option>)}
                    </select>
                  </div>
                </div>
              </>
            )}
            {postMode === "seek" && (
              <div className="md:col-span-2 rounded-3xl border border-zinc-200 bg-zinc-50 p-4">
                <div className="mb-3 text-sm font-semibold text-zinc-900">{getLabel("Budget Range / 预算范围", "Budget Range / 预算范围")}</div>
                <div className="grid gap-4 md:grid-cols-2">
                  <select value={form.minBudget} onChange={(e) => update("minBudget", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                    <option value="" disabled>{getLabel("Min budget", "最低预算")}</option>
                    {budgetOptions.map((val) => (
                      <option key={val} value={val}>{val === 0 ? getLabel("No minimum", "无下限") : `$${val}`}</option>
                    ))}
                  </select>
                  <select value={form.maxBudget} onChange={(e) => update("maxBudget", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                    <option value="" disabled>{getLabel("Max budget", "最高预算")}</option>
                    {budgetOptions.map((val) => (
                      <option key={val} value={val}>{val === 0 ? getLabel("No limit", "无上限") : `$${val}${val >= 5000 ? "+" : ""}`}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            {postMode === "offer" && (
              <input value={form.price} onChange={(e) => update("price", e.target.value)} type="number" min="0" className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Monthly rent $", "月租 $")} />
            )}
            <input value={form.moveInDate} onChange={(e) => update("moveInDate", e.target.value)} type="date" className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Move-in date", "入住日期")} />
            {postMode === "offer" && (
              <>
                <select value={form.utilities} onChange={(e) => update("utilities", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                  <option value="" disabled>{getLabel("Utilities", "水电费")}</option>
                  <option value="-">-</option>
                  <option value="Included">{getLabel("Utilities included", "包水电费")}</option>
                  <option value="Not included">{getLabel("Utilities not included", "不包水电费")}</option>
                  <option value="Partially included">{getLabel("Utilities partially included", "部分包水电费")}</option>
                </select>
                <select value={form.parking} onChange={(e) => update("parking", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                  <option value="" disabled>{getLabel("Parking", "车位")}</option>
                  {parkingOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{lang === "zh" ? opt.zh : opt.en}</option>
                  ))}
                </select>
                <select value={form.evCharging} onChange={(e) => update("evCharging", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                  <option value="" disabled>{getLabel("EV Charging", "充电设施")}</option>
                  <option value="-">-</option>
                  <option value="Yes">{getLabel("EV charging: Yes", "有")}</option>
                  <option value="No">{getLabel("EV charging: No", "没有")}</option>
                </select>
              </>
            )}
            <select value={form.pets} onChange={(e) => update("pets", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{getLabel("Pets", "宠物")}</option>
              <option value="-">-</option>
              <option value="Allowed">{getLabel("Pets: Allowed", "可接受")}</option>
              <option value="Not allowed">{getLabel("Pets: Not allowed", "不可接受")}</option>
            </select>
            <select value={form.genderPref} onChange={(e) => update("genderPref", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{getLabel("Gender Preference", "性别要求")}</option>
              <option value="-">-</option>
              <option value="No preference">{getLabel("No preference", "不限")}</option>
              <option value="Male">{getLabel("Male", "男")}</option>
              <option value="Female">{getLabel("Female", "女")}</option>
            </select>
            <select value={form.nearbyBus} onChange={(e) => update("nearbyBus", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{getLabel("Nearby bus", "公交是否方便")}</option>
              <option value="-">-</option>
              <option value="Yes">{getLabel("Yes", "是")}</option>
              <option value="No">{getLabel("No", "否")}</option>
            </select>
            {postMode === "offer" && (
              <select value={form.livingRoomBedroom} onChange={(e) => update("livingRoomBedroom", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                <option value="" disabled>{getLabel("Living room as bedroom", "客厅是否做卧室")}</option>
                <option value="-">-</option>
                <option value="Yes">{getLabel("Yes", "是")}</option>
                <option value="No">{getLabel("No", "否")}</option>
              </select>
            )}
            {postMode === "offer" && (
              <input value={form.address} onChange={(e) => update("address", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={getLabel("Exact address / location", "具体地址 / 位置")} />
            )}
            {postMode === "offer" && form.address && (
              <div className="md:col-span-2 overflow-hidden rounded-3xl border border-zinc-200 bg-white">
                <iframe
                  title="Address preview"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(form.address)}&output=embed`}
                  className="h-52 w-full border-0"
                  loading="lazy"
                />
              </div>
            )}
            <textarea value={form.description} onChange={(e) => update("description", e.target.value)} className="h-40 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={getLabel("Describe layout, furniture, roommates, utilities, rules, and other important details...", "写清楚房型、家具、室友、收费、规则和其他重要信息...")} />
            {postMode === "offer" && (
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-700">{getLabel("Upload listing images", "上传房源图片")}</label>
                <input type="file" multiple accept="image/*" onChange={handleImageChange} className="mt-2 block w-full text-sm text-zinc-900 file:mr-4 file:rounded-full file:border-0 file:bg-orange-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-orange-700" />
                <p className="mt-2 text-sm text-zinc-500">{getLabel("Upload photos to show the room, kitchen, bathroom, entrance, and other useful details.", "上传照片展示房间、厨房、卫生间、入口和其他有用细节")}</p>
              </div>
            )}
            <div className="md:col-span-2 rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-lg font-semibold">{getLabel("Contact details (at least one required)", "联系信息（至少填写一项）")}</h3>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <input value={form.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Email", "邮箱")} />
                <input value={form.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Phone number", "手机号")} />
                <input value={form.contactWeChat} onChange={(e) => update("contactWeChat", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("WeChat ID", "微信号")} />
                <input value={form.contactInstagram} onChange={(e) => update("contactInstagram", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Instagram / other", "Instagram / 其他")} />
                <input value={form.contactFacebook} onChange={(e) => update("contactFacebook", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={getLabel("Facebook / additional contact", "Facebook / 其他联系方式")} />
              </div>
            </div>
            <div className="md:col-span-2">
              <Button variant="orange" type="button" className="w-full" onClick={handleSubmit} disabled={isSubmitting}>
                {isSubmitting ? getLabel("Submitting…", "提交中…") : (postMode === "offer" ? t.submitForReview : t.addPost)}
              </Button>
              {feedback ? <p className="mt-3 text-sm text-zinc-600">{feedback}</p> : null}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

function AdminImportPage({ lang, setLang, t, setPage, onCreateListing }) {
  const [rawText, setRawText] = useState("");
  const [draft, setDraft] = useState(emptyImportDraft);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const label = (enText, zhText) => (lang === "zh" ? zhText : enText);
  const update = (field, value) => setDraft((current) => ({ ...current, [field]: value }));

  const parsePost = () => {
    if (!rawText.trim()) {
      setFeedback(label("Paste the post text, copied details, or OCR text first.", "请先粘贴帖子文字、复制内容或截图 OCR 后的文字。"));
      return;
    }
    setDraft(parseHousingPost(rawText));
    setFeedback(label("Parsed. Please review every field before importing.", "已解析。导入前请逐项检查。"));
  };

  const importListing = async () => {
    const errors = [];
    if (!draft.title.trim()) errors.push(label("Title is required.", "标题为必填项。"));
    if (!draft.area.trim()) errors.push(label("Area is required.", "地区为必填项。"));
    if (!draft.price) errors.push(label("Monthly rent is required.", "月租为必填项。"));
    if (!draft.moveInDate) errors.push(label("Move-in date is required.", "入住日期为必填项。"));
    if (!draft.contactEmail && !draft.contactPhone && !draft.contactWeChat && !draft.contactInstagram && !draft.contactFacebook) {
      errors.push(label("At least one contact or source contact is required.", "至少需要一种联系方式或来源联系方式。"));
    }
    if (errors.length) {
      setFeedback(errors.join(" "));
      return;
    }

    setIsSubmitting(true);
    setFeedback("");
    const imageUrls = draft.imageUrls
      .split(/\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
    const descriptionParts = [
      draft.description,
      draft.sourceLink ? `Source: ${draft.sourceLink}` : "",
      draft.permissionNeeded ? "Import note: permission needed before public verification." : "Import note: permission reviewed by admin.",
    ].filter(Boolean);
    const hasDraftBedrooms = draft.bedrooms !== "";
    const hasDraftBathrooms = draft.bathrooms !== "";
    const draftIsStudio = String(draft.bedrooms) === "0" && String(draft.bathrooms || "1") === "1";
    const importedRoomFormat = hasDraftBedrooms
      ? (draftIsStudio ? "Studio" : `${draft.bedrooms} Bed${hasDraftBathrooms ? ` ${draft.bathrooms} Bath` : ""}`)
      : "";
    const payload = {
      title: draft.title,
      listing_type: draft.listingType,
      post_mode: "offer",
      area: draft.area,
      address: draft.address,
      location: draft.address || draft.area,
      lease_type: draft.leaseType,
      bedrooms: hasDraftBedrooms ? Number(draft.bedrooms) : null,
      bathrooms: hasDraftBathrooms ? Number(draft.bathrooms) : null,
      room_format: importedRoomFormat,
      price: Number(draft.price) || 0,
      move_in_date: draft.moveInDate,
      utilities: draft.utilities,
      parking: draft.parking,
      ev_charging: draft.evCharging,
      pets: draft.pets,
      description: descriptionParts.join("\n\n"),
      contact_info: {
        email: draft.contactEmail,
        phone: draft.contactPhone,
        wechat: draft.contactWeChat,
        instagram: draft.contactInstagram,
        facebook: draft.contactFacebook,
        source_link: draft.sourceLink,
        roommate_needed: draft.roommateNeeded,
        roommate_needed_count: draft.roommateNeededCount,
        current_roommates: draft.currentRoommates,
        permission_needed: draft.permissionNeeded,
      },
      images: imageUrls,
      tags: ["Cold start import", "Manual import", draft.roommateNeeded ? "Roommate needed" : "", draft.permissionNeeded ? "Permission needed" : "Permission reviewed"].filter(Boolean),
      verified: false,
      created_by: null,
      user_email: null,
      return_error: true,
    };

    const result = await onCreateListing(payload);
    setIsSubmitting(false);
    if (result?.error) {
      const message = [result.error.code, result.error.message, result.error.details].filter(Boolean).join(" · ");
      setFeedback(label(`Import failed: ${message}`, `导入失败：${message}`));
    } else if (result) {
      setFeedback(label("Imported as an unattributed cold-start listing. You can review it in Housing.", "已作为不归属个人账号的冷启动房源导入。你可以在租房页查看。"));
    } else {
      setFeedback(label("Import failed. If this is the first time, run the cold-start import SQL in Supabase first.", "导入失败。如果这是第一次使用，请先在 Supabase 运行冷启动导入 SQL。"));
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-orange-800">
            {label("Manual listing import", "手动房源导入")}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{label("Admin Import", "后台导入")}</h1>
          <p className="mt-3 max-w-3xl text-zinc-600">
            {label("Paste text you manually copied from a post, screenshot OCR, or a shared listing. Campiq extracts a draft, then you review and import it as unverified.", "粘贴你手动复制的帖子文字、截图 OCR 文字或房源信息。Campiq 会提取草稿，你审核后再以未认证状态导入。")}
          </p>
        </div>

        <Card className="mb-6 bg-amber-50">
          <div className="p-6">
            <h2 className="text-2xl font-bold">{label("Cold-start import mode", "冷启动导入模式")}</h2>
            <p className="mt-2 text-zinc-600">{label("Imported listings are not attached to your personal account. They are saved as unverified listings from outside sources, with the original contact and source link kept for review.", "导入的房源不会挂到你的个人账号名下。它们会作为外部来源的未认证房源保存，并保留原帖联系方式和来源链接供审核。")}</p>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card>
            <div className="border-b p-6">
              <h2 className="text-2xl font-bold">{label("Source", "来源内容")}</h2>
              <p className="mt-2 text-sm text-zinc-500">{label("Do not automate Facebook browsing here. Paste only content you manually collected and are allowed to review.", "这里不自动浏览 Facebook。只粘贴你手动收集、允许审核的内容。")}</p>
            </div>
            <div className="p-6">
              <textarea
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                className="h-[34rem] w-full rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-orange-300"
                placeholder={label("Paste post text, OCR text, listing link, image links, and contact details...", "粘贴帖子文字、OCR 文字、房源链接、图片链接和联系方式……")}
              />
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button variant="orange" type="button" onClick={parsePost}>{label("Extract draft", "提取草稿")}</Button>
                <Button variant="light" type="button" onClick={() => { setRawText(""); setDraft(emptyImportDraft); setFeedback(""); }}>{label("Clear", "清空")}</Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="border-b p-6">
              <h2 className="text-2xl font-bold">{label("Review", "审核字段")}</h2>
              <p className="mt-2 text-sm text-zinc-500">{label("Everything stays editable. Keep verified off until permission and details are checked.", "所有字段都可以修改。授权和信息没确认前保持未认证。")}</p>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-2">
              <input value={draft.title} onChange={(e) => update("title", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={label("Title", "标题")} />
              <input value={draft.area} onChange={(e) => update("area", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Area", "地区")} />
              <input value={draft.address} onChange={(e) => update("address", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Address", "地址")} />
              <select value={draft.leaseType} onChange={(e) => update("leaseType", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                <option value="shortTerm">{label("Short-term", "短租")}</option>
                <option value="longTerm">{label("Long-term", "长租")}</option>
              </select>
              <select value={draft.listingType} onChange={(e) => update("listingType", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                {listingTypeOptions.filter((item) => item.en !== "Housing request" && item.en !== "Roommate search").map((option) => (
                  <option key={option.en} value={option.en}>{lang === "zh" ? option.zh : option.en}</option>
                ))}
              </select>
              <input value={draft.bedrooms} onChange={(e) => update("bedrooms", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Bedrooms", "卧室")} />
              <input value={draft.bathrooms} onChange={(e) => update("bathrooms", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Bathrooms", "卫生间")} />
              <input value={draft.price} onChange={(e) => update("price", e.target.value)} type="number" min="0" className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Monthly rent", "月租")} />
              <label className="block">
                <span className="mb-1 block text-xs font-semibold text-zinc-500">{label("Move-in date", "可入住日期")}</span>
                <input value={draft.moveInDate} onChange={(e) => update("moveInDate", e.target.value)} type="date" className="h-12 w-full rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" />
              </label>
              <select value={draft.utilities} onChange={(e) => update("utilities", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                <option value="-">Utilities not checked</option>
                <option value="Included">{label("Utilities included", "包水电费")}</option>
                <option value="Not included">{label("Utilities not included", "不包水电费")}</option>
                <option value="Partially included">{label("Utilities partially included", "部分包水电费")}</option>
              </select>
              <select value={draft.parking} onChange={(e) => update("parking", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                <option value="-">{label("Parking not checked", "车位未确认")}</option>
                <option value="Included">{label("Parking included", "车位包含")}</option>
                <option value="Paid">{label("Parking for extra fee", "车位另付")}</option>
                <option value="None">{label("No parking", "无车位")}</option>
                <option value="Street">{label("Street parking", "街边停车")}</option>
              </select>
              <select value={draft.evCharging} onChange={(e) => update("evCharging", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                <option value="-">{label("EV charging not checked", "充电未确认")}</option>
                <option value="Yes">{label("EV charging: Yes", "可充电")}</option>
                <option value="No">{label("EV charging: No", "不可充电")}</option>
              </select>
              <select value={draft.pets} onChange={(e) => update("pets", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                <option value="-">{label("Pets not checked", "宠物未确认")}</option>
                <option value="Allowed">{label("Pets allowed", "可宠")}</option>
                <option value="Not allowed">{label("Pets not allowed", "不可宠")}</option>
              </select>
              <input value={draft.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Email" />
              <input value={draft.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Phone", "电话")} />
              <input value={draft.contactWeChat} onChange={(e) => update("contactWeChat", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="WeChat" />
              <input value={draft.contactInstagram} onChange={(e) => update("contactInstagram", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Instagram" />
              <input value={draft.contactFacebook} onChange={(e) => update("contactFacebook", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder="Facebook / contact source" />
              <input value={draft.sourceLink} onChange={(e) => update("sourceLink", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={label("Source link", "来源链接")} />
              <label className="flex items-center gap-3 rounded-2xl border border-orange-200 bg-orange-50 p-4 text-sm font-semibold text-orange-900 md:col-span-2">
                <input type="checkbox" checked={draft.roommateNeeded} onChange={(e) => update("roommateNeeded", e.target.checked)} className="h-4 w-4" />
                {label("This listing also needs roommates / people to take over", "这个房源也在找室友 / 找人接房")}
              </label>
              {draft.roommateNeeded && (
                <>
                  <input value={draft.roommateNeededCount} onChange={(e) => update("roommateNeededCount", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("How many people needed", "需要几个人")} />
                  <input value={draft.currentRoommates} onChange={(e) => update("currentRoommates", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Current roommates", "现有室友情况")} />
                </>
              )}
              <textarea value={draft.imageUrls} onChange={(e) => update("imageUrls", e.target.value)} className="h-24 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={label("Image URLs, one per line", "图片链接，每行一个")} />
              <textarea value={draft.description} onChange={(e) => update("description", e.target.value)} className="h-36 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={label("Description", "描述")} />
              <label className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900 md:col-span-2">
                <input type="checkbox" checked={draft.permissionNeeded} onChange={(e) => update("permissionNeeded", e.target.checked)} className="h-4 w-4" />
                {label("Permission still needed / keep unverified", "仍需授权 / 保持未认证")}
              </label>
              <div className="md:col-span-2">
                <Button variant="orange" type="button" className="w-full" onClick={importListing} disabled={isSubmitting}>
                  {isSubmitting ? label("Importing...", "导入中...") : label("Import to Supabase", "导入 Supabase")}
                </Button>
                {feedback ? <p className="mt-3 text-sm text-zinc-600">{feedback}</p> : null}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

function AdminRoommateImportPage({ lang, setLang, t, setPage, onCreateRoommate }) {
  const [rawText, setRawText] = useState("");
  const [draft, setDraft] = useState(emptyRoommateImportDraft);
  const [feedback, setFeedback] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const label = (enText, zhText) => (lang === "zh" ? zhText : enText);
  const update = (field, value) => setDraft((current) => ({ ...current, [field]: value }));

  const parsePost = () => {
    if (!rawText.trim()) {
      setFeedback(label("Paste the roommate post text, OCR text, or source link first.", "请先粘贴找室友帖子文字、OCR 文字或来源链接。"));
      return;
    }
    setDraft(parseRoommatePost(rawText));
    setFeedback(label("Parsed. Please review every field before importing.", "已解析。导入前请逐项检查。"));
  };

  const importRoommate = async () => {
    const errors = [];
    if (!draft.name.trim()) errors.push(label("Name or display name is required.", "姓名或展示名为必填项。"));
    if (!draft.about.trim()) errors.push(label("Description is required.", "描述为必填项。"));
    if (!draft.contactEmail && !draft.contactPhone && !draft.contactWeChat && !draft.contactInstagram && !draft.sourceLink) {
      errors.push(label("At least one contact method or source link is required.", "至少需要一种联系方式或来源链接。"));
    }
    if (errors.length) {
      setFeedback(errors.join(" "));
      return;
    }

    setIsSubmitting(true);
    setFeedback("");
    const photos = draft.photoUrls.split(/\n|,/).map((item) => item.trim()).filter(Boolean);
    const aboutParts = [
      draft.about,
      draft.sourceLink ? `Source: ${draft.sourceLink}` : "",
      draft.permissionNeeded ? "Import note: permission needed before public verification." : "Import note: permission reviewed by admin.",
    ].filter(Boolean);
    const payload = {
      name: draft.name,
      school: draft.school || "UCSB",
      age: draft.age,
      grade: draft.grade,
      gender: draft.gender,
      nationality: draft.nationality,
      major: draft.major,
      housingPreference: draft.housingPreference,
      sleepSchedule: draft.sleepSchedule,
      smoking: draft.smoking,
      drinking: draft.drinking,
      pets: draft.pets,
      weed: draft.weed,
      hasCar: draft.hasCar,
      cleanliness: draft.cleanliness,
      interests: draft.interests,
      about: aboutParts.join("\n\n"),
      preferredGender: draft.preferredGender,
      preferredSleepSchedule: draft.preferredSleepSchedule,
      preferredSmoking: draft.preferredSmoking,
      preferredDrinking: draft.preferredDrinking,
      preferredPets: draft.preferredPets,
      preferredWeed: draft.preferredWeed,
      budgetRange: draft.budgetRange,
      moveInTime: draft.moveInTime,
      otherExpectations: draft.otherExpectations,
      contactEmail: draft.contactEmail,
      contactPhone: draft.contactPhone,
      contactWeChat: draft.contactWeChat,
      contactInstagram: draft.contactInstagram,
      sourceLink: draft.sourceLink,
      permissionNeeded: draft.permissionNeeded,
      status: "Imported lead",
      match: 70,
      photos,
      tags: ["Cold start import", "Manual import", "Roommate", draft.permissionNeeded ? "Permission needed" : "Permission reviewed"].filter(Boolean),
      created_by: null,
      user_email: null,
      return_error: true,
    };

    const result = await onCreateRoommate(payload);
    setIsSubmitting(false);
    if (result?.error) {
      const message = [result.error.code, result.error.message, result.error.details].filter(Boolean).join(" · ");
      setFeedback(label(`Import failed: ${message}`, `导入失败：${message}`));
    } else if (result) {
      setFeedback(label("Imported as an unattributed cold-start roommate lead.", "已作为不归属个人账号的冷启动找室友信息导入。"));
    } else {
      setFeedback(label("Import failed. Run the roommate cold-start import SQL in Supabase first.", "导入失败。请先在 Supabase 运行找室友冷启动导入 SQL。"));
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-orange-800">
            {label("Manual roommate import", "手动找室友导入")}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{label("Roommate Import", "找室友导入")}</h1>
          <p className="mt-3 max-w-3xl text-zinc-600">
            {label("Paste manually collected roommate posts, OCR text, links, and photo links. Campiq extracts a draft for review before importing.", "粘贴你手动收集的找室友帖子、OCR 文字、链接和照片链接。Campiq 会提取草稿，你审核后再导入。")}
          </p>
        </div>

        <Card className="mb-6 bg-amber-50">
          <div className="p-6">
            <h2 className="text-2xl font-bold">{label("Cold-start import mode", "冷启动导入模式")}</h2>
            <p className="mt-2 text-zinc-600">{label("Imported roommate leads are not attached to your personal account. Original contact and source link stay in the record for review.", "导入的找室友信息不会挂到你的个人账号名下。原帖联系方式和来源链接会保留在记录里供审核。")}</p>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card>
            <div className="border-b p-6">
              <h2 className="text-2xl font-bold">{label("Source", "来源内容")}</h2>
              <p className="mt-2 text-sm text-zinc-500">{label("Paste only content you manually collected and are allowed to review.", "只粘贴你手动收集、允许审核的内容。")}</p>
            </div>
            <div className="p-6">
              <textarea
                value={rawText}
                onChange={(e) => setRawText(e.target.value)}
                className="h-[34rem] w-full rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-orange-300"
                placeholder={label("Paste roommate post text, OCR text, source links, photo links, and contact details...", "粘贴找室友帖子文字、OCR 文字、来源链接、照片链接和联系方式……")}
              />
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <Button variant="orange" type="button" onClick={parsePost}>{label("Extract draft", "提取草稿")}</Button>
                <Button variant="light" type="button" onClick={() => { setRawText(""); setDraft(emptyRoommateImportDraft); setFeedback(""); }}>{label("Clear", "清空")}</Button>
                <Button variant="light" type="button" onClick={() => setPage("adminImport")}>{label("Housing import", "房源导入")}</Button>
              </div>
            </div>
          </Card>

          <Card>
            <div className="border-b p-6">
              <h2 className="text-2xl font-bold">{label("Review", "审核字段")}</h2>
              <p className="mt-2 text-sm text-zinc-500">{label("Everything stays editable before import.", "导入前所有字段都可以修改。")}</p>
            </div>
            <div className="grid gap-4 p-6 md:grid-cols-2">
              <input value={draft.name} onChange={(e) => update("name", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Name / display name", "姓名 / 展示名")} />
              <input value={draft.school} onChange={(e) => update("school", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("School", "学校")} />
              <input value={draft.age} onChange={(e) => update("age", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Age", "年龄")} />
              <input value={draft.grade} onChange={(e) => update("grade", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Grade / year", "年级")} />
              <input value={draft.gender} onChange={(e) => update("gender", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Gender", "性别")} />
              <input value={draft.nationality} onChange={(e) => update("nationality", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Nationality", "国籍")} />
              <input value={draft.major} onChange={(e) => update("major", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Major", "专业")} />
              <input value={draft.housingPreference} onChange={(e) => update("housingPreference", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Housing preference", "住宿偏好")} />
              <input value={draft.budgetRange} onChange={(e) => update("budgetRange", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Budget range", "预算范围")} />
              <input value={draft.moveInTime} onChange={(e) => update("moveInTime", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Move-in time", "入住时间")} />
              <input value={draft.sleepSchedule} onChange={(e) => update("sleepSchedule", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Sleep schedule", "作息")} />
              <input value={draft.cleanliness} onChange={(e) => update("cleanliness", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Cleanliness", "整洁程度")} />
              <input value={draft.smoking} onChange={(e) => update("smoking", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Smoking", "抽烟")} />
              <input value={draft.drinking} onChange={(e) => update("drinking", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Drinking", "喝酒")} />
              <input value={draft.pets} onChange={(e) => update("pets", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Pets", "宠物")} />
              <input value={draft.weed} onChange={(e) => update("weed", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Cannabis", "大麻")} />
              <input value={draft.hasCar} onChange={(e) => update("hasCar", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Has car", "是否有车")} />
              <input value={draft.interests} onChange={(e) => update("interests", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Interests", "兴趣")} />
              <input value={draft.preferredGender} onChange={(e) => update("preferredGender", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Preferred gender", "偏好性别")} />
              <input value={draft.preferredSleepSchedule} onChange={(e) => update("preferredSleepSchedule", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Preferred sleep schedule", "偏好作息")} />
              <input value={draft.preferredSmoking} onChange={(e) => update("preferredSmoking", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Preferred smoking", "室友抽烟偏好")} />
              <input value={draft.preferredDrinking} onChange={(e) => update("preferredDrinking", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Preferred drinking", "室友喝酒偏好")} />
              <input value={draft.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Email" />
              <input value={draft.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={label("Phone", "电话")} />
              <input value={draft.contactWeChat} onChange={(e) => update("contactWeChat", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="WeChat" />
              <input value={draft.contactInstagram} onChange={(e) => update("contactInstagram", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder="Instagram" />
              <input value={draft.sourceLink} onChange={(e) => update("sourceLink", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={label("Source link", "来源链接")} />
              <textarea value={draft.photoUrls} onChange={(e) => update("photoUrls", e.target.value)} className="h-24 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={label("Photo URLs, one per line", "照片链接，每行一个")} />
              <textarea value={draft.otherExpectations} onChange={(e) => update("otherExpectations", e.target.value)} className="h-24 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={label("Other roommate expectations", "其他室友期待")} />
              <textarea value={draft.about} onChange={(e) => update("about", e.target.value)} className="h-36 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={label("Description", "描述")} />
              <label className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm font-semibold text-amber-900 md:col-span-2">
                <input type="checkbox" checked={draft.permissionNeeded} onChange={(e) => update("permissionNeeded", e.target.checked)} className="h-4 w-4" />
                {label("Permission still needed / keep unverified", "仍需授权 / 保持未认证")}
              </label>
              <div className="md:col-span-2">
                <Button variant="orange" type="button" className="w-full" onClick={importRoommate} disabled={isSubmitting}>
                  {isSubmitting ? label("Importing...", "导入中...") : label("Import to Supabase", "导入 Supabase")}
                </Button>
                {feedback ? <p className="mt-3 text-sm text-zinc-600">{feedback}</p> : null}
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

function ChatPage({ lang, setLang, t, setPage, chatThread, onSendMessage }) {
  const [messageText, setMessageText] = useState("");
  const [showTranslation, setShowTranslation] = useState(false);

  const handleSend = async () => {
    if (messageText.trim()) {
      const result = await onSendMessage(messageText);
      if (!result) return;
      setMessageText("");
    }
  };

  if (!chatThread) {
    return (
      <div className="min-h-screen bg-stone-50 text-zinc-900">
        <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
        <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <h1 className="text-3xl font-bold">{lang === "en" ? "Chat not found" : "未找到聊天"}</h1>
            <p className="mt-4 text-zinc-600">{lang === "en" ? "Please select a message thread." : "请选择消息线程。"}</p>
            <Button className="mt-6" onClick={() => setPage("messages")}>{lang === "en" ? "Back to messages" : "返回消息"}</Button>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col overflow-hidden px-4 py-6 sm:px-6 lg:px-8">
        <Card className="mb-4 flex items-center justify-between p-4">
          <div>
            <h1 className="text-2xl font-bold">{chatThread.title}</h1>
            <p className="text-sm text-zinc-500">{chatThread.subtitle}</p>
          </div>
          <button
            onClick={() => setShowTranslation(!showTranslation)}
            className="rounded-2xl border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:bg-orange-50 hover:text-orange-600"
          >
            {showTranslation ? (lang === "en" ? "Original" : "原文") : (lang === "en" ? "Translated" : "翻译")}
          </button>
        </Card>

        <div className="mb-4 flex-1 space-y-4 overflow-y-auto rounded-3xl bg-white p-4">
          {(chatThread.messages || []).length > 0 ? (chatThread.messages || []).map((msg, idx) => (
            <div key={msg.id || idx} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs rounded-3xl px-4 py-3 ${msg.isOwn ? "bg-orange-500 text-white" : "bg-zinc-100 text-zinc-900"}`}>
                <p className="text-sm">{msg?.text || ""}</p>
                {msg.translatedText && showTranslation && !msg.isOwn && (
                  <>
                    <p className="mt-2 border-t border-opacity-30 pt-2 text-xs">{msg.translatedText}</p>
                    <p className="mt-1 text-[10px] opacity-70">{lang === "en" ? "Translated · View original" : "已翻译 · 查看原文"}</p>
                  </>
                )}
              </div>
            </div>
          )) : (
            <p className="rounded-3xl border border-dashed border-zinc-200 bg-stone-50 p-5 text-center text-sm text-zinc-500">
              {lang === "en" ? "No messages yet. Send the first one." : "还没有消息。发送第一条吧。"}
            </p>
          )}
        </div>

        <div className="flex gap-3">
          <input
            type="text"
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={(e) => { if (e.key === "Enter") handleSend(); }}
            placeholder={lang === "en" ? "Type a message..." : "输入消息..."}
            className="flex-1 rounded-2xl border bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300"
          />
          <Button variant="orange" onClick={handleSend}>{lang === "en" ? "Send" : "发送"}</Button>
        </div>
      </main>
    </div>
  );
}

function getListingShareUrl(listing) {
  if (typeof window === "undefined") return "";
  return `${window.location.origin}${window.location.pathname}#listing-${listing?.id || ""}`;
}

function getQrUrl(value) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(value)}`;
}

function loadPosterImage(src) {
  return new Promise((resolve) => {
    if (!src) {
      resolve(null);
      return;
    }
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

function drawRoundRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + width, y, x + width, y + height, r);
  ctx.arcTo(x + width, y + height, x, y + height, r);
  ctx.arcTo(x, y + height, x, y, r);
  ctx.arcTo(x, y, x + width, y, r);
  ctx.closePath();
}

function drawImageCover(ctx, img, x, y, width, height, radius = 0) {
  if (!img) return false;
  const scale = Math.max(width / img.width, height / img.height);
  const sw = width / scale;
  const sh = height / scale;
  const sx = (img.width - sw) / 2;
  const sy = (img.height - sh) / 2;
  ctx.save();
  if (radius) {
    drawRoundRect(ctx, x, y, width, height, radius);
    ctx.clip();
  }
  ctx.drawImage(img, sx, sy, sw, sh, x, y, width, height);
  ctx.restore();
  return true;
}

function wrapPosterText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const source = String(text || "");
  const words = /\s/.test(source) ? source.split(/\s+/).filter(Boolean) : Array.from(source);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const next = line ? (/\s/.test(source) ? `${line} ${word}` : `${line}${word}`) : word;
    if (ctx.measureText(next).width <= maxWidth || !line) {
      line = next;
    } else {
      lines.push(line);
      line = word;
    }
  });
  if (line) lines.push(line);
  const visible = lines.slice(0, maxLines);
  if (lines.length > maxLines && visible.length) {
    let last = visible[visible.length - 1];
    while (last.length > 1 && ctx.measureText(`${last}...`).width > maxWidth) {
      last = last.slice(0, -1);
    }
    visible[visible.length - 1] = `${last}...`;
  }
  visible.forEach((lineText, idx) => ctx.fillText(lineText, x, y + idx * lineHeight));
  return visible.length;
}

function getPosterBathroomText(listing, lang) {
  const raw = listing?.raw || {};
  const source = raw.bathroom_type || raw.bathroomType || raw.bath_type || raw.bathroom || raw.room_type || listing?.roomType || listing?.roomFormat || "";
  const text = displayListingText(source, lang);
  if (/private|独立/i.test(source) || text.includes("独立")) return lang === "zh" ? "独立卫生间" : "Private bathroom";
  if (/shared|共用/i.test(source) || text.includes("共用")) return lang === "zh" ? "共用卫生间" : "Shared bathroom";
  return lang === "zh" ? "卫生间信息未填写" : "Bathroom not listed";
}

function getPosterPriceText(listing, lang) {
  const value = listing?.price;
  const numeric = Number(value);
  if (!value && value !== 0 || Number.isNaN(numeric) || numeric <= 0) return lang === "zh" ? "价格未填写" : "Price not listed";
  return `$${numeric.toLocaleString("en-US")}/mo`;
}

function getPosterListingTypeText(listing, lang) {
  const rawType = listing?.type?.[lang] || listing?.type?.en || listing?.roomType || listing?.raw?.listing_type || "";
  const normalized = String(rawType || "").toLowerCase();
  if (normalized.includes("shared") || rawType.includes("合住")) return lang === "zh" ? "合住房间" : "Shared room";
  if (normalized.includes("private") || rawType.includes("单间")) return lang === "zh" ? "单间出租" : "Private room";
  if (normalized.includes("entire") || normalized.includes("whole") || rawType.includes("整套")) return lang === "zh" ? "整套出租" : "Entire unit";
  if (normalized.includes("bed space") || rawType.includes("床位")) return lang === "zh" ? "床位" : "Bed space";
  return displayListingValue(rawType || (lang === "zh" ? "房源类型未填写" : "Listing type not listed"), lang);
}

async function downloadListingPoster(listing, lang, format = "png") {
  const shareUrl = getListingShareUrl(listing);
  const title = displayListingText(listing?.title?.[lang] || listing?.title || "Campiq housing", lang);
  const qrUrl = getQrUrl(shareUrl);
  const roomText = displayListingValue(listing?.roomFormat || listing?.beds?.[lang] || listing?.roomType, lang);
  const priceText = getPosterPriceText(listing, lang);
  const listingTypeText = getPosterListingTypeText(listing, lang);
  const [logo, photo, qr] = await Promise.all([
    loadPosterImage("/campiq-logo-avatar-1080.png"),
    loadPosterImage(listing?.images?.[0] || listing?.image),
    loadPosterImage(qrUrl),
  ]);

  const canvas = document.createElement("canvas");
  canvas.width = 1080;
  canvas.height = 1440;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff7ed";
  drawRoundRect(ctx, 56, 56, 968, 1328, 42);
  ctx.fill();

  if (logo) {
    drawImageCover(ctx, logo, 112, 110, 96, 96, 28);
  } else {
    ctx.fillStyle = "#f97316";
    drawRoundRect(ctx, 112, 110, 96, 96, 28);
    ctx.fill();
  }

  ctx.fillStyle = "#18181b";
  ctx.font = "900 52px Arial, sans-serif";
  ctx.fillText("Campiq", 232, 150);
  ctx.font = "600 24px Arial, sans-serif";
  ctx.fillStyle = "#ea580c";
  ctx.fillText("joincampiq.com", 232, 190);
  ctx.font = "24px Arial, sans-serif";
  ctx.fillStyle = "#71717a";
  ctx.fillText(lang === "zh" ? "UCSB 学生租房平台" : "UCSB student housing platform", 612, 190);

  ctx.fillStyle = "#18181b";
  ctx.font = "900 62px Arial, sans-serif";
  const titleLines = wrapPosterText(ctx, title, 112, 330, 856, 74, 3);

  const photoY = titleLines > 2 ? 575 : 515;
  const drewPhoto = drawImageCover(ctx, photo, 112, photoY, 856, 470, 34);
  if (!drewPhoto) {
    ctx.fillStyle = "#fed7aa";
    drawRoundRect(ctx, 112, photoY, 856, 470, 34);
    ctx.fill();
    ctx.fillStyle = "#18181b";
    ctx.font = "900 42px Arial, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Campiq Housing", 540, photoY + 245);
    ctx.textAlign = "left";
  }

  const infoY = photoY + 532;
  ctx.fillStyle = "#fb923c";
  ctx.font = "900 64px Arial, sans-serif";
  ctx.fillText(priceText, 112, infoY);

  ctx.fillStyle = "#18181b";
  ctx.font = "800 34px Arial, sans-serif";
  wrapPosterText(ctx, `${listingTypeText} · ${roomText}`, 112, infoY + 58, 610, 42, 2);

  ctx.strokeStyle = "#fdba74";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(112, 1128);
  ctx.lineTo(968, 1128);
  ctx.stroke();

  ctx.fillStyle = "#ffedd5";
  drawRoundRect(ctx, 112, 1182, 462, 184, 32);
  ctx.fill();
  ctx.fillStyle = "#9a3412";
  ctx.font = "800 36px Arial, sans-serif";
  ctx.fillText(lang === "zh" ? "扫码查看详情" : "Scan for details", 150, 1268);
  ctx.fillStyle = "#c2410c";
  ctx.font = "24px Arial, sans-serif";
  ctx.fillText(lang === "zh" ? "打开完整房源信息" : "Open the full listing", 150, 1308);

  if (qr) {
    ctx.fillStyle = "#ffffff";
    drawRoundRect(ctx, 660, 1162, 260, 260, 24);
    ctx.fill();
    ctx.drawImage(qr, 680, 1182, 220, 220);
  }

  const mimeType = format === "jpg" || format === "jpeg" ? "image/jpeg" : "image/png";
  const extension = mimeType === "image/jpeg" ? "jpg" : "png";
  canvas.toBlob((blob) => {
    if (!blob) return;
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `campiq-listing-${listing?.id || "share"}.${extension}`;
    link.click();
    URL.revokeObjectURL(url);
  }, mimeType, 0.92);
}

function ListingShareModal({ listing, lang, onClose }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = getListingShareUrl(listing);
  const title = listing?.title?.[lang] || listing?.title || "Campiq housing";
  const shareText = `${title} on Campiq`;

  const copyLink = async () => {
    await navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const systemShare = async () => {
    if (navigator.share) {
      await navigator.share({ title, text: shareText, url: shareUrl });
    } else {
      await copyLink();
    }
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-zinc-950/50 px-4 py-8">
      <Card className="max-h-[90vh] w-full max-w-3xl overflow-auto">
        <div className="border-b p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-orange-600">{lang === "en" ? "Share listing" : "分享房源"}</div>
              <h2 className="mt-1 text-2xl font-bold">{title}</h2>
              <p className="mt-2 text-sm text-zinc-600">{lang === "en" ? "Share a public link or download a poster with a QR code." : "可以分享公开链接，也可以下载带二维码的海报。"}</p>
            </div>
            <button onClick={onClose} className="rounded-full border px-3 py-1 text-sm font-semibold text-zinc-600">Close</button>
          </div>
        </div>

        <div className="grid gap-6 p-5 sm:grid-cols-[1fr_240px] sm:p-6">
          <div className="space-y-4">
            <div className="rounded-3xl border bg-stone-50 p-4">
              <div className="text-sm font-semibold text-zinc-700">{lang === "en" ? "Public link" : "公开链接"}</div>
              <div className="mt-3 break-all rounded-2xl bg-white p-3 text-sm text-zinc-600">{shareUrl}</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button type="button" onClick={copyLink}>{copied ? (lang === "en" ? "Copied" : "已复制") : (lang === "en" ? "Copy link" : "复制链接")}</Button>
                <Button type="button" variant="light" onClick={systemShare}>{lang === "en" ? "Share to apps" : "分享到应用"}</Button>
              </div>
            </div>

            <div className="rounded-3xl border bg-white p-4">
              <div className="text-sm font-semibold text-zinc-700">{lang === "en" ? "Poster" : "分享海报"}</div>
              <p className="mt-2 text-sm text-zinc-600">{lang === "en" ? "Download an image poster. The QR code opens this listing." : "下载图片海报，海报里的二维码可以打开这个房源。"}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button type="button" variant="orange" onClick={() => downloadListingPoster(listing, lang, "png")}>{lang === "en" ? "Download PNG" : "下载 PNG"}</Button>
                <Button type="button" variant="light" onClick={() => downloadListingPoster(listing, lang, "jpg")}>{lang === "en" ? "Download JPG" : "下载 JPG"}</Button>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border bg-white p-4 text-center">
            <img src={getQrUrl(shareUrl)} alt="Listing QR code" className="mx-auto h-52 w-52 rounded-2xl border bg-white p-2" />
            <p className="mt-3 text-sm text-zinc-600">{lang === "en" ? "Scan to open listing" : "扫码打开房源"}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

function ListingDetailPage({ lang, setLang, t, setPage, listing, onToggleFavorite, onStartConversation }) {
  const [shareOpen, setShareOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const mapQuery = encodeURIComponent(listing?.address || listing?.location || listing?.area || "Isla Vista");

  if (!listing) {
    return (
      <div className="min-h-screen bg-stone-50 text-zinc-900">
        <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
        <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <h1 className="text-3xl font-bold">{lang === "en" ? "Listing not found" : "未找到房源"}</h1>
            <Button className="mt-6" onClick={() => setPage("housing")}>{lang === "en" ? "Back to listings" : "返回房源"}</Button>
          </Card>
        </main>
      </div>
    );
  }

  const raw = listing?.raw || {};
  const detailItems = [
    [lang === "en" ? "Listing type" : "房源类型", listing?.type?.[lang] || raw.listing_type],
    [lang === "en" ? "Room format" : "房型", listing?.roomFormat || raw.room_format],
    [lang === "en" ? "Bedrooms" : "卧室", raw.bedrooms ?? listing?.bedrooms],
    [lang === "en" ? "Bathrooms" : "卫生间", raw.bathrooms ?? listing?.bathrooms],
    [lang === "en" ? "Lease type" : "租期类型", listing?.leaseType === "longTerm" ? (lang === "en" ? "Long-term" : "长租") : (lang === "en" ? "Short-term / sublease" : "短租 / 转租")],
    [lang === "en" ? "Move-in / available date" : "入住 / 可租时间", listing?.moveInDate || raw.move_in_date],
    [lang === "en" ? "Utilities" : "水电网", listing?.utilities || raw.utilities],
    [lang === "en" ? "Parking" : "车位", listing?.parkingLabel?.[lang] || getParkingLabel(raw.parking, lang)],
    [lang === "en" ? "EV charging" : "充电桩", raw.ev_charging],
    [lang === "en" ? "Pets" : "宠物", raw.pets],
    [lang === "en" ? "Gender preference" : "性别要求", raw.gender_preference],
    [lang === "en" ? "Nearby bus" : "近公交", raw.nearby_bus],
    [lang === "en" ? "Living room occupied / bed space" : "客厅是否住人 / 客厅位", raw.living_room_as_bedroom],
    [lang === "en" ? "Roommate needed" : "是否找室友", raw.contact_info?.roommate_needed ? (lang === "en" ? "Yes" : "是") : ""],
    [lang === "en" ? "People needed" : "需要人数", raw.contact_info?.roommate_needed_count],
    [lang === "en" ? "Current roommates" : "现有室友", raw.contact_info?.current_roommates],
    [lang === "en" ? "Area / neighborhood" : "地区 / 小区", listing?.area || raw.area],
    [lang === "en" ? "Address" : "地址", listing?.address || raw.address || raw.location],
  ].filter(([, value]) => value !== null && value !== undefined && value !== "");
  const contactRows = getContactRows(listing?.contact, lang);

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto w-full max-w-5xl px-2 py-4 sm:px-5 sm:py-8 lg:px-6">
        <div className="grid min-w-0 gap-3 lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,.8fr)]">
          <div className="min-w-0 space-y-3">
            <Card className="overflow-hidden rounded-2xl">
              {listing?.images?.length > 0 ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {listing.images.map((src, idx) => (
                    <button key={idx} type="button" onClick={() => setActiveImage(src)} className="block overflow-hidden bg-zinc-100 text-left">
                      <img src={src} alt={`Listing image ${idx + 1}`} className="h-44 w-full object-cover transition hover:scale-105 sm:h-40" />
                    </button>
                  ))}
                </div>
              ) : (
                <img src={listing?.image || "https://via.placeholder.com/1200x600?text=No+image"} alt={listing?.title?.[lang] || listing?.title} className="h-48 w-full object-cover sm:h-56" />
              )}
              <div className="p-3 sm:p-4">
                <div className="mb-2 text-xs text-zinc-500">{displayListingText(listing?.area || listing?.address, lang)}</div>
                <h1 className="text-xl font-bold sm:text-2xl">{displayListingText(listing?.title?.[lang] || listing?.title, lang)}</h1>
                <p className="mt-2 whitespace-pre-line break-words text-sm leading-6 text-zinc-600">{displayListingText(listing?.description?.[lang] || listing?.description || listing?.dates?.[lang], lang)}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-3">
                  <div className="rounded-md border bg-white px-3 py-2">
                    <div className="text-xs text-zinc-500">{lang === "en" ? "Rent" : "租金"}</div>
                    <div className="mt-0.5 text-lg font-semibold">${listing?.price ?? "N/A"}<span className="text-xs text-zinc-500">/mo</span></div>
                  </div>
                  <div className="rounded-md border bg-white px-3 py-2">
                    <div className="text-xs text-zinc-500">{lang === "en" ? "Move-in" : "入住"}</div>
                    <div className="mt-0.5 text-sm font-semibold">{displayListingValue(listing?.moveInDate || (lang === "en" ? "Flexible" : "灵活"), lang)}</div>
                  </div>
                  <div className="rounded-md border bg-white px-3 py-2">
                    <div className="text-xs text-zinc-500">{lang === "en" ? "Room" : "房型"}</div>
                    <div className="mt-0.5 text-sm font-semibold">{displayListingValue(listing?.roomFormat || listing?.beds?.[lang], lang)}</div>
                  </div>
                </div>
              </div>
            </Card>

            <section className="rounded-xl bg-white px-3 py-3 shadow-sm sm:px-4">
                <h2 className="text-base font-bold">{lang === "en" ? "Listing information" : "房源信息"}</h2>
                <div className="mt-2 grid min-w-0 divide-y divide-zinc-100 border-t border-zinc-100 text-sm sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                  <div className="min-w-0 divide-y divide-zinc-100 sm:pr-3">
                    {detailItems.filter((_, idx) => idx % 2 === 0).map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[88px_minmax(0,1fr)] gap-2 py-1.5 sm:grid-cols-[104px_minmax(0,1fr)]">
                        <div className="text-[11px] leading-5 text-zinc-500">{label}</div>
                        <div className="min-w-0 break-words text-xs font-medium leading-5 text-zinc-900 sm:text-sm">{displayListingValue(value, lang)}</div>
                      </div>
                    ))}
                  </div>
                  <div className="min-w-0 divide-y divide-zinc-100 sm:pl-3">
                    {detailItems.filter((_, idx) => idx % 2 === 1).map(([label, value]) => (
                      <div key={label} className="grid grid-cols-[88px_minmax(0,1fr)] gap-2 py-1.5 sm:grid-cols-[104px_minmax(0,1fr)]">
                        <div className="text-[11px] leading-5 text-zinc-500">{label}</div>
                        <div className="min-w-0 break-words text-xs font-medium leading-5 text-zinc-900 sm:text-sm">{displayListingValue(value, lang)}</div>
                      </div>
                    ))}
                    <div className="grid grid-cols-[88px_minmax(0,1fr)] gap-2 py-1.5 sm:grid-cols-[104px_minmax(0,1fr)]">
                      <div className="text-[11px] leading-5 text-zinc-500">{lang === "en" ? "Contact" : "联系方式"}</div>
                      <div className="min-w-0 space-y-1 break-words text-xs leading-5 text-zinc-700 sm:text-sm">
                        {contactRows.map((row) => <div key={`${row.label}-${row.value}`}><span className="text-zinc-500">{row.label}:</span> {row.value}</div>)}
                        {contactRows.length === 0 && <div className="text-zinc-500">{lang === "en" ? "Contact information will be available after posting." : "发布后将显示联系信息。"}</div>}
                      </div>
                    </div>
                  </div>
                </div>
                {false && (
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {detailItems.map(([label, value]) => (
                    <div key={label} className="rounded-xl border bg-white px-3 py-2.5">
                      <div className="text-xs text-zinc-500">{label}</div>
                      <div className="mt-1 break-words text-sm font-semibold">{displayListingValue(value, lang)}</div>
                    </div>
                  ))}
                  <div className="rounded-xl border bg-white px-3 py-2.5">
                    <div className="text-xs text-zinc-500">{lang === "en" ? "Contact" : "联系方式"}</div>
                    <div className="mt-1 space-y-1 text-sm text-zinc-700">
                      {listing?.contact?.email && <div>Email: {listing.contact.email}</div>}
                      {listing?.contact?.phone && <div>{lang === "en" ? "Phone" : "电话"}: {listing.contact.phone}</div>}
                      {listing?.contact?.wechat && <div>WeChat: {listing.contact.wechat}</div>}
                      {listing?.contact?.instagram && <div>IG: {listing.contact.instagram}</div>}
                      {!listing?.contact?.email && !listing?.contact?.phone && !listing?.contact?.wechat && !listing?.contact?.instagram && <div className="text-zinc-500">{lang === "en" ? "Contact information will be available after posting." : "发布后将显示联系信息。"}</div>}
                    </div>
                  </div>
                </div>
                )}
                {listing?.address && (
                  <div className="mt-3 overflow-hidden rounded-lg border">
                    <iframe title="Map" src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`} className="h-32 w-full border-0 sm:h-40" allowFullScreen loading="lazy"></iframe>
                  </div>
                )}
            </section>
          </div>

          <div className="min-w-0 space-y-3">
            <Card className="rounded-2xl lg:sticky lg:top-24">
              <div className="p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-zinc-500">{lang === "en" ? "Published by" : "发布者"}</div>
                    <h2 className="mt-1 text-base font-semibold">{listing?.contact?.email || (lang === "en" ? "Campiq user" : "Campiq 用户")}</h2>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2.5 py-1 text-xs font-semibold text-amber-800">{displayListingText(listing?.type?.[lang] || listing?.type, lang)}</span>
                </div>
                <div className="mt-4 space-y-2">
                  {listing?.createdBy ? (
                    <Button className="w-full" onClick={() => onStartConversation?.({
                      recipientId: listing.createdBy,
                      subject: listing?.title?.[lang] || listing?.title?.en || "Housing listing",
                      contextType: "housing",
                      contextId: listing?.id,
                    })}>{lang === "en" ? "Message poster" : "私信发布者"}</Button>
                  ) : (
                    <p className="rounded-2xl border border-dashed border-zinc-200 bg-stone-50 p-3 text-sm text-zinc-500">
                      {lang === "en" ? "In-app messaging is only available for posts published by registered Campiq users." : "站内私信仅支持由已注册 Campiq 用户发布的帖子。"}
                    </p>
                  )}
                  <Button variant="orange" className="w-full" onClick={() => setShareOpen(true)}>{lang === "en" ? "Share" : "分享"}</Button>
                  <Button variant="light" className="w-full" onClick={() => onToggleFavorite?.(listing, "housing")}>{lang === "en" ? "Save" : "收藏"}</Button>
                </div>
              </div>
            </Card>

          </div>
        </div>

      </main>
      {shareOpen && <ListingShareModal listing={listing} lang={lang} onClose={() => setShareOpen(false)} />}
      {activeImage && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 p-3" onClick={() => setActiveImage(null)}>
          <button type="button" className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900" onClick={() => setActiveImage(null)}>
            {lang === "en" ? "Close" : "关闭"}
          </button>
          <img src={activeImage} alt="Listing full size" className="max-h-[90vh] max-w-full rounded-2xl object-contain shadow-2xl" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

function MessagesPage({ lang, setLang, t, setPage, conversations = [], notifications = [], readNotificationIds = [], onOpenConversation, onOpenNotification }) {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
            {lang === "en" ? "Messages" : "消息"}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{lang === "en" ? "Messages" : "消息"}</h1>
          <p className="mt-3 text-zinc-600">{lang === "en" ? "Real forum replies and private messages will appear here when they happen." : "这里会显示真实的论坛回复和私信，不再显示演示假消息。"}</p>
        </div>

        <div className="grid gap-6">
          <Card>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800">{lang === "en" ? "Private messages" : "私人消息"}</span>
              </div>
              {conversations.length > 0 ? (
                <div className="space-y-4">
                  {conversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => onOpenConversation?.(conversation)}
                      className="cursor-pointer rounded-3xl border border-orange-100 bg-white p-4 shadow-sm transition hover:border-orange-300 hover:shadow-lg"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <h2 className="text-lg font-semibold text-zinc-900">{conversation.title}</h2>
                          <p className="text-sm text-zinc-500">{conversation.subtitle}</p>
                        </div>
                        {conversation.unreadCount > 0 ? (
                          <span className="rounded-full bg-orange-500 px-2 py-1 text-xs font-bold text-white">{conversation.unreadCount}</span>
                        ) : null}
                      </div>
                      <p className="mt-3 truncate text-zinc-600">{conversation.preview || (lang === "en" ? "No messages yet." : "还没有消息。")}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="rounded-3xl border border-dashed border-zinc-200 bg-stone-50 p-5 text-sm text-zinc-500">
                  {lang === "en" ? "No real private messages yet." : "现在还没有真实私信。"}
                </p>
              )}
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800">{lang === "en" ? "Forum and notifications" : "论坛通知"}</span>
              </div>
              {notifications.length > 0 ? (
                <div className="space-y-4">
                  {notifications.map((notification) => {
                    const isUnread = !readNotificationIds.includes(notification.id);
                    return (
                      <div
                        key={notification.id}
                        onClick={() => onOpenNotification?.(notification)}
                        className={`cursor-pointer rounded-3xl border bg-white p-4 shadow-sm transition hover:border-orange-300 hover:shadow-lg ${isUnread ? "border-orange-200" : "border-zinc-100 opacity-75"}`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h2 className="text-lg font-semibold text-zinc-900">{notification.title}</h2>
                            <p className="text-sm text-zinc-500">{notification.subtitle}</p>
                          </div>
                          {isUnread ? <span className="text-xs uppercase text-orange-600">{lang === "en" ? "New" : "新"}</span> : null}
                        </div>
                        <p className="mt-3 text-zinc-600">{notification.body}</p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="rounded-3xl border border-dashed border-zinc-200 bg-stone-50 p-5 text-sm text-zinc-500">
                  {lang === "en" ? "No real forum replies yet." : "现在还没有真实论坛回复。"}
                </p>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

function ReportPage({ lang, setLang, t, setPage }) {
  const [form, setForm] = useState({ url: "", details: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (field, value) => setForm((current) => ({ ...current, [field]: value }));
  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="bg-red-50">
          <form onSubmit={submit} className="p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-red-100 text-2xl">⚑</div>
            <h1 className="text-4xl font-bold tracking-tight">{t.reportTitle}</h1>
            <p className="mt-4 text-zinc-600">{t.reportText}</p>
            <div className="mt-8 grid gap-4">
              <input value={form.url} onChange={(e) => update("url", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-red-300" placeholder={lang === "en" ? "Listing URL" : "房源链接"} />
              <textarea value={form.details} onChange={(e) => update("details", e.target.value)} className="h-40 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-red-300" placeholder={t.reportPlaceholder} />
              <Button variant="red" type="submit">{t.submitReport}</Button>
              {submitted && <p className="rounded-2xl bg-white p-4 text-sm font-semibold text-red-700">{lang === "en" ? "Demo submitted. In the full product, this will be sent to the Campiq review queue." : "演示提交成功。正式版本中，这会进入 Campiq 审核队列。"}</p>}
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}

function JoinPage({ lang, setLang, t, setPage }) {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="bg-amber-50">
          <div className="p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-100 text-2xl">👥</div>
            <h1 className="text-4xl font-bold tracking-tight">{t.joinTitle}</h1>
            <p className="mt-4 text-zinc-600">{t.joinText}</p>
            <a
              href="mailto:campiqofficial@gmail.com"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-orange-600 active:scale-[0.98]"
            >
              campiqofficial@gmail.com
            </a>
          </div>
        </Card>
      </main>
    </div>
  );
}

function RoommatePage({ lang, setLang, t, setPage, onSelectRoommate, roommates, listings = [], onSelectListing }) {
  const roommateNeededListings = listings.filter((listing) => listing?.raw?.contact_info?.roommate_needed || listing?.tags?.en?.includes("Roommate needed"));

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-orange-800">
              {lang === "en" ? "Freshman growth entry" : "新生拉新入口"}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.roommatePageTitle}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{t.roommatePageIntro}</p>
          </div>
          <Card className="bg-gradient-to-br from-amber-50 to-orange-100">
            <div className="p-6">
              <h2 className="text-xl font-bold">{t.smartMatchTitle}</h2>
              <p className="mt-2 text-zinc-600">{t.smartMatchText}</p>
              <Button className="mt-5" onClick={() => setPage("postRoommate")}>{t.postRoommate}</Button>
            </div>
          </Card>
        </div>

        <Card className="mb-8 bg-white">
          <div className="border-b p-6">
            <div className="mb-2 inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800">
              {lang === "en" ? "With a place" : "有房源"}
            </div>
            <h2 className="text-2xl font-bold">{lang === "en" ? "Listings looking for roommates" : "有房源找室友"}</h2>
            <p className="mt-2 text-sm text-zinc-500">{lang === "en" ? "These are housing posts where someone already has a place or sublet and is looking for people to join or take over." : "这些是已经有具体房源/转租，同时还在找人合住或接房的帖子。"}</p>
          </div>
          <div className="p-6">
            {roommateNeededListings.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2">
              {roommateNeededListings.map((listing) => (
                <button key={listing.id} type="button" onClick={() => onSelectListing?.(listing)} className="rounded-2xl border border-orange-100 bg-orange-50 p-4 text-left transition hover:border-orange-300 hover:shadow-md">
                  <div className="text-xs font-semibold uppercase text-orange-700">{lang === "en" ? "Roommate needed" : "找室友 / 找人接房"}</div>
                  <h3 className="mt-2 font-semibold text-zinc-900">{listing.title?.[lang] || listing.title?.en || listing.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{listing.area} · ${listing.price}/mo · {listing.roomFormat}</p>
                  <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-600">
                    {listing.raw?.contact_info?.roommate_needed_count ? <span className="rounded-full bg-white px-2.5 py-1">{lang === "en" ? `${listing.raw.contact_info.roommate_needed_count} people needed` : `需要 ${listing.raw.contact_info.roommate_needed_count} 人`}</span> : null}
                    {listing.raw?.contact_info?.current_roommates ? <span className="rounded-full bg-white px-2.5 py-1">{listing.raw.contact_info.current_roommates}</span> : null}
                  </div>
                </button>
              ))}
              </div>
            ) : (
              <p className="rounded-2xl border border-dashed border-zinc-200 bg-stone-50 p-5 text-sm text-zinc-500">
                {lang === "en" ? "No imported listings are marked as looking for roommates yet." : "目前还没有被标记为“有房源找室友”的导入房源。"}
              </p>
            )}
          </div>
        </Card>

        <Card className="mb-8 bg-white">
          <div className="border-b p-6">
            <div className="mb-2 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              {lang === "en" ? "Profile matching" : "资料匹配"}
            </div>
            <h2 className="text-2xl font-bold">{lang === "en" ? "Roommate matching" : "室友匹配"}</h2>
            <p className="mt-2 text-sm text-zinc-500">{lang === "en" ? "These are roommate profiles and matching preferences without a specific listing attached." : "这里展示没有绑定具体房源的室友资料和匹配偏好。"}</p>
          </div>
          <div className="mb-5 rounded-3xl border border-amber-100 bg-amber-50 p-5 text-sm leading-7 text-zinc-700">
            <div className="font-semibold text-zinc-900">{lang === "en" ? "How matching works" : "匹配逻辑说明"}</div>
            <p className="mt-2">{lang === "en" ? "To use roommate matching, users first fill out their own profile. Then they fill out another profile describing their ideal roommate. Campiq compares the two sets of information to recommend the most compatible people." : "使用找室友功能时，用户需要先填写自己的资料，再填写一份理想室友资料。Campiq 会根据两份资料的重合度推荐最匹配的人。"}</p>
          </div>

          <div className="grid gap-6 p-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-stone-50 p-5">
              <h2 className="text-xl font-bold">{t.myProfile}</h2>
              <div className="mt-4 mb-4 grid gap-3 sm:grid-cols-2">
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none sm:col-span-2">
                  <option>{lang === "en" ? "Housing preference" : "住宿偏好"}</option>
                  <option>{lang === "en" ? "On-campus dorm" : "校内宿舍"}</option>
                  <option>{lang === "en" ? "Off-campus apartment" : "校外租房"}</option>
                  <option>{lang === "en" ? "Open to both" : "都可以"}</option>
                </select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.age}</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21+</option></select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.year}</option><option>Freshman / 大一</option><option>Sophomore / 大二</option><option>Junior / 大三</option><option>Senior / 大四</option><option>Graduate</option></select>
                <input className="h-11 rounded-2xl border bg-white px-4 outline-none" placeholder={t.nationality} />
                <input className="h-11 rounded-2xl border bg-white px-4 outline-none" placeholder={t.interests} />
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.smoking}</option><option>No</option><option>Yes</option></select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.drinking}</option><option>No</option><option>Sometimes</option></select>
                <input className="h-11 rounded-2xl border bg-white px-4 outline-none" placeholder={t.pets} />
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.schedule}</option><option>Early sleeper</option><option>Late sleeper</option><option>Flexible</option></select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.weed}</option><option>No</option><option>Occasionally</option><option>Yes</option></select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.hasCar}</option><option>No</option><option>Yes</option></select>
              </div>
            </div>
            <div className="rounded-3xl bg-amber-50 p-5">
              <h2 className="text-xl font-bold">{t.idealRoommate}</h2>
              <p className="mt-2 text-sm text-zinc-500">{lang === "en" ? "Fill out the type of roommate and housing situation you are hoping to find." : "填写你希望匹配到的室友以及住宿类型。"}</p>
              <div className="mt-4 mb-4 grid gap-3 sm:grid-cols-2">
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none sm:col-span-2">
                  <option>{lang === "en" ? "Housing preference" : "住宿偏好"}</option>
                  <option>{lang === "en" ? "On-campus dorm" : "校内宿舍"}</option>
                  <option>{lang === "en" ? "Off-campus apartment" : "校外租房"}</option>
                  <option>{lang === "en" ? "Open to both" : "都可以"}</option>
                </select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.age}</option><option>17</option><option>18</option><option>19</option><option>20</option><option>21+</option></select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.year}</option><option>Freshman / 大一</option><option>Sophomore / 大二</option><option>Junior / 大三</option><option>Senior / 大四</option></select>
                <input className="h-11 rounded-2xl border bg-white px-4 outline-none" placeholder={t.nationality} />
                <input className="h-11 rounded-2xl border bg-white px-4 outline-none" placeholder={t.interests} />
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.smoking}</option><option>No</option><option>Yes</option></select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.drinking}</option><option>No</option><option>Sometimes</option></select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.weed}</option><option>No</option><option>Occasionally</option></select>
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.schedule}</option><option>Early sleeper</option><option>Late sleeper</option></select>
                <input className="h-11 rounded-2xl border bg-white px-4 outline-none" placeholder={t.pets} />
                <select className="h-11 rounded-2xl border bg-white px-4 outline-none"><option>{t.hasCar}</option><option>No</option><option>Yes</option></select>
              </div>
              <Button className="mt-4">{lang === "en" ? "Find Best Matches" : "寻找最匹配室友"}</Button>
            </div>
          </div>
        </Card>

        <div className="grid gap-6 md:grid-cols-3">
          {(roommates || []).map((p) => (
            <Card key={p.id} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl cursor-pointer" onClick={() => onSelectRoommate?.(p)}>
              <div className="h-24 bg-gradient-to-br from-amber-200 via-orange-100 to-amber-100" />
              <div className="p-6">
                <div className="-mt-14 mb-4 flex h-16 w-16 items-center justify-center rounded-3xl border-4 border-white bg-zinc-900 text-2xl text-white">👤</div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">{t.matchScore} {p?.match || 75}%</span>
                  <span className={`rounded-full px-2 py-1 text-xs font-semibold ${p?.status === "Matched" ? "bg-green-100 text-green-800" : p?.status === "Closed" ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800"}`}>
                    {p?.status || "Looking"}
                  </span>
                </div>
                <h3 className="text-xl font-bold">{p?.name || "Anonymous"}</h3>
                <p className="mt-2 text-sm text-zinc-500">{p?.school || "UCSB"}</p>
                <div className="mt-4 grid gap-2 text-sm text-zinc-600">
                  {p?.grade && <p><span className="font-semibold text-zinc-900">Grade:</span> {p.grade}</p>}
                  <p><span className="font-semibold text-zinc-900">{t.age}:</span> {p?.age || "N/A"}</p>
                  {p?.gender && <p><span className="font-semibold text-zinc-900">Gender:</span> {p.gender}</p>}
                  <p><span className="font-semibold text-zinc-900">{t.nationality}:</span> {p?.nationality || "N/A"}</p>
                  {p?.interests && <p><span className="font-semibold text-zinc-900">{t.interests}:</span> {p.interests}</p>}
                  {p?.smoking && <p><span className="font-semibold text-zinc-900">{t.smoking}:</span> {p.smoking}</p>}
                  {p?.drinking && <p><span className="font-semibold text-zinc-900">{t.drinking}:</span> {p.drinking}</p>}
                  {p?.pets && <p><span className="font-semibold text-zinc-900">{t.pets}:</span> {p.pets}</p>}
                  {p?.sleepSchedule && <p><span className="font-semibold text-zinc-900">Sleep:</span> {p.sleepSchedule}</p>}
                  {p?.weed && <p><span className="font-semibold text-zinc-900">Weed:</span> {p.weed}</p>}
                  {p?.hasCar && <p><span className="font-semibold text-zinc-900">{t.hasCar}:</span> {p.hasCar}</p>}
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600 line-clamp-2">{p?.about || "No introduction yet"}</p>
                <Button variant="light" className="mt-5 w-full" onClick={() => onSelectRoommate?.(p)}>{t.viewProfile}</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function PostRoommatePage({ lang, setLang, t, setPage, user, onCreateRoommate }) {
  const [form, setForm] = useState({
    name: "",
    school: "",
    grade: "",
    age: "",
    gender: "",
    nationality: "",
    major: "",
    housingPreference: "",
    sleepSchedule: "",
    smoking: "",
    drinking: "",
    pets: "",
    weed: "",
    hasCar: "",
    cleanliness: "",
    interests: "",
    preferredGender: "",
    preferredSleepSchedule: "",
    preferredSmoking: "",
    preferredDrinking: "",
    preferredPets: "",
    preferredWeed: "",
    budgetRange: "",
    moveInTime: "",
    otherExpectations: "",
    about: "",
    contactEmail: "",
    contactPhone: "",
    contactWeChat: "",
    contactInstagram: "",
    photos: [],
    status: "Looking",
  });
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));
  const handlePhotoChange = (e) => update("photos", Array.from(e.target.files || []));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      setShowAuthPrompt(true);
      return;
    }
    const payload = {
      ...form,
      tags: [],
      created_by: user?.id,
      user_email: user?.email,
    };
    await onCreateRoommate?.(payload);
    setPage("roommate");
  };

  const label = (en, zh) => (lang === "zh" ? zh : en);
  const unknownOption = <option value="-">-</option>;
  
  const grades = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"];
  const gradesZh = ["大一", "大二", "大三", "大四", "研究生"];
  const genders = ["Male", "Female", "Other"];
  const gendersZh = ["男", "女", "其他"];
  
  const housingPrefs = ["On-campus dorm", "Off-campus apartment", "Open to both"];
  const housingPrefsZh = ["校内宿舍", "校外租房", "都可以"];
  
  const sleepOptions = ["Early sleeper (before 11pm)", "Night owl (after 1am)", "Flexible"];
  const sleepOptionsZh = ["早睡（晚11前）", "夜猫子（凌晨1后）", "灵活"];
  
  const binaryOptions = ["No", "Yes", "Occasionally"];
  const binaryOptionsZh = ["否", "是", "偶尔"];
  
  const cleanlinessOptions = ["Very clean", "Average", "Flexible"];
  const cleanlinessOptionsZh = ["很干净", "中等", "灵活"];
  
  const budgetOptions = ["$0-800", "$800-1200", "$1200-1600", "$1600-2000", "$2000+"];
  const moveInOptions = ["ASAP", "This month", "Next month", "Flexible"];
  const moveInOptionsZh = ["立即", "本月", "下月", "灵活"];
  
  const statusOptions = ["Looking", "Matched", "Closed"];

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        {!user && showAuthPrompt ? (
          <Card className="mb-6 bg-amber-50">
            <div className="p-6">
              <h2 className="text-xl font-bold">{label("Login or register to post roommate profiles.", "登录或注册后，可发布室友资料。")}</h2>
              <p className="mt-2 text-zinc-600">{label("Visit the Me page to create an account, save your profile, and manage roommate listings.", "前往“我”页面创建账号，保存资料并管理室友发布。")}</p>
              <Button className="mt-5" onClick={() => setPage("me")}>{label("Go to Me", "前往“我”页面")}</Button>
            </div>
          </Card>
        ) : null}
        <Card>
          <form onSubmit={handleSubmit} className="grid gap-8 p-6">
            <div>
              <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-orange-800">
                {label("Create roommate profile", "创建室友资料")}
              </div>
              <h1 className="text-3xl font-bold tracking-tight">{label("Tell classmates who you are and what kind of roommate you want.", "告诉大家你是谁，以及你想要什么样的室友。")}</h1>
              <p className="mt-3 text-zinc-600">{label("This profile is for people first, not apartments. Share your lifestyle, habits, expectations, and photos.", "这个资料更像社交页面，而不是房源表单。分享你的生活方式、习惯、期望和照片。")}</p>
            </div>

            {/* Basic Info */}
            <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">{label("Basic Information", "基本信息")}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder={label("Name", "姓名")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
                <input value={form.school} onChange={(e) => update("school", e.target.value)} placeholder={label("School", "学校")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
                <select value={form.grade} onChange={(e) => update("grade", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Grade", "年级")}</option>
                  {unknownOption}
                  {grades.map((g, i) => <option key={g} value={g}>{lang === "en" ? g : gradesZh[i]}</option>)}
                </select>
                <input type="number" value={form.age} onChange={(e) => update("age", e.target.value)} placeholder={label("Age", "年龄")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
                <select value={form.gender} onChange={(e) => update("gender", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Gender", "性别")}</option>
                  {unknownOption}
                  {genders.map((g, i) => <option key={g} value={g}>{lang === "en" ? g : gendersZh[i]}</option>)}
                </select>
                <input value={form.nationality} onChange={(e) => update("nationality", e.target.value)} placeholder={label("Nationality", "国籍")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
                <input value={form.major} onChange={(e) => update("major", e.target.value)} placeholder={label("Major", "专业")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
            </div>

            {/* About Me */}
            <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">{label("About Me", "关于我")}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <select value={form.housingPreference} onChange={(e) => update("housingPreference", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Housing Preference", "住宿偏好")}</option>
                  {unknownOption}
                  {housingPrefs.map((p, i) => <option key={p} value={p}>{lang === "en" ? p : housingPrefsZh[i]}</option>)}
                </select>
                <select value={form.sleepSchedule} onChange={(e) => update("sleepSchedule", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Sleep Schedule", "作息时间")}</option>
                  {unknownOption}
                  {sleepOptions.map((s, i) => <option key={s} value={s}>{lang === "en" ? s : sleepOptionsZh[i]}</option>)}
                </select>
                <select value={form.smoking} onChange={(e) => update("smoking", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Smoking", "是否抽烟")}</option>
                  {unknownOption}
                  {binaryOptions.map((o, i) => <option key={o} value={o}>{lang === "en" ? o : binaryOptionsZh[i]}</option>)}
                </select>
                <select value={form.drinking} onChange={(e) => update("drinking", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Drinking", "是否喝酒")}</option>
                  {unknownOption}
                  {binaryOptions.map((o, i) => <option key={o} value={o}>{lang === "en" ? o : binaryOptionsZh[i]}</option>)}
                </select>
                <select value={form.pets} onChange={(e) => update("pets", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Pets", "是否有宠物")}</option>
                  {unknownOption}
                  {["No pets", "Has pet", "Pet friendly"].map((o, i) => <option key={o} value={o}>{lang === "en" ? o : ["没有宠物", "有宠物", "宠物友好"][i]}</option>)}
                </select>
                <select value={form.weed} onChange={(e) => update("weed", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Weed", "大麻")}</option>
                  {unknownOption}
                  {["No", "Yes", "Prefer not to say"].map((o, i) => <option key={o} value={o}>{lang === "en" ? o : ["否", "是", "不想说"][i]}</option>)}
                </select>
                <select value={form.hasCar} onChange={(e) => update("hasCar", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Car", "是否有车")}</option>
                  {unknownOption}
                  {["No", "Yes"].map((o) => <option key={o} value={o}>{lang === "en" ? o : (o === "No" ? "否" : "是")}</option>)}
                </select>
                <select value={form.cleanliness} onChange={(e) => update("cleanliness", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Cleanliness", "卫生习惯")}</option>
                  {unknownOption}
                  {cleanlinessOptions.map((c, i) => <option key={c} value={c}>{lang === "en" ? c : cleanlinessOptionsZh[i]}</option>)}
                </select>
                <input value={form.interests} onChange={(e) => update("interests", e.target.value)} placeholder={label("Interests", "兴趣爱好")} className="md:col-span-2 h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
            </div>

            {/* Looking For */}
            <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">{label("Looking For", "想找的室友")}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <select value={form.preferredGender} onChange={(e) => update("preferredGender", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Preferred Gender", "偏好性别")}</option>
                  {unknownOption}
                  {["Male", "Female", "Any"].map((g, i) => <option key={g} value={g}>{lang === "en" ? g : ["男", "女", "不限"][i]}</option>)}
                </select>
                <select value={form.preferredSleepSchedule} onChange={(e) => update("preferredSleepSchedule", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Preferred Sleep Schedule", "偏好作息")}</option>
                  {unknownOption}
                  {sleepOptions.map((s, i) => <option key={s} value={s}>{lang === "en" ? s : sleepOptionsZh[i]}</option>)}
                </select>
                <select value={form.preferredSmoking} onChange={(e) => update("preferredSmoking", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Smoking Preference", "抽烟偏好")}</option>
                  {unknownOption}
                  {binaryOptions.map((o, i) => <option key={o} value={o}>{lang === "en" ? o : binaryOptionsZh[i]}</option>)}
                </select>
                <select value={form.preferredDrinking} onChange={(e) => update("preferredDrinking", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Drinking Preference", "喝酒偏好")}</option>
                  {unknownOption}
                  {binaryOptions.map((o, i) => <option key={o} value={o}>{lang === "en" ? o : binaryOptionsZh[i]}</option>)}
                </select>
                <select value={form.preferredPets} onChange={(e) => update("preferredPets", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Pet Preference", "宠物偏好")}</option>
                  {unknownOption}
                  {["No pets", "Has pet", "Pet friendly"].map((o, i) => <option key={o} value={o}>{lang === "en" ? o : ["没有宠物", "有宠物", "宠物友好"][i]}</option>)}
                </select>
                <select value={form.preferredWeed} onChange={(e) => update("preferredWeed", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Weed Preference", "大麻偏好")}</option>
                  {unknownOption}
                  {["No", "Yes", "Any"].map((o, i) => <option key={o} value={o}>{lang === "en" ? o : ["否", "是", "不限"][i]}</option>)}
                </select>
                <select value={form.budgetRange} onChange={(e) => update("budgetRange", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Budget Range", "预算范围")}</option>
                  {unknownOption}
                  {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
                <select value={form.moveInTime} onChange={(e) => update("moveInTime", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Move-in Time", "入住时间")}</option>
                  {unknownOption}
                  {moveInOptions.map((m, i) => <option key={m} value={m}>{lang === "en" ? m : moveInOptionsZh[i]}</option>)}
                </select>
                <textarea value={form.otherExpectations} onChange={(e) => update("otherExpectations", e.target.value)} placeholder={label("Other expectations", "其他期望")} className="md:col-span-2 h-20 rounded-2xl border bg-stone-50 p-4 outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
            </div>

            {/* Self Introduction */}
            <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">{label("Self Introduction", "自我介绍")}</h2>
              <textarea value={form.about} onChange={(e) => update("about", e.target.value)} placeholder={label("Tell people about your personality, lifestyle, and why you're looking for a roommate...", "介绍你的性格、生活方式，以及为什么要找室友……")} className="h-40 rounded-2xl border bg-stone-50 p-4 outline-none focus:ring-2 focus:ring-orange-300" />
            </div>

            {/* Contact Info */}
            <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">{label("Contact Information", "联系方式")}</h2>
              <p className="text-sm text-zinc-500">{label("Optional: add the best ways people can reach you.", "可选：添加他人联系你的方式。")}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <input value={form.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} placeholder={label("Email", "邮箱")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
                <input value={form.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} placeholder={label("Phone", "电话")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
                <input value={form.contactWeChat} onChange={(e) => update("contactWeChat", e.target.value)} placeholder={label("WeChat", "微信")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
                <input value={form.contactInstagram} onChange={(e) => update("contactInstagram", e.target.value)} placeholder={label("Instagram", "Instagram")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
              </div>
            </div>

            {/* Profile Photos */}
            <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">{label("Profile Photos", "资料照片")}</h2>
              <p className="text-sm text-zinc-500">{label("Optional. Upload multiple photos to show your profile, hobbies, and lifestyle.", "可选。上传多张照片，展示你的资料、兴趣和生活方式。")}</p>
              <input type="file" multiple accept="image/*" onChange={handlePhotoChange} className="text-sm text-zinc-900" />
              {form.photos.length > 0 && <div className="text-sm text-zinc-600">{form.photos.length} {label("photos selected", "张照片已选择")}</div>}
            </div>

            {/* Status */}
            <div className="grid gap-4 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
              <select value={form.status} onChange={(e) => update("status", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                <option value="Looking">{label("Looking", "找室友中")}</option>
                <option value="Matched">{label("Matched", "已匹配")}</option>
                <option value="Closed">{label("Closed", "已关闭")}</option>
              </select>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button type="submit">{lang === "en" ? "Publish profile" : "发布资料"}</Button>
              <Button variant="light" onClick={() => setPage("roommate")}>{t.backHome}</Button>
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}

function RoommateDetailPage({ lang, setLang, t, setPage, profile, onDeleteProfile, onToggleFavorite, onStartConversation }) {
  if (!profile) {
    return (
      <div className="min-h-screen bg-stone-50 text-zinc-900">
        <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
        <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <h1 className="text-3xl font-bold">{lang === "en" ? "Profile not found" : "未找到资料"}</h1>
            <Button className="mt-6" onClick={() => setPage("roommate")}>{lang === "en" ? "Back to roommates" : "返回找室友"}</Button>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <Card className="overflow-hidden">
          <div className="h-32 bg-gradient-to-br from-amber-200 via-orange-100 to-amber-100" />
          <div className="p-6">
            <div className="-mt-20 mb-6 flex h-32 w-32 items-center justify-center rounded-3xl border-4 border-white bg-zinc-900 text-6xl text-white">👤</div>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">
                {t.matchScore} {profile?.match || 75}%
              </span>
              <span className={`rounded-full px-2 py-1 text-xs font-semibold ${profile?.status === "Matched" ? "bg-green-100 text-green-800" : profile?.status === "Closed" ? "bg-gray-100 text-gray-800" : "bg-blue-100 text-blue-800"}`}>
                {profile?.status || "Looking"}
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight">{profile?.name || "Anonymous"}</h1>
            <p className="mt-2 text-lg text-zinc-600">{profile?.school || "UCSB"}</p>

            {profile?.photos?.length > 0 ? (
              <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {profile.photos.map((src, idx) => (
                  <img key={`${src}-${idx}`} src={src} alt={`Profile photo ${idx + 1}`} className="h-40 w-full rounded-3xl object-cover" />
                ))}
              </div>
            ) : null}

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-xl font-bold">{lang === "en" ? "About Me" : "关于我"}</h2>
                <div className="space-y-3 text-sm text-zinc-700">
                  {profile?.grade && <p><span className="font-semibold">{lang === "en" ? "Grade" : "年级"}:</span> {profile.grade}</p>}
                  {profile?.gender && <p><span className="font-semibold">{lang === "en" ? "Gender" : "性别"}:</span> {profile.gender}</p>}
                  {profile?.age && <p><span className="font-semibold">{t.age}:</span> {profile.age}</p>}
                  {profile?.nationality && <p><span className="font-semibold">{t.nationality}:</span> {profile.nationality}</p>}
                  {profile?.major && <p><span className="font-semibold">{lang === "en" ? "Major" : "专业"}:</span> {profile.major}</p>}
                  {profile?.housingPreference && <p><span className="font-semibold">{lang === "en" ? "Housing Preference" : "住宿偏好"}:</span> {profile.housingPreference}</p>}
                  {profile?.sleepSchedule && <p><span className="font-semibold">{lang === "en" ? "Sleep Schedule" : "作息时间"}:</span> {profile.sleepSchedule}</p>}
                  {profile?.smoking && <p><span className="font-semibold">{t.smoking}:</span> {profile.smoking}</p>}
                  {profile?.drinking && <p><span className="font-semibold">{t.drinking}:</span> {profile.drinking}</p>}
                  {profile?.pets && <p><span className="font-semibold">{t.pets}:</span> {profile.pets}</p>}
                  {profile?.weed && <p><span className="font-semibold">{lang === "en" ? "Weed" : "大麻"}:</span> {profile.weed}</p>}
                  {profile?.hasCar && <p><span className="font-semibold">{lang === "en" ? "Car" : "是否有车"}:</span> {profile.hasCar}</p>}
                  {profile?.cleanliness && <p><span className="font-semibold">{lang === "en" ? "Cleanliness" : "卫生习惯"}:</span> {profile.cleanliness}</p>}
                  {profile?.interests && <p><span className="font-semibold">{t.interests}:</span> {profile.interests}</p>}
                </div>
                <div className="mt-6 rounded-3xl border border-zinc-200 bg-stone-50 p-5 text-sm text-zinc-700">
                  <h3 className="mb-3 text-sm font-semibold">{lang === "en" ? "Self Introduction" : "自我介绍"}</h3>
                  <p>{profile?.about || (lang === "en" ? "No self introduction provided." : "未提供自我介绍。")}</p>
                </div>
              </div>
              <div>
                <h2 className="mb-4 text-xl font-bold">{lang === "en" ? "Looking For" : "想找的室友"}</h2>
                <div className="space-y-3 text-sm text-zinc-700">
                  {profile?.preferredGender && <p><span className="font-semibold">{lang === "en" ? "Preferred Gender" : "偏好性别"}:</span> {profile.preferredGender}</p>}
                  {profile?.preferredSleepSchedule && <p><span className="font-semibold">{lang === "en" ? "Preferred Sleep Schedule" : "偏好作息"}:</span> {profile.preferredSleepSchedule}</p>}
                  {profile?.preferredSmoking && <p><span className="font-semibold">{lang === "en" ? "Smoking Preference" : "抽烟偏好"}:</span> {profile.preferredSmoking}</p>}
                  {profile?.preferredDrinking && <p><span className="font-semibold">{lang === "en" ? "Drinking Preference" : "喝酒偏好"}:</span> {profile.preferredDrinking}</p>}
                  {profile?.preferredPets && <p><span className="font-semibold">{lang === "en" ? "Pet Preference" : "宠物偏好"}:</span> {profile.preferredPets}</p>}
                  {profile?.preferredWeed && <p><span className="font-semibold">{lang === "en" ? "Weed Preference" : "大麻偏好"}:</span> {profile.preferredWeed}</p>}
                  {profile?.budgetRange && <p><span className="font-semibold">{lang === "en" ? "Budget Range" : "预算范围"}:</span> {profile.budgetRange}</p>}
                  {profile?.moveInTime && <p><span className="font-semibold">{lang === "en" ? "Move-in Time" : "入住时间"}:</span> {profile.moveInTime}</p>}
                  {profile?.otherExpectations && <p><span className="font-semibold">{lang === "en" ? "Other Expectations" : "其他期望"}:</span> {profile.otherExpectations}</p>}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_.9fr]">
              <div className="rounded-3xl border border-zinc-200 bg-white p-6">
                <h2 className="text-xl font-bold">{lang === "en" ? "Contact" : "联系方式"}</h2>
                <div className="mt-4 space-y-3 text-sm text-zinc-700">
                  {profile?.contactEmail && <div><strong>Email:</strong> {profile.contactEmail}</div>}
                  {profile?.contactPhone && <div><strong>{lang === "en" ? "Phone" : "电话"}:</strong> {profile.contactPhone}</div>}
                  {profile?.contactWeChat && <div><strong>WeChat:</strong> {profile.contactWeChat}</div>}
                  {profile?.contactInstagram && <div><strong>Instagram:</strong> {profile.contactInstagram}</div>}
                  {!profile?.contactEmail && !profile?.contactPhone && !profile?.contactWeChat && !profile?.contactInstagram && <div className="text-zinc-500">{lang === "en" ? "No contact details provided." : "未提供联系方式。"}</div>}
                </div>
              </div>
              <div className="flex flex-col gap-3">
                {profile?.raw?.created_by ? (
                  <Button variant="orange" className="w-full" onClick={() => onStartConversation?.({
                    recipientId: profile.raw.created_by,
                    subject: profile?.name || (lang === "en" ? "Roommate profile" : "室友资料"),
                    contextType: "roommate",
                    contextId: profile?.id,
                  })}>{lang === "en" ? "Message profile owner" : "私信发布者"}</Button>
                ) : (
                  <p className="rounded-2xl border border-dashed border-zinc-200 bg-stone-50 p-3 text-sm text-zinc-500">
                    {lang === "en" ? "In-app messaging is only available for profiles published by registered Campiq users." : "站内私信仅支持由已注册 Campiq 用户发布的资料。"}
                  </p>
                )}
                <Button className="w-full" onClick={() => onToggleFavorite?.(profile)}>{lang === "en" ? "Save" : "收藏"}</Button>
                <Button variant="light" className="w-full" onClick={() => onDeleteProfile?.(profile?.id)}>{lang === "en" ? "Delete" : "删除"}</Button>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

function ForumDetailPage({ lang, setLang, t, setPage, post, user, onDeletePost, onToggleFavorite, onCreateComment }) {
  const [commentText, setCommentText] = useState("");

  if (!post) {
    return (
      <div className="min-h-screen bg-stone-50 text-zinc-900">
        <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
        <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <h1 className="text-3xl font-bold">{lang === "en" ? "Post not found" : "未找到帖子"}</h1>
            <Button className="mt-6" onClick={() => setPage("forum")}>{lang === "en" ? "Back to forum" : "返回论坛"}</Button>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <Card>
          <div className="border-b p-6">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-orange-800">
                {post?.category === "courses" ? t.forumCourses : post?.category === "professors" ? t.forumProfessors : post?.category === "food" ? t.forumFood : post?.category === "secondhand" ? t.forumSecondhand : post?.category === "events" ? t.forumEvents : t.forumLife}
              </span>
              <span className="text-sm text-zinc-500">{post?.author?.[lang] || "Anonymous"}</span>
            </div>
            <h1 className="text-4xl font-bold">{post?.title?.[lang] || "Untitled"}</h1>
            <p className="mt-3 text-sm text-zinc-500">{lang === "en" ? "Posted" : "发布于"} • {post?.timestamp || "Recently"}</p>
          </div>

          <div className="p-6">
            <p className="leading-8 text-zinc-700">{post?.body?.[lang] || "No content"}</p>
            
            <div className="mt-6 flex flex-wrap gap-2">
              {(post?.tags?.[lang] || []).map((tag) => (
                <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{tag}</span>
              ))}
            </div>

            <div className="mt-8 border-t pt-6">
              <div className="flex gap-3">
                <Button variant="light" className="flex-1" onClick={() => onToggleFavorite?.(post)}>{lang === "en" ? "Save" : "收藏"}</Button>
                <Button variant="light" className="flex-1" onClick={() => onDeletePost?.(post?.id)}>{lang === "en" ? "Report / Delete" : "举报 / 删除"}</Button>
              </div>
            </div>

            <div className="mt-8 border-t pt-6">
              <h2 className="text-2xl font-bold">{lang === "en" ? "Replies" : "回复"}</h2>
              <div className="mt-4 space-y-3">
                {(post?.commentsData || []).length > 0 ? (
                  post.commentsData.map((comment) => (
                    <div key={comment.id} className="rounded-3xl bg-stone-50 p-4">
                      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
                        <span className="font-semibold text-zinc-700">{comment?.author_en || comment?.user_email || "Anonymous"}</span>
                        <span>{comment?.created_at || ""}</span>
                      </div>
                      <p className="text-sm leading-6 text-zinc-700">{comment?.[`text_${lang}`] || comment?.text_en || comment?.body || ""}</p>
                    </div>
                  ))
                ) : (
                  <p className="rounded-3xl border border-dashed border-zinc-200 bg-stone-50 p-5 text-sm text-zinc-500">
                    {lang === "en" ? "No replies yet." : "还没有回复。"}
                  </p>
                )}
              </div>

              <div className="mt-5 rounded-3xl border border-orange-100 bg-orange-50 p-4">
                <textarea
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="h-28 w-full rounded-2xl border bg-white p-4 text-sm outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder={user ? (lang === "en" ? "Write a real reply..." : "写一条真实回复...") : (lang === "en" ? "Sign in to reply." : "登录后可以回复。")}
                  disabled={!user}
                />
                <div className="mt-3 flex justify-end">
                  <Button
                    variant="orange"
                    onClick={async () => {
                      const text = commentText.trim();
                      if (!text) return;
                      const result = await onCreateComment?.(post, text);
                      if (result) setCommentText("");
                    }}
                  >
                    {lang === "en" ? "Reply" : "回复"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

function MePage({ lang, setLang, t, setPage, favorites, myListings = [], myRoommates = [], myForumPosts = [], user, onSignIn, onSignUp, onSignOut }) {
  const [authMode, setAuthMode] = useState("signIn");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");
  const [authMessage, setAuthMessage] = useState("");

  const myHousingPosts = myListings.map(formatListing);
  const myRoommatePostItems = myRoommates;
  const myForumPostItems = myForumPosts;

  const Section = ({ title, items, type }) => (
    <Card className="mt-6">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="p-6">
        {items?.length > 0 ? (
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="rounded-2xl border border-orange-100 bg-orange-50 p-4">
                <h3 className="font-semibold text-zinc-900">{item?.title?.[lang] || item?.title || item?.name || "Untitled"}</h3>
                <p className="mt-1 text-sm text-zinc-600">{item?.subtitle || item?.area || item?.school || item?.category || "No details"}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-zinc-500">{t.noPostsYet}</p>
        )}
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-orange-800">
            {lang === "en" ? "Your account" : "你的账户"}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{lang === "en" ? "My Posts & Favorites" : "我的帖子和收藏"}</h1>
          <p className="mt-3 text-zinc-600">{t.myFavoritesIntro}</p>
        </div>

        {!user ? (
          <Card className="mb-6 bg-amber-50">
            <div className="p-6">
              <h2 className="text-2xl font-bold">{lang === "en" ? "Login or register" : "登录或注册"}</h2>
              <p className="mt-2 text-zinc-600">{lang === "en" ? "Create an account to publish housing posts, save favorites, and manage your listing." : "创建账户以发布房源、保存收藏并管理你的帖子。"}</p>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <Button onClick={() => setAuthMode("signIn")} variant={authMode === "signIn" ? "orange" : "light"}>{lang === "en" ? "Login" : "登录"}</Button>
                <Button onClick={() => setAuthMode("signUp")} variant={authMode === "signUp" ? "orange" : "light"}>{lang === "en" ? "Register" : "注册"}</Button>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <input value={authEmail} onChange={(e) => setAuthEmail(e.target.value)} placeholder={lang === "en" ? "Email" : "邮箱"} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" />
                <input type="password" value={authPassword} onChange={(e) => setAuthPassword(e.target.value)} placeholder={lang === "en" ? "Password" : "密码"} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" />
              </div>
              <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <Button variant="orange" onClick={async () => {
                  const email = authEmail.trim();
                  if (!email || !authPassword) {
                    setAuthMessage(lang === "en" ? "Please enter your email and password." : "请输入邮箱和密码。");
                    return;
                  }
                  if (authPassword.length < 6) {
                    setAuthMessage(lang === "en" ? "Password must be at least 6 characters." : "密码至少需要 6 位。");
                    return;
                  }
                  const response = authMode === "signIn" ? await onSignIn(email, authPassword) : await onSignUp(email, authPassword);
                  if (response?.error) {
                    setAuthMessage(response.error.message);
                    return;
                  }
                  if (authMode === "signUp") {
                    setAuthMessage(lang === "en" ? "Account created. Please check your email and click the confirmation link before signing in. If you do not see it, check spam or promotions." : "账号已创建。请去邮箱点击确认链接后再登录。如果没看到邮件，请检查垃圾邮件或推广邮件。");
                    return;
                  }
                  setAuthMessage(lang === "en" ? "Signed in successfully." : "登录成功。");
                }}>
                  {authMode === "signIn" ? (lang === "en" ? "Sign in" : "登录") : (lang === "en" ? "Create account" : "创建账户")}
                </Button>
                <button type="button" onClick={() => setPage("submit")} className="text-sm font-semibold text-orange-600 hover:text-orange-800">
                  {lang === "en" ? "Continue as guest" : "继续以游客身份"}
                </button>
              </div>
              {authMessage ? <p className="mt-3 text-sm text-zinc-600">{authMessage}</p> : null}
            </div>
          </Card>
        ) : (
          <Card className="mb-6 bg-white">
            <div className="p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{lang === "en" ? "Signed in as" : "已登录"}</h2>
                  <p className="mt-2 text-zinc-600">{user.email}</p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button variant="orange" onClick={() => setPage("adminImport")}>{lang === "en" ? "Import listings" : "导入房源"}</Button>
                  <Button variant="light" onClick={() => setPage("adminRoommateImport")}>{lang === "en" ? "Import roommates" : "导入找室友"}</Button>
                  <Button variant="light" onClick={onSignOut}>{lang === "en" ? "Sign out" : "退出"}</Button>
                </div>
              </div>
            </div>
          </Card>
        )}

        <Section title={t.myHousingPosts} items={myHousingPosts} type="housing" />
        <Section title={t.myRoommatePosts} items={myRoommatePostItems} type="roommate" />
        <Section title={t.myForumPosts} items={myForumPostItems} type="forum" />

        <Card className="mt-6">
          <div className="border-b p-6">
            <h2 className="text-2xl font-bold">{t.myFavoritesTitle}</h2>
          </div>
          <div className="p-6">
            {favorites && favorites.length > 0 ? (
              <div className="space-y-4">
                {favorites.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-orange-100 bg-white p-4 transition hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-zinc-900">{item?.title?.[lang] || item?.title || "Untitled"}</h3>
                        <p className="mt-1 text-sm text-zinc-600">{item?.subtitle || item?.area || "No details"}</p>
                      </div>
                      <span className="text-xs font-semibold text-orange-600">{item?.item_type === "housing" ? "Housing" : item?.item_type === "roommate" ? "Roommate" : "Forum"}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-zinc-500">{t.noFavorites}</p>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}

function HousingPage({ lang, setLang, t, setPage, listings, onSelectListing }) {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All");
  const [leaseType, setLeaseType] = useState("all");
  const [roomType, setRoomType] = useState("all");
  const [laundry, setLaundry] = useState("any");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);

  const results = useMemo(() => {
    return listings.filter((item) => {
      const text = `${item.title[lang]} ${item.type[lang]} ${item.area} ${item.beds[lang]} ${item.tags[lang].join(" ")}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
      const matchesArea = area === "All" || item.area === area;
      const matchesLease = leaseType === "all" || item.leaseType === leaseType;
      const matchesType = roomType === "all" || item.roomType === roomType;
      const matchesLaundry = laundry === "any" || (laundry === "yes" ? item.laundry : !item.laundry);
      const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
      return matchesQuery && matchesArea && matchesLease && matchesType && matchesLaundry && matchesPrice;
    });
  }, [query, area, leaseType, roomType, laundry, minPrice, maxPrice, lang, listings]);

  const resetFilters = () => {
    setQuery("");
    setArea("All");
    setLeaseType("all");
    setRoomType("all");
    setLaundry("any");
    setMinPrice(0);
    setMaxPrice(15000);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">{lang === "en" ? "Housing board" : "租房板块"}</div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.housingPageTitle}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{t.housingPageIntro}</p>
          </div>
          <Button variant="orange" className="px-6 py-4 text-base shadow-sm lg:-mt-3" onClick={() => setPage("submit")}>{lang === "en" ? "Post a housing request" : "发布求租"}</Button>
        </div>

        <Card className="mb-8">
          <div className="grid gap-4 p-5 lg:grid-cols-3">
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 lg:col-span-2" />
            <select value={area} onChange={(e) => setArea(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>All</option>
              <option>Isla Vista</option>
              <option>Goleta</option>
            </select>
            <select value={leaseType} onChange={(e) => setLeaseType(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="all">{t.allLeaseTypes}</option>
              <option value="shortTerm">{t.shortTerm}</option>
              <option value="longTerm">{t.longTerm}</option>
            </select>

            <select value={roomType} onChange={(e) => setRoomType(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="all">{t.allTypes}</option>
              <option value="wholeUnit">{t.wholeUnit}</option>
              <option value="masterRoom">{t.masterRoom}</option>
              <option value="sideRoom">{t.sideRoom}</option>
              <option value="livingRoom">{t.livingRoom}</option>
            </select>
            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{t.parking}</option>
              <option>{lang === "en" ? "Parking included in rent" : "车位包含在房租里"}</option>
              <option>{lang === "en" ? "Parking available for extra fee" : "有车位，需要额外缴费"}</option>
              <option>{lang === "en" ? "No parking" : "没有停车位"}</option>
              <option>{lang === "en" ? "Street parking / not guaranteed" : "街边停车 / 不保证车位"}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{t.evCharging}</option>
              <option>{lang === "en" ? "EV charging available" : "可充电"}</option>
              <option>{lang === "en" ? "No EV charging" : "不可充电"}</option>
            </select>

            <select value={laundry} onChange={(e) => setLaundry(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="any">{t.anyLaundry}</option>
              <option value="yes">{t.hasLaundry}</option>
              <option value="no">{t.noLaundry}</option>
            </select>
            <Button variant="light" onClick={resetFilters}>{t.resetFilters}</Button>
            <div className="rounded-2xl border bg-white px-4 py-3">
              <div className="mb-1 text-xs text-zinc-500">{t.minPrice}: ${minPrice}</div>
              <input type="range" min="0" max="15000" step="50" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="w-full" />
            </div>
            <div className="rounded-2xl border bg-white px-4 py-3 lg:col-span-2">
              <div className="mb-1 text-xs text-zinc-500">{t.maxPrice}: ${maxPrice}</div>
              <input type="range" min="500" max="15000" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full" />
            </div>
          </div>
        </Card>

        <div className="mb-4 text-sm font-medium text-zinc-500">{lang === "en" ? `${results.length} housing posts found` : `找到 ${results.length} 条房源`}</div>
        <div className="grid gap-6 md:grid-cols-3">
          {results.map((item) => (
            <Card key={item.id} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
              <img src={item?.images?.[0] || item?.image || "https://via.placeholder.com/800x400?text=No+image"} alt={(item?.title?.[lang] || item?.title || "Listing")} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{displayListingText(item?.type?.[lang] || (typeof item?.type === 'string' ? item.type : ''), lang)}</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-orange-800">{displayListingText(item?.roomFormat || item?.beds?.[lang] || '', lang)}</span>
                  {(item?.raw?.contact_info?.roommate_needed || item?.tags?.en?.includes("Roommate needed")) && (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                      {lang === "en" ? "Also looking for roommates" : "同时找室友"}
                    </span>
                  )}
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{item?.utilities === "-" ? "-" : (item?.laundry ? t.hasLaundry : t.noLaundry)}</span>
                </div>
                <h3 className="text-xl font-bold">{displayListingText(item?.title?.[lang] || item?.title || "Untitled", lang)}</h3>
                <div className="mt-2 text-sm text-zinc-500">📍 {displayListingText(item?.address || item?.area || "Unknown", lang)}</div>
                <div className="mt-4 text-3xl font-bold">${item?.price ?? "N/A"}<span className="text-sm font-medium text-zinc-500">/mo</span></div>
                <div className="mt-3 space-y-1 text-sm text-zinc-600"><p>{displayListingText(item?.beds?.[lang] || item?.beds || "", lang)}</p><p>{displayListingText(item?.dates?.[lang] || item?.dates || "", lang)}</p></div>
                <div className="mt-4 flex flex-wrap gap-2">{(item?.tags?.[lang] || []).map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{displayListingText(tag, lang)}</span>)}</div>
                <Button className="mt-5 w-full" onClick={() => onSelectListing(item)}>{t.viewDetails}</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function HomePage({ lang, setLang, t, setPage, query, setQuery, area, setArea, maxPrice, setMaxPrice, filteredListings, onSelectListing }) {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} />
      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,#fde68a,transparent_35%),radial-gradient(circle_at_top_right,#bfdbfe,transparent_35%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 py-6 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-8">
            <div>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm">{t.safer}</div>
              <h1 className="text-4xl font-bold leading-[1.16] tracking-tight sm:text-5xl sm:leading-[1.14]">{t.heroTitle}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">{t.heroText}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => setPage("housing")}>{t.browse}</Button>
                <Button variant="light" onClick={() => setPage("roommate")}>{t.findRoommate}</Button>
                <Button variant="light" onClick={() => setPage("submit")}>{t.submitPost}</Button>
                <Button variant="light" onClick={() => setPage("forum")}>{t.forumCta}</Button>
              </div>
            </div>
            <div className="grid gap-2">
              <Card className="overflow-hidden rounded-[2rem] shadow-2xl transition hover:-translate-y-1 hover:shadow-3xl cursor-pointer" onClick={() => setPage("housing")}>
                <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80" alt="Student apartment" className="h-32 w-full object-cover" />
                <div className="bg-white p-4">
                  <div className="text-sm font-semibold text-amber-600">Featured</div>
                  <h2 className="mt-1 text-xl font-bold">{lang === "en" ? "UCSB summer housing is open now" : "UCSB 暑期房源正在开放"}</h2>
                  <p className="mt-2 text-zinc-600">{lang === "en" ? "Post your Isla Vista sublease or browse available rooms before the June rush." : "在六月转租高峰前，发布你的 Isla Vista 转租或浏览可租房间。"}</p>
                </div>
              </Card>

              <div className="grid gap-3 sm:grid-cols-2">
                <Card className="overflow-hidden cursor-pointer transition hover:-translate-y-1 hover:shadow-xl" onClick={() => setPage("forum")}>
                  <div className="h-20 bg-gradient-to-br from-orange-200 via-orange-100 to-amber-50" />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-orange-700">{lang === "en" ? "UCSB community" : "UCSB 社区"}</div>
                    <h3 className="mt-1 text-xl font-bold">{lang === "en" ? "UCSB Campus Forum" : "UCSB 校园论坛"}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{lang === "en" ? "Course tips, professor reviews, dining, events, second-hand posts, and searchable UCSB student discussions." : "UCSB 选课建议、教授评价、食堂讨论、活动信息、二手交易和可长期搜索的学生讨论。"}</p>
                  </div>
                </Card>

                <Card className="overflow-hidden cursor-pointer transition hover:-translate-y-1 hover:shadow-xl" onClick={() => setPage("roommate")}>
                  <div className="h-20 bg-gradient-to-br from-orange-200 via-orange-100 to-amber-50" />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-orange-700">{lang === "en" ? "UCSB roommates" : "UCSB 找室友"}</div>
                    <h3 className="mt-1 text-xl font-bold">{t.roommateTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{lang === "en" ? "Match with compatible roommates based on lifestyle, habits, dorm plans, schedule, pets, smoking, and more." : "根据生活习惯、作息、宿舍偏好、宠物、抽烟等信息智能匹配室友。"}</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <Card className="bg-white">
            <div className="p-8">
              <h2 className="text-3xl font-bold tracking-tight">{t.howTitle}</h2>
              <p className="mt-3 text-zinc-600">{t.howText}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {t.steps.map((step, index) => (
                  <div key={step} className="rounded-3xl bg-stone-50 p-6">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">{index + 1}</div>
                    <p className="text-lg font-medium leading-7">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <Card className="mb-8 bg-white">
            <div className="grid gap-6 p-8 lg:grid-cols-[1fr_.9fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">{t.brandTitle}</h2>
                <p className="mt-3 leading-7 text-zinc-600">{t.brandText}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {t.brandKeywords.map((keyword) => (
                  <span key={keyword} className="rounded-full bg-stone-100 px-4 py-2 text-sm font-semibold text-zinc-700">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          <Card id="join" className="bg-gradient-to-br from-amber-50 to-orange-100">
            <div className="p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-orange-700">👥</div>
              <h2 className="text-2xl font-bold">{t.joinTitle}</h2>
              <p className="mt-3 max-w-3xl text-zinc-600">
                {lang === "en"
                  ? "Have suggestions, want to join Campiq, or want to discuss collaboration? Email us directly."
                  : "如果你有任何建议、想要加入我们，或希望和 Campiq 合作，请直接通过邮箱联系我们。"}
              </p>
              <a
                href="mailto:campiqofficial@gmail.com"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-orange-600 active:scale-[0.98]"
              >
                campiqofficial@gmail.com
              </a>
            </div>
          </Card>
        </section>

        <section className="bg-zinc-900 py-16 text-white"><div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-bold tracking-tight">{t.socialTitle}</h2><p className="mx-auto mt-3 max-w-2xl text-zinc-300">{t.socialText}</p><div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><Button variant="light">Instagram</Button><Button variant="light">WeChat</Button></div></div></section>
      </main>
      <footer className="bg-white px-4 py-8 text-center text-sm text-zinc-500"><p>{t.footer}</p></footer>
    </div>
  );
}

export default function CampiqWebsite() {
  const [query, setQuery] = useState("");
  const [area, setArea] = useState("All");
  const [maxPrice, setMaxPrice] = useState(4500);
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState(pageFromLocation);
  const [selectedListing, setSelectedListing] = useState(null);
  const [selectedRoommate, setSelectedRoommate] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedThread, setSelectedThread] = useState(null);
  const [readNotificationIds, setReadNotificationIds] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [myListings, setMyListings] = useState([]);
  const [myRoommates, setMyRoommates] = useState([]);
  const [myForumPosts, setMyForumPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const t = dictionary[lang];
  const [listings, setListings] = useState([]);
  const [roommates, setRoommates] = useState([]);
  const [forumPostsState, setForumPostsState] = useState([]);
  const [forumComments, setForumComments] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [messages, setMessages] = useState([]);
  const notificationStorageKey = user?.id ? `campiq-read-notifications-${user.id}` : "campiq-read-notifications-guest";

  const navigateToPage = (target, options = {}) => {
    const nextPage = target || "home";
    setPage(nextPage);
    if (typeof window === "undefined") return;
    const nextPath = pagePaths[nextPage];
    if (!nextPath) return;
    const currentPath = normalizePath(window.location.pathname);
    if (currentPath === nextPath && !window.location.hash) return;
    const method = options.replace ? "replaceState" : "pushState";
    window.history[method](null, "", nextPath);
  };

  const realNotifications = useMemo(() => {
    if (!user) return [];
    return forumPostsState.flatMap((post) => {
      const postOwnerId = post?.raw?.created_by;
      if (!postOwnerId || postOwnerId !== user.id) return [];
      return (post.commentsData || [])
        .filter((comment) => comment?.created_by && comment.created_by !== user.id)
        .map((comment) => ({
          id: `forum-comment-${post.id}-${comment.id}`,
          type: "forum-comment",
          postId: post.id,
          title: lang === "en" ? "New reply on your forum post" : "你的论坛帖子有新回复",
          subtitle: post?.title?.[lang] || post?.title?.en || "Forum post",
          body: comment?.[`text_${lang}`] || comment?.text_en || comment?.body || "",
        }));
    });
  }, [forumPostsState, lang, user]);

  const conversationThreads = useMemo(() => {
    if (!user) return [];
    return conversations.map((conversation) => {
      const conversationMessages = messages
        .filter((message) => message.conversation_id === conversation.id)
        .sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
      const lastMessage = conversationMessages[conversationMessages.length - 1];
      const unreadCount = conversationMessages.filter((message) => message.sender_id !== user.id && !message.read_at).length;
      return {
        id: conversation.id,
        title: conversation.subject || (lang === "en" ? "Private conversation" : "私信"),
        subtitle: conversation.context_type ? `${conversation.context_type} · ${new Date(conversation.updated_at || conversation.created_at).toLocaleString()}` : new Date(conversation.updated_at || conversation.created_at).toLocaleString(),
        preview: lastMessage?.body || "",
        unreadCount,
        raw: conversation,
        messages: conversationMessages.map((message) => ({
          id: message.id,
          text: message.body,
          isOwn: message.sender_id === user.id,
          created_at: message.created_at,
        })),
      };
    });
  }, [conversations, messages, lang, user]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem(notificationStorageKey);
    setReadNotificationIds(stored ? JSON.parse(stored) : []);
  }, [notificationStorageKey]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const unreadCount = realNotifications.filter((notification) => !readNotificationIds.includes(notification.id)).length
      + conversationThreads.reduce((total, conversation) => total + (conversation.unreadCount || 0), 0);
    window.localStorage.setItem("campiq-unread-count", String(unreadCount));
    window.dispatchEvent(new Event("campiq-unread-count"));
  }, [realNotifications, readNotificationIds, conversationThreads]);

  const markNotificationRead = (notificationId) => {
    setReadNotificationIds((current) => {
      const next = current.includes(notificationId) ? current : [...current, notificationId];
      if (typeof window !== "undefined") {
        window.localStorage.setItem(notificationStorageKey, JSON.stringify(next));
      }
      return next;
    });
  };

  const openConversation = async (thread) => {
    setSelectedThread(thread);
    setPage("chat");
    if (!user || !thread?.id) return;
    const unreadIds = (messages || [])
      .filter((message) => message.conversation_id === thread.id && message.sender_id !== user.id && !message.read_at)
      .map((message) => message.id);
    if (!unreadIds.length) return;
    const readAt = new Date().toISOString();
    const { error } = await supabase.from("messages").update({ read_at: readAt }).in("id", unreadIds);
    if (!error) {
      setMessages((current) => current.map((message) => unreadIds.includes(message.id) ? { ...message, read_at: readAt } : message));
    }
  };

  const startConversation = async ({ recipientId, subject, contextType, contextId }) => {
    if (!user) {
      window.alert(lang === "en" ? "Please sign in before sending a private message." : "请先登录再发送私信。");
      setPage("me");
      return null;
    }
    if (!recipientId) {
      window.alert(lang === "en" ? "This post does not have a messageable owner yet." : "这个帖子暂时没有可私信的发布者。");
      return null;
    }
    if (recipientId === user.id) {
      window.alert(lang === "en" ? "This is your own post." : "这是你自己的帖子。");
      return null;
    }

    const participantA = user.id < recipientId ? user.id : recipientId;
    const participantB = user.id < recipientId ? recipientId : user.id;
    const existing = conversations.find((conversation) =>
      conversation.participant_a === participantA
      && conversation.participant_b === participantB
      && (conversation.context_type || "") === (contextType || "")
      && (conversation.context_id || "") === String(contextId || "")
    );
    if (existing) {
      const thread = conversationThreads.find((item) => item.id === existing.id) || {
        id: existing.id,
        title: existing.subject || subject,
        subtitle: contextType || "",
        messages: [],
        raw: existing,
      };
      await openConversation(thread);
      return thread;
    }

    const { data, error } = await supabase
      .from("conversations")
      .insert([{
        participant_a: participantA,
        participant_b: participantB,
        subject,
        context_type: contextType,
        context_id: String(contextId || ""),
      }])
      .select("*")
      .single();
    if (error) {
      console.error(error);
      window.alert(lang === "en" ? "Could not start a private conversation. Please try again." : "暂时无法创建私信，请稍后再试。");
      return null;
    }
    setConversations((current) => [data, ...current]);
    const thread = { id: data.id, title: data.subject || subject, subtitle: contextType || "", messages: [], raw: data };
    setSelectedThread(thread);
    setPage("chat");
    return thread;
  };

  const sendPrivateMessage = async (messageText) => {
    if (!user || !selectedThread?.id) return null;
    const text = messageText.trim();
    if (!text) return null;
    const { data, error } = await supabase
      .from("messages")
      .insert([{ conversation_id: selectedThread.id, sender_id: user.id, body: text }])
      .select("*")
      .single();
    if (error) {
      console.error(error);
      window.alert(lang === "en" ? "Message could not be sent." : "消息发送失败。");
      return null;
    }
    const now = new Date().toISOString();
    await supabase.from("conversations").update({ updated_at: now }).eq("id", selectedThread.id);
    setMessages((current) => [...current, data]);
    setConversations((current) => current.map((conversation) => conversation.id === selectedThread.id ? { ...conversation, updated_at: now } : conversation));
    setSelectedThread((current) => current ? {
      ...current,
      messages: [...(current.messages || []), { id: data.id, text: data.body, isOwn: true, created_at: data.created_at }],
      preview: data.body,
    } : current);
    return data;
  };

  useEffect(() => {
    const onPopState = () => setPage(pageFromLocation());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const meta = pageMeta[page] || pageMeta.home;
    const path = pagePaths[page] || "/";
    const url = `https://joincampiq.com${path}`;
    document.title = meta.title;
    setMetaTag('meta[name="description"]', "content", meta.description);
    setMetaTag('link[rel="canonical"]', "href", url);
    setMetaTag('meta[property="og:url"]', "content", url);
    setMetaTag('meta[property="og:title"]', "content", meta.title);
    setMetaTag('meta[property="og:description"]', "content", meta.description);
    setMetaTag('meta[name="twitter:title"]', "content", meta.title);
    setMetaTag('meta[name="twitter:description"]', "content", meta.description);
  }, [page]);

  useEffect(() => {
    if (!listings.length || typeof window === "undefined") return;
    const match = window.location.hash.match(/^#listing-(.+)$/);
    if (!match) return;
    const sharedListing = listings.find((item) => String(item.id) === decodeURIComponent(match[1]));
    if (sharedListing) {
      setSelectedListing(sharedListing);
      setPage("listingDetail");
    }
  }, [listings]);

  useEffect(() => {
    async function fetchListings() {
      const { data, error } = await supabase
        .from("listings")
        .select("*")
        .or("post_mode.is.null,post_mode.neq.seek");

      if (error) {
        console.error(error);
        return;
      }

      setListings((data || []).map(formatListing));
    }

    fetchListings();
  }, []);

  useEffect(() => {
    let subscription = null;

    async function initAuth() {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setAuthLoading(false);

      subscription = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
      });
    }

    initAuth();

    return () => {
      if (subscription?.subscription) {
        subscription.subscription.unsubscribe();
      }
    };
  }, []);

  // Load roommates, forum posts, and favorites from Supabase

  useEffect(() => {
    async function fetchExtras() {
      try {
        // roommates
        const { data: rmData, error: rmErr } = await supabase.from("roommates").select("id,data,created_at").order("created_at", { ascending: false });
        if (rmErr && !isMissingRelation(rmErr)) console.warn(rmErr);
        const formattedRm = (rmData || []).map((r) => ({
          id: r.id,
          match: r.data?.match || 75,
          name: r.data?.name || r.data?.name_en || r.data?.name_zh || "Anonymous",
          school: r.data?.school || "",
          age: r.data?.age || "",
          grade: r.data?.grade || r.data?.year || r.data?.year_en || r.data?.year_zh || "",
          gender: r.data?.gender || "",
          nationality: r.data?.nationality || r.data?.nationality_en || r.data?.nationality_zh || "",
          major: r.data?.major || "",
          housingPreference: r.data?.housingPreference || r.data?.housingPreference_en || r.data?.housingPreference_zh || "",
          sleepSchedule: r.data?.sleepSchedule || r.data?.sleepSchedule_en || r.data?.sleepSchedule_zh || "",
          smoking: r.data?.smoking || r.data?.smoking_en || r.data?.smoking_zh || "",
          drinking: r.data?.drinking || r.data?.drinking_en || r.data?.drinking_zh || "",
          pets: r.data?.pets || r.data?.pets_en || r.data?.pets_zh || "",
          weed: r.data?.weed || r.data?.weed_en || r.data?.weed_zh || "",
          hasCar: r.data?.hasCar || r.data?.hasCar_en || r.data?.hasCar_zh || "",
          cleanliness: r.data?.cleanliness || r.data?.cleanliness_en || r.data?.cleanliness_zh || "",
          interests: r.data?.interests || r.data?.interests_en || r.data?.interests_zh || "",
          about: r.data?.about || r.data?.about_en || r.data?.about_zh || "",
          preferredGender: r.data?.preferredGender || r.data?.preferredGender_en || r.data?.preferredGender_zh || "",
          preferredGrade: r.data?.preferredGrade || r.data?.preferredGrade_en || r.data?.preferredGrade_zh || "",
          preferredSleepSchedule: r.data?.preferredSleepSchedule || r.data?.preferredSleepSchedule_en || r.data?.preferredSleepSchedule_zh || "",
          preferredSmoking: r.data?.preferredSmoking || r.data?.preferredSmoking_en || r.data?.preferredSmoking_zh || "",
          preferredDrinking: r.data?.preferredDrinking || r.data?.preferredDrinking_en || r.data?.preferredDrinking_zh || "",
          preferredPets: r.data?.preferredPets || r.data?.preferredPets_en || r.data?.preferredPets_zh || "",
          preferredWeed: r.data?.preferredWeed || r.data?.preferredWeed_en || r.data?.preferredWeed_zh || "",
          budgetRange: r.data?.budgetRange || r.data?.budgetRange_en || r.data?.budgetRange_zh || "",
          moveInTime: r.data?.moveInTime || r.data?.moveInTime_en || r.data?.moveInTime_zh || "",
          otherExpectations: r.data?.otherExpectations || r.data?.otherExpectations_en || r.data?.otherExpectations_zh || "",
          contactEmail: r.data?.contactEmail || "",
          contactPhone: r.data?.contactPhone || "",
          contactWeChat: r.data?.contactWeChat || "",
          contactInstagram: r.data?.contactInstagram || "",
          status: r.data?.status || "Looking",
          photos: r.data?.photos || [],
          tags: r.data?.tags || r.data?.tags_en || r.data?.tags_zh || [],
          raw: r.data || {},
        }));
        setRoommates(formattedRm);

        // forum posts
        const { data: fData, error: fErr } = await supabase.from("forum_posts").select("id,data,created_at").order("created_at", { ascending: false });
        if (fErr && !isMissingRelation(fErr)) console.warn(fErr);
        const { data: commentRows, error: commentErr } = await supabase
          .from("forum_comments")
          .select("id,post_id,body,created_by,user_email,created_at")
          .order("created_at", { ascending: true });
        if (commentErr && !isMissingRelation(commentErr)) console.warn(commentErr);
        const normalizedComments = (commentRows || []).map((comment) => ({
          id: comment.id,
          post_id: comment.post_id,
          author_en: comment.user_email || "Anonymous",
          author_zh: comment.user_email || "匿名",
          text_en: comment.body,
          text_zh: comment.body,
          created_by: comment.created_by,
          created_at: comment.created_at,
        }));
        setForumComments(normalizedComments);
        const commentsByPost = normalizedComments.reduce((groups, comment) => {
          groups[comment.post_id] = groups[comment.post_id] || [];
          groups[comment.post_id].push(comment);
          return groups;
        }, {});
        const formattedF = (fData || []).map((p) => {
          const commentsData = commentsByPost[p.id] || (Array.isArray(p.data?.comments) ? p.data.comments : []);
          return {
            id: p.id,
            category: p.data?.category || "life",
            title: { en: p.data?.title_en || p.data?.title || "Untitled", zh: p.data?.title_zh || p.data?.title || "未命名" },
            body: { en: p.data?.body_en || p.data?.body || "", zh: p.data?.body_zh || p.data?.body || "" },
            author: { en: p.data?.author_en || p.data?.author || "Anonymous", zh: p.data?.author_zh || p.data?.author || "匿名" },
            comments: commentsData.length,
            commentsData,
            tags: { en: p.data?.tags_en || p.data?.tags || [], zh: p.data?.tags_zh || p.data?.tags || [] },
            timestamp: p.data?.timestamp || p.created_at,
            raw: p.data || {},
          };
        });
        setForumPostsState(formattedF);
      } catch (err) {
        console.error(err);
      }
    }

    fetchExtras();
  }, []);

  useEffect(() => {
    async function fetchFavorites() {
      if (!user) {
        setFavorites([]);
        return;
      }
      const { data: favData, error: favErr } = await supabase
        .from("favorites")
        .select("*")
        .eq("user_id", user.id)
        .order("created_at", { ascending: false });
      if (favErr && !isMissingRelation(favErr)) {
        console.warn(favErr);
        return;
      }
      setFavorites(favData || []);
    }
    fetchFavorites();
  }, [user]);

  useEffect(() => {
    async function fetchConversations() {
      if (!user) {
        setConversations([]);
        setMessages([]);
        return;
      }
      const { data: convoData, error: convoErr } = await supabase
        .from("conversations")
        .select("*")
        .or(`participant_a.eq.${user.id},participant_b.eq.${user.id}`)
        .order("updated_at", { ascending: false });
      if (convoErr) {
        if (!isMissingRelation(convoErr)) console.warn(convoErr);
        setConversations([]);
        setMessages([]);
        return;
      }
      setConversations(convoData || []);
      const ids = (convoData || []).map((conversation) => conversation.id);
      if (!ids.length) {
        setMessages([]);
        return;
      }
      const { data: msgData, error: msgErr } = await supabase
        .from("messages")
        .select("*")
        .in("conversation_id", ids)
        .order("created_at", { ascending: true });
      if (msgErr) {
        if (!isMissingRelation(msgErr)) console.warn(msgErr);
        setMessages([]);
        return;
      }
      setMessages(msgData || []);
    }

    fetchConversations();
  }, [user]);

  useEffect(() => {
    async function fetchMyPosts() {
      if (!user) {
        setMyListings([]);
        setMyRoommates([]);
        setMyForumPosts([]);
        return;
      }
      try {
        const { data: listingData, error: listingErr } = await supabase.from("listings").select("*").eq("created_by", user.id).or("post_mode.is.null,post_mode.neq.seek").order("created_at", { ascending: false });
        if (listingErr && !isMissingRelation(listingErr)) {
          console.warn(listingErr);
        } else {
          setMyListings(listingData || []);
        }

        const { data: roommateData, error: roommateErr } = await supabase.from("roommates").select("id,data,created_at").eq("data->>created_by", user.id).order("created_at", { ascending: false });
        if (roommateErr && !isMissingRelation(roommateErr)) {
          console.warn(roommateErr);
        } else {
          setMyRoommates((roommateData || []).map((r) => ({
            id: r.id,
            raw: r.data,
            name: r.data?.name || r.data?.name_en || r.data?.name_zh || "Anonymous",
            school: r.data?.school || "",
            age: r.data?.age || "",
            grade: r.data?.grade || r.data?.year || r.data?.year_en || r.data?.year_zh || "",
            gender: r.data?.gender || "",
            nationality: r.data?.nationality || r.data?.nationality_en || r.data?.nationality_zh || "",
            major: r.data?.major || "",
            housingPreference: r.data?.housingPreference || r.data?.housingPreference_en || r.data?.housingPreference_zh || "",
            sleepSchedule: r.data?.sleepSchedule || r.data?.sleepSchedule_en || r.data?.sleepSchedule_zh || "",
            smoking: r.data?.smoking || r.data?.smoking_en || r.data?.smoking_zh || "",
            drinking: r.data?.drinking || r.data?.drinking_en || r.data?.drinking_zh || "",
            pets: r.data?.pets || r.data?.pets_en || r.data?.pets_zh || "",
            weed: r.data?.weed || r.data?.weed_en || r.data?.weed_zh || "",
            hasCar: r.data?.hasCar || r.data?.hasCar_en || r.data?.hasCar_zh || "",
            cleanliness: r.data?.cleanliness || r.data?.cleanliness_en || r.data?.cleanliness_zh || "",
            interests: r.data?.interests || r.data?.interests_en || r.data?.interests_zh || "",
            about: r.data?.about || r.data?.about_en || r.data?.about_zh || "",
            preferredGender: r.data?.preferredGender || r.data?.preferredGender_en || r.data?.preferredGender_zh || "",
            preferredGrade: r.data?.preferredGrade || r.data?.preferredGrade_en || r.data?.preferredGrade_zh || "",
            preferredSleepSchedule: r.data?.preferredSleepSchedule || r.data?.preferredSleepSchedule_en || r.data?.preferredSleepSchedule_zh || "",
            preferredSmoking: r.data?.preferredSmoking || r.data?.preferredSmoking_en || r.data?.preferredSmoking_zh || "",
            preferredDrinking: r.data?.preferredDrinking || r.data?.preferredDrinking_en || r.data?.preferredDrinking_zh || "",
            preferredPets: r.data?.preferredPets || r.data?.preferredPets_en || r.data?.preferredPets_zh || "",
            preferredWeed: r.data?.preferredWeed || r.data?.preferredWeed_en || r.data?.preferredWeed_zh || "",
            budgetRange: r.data?.budgetRange || r.data?.budgetRange_en || r.data?.budgetRange_zh || "",
            moveInTime: r.data?.moveInTime || r.data?.moveInTime_en || r.data?.moveInTime_zh || "",
            otherExpectations: r.data?.otherExpectations || r.data?.otherExpectations_en || r.data?.otherExpectations_zh || "",
            contactEmail: r.data?.contactEmail || "",
            contactPhone: r.data?.contactPhone || "",
            contactWeChat: r.data?.contactWeChat || "",
            contactInstagram: r.data?.contactInstagram || "",
            status: r.data?.status || "Looking",
            photos: r.data?.photos || [],
            tags: r.data?.tags || r.data?.tags_en || r.data?.tags_zh || [],
          })));
        }

        const { data: forumData, error: forumErr } = await supabase.from("forum_posts").select("id,data,created_at").eq("data->>created_by", user.id).order("created_at", { ascending: false });
        if (forumErr && !isMissingRelation(forumErr)) {
          console.warn(forumErr);
        } else {
          setMyForumPosts((forumData || []).map((p) => {
            const commentsData = Array.isArray(p.data?.comments) ? p.data.comments : [];
            return {
              id: p.id,
              category: p.data?.category || "life",
              title: { en: p.data?.title_en || p.data?.title || "Untitled", zh: p.data?.title_zh || p.data?.title || "未命名" },
              body: { en: p.data?.body_en || p.data?.body || "", zh: p.data?.body_zh || p.data?.body || "" },
              author: { en: p.data?.author_en || p.data?.author || "Anonymous", zh: p.data?.author_zh || p.data?.author || "匿名" },
              comments: commentsData.length,
              commentsData,
              tags: { en: p.data?.tags_en || p.data?.tags || [], zh: p.data?.tags_zh || p.data?.tags || [] },
              timestamp: p.data?.timestamp || p.created_at,
              raw: p.data || {},
            };
          }));
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchMyPosts();
  }, [user]);

  // CRUD helpers
  const createRoommate = async (profile) => {
    const photos = Array.isArray(profile.photos) ? profile.photos : [];
    const photoUrls = photos.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim());
    const uploadFiles = photos.filter((item) => typeof File !== "undefined" && item instanceof File);
    const payload = {
      ...profile,
      photos: photoUrls,
      created_by: Object.prototype.hasOwnProperty.call(profile, "created_by") ? profile.created_by : user?.id,
      user_email: Object.prototype.hasOwnProperty.call(profile, "user_email") ? profile.user_email : user?.email,
    };
    delete payload.return_error;
    const { data, error } = await supabase.from("roommates").insert([{ data: payload }]).select("id").single();
    if (error) {
      console.error(error);
      if (profile.return_error) return { error };
      return null;
    }
    const roommateId = data.id;
    const uploadedPhotos = await uploadRoommatePhotos(uploadFiles, roommateId);
    if (uploadedPhotos.length) {
      await supabase.from("roommates").update({ data: { ...payload, photos: [...photoUrls, ...uploadedPhotos] } }).eq("id", roommateId);
    }
    const res = await supabase.from("roommates").select("id,data,created_at").order("created_at", { ascending: false });
    setRoommates((res.data || []).map((r) => ({
      id: r.id,
      raw: r.data,
      match: r.data?.match || 75,
      name: r.data?.name || "Anonymous",
      school: r.data?.school || "",
      grade: r.data?.grade || "",
      age: r.data?.age || "",
      gender: r.data?.gender || "",
      nationality: r.data?.nationality || "",
      major: r.data?.major || "",
      housingPreference: r.data?.housingPreference || "",
      sleepSchedule: r.data?.sleepSchedule || "",
      smoking: r.data?.smoking || "",
      drinking: r.data?.drinking || "",
      pets: r.data?.pets || "",
      weed: r.data?.weed || "",
      hasCar: r.data?.hasCar || "",
      cleanliness: r.data?.cleanliness || "",
      interests: r.data?.interests || "",
      about: r.data?.about || "",
      contactEmail: r.data?.contactEmail || "",
      contactPhone: r.data?.contactPhone || "",
      contactWeChat: r.data?.contactWeChat || "",
      contactInstagram: r.data?.contactInstagram || "",
      preferredGender: r.data?.preferredGender || "",
      preferredSleepSchedule: r.data?.preferredSleepSchedule || "",
      preferredSmoking: r.data?.preferredSmoking || "",
      preferredDrinking: r.data?.preferredDrinking || "",
      preferredPets: r.data?.preferredPets || "",
      preferredWeed: r.data?.preferredWeed || "",
      budgetRange: r.data?.budgetRange || "",
      moveInTime: r.data?.moveInTime || "",
      otherExpectations: r.data?.otherExpectations || "",
      status: r.data?.status || "Looking",
      photos: r.data?.photos || [],
    })));
    return data;
  };

  const deleteRoommate = async (id) => {
    const { error } = await supabase.from("roommates").delete().eq("id", id);
    if (error) console.error(error);
    setRoommates((prev) => prev.filter((r) => r.id !== id));
  };

  const updateRoommate = async (id, updatedProfile) => {
    const { error } = await supabase.from("roommates").update({ data: updatedProfile }).eq("id", id);
    if (error) console.error(error);
    // refresh
    const { data } = await supabase.from("roommates").select("id,data,created_at").order("created_at", { ascending: false });
    setRoommates((data || []).map(formatRoommate));
  };

  const uploadListingImages = async (files, listingId) => {
    if (!files?.length) return [];
    const uploadedUrls = [];
    for (const file of files) {
      const filename = `${listingId || Date.now()}-${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("listing-images")
        .upload(filename, file, { cacheControl: "3600", upsert: false });
      if (uploadError) {
        console.warn("Image upload failed", uploadError.message);
        continue;
      }
      const { data: publicUrlData } = supabase.storage.from("listing-images").getPublicUrl(uploadData.path);
      if (publicUrlData) {
        uploadedUrls.push(publicUrlData.publicUrl);
      }
    }
    return uploadedUrls;
  };

  const uploadRoommatePhotos = async (files, roommateId) => {
    if (!files?.length) return [];
    const uploadedUrls = [];
    for (const file of files) {
      const filename = `roommate-${roommateId || Date.now()}-${file.name}`;
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("listing-images")
        .upload(filename, file, { cacheControl: "3600", upsert: false });
      if (uploadError) {
        console.warn("Roommate photo upload failed", uploadError.message);
        continue;
      }
      const { data: publicUrlData } = supabase.storage.from("listing-images").getPublicUrl(uploadData.path);
      if (publicUrlData) {
        uploadedUrls.push(publicUrlData.publicUrl);
      }
    }
    return uploadedUrls;
  };

  const triggerListingTranslation = async (listingId) => {
    if (!listingId) return;
    const { data, error } = await supabase.functions.invoke("translate-listing", {
      body: { listing_id: listingId },
    });
    if (error) {
      console.warn("Listing translation did not complete", error.message);
      return;
    }
    const failedResult = data?.results?.find?.((item) => item.status === "error");
    if (failedResult) {
      console.warn("Listing translation did not complete", failedResult.error);
    }
  };

  const createListing = async (payload) => {
    if (payload.post_mode === "seek") {
      const requestPayload = {
        title: payload.title,
        name: payload.name,
        area: payload.area,
        preferred_room_type: payload.preferred_room_type || payload.listing_type || "",
        lease_type: payload.lease_type,
        min_budget: payload.min_budget,
        max_budget: payload.max_budget,
        move_in_date: payload.move_in_date,
        gender_preference: payload.gender_preference,
        pets: payload.pets,
        nearby_bus: payload.nearby_bus,
        description: payload.description,
        contact_info: payload.contact_info,
        tags: payload.tags || ["Housing request", "UCSB"],
        status: "open",
        created_by: payload.created_by,
        user_email: payload.user_email,
      };
      const { data, error } = await supabase.from("housing_requests").insert([requestPayload]).select("id").single();
      if (error) {
        console.error(error);
        if (payload.return_error) return { error };
        return null;
      }
      return data;
    }

    const incomingImages = Array.isArray(payload.images) ? payload.images : [];
    const imageUrls = incomingImages.filter((item) => typeof item === "string" && item.trim()).map((item) => item.trim());
    const uploadFiles = incomingImages.filter((item) => typeof File !== "undefined" && item instanceof File);
    const listingPayload = { ...payload, post_mode: "offer", images: imageUrls };
    delete listingPayload.return_error;
    const { data, error } = await supabase.from("listings").insert([listingPayload]).select("id").single();
    if (error) {
      console.error(error);
      if (payload.return_error) return { error };
      return null;
    }
    const listingId = data.id;
    const uploadedUrls = await uploadListingImages(uploadFiles, listingId);
    if (uploadedUrls.length) {
      await supabase.from("listings").update({ images: [...imageUrls, ...uploadedUrls] }).eq("id", listingId);
    }
    await triggerListingTranslation(listingId);

    const res = await supabase.from("listings").select("*").or("post_mode.is.null,post_mode.neq.seek").order("created_at", { ascending: false });
    setListings((res.data || []).map(formatListing));
    return data;
  };

  const createForumPost = async (post) => {
    const payload = { ...post, created_by: user?.id, user_email: user?.email, comments: [] };
    const { data, error } = await supabase.from("forum_posts").insert([{ data: payload }]).select("id");
    if (error) {
      console.error(error);
      return null;
    }
    const res = await supabase.from("forum_posts").select("id,data,created_at").order("created_at", { ascending: false });
    const formattedF = (res.data || []).map((p) => {
      const commentsData = Array.isArray(p.data?.comments) ? p.data.comments : [];
      return {
        id: p.id,
        category: p.data?.category || "life",
        title: { en: p.data?.title_en || p.data?.title || "Untitled", zh: p.data?.title_zh || p.data?.title || "未命名" },
        body: { en: p.data?.body_en || p.data?.body || "", zh: p.data?.body_zh || p.data?.body || "" },
        author: { en: p.data?.author_en || p.data?.author || "Anonymous", zh: p.data?.author_zh || p.data?.author || "匿名" },
        comments: commentsData.length,
        commentsData,
        tags: { en: p.data?.tags_en || p.data?.tags || [], zh: p.data?.tags_zh || p.data?.tags || [] },
        timestamp: p.data?.timestamp || p.created_at,
        raw: p.data || {},
      };
    });
    setForumPostsState(formattedF);
    return data;
  };

  const createForumComment = async (post, commentText) => {
    if (!post) return null;
    if (!user) {
      window.alert(lang === "en" ? "Please sign in before commenting." : "请先登录再评论。");
      return null;
    }
    const comment = {
      id: `${Date.now()}`,
      post_id: post.id,
      author_en: user?.email || "Anonymous",
      author_zh: user?.email || "匿名",
      text_en: commentText,
      text_zh: commentText,
      created_by: user?.id,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("forum_comments")
      .insert([{ post_id: post.id, body: commentText, created_by: user.id, user_email: user.email }])
      .select("id,post_id,body,created_by,user_email,created_at")
      .single();
    if (error) {
      console.error(error);
      return null;
    }
    const savedComment = data ? {
      id: data.id,
      post_id: data.post_id,
      author_en: data.user_email || "Anonymous",
      author_zh: data.user_email || "匿名",
      text_en: data.body,
      text_zh: data.body,
      created_by: data.created_by,
      created_at: data.created_at,
    } : comment;

    const updatedForumComments = [...forumComments, savedComment];
    setForumComments(updatedForumComments);
    const commentsByPost = updatedForumComments.reduce((groups, item) => {
      groups[item.post_id] = groups[item.post_id] || [];
      groups[item.post_id].push(item);
      return groups;
    }, {});
    const res = await supabase.from("forum_posts").select("id,data,created_at").order("created_at", { ascending: false });
    const formattedF = (res.data || []).map((p) => {
      const commentsData = commentsByPost[p.id] || (Array.isArray(p.data?.comments) ? p.data.comments : []);
      return {
        id: p.id,
        category: p.data?.category || "life",
        title: { en: p.data?.title_en || p.data?.title || "Untitled", zh: p.data?.title_zh || p.data?.title || "未命名" },
        body: { en: p.data?.body_en || p.data?.body || "", zh: p.data?.body_zh || p.data?.body || "" },
        author: { en: p.data?.author_en || p.data?.author || "Anonymous", zh: p.data?.author_zh || p.data?.author || "匿名" },
        comments: commentsData.length,
        commentsData,
        tags: { en: p.data?.tags_en || p.data?.tags || [], zh: p.data?.tags_zh || p.data?.tags || [] },
        timestamp: p.data?.timestamp || p.created_at,
        raw: p.data || {},
      };
    });
    setForumPostsState(formattedF);
    if (selectedPost?.id === post.id) {
      setSelectedPost(formattedF.find((item) => item.id === post.id) || post);
    }
    return savedComment;
  };

  const deleteForumPost = async (id) => {
    const { error } = await supabase.from("forum_posts").delete().eq("id", id);
    if (error) console.error(error);
    setForumPostsState((prev) => prev.filter((p) => p.id !== id));
  };

  // Favorites: simple per-demo user 'demo-user'
  const toggleFavorite = async (item, type = "housing") => {
    try {
      if (!user) {
        window.alert(lang === "en" ? "Please sign in before saving favorites." : "请先登录再收藏。");
        return null;
      }
      const existing = favorites.find((f) => f.item_id === String(item.id) && f.item_type === type);
      if (existing) {
        await supabase.from("favorites").delete().eq("id", existing.id);
        setFavorites((prev) => prev.filter((f) => f.id !== existing.id));
        return null;
      }
      const payload = {
        user_id: user.id,
        item_id: String(item.id),
        item_type: type,
        title: item.title?.[lang] || item.title || item.name?.[lang] || "Untitled",
        subtitle: item.subtitle || item.area || "",
        data: item.raw || item,
      };
      const { data, error } = await supabase.from("favorites").insert([payload]).select("*");
      if (error) {
        console.error(error);
        return null;
      }
      setFavorites((prev) => [ ...(prev || []), data[0] ]);
      return data[0];
    } catch (err) {
      console.error(err);
    }
  };

  const signIn = async (email, password) => {
    const response = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });
    return response;
  };

  const signUp = async (email, password) => {
    const emailRedirectTo = typeof window !== "undefined" ? window.location.origin : "https://joincampiq.com";
    const response = await supabase.auth.signUp({
      email: email.trim(),
      password,
      options: {
        emailRedirectTo,
      },
    });
    return response;
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error(error);
    setUser(null);
  };

  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      const text = `${item.title[lang]} ${item.type[lang]} ${item.area} ${item.beds[lang]} ${item.tags[lang].join(" ")}`.toLowerCase();
      return text.includes(query.toLowerCase()) && (area === "All" || item.area === area) && item.price <= maxPrice;
    });
  }, [query, area, maxPrice, lang, listings]);

  const openListing = (item) => {
    setSelectedListing(item);
    setPage("listingDetail");
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#listing-${item.id}`);
    }
  };

  if (page === "submit") return <SubmitPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} user={user} onCreateListing={createListing} />;
  if (page === "adminImport") return <AdminImportPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} onCreateListing={createListing} />;
  if (page === "adminRoommateImport") return <AdminRoommateImportPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} onCreateRoommate={createRoommate} />;
  if (page === "housing") return <HousingPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} listings={listings} onSelectListing={openListing} />;
  if (page === "report") return <ReportPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} />;
  if (page === "join") return <JoinPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} />;
  if (page === "forum") return <ForumPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} forumPosts={forumPostsState} onSelectPost={(post) => { setSelectedPost(post); setPage("forumDetail"); }} />;
  if (page === "forumDetail") return <ForumDetailPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} post={selectedPost} user={user} onDeletePost={deleteForumPost} onToggleFavorite={(item) => toggleFavorite(item, "forum")} onCreateComment={createForumComment} />;
  if (page === "createDiscussion") return <CreateDiscussionPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} onCreatePost={createForumPost} />;
  if (page === "messages") return <MessagesPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} conversations={conversationThreads} notifications={realNotifications} readNotificationIds={readNotificationIds} onOpenConversation={openConversation} onOpenNotification={(notification) => {
    markNotificationRead(notification.id);
    const matchingPost = forumPostsState.find((post) => post.id === notification.postId);
    if (matchingPost) {
      setSelectedPost(matchingPost);
      setPage("forumDetail");
    }
  }} />;
  if (page === "chat") return <ChatPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} chatThread={selectedThread} onSendMessage={sendPrivateMessage} />;
  if (page === "roommate") return <RoommatePage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} roommates={roommates} listings={listings} onSelectListing={openListing} onSelectRoommate={(profile) => { setSelectedRoommate(profile); setPage("roommateDetail"); }} />;
  if (page === "postRoommate") return <PostRoommatePage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} user={user} onCreateRoommate={createRoommate} />;
  if (page === "roommateDetail") return <RoommateDetailPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} profile={selectedRoommate} onDeleteProfile={deleteRoommate} onToggleFavorite={(item) => toggleFavorite(item, "roommate")} onStartConversation={startConversation} />;
  if (page === "me") return <MePage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} favorites={favorites} myListings={myListings} myRoommates={myRoommates} myForumPosts={myForumPosts} user={user} onSignIn={signIn} onSignUp={signUp} onSignOut={signOut} />;
  if (page === "listingDetail") return <ListingDetailPage lang={lang} setLang={setLang} t={t} setPage={navigateToPage} listing={selectedListing} onToggleFavorite={(item) => toggleFavorite(item, "housing")} onStartConversation={startConversation} />;

  return (
    <HomePage
      lang={lang}
      setLang={setLang}
      t={t}
      setPage={navigateToPage}
      query={query}
      setQuery={setQuery}
      area={area}
      setArea={setArea}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      filteredListings={filteredListings}
      onSelectListing={openListing}
    />
  );
}
