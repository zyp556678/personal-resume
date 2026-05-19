<template>
  <div id="app">

    <!-- BACKGROUND EFFECTS -->
    <div class="bg-layer" aria-hidden="true">
      <div class="bg-shape bg-shape-1"></div>
      <div class="bg-shape bg-shape-2"></div>
      <div class="bg-shape bg-shape-3"></div>
      <div class="bg-shape bg-shape-4"></div>
      <div class="bg-cursor-glow"></div>
      <div class="bg-dot-grid"></div>
    </div>

    <!-- NAV -->
    <nav class="navbar">
      <div class="nav-inner">
        <a href="#about" class="nav-logo">ZYP</a>
        <ul class="nav-links">
          <li><a href="#about">关于</a></li>
          <li><a href="#education">教育</a></li>
          <li><a href="#skills">技能</a></li>
          <li><a href="#projects">项目</a></li>
          <li><a href="#experience">经历</a></li>
          <li><a href="#evaluation">评价</a></li>
        </ul>
        <button
          @click="toggleTheme"
          class="theme-btn"
          :aria-label="darkMode ? '切换到浅色模式' : '切换到深色模式'"
        >
          <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          {{ darkMode ? 'LIGHT' : 'DARK' }}
        </button>
      </div>
    </nav>

    <!-- ABOUT -->
    <section id="about" class="section" style="padding-top: calc(56px + 64px)">
      <div class="container">
        <div class="section-head">
          <span class="section-label">// 01</span>
          <h2 class="section-title">About Me</h2>
        </div>
        <div class="bento">
          <div class="bento-photo">
            <img src="/images/personal.jpg" alt="张宇鹏证件照" loading="lazy" />
          </div>
          <div class="bento-info">
            <h1 class="bento-name">张宇鹏</h1>
            <div class="bento-contacts">
              <div class="contact-chip"><i class="fas fa-briefcase"></i> Java后端开发工程师</div>
              <div class="contact-chip"><i class="fas fa-phone"></i> 18745397398</div>
              <div class="contact-chip"><i class="fas fa-envelope"></i> taitanyunluo2@126.com</div>
              <div class="contact-chip"><i class="fas fa-user"></i> 男</div>
              <div class="contact-chip"><i class="fas fa-birthday-cake"></i> 2005年12月</div>
              <div class="contact-chip"><i class="fas fa-flag"></i> 共青团员</div>
            </div>
            <div class="bento-social">
              <a href="https://www.hellozypzyp.online/" target="_blank" class="social-pill" rel="noopener noreferrer">
                <i class="fas fa-globe"></i> 个人信息网站
              </a>
              <a href="https://github.com/zyp556678" target="_blank" class="social-pill" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
              </a>
              <a href="https://gitee.com/zyp556678" target="_blank" class="social-pill" rel="noopener noreferrer">
                <i class="fas fa-code-branch"></i> Gitee
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-label">// 02</span>
          <h2 class="section-title">Education</h2>
        </div>
        <div class="timeline">
          <a href="https://www.usth.edu.cn/" target="_blank" class="tl-link" rel="noopener noreferrer">
            <div class="tl-item">
              <div class="tl-marker"><div class="tl-dot"></div></div>
              <div class="tl-body">
                <h3>黑龙江科技大学 — 软件工程</h3>
                <span class="tl-date">2023.09 — 2027.06 · 本科</span>
                <p class="tl-desc">主修课程：Java、数据结构与算法、计算机系统基础、数据库原理及应用、计算机网络、操作系统、算法设计与分析、软件工程</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-label">// 03</span>
          <h2 class="section-title">Skills</h2>
        </div>
        <div class="skills-grid">
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: var(--accent)"><i class="fas fa-code"></i></div>
              <h3>编程语言</h3>
            </div>
            <div class="skill-pills">
              <a href="https://www.oracle.com/java/" target="_blank" class="skill-pill" rel="noopener noreferrer">Java</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 150)"><i class="fas fa-layer-group"></i></div>
              <h3>后端框架</h3>
            </div>
            <div class="skill-pills">
              <a href="https://spring.io/projects/spring-boot" target="_blank" class="skill-pill" rel="noopener noreferrer">Spring Boot</a>
              <a href="https://spring.io/projects/spring-cloud" target="_blank" class="skill-pill" rel="noopener noreferrer">Spring Cloud</a>
              <a href="https://baomidou.com/" target="_blank" class="skill-pill" rel="noopener noreferrer">MyBatis-Plus</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 30)"><i class="fas fa-database"></i></div>
              <h3>数据库</h3>
            </div>
            <div class="skill-pills">
              <a href="https://www.mysql.com/" target="_blank" class="skill-pill" rel="noopener noreferrer">MySQL</a>
              <a href="https://redis.io/" target="_blank" class="skill-pill" rel="noopener noreferrer">Redis</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 200)"><i class="fas fa-envelope-open-text"></i></div>
              <h3>消息队列</h3>
            </div>
            <div class="skill-pills">
              <a href="https://rabbitmq.com/" target="_blank" class="skill-pill" rel="noopener noreferrer">RabbitMQ</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 300)"><i class="fas fa-network-wired"></i></div>
              <h3>分布式</h3>
            </div>
            <div class="skill-pills">
              <a href="https://nacos.io/" target="_blank" class="skill-pill" rel="noopener noreferrer">Nacos</a>
              <a href="https://github.com/OpenFeign/feign" target="_blank" class="skill-pill" rel="noopener noreferrer">Feign</a>
              <a href="https://redisson.org/" target="_blank" class="skill-pill" rel="noopener noreferrer">Redisson</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 120)"><i class="fas fa-search"></i></div>
              <h3>搜索引擎</h3>
            </div>
            <div class="skill-pills">
              <a href="https://www.elastic.co/elasticsearch/" target="_blank" class="skill-pill" rel="noopener noreferrer">Elasticsearch</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: var(--accent)"><i class="fas fa-tools"></i></div>
              <h3>开发运维</h3>
            </div>
            <div class="skill-pills">
              <a href="https://maven.apache.org/" target="_blank" class="skill-pill" rel="noopener noreferrer">Maven</a>
              <a href="https://git-scm.com/" target="_blank" class="skill-pill" rel="noopener noreferrer">Git</a>
              <a href="https://www.docker.com/" target="_blank" class="skill-pill" rel="noopener noreferrer">Docker</a>
              <a href="https://www.linux.org/" target="_blank" class="skill-pill" rel="noopener noreferrer">Linux</a>
              <a href="https://www.redhat.com/en/topics/devops/what-is-cicd" target="_blank" class="skill-pill" rel="noopener noreferrer">CI/CD</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 30)"><i class="fas fa-shield-alt"></i></div>
              <h3>安全认证</h3>
            </div>
            <div class="skill-pills">
              <a href="https://jwt.io/" target="_blank" class="skill-pill" rel="noopener noreferrer">JWT</a>
              <a href="https://oauth.net/2/" target="_blank" class="skill-pill" rel="noopener noreferrer">OAuth2.0</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 200)"><i class="fas fa-file-export"></i></div>
              <h3>数据处理</h3>
            </div>
            <div class="skill-pills">
              <a href="https://easyexcel.opensource.alibaba.com/" target="_blank" class="skill-pill" rel="noopener noreferrer">EasyExcel</a>
              <a href="https://min.io/" target="_blank" class="skill-pill" rel="noopener noreferrer">Minio</a>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 150)"><i class="fas fa-brain"></i></div>
              <h3>基础知识</h3>
            </div>
            <div class="skill-pills">
              <span class="skill-pill">数据结构与算法</span>
              <span class="skill-pill">计算机网络</span>
              <span class="skill-pill">操作系统</span>
              <span class="skill-pill">系统设计</span>
            </div>
          </div>
          <div class="skill-cat">
            <div class="skill-cat-head">
              <div class="skill-cat-icon" style="background: oklch(0.78 0.16 300)"><i class="fas fa-puzzle-piece"></i></div>
              <h3>其他</h3>
            </div>
            <div class="skill-pills">
              <span class="skill-pill">技术文档编写</span>
              <span class="skill-pill">云原生</span>
              <span class="skill-pill">微服务</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-label">// 04</span>
          <h2 class="section-title">Projects</h2>
        </div>
        <div class="projects-grid">

          <div class="proj-card" @click="openProjectModal('takeout')" tabindex="0" role="button" @keydown.enter="openProjectModal('takeout')">
            <div class="proj-head">
              <h3>鲲鹏外卖点餐平台</h3>
              <span class="proj-role">后端开发</span>
            </div>
            <div class="proj-techs">
              <span class="proj-tag">SpringBoot</span>
              <span class="proj-tag">MyBatis-Plus</span>
              <span class="proj-tag">MySQL</span>
              <span class="proj-tag">Redis</span>
              <span class="proj-tag">Vue.js</span>
              <span class="proj-tag">Element-UI</span>
              <span class="proj-tag">Vant</span>
            </div>
            <div class="proj-section">
              <h4>概述</h4>
              <p>功能完整的单体式架构外卖点餐系统，包含后台管理系统（面向商家管理员）和移动端H5（面向消费者），提供从菜品管理、用户下单到订单履约的全流程解决方案。</p>
            </div>
            <div class="proj-section">
              <h4>职责</h4>
              <ul>
                <li>负责后端全部模块及接口的设计与开发</li>
                <li>实现基于Filter的统一登录拦截与权限校验（LoginCheckFilter）</li>
                <li>基于MyBatis-Plus的通用CRUD与字段自动填充（MyMetaObjectHandler）</li>
                <li>基于Redis的短信验证码存储与套餐数据缓存</li>
                <li>设计统一响应结果封装（R.java）与ThreadLocalUtil存储当前登录用户ID</li>
              </ul>
            </div>
          </div>

          <div class="proj-card" @click="openProjectModal('yuewu')" tabindex="0" role="button" @keydown.enter="openProjectModal('yuewu')">
            <div class="proj-head">
              <h3>悦物在线商城系统</h3>
              <span class="proj-role">后端开发</span>
            </div>
            <div class="proj-techs">
              <span class="proj-tag">SpringCloud</span>
              <span class="proj-tag">Nacos</span>
              <span class="proj-tag">MySQL 8.0</span>
              <span class="proj-tag">Redis</span>
              <span class="proj-tag">RabbitMQ</span>
              <span class="proj-tag">Elasticsearch</span>
              <span class="proj-tag">JWT</span>
            </div>
            <div class="proj-section">
              <h4>概述</h4>
              <p>基于Spring Cloud (Nacos)微服务架构的大型分布式电商系统，涵盖商品管理、购物车、订单处理、支付、搜索、全文检索等核心电商功能模块，针对高并发场景进行了性能优化。</p>
            </div>
            <div class="proj-section">
              <h4>职责</h4>
              <ul>
                <li>负责商品服务、购物车服务、搜索服务、订单服务等核心微服务模块的设计与开发</li>
                <li>使用自定义注解@GmallCache实现缓存切面，提升查询性能</li>
                <li>采用@Async异步写入和Redis缓存策略优化高并发下的购物车操作</li>
                <li>基于Elasticsearch实现商品全文检索和多维度搜索</li>
                <li>利用RabbitMQ延迟队列实现超时未支付订单自动取消</li>
              </ul>
            </div>
          </div>

          <div class="proj-card" @click="openProjectModal('wearwise')" tabindex="0" role="button" @keydown.enter="openProjectModal('wearwise')">
            <div class="proj-head">
              <h3>穿戴管家 (WearWise)</h3>
              <span class="proj-role">AI开发</span>
            </div>
            <div class="proj-techs">
              <span class="proj-tag">Flutter</span>
              <span class="proj-tag">Dart</span>
              <span class="proj-tag">Provider</span>
              <span class="proj-tag">SQLite</span>
              <span class="proj-tag">Open-Meteo API</span>
              <span class="proj-tag">高德定位SDK</span>
              <span class="proj-tag">OpenCode</span>
            </div>
            <div class="proj-section">
              <h4>概述</h4>
              <p>跨平台衣橱管理应用，帮助用户智能管理衣物、搭配穿搭、记录日常OOTD。支持Android/iOS/Web/Desktop多端运行，集成天气服务、相机拍照、GPS定位等功能。</p>
            </div>
            <div class="proj-section">
              <h4>职责</h4>
              <ul>
                <li>采用OpenCode AI编程工具开发</li>
                <li>使用Provider实现全局状态管理，sqflite实现本地数据持久化（数据库版本v7）</li>
                <li>集成Open-Meteo天气API实现7天预报，设计三级Geocoding策略解决国内城市编码兼容问题</li>
                <li>封装高德定位SDK实现GPS定位，实现相机模块双指缩放、点击对焦、闪光灯切换</li>
                <li>通过Bento Grid布局优化首页信息展示，设计毛玻璃UI组件</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-label">// 05</span>
          <h2 class="section-title">Campus</h2>
        </div>
        <div class="timeline">
          <a href="/images/certificate.jpg" target="_blank" class="tl-link" rel="noopener noreferrer">
            <div class="tl-item">
              <div class="tl-marker"><div class="tl-dot"></div></div>
              <div class="tl-body">
                <h3>大学生创新创业项目 —《穿戴管家》</h3>
                <span class="tl-date">项目成员</span>
                <p class="tl-desc">以省级大学生创新创业项目结题。</p>
              </div>
            </div>
          </a>
          <div class="tl-item">
            <div class="tl-marker"><div class="tl-dot"></div></div>
            <div class="tl-body">
              <h3>团委组织部干事</h3>
              <div class="tl-desc">
                <ul>
                  <li><strong>团队建设：</strong>协助组织3次团建活动，提升成员沟通与协作能力</li>
                  <li><strong>培训与发展：</strong>筹备并执行2期新成员培训计划，内容涵盖团队合作与项目管理</li>
                  <li><strong>项目支持：</strong>参与策划并实施全校"青年领导力"发展项目</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVALUATION -->
    <section id="evaluation" class="section">
      <div class="container">
        <div class="section-head">
          <span class="section-label">// 06</span>
          <h2 class="section-title">Self</h2>
        </div>
        <div class="eval-box">
          <ul>
            <li>有良好的编程习惯和学习新技术的能力，能够快速适应工作需求变化</li>
            <li>有责任感，在复杂多变的工作环境中能够保持冷静思考</li>
            <li>善于沟通交流，有效促进团队内部的合作氛围</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="footer">
      <p>&copy; 2026 ZHANG YUPENG — ALL RIGHTS RESERVED</p>
    </footer>

    <!-- MODAL -->
    <div v-if="showModal" class="modal-overlay" @click="closeModal" role="dialog" aria-modal="true">
      <div class="modal-box" @click.stop>
        <div class="modal-top">
          <h3>{{ selectedProject?.name }}</h3>
          <button @click="closeModal" class="modal-x" aria-label="关闭">&times;</button>
        </div>
        <div class="modal-body">
          <p class="modal-prompt">选择代码仓库平台</p>
          <div class="modal-actions">
            <a v-if="selectedProject?.gitee" :href="selectedProject.gitee" target="_blank" class="social-pill" rel="noopener noreferrer" @click="closeModal">
              <i class="fas fa-code-branch"></i> Gitee
            </a>
            <a v-if="selectedProject?.github" :href="selectedProject.github" target="_blank" class="social-pill" rel="noopener noreferrer" @click="closeModal">
              <i class="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkMode: false,
      showModal: false,
      selectedProject: null
    }
  },
  mounted() {
    this.applyTheme();
    this.initSmoothScroll();
    this.initScrollReveal();
    this.initBgInteraction();
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.applyTheme();
    },
    applyTheme() {
      document.body.classList.toggle('dark-mode', this.darkMode);
      document.body.classList.toggle('light-mode', !this.darkMode);
    },
    openProjectModal(key) {
      const map = {
        takeout: { name: '鲲鹏外卖点餐平台', gitee: 'https://gitee.com/zyp556678/take_out_system', github: 'https://github.com/zyp556678/take_out_system' },
        yuewu: { name: '悦物在线商城系统', gitee: 'https://gitee.com/zyp556678/yuewu_parent', github: 'https://github.com/zyp556678/yuewu_parent' },
        wearwise: { name: '穿戴管家 (WearWise)', gitee: 'https://gitee.com/zyp556678/wareManager', github: 'https://github.com/zyp556678/wareManager' }
      };
      this.selectedProject = map[key];
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedProject = null;
    },
    initSmoothScroll() {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
          e.preventDefault();
          const el = document.getElementById(link.getAttribute('href').slice(1));
          if (el) {
            const offset = (document.querySelector('.navbar')?.offsetHeight || 56) + 8;
            window.scrollTo({ top: el.offsetTop - offset, behavior: 'smooth' });
          }
        }
      });
    },
    initScrollReveal() {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); } }),
        { threshold: 0.08 }
      );
      this.$nextTick(() => {
        document.querySelectorAll('.section').forEach(el => obs.observe(el));
      });
    },
    initBgInteraction() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      const root = document.documentElement;
      let raf = null;
      let mx = 0.5, my = 0.5;
      let tx = 0.5, ty = 0.5;

      document.addEventListener('mousemove', (e) => {
        tx = e.clientX / window.innerWidth;
        ty = e.clientY / window.innerHeight;
        if (!raf) tick();
      });

      function tick() {
        mx += (tx - mx) * 0.06;
        my += (ty - my) * 0.06;
        root.style.setProperty('--mx', mx.toFixed(4));
        root.style.setProperty('--my', my.toFixed(4));
        raf = requestAnimationFrame(tick);
      }
    }
  }
}
</script>

<style>
/* 样式见 style.css */
</style>
