# 部署 · leiwen.pro/playbook

副业有术已并入主站，**不要**再建独立 Vercel 项目。

## 做法

1. Vercel 项目：**leiwen.pro**（本仓根目录）  
2. Framework：Next.js  
3. Build：`npm run build` / `pnpm build`  
4. Domain：`leiwen.pro`  

地图数据在构建时由 `app/playbook` 直接读 `playbook/data/map.json`。  
不做旧路径兼容；未命中页面 404 → 回首页。

## 验收

- [ ] https://leiwen.pro/ 首页有「副业有术」入口  
- [ ] https://leiwen.pro/playbook 打开地图首页  
- [ ] /playbook/plays 玩法数与 `playbook/data/map.json` 一致  
