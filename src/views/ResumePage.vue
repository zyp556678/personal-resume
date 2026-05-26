<template>
  <div class="resume">

    <router-link to="/" class="resume-back" aria-label="返回首页">
      <i class="fas fa-arrow-left"></i>
    </router-link>

    <!-- ABOUT — hero like Apple product overview -->
    <section id="about" class="section about-hero">
      <div class="container">
        <p class="about-eyebrow reveal">个人简介 · About</p>
        <h1 class="about-name reveal">张宇鹏</h1>
        <p class="about-role reveal">Java Backend Developer · 黑龙江科技大学 · 软件工程</p>

        <div class="about-portrait reveal">
          <img src="/images/personal.jpg" alt="张宇鹏证件照" loading="eager" />
        </div>

        <div class="chips reveal">
          <span class="chip"><i class="fas fa-briefcase"></i> Java 后端开发</span>
          <span class="chip"><i class="fas fa-phone"></i> 187 4539 7398</span>
          <span class="chip"><i class="fas fa-envelope"></i> taitanyunluo2@126.com</span>
          <span class="chip"><i class="fas fa-user"></i> 男 · 2005.12</span>
          <span class="chip"><i class="fas fa-flag"></i> 共青团员</span>
        </div>

        <div class="about-socials reveal">
          <a href="https://github.com/zyp556678" target="_blank" rel="noopener noreferrer" class="social-btn">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="https://gitee.com/zyp556678" target="_blank" rel="noopener noreferrer" class="social-btn">
            <i class="fas fa-code-branch"></i> Gitee
          </a>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" class="section section--alt">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">教育背景 · Education</span>
          <h2 class="section-title">在校学习。</h2>
          <p class="section-sub">系统的计算机科学训练，从语言到工程方法。</p>
        </div>

        <div class="timeline reveal">
          <a href="https://www.usth.edu.cn/" target="_blank" rel="noopener noreferrer" class="tl-item-link">
            <div class="tl-item">
              <div class="tl-date">2023.09 — 2027.06</div>
              <div>
                <h3 class="tl-title">黑龙江科技大学 · 软件工程</h3>
                <div class="tl-meta">本科 · 全日制</div>
                <p class="tl-desc">主修课程：Java、数据结构与算法、计算机系统基础、数据库原理及应用、计算机网络、操作系统、算法设计与分析、软件工程。</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="section">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">专业技能 · Skills</span>
          <h2 class="section-title">从语言到生态。<br />从底层到中间件。</h2>
        </div>

        <div class="skills-grid">
          <div
            class="skill-card reveal"
            v-for="group in skillGroups"
            :key="group.name"
          >
            <div class="skill-card-head">
              <div class="skill-icon"><i :class="group.icon"></i></div>
              <h3>{{ group.name }}</h3>
            </div>
            <div class="skill-tags">
              <a
                v-for="skill in group.skills"
                :key="skill.name"
                :href="skill.url || '#'"
                :target="skill.url ? '_blank' : undefined"
                :rel="skill.url ? 'noopener noreferrer' : undefined"
                class="skill-tag"
              >
                {{ skill.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="section section--alt">
      <div class="container-wide">
        <div class="section-head reveal">
          <span class="eyebrow">项目经验 · Projects</span>
          <h2 class="section-title">从零到一的实战。</h2>
          <p class="section-sub">每个项目都包含从需求分析、架构设计到落地实现的完整链路。</p>
        </div>

        <div class="projects">
          <article
            class="project-card featured reveal"
            tabindex="0"
            role="button"
            @click="openProjectModal('yuewu')"
            @keydown.enter="openProjectModal('yuewu')"
          >
            <div class="project-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="project-tag-row">
              <span class="project-id">PRJ-002</span>
              <span class="project-role">后端开发</span>
            </div>
            <h3 class="project-title">悦物在线商城<br />分布式微服务电商系统。</h3>
            <p class="project-summary">基于 Spring Cloud + Nacos 构建的大型分布式电商，覆盖商品、购物车、搜索、订单、支付全链路，针对高并发场景做了缓存切面、异步写入、延迟队列等性能优化。</p>
            <div class="project-techs">
              <span class="project-tech">SpringCloud</span>
              <span class="project-tech">Nacos</span>
              <span class="project-tech">MySQL 8.0</span>
              <span class="project-tech">Redis</span>
              <span class="project-tech">RabbitMQ</span>
              <span class="project-tech">Elasticsearch</span>
              <span class="project-tech">JWT</span>
            </div>
            <div class="project-detail">
              <div>
                <h4>主要职责</h4>
                <ul>
                  <li>商品服务、购物车、搜索、订单等核心微服务模块的设计与开发</li>
                  <li>自定义 @GmallCache 注解实现缓存切面，提升查询性能</li>
                  <li>@Async 异步写入与 Redis 缓存策略优化高并发购物车操作</li>
                  <li>基于 Elasticsearch 的商品全文检索与多维度搜索</li>
                  <li>RabbitMQ 延迟队列实现超时未支付订单自动取消</li>
                </ul>
              </div>
            </div>
          </article>

          <article
            class="project-card reveal"
            tabindex="0"
            role="button"
            @click="openProjectModal('takeout')"
            @keydown.enter="openProjectModal('takeout')"
          >
            <div class="project-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="project-tag-row">
              <span class="project-id">PRJ-001</span>
              <span class="project-role">后端开发</span>
            </div>
            <h3 class="project-title">鲲鹏外卖点餐平台</h3>
            <p class="project-summary">单体架构外卖点餐系统，包含商家后台与移动端 H5，提供从菜品管理、用户下单到订单履约的全流程解决方案。</p>
            <div class="project-techs">
              <span class="project-tech">SpringBoot</span>
              <span class="project-tech">MyBatis-Plus</span>
              <span class="project-tech">MySQL</span>
              <span class="project-tech">Redis</span>
              <span class="project-tech">Vue.js</span>
              <span class="project-tech">Vant</span>
            </div>
            <div class="project-detail">
              <div>
                <h4>主要职责</h4>
                <ul>
                  <li>负责后端全部模块及接口的设计与开发</li>
                  <li>基于 Filter 的统一登录拦截与权限校验</li>
                  <li>MyBatis-Plus 通用 CRUD 与字段自动填充</li>
                  <li>Redis 短信验证码存储与套餐数据缓存</li>
                  <li>统一响应封装 R.java 与 ThreadLocal 当前用户上下文</li>
                </ul>
              </div>
            </div>
          </article>

          <article
            class="project-card reveal"
            tabindex="0"
            role="button"
            @click="openProjectModal('wearwise')"
            @keydown.enter="openProjectModal('wearwise')"
          >
            <div class="project-arrow"><i class="fas fa-arrow-right"></i></div>
            <div class="project-tag-row">
              <span class="project-id">PRJ-003</span>
              <span class="project-role">Vibe Coding</span>
            </div>
            <h3 class="project-title">穿戴管家 WearWise</h3>
            <p class="project-summary">跨平台衣橱管理应用。Android / iOS / Web / Desktop 多端运行，集成天气、相机、定位等能力，OOTD 记录与智能搭配。</p>
            <div class="project-techs">
              <span class="project-tech">Flutter</span>
              <span class="project-tech">Dart</span>
              <span class="project-tech">Provider</span>
              <span class="project-tech">SQLite</span>
              <span class="project-tech">Open-Meteo</span>
              <span class="project-tech">高德 SDK</span>
            </div>
            <div class="project-detail">
              <div>
                <h4>主要职责</h4>
                <ul>
                  <li>采用 OpenCode AI 编程工具开发</li>
                  <li>Provider 全局状态管理 + sqflite 本地持久化（v7）</li>
                  <li>Open-Meteo 7 天预报，三级 Geocoding 解决国内编码兼容</li>
                  <li>封装高德定位 SDK，相机模块双指缩放、点击对焦</li>
                  <li>Bento Grid 首页布局，毛玻璃 UI 组件</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="section">
      <div class="container">
        <div class="section-head reveal">
          <span class="eyebrow">校园经历 · Campus</span>
          <h2 class="section-title">不止写代码。</h2>
        </div>

        <div class="timeline reveal">
          <a href="/images/certificate.jpg" target="_blank" rel="noopener noreferrer" class="tl-item-link">
            <div class="tl-item">
              <div class="tl-date">省级 · 已结题</div>
              <div>
                <h3 class="tl-title">大学生创新创业项目 ·《穿戴管家》</h3>
                <div class="tl-meta">项目成员 · 点击查看证书</div>
                <p class="tl-desc">作为团队核心成员，参与产品定义、技术选型与开发实施，最终以省级大学生创新创业项目成功结题。</p>
              </div>
            </div>
          </a>
          <div class="tl-item">
            <div class="tl-date">在校期间</div>
            <div>
              <h3 class="tl-title">团委组织部干事</h3>
              <ul class="tl-list">
                <li><strong>团队建设：</strong>协助组织 3 次团建活动，提升成员沟通与协作能力</li>
                <li><strong>培训与发展：</strong>筹备并执行 2 期新成员培训计划，覆盖团队合作与项目管理</li>
                <li><strong>项目支持：</strong>参与策划并实施全校"青年领导力"发展项目</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVALUATION -->
    <section id="evaluation" class="section section--alt">
      <div class="container">
        <div class="section-head section-head--center reveal">
          <span class="eyebrow">自我评价 · Self</span>
          <h2 class="section-title">关于我自己。</h2>
        </div>

        <div class="eval-grid">
          <div class="eval-card reveal">
            <span class="eval-mark">"</span>
            <p class="eval-quote">有良好的编程习惯和学习新技术的能力，能够快速适应工作需求变化。</p>
          </div>
          <div class="eval-card reveal">
            <span class="eval-mark">"</span>
            <p class="eval-quote">有责任感，在复杂多变的工作环境中能够保持冷静思考。</p>
          </div>
          <div class="eval-card reveal">
            <span class="eval-mark">"</span>
            <p class="eval-quote">善于沟通交流，有效促进团队内部的合作氛围。</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-inner">
        <span>&copy; 2026 ZHANG YUPENG · All rights reserved.</span>
        <span>Designed for clarity. Built with care.</span>
      </div>
    </footer>

    <!-- MODAL -->
    <div
      v-if="showModal"
      class="modal-overlay"
      @click="closeModal"
      role="dialog"
      aria-modal="true"
    >
      <div class="modal-box" @click.stop>
        <div class="modal-top">
          <h3>{{ selectedProject?.name }}</h3>
          <button @click="closeModal" class="modal-x" aria-label="关闭">
            <i class="fas fa-times"></i>
          </button>
        </div>
        <div class="modal-body">
          <p class="modal-prompt">选择代码仓库平台</p>
          <div class="modal-actions">
            <a
              v-if="selectedProject?.gitee"
              :href="selectedProject.gitee"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
              @click="closeModal"
            >
              <i class="fas fa-code-branch"></i> Gitee
            </a>
            <a
              v-if="selectedProject?.github"
              :href="selectedProject.github"
              target="_blank"
              rel="noopener noreferrer"
              class="social-btn"
              @click="closeModal"
            >
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
  name: 'ResumePage',
  data() {
    return {
      showModal: false,
      selectedProject: null,
      observer: null,
      skillGroups: [
        { name: '编程语言', icon: 'fas fa-code', skills: [{ name: 'Java', url: 'https://www.oracle.com/java/' }] },
        { name: '后端框架', icon: 'fas fa-layer-group', skills: [{ name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' }, { name: 'Spring Cloud', url: 'https://spring.io/projects/spring-cloud' }, { name: 'MyBatis-Plus', url: 'https://baomidou.com/' }] },
        { name: '数据库', icon: 'fas fa-database', skills: [{ name: 'MySQL', url: 'https://www.mysql.com/' }, { name: 'Redis', url: 'https://redis.io/' }] },
        { name: '消息队列', icon: 'fas fa-envelope-open-text', skills: [{ name: 'RabbitMQ', url: 'https://rabbitmq.com/' }] },
        { name: '分布式', icon: 'fas fa-network-wired', skills: [{ name: 'Nacos', url: 'https://nacos.io/' }, { name: 'Feign', url: 'https://github.com/OpenFeign/feign' }, { name: 'Redisson', url: 'https://redisson.org/' }] },
        { name: '搜索引擎', icon: 'fas fa-search', skills: [{ name: 'Elasticsearch', url: 'https://www.elastic.co/elasticsearch/' }] },
        { name: '开发运维', icon: 'fas fa-tools', skills: [{ name: 'Maven', url: 'https://maven.apache.org/' }, { name: 'Git', url: 'https://git-scm.com/' }, { name: 'Docker', url: 'https://www.docker.com/' }, { name: 'Linux', url: 'https://www.linux.org/' }, { name: 'CI/CD', url: 'https://www.redhat.com/en/topics/devops/what-is-cicd' }] },
        { name: '安全认证', icon: 'fas fa-shield-alt', skills: [{ name: 'JWT', url: 'https://jwt.io/' }, { name: 'OAuth2.0', url: 'https://oauth.net/2/' }] },
        { name: '数据处理', icon: 'fas fa-file-export', skills: [{ name: 'EasyExcel', url: 'https://easyexcel.opensource.alibaba.com/' }, { name: 'Minio', url: 'https://min.io/' }] },
        { name: '基础知识', icon: 'fas fa-brain', skills: [{ name: '数据结构与算法' }, { name: '计算机网络' }, { name: '操作系统' }, { name: '系统设计' }] },
        { name: '其他', icon: 'fas fa-puzzle-piece', skills: [{ name: '技术文档编写' }, { name: '云原生' }, { name: '微服务' }] }
      ]
    }
  },
  mounted() {
    this.initReveal()
    document.addEventListener('keydown', this.onEsc)
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
    document.removeEventListener('keydown', this.onEsc)
  },
  methods: {
    initReveal() {
      this.observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            this.observer.unobserve(e.target)
          }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
      )
      this.$nextTick(() => {
        document.querySelectorAll('.reveal').forEach((el) => this.observer.observe(el))
      })
    },
    openProjectModal(key) {
      const map = {
        takeout: { name: '鲲鹏外卖点餐平台', gitee: 'https://gitee.com/zyp556678/take_out_system', github: 'https://github.com/zyp556678/take_out_system' },
        yuewu: { name: '悦物在线商城系统', gitee: 'https://gitee.com/zyp556678/yuewu_parent', github: 'https://github.com/zyp556678/yuewu_parent' },
        wearwise: { name: '穿戴管家 (WearWise)', gitee: 'https://gitee.com/zyp556678/wareManager', github: 'https://github.com/zyp556678/wareManager' }
      }
      this.selectedProject = map[key]
      this.showModal = true
    },
    closeModal() {
      this.showModal = false
      this.selectedProject = null
    },
    onEsc(e) {
      if (e.key === 'Escape' && this.showModal) this.closeModal()
    }
  }
}
</script>
