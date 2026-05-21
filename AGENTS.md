# AGENTS.md

Vue 3 + Vite 个人简历单页应用，采用 **Neo-Brutalism** 设计风格（硬边框、无圆角、硬投影）。

## 开发命令

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 (http://localhost:5173)
npm run build        # 构建生产版本到 dist/
npm run preview      # 预览生产构建
```

无测试、无 lint、无 typecheck 命令。验证方式：`npm run build` 成功即可。

## 项目结构

- **单文件应用**：所有逻辑在 `src/App.vue`（Options API），无路由、无子组件
- **全局样式**：`src/style.css` 包含完整设计系统，通过 `@import` 引入 Font Awesome
- **静态资源**：`public/images/personal.jpg`（证件照）、`public/images/certificate.jpg`（证书）
- **构建产物**：`dist/` 已提交到仓库

## 设计系统（Neo-Brutalism）

### 字体
- **正文**：Space Grotesk（`--font`）
- **等宽**：Space Mono（`--font-mono`），用于导航 logo、标签、日期等

### 颜色系统
全部使用 oklch 色彩空间，**不要用十六进制色值**。关键变量：
- `--primary` / `--primary-fg`：主色（紫蓝）及前景
- `--accent` / `--accent-fg`：强调色（黄绿）及前景
- `--bg` / `--fg`：背景/前景
- `--muted` / `--muted-fg`：弱化背景/前景
- `--border` / `--border-subtle`：边框色
- `--card` / `--shadow-hard`：卡片背景/硬投影

深色模式通过 `.dark-mode` class 切换全套变量。

### 间距与尺寸
- 间距变量：`--s1`(4px) 到 `--s16`(64px)，4px 基数
- 圆角：`--radius: 0px`（Neo-Brutalism 特征，不要添加圆角）
- 边框宽度：`--border-w: 3px`
- 硬投影：`--shadow-hard: 4px 4px 0px var(--border)`

### 动画
- 时长：`--fast`(150ms) / `--norm`(250ms)
- 缓动：`--ease: cubic-bezier(0.22, 1, 0.36, 1)`
- 支持 `prefers-reduced-motion` 媒体查询，禁用动画时隐藏背景特效层

### 响应式断点
- ≤480px：小屏（单列布局，缩小字号）
- ≥768px：平板（技能网格 2 列，bento 横向布局）
- ≥1024px：桌面（技能网格 3 列，项目卡片 3 列）

## 关键实现细节

- **主题切换**：`darkMode` data 属性 → `document.body.classList` 切换 `dark-mode` / `light-mode`
- **平滑滚动**：`initSmoothScroll()` 监听 `a[href^="#"]` 点击，自动计算 navbar 高度偏移（56px + 8px）
- **滚动动画**：`initScrollReveal()` 用 IntersectionObserver 为 `.section` 添加 `.in-view` class
- **鼠标交互**：`initBgInteraction()` 追踪鼠标位置写入 `--mx`/`--my` CSS 变量，驱动背景形状和光晕
- **项目弹窗**：`openProjectModal(key)` 在 `map` 对象中硬编码仓库链接（App.vue:433-437）
- **无障碍**：交互元素 `min-height: 44px`，支持 `focus-visible` 键盘导航

## 修改个人信息时的注意事项

- 个人信息同时存在于 `App.vue`（模板）和 `README.md`，修改时需同步更新
- 项目仓库链接硬编码在 `openProjectModal()` 的 `map` 对象中（App.vue:433-437）
- 技能标签的外部链接在模板中逐个硬编码
- 所有颜色必须使用 CSS 变量（oklch 格式），间距使用 `--s*` 变量
- 新增交互元素确保 min-height/min-width ≥ 44px
