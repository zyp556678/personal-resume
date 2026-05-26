<template>
  <div class="landing">
    <!-- Sticky nav for landing only -->
    <nav class="navbar" aria-label="Primary">
      <div class="nav-inner">
        <router-link to="/" class="nav-logo">ZYP</router-link>
        <ul class="nav-links">
          <li><a href="#intro">关于</a></li>
          <li><a href="#focus">专长</a></li>
          <li><a href="#specs">档案</a></li>
          <li><a href="#now">近况</a></li>
        </ul>
        <button
          @click="toggleTheme"
          class="theme-btn"
          :aria-label="darkMode ? '切换到浅色模式' : '切换到深色模式'"
        >
          <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          {{ darkMode ? 'Light' : 'Dark' }}
        </button>
      </div>
    </nav>

    <!-- HERO -->
    <header class="hero">
      <div class="container">
        <p class="hero-eyebrow reveal">
          <span class="hero-status-dot" aria-hidden="true"></span>
          Open to opportunities · 寻找 Java 后端实习
        </p>
        <h1 class="hero-title reveal">
          <span class="hero-title-grad">写出值得<br />信赖的代码。</span>
        </h1>
        <p class="hero-tagline reveal">
          张宇鹏 · 黑龙江科技大学软件工程在读。<br />
          以 Spring 生态为主，专注后端服务的设计、开发与上线。
        </p>
        <div class="hero-actions reveal">
          <router-link to="/resume" class="btn btn-primary">查看简历</router-link>
          <a href="mailto:taitanyunluo2@126.com" class="btn btn-ghost">联系我</a>
        </div>
      </div>

      <div class="hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div class="hero-scroll-dot"></div>
      </div>
    </header>

    <!-- A FOCUSED INTRODUCTION — dark statement panel -->
    <section id="intro" class="section">
      <div class="container">
        <div class="statement reveal">
          <p class="statement-eyebrow">A focused introduction — 保持好奇，保持实践</p>
          <p class="statement-text">
            <span>对新技术永远保持好奇并学习，</span>
            <span>也在意把每个项目的每一行代码</span>
            <span class="statement-em">认真写好。</span>
          </p>
          <p class="statement-sign">— ZHANG YUPENG · 2026</p>
        </div>
      </div>
    </section>

    <!-- WHAT I FOCUS ON — three focus areas (not projects) -->
    <section id="focus" class="section section--alt">
      <div class="container-wide">
        <div class="section-head section-head--center reveal">
          <span class="eyebrow">What I focus on</span>
          <h2 class="section-title">三件认真在做的事。</h2>
          <p class="section-sub">不是技能列表，是我每天在思考、在练习、在打磨的方向。</p>
        </div>

        <div class="focus-grid">
          <article class="focus-card reveal">
            <div class="focus-icon focus-icon--blue">
              <i class="fas fa-server"></i>
            </div>
            <h3 class="focus-title">后端服务</h3>
            <p class="focus-desc">用 Spring Boot 与 Spring Cloud 构建可维护的服务。从接口设计到数据建模，从单元测试到部署上线。</p>
            <ul class="focus-points">
              <li>RESTful 接口设计</li>
              <li>分层架构与领域建模</li>
              <li>单体到微服务演进</li>
            </ul>
          </article>

          <article class="focus-card reveal">
            <div class="focus-icon focus-icon--green">
              <i class="fas fa-bolt"></i>
            </div>
            <h3 class="focus-title">性能与可靠</h3>
            <p class="focus-desc">关注线上场景的性能瓶颈与故障预案。缓存、消息、索引，每一项都不是「加上」就完了。</p>
            <ul class="focus-points">
              <li>Redis 缓存策略</li>
              <li>RabbitMQ 异步解耦</li>
              <li>SQL 优化与索引设计</li>
            </ul>
          </article>

          <article class="focus-card reveal">
            <div class="focus-icon focus-icon--orange">
              <i class="fas fa-tools"></i>
            </div>
            <h3 class="focus-title">工程实践</h3>
            <p class="focus-desc">写完代码不是结束。Git 提交规范、文档同步、容器化部署 — 工程化是项目长期维护的根基。</p>
            <ul class="focus-points">
              <li>Git 工作流</li>
              <li>Docker 容器化</li>
              <li>CI/CD 与文档</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- BY THE NUMBERS — more meaningful metrics -->
    <section class="section section--tight">
      <div class="container">
        <div class="section-head section-head--center reveal">
          <span class="eyebrow">By the numbers</span>
          <h2 class="section-title">一些可以量化的事。</h2>
        </div>

        <div class="spec-strip reveal">
          <div class="spec">
            <div class="spec-num">3</div>
            <div class="spec-label">完整项目<br />从零到上线</div>
          </div>
          <div class="spec">
            <div class="spec-num">15<sup>+</sup></div>
            <div class="spec-label">技术栈<br />实战经验</div>
          </div>
          <div class="spec">
            <div class="spec-num">1</div>
            <div class="spec-label">省级<br />大创项目</div>
          </div>
          <div class="spec">
            <div class="spec-num">2.5<sup>年</sup></div>
            <div class="spec-label">系统化<br />编程训练</div>
          </div>
        </div>
      </div>
    </section>

    <!-- THE FULL SPEC — Apple Tech Specs table -->
    <section id="specs" class="section">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">The full spec</span>
          <h2 class="section-title">个人能力档案。</h2>
          <p class="section-sub">从代码到硬件，从工具到爱好。把所有能列出来的都列出来。</p>
        </div>

        <div class="specs reveal">
          <article
            v-for="group in specGroups"
            :key="group.id"
            class="spec-group"
          >
            <header class="spec-group-head">
              <span class="spec-group-num">{{ group.id }}</span>
              <h3 class="spec-group-title">{{ group.title }}</h3>
              <span class="spec-group-en">{{ group.en }}</span>
            </header>
            <dl class="spec-rows">
              <div
                v-for="row in group.rows"
                :key="row.label"
                class="spec-row"
              >
                <dt class="spec-row-label">{{ row.label }}</dt>
                <dd class="spec-row-value">
                  <span v-if="row.level" class="spec-level" :title="levelLabel(row.level)">
                    <span
                      v-for="n in 4"
                      :key="n"
                      class="spec-level-dot"
                      :class="{ filled: n <= row.level }"
                    ></span>
                  </span>
                  <span class="spec-row-text">{{ row.text }}</span>
                </dd>
              </div>
            </dl>
          </article>
        </div>

        <p class="spec-legend reveal" aria-hidden="true">
          <span><span class="spec-level"><span class="spec-level-dot filled"></span><span class="spec-level-dot filled"></span><span class="spec-level-dot filled"></span><span class="spec-level-dot filled"></span></span> 精通</span>
          <span><span class="spec-level"><span class="spec-level-dot filled"></span><span class="spec-level-dot filled"></span><span class="spec-level-dot filled"></span><span class="spec-level-dot"></span></span> 熟练</span>
          <span><span class="spec-level"><span class="spec-level-dot filled"></span><span class="spec-level-dot filled"></span><span class="spec-level-dot"></span><span class="spec-level-dot"></span></span> 入门</span>
          <span><span class="spec-level"><span class="spec-level-dot filled"></span><span class="spec-level-dot"></span><span class="spec-level-dot"></span><span class="spec-level-dot"></span></span> 兴趣</span>
        </p>
      </div>
    </section>

    <!-- PRINCIPLES — Apple-style values manifesto -->
    <section class="section section--alt">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">Principles</span>
          <h2 class="section-title">写代码的<br />四条原则。</h2>
        </div>

        <div class="principles">
          <div class="principle reveal">
            <span class="principle-num">01</span>
            <h3 class="principle-title">简洁优于聪明。</h3>
            <p class="principle-desc">能用 5 行解决就不写 50 行。被读到的次数远比被写下的次数多。</p>
          </div>
          <div class="principle reveal">
            <span class="principle-num">02</span>
            <h3 class="principle-title">先理解，再动手。</h3>
            <p class="principle-desc">不被框架的语法糖迷惑。理解 IoC、AOP、AQS 这些底层机制，写出来的代码才有底气。</p>
          </div>
          <div class="principle reveal">
            <span class="principle-num">03</span>
            <h3 class="principle-title">文档与代码同步。</h3>
            <p class="principle-desc">README、接口文档、Commit Message — 都是项目的一部分。让协作者读得懂，让未来的自己也能读得懂。</p>
          </div>
          <div class="principle reveal">
            <span class="principle-num">04</span>
            <h3 class="principle-title">把异常想在前面。</h3>
            <p class="principle-desc">网络会断、缓存会失效、消息会重复。容错与重试，比「正常路径」更值得花时间设计。</p>
          </div>
        </div>
      </div>
    </section>

    <!-- NOW — Apple-style status card -->
    <section id="now" class="section">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">/ Now</span>
          <h2 class="section-title">最近在做的事。</h2>
          <p class="section-sub">受 <a href="https://nownownow.com/about" target="_blank" rel="noopener noreferrer" class="text-link">Now Page</a> 启发，更新于 2026 年初。</p>
        </div>

        <div class="now-grid">
          <article class="now-card reveal">
            <div class="now-tag now-tag--green">
              <span class="now-tag-dot"></span> 进行中
            </div>
            <h3 class="now-title">深入分布式系统</h3>
            <p class="now-desc">啃完《设计数据密集型应用》和 Redis、Kafka 源码片段，把分布式一致性、共识算法的细节弄清楚。</p>
          </article>

          <article class="now-card reveal">
            <div class="now-tag now-tag--blue">
              <span class="now-tag-dot"></span> 寻找中
            </div>
            <h3 class="now-title">Java 后端实习</h3>
            <p class="now-desc">期望 2026 年暑期或后续加入工程师团队，参与真实业务的后端开发与系统优化。可以远程或线下。</p>
          </article>

          <article class="now-card reveal">
            <div class="now-tag now-tag--orange">
              <span class="now-tag-dot"></span> 计划中
            </div>
            <h3 class="now-title">第四个项目</h3>
            <p class="now-desc">想写一个 Java 实现的轻量级消息中间件，借此把 NIO、协议设计、持久化这些底层串起来。</p>
          </article>

          <article class="now-card reveal">
            <div class="now-tag now-tag--purple">
              <span class="now-tag-dot"></span> 尝试中
            </div>
            <h3 class="now-title">探索 AI 编程 Agent 生态</h3>
            <p class="now-desc">在真实项目中使用 OpenCode、Claude Code 等终端 Agent 辅助开发，关注 Hermes 本地部署与 OpenClaw 全场景自动化的实践边界。</p>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section--alt section--tight">
      <div class="container">
        <div class="cta reveal">
          <p class="eyebrow">Let's talk</p>
          <h2 class="cta-title">如果你需要一个<br />靠得住的后端工程师。</h2>
          <p class="cta-sub">期待 Java 后端实习与全职机会。也欢迎技术交流、项目合作、读书心得分享。</p>
          <div class="cta-actions">
            <a href="mailto:taitanyunluo2@126.com" class="btn btn-primary">
              <i class="fas fa-envelope"></i> taitanyunluo2@126.com
            </a>
            <a href="tel:18745397398" class="btn btn-outline">
              <i class="fas fa-phone"></i> 187 4539 7398
            </a>
          </div>
          <div class="cta-socials">
            <a href="https://github.com/zyp556678" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://gitee.com/zyp556678" target="_blank" rel="noopener noreferrer" aria-label="Gitee">
              <i class="fas fa-code-branch"></i>
            </a>
            <router-link to="/resume" aria-label="完整简历">
              <i class="fas fa-file-alt"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-inner">
        <span>&copy; 2026 ZHANG YUPENG</span>
        <span>Designed for clarity. Built with care.</span>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      darkMode: false,
      observer: null,
      themeObserver: null,
      specGroups: [
        {
          id: '01', title: '编程语言', en: 'Programming Languages',
          rows: [
            { label: 'Java',        level: 4, text: '主力语言 · JDK 8 / 17 · 集合 / 并发 / IO / 反射' },
            { label: 'SQL',         level: 3, text: 'MySQL 复杂查询、索引设计、SQL 优化' },
            { label: 'Dart',        level: 2, text: '用于 Flutter 跨平台开发（穿戴管家）' },
            { label: 'JavaScript',  level: 2, text: '配合 Vue 完成项目前端开发' }
          ]
        },
        {
          id: '02', title: '后端框架', en: 'Backend Frameworks',
          rows: [
            { label: 'Spring Boot',     level: 3, text: '单体应用首选 · 自动装配 / 起步依赖' },
            { label: 'Spring Cloud',    level: 3, text: '微服务架构（悦物商城）· Nacos / Feign 全家桶' },
            { label: 'Spring MVC',      level: 3, text: 'RESTful 接口设计与开发' },
            { label: 'MyBatis-Plus',    level: 3, text: '通用 CRUD / 字段自动填充 / 代码生成' },
            { label: 'JWT · OAuth 2.0', level: 3, text: 'Filter 鉴权拦截 / Token 设计' }
          ]
        },
        {
          id: '03', title: '数据库与存储', en: 'Database & Storage',
          rows: [
            { label: 'MySQL',         level: 3, text: '8.0 · 索引 / 锁机制 / SQL 优化 / 事务隔离级别' },
            { label: 'Redis',         level: 3, text: '缓存策略 / 数据结构 / 短信验证码 / 套餐缓存' },
            { label: 'Elasticsearch', level: 3, text: '商品全文检索 / 多维度搜索' },
            { label: 'SQLite',        level: 2, text: 'Flutter 本地持久化（v7 数据库迁移）' },
            { label: 'MinIO',         level: 2, text: '对象存储 · 文件上传' }
          ]
        },
        {
          id: '04', title: '中间件与分布式', en: 'Middleware & Distributed',
          rows: [
            { label: 'RabbitMQ',  level: 3, text: '异步解耦 / 延迟队列实现订单超时关闭' },
            { label: 'Nacos',     level: 3, text: '服务注册发现 + 配置中心' },
            { label: 'OpenFeign', level: 3, text: '微服务远程调用' },
            { label: 'Redisson',  level: 3, text: '分布式锁 / 限流' },
            { label: '微服务架构', level: 2, text: '服务拆分 · 治理基本模式' }
          ]
        },
        {
          id: '05', title: '工程化与运维', en: 'DevOps & Tooling',
          rows: [
            { label: 'Git',         level: 3, text: '分支策略 / Rebase / 多人协作 · GitHub + Gitee' },
            { label: 'Maven',       level: 3, text: '依赖管理 / 多模块 / 私服' },
            { label: 'Linux',       level: 3, text: '命令行 / Shell 脚本 / 服务部署' },
            { label: 'Docker',      level: 2, text: '容器化部署 / Docker Compose' },
            { label: 'CI / CD',     level: 2, text: '持续集成与持续部署基本流程' },
            { label: '技术文档',    level: 3, text: 'Markdown · README · 接口文档 · 注释规范' }
          ]
        },
        {
          id: '06', title: '前端与跨端', en: 'Frontend & Cross-platform',
          rows: [
            { label: 'Vue.js',       level: 2, text: '组件化开发 · 鲲鹏外卖管理后台' },
            { label: 'Flutter',      level: 2, text: '跨端 App · Provider 状态管理 · 多端构建' },
            { label: 'Element-UI',   level: 2, text: '后台管理系统 UI' },
            { label: 'Vant',         level: 2, text: '移动端 H5 UI' },
            { label: 'HTML / CSS',   level: 2, text: '响应式 / Flex / Grid 布局' }
          ]
        },
        {
          id: '07', title: '计算机基础', en: 'CS Fundamentals',
          rows: [
            { label: '数据结构与算法', level: 3, text: '数组 / 链表 / 树 / 图 / 哈希 / 排序 / DP / 贪心' },
            { label: '计算机网络',     level: 3, text: 'TCP/IP · HTTP / HTTPS · 三次握手 · TLS 基本原理' },
            { label: '操作系统',       level: 3, text: '进程 / 线程 / 调度 / 内存管理 / IO 模型' },
            { label: '数据库原理',     level: 3, text: '事务 / 隔离级别 / MVCC / B+ 树索引' },
            { label: '系统设计',       level: 2, text: 'CAP / 分布式一致性 / 典型架构题练习' }
          ]
        },
        {
          id: '08', title: '硬件与系统', en: 'Hardware & Systems',
          rows: [
            { label: '整机装配',       level: 3, text: '台式机 DIY 装机 · CPU / 主板 / 内存 / 显卡 / 电源 / 散热 选型' },
            { label: '硬件故障排查',    level: 3, text: '内存 / 主板 / 电源 / 散热 / 显卡 故障定位与替换' },
            { label: '系统装机',       level: 3, text: 'Windows / Linux 双系统 / WinPE / U 盘启动' },
            { label: '硬件改造',       level: 3, text: '风冷水冷 / 走线 / 散硅脂 / BIOS 设置 / 外设改造' }
          ]
        },
        {
          id: '09', title: '软实力', en: 'Soft Skills',
          rows: [
            { label: '技术写作',       level: 3, text: 'Markdown · README · 接口文档 · 注释规范' },
            { label: '沟通与协作',     level: 3, text: '团委组织部干事 · 团建 / 培训 / 跨部门协作' },
            { label: '责任感与抗压',   level: 3, text: '在复杂多变环境中保持冷静思考' },
            { label: '学习能力',       level: 3, text: '良好的编程习惯 · 快速适应新技术' },
            { label: '英语',           level: 3, text: 'CET-4 已通过 · 英文技术文档无障碍阅读' }
          ]
        },
        {
          id: '10', title: '爱好与兴趣', en: 'Hobbies & Interests',
          rows: [
            { label: '运动 · 户外', text: '日常运动习惯 · 保持身心状态' },
            { label: '数码 · 装机', text: 'PC / 主机 / 外设 · 装机改造是主要兴趣之一' },
            { label: '阅读 · 学习', text: '技术书 / 科幻 / 人文 · 持续输入是日常' }
          ]
        },
        {
          id: '11', title: '荣誉与亮点', en: 'Honors & Highlights',
          rows: [
            { label: '省级大创', text: '《穿戴管家》项目成员 · 已结题' },
            { label: '校园经历', text: '团委组织部干事 · 团建 3 次 · 新成员培训 2 期' },
            { label: '英语水平', text: 'CET-4 已通过' },
            { label: '政治面貌', text: '共青团员' }
          ]
        },
        {
          id: '12A', title: 'AI 编程 Agent（终端型）', en: 'AI Coding Agents (CLI)',
          rows: [
            { label: 'Claude Code',   level: 3, text: 'Anthropic · S 级终端 Agent · SWE-bench 80.8% · 百万级上下文' },
            { label: 'OpenCode',      level: 3, text: '开源跨平台 · 穿戴管家实际使用 · 兼容 DeepSeek / Claude / GPT' },
            { label: 'Codex',         level: 3, text: 'OpenAI 经典代码模型 · GitHub Copilot 底层基座' },
            { label: 'Reasonix',      level: 3, text: '数理推理 + 算法编程专项 Agent · 公式转代码' },
            { label: 'Hermes',        level: 3, text: 'Nous Research · 开源 Agent 模型 · 可 Ollama 本地部署' }
          ]
        },
        {
          id: '12B', title: 'AI 编程 IDE', en: 'AI-native IDEs',
          rows: [
            { label: 'Cursor AI',    level: 3, text: '全球主流 AI 原生 IDE · 多模型自由切换 · Vibe Coding' },
            { label: 'TRAE',         level: 3, text: '字节跳动 · 免费国产 AI IDE · 豆包模型 · 中文适配满分' }
          ]
        },
        {
          id: '12C', title: '系统级 Agent / 自动化', en: 'System Agents & Automation',
          rows: [
            { label: 'OpenClaw',    level: 3, text: 'GitHub 257K+ 星标 · 30+ 平台联动 · 全场景系统级 Agent' },
            { label: 'AstrBot',     level: 3, text: 'IM 原生 Agent 平台 · QQ / 飞书 / 钉钉 / 微信 · 国内高人气' }
          ]
        },
        {
          id: '12D', title: '工具链 / 部署 / 轻量助手', en: 'Toolchain, Deployment & Lightweight Assistants',
          rows: [
            { label: 'Ollama',       level: 3, text: '本地大模型一键部署 · Hermes / DeepSeek / Qwen 全兼容' },
            { label: 'DeepseekTUI',  level: 3, text: 'DeepSeek 纯终端客户端 · 离线编程 · 极致性能' },
            { label: 'DeepseekGUI',  level: 3, text: 'DeepSeek 桌面 GUI · 可视化编程 · 一键运行' },
            { label: 'ccSwitch',     level: 3, text: '多模型一键切换管理 · 统一密钥 / 代理配置' },
            { label: 'Marvis',       level: 3, text: '轻量沉浸式编程助手 · 极简交互 · 多语言适配' },
            { label: 'EchoBird',     level: 3, text: '实时代码联动 + 团队协作 · 中文深度适配' }
          ]
        }
      ]
    }
  },
  mounted() {
    this.darkMode = document.body.classList.contains('dark-mode')
    this.initReveal()

    // Sync dark mode flag if changed elsewhere
    this.themeObserver = new MutationObserver(() => {
      this.darkMode = document.body.classList.contains('dark-mode')
    })
    this.themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] })
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
    if (this.themeObserver) this.themeObserver.disconnect()
  },
  methods: {
    levelLabel(level) {
      return ['', '兴趣', '入门', '熟练', '精通'][level] || ''
    },
    toggleTheme() {
      this.darkMode = !this.darkMode
      document.body.classList.toggle('dark-mode', this.darkMode)
      document.body.classList.toggle('light-mode', !this.darkMode)
      localStorage.setItem('zyp-theme', this.darkMode ? 'dark' : 'light')
    },
    initReveal() {
      this.observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            this.observer.unobserve(e.target)
          }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
      )
      this.$nextTick(() => {
        document.querySelectorAll('.reveal').forEach((el) => this.observer.observe(el))
      })
    }
  }
}
</script>
