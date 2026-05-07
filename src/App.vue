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
              <div class="contact-chip"><i class="fas fa-phone"></i> 18745397398</div>
              <div class="contact-chip"><i class="fas fa-envelope"></i> taitanyunluo2@126.com</div>
              <div class="contact-chip"><i class="fas fa-user"></i> 男</div>
              <div class="contact-chip"><i class="fas fa-map-marker-alt"></i> 黑龙江省牡丹江市</div>
              <div class="contact-chip"><i class="fas fa-birthday-cake"></i> 2005年12月</div>
              <div class="contact-chip"><i class="fas fa-flag"></i> 汉族</div>
            </div>
            <div class="bento-social">
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

          <div class="proj-card" @click="openProjectModal('yuewu')" tabindex="0" role="button" @keydown.enter="openProjectModal('yuewu')">
            <div class="proj-head">
              <h3>悦物在线商城系统</h3>
              <span class="proj-role">后端开发</span>
            </div>
            <div class="proj-techs">
              <span class="proj-tag">SpringCloud</span>
              <span class="proj-tag">Redis</span>
              <span class="proj-tag">RabbitMQ</span>
              <span class="proj-tag">Elasticsearch</span>
              <span class="proj-tag">Nacos</span>
            </div>
            <div class="proj-section">
              <h4>概述</h4>
              <p>基于SpringCloud微服务架构的分布式电商平台，涵盖商品、购物车、订单、支付、搜索等核心模块，旨在解决高并发场景下的性能问题。</p>
            </div>
            <div class="proj-section">
              <h4>职责</h4>
              <ul>
                <li>负责购物车服务，采用Redis缓存购物车数据，异步处理优化数据库写入</li>
                <li>开发订单系统核心流程，集成RabbitMQ延迟队列实现订单超时自动取消</li>
                <li>构建基于Elasticsearch的商品索引，实现多维度复杂检索与排序</li>
                <li>参与网关鉴权与路由配置，使用Nacos进行服务发现与配置管理</li>
              </ul>
            </div>
            <div class="proj-section">
              <h4>成果</h4>
              <ul>
                <li>通过缓存与消息队列技术，系统吞吐量提升30%</li>
                <li>实现了完整的电商核心业务闭环，保障系统稳定与高效</li>
              </ul>
            </div>
          </div>

          <div class="proj-card" @click="openProjectModal('laboratory')" tabindex="0" role="button" @keydown.enter="openProjectModal('laboratory')">
            <div class="proj-head">
              <h3>实验室资源管理系统</h3>
              <span class="proj-role">后端开发</span>
            </div>
            <div class="proj-techs">
              <span class="proj-tag">SpringBoot</span>
              <span class="proj-tag">JWT</span>
              <span class="proj-tag">RBAC</span>
              <span class="proj-tag">EasyExcel</span>
              <span class="proj-tag">Minio</span>
              <span class="proj-tag">AOP</span>
              <span class="proj-tag">ECharts</span>
            </div>
            <div class="proj-section">
              <h4>概述</h4>
              <p>基于SpringBoot的实验室资源管理系统，解决权限控制、数据处理和文件存储问题。</p>
            </div>
            <div class="proj-section">
              <h4>职责</h4>
              <ul>
                <li>设计并实现基于JWT的认证授权系统与RBAC权限模型</li>
                <li>开发实验室、设备、课程等资源的RESTful API及预约审核流程</li>
                <li>集成EasyExcel实现数据批量导入导出，集成Minio处理文件存储</li>
                <li>利用AOP记录操作日志，提供数据聚合接口支持ECharts可视化</li>
              </ul>
            </div>
            <div class="proj-section">
              <h4>成果</h4>
              <ul>
                <li>构建了安全的多角色权限体系与完整的资源管理闭环</li>
                <li>系统响应时间缩短30%，用户满意度提升20%</li>
              </ul>
            </div>
          </div>

          <div class="proj-card" @click="openProjectModal('takeout')" tabindex="0" role="button" @keydown.enter="openProjectModal('takeout')">
            <div class="proj-head">
              <h3>鲲鹏外卖点餐平台</h3>
              <span class="proj-role">后端开发</span>
            </div>
            <div class="proj-techs">
              <span class="proj-tag">SpringBoot</span>
              <span class="proj-tag">MyBatis-Plus</span>
              <span class="proj-tag">Redis</span>
              <span class="proj-tag">Swagger</span>
            </div>
            <div class="proj-section">
              <h4>概述</h4>
              <p>基于SpringBoot的前后端分离外卖系统，提供高效、稳定的在线点餐服务。</p>
            </div>
            <div class="proj-section">
              <h4>职责</h4>
              <ul>
                <li>开发后台管理API（员工权限、菜品/套餐管理、订单处理）</li>
                <li>实现用户端短信验证码登录及购物车、下单等核心业务逻辑</li>
                <li>使用Redis缓存热点数据和验证码，优化系统性能与安全性</li>
                <li>设计统一响应格式与数据库表结构，提供Swagger接口文档</li>
              </ul>
            </div>
            <div class="proj-section">
              <h4>成果</h4>
              <ul>
                <li>通过Redis缓存技术，用户端响应速度提升30%</li>
                <li>实现了完整的订单业务闭环与安全的用户认证机制</li>
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
            <li>了解基础的软件开发流程与规范，具备良好的编程习惯和学习新技术的能力</li>
            <li>能够快速适应工作需求变化，拥有责任感</li>
            <li>在复杂多变的工作环境中能够保持冷静思考</li>
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
        yuewu: { name: '悦物在线商城系统', gitee: 'https://gitee.com/zyp556678/yuewu_parent', github: 'https://github.com/zyp556678/yuewu_parent' },
        laboratory: { name: '实验室资源管理系统', gitee: 'https://gitee.com/zyp556678/laboratory-master', github: 'https://github.com/zyp556678/laboratory-master' },
        takeout: { name: '鲲鹏外卖点餐平台', gitee: 'https://gitee.com/zyp556678/take_out_system', github: 'https://github.com/zyp556678/take_out_system' }
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
