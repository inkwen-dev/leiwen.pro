/**
 * 生成 data/map.json 种子（P0–P4 结构+卡片）。
 * 运行：node ./scripts/seed-map.mjs
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dir = dirname(fileURLToPath(import.meta.url));
const out = join(__dir, "../data/map.json");

const n = (partial) => ({
  parent: null,
  oneLiner: "",
  whoFor: "",
  needsSkills: [],
  aiLevers: [],
  trafficNote: "",
  moneyNote: "",
  riskNote: "",
  sourceRefs: [],
  status: "seeded",
  ...partial,
});

const nodes = [];
const edges = [];
const addEdge = (from, to, rel, note = "") => {
  edges.push(note ? { from, to, rel, note } : { from, to, rel });
};

// ——— stages & dimensions ———
const stages = [
  ["stage.select", "选事", "决定做什么方向与切口"],
  ["stage.validate", "验证", "有没有人愿意付钱或强意向"],
  ["stage.leverage", "杠杆", "用 AI/流程放大单位时间产出"],
  ["stage.acquire", "获客", "让第一批与持续客户看见你"],
  ["stage.monetize", "变现", "怎么收钱、复购与交付"],
  ["stage.stop", "收束", "何时放大、收手或换赛道"],
];
stages.forEach(([id, name, oneLiner], i) => {
  nodes.push(n({ id, name, kind: "stage", oneLiner, status: "filled" }));
  if (i > 0) addEdge(stages[i - 1][0], id, "precedes");
});

[
  ["dim.interest-demand", "兴趣 × 需求", "兴趣供持续，需求筛可卖"],
  ["dim.virtual-physical", "虚拟 × 实体", "默认起步偏虚拟；实体用约束对照"],
  ["dim.near-traffic", "离流量近", "选事优先站到流量侧"],
].forEach(([id, name, oneLiner]) => {
  nodes.push(n({ id, name, kind: "dimension", oneLiner, status: "filled" }));
});

// ——— D1–D10 directions ———
const dirs = [
  ["dir.d1", "自媒体", "靠内容换注意力，再换成钱或线索"],
  ["dir.d2", "电商", "选品、带货、开店，货和订单怎么闭环"],
  ["dir.d3", "知识付费", "卖资料、课、社群、咨询等非实物"],
  ["dir.d4", "AI 提效与工具", "用 AI 降低制作/交付成本（对人提效）"],
  ["dir.d5", "AI 产品与开发", "把能力做成可重复卖的产品或服务"],
  ["dir.d6", "出海", "面向海外流量、货或服务"],
  ["dir.d7", "获客与成交", "公域→私域、投放、SEO/GEO、成交动作"],
  ["dir.d8", "本地生活", "到店、团购，以及帮附近商家做账号"],
  ["dir.d9", "认知与选事", "怎么选项目、验证与止损的方法层"],
  ["dir.d10", "人群与社群运营", "新人路径、圈层与人脉（多为索引）"],
];
dirs.forEach(([id, name, oneLiner]) => {
  nodes.push(
    n({
      id,
      name,
      kind: "direction",
      oneLiner,
      status: "filled",
      sourceRefs: [{ level: "A", ref: "调研/原料/生财有术/方向地图.md" }],
    }),
  );
});

// ——— D1 we-media tree ———
nodes.push(
  n({
    id: "sub.we-media",
    name: "自媒体",
    kind: "subdirection",
    parent: "dir.d1",
    oneLiner: "以个人/小号持续产出内容换信任与变现",
    status: "filled",
    sourceRefs: [{ level: "A", ref: "方向地图 D1" }],
  }),
);
addEdge("dir.d1", "sub.we-media", "contains");

const mediaForms = [
  ["sub.media-shortvideo", "短视频", "短时长内容，强依赖平台推荐"],
  ["sub.media-longvideo", "中长视频", "更长内容，适合知识/故事与广告分成"],
  ["sub.media-text", "图文（文字为主）", "文字+配图笔记或文章"],
  ["sub.media-image", "图片 / 图集", "图主导的内容形态"],
  ["sub.media-live", "直播", "实时互动成交或涨粉"],
  ["sub.media-audio", "音频 / 播客", "声音内容；生财侧信号弱，全网补"],
];
mediaForms.forEach(([id, name, oneLiner]) => {
  const refs =
    id === "sub.media-audio"
      ? [{ level: "C", ref: "全网补缺：播客/音频赛道" }]
      : [{ level: "A", ref: "方向地图 D1 子方向" }];
  nodes.push(
    n({
      id,
      name,
      kind: "subdirection",
      parent: "sub.we-media",
      oneLiner,
      status: "filled",
      sourceRefs: refs,
    }),
  );
  addEdge("sub.we-media", id, "contains");
});

const platforms = [
  ["plat.douyin", "抖音", "dir.d1"],
  ["plat.kuaishou", "快手", "dir.d1"],
  ["plat.channels", "视频号", "dir.d1"],
  ["plat.xiaohongshu", "小红书", "dir.d1"],
  ["plat.wechat-mp", "公众号", "dir.d1"],
  ["plat.toutiao", "头条", "dir.d1"],
  ["plat.bilibili", "B站", "dir.d1"],
  ["plat.x", "X / Twitter", "dir.d1"],
  ["plat.youtube", "YouTube", "dir.d6"],
  ["plat.tiktok", "TikTok", "dir.d6"],
];
platforms.forEach(([id, name, parentDir]) => {
  nodes.push(
    n({
      id,
      name,
      kind: "platform",
      parent: "sub.we-media",
      oneLiner: `${name}内容分发平台`,
      status: "filled",
      sourceRefs: [{ level: "A", ref: "站结构·项目库平台筛" }],
    }),
  );
  addEdge("sub.we-media", id, "contains");
  addEdge(parentDir, id, "related");
});

// ——— other subdirections ———
const subs = [
  ["sub.d2.dropship", "无货源 / 一件代发", "dir.d2", "不囤货，靠链接成交"],
  ["sub.d2.vertical-shop", "垂直小店", "dir.d2", "窄品类店铺，反馈快"],
  ["sub.d2.live-commerce", "直播带货", "dir.d2", "直播间成交"],
  ["sub.d2.sourcing", "选品研究", "dir.d2", "决定卖什么货"],
  ["sub.d2.local-group", "本地生活团购", "dir.d2", "到店核销类"],
  ["sub.d2.xianyu", "闲鱼流转", "dir.d2", "二手/虚拟资料流转"],
  ["sub.d3.templates", "资料 / 模板店", "dir.d3", "卖可下载虚拟品"],
  ["sub.d3.course", "专栏课", "dir.d3", "结构化课程变现"],
  ["sub.d3.community", "社群会员", "dir.d3", "订阅制社群"],
  ["sub.d3.consult", "咨询陪跑", "dir.d3", "高客单服务"],
  ["sub.d4.content-boost", "内容生产提效", "dir.d4", "写作/素材/粗剪加速"],
  ["sub.d4.cs-boost", "客服/交付提效", "dir.d4", "应答与交付草稿加速"],
  ["sub.d4.design-boost", "设计素材提效", "dir.d4", "图/视觉草稿加速"],
  ["sub.d4.workflow", "自动化工作流", "dir.d4", "n8n 等对人提效"],
  ["sub.d5.app", "小程序 / App", "dir.d5", "可安装或订阅的产品"],
  ["sub.d5.plugin", "插件 / MCP", "dir.d5", "嵌在别人工具链里卖"],
  ["sub.d5.saas", "SaaS 订阅", "dir.d5", "在线工具订阅"],
  ["sub.d5.agent-product", "Agent 产品", "dir.d5", "智能体形态产品"],
  ["sub.d5.tool-site", "出海工具", "dir.d5", "站点型产品（常挂出海）"],
  ["sub.d6.content", "内容出海", "dir.d6", "海外平台内容变现"],
  ["sub.d6.goods", "跨境电商", "dir.d6", "跨境电商"],
  ["sub.d6.service", "服务出海", "dir.d6", "对外交付服务"],
  ["sub.d6.seo-ads", "SEO / Ads 获客", "dir.d6", "搜索与付费获客"],
  ["sub.d6.indie", "独立站", "dir.d6", "自有站点成交"],
  ["sub.d7.public", "公域占位", "dir.d7", "搜索/平台占位"],
  ["sub.d7.private", "私域沉淀", "dir.d7", "微信等私域"],
  ["sub.d7.paid", "付费投放", "dir.d7", "买流量"],
  ["sub.d7.seo", "SEO", "dir.d7", "搜索引擎可见"],
  ["sub.d7.geo", "GEO / AI 搜索可见", "dir.d7", "被 AI 答案引用"],
  ["sub.d7.sales", "销售成交动作", "dir.d7", "线索跟进与成交"],
  ["sub.d8.store", "到店获客", "dir.d8", "线下门店引流"],
  ["sub.d8.ops", "代运营本地商户", "dir.d8", "帮店做内容/团购"],
  ["sub.d8.weak-ip", "弱 IP 本地服务", "dir.d8", "本地服务者"],
  ["sub.d8.offline", "线下活动变现", "dir.d8", "活动票务/赞助"],
  ["sub.d9.pick", "选项目方法", "dir.d9", "怎么筛方向"],
  ["sub.d9.case", "案例拆解方法", "dir.d9", "怎么拆别人的成功"],
  ["sub.d9.validate-stop", "验证与止损", "dir.d9", "试多久、何时停"],
  ["sub.d9.info-gap", "信息差使用边界", "dir.d9", "信息差能用但不能当唯一壁垒"],
  ["sub.d10.onboard", "新人路径", "dir.d10", "入门引导"],
  ["sub.d10.vertical-circle", "垂直圈层运营", "dir.d10", "小圈层"],
  ["sub.d10.network", "人脉 / 局", "dir.d10", "社交连接（索引向）"],
];
subs.forEach(([id, name, parent, oneLiner]) => {
  nodes.push(
    n({
      id,
      name,
      kind: "subdirection",
      parent,
      oneLiner,
      status: "filled",
      sourceRefs: [{ level: "A", ref: "方向地图 + 计划预览 B3" }],
    }),
  );
  addEdge(parent, id, "contains");
});

// ——— skill groups + skills (P3) ———
nodes.push(n({ id: "skill.group.content", name: "内容技能", kind: "group", oneLiner: "内容生产相关能力", status: "filled" }));
nodes.push(n({ id: "skill.group.commerce", name: "电商技能", kind: "group", oneLiner: "货与店相关能力", status: "filled" }));
nodes.push(n({ id: "skill.group.growth", name: "获客销售技能", kind: "group", oneLiner: "获客与成交", status: "filled" }));
nodes.push(n({ id: "skill.group.build", name: "产品技术技能", kind: "group", oneLiner: "做出可卖物", status: "filled" }));
nodes.push(n({ id: "skill.group.ops", name: "经营技能", kind: "group", oneLiner: "定价、复盘、时间预算", status: "filled" }));

const skills = [
  ["skill.topic-select", "选题", "skill.group.content", "决定这篇讲什么"],
  ["skill.copywriting", "文案", "skill.group.content", "写出让人读完并行动的文字"],
  ["skill.script", "脚本", "skill.group.content", "短视频/口播结构"],
  ["skill.shoot", "拍摄", "skill.group.content", "出镜或实拍"],
  ["skill.edit", "剪辑", "skill.group.content", "成片节奏与字幕"],
  ["skill.cover", "封面 / 排版", "skill.group.content", "第一眼点击率"],
  ["skill.speaking", "口播表达", "skill.group.content", "镜头前表达"],
  ["skill.community-ops", "运营评论区", "skill.group.content", "互动与置顶引导"],
  ["skill.sourcing", "选品", "skill.group.commerce", "选可卖的货"],
  ["skill.pricing-sense", "定价感知", "skill.group.commerce", "价格带与利润感"],
  ["skill.supply-chain", "供应链基础", "skill.group.commerce", "发货与库存感知"],
  ["skill.after-sales", "售后话术", "skill.group.commerce", "客诉与复购"],
  ["skill.seo-basic", "占位 / SEO 基础", "skill.group.growth", "搜索可见"],
  ["skill.ads-basic", "投放推广", "skill.group.growth", "付费流基础"],
  ["skill.private-domain", "私域运营", "skill.group.growth", "沉淀与激活"],
  ["skill.closing", "成交话术", "skill.group.growth", "促成付款"],
  ["skill.lead-follow", "线索跟进", "skill.group.growth", "跟进不丢单"],
  ["skill.interview", "需求访谈", "skill.group.build", "听清用户原话"],
  ["skill.nocode", "无代码搭建", "skill.group.build", "不写代码也能上线"],
  ["skill.coding", "编程交付", "skill.group.build", "写出可运行产品"],
  ["skill.ship-miniapp", "小程序/站上线", "skill.group.build", "发布与域名等上线"],
  ["skill.data-analysis", "数据分析", "skill.group.build", "看数据做决策"],
  ["skill.packaging", "定价与套餐", "skill.group.ops", "怎么打包卖"],
  ["skill.review-ledger", "复盘记账", "skill.group.ops", "知道赚没赚"],
  ["skill.time-budget", "时间预算", "skill.group.ops", "副业周投入边界"],
];
skills.forEach(([id, name, parent, oneLiner]) => {
  nodes.push(
    n({
      id,
      name,
      kind: "skill",
      parent,
      oneLiner,
      whoFor: "相关玩法从业者",
      status: "filled",
      sourceRefs: [{ level: "A", ref: "项目库人群门槛 + 计划预览 F" }],
    }),
  );
  addEdge(parent, id, "contains");
});

// ——— AI groups + capabilities (P3) ———
nodes.push(n({ id: "ai.group.generate", name: "生成类", kind: "group", oneLiner: "内容生成能力", status: "filled" }));
nodes.push(n({ id: "ai.group.agent", name: "推理与编排", kind: "group", oneLiner: "Agent 与自动化", status: "filled" }));
nodes.push(n({ id: "ai.group.build", name: "建造类", kind: "group", oneLiner: "代码与脚手架", status: "filled" }));
nodes.push(n({ id: "ai.group.discover", name: "知识与发现", kind: "group", oneLiner: "检索与被看见", status: "filled" }));
nodes.push(n({ id: "ai.group.interact", name: "交互类", kind: "group", oneLiner: "对话与客服草稿", status: "filled" }));

const ais = [
  ["ai.text-gen", "文本生成", "ai.group.generate", "起草改写翻译摘要"],
  ["ai.image-gen", "图像生成", "ai.group.generate", "配图与视觉草稿"],
  ["ai.audio-gen", "音频生成", "ai.group.generate", "配音与音效草稿"],
  ["ai.video-gen", "视频生成", "ai.group.generate", "成片/片段生成"],
  ["ai.multimodal", "多模态混排", "ai.group.generate", "图文音视频组合"],
  ["ai.agent", "Agent", "ai.group.agent", "多步任务代理"],
  ["ai.workflow", "工作流自动化", "ai.group.agent", "串联工具自动跑"],
  ["ai.tool-use", "工具调用", "ai.group.agent", "调 API/插件完成动作"],
  ["ai.codegen", "代码辅助", "ai.group.build", "写改测代码加速"],
  ["ai.scaffold", "应用脚手架", "ai.group.build", "快速起项目骨架"],
  ["ai.rag", "检索 / RAG", "ai.group.discover", "基于私有知识回答"],
  ["ai.knowledge-base", "知识库", "ai.group.discover", "沉淀可查询材料"],
  ["ai.seo-assist", "SEO 辅助", "ai.group.discover", "辅助搜索可见优化"],
  ["ai.geo", "GEO / AI 答案可见", "ai.group.discover", "进入 AI 答案引用"],
  ["ai.voice-chat", "语音对话", "ai.group.interact", "语音交互"],
  ["ai.cs-bot-draft", "客服机器人草稿", "ai.group.interact", "客服话术与自动回复草稿"],
];
ais.forEach(([id, name, parent, oneLiner]) => {
  nodes.push(
    n({
      id,
      name,
      kind: "ai",
      parent,
      oneLiner,
      riskNote: "不替代需求验证与信任",
      status: "filled",
      sourceRefs: [{ level: "A", ref: "生财 AI 簇 + 计划预览 F" }],
    }),
  );
  addEdge(parent, id, "contains");
});

// ——— plays from 超级标 + 形态 (P2) ———
const plays = [
  {
    id: "play.vertical-niche-seed",
    name: "垂直小号种草",
    parent: "sub.media-text",
    oneLiner: "窄领域持续内容换信任与带货入口",
    whoFor: "有主业、能稳定周更",
    needsSkills: ["skill.topic-select", "skill.copywriting", "skill.cover"],
    aiLevers: ["ai.text-gen", "ai.image-gen"],
    trafficNote: "推荐+搜索占位",
    moneyNote: "佣金/商单/导私域",
    riskNote: "有播放无成交；选题飘",
    ref: "超级标10 垂直小号",
  },
  {
    id: "play.shortvideo-cps",
    name: "短视频带货 CPS",
    parent: "sub.media-shortvideo",
    oneLiner: "短视频挂链赚佣金",
    whoFor: "执行力强、能日更测品",
    needsSkills: ["skill.script", "skill.edit", "skill.sourcing"],
    aiLevers: ["ai.text-gen", "ai.video-gen", "ai.image-gen"],
    trafficNote: "短视频推荐流",
    moneyNote: "CPS 佣金",
    riskNote: "平台佣金与违规风险",
    ref: "项目库形态·内容带货；超级标09 类推客",
  },
  {
    id: "play.account-matrix",
    name: "账号矩阵分发",
    parent: "sub.we-media",
    oneLiner: "多号测试赛道，用数据留存",
    whoFor: "能接受批量运营成本",
    needsSkills: ["skill.topic-select", "skill.data-analysis"],
    aiLevers: ["ai.text-gen", "ai.workflow"],
    trafficNote: "多账号覆盖推荐",
    moneyNote: "随各号变现方式",
    riskNote: "同质化与平台限流",
    ref: "生财矩阵讨论·形态索引",
  },
  {
    id: "play.midlong-adshare",
    name: "中长内容广告分成",
    parent: "sub.media-longvideo",
    oneLiner: "中长视频吃平台广告或创作激励",
    whoFor: "能接受延迟反馈",
    needsSkills: ["skill.script", "skill.edit", "skill.topic-select"],
    aiLevers: ["ai.video-gen", "ai.text-gen", "ai.audio-gen"],
    trafficNote: "订阅+推荐+搜索",
    moneyNote: "广告分成/激励",
    riskNote: "赛道同质可一夜清零",
    ref: "超级标08 YouTube 中长；摘录卡私藏人间",
  },
  {
    id: "play.ai-media-theme",
    name: "AI 主题自媒体",
    parent: "sub.we-media",
    oneLiner: "做 AI 主题内容位，而非只会用 AI 写稿",
    whoFor: "跟得上工具变化的人",
    needsSkills: ["skill.topic-select", "skill.copywriting"],
    aiLevers: ["ai.text-gen", "ai.image-gen", "ai.multimodal"],
    trafficNote: "各内容平台",
    moneyNote: "商单/课/社群/咨询",
    riskNote: "工具教程红海",
    ref: "超级标01 AI自媒体",
  },
  {
    id: "play.ai-video-global",
    name: "AI 视频全球分发",
    parent: "sub.media-shortvideo",
    oneLiner: "AI 降本内容 × 海外/多平台分发",
    whoFor: "能接受多账号试错",
    needsSkills: ["skill.edit", "skill.topic-select"],
    aiLevers: ["ai.video-gen", "ai.audio-gen", "ai.workflow"],
    trafficNote: "Shorts/TikTok/多平台",
    moneyNote: "广告分成",
    riskNote: "政策与同质化",
    ref: "超级标02 AI视频",
  },
  {
    id: "play.bilibili-goods",
    name: "B站好物挂链",
    parent: "sub.media-longvideo",
    oneLiner: "评测/种草内容挂外链成交",
    whoFor: "有垂直品类表达力",
    needsSkills: ["skill.script", "skill.sourcing", "skill.speaking"],
    aiLevers: ["ai.text-gen", "ai.video-gen"],
    trafficNote: "B站推荐与搜索",
    moneyNote: "佣金/挂链",
    riskNote: "平台规则变化",
    ref: "超级标07 B站好物",
  },
  {
    id: "play.food-delivery-promo",
    name: "外卖内容推客",
    parent: "sub.media-shortvideo",
    oneLiner: "低技术执行力：内容推本地外卖",
    whoFor: "要执行力项目、技术弱",
    needsSkills: ["skill.shoot", "skill.edit"],
    aiLevers: ["ai.text-gen", "ai.image-gen"],
    trafficNote: "短视频本地",
    moneyNote: "推客佣金",
    riskNote: "政策与佣金下调",
    ref: "超级标09 外卖内容推客",
  },
  {
    id: "play.x-cn-ai",
    name: "X 中文 AI 号",
    parent: "sub.media-text",
    oneLiner: "海外平台做中文 AI 内容",
    whoFor: "能写中英或工具辅助",
    needsSkills: ["skill.topic-select", "skill.copywriting"],
    aiLevers: ["ai.text-gen", "ai.image-gen"],
    trafficNote: "X 推荐与关注链",
    moneyNote: "产品导流/社群",
    riskNote: "平台算法与封号",
    ref: "超级标19",
  },
  {
    id: "play.wechat-sticker",
    name: "微信贴图号",
    parent: "sub.media-image",
    oneLiner: "细分图片内容形态占位",
    whoFor: "视觉产出稳定者",
    needsSkills: ["skill.cover", "skill.topic-select"],
    aiLevers: ["ai.image-gen"],
    trafficNote: "微信生态曝光",
    moneyNote: "带货/私域",
    riskNote: "入口变化快",
    ref: "超级标21",
  },
  {
    id: "play.xhs-virtual-goods",
    name: "小红书虚拟产品",
    parent: "sub.d3.templates",
    oneLiner: "种草平台卖虚拟资料/模板",
    whoFor: "能持续上新虚拟品",
    needsSkills: ["skill.copywriting", "skill.packaging", "skill.cover"],
    aiLevers: ["ai.text-gen", "ai.image-gen"],
    trafficNote: "小红书搜索+推荐",
    moneyNote: "虚拟品一次性销售",
    riskNote: "同质搬运与投诉",
    ref: "超级标14",
  },
  {
    id: "play.xhs-product-nurture",
    name: "小红书产品养成系",
    parent: "sub.d3.course",
    oneLiner: "从内容养成到可卖产品",
    whoFor: "愿意长期养账号的人",
    needsSkills: ["skill.topic-select", "skill.interview", "skill.packaging"],
    aiLevers: ["ai.text-gen", "ai.image-gen"],
    trafficNote: "小红书",
    moneyNote: "产品/课/社群",
    riskNote: "周期长",
    ref: "超级标15",
  },
  {
    id: "play.vertical-shop",
    name: "垂直小店",
    parent: "sub.d2.vertical-shop",
    oneLiner: "窄品类店铺，反馈快",
    whoFor: "能跟选品与售后",
    needsSkills: ["skill.sourcing", "skill.after-sales", "skill.pricing-sense"],
    aiLevers: ["ai.image-gen", "ai.text-gen"],
    trafficNote: "内容+店铺自然流/投流",
    moneyNote: "货差价",
    riskNote: "库存与退货",
    ref: "超级标13",
  },
  {
    id: "play.ai-app",
    name: "AI 应用（站/App/插件）",
    parent: "sub.d5.app",
    oneLiner: "产品形态机会，仍要分发",
    whoFor: "会做或能管开发的人",
    needsSkills: ["skill.coding", "skill.interview", "skill.ship-miniapp"],
    aiLevers: ["ai.codegen", "ai.scaffold", "ai.agent"],
    trafficNote: "依赖获客方向 D7/D6",
    moneyNote: "订阅/买断/广告",
    riskNote: "做出没人用",
    ref: "超级标03",
  },
  {
    id: "play.ios-sub",
    name: "iOS 付费订阅",
    parent: "sub.d5.app",
    oneLiner: "订阅产品化",
    whoFor: "有产品与上架能力",
    needsSkills: ["skill.coding", "skill.packaging", "skill.ship-miniapp"],
    aiLevers: ["ai.codegen"],
    trafficNote: "ASO/内容导流",
    moneyNote: "订阅",
    riskNote: "分成与审核",
    ref: "超级标04",
  },
  {
    id: "play.ai-service",
    name: "AI 服务交付",
    parent: "sub.d3.consult",
    oneLiner: "用 AI 提效后卖服务结果",
    whoFor: "有行业积累者",
    needsSkills: ["skill.closing", "skill.lead-follow", "skill.interview"],
    aiLevers: ["ai.text-gen", "ai.workflow", "ai.cs-bot-draft"],
    trafficNote: "私域/人脉/内容获客",
    moneyNote: "项目制/月费",
    riskNote: "卖时间锁死",
    ref: "超级标05",
  },
  {
    id: "play.ai-workflow-product",
    name: "AI 工作流产品化",
    parent: "sub.d4.workflow",
    oneLiner: "自动化能力做成可卖模板/产品",
    whoFor: "懂流程设计的人",
    needsSkills: ["skill.nocode", "skill.coding", "skill.packaging"],
    aiLevers: ["ai.workflow", "ai.tool-use", "ai.agent"],
    trafficNote: "内容演示+社群",
    moneyNote: "模板/订阅/服务",
    riskNote: "接口风控导致崩盘",
    ref: "超级标11",
  },
  {
    id: "play.ai-workflow-agency",
    name: "AI 工作流定制服务商",
    parent: "sub.d3.consult",
    oneLiner: "卖自动化落地服务给要提效的人",
    whoFor: "能交付+会销售",
    needsSkills: ["skill.closing", "skill.nocode", "skill.interview"],
    aiLevers: ["ai.workflow", "ai.agent"],
    trafficNote: "案例内容+转介",
    moneyNote: "定制费",
    riskNote: "交付重",
    ref: "超级标12",
  },
  {
    id: "play.enterprise-ai-train",
    name: "企业 AI 学习与服务",
    parent: "sub.d3.consult",
    oneLiner: "ToB 学习/落地服务",
    whoFor: "有企业客户触达",
    needsSkills: ["skill.closing", "skill.interview", "skill.packaging"],
    aiLevers: ["ai.text-gen", "ai.rag", "ai.knowledge-base"],
    trafficNote: "线下/人脉/内容",
    moneyNote: "培训+项目",
    riskNote: "销售周期长",
    ref: "超级标16",
  },
  {
    id: "play.paid-mcp",
    name: "付费 MCP / Agent 接口",
    parent: "sub.d5.plugin",
    oneLiner: "Agent 生态里卖付费能力接口",
    whoFor: "有独特数据或能力的人",
    needsSkills: ["skill.coding", "skill.packaging"],
    aiLevers: ["ai.tool-use", "ai.agent"],
    trafficNote: "开发者社区",
    moneyNote: "按次/订阅",
    riskNote: "生态标准变化",
    ref: "超级标17",
  },
  {
    id: "play.reset-traffic",
    name: "注意力事件获客",
    parent: "sub.d7.public",
    oneLiner: "抓住重置注意力的事件窗口",
    whoFor: "敏感且能快速产出内容者",
    needsSkills: ["skill.topic-select", "skill.copywriting"],
    aiLevers: ["ai.text-gen", "ai.image-gen"],
    trafficNote: "事件公域",
    moneyNote: "导流后成交",
    riskNote: "窗口短、易踩线",
    ref: "超级标18",
  },
  {
    id: "play.industry-ai-workbench",
    name: "行业 AI 工作台",
    parent: "sub.d5.saas",
    oneLiner: "垂直行业工具台订阅",
    whoFor: "深懂某一行业流程",
    needsSkills: ["skill.interview", "skill.coding", "skill.packaging"],
    aiLevers: ["ai.agent", "ai.rag", "ai.codegen"],
    trafficNote: "行业社群+内容",
    moneyNote: "SaaS",
    riskNote: "行业获客难",
    ref: "超级标20",
  },
  {
    id: "play.near-traffic-select",
    name: "离流量近选事",
    parent: "sub.d9.pick",
    oneLiner: "选事优先站到流量侧（原则玩法）",
    whoFor: "所有起步读者",
    needsSkills: ["skill.topic-select", "skill.time-budget"],
    aiLevers: ["ai.seo-assist", "ai.geo"],
    trafficNote: "原则本身",
    moneyNote: "间接：提高选对率",
    riskNote: "误读为有粉=有商业",
    ref: "超级标22",
  },
  {
    id: "play.tool-site-seo",
    name: "工具站 SEO",
    parent: "sub.d5.tool-site",
    oneLiner: "工具站靠搜索获客再变现",
    whoFor: "会做站+懂基础 SEO",
    needsSkills: ["skill.seo-basic", "skill.coding", "skill.ship-miniapp"],
    aiLevers: ["ai.codegen", "ai.seo-assist", "ai.geo"],
    trafficNote: "SEO/GEO",
    moneyNote: "订阅/广告/联盟",
    riskNote: "算法与竞争",
    ref: "方向 D5×D6×D7；项目库 web站",
  },
  {
    id: "play.local-life-ops",
    name: "本地生活代运营",
    parent: "sub.d8.ops",
    oneLiner: "帮本地商户做内容/团购获客",
    whoFor: "能跑线下+会内容",
    needsSkills: ["skill.shoot", "skill.closing", "skill.private-domain"],
    aiLevers: ["ai.text-gen", "ai.image-gen", "ai.video-gen"],
    trafficNote: "本地生活平台+短视频",
    moneyNote: "代运营费/分成",
    riskNote: "回款与信任",
    ref: "方向 D8；项目库本地生活",
  },
  {
    id: "play.avatar-custom",
    name: "AI 头像 / 表情定制",
    parent: "sub.d3.templates",
    oneLiner: "定制视觉虚拟服务",
    whoFor: "会用生成工具者",
    needsSkills: ["skill.cover", "skill.closing"],
    aiLevers: ["ai.image-gen", "ai.multimodal"],
    trafficNote: "内容平台展示作品",
    moneyNote: "单次定制",
    riskNote: "价格战",
    ref: "项目库形态·头像定制/表情包",
  },
  {
    id: "play.mini-game",
    name: "小游戏产品",
    parent: "sub.d5.app",
    oneLiner: "轻量游戏产品化",
    whoFor: "有游戏制作兴趣",
    needsSkills: ["skill.coding", "skill.ship-miniapp"],
    aiLevers: ["ai.codegen", "ai.image-gen"],
    trafficNote: "应用市场/内容",
    moneyNote: "内购/广告",
    riskNote: "获客贵",
    ref: "项目库形态·小游戏",
  },
  {
    id: "play.data-label",
    name: "数据标注接单",
    parent: "sub.d3.consult",
    oneLiner: "人力+流程承接标注单",
    whoFor: "能组织交付的人",
    needsSkills: ["skill.lead-follow", "skill.after-sales"],
    aiLevers: ["ai.workflow", "ai.cs-bot-draft"],
    trafficNote: "平台接单/人脉",
    moneyNote: "按量结算",
    riskNote: "单价下行",
    ref: "项目库形态·数据标注",
  },
  {
    id: "play.podcast",
    name: "播客 / 音频栏目",
    parent: "sub.media-audio",
    oneLiner: "音频内容换订阅与广告",
    whoFor: "善于谈话表达者",
    needsSkills: ["skill.speaking", "skill.topic-select"],
    aiLevers: ["ai.audio-gen", "ai.text-gen"],
    trafficNote: "播客平台订阅",
    moneyNote: "广告/赞赏/导流",
    riskNote: "增长慢",
    ref: "全网补 C",
  },
];

plays.forEach((p) => {
  nodes.push(
    n({
      id: p.id,
      name: p.name,
      kind: "play",
      parent: p.parent,
      oneLiner: p.oneLiner,
      whoFor: p.whoFor,
      needsSkills: p.needsSkills,
      aiLevers: p.aiLevers,
      trafficNote: p.trafficNote,
      moneyNote: p.moneyNote,
      riskNote: p.riskNote,
      status: "filled",
      sourceRefs: [{ level: "B", ref: p.ref }],
    }),
  );
  addEdge(p.parent, p.id, "contains");
  p.needsSkills.forEach((s) => addEdge(p.id, s, "requires"));
  p.aiLevers.forEach((a) => addEdge(p.id, a, "levered_by"));
});

// ——— views ———
const views = [
  {
    id: "V-directions",
    title: "十大方向总览",
    purpose: "一眼看清 D1–D10",
    nodeIds: dirs.map((d) => d[0]),
    layoutHint: "simple-page",
  },
  {
    id: "V-we-media-forms",
    title: "自媒体形态拆解",
    purpose: "内容形态枝",
    nodeIds: ["sub.we-media", ...mediaForms.map((m) => m[0])],
    layoutHint: "simple-page",
  },
  {
    id: "V-skills",
    title: "技能总览",
    purpose: "技能轴分组",
    nodeIds: [
      "skill.group.content",
      "skill.group.commerce",
      "skill.group.growth",
      "skill.group.build",
      "skill.group.ops",
      ...skills.map((s) => s[0]),
    ],
    layoutHint: "overview",
  },
  {
    id: "V-ai",
    title: "AI 能力层",
    purpose: "记能力不记品牌",
    nodeIds: [
      "ai.group.generate",
      "ai.group.agent",
      "ai.group.build",
      "ai.group.discover",
      "ai.group.interact",
      ...ais.map((a) => a[0]),
    ],
    layoutHint: "simple-page",
  },
  {
    id: "V-stages",
    title: "决策链",
    purpose: "选事到收束",
    nodeIds: stages.map((s) => s[0]),
    edgeFilter: ["precedes"],
    layoutHint: "simple-page",
  },
  {
    id: "V-play-niche-bite",
    title: "玩法咬合：垂直小号",
    purpose: "单玩法技能与 AI",
    nodeIds: [
      "play.vertical-niche-seed",
      "skill.topic-select",
      "skill.copywriting",
      "ai.text-gen",
      "ai.image-gen",
    ],
    edgeFilter: ["requires", "levered_by"],
    layoutHint: "simple-page",
  },
  {
    id: "V-traffic",
    title: "流量相关方向",
    purpose: "D1 与 D7 一眼",
    nodeIds: ["dir.d1", "dir.d7", "dim.near-traffic", "sub.d7.public", "sub.d7.geo"],
    layoutHint: "simple-page",
  },
];

const map = {
  version: 1,
  brand: "副业有术",
  domain: "leiwen.pro/playbook",
  updated: "2026-10-16",
  nodes,
  edges,
  views,
};

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(map, null, 2), "utf8");
console.log(
  `Wrote ${out}: nodes=${nodes.length} edges=${edges.length} views=${views.length}`,
);
