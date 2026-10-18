/** 站面公开品牌（左上角 / 页脚 / 标题） */
export const brandName = "雷文AI实践";

/** 首页 Hero / meta description 口号 */
export const siteSlogan = "学AI 用AI 富起来";

/** 页脚短签 */
export const siteShortSign = "雷文AI实践｜学AI 用AI 富起来";

/** 顶栏可见栏目（无「文章」——有稿再加） */
export const primaryNav = [
  { href: "/playbook", label: "副业有术" },
  { href: "/links", label: "副业导航" },
  { href: "/about", label: "关于" },
] as const;

/** 页脚栏目行（含边角「其它作品」） */
export const footerNav = [
  { href: "/playbook", label: "副业有术" },
  { href: "/links", label: "副业导航" },
  { href: "/about", label: "关于" },
  { href: "/works", label: "其它作品" },
] as const;

/** 首页临时入口卡 */
export const homeEntries = [
  { href: "/playbook", label: "副业有术", hint: "先看清地图" },
  { href: "/links", label: "副业导航", hint: "建设中" },
  { href: "/about", label: "关于", hint: "人与定位" },
] as const;
