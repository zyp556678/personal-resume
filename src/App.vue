<template>
  <div id="app" :class="{ 'dark-mode': darkMode }">
    <!-- GRAIN -->
    <div class="grain" aria-hidden="true"></div>

    <!-- NAV -->
    <nav class="nav" :class="{ scrolled: navScrolled }" @click="handleNavClick">
      <a href="#hero" class="nav-logo">ZYP</a>
      <ul class="nav-links">
        <li><a href="#about">关于</a></li>
        <li><a href="#skills">技能</a></li>
        <li><a href="#projects">项目</a></li>
        <li><a href="#campus">经历</a></li>
        <li><a href="#self">评价</a></li>
      </ul>
      <button @click="toggleTheme" class="nav-theme" :aria-label="darkMode ? '切换到浅色模式' : '切换到深色模式'">
        <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
      </button>
    </nav>

    <!-- HERO -->
    <section id="hero" class="hero">
      <div class="hero-inner">
        <div class="hero-pre">SOFTWARE ENGINEER · 2027</div>
        <h1 class="hero-name">
          <span class="hero-line"><span class="hero-word" style="--d:0">后</span><span class="hero-word" style="--d:1">端</span><span class="hero-word" style="--d:2">开</span><span class="hero-word" style="--d:3">发</span><span class="hero-word" style="--d:4">工</span><span class="hero-word" style="--d:5">程</span><span class="hero-word" style="--d:6">师</span></span>
        </h1>
        <p class="hero-tagline">张宇鹏 &nbsp;·&nbsp; Java &nbsp;·&nbsp; 微服务架构 &nbsp;·&nbsp; 黑龙江科技大学</p>
        <div class="hero-scroll" aria-hidden="true">
          <span>SCROLL</span>
          <div class="hero-scroll-line"></div>
        </div>
      </div>
      <div class="hero-orb hero-orb-1" aria-hidden="true"></div>
      <div class="hero-orb hero-orb-2" aria-hidden="true"></div>
    </section>

    <!-- ABOUT -->
    <section id="about" class="section section-dark">
      <div class="container reveal-parent">
        <div class="eyebrow reveal-up">01 — 关于我</div>
        <div class="about-layout">
          <div class="about-text">
            <h2 class="about-heading reveal-up">构建可靠的<br/>软件系统</h2>
            <div class="about-info reveal-up">
              <div class="about-row"><span class="about-label">姓名</span><span class="about-val">张宇鹏</span></div>
              <div class="about-row"><span class="about-label">电话</span><span class="about-val">18745397398</span></div>
              <div class="about-row"><span class="about-label">邮箱</span><span class="about-val">taitanyunluo2@126.com</span></div>
              <div class="about-row"><span class="about-label">籍贯</span><span class="about-val">黑龙江省牡丹江市</span></div>
              <div class="about-row"><span class="about-label">出生</span><span class="about-val">2005年12月</span></div>
              <div class="about-row"><span class="about-label">学历</span><span class="about-val">本科 · 2027届</span></div>
            </div>
            <div class="about-links reveal-up">
              <a href="https://github.com/zyp556678" target="_blank" rel="noopener noreferrer" class="link-btn"><i class="fab fa-github"></i> GitHub</a>
              <a href="https://gitee.com/zyp556678" target="_blank" rel="noopener noreferrer" class="link-btn"><i class="fas fa-code-branch"></i> Gitee</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" class="section section-light">
      <div class="container reveal-parent">
        <div class="eyebrow reveal-up">02 — 教育背景</div>
        <div class="edu-layout">
          <div class="edu-left reveal-left">
            <h2 class="section-title">黑龙江<br/>科技大学</h2>
            <div class="edu-meta">
              <span class="edu-badge">软件工程</span>
              <span class="edu-badge">2023.09 — 2027.06</span>
              <span class="edu-badge">本科</span>
            </div>
          </div>
          <div class="edu-right reveal-right">
            <p class="edu-label">主修课程</p>
            <div class="edu-courses">
              <span class="edu-course">Java</span>
              <span class="edu-course">数据结构与算法</span>
              <span class="edu-course">计算机系统基础</span>
              <span class="edu-course">数据库原理及应用</span>
              <span class="edu-course">计算机网络</span>
              <span class="edu-course">操作系统</span>
              <span class="edu-course">算法设计与分析</span>
              <span class="edu-course">软件工程</span>
            </div>
            <a href="https://www.usth.edu.cn/" target="_blank" rel="noopener noreferrer" class="link-btn" style="margin-top:2rem">
              <i class="fas fa-external-link-alt"></i> 访问学校官网
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section section-dark">
      <div class="container reveal-parent">
        <div class="eyebrow reveal-up">03 — 技术栈</div>
        <h2 class="section-title" style="margin-bottom:3rem" >全栈<br/>技术能力</h2>
        <div class="skills-grid">
          <div class="skill-card glass reveal-up" style="--delay:0">
            <div class="skill-icon" style="--ic:var(--blue)"><i class="fas fa-code"></i></div>
            <h3>编程语言</h3>
            <a href="https://www.oracle.com/java/" target="_blank" rel="noopener noreferrer" class="skill-tag">Java</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:1">
            <div class="skill-icon" style="--ic:#10b981"><i class="fas fa-layer-group"></i></div>
            <h3>后端框架</h3>
            <a href="https://spring.io/projects/spring-boot" target="_blank" rel="noopener noreferrer" class="skill-tag">Spring Boot</a>
            <a href="https://spring.io/projects/spring-cloud" target="_blank" rel="noopener noreferrer" class="skill-tag">Spring Cloud</a>
            <a href="https://baomidou.com/" target="_blank" rel="noopener noreferrer" class="skill-tag">MyBatis-Plus</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:2">
            <div class="skill-icon" style="--ic:#f59e0b"><i class="fas fa-database"></i></div>
            <h3>数据库</h3>
            <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" class="skill-tag">MySQL</a>
            <a href="https://redis.io/" target="_blank" rel="noopener noreferrer" class="skill-tag">Redis</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:3">
            <div class="skill-icon" style="--ic:#06b6d4"><i class="fas fa-envelope-open-text"></i></div>
            <h3>消息队列</h3>
            <a href="https://rabbitmq.com/" target="_blank" rel="noopener noreferrer" class="skill-tag">RabbitMQ</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:4">
            <div class="skill-icon" style="--ic:#8b5cf6"><i class="fas fa-network-wired"></i></div>
            <h3>分布式</h3>
            <a href="https://nacos.io/" target="_blank" rel="noopener noreferrer" class="skill-tag">Nacos</a>
            <a href="https://github.com/OpenFeign/feign" target="_blank" rel="noopener noreferrer" class="skill-tag">Feign</a>
            <a href="https://redisson.org/" target="_blank" rel="noopener noreferrer" class="skill-tag">Redisson</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:5">
            <div class="skill-icon" style="--ic:#ec4899"><i class="fas fa-search"></i></div>
            <h3>搜索引擎</h3>
            <a href="https://www.elastic.co/elasticsearch/" target="_blank" rel="noopener noreferrer" class="skill-tag">Elasticsearch</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:6">
            <div class="skill-icon" style="--ic:#14b8a6"><i class="fas fa-tools"></i></div>
            <h3>开发运维</h3>
            <a href="https://maven.apache.org/" target="_blank" rel="noopener noreferrer" class="skill-tag">Maven</a>
            <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" class="skill-tag">Git</a>
            <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer" class="skill-tag">Docker</a>
            <a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer" class="skill-tag">Linux</a>
            <a href="https://www.redhat.com/en/topics/devops/what-is-cicd" target="_blank" rel="noopener noreferrer" class="skill-tag">CI/CD</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:7">
            <div class="skill-icon" style="--ic:#ef4444"><i class="fas fa-shield-alt"></i></div>
            <h3>安全认证</h3>
            <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer" class="skill-tag">JWT</a>
            <a href="https://oauth.net/2/" target="_blank" rel="noopener noreferrer" class="skill-tag">OAuth2.0</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:8">
            <div class="skill-icon" style="--ic:#f97316"><i class="fas fa-file-export"></i></div>
            <h3>数据处理</h3>
            <a href="https://easyexcel.opensource.alibaba.com/" target="_blank" rel="noopener noreferrer" class="skill-tag">EasyExcel</a>
            <a href="https://min.io/" target="_blank" rel="noopener noreferrer" class="skill-tag">Minio</a>
          </div>
          <div class="skill-card glass reveal-up" style="--delay:9">
            <div class="skill-icon" style="--ic:var(--blue)"><i class="fas fa-brain"></i></div>
            <h3>基础知识</h3>
            <span class="skill-tag">数据结构与算法</span>
            <span class="skill-tag">计算机网络</span>
            <span class="skill-tag">操作系统</span>
            <span class="skill-tag">系统设计</span>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section section-light">
      <div class="container reveal-parent">
        <div class="eyebrow reveal-up">04 — 项目经历</div>
        <h2 class="section-title" style="margin-bottom:3rem">精选<br/>项目作品</h2>

        <!-- Proj 1 -->
        <article class="project-card reveal-up" style="--delay:0" @click="openProjectModal('yuewu')" tabindex="0" role="button" @keydown.enter="openProjectModal('yuewu')">
          <div class="project-number" aria-hidden="true">01</div>
          <div class="project-body">
            <div class="project-head">
              <h3>悦物在线商城系统</h3>
              <span class="project-role">后端开发</span>
            </div>
            <div class="project-tags">
              <span>SpringCloud</span><span>Redis</span><span>RabbitMQ</span><span>Elasticsearch</span><span>Nacos</span>
            </div>
            <p class="project-desc">基于 SpringCloud 微服务架构的分布式电商平台，涵盖商品、购物车、订单、支付、搜索等核心模块，解决高并发场景下的性能瓶颈。</p>
            <div class="project-stats">
              <div class="project-stat"><span class="stat-value">30%</span><span class="stat-label">吞吐量提升</span></div>
              <div class="project-stat"><span class="stat-value">微服务</span><span class="stat-label">架构模式</span></div>
              <div class="project-stat"><span class="stat-value">5+</span><span class="stat-label">核心模块</span></div>
            </div>
            <ul class="project-bullets">
              <li>采用 Redis 缓存购物车数据，异步处理优化数据库写入</li>
              <li>集成 RabbitMQ 延迟队列实现订单超时自动取消</li>
              <li>构建 Elasticsearch 商品索引，多维度复杂检索与排序</li>
              <li>Nacos 服务发现与配置管理，网关鉴权路由</li>
            </ul>
            <div class="project-link-indicator">
              <span>查看源码</span><i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </article>

        <!-- Proj 2 -->
        <article class="project-card reveal-up" style="--delay:1" @click="openProjectModal('laboratory')" tabindex="0" role="button" @keydown.enter="openProjectModal('laboratory')">
          <div class="project-number" aria-hidden="true">02</div>
          <div class="project-body">
            <div class="project-head">
              <h3>实验室资源管理系统</h3>
              <span class="project-role">后端开发</span>
            </div>
            <div class="project-tags">
              <span>SpringBoot</span><span>JWT</span><span>RBAC</span><span>EasyExcel</span><span>Minio</span><span>AOP</span><span>ECharts</span>
            </div>
            <p class="project-desc">基于 SpringBoot 的实验室资源管理系统，解决权限控制、数据处理和文件存储问题，提供完整的资源管理闭环。</p>
            <div class="project-stats">
              <div class="project-stat"><span class="stat-value">30%</span><span class="stat-label">响应时间缩短</span></div>
              <div class="project-stat"><span class="stat-value">20%</span><span class="stat-label">满意度提升</span></div>
              <div class="project-stat"><span class="stat-value">RBAC</span><span class="stat-label">权限模型</span></div>
            </div>
            <ul class="project-bullets">
              <li>基于 JWT 的认证授权系统与 RBAC 权限模型</li>
              <li>RESTful API 及实验室、设备、课程资源预约审核流程</li>
              <li>EasyExcel 批量导入导出，Minio 文件存储</li>
              <li>AOP 操作日志，ECharts 数据可视化</li>
            </ul>
            <div class="project-link-indicator">
              <span>查看源码</span><i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </article>

        <!-- Proj 3 -->
        <article class="project-card reveal-up" style="--delay:2" @click="openProjectModal('takeout')" tabindex="0" role="button" @keydown.enter="openProjectModal('takeout')">
          <div class="project-number" aria-hidden="true">03</div>
          <div class="project-body">
            <div class="project-head">
              <h3>鲲鹏外卖点餐平台</h3>
              <span class="project-role">后端开发</span>
            </div>
            <div class="project-tags">
              <span>SpringBoot</span><span>MyBatis-Plus</span><span>Redis</span><span>Swagger</span>
            </div>
            <p class="project-desc">基于 SpringBoot 的前后端分离外卖系统，提供高效、稳定的在线点餐服务，实现完整订单业务闭环。</p>
            <div class="project-stats">
              <div class="project-stat"><span class="stat-value">30%</span><span class="stat-label">响应速度提升</span></div>
              <div class="project-stat"><span class="stat-value">闭环</span><span class="stat-label">订单业务</span></div>
              <div class="project-stat"><span class="stat-value">REST</span><span class="stat-label">API 设计</span></div>
            </div>
            <ul class="project-bullets">
              <li>后台管理 API — 员工权限、菜品/套餐管理、订单处理</li>
              <li>短信验证码登录、购物车及下单核心业务</li>
              <li>Redis 缓存热点数据和验证码，提升性能与安全性</li>
              <li>统一响应格式与数据库表结构，Swagger 接口文档</li>
            </ul>
            <div class="project-link-indicator">
              <span>查看源码</span><i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </article>

        <!-- Proj 4 -->
        <article class="project-card reveal-up" style="--delay:3" @click="openProjectModal('wareManager')" tabindex="0" role="button" @keydown.enter="openProjectModal('wareManager')">
          <div class="project-number" aria-hidden="true">04</div>
          <div class="project-body">
            <div class="project-head">
              <h3>穿戴管家</h3>
              <span class="project-role">全栈开发</span>
            </div>
            <div class="project-tags">
              <span>Flutter</span><span>Dart</span><span>SQLite</span><span>Material Design 3</span><span>高德定位</span>
            </div>
            <p class="project-desc">跨平台衣橱管理应用，帮助智能管理衣物、搭配穿搭、记录日常OOTD，提供五组主题配色和深色模式支持。</p>
            <div class="project-stats">
              <div class="project-stat"><span class="stat-value">跨平台</span><span class="stat-label">iOS/Android/Web</span></div>
              <div class="project-stat"><span class="stat-value">5组</span><span class="stat-label">主题配色</span></div>
              <div class="project-stat"><span class="stat-value">Material 3</span><span class="stat-label">设计语言</span></div>
            </div>
            <ul class="project-bullets">
              <li>衣橱管理、分类浏览、瀑布流展示</li>
              <li>智能识别确认、闲置管理</li>
              <li>高德定位SDK与Open-Meteo天气API集成</li>
              <li>毛玻璃UI组件与现代化拍照界面</li>
            </ul>
            <div class="project-link-indicator">
              <span>查看源码</span><i class="fas fa-arrow-right"></i>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- CAMPUS -->
    <section id="campus" class="section section-dark">
      <div class="container reveal-parent">
        <div class="eyebrow reveal-up">05 — 校园经历</div>
        <h2 class="section-title" style="margin-bottom:3rem">成长<br/>足迹</h2>
        <div class="campus-timeline">
          <a href="/images/certificate.jpg" target="_blank" rel="noopener noreferrer" class="campus-item reveal-left" style="--delay:0">
            <div class="campus-dot"></div>
            <div class="campus-content">
              <span class="campus-date">省级项目 · 结题</span>
              <h3>大学生创新创业项目 —《穿戴管家》</h3>
              <p>以省级大学生创新创业项目结题，负责项目核心模块开发。</p>
            </div>
          </a>
          <div class="campus-item reveal-right" style="--delay:1">
            <div class="campus-dot"></div>
            <div class="campus-content">
              <span class="campus-date">团委组织部 · 干事</span>
              <h3>学生工作与团队管理</h3>
              <ul class="campus-list">
                <li>协助组织 3 次团建活动，提升团队沟通与协作</li>
                <li>筹备并执行 2 期新成员培训计划</li>
                <li>参与策划全校"青年领导力"发展项目</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SELF -->
    <section id="self" class="section section-light">
      <div class="container reveal-parent">
        <div class="eyebrow reveal-up">06 — 自我评价</div>
        <h2 class="section-title" style="margin-bottom:3rem">关于<br/>我自己</h2>
        <div class="self-grid">
          <div class="self-item reveal-up" style="--delay:0">
            <span class="self-num">01</span>
            <p>了解基础的软件开发流程与规范，具备良好的编程习惯和学习新技术的能力</p>
          </div>
          <div class="self-item reveal-up" style="--delay:1">
            <span class="self-num">02</span>
            <p>能够快速适应工作需求变化，拥有强烈的责任感</p>
          </div>
          <div class="self-item reveal-up" style="--delay:2">
            <span class="self-num">03</span>
            <p>在复杂多变的工作环境中能够保持冷静思考</p>
          </div>
          <div class="self-item reveal-up" style="--delay:3">
            <span class="self-num">04</span>
            <p>善于沟通交流，有效促进团队内部的合作氛围</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="site-footer">
      <span class="footer-logo">ZYP</span>
      <p>&copy; 2026 张宇鹏 — ZHANG YUPENG</p>
    </footer>

    <!-- MODAL -->
    <transition name="modal">
      <div v-if="showModal" class="modal-overlay" @click="closeModal" role="dialog" aria-modal="true">
        <div class="modal-box" @click.stop>
          <div class="modal-header">
            <h3>{{ selectedProject?.name }}</h3>
            <button @click="closeModal" class="modal-close" aria-label="关闭">&times;</button>
          </div>
          <p class="modal-prompt">选择代码仓库平台</p>
          <div class="modal-actions">
            <a v-if="selectedProject?.gitee" :href="selectedProject.gitee" target="_blank" rel="noopener noreferrer" class="link-btn" @click="closeModal">
              <i class="fas fa-code-branch"></i> Gitee
            </a>
            <a v-if="selectedProject?.github" :href="selectedProject.github" target="_blank" rel="noopener noreferrer" class="link-btn" @click="closeModal">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkMode: false,
      showModal: false,
      selectedProject: null,
      navScrolled: false
    }
  },
  mounted() {
    this.applyTheme()
    this.initSmoothScroll()
    this.initScrollReveal()
    this.initParallax()
    this.initNavScroll()
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      this.applyTheme()
    },
    applyTheme() {
      document.body.classList.toggle('dark-mode', this.darkMode)
      document.body.classList.toggle('light-mode', !this.darkMode)
    },
    openProjectModal(key) {
      const map = {
        yuewu: { name: '悦物在线商城系统', gitee: 'https://gitee.com/zyp556678/yuewu_parent', github: 'https://github.com/zyp556678/yuewu_parent' },
        laboratory: { name: '实验室资源管理系统', gitee: 'https://gitee.com/zyp556678/laboratory-master', github: 'https://github.com/zyp556678/laboratory-master' },
        takeout: { name: '鲲鹏外卖点餐平台', gitee: 'https://gitee.com/zyp556678/take_out_system', github: 'https://github.com/zyp556678/take_out_system' },
        wareManager: { name: '穿戴管家', gitee: 'https://gitee.com/zyp556678/wareManager', github: 'https://github.com/zyp556678/wareManager' }
      }
      this.selectedProject = map[key]
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.selectedProject = null
    },
    handleNavClick(e) {
      const link = e.target.closest('a[href^="#"]')
      if (link) {
        e.preventDefault()
        const el = document.getElementById(link.getAttribute('href').slice(1))
        if (el) {
          const offset = 72
          window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
        }
      }
    },
    initSmoothScroll() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]:not(.nav-links a):not(.nav-logo)')
        if (link) {
          e.preventDefault()
          const el = document.getElementById(link.getAttribute('href').slice(1))
          if (el) {
            const offset = 72
            window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' })
          }
        }
      })
    },
    initNavScroll() {
      let ticking = false
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            this.navScrolled = window.scrollY > 50
            ticking = false
          })
          ticking = true
        }
      }, { passive: true })
    },
    initScrollReveal() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => {
          el.style.opacity = '1'
          el.style.transform = 'none'
        })
        return
      }
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach(e => {
            if (e.isIntersecting) {
              e.target.classList.add('revealed')
              obs.unobserve(e.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      )
      this.$nextTick(() => {
        document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach(el => obs.observe(el))
      })
    },
    initParallax() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      const orb1 = document.querySelector('.hero-orb-1')
      const orb2 = document.querySelector('.hero-orb-2')
      const heroSection = document.getElementById('hero')
      let ticking = false
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            const scrollY = window.scrollY
            const vh = window.innerHeight
            if (scrollY < vh * 1.5) {
              const p = scrollY / vh
              if (orb1) orb1.style.transform = `translateY(${p * 120}px) rotate(${p * 15}deg)`
              if (orb2) orb2.style.transform = `translateY(${p * -60}px) scale(${1 + p * 0.15})`
              if (heroSection) heroSection.style.setProperty('--scroll-progress', p)
            }
            ticking = false
          })
          ticking = true
        }
      }, { passive: true })
    }
  }
}
</script>

<style>
/* ============================================================
   DESIGN SYSTEM — CINEMATIC EDITORIAL
   ============================================================ */
@import url('../node_modules/@fortawesome/fontawesome-free/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Outfit:wght@300;400;500;600;700&display=swap');

*,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}

:root {
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Outfit', system-ui, sans-serif;

  --white:#ffffff; --off:#fafaf9; --gray-50:#f5f5f4; --gray-100:#e7e5e4;
  --gray-200:#d6d3d1; --gray-300:#a8a29e; --gray-400:#78716c; --gray-500:#57534e;
  --gray-600:#44403c; --gray-700:#292524; --gray-800:#1c1917; --gray-900:#0c0a09;
  --black:#000000;
  --blue:#2563eb; --blue-light:#3b82f6;

  /* Dark mode defaults */
  --bg: var(--black); --bg-section: var(--gray-900);
  --text-primary: var(--white); --text-secondary: var(--gray-300);
  --text-muted: var(--gray-400);
  --surface: var(--gray-800);
  --border-glass: rgba(255,255,255,0.08);
  --glass-bg: rgba(255,255,255,0.03);
  --glass-blur: 24px;
  --c-border: var(--c-border);
  --c-border-hover: var(--c-border-hover);
  --c-white-4: var(--c-white-4);
  --c-white-5: var(--c-white-5);
  --c-white-2: var(--c-white-2);
  --c-blue-8: var(--c-blue-8);
  --c-blue-10: rgba(37,99,235,0.10);
  --c-blue-15: var(--c-blue-15);
  --c-blue-30: rgba(37,99,235,0.30);
  --c-black-75: var(--c-black-75);
  --c-grain-opacity: 0.03;
  --c-grain-blend: overlay;
  --c-number: rgba(255,255,255,0.03);

  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* ---- LIGHT MODE ---- */
.light-mode {
  --bg: #ffffff; --bg-section: #f8f7f6;
  --text-primary: #0c0a09; --text-secondary: #57534e;
  --text-muted: #78716c;
  --surface: #f0eeec;
  --border-glass: rgba(0,0,0,0.08);
  --glass-bg: rgba(0,0,0,0.015);
  --glass-blur: 16px;
  --c-border: rgba(0,0,0,0.07);
  --c-border-hover: rgba(0,0,0,0.12);
  --c-white-4: rgba(0,0,0,0.035);
  --c-white-5: rgba(0,0,0,0.04);
  --c-white-2: rgba(0,0,0,0.015);
  --c-blue-8: rgba(37,99,235,0.06);
  --c-blue-10: var(--c-blue-8);
  --c-blue-15: rgba(37,99,235,0.10);
  --c-blue-30: rgba(37,99,235,0.22);
  --c-black-75: rgba(0,0,0,0.40);
  --c-grain-opacity: 0.02;
  --c-grain-blend: multiply;
  --c-number: rgba(0,0,0,0.04);
}

body { font-family: var(--font-body); background: var(--bg); color: var(--text-primary); overflow-x: hidden }

/* ---- GRAIN ---- */
.grain {
  position: fixed; inset: 0; z-index: 9999; pointer-events: none;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  opacity: var(--c-grain-opacity); mix-blend-mode: var(--c-grain-blend);
}

/* ---- GLASS ---- */
.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(var(--glass-blur));
  -webkit-backdrop-filter: blur(var(--glass-blur));
  border: 1px solid var(--border-glass);
}

/* ---- NAV ---- */
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 clamp(1rem, 4vw, 3rem); height: 72px;
  transition: background .4s var(--ease-out), border-color .4s var(--ease-out), backdrop-filter .4s var(--ease-out);
}
.nav.scrolled {
  background: var(--c-nav-bg);
  backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-glass);
}
.nav-logo {
  font-family: var(--font-body); font-weight: 700; font-size: 1.1rem;
  letter-spacing: 0.2em; color: var(--text-primary); text-decoration: none;
  padding: 0.5rem 0; min-height: 44px; display: flex; align-items: center;
}
.nav-links { display: flex; gap: 0; list-style: none }
.nav-links a {
  padding: 0.5rem clamp(0.6rem, 1.5vw, 1.25rem);
  color: var(--text-muted); text-decoration: none; font-size: 0.8rem;
  font-weight: 500; letter-spacing: 0.04em; transition: color .3s;
  min-height: 44px; display: flex; align-items: center;
}
.nav-links a:hover { color: var(--text-primary) }
.nav-theme {
  background: none; border: none; color: var(--text-muted); cursor: pointer;
  font-size: 1.1rem; padding: 0.5rem; transition: color .3s, transform .2s;
  min-width: 44px; min-height: 44px; display: flex; align-items: center; justify-content: center;
}
.nav-theme:hover { color: var(--blue-light); transform: rotate(20deg) }

/* ---- HERO ---- */
.hero {
  min-height: 100vh; display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden; padding: 6rem 2rem;
}
.hero::before {
  content: ''; position: absolute; inset: 0;
  background: radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.06), transparent);
}
.hero-inner { text-align: center; position: relative; z-index: 2 }
.hero-pre {
  font-size: clamp(0.65rem, 1.2vw, 0.8rem); font-weight: 600;
  letter-spacing: 0.3em; color: var(--blue); margin-bottom: 2rem;
  animation: fadeUp 1s var(--ease-out) .3s both;
}
.hero-name {
  font-family: var(--font-display); font-weight: 400;
  font-size: clamp(3.5rem, 12vw, 10rem);
  line-height: 0.95; letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}
.hero-line { display: block; overflow: hidden }
.hero-word {
  display: inline-block;
  animation: letterReveal 1.2s var(--ease-out) calc(0.5s + var(--d) * 0.12s) both;
}
@keyframes letterReveal {
  from { opacity: 0; transform: translateY(100%) rotate(3deg); filter: blur(8px) }
  to { opacity: 1; transform: translateY(0) rotate(0); filter: blur(0) }
}
.hero-tagline {
  font-size: clamp(0.9rem, 1.8vw, 1.15rem); font-weight: 300;
  color: var(--text-secondary); letter-spacing: 0.12em;
  animation: fadeUp 1s var(--ease-out) 1.2s both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px) }
  to { opacity: 1; transform: translateY(0) }
}
.hero-scroll {
  position: absolute; bottom: -6rem; left: 50%; transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  animation: fadeUp 1s var(--ease-out) 1.8s both;
}
.hero-scroll span {
  font-size: 0.6rem; letter-spacing: 0.3em; color: var(--text-muted); font-weight: 600;
}
.hero-scroll-line {
  width: 1px; height: 48px; background: var(--blue);
  animation: scrollPulse 2s ease-in-out infinite;
}
@keyframes scrollPulse {
  0%,100% { opacity: 0.2; transform: scaleY(0.5) }
  50% { opacity: 1; transform: scaleY(1) }
}
.hero-orb {
  position: absolute; border-radius: 50%; pointer-events: none;
  will-change: transform; transition: transform .1s linear;
}
.hero-orb-1 {
  width: clamp(200px, 35vw, 500px); height: clamp(200px, 35vw, 500px);
  background: radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%);
  top: 10%; right: -5%; animation: orbFloat 20s ease-in-out infinite;
}
.hero-orb-2 {
  width: clamp(150px, 25vw, 350px); height: clamp(150px, 25vw, 350px);
  background: radial-gradient(circle, rgba(139,92,246,0.08), transparent 70%);
  bottom: 15%; left: -3%; animation: orbFloat 25s ease-in-out infinite reverse;
}
@keyframes orbFloat {
  0%,100% { transform: translate(0,0) }
  33% { transform: translate(30px,-20px) }
  66% { transform: translate(-20px,15px) }
}

/* ---- SECTIONS ---- */
.section { padding: clamp(4rem, 12vw, 10rem) 0; position: relative }
.section-dark { background: var(--bg) }
.section-light { background: var(--bg-section) }
.container { max-width: 1100px; margin: 0 auto; padding: 0 clamp(1.25rem, 5vw, 2.5rem) }
.eyebrow {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.3em;
  color: var(--blue); text-transform: uppercase; margin-bottom: 2rem;
}
.section-title {
  font-family: var(--font-display); font-weight: 400;
  font-size: clamp(2.5rem, 7vw, 5rem); line-height: 1.05;
  letter-spacing: -0.02em;
}

/* ---- SCROLL REVEAL ---- */
.reveal-up, .reveal-left, .reveal-right {
  opacity: 0; transition: opacity .8s var(--ease-out), transform .8s var(--ease-out);
  transition-delay: calc(var(--delay, 0) * 0.12s);
}
.reveal-up { transform: translateY(40px) }
.reveal-left { transform: translateX(-60px) }
.reveal-right { transform: translateX(60px) }
.reveal-up.revealed, .reveal-left.revealed, .reveal-right.revealed {
  opacity: 1; transform: translate(0, 0);
}

/* ---- ABOUT ---- */
.about-layout { max-width: 640px }
.about-heading {
  font-family: var(--font-display); font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 400; line-height: 1.15; margin-bottom: 2rem; letter-spacing: -0.02em;
}
.about-info { display: flex; flex-direction: column; gap: 0; margin-bottom: 2rem }
.about-row {
  display: flex; justify-content: space-between; align-items: baseline;
  padding: 0.85rem 0; border-bottom: 1px solid var(--c-border);
}
.about-row:first-child { border-top: 1px solid var(--c-border) }
.about-label {
  font-size: 0.75rem; font-weight: 600; letter-spacing: 0.15em;
  color: var(--text-muted); text-transform: uppercase;
}
.about-val { font-size: 0.95rem; color: var(--text-secondary); font-weight: 400 }
.about-links { display: flex; gap: 1rem; flex-wrap: wrap }
.link-btn {
  display: inline-flex; align-items: center; gap: 0.5rem;
  padding: 0.7rem 1.5rem; border: 1px solid var(--c-border-hover);
  border-radius: 100px; color: var(--text-secondary); text-decoration: none;
  font-size: 0.8rem; font-weight: 500; letter-spacing: 0.04em;
  transition: all .3s var(--ease-out); min-height: 44px; cursor: pointer;
  background: var(--glass-bg); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
}
.link-btn:hover {
  border-color: var(--blue); color: var(--blue-light);
  background: var(--c-blue-8); transform: translateY(-2px);
}
.link-btn:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px }

/* ---- EDUCATION ---- */
.edu-layout {
  display: grid; grid-template-columns: 1fr;
  gap: clamp(2rem, 5vw, 4rem); align-items: start;
}
@media (min-width: 768px) {
  .edu-layout { grid-template-columns: 1fr 1fr }
}
.edu-meta { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.5rem }
.edu-badge {
  padding: 0.4rem 1rem; border-radius: 100px;
  border: 1px solid var(--border-glass); font-size: 0.75rem;
  font-weight: 500; color: var(--text-secondary); letter-spacing: 0.04em;
  background: var(--glass-bg); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
}
.edu-label {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.2em;
  color: var(--text-muted); text-transform: uppercase; margin-bottom: 1.25rem;
}
.edu-courses { display: flex; flex-wrap: wrap; gap: 0.5rem }
.edu-course {
  padding: 0.5rem 1.1rem; border-radius: 2px;
  font-size: 0.85rem; font-weight: 400; color: var(--text-secondary);
  background: var(--surface); border: 1px solid var(--c-white-4);
  transition: all .3s var(--ease-out);
}
.edu-course:hover {
  background: var(--c-blue-10); border-color: var(--c-blue-30);
  color: var(--blue-light); transform: translateY(-1px);
}

/* ---- SKILLS ---- */
.skills-grid {
  display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 1px; background: var(--border-glass); border-radius: 4px; overflow: hidden;
}
@keyframes skillIconPulse {
  0%, 100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--ic) 20%, transparent); }
  50% { box-shadow: 0 0 0 10px color-mix(in srgb, var(--ic) 0%, transparent); }
}
@keyframes tagReveal {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.skill-card {
  padding: 1.75rem; display: flex; flex-direction: column; gap: 0.75rem;
  background: var(--bg); border: none !important; border-radius: 0;
  transition: background .4s var(--ease-out), transform .4s var(--ease-out), box-shadow .4s var(--ease-out);
  position: relative; overflow: hidden;
}
.skill-card::after {
  content: ''; position: absolute; inset: 0; opacity: 0;
  background: linear-gradient(135deg, color-mix(in srgb, var(--blue) 25%, transparent), transparent 65%);
  transition: opacity .5s var(--ease-out); pointer-events: none; z-index: 0;
}
.skill-card:hover::after { opacity: 0.1 }
.skill-card:hover {
  background: var(--surface);
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 16px 48px rgba(37, 99, 235, 0.07);
  z-index: 1;
}
.skill-card > * { position: relative; z-index: 1; }
.skill-card.revealed .skill-icon {
  animation: skillIconPulse 3s ease-in-out infinite;
  animation-delay: calc(var(--delay, 0) * 0.12s + 0.6s);
}
.skill-icon {
  width: 40px; height: 40px; border-radius: 10px;
  display: flex; align-items: center; justify-content: center;
  background: color-mix(in srgb, var(--ic) 12%, transparent);
  color: var(--ic); font-size: 1rem;
  transition: transform .35s var(--ease-out);
}
.skill-card:hover .skill-icon { transform: scale(1.12); }
.skill-card h3 {
  font-size: 0.85rem; font-weight: 600; letter-spacing: 0.04em;
  transition: transform .3s var(--ease-out);
}
.skill-card:hover h3 { transform: translateX(2px); }
.skill-card.revealed .skill-tag {
  animation: tagReveal .5s var(--ease-out) both;
  animation-delay: calc(var(--delay, 0) * 0.12s + 0.4s + var(--t, 0) * 0.06s);
}
a.skill-tag:nth-of-type(1) { --t: 0 }
a.skill-tag:nth-of-type(2) { --t: 1 }
a.skill-tag:nth-of-type(3) { --t: 2 }
a.skill-tag:nth-of-type(4) { --t: 3 }
a.skill-tag:nth-of-type(5) { --t: 4 }
span.skill-tag:nth-of-type(1) { --t: 0 }
span.skill-tag:nth-of-type(2) { --t: 1 }
span.skill-tag:nth-of-type(3) { --t: 2 }
span.skill-tag:nth-of-type(4) { --t: 3 }
span.skill-tag:nth-of-type(5) { --t: 4 }
.skill-tag {
  display: inline-block; padding: 0.35rem 0.85rem; border-radius: 100px;
  font-size: 0.72rem; font-weight: 500; color: var(--text-secondary);
  background: var(--c-white-4); border: 1px solid var(--c-border);
  text-decoration: none; transition: all .3s var(--ease-out); margin: 0.15rem;
  min-height: 32px; display: inline-flex; align-items: center;
  opacity: 0;
}
a.skill-tag:hover {
  background: var(--c-blue-10); border-color: var(--c-blue-30);
  color: var(--blue-light); transform: translateY(-2px);
}
a.skill-tag:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px }

/* ---- PROJECTS ---- */
.project-card {
  position: relative; padding: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 1.5rem; border-radius: 4px; cursor: pointer;
  background: var(--glass-bg); border: 1px solid var(--border-glass);
  backdrop-filter: blur(var(--glass-blur)); -webkit-backdrop-filter: blur(var(--glass-blur));
  transition: all .5s var(--ease-out); overflow: hidden;
}
.project-card:hover {
  background: var(--c-white-5); border-color: var(--c-border-hover);
  transform: translateY(-4px);
}
.project-card:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px }
.project-number {
  position: absolute; top: clamp(1rem, 3vw, 2rem); right: clamp(1.5rem, 4vw, 3rem);
  font-family: var(--font-display); font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 400; color: var(--c-number); line-height: 1;
  pointer-events: none; user-select: none;
}
.project-body { position: relative; z-index: 1 }
.project-head { display: flex; align-items: baseline; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem }
.project-head h3 { font-size: clamp(1.3rem, 3vw, 1.75rem); font-weight: 600 }
.project-role {
  font-size: 0.65rem; font-weight: 600; letter-spacing: 0.12em;
  color: var(--blue-light); padding: 0.25rem 0.75rem; border-radius: 100px;
  border: 1px solid var(--c-blue-30); background: var(--c-blue-8);
  text-transform: uppercase;
}
.project-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1.25rem }
.project-tags span {
  font-size: 0.68rem; font-weight: 500; letter-spacing: 0.04em;
  padding: 0.25rem 0.65rem; border-radius: 2px;
  background: var(--c-white-4); color: var(--text-muted);
  border: 1px solid var(--c-white-5);
}
.project-desc {
  font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);
  margin-bottom: 1.5rem; max-width: 640px;
}
.project-stats {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem; padding: 1.25rem 0; border-top: 1px solid var(--c-border);
  border-bottom: 1px solid var(--c-border); margin-bottom: 1.25rem;
}
.stat-value {
  font-family: var(--font-display); font-size: 1.5rem; font-weight: 400;
  color: var(--blue-light); display: block; margin-bottom: 0.25rem;
}
.stat-label { font-size: 0.7rem; color: var(--text-muted); letter-spacing: 0.08em; font-weight: 500 }
.project-bullets { padding-left: 1.25rem; margin-bottom: 1.5rem }
.project-bullets li {
  font-size: 0.88rem; line-height: 1.6; color: var(--text-muted);
  margin-bottom: 0.5rem;
}
.project-bullets li::marker { color: var(--blue); font-size: 0.6em }
.project-link-indicator {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 0.8rem; font-weight: 500; color: var(--blue-light);
  opacity: 0; transform: translateX(-8px);
  transition: all .4s var(--ease-out);
}
.project-card:hover .project-link-indicator { opacity: 1; transform: translateX(0) }
.project-link-indicator i { transition: transform .3s var(--ease-out) }
.project-card:hover .project-link-indicator i { transform: translateX(4px) }

/* ---- CAMPUS ---- */
.campus-timeline { position: relative; padding-left: 2rem }
.campus-timeline::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0;
  width: 1px; background: var(--border-glass);
}
.campus-item {
  position: relative; padding: 1.5rem 0 1.5rem 2rem; display: block;
  text-decoration: none; color: inherit;
  border-bottom: 1px solid var(--c-white-4);
  transition: background .3s var(--ease-out);
  border-radius: 2px; margin-left: -2rem; padding-left: 4rem;
}
.campus-item:last-child { border-bottom: none }
.campus-item:hover { background: var(--c-white-2) }
.campus-item:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px }
.campus-dot {
  position: absolute; left: 0; top: 1.75rem;
  width: 8px; height: 8px; border-radius: 50%;
  background: var(--blue); transform: translateX(-3.5px);
}
.campus-date {
  font-size: 0.7rem; font-weight: 600; letter-spacing: 0.15em;
  color: var(--blue); text-transform: uppercase; margin-bottom: 0.5rem; display: block;
}
.campus-content h3 { font-size: 1.1rem; font-weight: 600; margin-bottom: 0.5rem }
.campus-content p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6 }
.campus-list {
  padding-left: 1.25rem; list-style: none; margin-top: 0.5rem;
}
.campus-list li {
  font-size: 0.88rem; color: var(--text-muted); line-height: 1.7; margin-bottom: 0.3rem;
}
.campus-list li::marker { color: var(--blue); content: '— '; font-size: 0.8em }

/* ---- SELF ---- */
.self-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1px; background: var(--border-glass); border-radius: 4px; overflow: hidden;
}
.self-item {
  padding: clamp(1.5rem, 3vw, 2.5rem); background: var(--bg);
  transition: background .4s var(--ease-out);
}
.self-item:hover { background: var(--surface) }
.self-num {
  font-family: var(--font-display); font-size: 2.5rem; font-weight: 400;
  color: var(--c-blue-15); display: block; margin-bottom: 1rem;
  line-height: 1;
}
.self-item p {
  font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary);
}

/* ---- FOOTER ---- */
.site-footer {
  padding: 3rem 2rem; text-align: center;
  border-top: 1px solid var(--c-border);
}
.footer-logo {
  font-family: var(--font-body); font-weight: 700; font-size: 0.8rem;
  letter-spacing: 0.3em; color: var(--text-muted); display: block; margin-bottom: 0.5rem;
}
.site-footer p { font-size: 0.7rem; color: var(--text-muted); letter-spacing: 0.1em }

/* ---- MODAL ---- */
.modal-overlay {
  position: fixed; inset: 0; background: var(--c-black-75);
  backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
  display: flex; align-items: center; justify-content: center;
  z-index: 2000; padding: 1rem;
}
.modal-enter-active { transition: opacity .3s var(--ease-out) }
.modal-leave-active { transition: opacity .2s ease-in }
.modal-enter-from, .modal-leave-to { opacity: 0 }
.modal-box {
  background: var(--surface); border: 1px solid var(--border-glass);
  border-radius: 16px; width: 100%; max-width: 400px; overflow: hidden;
  animation: modalPop .4s var(--ease-spring);
}
@keyframes modalPop {
  from { transform: scale(0.92) translateY(16px); opacity: 0 }
  to { transform: scale(1) translateY(0); opacity: 1 }
}
.modal-header {
  display: flex; justify-content: space-between; align-items: center;
  padding: 1.5rem; border-bottom: 1px solid var(--c-border);
}
.modal-header h3 { font-size: 1rem; font-weight: 600 }
.modal-close {
  background: none; border: none; color: var(--text-muted); cursor: pointer;
  font-size: 1.5rem; width: 44px; height: 44px; display: flex;
  align-items: center; justify-content: center; border-radius: 50%;
  transition: all .3s; line-height: 1;
}
.modal-close:hover { background: var(--c-white-5); color: var(--text-primary) }
.modal-close:focus-visible { outline: 2px solid var(--blue); outline-offset: 2px }
.modal-body-inner { padding: 1.5rem }
.modal-prompt {
  text-align: center; font-size: 0.85rem; color: var(--text-muted);
  margin-bottom: 1.25rem; font-weight: 400;
}
.modal-actions { display: flex; gap: 0.75rem; justify-content: center; padding-bottom: 0.5rem }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 767px) {
  .nav-links { display: none }
  .hero-name { font-size: clamp(3rem, 14vw, 5.5rem) }
  .edu-layout { grid-template-columns: 1fr }
  .skills-grid { grid-template-columns: 1fr }
  .project-number { font-size: 3rem; top: 1rem; right: 1.5rem }
  .project-stats { grid-template-columns: repeat(3, 1fr) }
}
@media (max-width: 480px) {
  .hero { padding: 5rem 1.25rem }
  .hero-scroll { bottom: -4rem }
  .section { padding: clamp(3rem, 10vw, 6rem) 0 }
  .project-stats { grid-template-columns: 1fr; gap: 0.75rem }
  .campus-timeline { padding-left: 1.5rem }
  .campus-item { padding-left: 3rem; margin-left: -1.5rem }
}
@media (prefers-reduced-motion: reduce) {
  .hero-word { animation: none; opacity: 1 }
  .hero-pre, .hero-tagline, .hero-scroll { animation: none; opacity: 1 }
  .hero-orb { animation: none }
  .grain { display: none }
  .reveal-up, .reveal-left, .reveal-right {
    opacity: 1; transform: none; transition: none;
  }
  .skill-tag { opacity: 1; animation: none }
  .skill-card.revealed .skill-icon { animation: none }
  .skill-card.revealed .skill-tag { animation: none }
}

/* ---- LIGHT MODE OVERRIDES ---- */
.light-mode .nav.scrolled {
  background: rgba(255,255,255,0.8);
  border-bottom-color: rgba(0,0,0,0.06);
}
.light-mode .hero::before {
  background: radial-gradient(ellipse 70% 50% at 50% 50%, rgba(37,99,235,0.04), transparent);
}
.light-mode .hero-orb-1 {
  background: radial-gradient(circle, rgba(37,99,235,0.06), transparent 70%);
}
.light-mode .hero-orb-2 {
  background: radial-gradient(circle, rgba(139,92,246,0.04), transparent 70%);
}
.light-mode .about-photo img {
  filter: none;
}
.light-mode .campus-dot {
  box-shadow: 0 0 0 3px var(--bg);
}
</style>
