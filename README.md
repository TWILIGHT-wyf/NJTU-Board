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
- 委托详情弹窗、认领委托、完成委托
- 发布委托表单：必填校验、分类选择、提交后插入告示墙顶部
- 「我的委托」页面：区分「我发布的」和「我认领的」，带数量与空状态
- 单浏览器状态持久化：任务数据写入 `localStorage`，刷新页面后仍保留
- 业务规则：不可认领自己的委托；已被认领或已完成的委托不可重复认领；只有认领人能标记完成
- 8 条南工校园日常模拟委托（失物、自习、运动、借物、课程、闲置、活动等）
- 手机端与桌面端均完成交互检查

## 结构

```text
src/
  App.tsx                    页面视图编排、筛选、弹窗与 Toast
  hooks/useTaskBoard.ts      任务状态、localStorage、认领/完成/发布规则
  types.ts                   领域类型
  data/tasks.ts              模拟数据与分类元信息
  lib/                       时间、分类样式、状态工具
  components/
    MyTasksPage.tsx          我的委托页面
    TaskGrid.tsx             公告卡片网格
    TaskCard.tsx / TaskDetail.tsx
    Header / Hero / FilterBar / Footer / BottomNav / 弹窗等
```

后续接入后端时，将 `useTaskBoard` 中的本地状态替换为 API 调用，把 `loadTasks` / `publishTask` /
`claimTask` / `completeTask` 对应到服务端接口；页面组件不需要改动数据形状。

## 说明与边界

当前为单浏览器前端 MVP，不包含登录、数据库、消息通知和后端。页面中的委托、人物与时间均为虚构演示数据。

- 数据仅保存在当前浏览器的 `localStorage` 中；清除站点数据后会重新载入初始演示数据。
- 只模拟当前用户「阿栗」的发布、认领和完成操作，不模拟其他用户的操作，也不支持多用户实时协作。
- 个人主页仍是占位入口；委托编辑、取消、删除与站内沟通尚未实现。
- 字体通过 Google Fonts 加载，离线时自动回退到系统字体。
