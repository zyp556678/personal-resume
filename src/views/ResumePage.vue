<template>
  <div class="resume">
    <router-link to="/" class="resume-back" aria-label="返回首页">
      <i class="fas fa-arrow-left"></i>
    </router-link>

    <!-- MASTHEAD -->
    <header class="masthead masthead--resume">
      <div class="sheet sheet--full">
        <div class="mast-grid">
          <div class="rise">
            <p class="mast-kicker">软件工程 · 本科在读 · 求职简历</p>
            <h1 class="mast-name">张宇鹏</h1>
            <p class="mast-latin">ZHANG YUPENG</p>
            <p class="mast-role">Java 后端开发。以 Spring 生态为主，做服务的设计、开发与上线。</p>
            <dl class="facts">
              <dt>求职意向</dt>
              <dd>Java 后端开发（实习 / 校招）</dd>
              <dt>联系方式</dt>
              <dd><a href="tel:18745397398">187 4539 7398</a></dd>
              <dt>电子邮箱</dt>
              <dd><a href="mailto:taitanyunluo2@126.com">taitanyunluo2@126.com</a></dd>
              <dt>出生年月</dt>
              <dd>2005.12 · 男 · 汉族</dd>
              <dt>政治面貌</dt>
              <dd>共青团员</dd>
              <dt>代码仓库</dt>
              <dd>
                <a href="https://github.com/zyp556678?tab=repositories" target="_blank" rel="noopener noreferrer">github.com/zyp556678</a>
                &ensp;·&ensp;
                <a href="https://gitee.com/zyp556678" target="_blank" rel="noopener noreferrer">gitee.com/zyp556678</a>
              </dd>
            </dl>
            <div class="actions">
              <a href="mailto:taitanyunluo2@126.com" class="btn btn--solid">发送邮件</a>
              <a href="tel:18745397398" class="btn btn--line">拨打电话</a>
            </div>
          </div>
          <img class="mast-portrait" src="/images/personal.jpg" alt="张宇鹏证件照" loading="eager" />
        </div>
      </div>
    </header>

    <!-- 01 EDUCATION -->
    <section id="education" class="sec">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">01</span><span class="rail-name">Education</span></aside>
        <div class="body">
          <h2 class="sec-title">教育背景</h2>
          <p class="sec-lede">系统的计算机科学训练，从语言到工程方法。</p>
          <div class="rows">
            <a href="https://www.usth.edu.cn/" target="_blank" rel="noopener noreferrer" class="row row-link">
              <div class="row-when">2023.09 — 2027.06</div>
              <div>
                <h3 class="row-title">黑龙江科技大学 · 软件工程</h3>
                <div class="row-meta">本科 · 全日制</div>
                <p class="row-text">主修课程：Java、数据结构与算法、计算机系统基础、数据库原理及应用、计算机网络、操作系统、算法设计与分析、软件工程。</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- 02 SKILLS -->
    <section id="skills" class="sec sec--alt">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">02</span><span class="rail-name">Skills</span></aside>
        <div class="body">
          <h2 class="sec-title">专业技能</h2>
          <p class="sec-lede">从语言到生态，从底层到中间件。</p>
          <div class="skills-table">
            <div class="skill-row" v-for="(group, i) in skillGroups" :key="group.name">
              <span class="skill-code">{{ String(i + 1).padStart(2, '0') }}</span>
              <h3 class="skill-name">{{ group.name }}</h3>
              <div class="skill-items">
                <a
                  v-for="skill in group.skills"
                  :key="skill.name"
                  :href="skill.url"
                  :target="skill.url ? '_blank' : undefined"
                  :rel="skill.url ? 'noopener noreferrer' : undefined"
                  class="skill-item"
                  :class="{ 'skill-item--plain': !skill.url }"
                >{{ skill.name }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 PROJECTS -->
    <section id="projects" class="sec">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">03</span><span class="rail-name">Projects</span></aside>
        <div class="body">
          <h2 class="sec-title">项目经验</h2>
          <p class="sec-lede">每个项目都包含从需求分析、架构设计到落地实现的完整链路。</p>
          <div class="cases">
            <article
              class="case case--feature"
              tabindex="0"
              role="button"
              @click="openProjectModal('yuewu')"
              @keydown.enter="openProjectModal('yuewu')"
            >
              <div class="case-head">
                <span class="case-id">PRJ-002</span>
                <span class="case-role">后端开发</span>
                <span class="case-year">2024</span>
              </div>
              <h3 class="case-title">悦物在线商城 — 分布式微服务电商系统</h3>
              <p class="case-abstract">基于 Spring Cloud + Nacos 构建的大型分布式电商，覆盖商品、购物车、搜索、订单、支付全链路，针对高并发场景做了缓存切面、异步写入、延迟队列等性能优化。</p>
              <div class="case-stack">
                <span class="tag">SpringCloud</span>
                <span class="tag">Nacos</span>
                <span class="tag">MySQL 8.0</span>
                <span class="tag">Redis</span>
                <span class="tag">RabbitMQ</span>
                <span class="tag">Elasticsearch</span>
                <span class="tag">JWT</span>
              </div>
              <div class="case-grid">
                <div>
                  <h4 class="case-block-title">主要职责</h4>
                  <ul class="case-list">
                    <li>商品服务、购物车、搜索、订单等核心微服务模块的设计与开发</li>
                    <li>自定义 @GmallCache 注解实现缓存切面，提升查询性能</li>
                    <li>@Async 异步写入与 Redis 缓存策略优化高并发购物车操作</li>
                    <li>基于 Elasticsearch 的商品全文检索与多维度搜索</li>
                    <li>RabbitMQ 延迟队列实现超时未支付订单自动取消</li>
                  </ul>
                </div>
                <div>
                  <h4 class="case-block-title">技术要点</h4>
                  <ul class="case-list">
                    <li>微服务拆分与 Nacos 注册发现、配置中心</li>
                    <li>OpenFeign 远程调用与统一网关鉴权</li>
                    <li>Redisson 分布式锁保障库存一致性</li>
                  </ul>
                </div>
              </div>
              <span class="case-open">查看代码仓库 ↗</span>
            </article>

            <article
              class="case"
              tabindex="0"
              role="button"
              @click="openProjectModal('takeout')"
              @keydown.enter="openProjectModal('takeout')"
            >
              <div class="case-head">
                <span class="case-id">PRJ-001</span>
                <span class="case-role">后端开发</span>
                <span class="case-year">2024</span>
              </div>
              <h3 class="case-title">鲲鹏外卖点餐平台</h3>
              <p class="case-abstract">单体架构外卖点餐系统，包含商家后台与移动端 H5，提供从菜品管理、用户下单到订单履约的全流程解决方案。</p>
              <div class="case-stack">
                <span class="tag">SpringBoot</span>
                <span class="tag">MyBatis-Plus</span>
                <span class="tag">MySQL</span>
                <span class="tag">Redis</span>
                <span class="tag">Vue.js</span>
                <span class="tag">Vant</span>
              </div>
              <div class="case-grid">
                <div>
                  <h4 class="case-block-title">主要职责</h4>
                  <ul class="case-list">
                    <li>负责后端全部模块及接口的设计与开发</li>
                    <li>基于 Filter 的统一登录拦截与权限校验</li>
                    <li>MyBatis-Plus 通用 CRUD 与字段自动填充</li>
                    <li>Redis 短信验证码存储与套餐数据缓存</li>
                    <li>统一响应封装 R.java 与 ThreadLocal 当前用户上下文</li>
                  </ul>
                </div>
                <div>
                  <h4 class="case-block-title">技术要点</h4>
                  <ul class="case-list">
                    <li>前后端分离，Vue + Vant 移动端 H5</li>
                    <li>Swagger 接口文档与统一异常处理</li>
                  </ul>
                </div>
              </div>
              <span class="case-open">查看代码仓库 ↗</span>
            </article>

            <article
              class="case"
              tabindex="0"
              role="button"
              @click="openProjectModal('wearwise')"
              @keydown.enter="openProjectModal('wearwise')"
            >
              <div class="case-head">
                <span class="case-id">PRJ-003</span>
                <span class="case-role">Vibe Coding</span>
                <span class="case-year">2025</span>
              </div>
              <h3 class="case-title">穿戴管家 WearWise</h3>
              <p class="case-abstract">跨平台衣橱管理应用。Android / iOS / Web / Desktop 多端运行，集成天气、相机、定位等能力，OOTD 记录与智能搭配。</p>
              <div class="case-stack">
                <span class="tag">Flutter</span>
                <span class="tag">Dart</span>
                <span class="tag">Provider</span>
                <span class="tag">SQLite</span>
                <span class="tag">Open-Meteo</span>
                <span class="tag">高德 SDK</span>
              </div>
              <div class="case-grid">
                <div>
                  <h4 class="case-block-title">主要职责</h4>
                  <ul class="case-list">
                    <li>采用 OpenCode AI 编程工具开发</li>
                    <li>Provider 全局状态管理 + sqflite 本地持久化（v7）</li>
                    <li>Open-Meteo 7 天预报，三级 Geocoding 解决国内编码兼容</li>
                    <li>封装高德定位 SDK，相机模块双指缩放、点击对焦</li>
                    <li>Bento Grid 首页布局，毛玻璃 UI 组件</li>
                  </ul>
                </div>
                <div>
                  <h4 class="case-block-title">技术要点</h4>
                  <ul class="case-list">
                    <li>一套代码多端构建（Android / iOS / Web / Desktop）</li>
                    <li>省级大学生创新创业项目，已结题</li>
                  </ul>
                </div>
              </div>
              <span class="case-open">查看代码仓库 ↗</span>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 04 CAMPUS -->
    <section id="experience" class="sec sec--alt">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">04</span><span class="rail-name">Campus</span></aside>
        <div class="body">
          <h2 class="sec-title">校园经历</h2>
          <p class="sec-lede">不止写代码。</p>
          <div class="rows">
            <a href="/images/certificate.jpg" target="_blank" rel="noopener noreferrer" class="row row-link">
              <div class="row-when">省级 · 已结题</div>
              <div>
                <h3 class="row-title">大学生创新创业项目 ·《穿戴管家》</h3>
                <div class="row-meta">项目成员 · 点击查看证书</div>
                <p class="row-text">作为团队核心成员，参与产品定义、技术选型与开发实施，最终以省级大学生创新创业项目成功结题。</p>
              </div>
            </a>
            <div class="row">
              <div class="row-when">在校期间</div>
              <div>
                <h3 class="row-title">团委组织部干事</h3>
                <ul class="row-list">
                  <li><strong>团队建设：</strong>协助组织 3 次团建活动，提升成员沟通与协作能力</li>
                  <li><strong>培训与发展：</strong>筹备并执行 2 期新成员培训计划，覆盖团队合作与项目管理</li>
                  <li><strong>项目支持：</strong>参与策划并实施全校"青年领导力"发展项目</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 05 NOTES -->
    <section id="evaluation" class="sec">
      <div class="sheet">
        <aside class="rail"><span class="rail-num">05</span><span class="rail-name">Notes</span></aside>
        <div class="body">
          <h2 class="sec-title">自我评价</h2>
          <p class="sec-lede">关于我自己。</p>
          <div class="notes">
            <div class="note" v-for="(note, i) in notes" :key="i">
              <span class="note-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <p class="note-text">{{ note }}</p>
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
              class="btn btn--line"
              @click="closeModal"
            >
              <i class="fas fa-code-branch"></i> Gitee
            </a>
            <a
              v-if="selectedProject?.github"
              :href="selectedProject.github"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn--solid"
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
      notes: [
        '有良好的编程习惯和学习新技术的能力，能够快速适应工作需求变化。',
        '有责任感，在复杂多变的工作环境中能够保持冷静思考。',
        '善于沟通交流，有效促进团队内部的合作氛围。'
      ],
      skillGroups: [
        { name: '编程语言', skills: [{ name: 'Java', url: 'https://www.oracle.com/java/' }] },
        { name: '后端框架', skills: [{ name: 'Spring Boot', url: 'https://spring.io/projects/spring-boot' }, { name: 'Spring Cloud', url: 'https://spring.io/projects/spring-cloud' }, { name: 'MyBatis-Plus', url: 'https://baomidou.com/' }] },
        { name: '数据库', skills: [{ name: 'MySQL', url: 'https://www.mysql.com/' }, { name: 'Redis', url: 'https://redis.io/' }] },
        { name: '消息队列', skills: [{ name: 'RabbitMQ', url: 'https://rabbitmq.com/' }] },
        { name: '分布式', skills: [{ name: 'Nacos', url: 'https://nacos.io/' }, { name: 'Feign', url: 'https://github.com/OpenFeign/feign' }, { name: 'Redisson', url: 'https://redisson.org/' }] },
        { name: '搜索引擎', skills: [{ name: 'Elasticsearch', url: 'https://www.elastic.co/elasticsearch/' }] },
        { name: '开发运维', skills: [{ name: 'Maven', url: 'https://maven.apache.org/' }, { name: 'Git', url: 'https://git-scm.com/' }, { name: 'Docker', url: 'https://www.docker.com/' }, { name: 'Linux', url: 'https://www.linux.org/' }, { name: 'CI/CD', url: 'https://www.redhat.com/en/topics/devops/what-is-cicd' }] },
        { name: '安全认证', skills: [{ name: 'JWT', url: 'https://jwt.io/' }, { name: 'OAuth2.0', url: 'https://oauth.net/2/' }] },
        { name: '数据处理', skills: [{ name: 'EasyExcel', url: 'https://easyexcel.opensource.alibaba.com/' }, { name: 'Minio', url: 'https://min.io/' }] },
        { name: '基础知识', skills: [{ name: '数据结构与算法' }, { name: '计算机网络' }, { name: '操作系统' }, { name: '系统设计' }] },
        { name: '其他', skills: [{ name: '技术文档编写' }, { name: '云原生' }, { name: '微服务' }] }
      ]
    }
  },
  mounted() {
    document.addEventListener('keydown', this.onEsc)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.onEsc)
  },
  methods: {
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
