# AGENTS.md

Vue 3 + Vite 个人简历站点。设计风格为 **Engineering Spec Sheet**（工程规格表 / 技术文档风）：左对齐、以分隔线组织信息、等宽字体标注元数据、信息密度高。

## 开发命令

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 (http://localhost:5173)
npm run build        # 构建生产版本到 dist/
npm run preview      # 预览生产构建
```

无测试、无 lint、无 typecheck 命令。验证方式：`npm run build` 成功即可。

## 项目结构

- **路由**：`src/router/index.js` — `/`（LandingPage）、`/resume`（ResumePage）、`/repos`（ReposPage）、`/test`（TestPage）
- **页面**：`src/views/` 下四个视图，均为 Options API
- **外壳**：`src/App.vue` 提供全局导航（`/` 之外的页面显示；landing 自带 nav）与主题切换
- **全局样式**：`src/style.css` 包含完整设计系统，通过 `@import` 引入 Font Awesome
- **静态资源**：`public/images/personal.jpg`（证件照）、`public/images/certificate.jpg`（证书）

## 设计系统

### 字体（一套字体的两个角色）
- **正文**：IBM Plex Sans（`--font`），中文回退 Noto Sans SC / PingFang SC
- **等宽**：IBM Plex Mono（`--font-mono`），用于 rail 标记、事实表标签、技术栈 token、日期、编号

### 颜色
- `--bg` / `--bg-alt`：冷调纸色 / 交替区带背景
- `--ink` / `--ink-2` / `--ink-3` / `--ink-4`：前景的四个层级
- `--ink-panel` / `--on-ink` / `--on-ink-2`：深色面板（abstract、featured case）
- `--rule` / `--rule-2`：分隔线（本设计的主要结构手段）
- `--accent`：唯一强调色；`--accent-bright` 专用于深色面板上的文字（保证对比度）

深色模式通过 `.dark-mode` class 切换全套变量。**在深色面板上不要直接用 `--accent`，用 `--accent-bright`。**

### 尺寸
- 间距变量 `--s1`(4px) 到 `--s32`(128px)，4px 基数
- 圆角统一 `2px`（文档感，不要加大圆角）
- 列宽 `--sheet: 1080px`；左侧 rail `--rail: 168px`
- 导航高 `--nav-h: 56px`

### 动效
- 时长 `--fast`(140ms) / `--norm`(260ms)，缓动 `--ease`
- 只有 masthead 有一次性入场动画（`.rise`），滚动不再逐段 fade-in
- `prefers-reduced-motion` 下全部禁用

### 响应式
- ≤960px：rail 由左侧竖排改为标题上方横排；spec 表 / pillars / clauses 单列
- ≤720px：隐藏 nav 链接；metrics 两列；facts / rows 单列

## 关键实现细节

- **主题切换**：`LandingPage` 与 `App` 各自维护 `darkMode`，写入 `document.body.classList` 与 `localStorage('zyp-theme')`
- **回归首页/简历**：`App.vue` 的 `showNav` 计算属性在 `/` 隐藏全局 nav
- **项目弹窗**：`openProjectModal(key)` 在 `map` 对象中硬编码仓库链接（ResumePage.vue script 内）
- **滚动定位**：`router/index.js` 的 `scrollBehavior` 对 hash 链接做 64px 偏移
- **无障碍**：交互元素 `min-height: 44px`，`:focus-visible` 统一强调色描边

## ReposPage（`/repos`）— 商品展示式仓库目录

- 从首页右侧的**叠放轮播**点卡片进入，路径 `/repos?r=<仓库名>`，落地后自动滚到该仓库
- 仓库数据在 **`src/data/repos.js`**（构建时硬编码，非运行时拉取）：`GROUPS` 分组、`LANG_COLORS` 语言色表、`ALL_REPOS` 汇总。新增 / 删除仓库改这里
- 语言构成条按**真实 GitHub 字节占比**渲染；未知语言回退 `Other` 灰
- 首页轮播用同一份 `ALL_REPOS`
- 顶部总构成条数据在 `ReposPage.vue` 的 `SUMMARY` 常量，改仓库后需一并更新
- 分组顺序即 `GROUPS` 数组顺序：产品项目 / 工程工具 / AI 实践 / 本站

## RepoCarousel（首页叠放轮播）

- 组件 `src/components/RepoCarousel.vue`，数据来自 `src/data/repos.js`
- 叠放规则：`offset()` 算最短环形距离，活动卡在最上层，前一张上移、后一张下移各 **50% 卡片高**，其余 `display:none`
- 卡片高度 / 露出高度由 `.deck` 的 `--deck-card-h` / `--deck-peek` 控制，**两者必须保持 1:2 关系**，否则叠放几何会错；`.deck-stage` 的上下 margin 按 peek 预留空间
- 交互：自动轮播（默认 3600ms）、悬停 / 聚焦暂停、上下按钮、圆点、`prefers-reduced-motion` 下不自动播放

## 修改内容时的注意事项

- 个人信息同时存在于 `ResumePage.vue`（事实表）与 `README.md`，修改时需同步
- 项目仓库链接硬编码在 `openProjectModal()` 的 `map` 对象中
- 技能标签的外部链接在 `skillGroups` 数据中
- 颜色一律用 CSS 变量；面板上的文字注意用 `--accent-bright`
- 章节编号（rail 的 01/02…、clause 的 01/02）是有序内容，新增章节需顺延编号
