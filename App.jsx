import React, { useMemo, useState, useEffect } from "react";
import { supabase } from "./lib/supabase";

function CampiqLogo() {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 via-amber-400 to-stone-600 p-2 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-lg font-black tracking-tight lowercase text-orange-600">
        cq
      </div>
    </div>
  );
}

const dictionary = {
  en: {
    safer: "A student community platform for housing, roommates, forums, and campus life.",
    listings: "Housing",
    roommate: "Roommates",
    forum: "Forum",
    how: "How it works",
    
    join: "Join & Feedback",
    submitListing: "＋ Post Housing",
    backHome: "← Back Home",
    badge: "Campus life, housing, roommates, forum, and student resources",
    heroTitle: "Bring everything students need for campus life into one place.",
    heroText: "Campiq connects housing, roommates, courses, community, marketplace, events, and campus resources in one student platform.",
    browse: "Browse Housing",
    findRoommate: "Find Roommates",
    submitPost: "Submit a Post",
    firstFocus: "First launch focus",
    listingTitle: "Housing Listings",
    listingText: "Campiq brings together housing posts from different student communities, making the listing pool broader than a single group chat or one social platform.",
    searchPlaceholder: "Search by area, room type, tag...",
    maxPrice: "Max price",
    reviewed: "✓ Reviewed",
    needsReview: "Needs review",
    viewDetails: "View Details",
    housingPageTitle: "Housing Search",
    housingPageIntro: "Browse housing posts from local students and international students. Filter by long-term or short-term lease, room type, laundry, area, and price range.",
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
    howTitle: "Why Campiq can have richer housing resources",
    howText: "Most housing information is separated across language groups, friend circles, Instagram, WeChat, and group chats. Campiq is designed to connect these channels.",
    reportTitle: "Report a suspicious listing",
    reportText: "Found a fake post, scam risk, wrong price, or outdated listing? Send us the link and details.",
    reportPlaceholder: "Paste listing link and explain the issue...",
    submitReport: "Submit Report",
    joinTitle: "Join or collaborate with Campiq",
    joinText: "Want to join the team, collaborate, or report issues? Email our official address below.",
    name: "Your name",
    contact: "Email / WeChat / IG",
    contactCampiq: "Contact Campiq",
    socialTitle: "Built for social sharing",
    socialText: "Every listing can later be shared to Instagram, WeChat, group chats, or friends. The website works as the database, and social platforms bring the traffic.",
    footer: "© 2026 Campiq. Student housing information platform. First launch: UCSB housing, sublease, and roommate matching.",
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
      "Housing posts from local students and international students can appear in one shared space.",
      "Posts can be shown in English or Chinese, so language is no longer a barrier to finding housing.",
      "More connected communities mean more subleases, roommate options, and apartment leads.",
    ],
  },
  zh: {
    safer: "连接学生租房资源的平台。",
    listings: "租房",
    roommate: "找室友",
    forum: "论坛",
    how: "运作方式",
    
    join: "加入我们 & 意见反馈",
    submitListing: "＋ 发布租房信息",
    backHome: "← 返回首页",
    badge: "↔ 本地学生 × 国际学生资源互通",
    heroTitle: "把校园生活需要的一切资源集中到一个地方。",
    heroText: "Campiq 连接学生的租房、室友、课程、论坛、二手、活动与校园信息，让资源流通更简单。",
    browse: "浏览租房",
    findRoommate: "找室友",
    submitPost: "发布信息",
    firstFocus: "第一阶段重点",
    listingTitle: "租房信息",
    listingText: "Campiq 把不同学生圈层里的房源集中起来，而不是只依赖某一个微信群、Instagram 账号或朋友圈。",
    searchPlaceholder: "搜索地区、房型、标签……",
    maxPrice: "最高价格",
    reviewed: "✓ 已审核",
    needsReview: "待审核",
    viewDetails: "查看详情",
    housingPageTitle: "租房搜索",
    housingPageIntro: "浏览来自本地学生和国际学生的房源。可以按长租短租、房型、套内洗衣、地区和价格区间筛选。",
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
    howTitle: "为什么 Campiq 的房源会更丰富",
    howText: "现在很多租房信息分散在中文圈、本地学生圈、Instagram、微信和各种群聊里。Campiq 的重点是把这些渠道连接起来。",
    reportTitle: "举报可疑房源",
    reportText: "如果你发现虚假房源、诈骗风险、价格错误或已过期信息，可以把链接和情况发给我们。",
    reportPlaceholder: "粘贴房源链接，并说明问题……",
    submitReport: "提交举报",
    joinTitle: "加入或合作 Campiq",
    joinText: "欢迎想参与房源收集、社交媒体、设计、翻译或校园合作的同学联系我们。",
    name: "你的名字",
    contact: "邮箱 / 微信 / IG",
    contactCampiq: "联系 Campiq",
    socialTitle: "为社交传播而设计",
    socialText: "未来每个房源都可以分享到 Instagram、微信、群聊或朋友。网站作为信息数据库，社交平台负责带来流量。",
    footer: "© 2026 Campiq。学生租房信息平台。第一阶段：UCSB 租房、转租和室友匹配。",
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

function formatListing(item) {
  const roomFormat = item.room_format || (item.bedrooms ? `${item.bedrooms} Bed ${item.bathrooms || 1} Bath` : "Studio");
  const tags = toArray(item.tags, ["Housing"]);

  return {
    id: item.id,
    raw: item,
    title: { en: item.title || "Untitled", zh: item.title || "未命名" },
    type: { en: item.listing_type || "Rental", zh: item.listing_type || "租房" },
    price: item.price ?? 0,
    leaseType: item.lease_type || "shortTerm",
    roomFormat,
    roomType: item.listing_type || roomFormat,
    laundry: item.utilities === "Included",
    parking: item.parking === "Yes",
    evCharging: item.ev_charging === "Yes",
    area: item.area || item.location || "Isla Vista",
    address: item.address || item.location || "",
    beds: { en: item.bedrooms ? `${item.bedrooms} Bed` : "Studio", zh: item.bedrooms ? `${item.bedrooms} 卧室` : "Studio" },
    bathrooms: item.bathrooms || 1,
    moveInDate: item.move_in_date || "",
    dates: { en: item.move_in_date ? `Available ${item.move_in_date}` : "Available now", zh: item.move_in_date ? `可入住 ${item.move_in_date}` : "现在可入住" },
    description: item.description || "",
    utilities: item.utilities || "Included",
    contact: item.contact_info || {},
    images: toArray(item.images),
    tags: { en: tags, zh: tags },
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

const demoPrivateMessages = [
  { id: 1, title: "Welcome to Campiq", subtitle: "System message", body: { en: "This is a demo chat thread. Use in-app messaging to connect with posters without sharing contact info.", zh: "这是站内私信演示。通过站内消息联系发布者，无需公开个人联系方式。" } },
  { id: 2, title: "New response from Alice", subtitle: "Private message", body: { en: "Hi, I'm interested in your listing. Can we talk about the lease dates?", zh: "你好，我对你的房源感兴趣。可以聊一下租期吗？" } },
];

const demoNotifications = [
  { id: 1, title: "Forum reply", subtitle: "Comment notification", body: { en: "Someone replied to your question in the campus forum.", zh: "有人回复了你在校园论坛中的问题。" } },
  { id: 2, title: "New post matching your search", subtitle: "Housing alert", body: { en: "A listing that matches your budget and area preferences just appeared.", zh: "一个符合你预算和地区偏好的房源刚刚发布。" } },
];

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
  const go = (target) => {
    setPage(target);
    setMobileOpen(false);
  };

  const navItems = [
    { key: "home", label: "Home" },
    { key: "housing", label: t.listings },
    { key: "roommate", label: t.roommate },
    { key: "forum", label: t.forum },
    { key: "me", label: lang === "en" ? "Me" : "我的" },
    { key: "join", label: t.join },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-2 text-left">
          <CampiqLogo />
          <div>
            <div className="text-lg font-bold tracking-tight">Campiq</div>
            <div className="text-[11px] text-zinc-500">{t.safer}</div>
          </div>
        </button>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
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
          {showBack ? (
            <Button variant="light" onClick={() => go("home")}>{t.backHome}</Button>
          ) : (
            <Button className="hidden sm:inline-flex" onClick={() => go("submit")}>{t.submitListing}</Button>
          )}
          {!showBack && (
            <button
              onClick={() => setMobileOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-orange-200 bg-white text-lg md:hidden"
              aria-label="Open mobile menu"
            >
              ☰
            </button>
          )}
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
          <button onClick={() => go("submit")} className="rounded-2xl bg-zinc-900 px-4 py-3 text-left text-white">
              {t.submitListing}
            </button>
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
    { en: "Housing request", zh: "求租" },
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
    if (!form.address?.trim()) errors.push(getLabel("Exact address is required.", "具体地址为必填项。"));
    if (!form.moveInDate) errors.push(getLabel("Available date is required.", "可入住日期为必填项。"));
    if (!form.listingType) errors.push(getLabel("Listing type is required.", "房源类型为必填项。"));
    if (!form.utilities) errors.push(getLabel("Utilities selection is required.", "水电费选择为必填项。"));
    if (!form.parking) errors.push(getLabel("Parking selection is required.", "车位选择为必填项。"));
    if (!form.evCharging) errors.push(getLabel("EV charging selection is required.", "充电设施选择为必填项。"));
    if (!form.pets) errors.push(getLabel("Pets preference is required.", "宠物偏好为必填项。"));
    if (!form.genderPref) errors.push(getLabel("Gender preference is required.", "性别要求为必填项。"));
    if (!form.nearbyBus) errors.push(getLabel("Nearby bus selection is required.", "公交可达性为必填项。"));
    if (!form.livingRoomBedroom) errors.push(getLabel("Living room / bedroom layout selection is required.", "厅卧结构为必填项。"));
    if (!isStudio) {
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
      setFeedback(lang === "zh" ? "房源已提交，正在载入最新列表。" : "Listing submitted. Loading the newest listings.");
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

        {!user ? (
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
              <option value="" disabled>{getLabel("Listing Type", "房源类型")}</option>
              {listingTypeOptions.map((opt) => (
                <option key={opt.en} value={opt.en}>{lang === "zh" ? opt.zh : opt.en}</option>
              ))}
            </select>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 text-sm font-medium">
                <input type="checkbox" checked={isStudio} onChange={(e) => setIsStudio(e.target.checked)} className="h-4 w-4" />
                {getLabel("Studio", "Studio")}
              </label>
            </div>
            {!isStudio && (
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
            <input value={form.price} onChange={(e) => update("price", e.target.value)} type="number" min="0" className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Monthly rent $", "月租 $")} />
            <input value={form.moveInDate} onChange={(e) => update("moveInDate", e.target.value)} type="date" className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={getLabel("Move-in date", "入住日期")} />
            <select value={form.utilities} onChange={(e) => update("utilities", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{getLabel("Utilities", "水电费")}</option>
              <option value="Included">{getLabel("Utilities included", "包水电费")}</option>
              <option value="Not included">{getLabel("Utilities not included", "不包水电费")}</option>
              <option value="Partially included">{getLabel("Utilities partially included", "部分包水电费")}</option>
            </select>
            <select value={form.parking} onChange={(e) => update("parking", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{getLabel("Parking", "车位")}</option>
              <option value="Yes">{getLabel("Parking: Yes", "有")}</option>
              <option value="No">{getLabel("Parking: No", "没有")}</option>
            </select>
            <select value={form.evCharging} onChange={(e) => update("evCharging", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{getLabel("EV Charging", "充电设施")}</option>
              <option value="Yes">{getLabel("EV charging: Yes", "有")}</option>
              <option value="No">{getLabel("EV charging: No", "没有")}</option>
            </select>
            <select value={form.pets} onChange={(e) => update("pets", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{getLabel("Pets", "宠物")}</option>
              <option value="Allowed">{getLabel("Pets: Allowed", "可接受")}</option>
              <option value="Not allowed">{getLabel("Pets: Not allowed", "不可接受")}</option>
            </select>
            <select value={form.genderPref} onChange={(e) => update("genderPref", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option value="" disabled>{getLabel("Gender Preference", "性别要求")}</option>
              <option value="No preference">{getLabel("No preference", "不限")}</option>
              <option value="Male">{getLabel("Male", "男")}</option>
              <option value="Female">{getLabel("Female", "女")}</option>
            </select>
            <input value={form.address} onChange={(e) => update("address", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={getLabel("Exact address / location", "具体地址 / 位置")} />
            {form.address && (
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
                <p className="mt-2 text-sm text-zinc-500">{getLabel("Add up to 6 photos to show the room, kitchen, bathroom, and entrance.", "最多上传 6 张照片，展示房间、厨房、卫生间和入口。")}</p>
              </div>
            )}
            <div className="md:col-span-2 rounded-3xl border border-dashed border-zinc-200 bg-zinc-50 p-5">
              <h3 className="text-lg font-semibold">{getLabel("Contact details", "联系信息")}</h3>
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

function ChatPage({ lang, setLang, t, setPage, chatThread, onSendMessage }) {
  const [messageText, setMessageText] = useState("");
  const [showTranslation, setShowTranslation] = useState(false);

  const handleSend = () => {
    if (messageText.trim()) {
      onSendMessage(messageText);
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
          {(chatThread.messages || []).map((msg, idx) => (
            <div key={idx} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
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
          ))}
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

function ListingDetailPage({ lang, setLang, t, setPage, listing, onToggleFavorite }) {
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

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.6fr_.9fr]">
          <div className="space-y-6">
            <Card className="overflow-hidden">
              {listing?.images?.length > 0 ? (
                <div className="grid gap-2 sm:grid-cols-2">
                  {listing.images.slice(0, 4).map((src, idx) => (
                    <img key={idx} src={src} alt={`Listing image ${idx + 1}`} className="h-48 w-full object-cover" />
                  ))}
                </div>
              ) : (
                <img src={listing?.image || "https://via.placeholder.com/1200x600?text=No+image"} alt={listing?.title?.[lang] || listing?.title} className="h-72 w-full object-cover" />
              )}
              <div className="p-6">
                <div className="mb-3 text-sm text-zinc-500">{listing?.area || listing?.address}</div>
                <h1 className="text-3xl font-bold">{listing?.title?.[lang] || listing?.title}</h1>
                <p className="mt-3 text-zinc-600">{listing?.description || listing?.dates?.[lang]}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Rent" : "租金"}</div>
                    <div className="mt-1 text-2xl font-semibold">${listing?.price ?? "N/A"}<span className="text-sm text-zinc-500">/mo</span></div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Move-in" : "入住"}</div>
                    <div className="mt-1 font-semibold">{listing?.moveInDate || (lang === "en" ? "Flexible" : "灵活")}</div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Room" : "房型"}</div>
                    <div className="mt-1 font-semibold">{listing?.roomFormat || listing?.beds?.[lang] || ""}</div>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Utilities" : "费用"}</div>
                    <div className="mt-1 font-semibold">{listing?.utilities || "Included"}</div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Parking" : "车位"}</div>
                    <div className="mt-1 font-semibold">{listing?.parking ? (lang === "en" ? "Yes" : "是") : (lang === "en" ? "No" : "否")}</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold">{lang === "en" ? "Listing details" : "房源详情"}</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Address" : "地址"}</div>
                    <div className="mt-1 font-semibold">{listing?.address || listing?.location || listing?.area}</div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Contact" : "联系方式"}</div>
                    <div className="mt-1 space-y-1 text-sm text-zinc-700">
                      {listing?.contact?.email && <div>Email: {listing.contact.email}</div>}
                      {listing?.contact?.phone && <div>{lang === "en" ? "Phone" : "电话"}: {listing.contact.phone}</div>}
                      {listing?.contact?.wechat && <div>WeChat: {listing.contact.wechat}</div>}
                      {listing?.contact?.instagram && <div>IG: {listing.contact.instagram}</div>}
                      {!listing?.contact?.email && !listing?.contact?.phone && !listing?.contact?.wechat && !listing?.contact?.instagram && <div className="text-zinc-500">{lang === "en" ? "Contact information will be available after posting." : "发布后将显示联系信息。"}</div>}
                    </div>
                  </div>
                </div>
                {listing?.address && (
                  <div className="mt-6 overflow-hidden rounded-3xl border">
                    <iframe title="Map" src={`https://maps.google.com/maps?q=${mapQuery}&output=embed`} className="h-64 w-full border-0" allowFullScreen loading="lazy"></iframe>
                  </div>
                )}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="sticky top-24">
              <div className="p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Published by" : "发布者"}</div>
                    <h2 className="mt-2 text-xl font-semibold">{listing?.contact?.email || (lang === "en" ? "Campiq user" : "Campiq 用户")}</h2>
                  </div>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{listing?.type?.[lang] || listing?.type}</span>
                </div>
                <div className="mt-6 space-y-3">
                  <Button variant="light" className="w-full" onClick={() => onToggleFavorite?.(listing, "housing")}>{lang === "en" ? "Save" : "收藏"}</Button>
                </div>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h2 className="text-2xl font-bold">{lang === "en" ? "Quick facts" : "快速信息"}</h2>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Bedrooms" : "卧室"}</div>
                    <div className="mt-1 font-semibold">{listing?.beds?.[lang] || listing?.roomFormat || "N/A"}</div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Bathrooms" : "卫生间"}</div>
                    <div className="mt-1 font-semibold">{listing?.bathrooms || "N/A"}</div>
                  </div>
                  <div className="rounded-2xl border bg-white p-4">
                    <div className="text-sm text-zinc-500">{lang === "en" ? "Budget range" : "预算范围"}</div>
                    <div className="mt-1 font-semibold">${listing?.budgetRange?.min || 0} - ${listing?.budgetRange?.max || 0}</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

      </main>
    </div>
  );
}

function MessagesPage({ lang, setLang, t, setPage, onSelectThread }) {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">
            {lang === "en" ? "Messages" : "消息"}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{lang === "en" ? "Messages" : "消息"}</h1>
          <p className="mt-3 text-zinc-600">{lang === "en" ? "This demo inbox shows private messages and forum notifications." : "这是一个演示收件箱，用于私信和论坛通知。"}</p>
        </div>

        <div className="grid gap-6">
          <Card>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800">{lang === "en" ? "Private messages" : "私人消息"}</span>
              </div>
              <div className="space-y-4">
                {demoPrivateMessages.map((message) => (
                  <div
                    key={message.id}
                    onClick={() => onSelectThread(message)}
                    className="cursor-pointer rounded-3xl border border-orange-100 bg-white p-4 shadow-sm transition hover:shadow-lg hover:border-orange-300"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h2 className="text-lg font-semibold text-zinc-900">{message.title}</h2>
                        <p className="text-sm text-zinc-500">{message.subtitle}</p>
                      </div>
                      <span className="text-xs uppercase text-orange-600">{lang === "en" ? "New" : "新"}</span>
                    </div>
                    <p className="mt-3 text-zinc-600">{message?.body?.[lang] || message?.body || ""}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3 text-sm font-semibold text-zinc-700">
                <span className="rounded-full bg-amber-100 px-3 py-1 text-amber-800">{lang === "en" ? "Forum and notifications" : "论坛通知"}</span>
              </div>
              <div className="space-y-4">
                {demoNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    onClick={() => onSelectThread(notification)}
                    className="cursor-pointer rounded-3xl border border-orange-100 bg-white p-4 shadow-sm transition hover:shadow-lg hover:border-orange-300"
                  >
                    <h2 className="text-lg font-semibold text-zinc-900">{notification.title}</h2>
                    <p className="mt-2 text-sm text-zinc-600">{notification?.body?.[lang] || notification?.body || ""}</p>
                    <p className="mt-3 text-xs uppercase text-zinc-500">{notification.subtitle}</p>
                  </div>
                ))}
              </div>
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
  const [form, setForm] = useState({ suggestion: "", name: "", contact: "", message: "" });
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
        <Card className="bg-amber-50">
          <form onSubmit={submit} className="p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-amber-100 text-2xl">👥</div>
            <h1 className="text-4xl font-bold tracking-tight">{t.joinTitle}</h1>
            <p className="mt-4 text-zinc-600">{t.joinText}</p>
            <div className="mt-8 rounded-3xl border border-amber-100 bg-white p-5">
              <h2 className="text-xl font-bold">{t.suggestionTitle}</h2>
              <textarea value={form.suggestion} onChange={(e) => update("suggestion", e.target.value)} className="mt-4 h-32 w-full rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={t.suggestionPlaceholder} />
            </div>
            <div className="mt-8 grid gap-4">
              <input value={form.name} onChange={(e) => update("name", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={t.name} />
              <input value={form.contact} onChange={(e) => update("contact", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={t.contact} />
              <textarea value={form.message} onChange={(e) => update("message", e.target.value)} className="h-40 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={lang === "en" ? "Tell us how you'd like to collaborate with Campiq..." : "介绍一下你想如何参与或合作 Campiq……"} />
              <Button variant="blue" type="submit">{t.contactCampiq}</Button>
              {submitted && <p className="rounded-2xl bg-white p-4 text-sm font-semibold text-orange-700">{lang === "en" ? "Demo saved. In the full product, this can connect to email, Airtable, or a database." : "演示保存成功。正式版本中可以连接邮箱、Airtable 或数据库。"}</p>}
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}

function RoommatePage({ lang, setLang, t, setPage, onSelectRoommate, roommates }) {
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
        {!user ? (
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
                  {grades.map((g, i) => <option key={g} value={g}>{lang === "en" ? g : gradesZh[i]}</option>)}
                </select>
                <input type="number" value={form.age} onChange={(e) => update("age", e.target.value)} placeholder={label("Age", "年龄")} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300" />
                <select value={form.gender} onChange={(e) => update("gender", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Gender", "性别")}</option>
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
                  {housingPrefs.map((p, i) => <option key={p} value={p}>{lang === "en" ? p : housingPrefsZh[i]}</option>)}
                </select>
                <select value={form.sleepSchedule} onChange={(e) => update("sleepSchedule", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Sleep Schedule", "作息时间")}</option>
                  {sleepOptions.map((s, i) => <option key={s} value={s}>{lang === "en" ? s : sleepOptionsZh[i]}</option>)}
                </select>
                <select value={form.smoking} onChange={(e) => update("smoking", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Smoking", "是否抽烟")}</option>
                  {binaryOptions.map((o, i) => <option key={o} value={o}>{lang === "en" ? o : binaryOptionsZh[i]}</option>)}
                </select>
                <select value={form.drinking} onChange={(e) => update("drinking", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Drinking", "是否喝酒")}</option>
                  {binaryOptions.map((o, i) => <option key={o} value={o}>{lang === "en" ? o : binaryOptionsZh[i]}</option>)}
                </select>
                <select value={form.pets} onChange={(e) => update("pets", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Pets", "是否有宠物")}</option>
                  {["No pets", "Has pet", "Pet friendly"].map((o, i) => <option key={o} value={o}>{lang === "en" ? o : ["没有宠物", "有宠物", "宠物友好"][i]}</option>)}
                </select>
                <select value={form.weed} onChange={(e) => update("weed", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Weed", "大麻")}</option>
                  {["No", "Yes", "Prefer not to say"].map((o, i) => <option key={o} value={o}>{lang === "en" ? o : ["否", "是", "不想说"][i]}</option>)}
                </select>
                <select value={form.hasCar} onChange={(e) => update("hasCar", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Car", "是否有车")}</option>
                  {["No", "Yes"].map((o) => <option key={o} value={o}>{lang === "en" ? o : (o === "No" ? "否" : "是")}</option>)}
                </select>
                <select value={form.cleanliness} onChange={(e) => update("cleanliness", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Cleanliness", "卫生习惯")}</option>
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
                  {["Male", "Female", "Any"].map((g, i) => <option key={g} value={g}>{lang === "en" ? g : ["男", "女", "不限"][i]}</option>)}
                </select>
                <select value={form.preferredSleepSchedule} onChange={(e) => update("preferredSleepSchedule", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Preferred Sleep Schedule", "偏好作息")}</option>
                  {sleepOptions.map((s, i) => <option key={s} value={s}>{lang === "en" ? s : sleepOptionsZh[i]}</option>)}
                </select>
                <select value={form.preferredSmoking} onChange={(e) => update("preferredSmoking", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Smoking Preference", "抽烟偏好")}</option>
                  {binaryOptions.map((o, i) => <option key={o} value={o}>{lang === "en" ? o : binaryOptionsZh[i]}</option>)}
                </select>
                <select value={form.preferredDrinking} onChange={(e) => update("preferredDrinking", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Drinking Preference", "喝酒偏好")}</option>
                  {binaryOptions.map((o, i) => <option key={o} value={o}>{lang === "en" ? o : binaryOptionsZh[i]}</option>)}
                </select>
                <select value={form.preferredPets} onChange={(e) => update("preferredPets", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Pet Preference", "宠物偏好")}</option>
                  {["No pets", "Has pet", "Pet friendly"].map((o, i) => <option key={o} value={o}>{lang === "en" ? o : ["没有宠物", "有宠物", "宠物友好"][i]}</option>)}
                </select>
                <select value={form.preferredWeed} onChange={(e) => update("preferredWeed", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Weed Preference", "大麻偏好")}</option>
                  {["No", "Yes", "Any"].map((o, i) => <option key={o} value={o}>{lang === "en" ? o : ["否", "是", "不限"][i]}</option>)}
                </select>
                <select value={form.budgetRange} onChange={(e) => update("budgetRange", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Budget Range", "预算范围")}</option>
                  {budgetOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
                <select value={form.moveInTime} onChange={(e) => update("moveInTime", e.target.value)} className="h-12 rounded-2xl border bg-stone-50 px-4 outline-none focus:ring-2 focus:ring-orange-300">
                  <option value="">{label("Move-in Time", "入住时间")}</option>
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

function RoommateDetailPage({ lang, setLang, t, setPage, profile, onDeleteProfile, onToggleFavorite }) {
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

function ForumDetailPage({ lang, setLang, t, setPage, post, onDeletePost, onToggleFavorite }) {
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
                  const response = authMode === "signIn" ? await onSignIn(authEmail, authPassword) : await onSignUp(authEmail, authPassword);
                  setAuthMessage(response?.message || (response?.error ? response.error.message : lang === "en" ? "Check your email for verification." : "请查看邮箱进行验证。"));
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
                <Button variant="light" onClick={onSignOut}>{lang === "en" ? "Sign out" : "退出"}</Button>
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
  const [maxPrice, setMaxPrice] = useState(4500);

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
    setMaxPrice(4500);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-800">{lang === "en" ? "Housing board" : "租房板块"}</div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.housingPageTitle}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{t.housingPageIntro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => setPage("submit")}>{lang === "en" ? "Post a listing" : "发布房源"}</Button>
            <Button variant="light" onClick={() => setPage("submit")}>{lang === "en" ? "Post a housing request" : "发布求租"}</Button>
          </div>
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
              <option>{lang === "en" ? "Parking available" : "有车位"}</option>
              <option>{lang === "en" ? "No parking" : "无车位"}</option>
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
              <input type="range" min="0" max="4500" step="50" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="w-full" />
            </div>
            <div className="rounded-2xl border bg-white px-4 py-3 lg:col-span-2">
              <div className="mb-1 text-xs text-zinc-500">{t.maxPrice}: ${maxPrice}</div>
              <input type="range" min="500" max="4500" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full" />
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
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{item?.type?.[lang] || (typeof item?.type === 'string' ? item.type : '')}</span>
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-orange-800">{item?.roomFormat || item?.beds?.[lang] || ''}</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{item?.laundry ? t.hasLaundry : t.noLaundry}</span>
                </div>
                <h3 className="text-xl font-bold">{item?.title?.[lang] || item?.title || "Untitled"}</h3>
                <div className="mt-2 text-sm text-zinc-500">📍 {item?.address || item?.area || "Unknown"}</div>
                <div className="mt-4 text-3xl font-bold">${item?.price ?? "N/A"}<span className="text-sm font-medium text-zinc-500">/mo</span></div>
                <div className="mt-3 space-y-1 text-sm text-zinc-600"><p>{item?.beds?.[lang] || item?.beds || ""}</p><p>{item?.dates?.[lang] || item?.dates || ""}</p></div>
                <div className="mt-4 flex flex-wrap gap-2">{(item?.tags?.[lang] || []).map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{tag}</span>)}</div>
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
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-zinc-600 shadow-sm">{t.badge}</div>
              <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">{t.heroTitle}</h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">{t.heroText}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => setPage("housing")}>{t.browse}</Button>
                <Button variant="light" onClick={() => setPage("roommate")}>{t.findRoommate}</Button>
                <Button variant="light" onClick={() => setPage("submit")}>{t.submitPost}</Button>
                <Button variant="light" onClick={() => setPage("forum")}>{t.forumCta}</Button>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm text-zinc-600">
                {["UCSB", "Isla Vista", "Goleta", lang === "en" ? "Summer Sublease" : "暑期转租"].map((x) => <span key={x} className="rounded-full bg-white px-4 py-2 shadow-sm">{x}</span>)}
              </div>
            </div>
            <div className="grid gap-2">
              <Card className="overflow-hidden rounded-[2rem] shadow-2xl transition hover:-translate-y-1 hover:shadow-3xl cursor-pointer" onClick={() => setPage("housing")}>
                <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80" alt="Student apartment" className="h-32 w-full object-cover" />
                <div className="bg-white p-4">
                  <div className="text-sm font-semibold text-amber-600">Featured</div>
                  <h2 className="mt-1 text-xl font-bold">{lang === "en" ? "Summer housing is open now" : "暑期房源正在开放"}</h2>
                  <p className="mt-2 text-zinc-600">{lang === "en" ? "Post your sublease or browse available rooms before the June rush." : "在六月转租高峰前，发布你的转租或浏览可租房间。"}</p>
                </div>
              </Card>

              <div className="grid gap-3 sm:grid-cols-2">
                <Card className="overflow-hidden cursor-pointer transition hover:-translate-y-1 hover:shadow-xl" onClick={() => setPage("forum")}>
                  <div className="h-20 bg-gradient-to-br from-orange-200 via-orange-100 to-amber-50" />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-orange-700">{lang === "en" ? "Main feature" : "主推功能"}</div>
                    <h3 className="mt-1 text-xl font-bold">{t.forumTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{lang === "en" ? "Course tips, professor reviews, food discussions, events, second-hand posts, and searchable student discussions." : "选课建议、教授评价、食堂讨论、活动信息、二手交易和可长期搜索的学生讨论。"}</p>
                  </div>
                </Card>

                <Card className="overflow-hidden cursor-pointer transition hover:-translate-y-1 hover:shadow-xl" onClick={() => setPage("roommate")}>
                  <div className="h-20 bg-gradient-to-br from-orange-200 via-orange-100 to-amber-50" />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-orange-700">{lang === "en" ? "Trending" : "热门功能"}</div>
                    <h3 className="mt-1 text-xl font-bold">{t.roommateTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{lang === "en" ? "Match with compatible roommates based on lifestyle, habits, dorm plans, schedule, pets, smoking, and more." : "根据生活习惯、作息、宿舍偏好、宠物、抽烟等信息智能匹配室友。"}</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section id="platform" className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card className="overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-100 lg:col-span-2">
              <div className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="mb-2 text-sm font-semibold text-orange-700">{lang === "en" ? "Main feature" : "主推功能"}</div>
                  <h2 className="text-3xl font-bold tracking-tight">{t.forumTitle}</h2>
                  <p className="mt-3 max-w-3xl text-zinc-600">{t.forumIntro}</p>
                </div>
                <Button onClick={() => setPage("forum")}>{t.forumCta}</Button>
              </div>
            </Card>

            <Card className="overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-100">
              <div className="p-8">
                <div className="mb-2 text-sm font-semibold text-orange-700">{lang === "en" ? "Trending" : "重点推广"}</div>
                <h2 className="text-3xl font-bold tracking-tight">{t.roommateTitle}</h2>
                <p className="mt-3 text-zinc-600">{t.roommateText}</p>
                <Button className="mt-5" onClick={() => setPage("roommate")}>{t.roommateCta}</Button>
              </div>
            </Card>
          </div>

          <Card className="mt-6 bg-white">
            <div className="p-8">
              <h2 className="text-3xl font-bold tracking-tight">{t.howTitle}</h2>
              <p className="mt-3 text-zinc-600">{t.howText}</p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {t.steps.map((step, index) => <div key={step} className="rounded-3xl bg-stone-50 p-6"><div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-zinc-900 text-white">{index + 1}</div><p className="text-lg font-medium leading-7">{step}</p></div>)}
              </div>
            </div>
          </Card>
        </section>

        <section id="listings" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">{t.firstFocus}</div>
            <h2 className="text-3xl font-bold tracking-tight">{t.listingTitle}</h2>
            <p className="mt-2 text-zinc-600">{t.listingText}</p>
          </div>
          <Card className="mb-8">
            <div className="grid gap-4 p-4 md:grid-cols-[1fr_180px_220px]">
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.searchPlaceholder} className="h-12 w-full rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" />
              <select value={area} onChange={(e) => setArea(e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
                <option>All</option>
                <option>Isla Vista</option>
                <option>Goleta</option>
              </select>
              <div className="rounded-2xl border bg-white px-4 py-2">
                <div className="mb-1 text-xs text-zinc-500">{t.maxPrice}: ${maxPrice}</div>
                <input type="range" min="1000" max="4500" step="50" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full" />
              </div>
            </div>
          </Card>
          <div className="grid gap-6 md:grid-cols-3">
            {filteredListings.map((item) => (
              <Card key={item.id} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
                <img src={item.image} alt={item.title[lang]} className="h-52 w-full object-cover" />
                <div className="p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{item.type[lang]}</span>
                    <span className={item.verified ? "text-xs font-medium text-emerald-700" : "text-xs text-zinc-400"}>{item.verified ? t.reviewed : t.needsReview}</span>
                  </div>
                  <h3 className="text-xl font-bold">{item.title[lang]}</h3>
                  <div className="mt-2 text-sm text-zinc-500">📍 {item.area}</div>
                  <div className="mt-4 text-3xl font-bold">${item.price}<span className="text-sm font-medium text-zinc-500">/mo</span></div>
                  <div className="mt-3 space-y-1 text-sm text-zinc-600"><p>{item.beds[lang]}</p><p>{item.dates[lang]}</p></div>
                  <div className="mt-4 flex flex-wrap gap-2">{item.tags[lang].map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{tag}</span>)}</div>
                  <Button className="mt-5 w-full" onClick={() => { onSelectListing(item); }}>{t.viewDetails}</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Card id="join" className="bg-gradient-to-br from-amber-50 to-orange-100">
            <div className="p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-orange-700">👥</div>
              <h2 className="text-2xl font-bold">{t.joinTitle}</h2>
              <p className="mt-3 text-zinc-600">{lang === "en" ? "Join the project, collaborate with us, leave suggestions, or report suspicious listings here." : "你可以在这里加入项目、合作、提交建议，或者举报可疑房源与平台问题。"}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={t.name} />
                <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={t.contact} />
              </div>
              <textarea className="mt-4 h-32 w-full rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-orange-300" placeholder={lang === "en" ? "Suggestions, collaboration ideas, or report details..." : "建议、合作想法，或举报内容……"} />
              <Button variant="blue" className="mt-4">{t.contactCampiq}</Button>
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
  const [page, setPage] = useState("home");
  const [selectedListing, setSelectedListing] = useState(null);
  const [selectedRoommate, setSelectedRoommate] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [myListings, setMyListings] = useState([]);
  const [myRoommates, setMyRoommates] = useState([]);
  const [myForumPosts, setMyForumPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);
  const t = dictionary[lang];
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      const { data, error } = await supabase
        .from("listings")
        .select("*");

      if (error) {
        console.error(error);
        return;
      }

      const formatted = (data || []).map((item) => {
        const roomFormat = item.room_format || (item.bedrooms ? `${item.bedrooms} Bed ${item.bathrooms || 1} Bath` : "Studio");
        return ({
          id: item.id,
          title: { en: item.title || "Untitled", zh: item.title || "未命名" },
          type: { en: item.listing_type || "Rental", zh: item.listing_type || "租房" },
          price: item.price ?? 0,
          leaseType: item.lease_type || "shortTerm",
          roomFormat,
          roomType: item.listing_type || roomFormat,
          laundry: item.utilities === "Included",
          parking: item.parking === "Yes",
          evCharging: item.ev_charging === "Yes",
          area: item.area || item.location || "Isla Vista",
          address: item.address || item.location || "",
          beds: { en: item.bedrooms ? `${item.bedrooms} Bed` : "Studio", zh: item.bedrooms ? `${item.bedrooms} 卧` : "Studio" },
          bathrooms: item.bathrooms || 1,
          moveInDate: item.move_in_date || "",
          dates: { en: item.move_in_date ? `Available ${item.move_in_date}` : "Available now", zh: item.move_in_date ? `可入住 ${item.move_in_date}` : "现在可入住" },
          description: item.description || "",
          utilities: item.utilities || "Included",
          contact: item.contact_info || {},
          images: item.images || [],
          tags: { en: item.tags || ["Housing"], zh: item.tags || ["租房"] },
          verified: item.verified ?? true,
          location: item.location || item.address || "",
          budgetRange: { min: item.min_budget || 0, max: item.max_budget || 0 },
        });
      });

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
  const [roommates, setRoommates] = useState([]);
  const [forumPostsState, setForumPostsState] = useState([]);

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
        const formattedF = (fData || []).map((p) => {
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
    async function fetchMyPosts() {
      if (!user) {
        setMyListings([]);
        setMyRoommates([]);
        setMyForumPosts([]);
        return;
      }
      try {
        const { data: listingData, error: listingErr } = await supabase.from("listings").select("*").eq("created_by", user.id).order("created_at", { ascending: false });
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
    const payload = { ...profile, photos: [], created_by: user?.id, user_email: user?.email };
    const { data, error } = await supabase.from("roommates").insert([{ data: payload }]).select("id").single();
    if (error) {
      console.error(error);
      return null;
    }
    const roommateId = data.id;
    const uploadedPhotos = await uploadRoommatePhotos(photos, roommateId);
    if (uploadedPhotos.length) {
      await supabase.from("roommates").update({ data: { ...payload, photos: uploadedPhotos } }).eq("id", roommateId);
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

  const createListing = async (payload) => {
    const uploadFiles = payload.images || [];
    const listingPayload = { ...payload, images: [] };
    const { data, error } = await supabase.from("listings").insert([listingPayload]).select("id").single();
    if (error) {
      console.error(error);
      return null;
    }
    const listingId = data.id;
    const uploadedUrls = await uploadListingImages(uploadFiles, listingId);
    if (uploadedUrls.length) {
      await supabase.from("listings").update({ images: uploadedUrls }).eq("id", listingId);
    }

    const res = await supabase.from("listings").select("*").order("created_at", { ascending: false });
    const formatted = (res.data || []).map((item) => {
      const roomFormat = item.room_format || (item.bedrooms ? `${item.bedrooms} Bed ${item.bathrooms || 1} Bath` : "Studio");
      return ({
        id: item.id,
        title: { en: item.title || "Untitled", zh: item.title || "未命名" },
        type: { en: item.listing_type || "Rental", zh: item.listing_type || "租房" },
        price: item.price ?? 0,
        leaseType: item.lease_type || "shortTerm",
        roomFormat,
        roomType: item.listing_type || roomFormat,
        laundry: item.utilities === "Included",
        parking: item.parking === "Yes",
        evCharging: item.ev_charging === "Yes",
        area: item.area || item.location || "Isla Vista",
        address: item.address || item.location || "",
        beds: { en: item.bedrooms ? `${item.bedrooms} Bed` : "Studio", zh: item.bedrooms ? `${item.bedrooms} 卧` : "Studio" },
        bathrooms: item.bathrooms || 1,
        moveInDate: item.move_in_date || "",
        dates: { en: item.move_in_date ? `Available ${item.move_in_date}` : "Available now", zh: item.move_in_date ? `可入住 ${item.move_in_date}` : "现在可入住" },
        description: item.description || "",
        utilities: item.utilities || "Included",
        contact: item.contact_info || {},
        images: item.images || [],
        tags: { en: item.tags || ["Housing"], zh: item.tags || ["租房"] },
        verified: item.verified ?? true,
        location: item.location || item.address || "",
        budgetRange: { min: item.min_budget || 0, max: item.max_budget || 0 },
      });
    });
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
    const comment = {
      id: Date.now(),
      author_en: user?.email || "Anonymous",
      author_zh: user?.email || "匿名",
      text_en: commentText,
      text_zh: commentText,
      created_at: new Date().toISOString(),
    };
    const existingComments = Array.isArray(post?.raw?.comments) ? post.raw.comments : [];
    const updatedComments = [...existingComments, comment];
    const updatedData = {
      ...post.raw,
      comments: updatedComments,
    };

    const { error } = await supabase.from("forum_posts").update({ data: updatedData }).eq("id", post.id);
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
    return comment;
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
    const response = await supabase.auth.signInWithPassword({ email, password });
    return response;
  };

  const signUp = async (email, password) => {
    const response = await supabase.auth.signUp({ email, password });
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


  if (page === "submit") return <SubmitPage lang={lang} setLang={setLang} t={t} setPage={setPage} user={user} onCreateListing={createListing} />;
  if (page === "housing") return <HousingPage lang={lang} setLang={setLang} t={t} setPage={setPage} listings={listings} onSelectListing={(item) => { setSelectedListing(item); setPage("listingDetail"); }} />;
  if (page === "report") return <ReportPage lang={lang} setLang={setLang} t={t} setPage={setPage} />;
  if (page === "join") return <JoinPage lang={lang} setLang={setLang} t={t} setPage={setPage} />;
  if (page === "forum") return <ForumPage lang={lang} setLang={setLang} t={t} setPage={setPage} forumPosts={forumPostsState} onSelectPost={(post) => { setSelectedPost(post); setPage("forumDetail"); }} />;
  if (page === "forumDetail") return <ForumDetailPage lang={lang} setLang={setLang} t={t} setPage={setPage} post={selectedPost} onDeletePost={deleteForumPost} onToggleFavorite={(item) => toggleFavorite(item, "forum")} />;
  if (page === "createDiscussion") return <CreateDiscussionPage lang={lang} setLang={setLang} t={t} setPage={setPage} onCreatePost={createForumPost} />;
  if (page === "roommate") return <RoommatePage lang={lang} setLang={setLang} t={t} setPage={setPage} roommates={roommates} onSelectRoommate={(profile) => { setSelectedRoommate(profile); setPage("roommateDetail"); }} />;
  if (page === "postRoommate") return <PostRoommatePage lang={lang} setLang={setLang} t={t} setPage={setPage} user={user} onCreateRoommate={createRoommate} />;
  if (page === "roommateDetail") return <RoommateDetailPage lang={lang} setLang={setLang} t={t} setPage={setPage} profile={selectedRoommate} onDeleteProfile={deleteRoommate} onToggleFavorite={(item) => toggleFavorite(item, "roommate")} />;
  if (page === "me") return <MePage lang={lang} setLang={setLang} t={t} setPage={setPage} favorites={favorites} myListings={myListings} myRoommates={myRoommates} myForumPosts={myForumPosts} user={user} onSignIn={signIn} onSignUp={signUp} onSignOut={signOut} />;
  if (page === "listingDetail") return <ListingDetailPage lang={lang} setLang={setLang} t={t} setPage={setPage} listing={selectedListing} onToggleFavorite={(item) => toggleFavorite(item, "housing")} />;

  return (
    <HomePage
      lang={lang}
      setLang={setLang}
      t={t}
      setPage={setPage}
      query={query}
      setQuery={setQuery}
      area={area}
      setArea={setArea}
      maxPrice={maxPrice}
      setMaxPrice={setMaxPrice}
      filteredListings={filteredListings}
      onSelectListing={(item) => { setSelectedListing(item); setPage("listingDetail"); }}
    />
  );
}
