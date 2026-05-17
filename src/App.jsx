import React, { useMemo, useState } from "react";

function CampiqLogo() {
  return (
    <div className="flex items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 via-sky-500 to-blue-600 p-2 shadow-sm">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-lg font-black tracking-tight lowercase text-teal-600">
        cq
      </div>
    </div>
  );
}

const dictionary = {
  en: {
    safer: "Connecting student housing resources.",
    listings: "Housing",
    roommate: "Roommates",
    forum: "Forum",
    how: "How it works",
    
    join: "Join & Feedback",
    submitListing: "＋ Post Housing",
    backHome: "← Back Home",
    badge: "↔ Local students × International students",
    heroTitle: "One place for more student housing options.",
    heroText: "Campiq connects housing information from local students and international students, so more subleases, rooms, apartments, and roommate options can flow in one shared place.",
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
    joinText: "We welcome students who want to help with housing collection, social media, design, translation, or campus partnerships.",
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
    comments: "comments",
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
    heroTitle: "把更多学生租房资源集中到一个地方。",
    heroText: "Campiq 连接本地学生和国际学生的租房信息，让转租、房间、公寓和室友资源可以在同一个平台上流动。",
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
    comments: "条评论",
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

const listings = [
  {
    id: 1,
    title: { en: "Summer Sublease near UCSB", zh: "UCSB 附近暑期转租" },
    type: { en: "Sublease", zh: "转租" },
    price: 1450,
    leaseType: "shortTerm",
    roomType: "sideRoom",
    laundry: true,
    parking: true,
    evCharging: false,
    area: "Isla Vista",
    beds: { en: "1 bed in 2B1B", zh: "2B1B 中的一间卧室" },
    dates: { en: "Jun 20 - Sep 15", zh: "6月20日 - 9月15日" },
    tags: { en: ["Female preferred", "Furnished", "Walk to campus"], zh: ["女生优先", "带家具", "步行到学校"] },
    verified: true,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: { en: "Private Room in Goleta Apartment", zh: "Goleta 公寓单间" },
    type: { en: "Roommate", zh: "找室友" },
    price: 1680,
    leaseType: "longTerm",
    roomType: "masterRoom",
    laundry: true,
    area: "Goleta",
    beds: { en: "Private room in 3B2B", zh: "3B2B 中的单间" },
    dates: { en: "Sep 2026 - Jun 2027", zh: "2026年9月 - 2027年6月" },
    tags: { en: ["Bus access", "In-unit laundry", "Parking"], zh: ["公交方便", "室内洗烘", "可停车"] },
    verified: true,
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: { en: "Entire 2B2B Apartment", zh: "整套 2B2B 公寓" },
    type: { en: "Lease Transfer", zh: "整租转租" },
    price: 3950,
    leaseType: "longTerm",
    roomType: "wholeUnit",
    laundry: false,
    parking: false,
    evCharging: false,
    area: "Goleta",
    beds: { en: "2B2B entire unit", zh: "整套 2B2B" },
    dates: { en: "Mid Sep move-in", zh: "9月中旬入住" },
    tags: { en: ["Whole unit", "Good for 2 people", "Laundry"], zh: ["整套", "适合两人", "有洗衣"] },
    verified: false,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: { en: "Living Room Space in IV", zh: "IV 厅卧转租" },
    type: { en: "Sublease", zh: "转租" },
    price: 950,
    leaseType: "shortTerm",
    roomType: "livingRoom",
    laundry: false,
    area: "Isla Vista",
    beds: { en: "Living room space in 1B1B", zh: "1B1B 中的厅卧" },
    dates: { en: "Jul 1 - Sep 1", zh: "7月1日 - 9月1日" },
    tags: { en: ["Budget option", "Close to campus", "Summer only"], zh: ["预算友好", "离学校近", "仅暑期"] },
    verified: true,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  },
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
    dark: "bg-zinc-900 text-white hover:bg-zinc-800",
    light: "bg-white text-zinc-900 border border-zinc-200 hover:bg-zinc-50",
    red: "bg-red-700 text-white hover:bg-red-800",
    blue: "bg-blue-700 text-white hover:bg-blue-800",
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
    { key: "join", label: t.join },
  ];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button onClick={() => go("home")} className="flex items-center gap-3 text-left">
          <CampiqLogo />
          <div>
            <div className="text-xl font-bold tracking-tight">Campiq</div>
            <div className="text-xs text-zinc-500">{t.safer}</div>
          </div>
        </button>

        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          {!showBack && navItems.map((item) => (
            <button key={item.key} onClick={() => go(item.key)} className="hover:text-zinc-950">
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <select value={lang} onChange={(e) => setLang(e.target.value)} className="h-10 rounded-xl border bg-white px-3 text-sm outline-none">
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-white text-xl md:hidden"
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

function CreateDiscussionPage({ lang, setLang, t, setPage }) {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="mb-3 inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
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
          <div className="grid gap-5 p-6">
            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-purple-300" placeholder={t.discussionTitle} />
            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-purple-300">
              <option>{t.discussionCategory}</option>
              <option>{t.forumCourses}</option>
              <option>{t.forumProfessors}</option>
              <option>{t.forumFood}</option>
              <option>{t.forumSecondhand}</option>
              <option>{t.forumEvents}</option>
              <option>{t.forumLife}</option>
              <option>{t.listings}</option>
              <option>{t.roommate}</option>
            </select>
            <textarea className="h-52 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-purple-300" placeholder={t.discussionBody} />
            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-purple-300" placeholder={t.discussionTags} />
            <div className="rounded-2xl border border-dashed bg-stone-50 p-6 text-center text-sm text-zinc-500">
              {t.addImage}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setPage("forum")}>{t.publishDiscussion}</Button>
              <Button variant="light" onClick={() => setPage("forum")}>{t.backHome}</Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}

function ForumPage({ lang, setLang, t, setPage }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const posts = useMemo(() => {
    return forumPosts.filter((post) => {
      const text = `${post.title[lang]} ${post.body[lang]} ${post.tags[lang].join(" ")}`.toLowerCase();
      const matchesQuery = text.includes(query.toLowerCase());
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
            <div className="mb-3 inline-flex rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800">
              {lang === "en" ? "Persistent student knowledge" : "可沉淀的学生信息"}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.forumTitle}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{t.forumIntro}</p>
          </div>
          <Card className="bg-gradient-to-br from-purple-50 to-amber-50">
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
            <Card key={post.id} className="transition hover:-translate-y-1 hover:shadow-xl">
              <div className="p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-800">
                    {post.category === "courses" ? t.forumCourses : post.category === "professors" ? t.forumProfessors : post.category === "food" ? t.forumFood : post.category === "secondhand" ? t.forumSecondhand : t.forumLife}
                  </span>
                  <span className="text-sm text-zinc-500">{post.author[lang]}</span>
                </div>
                <h3 className="text-2xl font-bold">{post.title[lang]}</h3>
                <p className="mt-3 leading-7 text-zinc-600">{post.body[lang]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags[lang].map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{tag}</span>)}
                </div>
                <div className="mt-5 flex items-center justify-between border-t pt-4 text-sm text-zinc-500">
                  <span>{post.comments} {t.comments}</span>
                  <Button variant="light">{lang === "en" ? "Open discussion" : "查看讨论"}</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function SubmitPage({ lang, setLang, t, setPage }) {
  const [postMode, setPostMode] = useState("offer");

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
        <Card className="mb-6 bg-blue-50">
          <div className="p-6">
            <h2 className="text-xl font-bold">{t.autoTranslate}</h2>
            <p className="mt-2 text-zinc-600">{t.autoTranslateText}</p>
          </div>
        </Card>
        <Card>
          <div className="border-b px-6 py-5">
            <h2 className="text-2xl font-bold">{postMode === "offer" ? t.offerHousing : t.seekingTitle}</h2>
            <p className="mt-2 text-sm text-zinc-500">{postMode === "offer" ? (lang === "en" ? "Fill out the details of the place you want to rent out." : "填写你想出租/转租的房源信息。") : (lang === "en" ? "Fill out the housing you want, so people with available places can contact you inside Campiq." : "填写你的求租需求，让有房源的人可以在 Campiq 里联系你。")}</p>
          </div>
          <div className="grid gap-5 p-6 md:grid-cols-2">
            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={t.formName} />
            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={t.formContact} />
            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={postMode === "offer" ? t.formTitle : t.seekingTitle} />
            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={t.formArea} />
            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Lease type" : "租期类型"}</option>
              <option>{t.shortTerm}</option>
              <option>{t.longTerm}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Listing format" : "转租形式"}</option>
              <option>{lang === "en" ? "Entire unit" : "整套转租"}</option>
              <option>{lang === "en" ? "Single room" : "单间转租"}</option>
              <option>{lang === "en" ? "Bed space" : "床位转租"}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Room type" : "房间类型"}</option>
              <option>{t.masterRoom}</option>
              <option>{t.sideRoom}</option>
              <option>{t.livingRoom}</option>
              <option>{t.wholeUnit}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Housing format" : "房型结构"}</option>
              <option>Studio</option>
              <option>1B1B</option>
              <option>2B1B</option>
              <option>2B2B</option>
              <option>3B2B</option>
              <option>House</option>
            </select>

            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={postMode === "offer" ? t.formPrice : t.budgetRange} />
            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={lang === "en" ? "Exact address" : "具体地址"} />
            <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900" placeholder={postMode === "offer" ? t.formDates : t.moveInTime} />

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Utilities" : "Utilities"}</option>
              <option>{lang === "en" ? "Utilities included" : "包 utilities"}</option>
              <option>{lang === "en" ? "Utilities not included" : "不包 utilities"}</option>
              <option>{lang === "en" ? "Partially included" : "部分包含"}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Parking" : "车位"}</option>
              <option>{lang === "en" ? "Parking available" : "有车位"}</option>
              <option>{lang === "en" ? "No parking" : "无车位"}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "EV charging" : "充电设施"}</option>
              <option>{lang === "en" ? "EV charging available" : "支持充电"}</option>
              <option>{lang === "en" ? "No EV charging" : "不支持充电"}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Pets" : "宠物"}</option>
              <option>{lang === "en" ? "No pets" : "无宠物"}</option>
              <option>{lang === "en" ? "Has pets" : "有宠物"}</option>
              <option>{lang === "en" ? "Pets allowed" : "可养宠物"}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Gender preference" : "性别要求"}</option>
              <option>{lang === "en" ? "Female only" : "仅限女生"}</option>
              <option>{lang === "en" ? "Male only" : "仅限男生"}</option>
              <option>{lang === "en" ? "No preference" : "不限性别"}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900">
              <option>{lang === "en" ? "Nearby bus stop" : "附近公交"}</option>
              <option>{lang === "en" ? "Bus stop nearby" : "附近有公交站"}</option>
              <option>{lang === "en" ? "No nearby bus stop" : "附近无公交"}</option>
            </select>

            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2">
              <option>{lang === "en" ? "Living room space" : "厅卧情况"}</option>
              <option>{lang === "en" ? "No living room space" : "无厅卧"}</option>
              <option>{lang === "en" ? "Living room space available" : "有厅卧"}</option>
            </select>
            <select className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2">
              <option>{t.originalLanguage}: English</option>
              <option>{t.originalLanguage}: 中文</option>
            </select>
            <textarea className="h-40 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-zinc-900 md:col-span-2" placeholder={t.formDescriptionPlaceholder} />
            <div className="md:col-span-2"><Button>{postMode === "offer" ? t.submitForReview : t.addPost}</Button></div>
          </div>
        </Card>
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
        <Card className="bg-blue-50">
          <form onSubmit={submit} className="p-8">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-blue-100 text-2xl">👥</div>
            <h1 className="text-4xl font-bold tracking-tight">{t.joinTitle}</h1>
            <p className="mt-4 text-zinc-600">{t.joinText}</p>
            <div className="mt-8 rounded-3xl border border-blue-100 bg-white p-5">
              <h2 className="text-xl font-bold">{t.suggestionTitle}</h2>
              <textarea value={form.suggestion} onChange={(e) => update("suggestion", e.target.value)} className="mt-4 h-32 w-full rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-blue-300" placeholder={t.suggestionPlaceholder} />
            </div>
            <div className="mt-8 grid gap-4">
              <input value={form.name} onChange={(e) => update("name", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-blue-300" placeholder={t.name} />
              <input value={form.contact} onChange={(e) => update("contact", e.target.value)} className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-blue-300" placeholder={t.contact} />
              <textarea value={form.message} onChange={(e) => update("message", e.target.value)} className="h-40 rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-blue-300" placeholder={lang === "en" ? "Tell us how you'd like to collaborate with Campiq..." : "介绍一下你想如何参与或合作 Campiq……"} />
              <Button variant="blue" type="submit">{t.contactCampiq}</Button>
              {submitted && <p className="rounded-2xl bg-white p-4 text-sm font-semibold text-blue-700">{lang === "en" ? "Demo saved. In the full product, this can connect to email, Airtable, or a database." : "演示保存成功。正式版本中可以连接邮箱、Airtable 或数据库。"}</p>}
            </div>
          </form>
        </Card>
      </main>
    </div>
  );
}

function RoommatePage({ lang, setLang, t, setPage }) {
  return (
    <div className="min-h-screen bg-stone-50 text-zinc-900">
      <Header lang={lang} setLang={setLang} t={t} setPage={setPage} showBack />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end">
          <div>
            <div className="mb-3 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-800">
              {lang === "en" ? "Freshman growth entry" : "新生拉新入口"}
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{t.roommatePageTitle}</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600">{t.roommatePageIntro}</p>
          </div>
          <Card className="bg-gradient-to-br from-blue-50 to-amber-50">
            <div className="p-6">
              <h2 className="text-xl font-bold">{t.smartMatchTitle}</h2>
              <p className="mt-2 text-zinc-600">{t.smartMatchText}</p>
              <Button className="mt-5" onClick={() => setPage("submit")}>{t.postRoommate}</Button>
            </div>
          </Card>
        </div>

        <Card className="mb-8 bg-white">
          <div className="mb-5 rounded-3xl border border-blue-100 bg-blue-50 p-5 text-sm leading-7 text-zinc-700">
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
            <div className="rounded-3xl bg-blue-50 p-5">
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
          {roommateProfiles.map((p) => (
            <Card key={p.id} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
              <div className="h-24 bg-gradient-to-br from-blue-200 via-sky-100 to-amber-100" />
              <div className="p-6">
                <div className="-mt-14 mb-4 flex h-16 w-16 items-center justify-center rounded-3xl border-4 border-white bg-zinc-900 text-2xl text-white">👤</div>
                <div className="mb-3 inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-bold text-emerald-800">{t.matchScore} {p.match}%</div>
                <h3 className="text-xl font-bold">{p.name[lang]}</h3>
                <p className="mt-2 text-sm text-zinc-500">{p.school}</p>
                <div className="mt-4 grid gap-2 text-sm text-zinc-600">
                  <p><span className="font-semibold text-zinc-900">{t.age}:</span> {p.age}</p>
                  <p><span className="font-semibold text-zinc-900">{t.year}:</span> {p.year[lang]}</p>
                  <p><span className="font-semibold text-zinc-900">{t.nationality}:</span> {p.nationality[lang]}</p>
                  <p><span className="font-semibold text-zinc-900">{t.interests}:</span> {p.interests[lang]}</p>
                  <p><span className="font-semibold text-zinc-900">{t.smoking}:</span> {p.smoking[lang]}</p>
                  <p><span className="font-semibold text-zinc-900">{t.drinking}:</span> {p.drinking[lang]}</p>
                  <p><span className="font-semibold text-zinc-900">{t.pets}:</span> {p.pets[lang]}</p>
                  <p><span className="font-semibold text-zinc-900">{t.schedule}:</span> {p.schedule[lang]}</p>
                  <p><span className="font-semibold text-zinc-900">{t.weed}:</span> {p.weed[lang]}</p>
                  <p><span className="font-semibold text-zinc-900">{t.hasCar}:</span> {p.hasCar[lang]}</p>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{p.expectation[lang]}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags[lang].map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{tag}</span>)}
                </div>
                <Button variant="light" className="mt-5 w-full">{t.viewProfile}</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function HousingPage({ lang, setLang, t, setPage }) {
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
  }, [query, area, leaseType, roomType, laundry, minPrice, maxPrice, lang]);

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
              <img src={item.image} alt={item.title[lang]} className="h-40 w-full object-cover" />
              <div className="p-4">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">{item.type[lang]}</span>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800">{t[item.roomType]}</span>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{item.laundry ? t.hasLaundry : t.noLaundry}</span>
                </div>
                <h3 className="text-xl font-bold">{item.title[lang]}</h3>
                <div className="mt-2 text-sm text-zinc-500">📍 {item.area}</div>
                <div className="mt-4 text-3xl font-bold">${item.price}<span className="text-sm font-medium text-zinc-500">/mo</span></div>
                <div className="mt-3 space-y-1 text-sm text-zinc-600"><p>{item.beds[lang]}</p><p>{item.dates[lang]}</p></div>
                <div className="mt-4 flex flex-wrap gap-2">{item.tags[lang].map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">{tag}</span>)}</div>
                <Button className="mt-5 w-full">{t.viewDetails}</Button>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}

function HomePage({ lang, setLang, t, setPage, query, setQuery, area, setArea, maxPrice, setMaxPrice, filteredListings }) {
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
                  <div className="h-20 bg-gradient-to-br from-purple-200 via-purple-100 to-amber-50" />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-purple-700">{lang === "en" ? "Main feature" : "主推功能"}</div>
                    <h3 className="mt-1 text-xl font-bold">{t.forumTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">{lang === "en" ? "Course tips, professor reviews, food discussions, events, second-hand posts, and searchable student discussions." : "选课建议、教授评价、食堂讨论、活动信息、二手交易和可长期搜索的学生讨论。"}</p>
                  </div>
                </Card>

                <Card className="overflow-hidden cursor-pointer transition hover:-translate-y-1 hover:shadow-xl" onClick={() => setPage("roommate")}>
                  <div className="h-20 bg-gradient-to-br from-blue-200 via-sky-100 to-amber-50" />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-blue-700">{lang === "en" ? "Trending" : "热门功能"}</div>
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
            <Card className="overflow-hidden bg-gradient-to-br from-purple-50 via-white to-amber-50 lg:col-span-2">
              <div className="grid gap-6 p-8 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <div className="mb-2 text-sm font-semibold text-purple-700">{lang === "en" ? "Main feature" : "主推功能"}</div>
                  <h2 className="text-3xl font-bold tracking-tight">{t.forumTitle}</h2>
                  <p className="mt-3 max-w-3xl text-zinc-600">{t.forumIntro}</p>
                </div>
                <Button onClick={() => setPage("forum")}>{t.forumCta}</Button>
              </div>
            </Card>

            <Card className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-sky-50">
              <div className="p-8">
                <div className="mb-2 text-sm font-semibold text-blue-700">{lang === "en" ? "Trending" : "重点推广"}</div>
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
                  <Button className="mt-5 w-full">{t.viewDetails}</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Card id="join" className="bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="p-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">👥</div>
              <h2 className="text-2xl font-bold">{t.joinTitle}</h2>
              <p className="mt-3 text-zinc-600">{lang === "en" ? "Join the project, collaborate with us, leave suggestions, or report suspicious listings here." : "你可以在这里加入项目、合作、提交建议，或者举报可疑房源与平台问题。"}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-blue-300" placeholder={t.name} />
                <input className="h-12 rounded-2xl border bg-white px-4 outline-none focus:ring-2 focus:ring-blue-300" placeholder={t.contact} />
              </div>
              <textarea className="mt-4 h-32 w-full rounded-2xl border bg-white p-4 outline-none focus:ring-2 focus:ring-blue-300" placeholder={lang === "en" ? "Suggestions, collaboration ideas, or report details..." : "建议、合作想法，或举报内容……"} />
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
  const t = dictionary[lang];

  const filteredListings = useMemo(() => {
    return listings.filter((item) => {
      const text = `${item.title[lang]} ${item.type[lang]} ${item.area} ${item.beds[lang]} ${item.tags[lang].join(" ")}`.toLowerCase();
      return text.includes(query.toLowerCase()) && (area === "All" || item.area === area) && item.price <= maxPrice;
    });
  }, [query, area, maxPrice, lang]);

  if (page === "submit") return <SubmitPage lang={lang} setLang={setLang} t={t} setPage={setPage} />;
  if (page === "housing") return <HousingPage lang={lang} setLang={setLang} t={t} setPage={setPage} />;
  if (page === "report") return <ReportPage lang={lang} setLang={setLang} t={t} setPage={setPage} />;
  if (page === "join") return <JoinPage lang={lang} setLang={setLang} t={t} setPage={setPage} />;
  if (page === "forum") return <ForumPage lang={lang} setLang={setLang} t={t} setPage={setPage} />;
  if (page === "createDiscussion") return <CreateDiscussionPage lang={lang} setLang={setLang} t={t} setPage={setPage} />;
  if (page === "roommate") return <RoommatePage lang={lang} setLang={setLang} t={t} setPage={setPage} />;

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
    />
  );
}
