<template>
  <div class="landing">
    <nav class="navbar" aria-label="Primary">
      <div class="nav-inner">
        <router-link to="/" class="nav-logo">ZYP</router-link>
        <ul class="nav-links">
          <li><a href="#intro">简介</a></li>
          <li><a href="#focus">专长</a></li>
          <li><a href="#specs">能力</a></li>
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

    <!-- MASTHEAD -->
    <header class="masthead">
      <div class="sheet sheet--full">
        <div class="mast-split">
          <div class="rise">
            <p class="mast-kicker">求职中 · 2026 · Java 后端</p>
            <h1 class="mast-name">张宇鹏</h1>
            <p class="mast-latin">ZHANG YUPENG</p>
            <p class="mast-role">黑龙江科技大学软件工程在读。以 Spring 生态为主，专注后端服务的设计、开发与上线。</p>
            <div class="actions">
              <router-link to="/resume" class="btn btn--solid">查看完整简历</router-link>
              <a href="mailto:taitanyunluo2@126.com" class="btn btn--line">联系我</a>
            </div>
          </div><RepoCarousel />
        </div>
      </div>
    </header>

    <!-- 01 ABSTRACT -->
    <section id="intro" class="sec">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">01</span><span class="rail-name">Abstract</span></aside>
        <div class="body">
          <div class="abstract">
            <p class="abstract-kicker">保持好奇，保持实践</p>
            <p class="abstract-text">对新技术保持好奇并学习，也在意把每个项目的每一行代码认真写好。</p>
            <p class="abstract-sig">— ZHANG YUPENG · 2026</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 02 FOCUS -->
    <section id="focus" class="sec sec--alt">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">02</span><span class="rail-name">Focus</span></aside>
        <div class="body">
          <h2 class="sec-title">专注的方向</h2>
          <p class="sec-lede">不是技能列表，是每天在思考、在练习、在打磨的三件事。</p>
          <div class="pillars">
            <article class="pillar">
              <p class="pillar-code">BACKEND</p>
              <h3 class="pillar-title">后端服务</h3>
              <p class="pillar-text">用 Spring Boot 与 Spring Cloud 构建可维护的服务。从接口设计到数据建模，从单元测试到部署上线。</p>
              <ul class="pillar-list">
                <li>RESTful 接口设计</li>
                <li>分层架构与领域建模</li>
                <li>单体到微服务演进</li>
              </ul>
            </article>
            <article class="pillar">
              <p class="pillar-code">RELIABILITY</p>
              <h3 class="pillar-title">性能与可靠</h3>
              <p class="pillar-text">关注线上场景的性能瓶颈与故障预案。缓存、消息、索引，每一项都不是「加上」就完了。</p>
              <ul class="pillar-list">
                <li>Redis 缓存策略</li>
                <li>RabbitMQ 异步解耦</li>
                <li>SQL 优化与索引设计</li>
              </ul>
            </article>
            <article class="pillar">
              <p class="pillar-code">ENGINEERING</p>
              <h3 class="pillar-title">工程实践</h3>
              <p class="pillar-text">写完代码不是结束。提交规范、文档同步、容器化部署 — 工程化是项目长期维护的根基。</p>
              <ul class="pillar-list">
                <li>Git 工作流</li>
                <li>Docker 容器化</li>
                <li>CI/CD 与文档</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 METRICS -->
    <section class="sec">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">03</span><span class="rail-name">Numbers</span></aside>
        <div class="body">
          <h2 class="sec-title">一些可以量化的事</h2>
          <div class="metrics">
            <div class="metric">
              <div class="metric-num">3</div>
              <div class="metric-label">完整项目，从零到上线</div>
            </div>
            <div class="metric">
              <div class="metric-num">15<sup>+</sup></div>
              <div class="metric-label">技术栈实战经验</div>
            </div>
            <div class="metric">
              <div class="metric-num">1</div>
              <div class="metric-label">省级大创项目</div>
            </div>
            <div class="metric">
              <div class="metric-num">2.5<sup>年</sup></div>
              <div class="metric-label">系统化编程训练</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 04 CAPABILITY -->
    <section id="specs" class="sec sec--alt">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">04</span><span class="rail-name">Capability</span></aside>
        <div class="body">
          <h2 class="sec-title">能力档案</h2>
          <p class="sec-lede">从代码到硬件，从工具到爱好。把所有能列出来的都列出来。</p>
          <div class="spec-list">
            <article v-for="group in specGroups" :key="group.id" class="spec-group">
              <header class="spec-group-head">
                <span class="spec-group-code">{{ group.id }}</span>
                <h3 class="spec-group-title">{{ group.title }}</h3>
                <span class="spec-group-en">{{ group.en }}</span>
              </header>
              <dl class="spec-rows">
                <div v-for="row in group.rows" :key="row.label" class="spec-row">
                  <dt class="spec-row-label">{{ row.label }}</dt>
                  <dd class="spec-row-value">
                    <span v-if="row.level" class="level" :title="levelLabel(row.level)">
                      <span
                        v-for="n in 4"
                        :key="n"
                        class="level-dot"
                        :class="{ on: n <= row.level }"
                      ></span>
                    </span>
                    <span class="spec-row-text">{{ row.text }}</span>
                  </dd>
                </div>
              </dl>
            </article>
          </div>
          <p class="spec-legend" aria-hidden="true">
            <span><span class="level"><span class="level-dot on"></span><span class="level-dot on"></span><span class="level-dot on"></span><span class="level-dot on"></span></span> 精通</span>
            <span><span class="level"><span class="level-dot on"></span><span class="level-dot on"></span><span class="level-dot on"></span><span class="level-dot"></span></span> 熟练</span>
            <span><span class="level"><span class="level-dot on"></span><span class="level-dot on"></span><span class="level-dot"></span><span class="level-dot"></span></span> 入门</span>
            <span><span class="level"><span class="level-dot on"></span><span class="level-dot"></span><span class="level-dot"></span><span class="level-dot"></span></span> 兴趣</span>
          </p>
        </div>
      </div>
    </section>

    <!-- 05 CLAUSES -->
    <section class="sec">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">05</span><span class="rail-name">Clauses</span></aside>
        <div class="body">
          <h2 class="sec-title">写代码的四条原则</h2>
          <div class="clauses">
            <div class="clause">
              <span class="clause-num">01</span>
              <h3 class="clause-title">简洁优于聪明</h3>
              <p class="clause-text">能用 5 行解决就不写 50 行。被读到的次数远比被写下的次数多。</p>
            </div>
            <div class="clause">
              <span class="clause-num">02</span>
              <h3 class="clause-title">先理解，再动手</h3>
              <p class="clause-text">不被框架的语法糖迷惑。理解 IoC、AOP、AQS 这些底层机制，写出来的代码才有底气。</p>
            </div>
            <div class="clause">
              <span class="clause-num">03</span>
              <h3 class="clause-title">文档与代码同步</h3>
              <p class="clause-text">README、接口文档、Commit Message 都是项目的一部分。让协作者读得懂，让未来的自己也能读得懂。</p>
            </div>
            <div class="clause">
              <span class="clause-num">04</span>
              <h3 class="clause-title">把异常想在前面</h3>
              <p class="clause-text">网络会断、缓存会失效、消息会重复。容错与重试，比「正常路径」更值得花时间设计。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 06 NOW -->
    <section id="now" class="sec sec--alt">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">06</span><span class="rail-name">Now</span></aside>
        <div class="body">
          <h2 class="sec-title">最近在做的事</h2>
          <p class="sec-lede">更新于 2026 年初。</p>
          <div class="log">
            <div class="log-item">
              <span class="log-status">进行中</span>
              <h3 class="log-title">深入分布式系统</h3>
              <p class="log-text">啃完《设计数据密集型应用》和 Redis、Kafka 源码片段，把分布式一致性、共识算法的细节弄清楚。</p>
            </div>
            <div class="log-item">
              <span class="log-status">寻找中</span>
              <h3 class="log-title">Java 后端实习</h3>
              <p class="log-text">期望 2026 年暑期或后续加入工程师团队，参与真实业务的后端开发与系统优化。可以远程或线下。</p>
            </div>
            <div class="log-item">
              <span class="log-status">计划中</span>
              <h3 class="log-title">第四个项目</h3>
              <p class="log-text">想写一个 Java 实现的轻量级消息中间件，借此把 NIO、协议设计、持久化这些底层串起来。</p>
            </div>
            <div class="log-item">
              <span class="log-status">尝试中</span>
              <h3 class="log-title">探索 AI 编程 Agent 生态</h3>
              <p class="log-text">在真实项目中使用 OpenCode、Claude Code 等终端 Agent 辅助开发，关注本地部署与全场景自动化的实践边界。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 07 CONTACT -->
    <section class="sec">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">07</span><span class="rail-name">Contact</span></aside>
        <div class="body">
          <div class="contact">
            <h2 class="contact-title">如果你需要一个靠得住的后端工程师</h2>
            <p class="contact-text">期待 Java 后端实习与全职机会。也欢迎技术交流、项目合作、读书心得分享。</p>
            <div class="contact-actions">
              <a href="mailto:taitanyunluo2@126.com" class="btn btn--solid">
                <i class="fas fa-envelope"></i> taitanyunluo2@126.com
              </a>
              <a href="tel:18745397398" class="btn btn--line">
                <i class="fas fa-phone"></i> 187 4539 7398
              </a>
            </div>
            <div class="contact-links">
              <a href="https://github.com/zyp556678" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> GitHub</a>
              <a href="https://gitee.com/zyp556678" target="_blank" rel="noopener noreferrer"><i class="fas fa-code-branch"></i> Gitee</a>
              <router-link to="/resume"><i class="fas fa-file-alt"></i> 完整简历</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-inner">
        <span>© 2026 ZHANG YUPENG</span>
        <span>个人简历 · 最后更新 2026.10</span>
      </div>
    </footer>
  </div>
</template>

<script>
import RepoCarousel from '../components/RepoCarousel.vue'

export default {
  name: 'LandingPage',
  components: { RepoCarousel },
  data() {
    return {
      darkMode: false,
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
    this.themeObserver = new MutationObserver(() => {
      this.darkMode = document.body.classList.contains('dark-mode')
    })
    this.themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] })
  },
  beforeUnmount() {
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
    }
  }
}
</script>
