/* GitHub 仓库数据（构建时硬编码，非运行时拉取）
   语言占比取自 GitHub Linguist 的真实字节统计。 */

export const LANG_COLORS = {
  Go: '#2aa7c4',
  TypeScript: '#3a6ea5',
  JavaScript: '#d4b428',
  Python: '#4a7fb5',
  Java: '#b06a2c',
  Vue: '#3f9e7c',
  CSS: '#7a5fae',
  HTML: '#c4552f',
  Dart: '#1fa89f',
  Shell: '#6fae4a',
  Rust: '#b58467',
  C: '#6b7280',
  SCSS: '#c6538c',
  Batchfile: '#94a3b8',
  Dockerfile: '#5b8db8',
  Makefile: '#8a7f6a',
  Swift: '#c4703a',
  'C++': '#c4457a',
  Other: '#9aa3b2'
}

export const langColor = (name) => LANG_COLORS[name] || LANG_COLORS.Other

export const GROUPS = [
  {
    num: '01', name: '产品项目', en: 'Products',
    repos: [
      {
        name: 'yuewu_parent',
        title: '悦物在线商城',
        sub: '高性能微服务电商平台',
        desc: '基于 Spring Cloud (Nacos) 微服务架构的大型分布式电商系统，涵盖商品管理、购物车、订单处理、支付、搜索与全文检索，并针对秒杀、购物车等高并发场景做了缓存切面、异步写入、延迟队列等性能优化。',
        kind: '微服务电商', when: '2026.03', scale: '大型 · 分布式',
        langs: [{ name: 'JavaScript', pct: 44.6 }, { name: 'CSS', pct: 36.3 }, { name: 'HTML', pct: 14.7 }, { name: 'Java', pct: 4.4 }],
        tags: ['Spring Cloud', 'Nacos', 'MySQL 8.0', 'Redis', 'RabbitMQ', 'Elasticsearch', 'JWT'],
        highlights: ['缓存切面 @GmallCache', 'RabbitMQ 延迟队列', 'ES 全文检索', 'Redisson 分布式锁'],
        url: 'https://github.com/zyp556678/yuewu_parent'
      },
      {
        name: 'take_out_system',
        title: '鲲鹏外卖点餐系统',
        sub: '全流程点餐与履约',
        desc: '功能完整的外卖点餐系统，包含面向商家管理员的后台管理系统与面向消费者的移动端 H5，提供从菜品管理、用户下单到订单履约的全流程解决方案。',
        kind: '单体应用', when: '2026.03', scale: '完整 · 前后端',
        langs: [{ name: 'JavaScript', pct: 36.6 }, { name: 'CSS', pct: 35.5 }, { name: 'HTML', pct: 19.8 }, { name: 'Java', pct: 8.1 }],
        tags: ['Spring Boot', 'MyBatis-Plus', 'MySQL', 'Redis', 'Vue 2', 'Element-UI', 'Vant'],
        highlights: ['Filter 统一登录拦截', '字段自动填充', '短信验证码缓存', 'ThreadLocal 用户上下文'],
        url: 'https://github.com/zyp556678/take_out_system'
      },
      {
        name: 'laboratory-master',
        title: '实验室管理系统',
        sub: '资源 · 设备 · 人员 · 日志',
        desc: '基于 Spring Boot 的前后端分离实验室管理系统，用于管理实验室资源、设备、人员与活动。包含管理员 / 教师 / 学生三角色 RBAC 权限、登录与操作日志、资源调度等模块。',
        kind: '管理系统', when: '2026.03', scale: '前后端分离',
        langs: [{ name: 'Vue', pct: 49.4 }, { name: 'Java', pct: 38.1 }, { name: 'JavaScript', pct: 9.5 }, { name: 'SCSS', pct: 2.7 }],
        tags: ['Spring Boot', 'Vue', 'JWT', 'RBAC', 'EasyExcel', 'MinIO', 'AOP', 'ECharts'],
        highlights: ['三角色 RBAC 权限', 'AOP 操作日志', 'EasyExcel 导入导出', 'MinIO 文件存储'],
        url: 'https://github.com/zyp556678/laboratory-master'
      },
      {
        name: 'wareManager',
        title: '穿戴管家 WearWise',
        sub: '跨平台衣橱管理与 AI 搭配',
        desc: '帮助智能管理衣物、搭配穿搭、记录日常 OOTD 的跨平台应用，Android / iOS / Web / Desktop 多端运行。内置基于 Gemma 4 端侧模型的 AI 搭配助手，无需联网即可使用。',
        kind: '跨端应用', when: '2026.05', scale: '四端 · 端侧 AI',
        langs: [{ name: 'Dart', pct: 67.0 }, { name: 'HTML', pct: 23.6 }, { name: 'C++', pct: 4.6 }, { name: 'Other', pct: 4.8 }],
        tags: ['Flutter', 'Dart', 'Provider', 'SQLite', 'Open-Meteo', '高德 SDK'],
        highlights: ['Gemma 4 端侧 AI 搭配', '一套代码四端构建', '三级 Geocoding 兼容', '省级大创项目'],
        url: 'https://github.com/zyp556678/wareManager',
        home: 'https://waremanager-neon.vercel.app'
      }
    ]
  },
  {
    num: '02', name: '工程工具', en: 'Tooling',
    repos: [
      {
        name: 'wb-helper-main',
        title: 'WorkBuddy Gateway',
        sub: '网关三合一',
        desc: '把三个开源 WorkBuddy 网关项目合并为一个：一个 Go 网关主进程 + 一套 React 管理面板 + 一个可选的本机代理进程。对外提供 OpenAI 与 Anthropic 双兼容端点，附带选号调度、账号治理、模型目录与倍率、用量统计与桌面应用。',
        kind: '网关服务', when: '2026.09', scale: 'Go 主进程 + 面板',
        langs: [{ name: 'Go', pct: 64.3 }, { name: 'TypeScript', pct: 29.8 }, { name: 'Shell', pct: 2.1 }, { name: 'Rust', pct: 1.5 }, { name: 'Other', pct: 2.3 }],
        tags: ['Go', 'React', 'TypeScript', 'Docker', 'OpenAI API', 'Anthropic API'],
        highlights: ['OpenAI / Anthropic 双端点', '选号调度与账号治理', '模型目录与倍率', '用量统计与桌面应用'],
        url: 'https://github.com/zyp556678/wb-helper-main'
      },
      {
        name: 'faceunlock',
        title: '人脸识别登录',
        sub: 'Ubuntu / GNOME',
        desc: '给 Ubuntu / GNOME 加一套人脸识别登录：覆盖开机登录界面、锁屏、sudo、su 与 pkexec 授权框。由 PAM 模块 + 特权助手 + Tauri 管理界面 + 31 项验收测试组成，作为便捷因子而非密码替代品。',
        kind: '系统工具', when: '2026.10', scale: 'PAM + Tauri',
        langs: [{ name: 'Python', pct: 66.0 }, { name: 'Shell', pct: 11.0 }, { name: 'JavaScript', pct: 9.5 }, { name: 'CSS', pct: 4.3 }, { name: 'Other', pct: 9.2 }],
        tags: ['Python', 'PAM', 'OpenCV', 'Tauri', 'YuNet', 'SFace', 'polkit'],
        highlights: ['覆盖登录 / 锁屏 / sudo / su', 'YuNet + SFace 人脸引擎', '31 项验收测试', 'privacy-by-design'],
        url: 'https://github.com/zyp556678/faceunlock'
      },
      {
        name: 'opencode-starter-CLI',
        title: 'OpenCode Launcher',
        sub: '终端项目启动器 (ocl)',
        desc: '专为 OpenCode 打造的交互式项目记忆控制中心与终端启动器。一键检索历史项目、恢复会话、多窗口并发启动，原生实现终端鼠标与滚轮交互，列表高度随窗口动态伸缩。',
        kind: '终端工具', when: '2026.09', scale: 'CLI · 纯终端',
        langs: [{ name: 'TypeScript', pct: 87.3 }, { name: 'JavaScript', pct: 12.0 }, { name: 'Batchfile', pct: 0.7 }],
        tags: ['TypeScript', 'Node.js', 'CLI', 'OpenCode'],
        highlights: ['原生 VT SGR 鼠标驱动', '列表高度随窗口伸缩', '独立新窗口拉起', '会话历史检索'],
        url: 'https://github.com/zyp556678/opencode-starter-CLI'
      }
    ]
  },
  {
    num: '03', name: 'AI 实践', en: 'AI',
    repos: [
      {
        name: 'SpringAI_demo',
        title: 'AI Studio',
        sub: '多模型智能对话平台',
        desc: '基于 Spring Boot 3.x + Vue 3 + Spring AI 的多模型对话平台。支持 Deepseek、OpenAI、智谱、通义、Moonshot、Anthropic 等模型实时动态切换，提供个性化人设配置、会话管理与 SSE 流式输出。',
        kind: 'AI 应用', when: '2026.05', scale: '多模型 · 流式',
        langs: [{ name: 'Vue', pct: 55.9 }, { name: 'Java', pct: 33.3 }, { name: 'TypeScript', pct: 6.2 }, { name: 'CSS', pct: 4.3 }],
        tags: ['Spring Boot 3', 'Spring AI', 'Vue 3', 'TypeScript', 'MyBatis-Plus', 'SSE'],
        highlights: ['六大模型实时切换', 'AI 人设可配置', 'SSE 流式输出', 'API Key 库内加密存储'],
        url: 'https://github.com/zyp556678/SpringAI_demo'
      },
      {
        name: 'partner-skill',
        title: 'Partner Skill',
        sub: '另一半 AI 技能',
        desc: '把伴侣蒸馏成一个 AI Skill，模拟性格、回忆共同的故事、理解彼此的相处模式。包含创建、管理与进化三种模式，以及三线分析架构与安全边界设计。',
        kind: 'AI Skill', when: '2026.06', scale: '单文件 · 纯 Python',
        langs: [{ name: 'Python', pct: 100 }],
        tags: ['Python', 'AI Skill', 'LLM'],
        highlights: ['创建 / 管理 / 进化三模式', '三线分析架构', '长期记忆蒸馏', '明确安全边界'],
        url: 'https://github.com/zyp556678/partner-skill'
      }
    ]
  },
  {
    num: '04', name: '本站', en: 'Site',
    repos: [
      {
        name: 'personal-resume',
        title: '个人简历站点',
        sub: '你正在浏览的网站',
        desc: 'Vue 3 + Vite 构建的个人简历站点，采用工程规格表（Engineering Spec Sheet）排版 — 左对齐、以分隔线组织信息、等宽字体标注元数据。',
        kind: '本站', when: '2026.01', scale: 'Vue 3 + Vite',
        langs: [{ name: 'Vue', pct: 52.8 }, { name: 'CSS', pct: 45.4 }, { name: 'JavaScript', pct: 1.1 }, { name: 'HTML', pct: 0.6 }],
        tags: ['Vue 3', 'Vite', 'Vue Router', 'CSS3'],
        highlights: ['工程规格表排版', '深浅双主题', '全响应式', '零 UI 框架依赖'],
        url: 'https://github.com/zyp556678/personal-resume',
        home: 'https://personal-resume-gold.vercel.app'
      }
    ]
  }
]

export const ALL_REPOS = GROUPS.flatMap((g) => g.repos)
