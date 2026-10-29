# 南工告示板

南京工业大学江浦校区校园互助委托告示板的移动端优先前端原型。温暖像素小镇风，React + TypeScript + Tailwind CSS + Vite。

视觉中的盾形告示板图标为本项目原创，不使用或仿制南京工业大学官方校徽；工大蓝（#0093DD）作为少量辅助色。1902 办学起点、校训与江浦校区地址依据学校官网公开信息。

## 运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run preview
```

## 已实现

- 响应式首页：移动端单列 + 底部导航 + 独立校园横向插画，桌面端三列告示墙 + 顶部发布入口
- 搜索、分类筛选、无结果状态
- 委托详情弹窗、认领（状态变为「进行中」）
- 发布委托表单（前端校验、提交后插入告示墙顶部）
- 8 条南工校园日常模拟委托（失物、自习、运动、借物、课程、闲置、活动等）

## 结构

```text
src/
  App.tsx              页面状态与交互编排
  types.ts             领域类型
  data/tasks.ts        模拟数据与分类元信息
  lib/                 时间、分类样式、状态工具
  components/          Header / Hero / FilterBar / TaskCard / 弹窗 / 导航等
```

后续接入后端时，将 `src/data/tasks.ts` 的初始数据替换为 API 请求，并把 `App.tsx` 中的
`handleClaim`、`handlePublish` 改为调用接口即可；组件不需要改动数据形状。

## 说明

当前为纯前端原型，不包含登录、数据库和后端。页面中的委托、人物与时间均为虚构演示数据，不代表真实用户发布。字体通过 Google Fonts 加载，离线时自动回退到系统字体。
