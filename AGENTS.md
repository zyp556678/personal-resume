# AGENTS.md

这是一个基于 Vue 3 + Vite 的个人简历单页应用,采用现代 Glassmorphism 设计风格。

## 开发命令

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 (http://localhost:5173)
npm run build        # 构建生产版本
npm run preview      # 预览生产构建
```

## 项目结构

- **单文件应用**: 所有内容在 `src/App.vue` 中实现,无路由
- **样式文件**: `src/style.css` 包含完整的设计系统和全局样式
- **静态资源**: `/public/images/` 存放个人照片和证书图片
- **依赖**: Vue 3 + Font Awesome 图标库

## 设计系统

### 风格
- **设计风格**: Glassmorphism (玻璃态)
- **字体**: Archivo (标题) + Space Grotesk (正文)
- **色彩**: 单色系 + 蓝色强调色 (#2563EB)
- **效果**: backdrop-filter blur(20px), 半透明背景, 细边框

### CSS 变量系统
- **颜色**: `--color-primary`, `--color-accent`, `--color-background` 等
- **间距**: 基于 8dp 系统 (`--space-1` 到 `--space-10`)
- **阴影**: 4 级阴影系统 (`--shadow-sm` 到 `--shadow-xl`)
- **动画**: 统一时长 150ms/250ms/300ms
- **圆角**: `--radius-sm` 到 `--radius-xl`

### 响应式断点
- 移动端: < 768px
- 小屏: < 480px
- 桌面端: ≥ 768px

## 关键实现细节

- **主题切换**: 通过 `darkMode` 状态控制 `body` 的 `dark-mode` class,切换 CSS 变量
- **平滑滚动**: `initSmoothScroll()` 方法处理锚点导航,自动计算导航栏高度偏移
- **项目链接弹窗**: 点击项目卡片触发 `openProjectModal()`,显示 Gitee/GitHub 选择弹窗
- **外部链接**: 技能标签、教育背景、校园经历等包含可点击的外部链接
- **无障碍**: 所有交互元素满足 44px 最小触摸目标,支持键盘导航和 focus 状态
- **性能**: 支持 `prefers-reduced-motion` 媒体查询

## 注意事项

- 修改个人信息需同时更新 `App.vue` 和 `README.md`
- 项目仓库链接硬编码在 `openProjectModal()` 的 `projects` 对象中 (App.vue:423-439)
- 证书图片路径: `/images/certificate.jpg`
- 个人照片路径: `/images/personal.jpg`
- 所有颜色使用 CSS 变量,不要硬编码十六进制值
- 间距使用 `--space-*` 变量保持一致性
- 新增交互元素需确保 min-height/min-width ≥ 44px
