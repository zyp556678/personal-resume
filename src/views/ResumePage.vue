<template>
  <div class="resume" ref="root">

    <!-- OVERLAYS -->
    <div class="resume-scanlines"></div>
    <div class="resume-vignette"></div>
    <div class="resume-noise"></div>

    <router-link to="/" class="resume-back-btn">&larr; BACK</router-link>

    <!-- ABOUT -->
    <section id="about" class="resume-section">
      <div class="resume-container">
        <div class="resume-section-head">
          <span class="resume-section-num">// 01</span>
          <h2 class="resume-section-title">About Me</h2>
        </div>
        <div class="resume-about-grid">
          <div class="resume-photo-wrap">
            <img src="/images/personal.jpg" alt="张宇鹏证件照" loading="lazy" class="resume-photo" />
          </div>
          <div class="resume-about-info">
            <h1 class="resume-name">张宇鹏</h1>
            <p class="resume-role">Java Backend Developer</p>
            <div class="resume-chips">
              <div class="resume-chip"><i class="fas fa-briefcase"></i> Java后端开发工程师</div>
              <div class="resume-chip"><i class="fas fa-phone"></i> 18745397398</div>
              <div class="resume-chip"><i class="fas fa-envelope"></i> taitanyunluo2@126.com</div>
              <div class="resume-chip"><i class="fas fa-user"></i> 男</div>
              <div class="resume-chip"><i class="fas fa-birthday-cake"></i> 2005年12月</div>
              <div class="resume-chip"><i class="fas fa-flag"></i> 共青团员</div>
            </div>
            <div class="resume-socials">
              <a href="https://github.com/zyp556678" target="_blank" class="resume-social-link" rel="noopener noreferrer">
                <i class="fab fa-github"></i> GitHub
              </a>
              <a href="https://gitee.com/zyp556678" target="_blank" class="resume-social-link" rel="noopener noreferrer">
                <i class="fas fa-code-branch"></i> Gitee
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EDUCATION -->
    <section id="education" class="resume-section">
      <div class="resume-container">
        <div class="resume-section-head">
          <span class="resume-section-num">// 02</span>
          <h2 class="resume-section-title">Education</h2>
        </div>
        <div class="resume-timeline">
          <a href="https://www.usth.edu.cn/" target="_blank" class="resume-tl-link" rel="noopener noreferrer">
            <div class="resume-tl-item">
              <div class="resume-tl-marker"></div>
              <div class="resume-tl-body">
                <h3>黑龙江科技大学 — 软件工程</h3>
                <span class="resume-tl-date">2023.09 — 2027.06 · 本科</span>
                <p class="resume-tl-desc">主修课程：Java、数据结构与算法、计算机系统基础、数据库原理及应用、计算机网络、操作系统、算法设计与分析、软件工程</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- SKILLS -->
    <section id="skills" class="resume-section">
      <div class="resume-container">
        <div class="resume-section-head">
          <span class="resume-section-num">// 03</span>
          <h2 class="resume-section-title">Skills</h2>
        </div>
        <div class="resume-skills-wrap">
          <div class="resume-skill-group" v-for="group in skillGroups" :key="group.name">
            <div class="resume-skill-group-head">
              <div class="resume-skill-icon"><i :class="group.icon"></i></div>
              <h3>{{ group.name }}</h3>
            </div>
            <div class="resume-skill-tags">
              <a v-for="skill in group.skills" :key="skill.name" :href="skill.url || '#'" :target="skill.url ? '_blank' : undefined" class="resume-skill-tag" :rel="skill.url ? 'noopener noreferrer' : undefined">
                {{ skill.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROJECTS -->
    <section id="projects" class="resume-section">
      <div class="resume-container">
        <div class="resume-section-head">
          <span class="resume-section-num">// 04</span>
          <h2 class="resume-section-title">Projects</h2>
        </div>
        <div class="resume-projects-wrap">

          <div class="resume-proj-card" @mouseenter="onCardEnter" @mouseleave="onCardLeave" @mousemove="onCardMove" @click="openProjectModal('takeout')" tabindex="0" role="button" @keydown.enter="openProjectModal('takeout')">
            <div class="resume-proj-bg" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"></div>
            <div class="resume-proj-content">
              <div class="resume-proj-head">
                <span class="resume-proj-id">PRJ-001</span>
                <span class="resume-proj-role">后端开发</span>
              </div>
              <h3>鲲鹏外卖点餐平台</h3>
              <div class="resume-proj-tags">
                <span>SpringBoot</span><span>MyBatis-Plus</span><span>MySQL</span><span>Redis</span><span>Vue.js</span><span>Element-UI</span><span>Vant</span>
              </div>
              <div class="resume-proj-section">
                <h4>概述</h4>
                <p>功能完整的单体式架构外卖点餐系统，包含后台管理系统（面向商家管理员）和移动端H5（面向消费者），提供从菜品管理、用户下单到订单履约的全流程解决方案。</p>
              </div>
              <div class="resume-proj-section">
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
            <div class="resume-proj-shine"></div>
          </div>

          <div class="resume-proj-card" @mouseenter="onCardEnter" @mouseleave="onCardLeave" @mousemove="onCardMove" @click="openProjectModal('yuewu')" tabindex="0" role="button" @keydown.enter="openProjectModal('yuewu')">
            <div class="resume-proj-bg" style="background: linear-gradient(135deg, #1a1a2e 0%, #2d132c 50%, #4a1942 100%)"></div>
            <div class="resume-proj-content">
              <div class="resume-proj-head">
                <span class="resume-proj-id">PRJ-002</span>
                <span class="resume-proj-role">后端开发</span>
              </div>
              <h3>悦物在线商城系统</h3>
              <div class="resume-proj-tags">
                <span>SpringCloud</span><span>Nacos</span><span>MySQL 8.0</span><span>Redis</span><span>RabbitMQ</span><span>Elasticsearch</span><span>JWT</span>
              </div>
              <div class="resume-proj-section">
                <h4>概述</h4>
                <p>基于Spring Cloud (Nacos)微服务架构的大型分布式电商系统，涵盖商品管理、购物车、订单处理、支付、搜索、全文检索等核心电商功能模块，针对高并发场景进行了性能优化。</p>
              </div>
              <div class="resume-proj-section">
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
            <div class="resume-proj-shine"></div>
          </div>

          <div class="resume-proj-card" @mouseenter="onCardEnter" @mouseleave="onCardLeave" @mousemove="onCardMove" @click="openProjectModal('wearwise')" tabindex="0" role="button" @keydown.enter="openProjectModal('wearwise')">
            <div class="resume-proj-bg" style="background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)"></div>
            <div class="resume-proj-content">
              <div class="resume-proj-head">
                <span class="resume-proj-id">PRJ-003</span>
                <span class="resume-proj-role">Vibe Coding</span>
              </div>
              <h3>穿戴管家 (WearWise)</h3>
              <div class="resume-proj-tags">
                <span>Flutter</span><span>Dart</span><span>Provider</span><span>SQLite</span><span>Open-Meteo API</span><span>高德定位SDK</span><span>OpenCode</span>
              </div>
              <div class="resume-proj-section">
                <h4>概述</h4>
                <p>跨平台衣橱管理应用，帮助用户智能管理衣物、搭配穿搭、记录日常OOTD。支持Android/iOS/Web/Desktop多端运行，集成天气服务、相机拍照、GPS定位等功能。</p>
              </div>
              <div class="resume-proj-section">
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
            <div class="resume-proj-shine"></div>
          </div>

        </div>
      </div>
    </section>

    <!-- EXPERIENCE -->
    <section id="experience" class="resume-section">
      <div class="resume-container">
        <div class="resume-section-head">
          <span class="resume-section-num">// 05</span>
          <h2 class="resume-section-title">Campus</h2>
        </div>
        <div class="resume-timeline">
          <a href="/images/certificate.jpg" target="_blank" class="resume-tl-link" rel="noopener noreferrer">
            <div class="resume-tl-item">
              <div class="resume-tl-marker"></div>
              <div class="resume-tl-body">
                <h3>大学生创新创业项目 —《穿戴管家》</h3>
                <span class="resume-tl-date">项目成员</span>
                <p class="resume-tl-desc">以省级大学生创新创业项目结题。</p>
              </div>
            </div>
          </a>
          <div class="resume-tl-item">
            <div class="resume-tl-marker"></div>
            <div class="resume-tl-body">
              <h3>团委组织部干事</h3>
              <ul class="resume-tl-list">
                <li><strong>团队建设：</strong>协助组织3次团建活动，提升成员沟通与协作能力</li>
                <li><strong>培训与发展：</strong>筹备并执行2期新成员培训计划，内容涵盖团队合作与项目管理</li>
                <li><strong>项目支持：</strong>参与策划并实施全校"青年领导力"发展项目</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EVALUATION -->
    <section id="evaluation" class="resume-section">
      <div class="resume-container">
        <div class="resume-section-head">
          <span class="resume-section-num">// 06</span>
          <h2 class="resume-section-title">Self</h2>
        </div>
        <div class="resume-eval-box">
          <ul>
            <li>有良好的编程习惯和学习新技术的能力，能够快速适应工作需求变化</li>
            <li>有责任感，在复杂多变的工作环境中能够保持冷静思考</li>
            <li>善于沟通交流，有效促进团队内部的合作氛围</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <footer class="resume-footer">
      <span>&copy; 2026 ZHANG YUPENG</span>
      <span>ALL RIGHTS RESERVED</span>
    </footer>

    <!-- MODAL -->
    <div v-if="showModal" class="resume-modal-overlay" @click="closeModal" role="dialog" aria-modal="true">
      <div class="resume-modal-box" @click.stop>
        <div class="resume-modal-top">
          <h3>{{ selectedProject?.name }}</h3>
          <button @click="closeModal" class="resume-modal-x" aria-label="关闭">&times;</button>
        </div>
        <div class="resume-modal-body">
          <p class="resume-modal-prompt">选择代码仓库平台</p>
          <div class="resume-modal-actions">
            <a v-if="selectedProject?.gitee" :href="selectedProject.gitee" target="_blank" class="resume-social-link" rel="noopener noreferrer" @click="closeModal">
              <i class="fas fa-code-branch"></i> Gitee
            </a>
            <a v-if="selectedProject?.github" :href="selectedProject.github" target="_blank" class="resume-social-link" rel="noopener noreferrer" @click="closeModal">
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
    this.initScrollReveal()
  },
  beforeUnmount() {
  },
  methods: {
    initScrollReveal() {
      const obs = new IntersectionObserver(
        (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('resume-visible'); obs.unobserve(e.target); } }),
        { threshold: 0.1 }
      )
      this.$nextTick(() => {
        document.querySelectorAll('.resume-section-head, .resume-about-grid, .resume-tl-item, .resume-skill-group, .resume-proj-card, .resume-eval-box').forEach(el => {
          el.classList.add('resume-reveal')
          obs.observe(el)
        })
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
    onCardEnter(e) {
      e.currentTarget.classList.add('resume-proj-hover')
    },
    onCardLeave(e) {
      e.currentTarget.classList.remove('resume-proj-hover')
      e.currentTarget.style.transform = ''
      const shine = e.currentTarget.querySelector('.resume-proj-shine')
      if (shine) shine.style.opacity = '0'
    },
    onCardMove(e) {
      const card = e.currentTarget
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rotateX = ((y - cy) / cy) * -5
      const rotateY = ((x - cx) / cx) * 5
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`
      const shine = card.querySelector('.resume-proj-shine')
      if (shine) {
        shine.style.opacity = '1'
        shine.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,255,255,0.1) 0%, transparent 60%)`
      }
    }
  }
}
</script>
