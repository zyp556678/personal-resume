<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <h1 class="nav-logo">张宇鹏的简历</h1>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#about" class="nav-link">个人信息</a>
          </li>
          <li class="nav-item">
            <a href="#education" class="nav-link">教育背景</a>
          </li>
          <li class="nav-item">
            <a href="#skills" class="nav-link">技能</a>
          </li>
          <li class="nav-item">
            <a href="#projects" class="nav-link">项目经验</a>
          </li>
          <li class="nav-item">
            <a href="#experience" class="nav-link">校园经历</a>
          </li>
          <li class="nav-item">
            <a href="#evaluation" class="nav-link">自我评价</a>
          </li>
          <li class="nav-item">
            <button @click="toggleTheme" class="theme-toggle">切换主题</button>
          </li>
        </ul>
      </div>
    </nav>

    <!-- 个人信息部分 -->
    <section id="about" class="section about-section">
      <div class="container">
        <h2 class="section-title">个人信息</h2>
        <div class="profile-card">
          <div class="profile-info">
            <div class="info-photo-container">
              <div class="profile-info-text">
                <h3>张宇鹏</h3>
                <p class="contact-info">
                  <span class="contact-item"><i class="fas fa-phone"></i> 电话: 18745397398</span>
                  <span class="contact-item"><i class="fas fa-envelope"></i> 邮箱: taitanyunluo2@126.com</span>
                  <span class="contact-item"><i class="fas fa-user"></i> 性别: 男</span>
                  <span class="contact-item"><i class="fas fa-map-marker-alt"></i> 现居: 黑龙江省牡丹江市</span>
                  <span class="contact-item"><i class="fas fa-birthday-cake"></i> 出生: 2005年12月</span>
                  <span class="contact-item"><i class="fas fa-flag"></i> 民族: 汉族</span>
                </p>
                <div class="social-links">
                  <a href="https://github.com/zyp556678" target="_blank" class="social-link">
                    <i class="fab fa-github"></i> GitHub
                  </a>
                  <a href="https://gitee.com/zyp556678" target="_blank" class="social-link">
                    <i class="fas fa-code-branch"></i> Gitee
                  </a>
                </div>
              </div>
              <div class="profile-photo">
                <img src="/images/personal.jpg" alt="张宇鹏证件照" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 教育背景部分 -->
    <section id="education" class="section education-section">
      <div class="container">
        <div class="section-title-wrapper">
          <h2 class="section-title">教育背景</h2>
          <span class="jump-hint">(点击跳转)</span>
        </div>
        <div class="timeline">
          <a href="https://www.usth.edu.cn/" target="_blank" class="school-link">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>黑龙江科技大学 - 软件工程</h3>
                <p class="timeline-date">2023年09月 - 2027年06月（本科）</p>
                <p class="timeline-description">主修课程：Java、数据结构与算法、计算机系统基础、数据库原理及应用、计算机网络、操作系统、算法设计与分析、软件工程</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 技能部分 -->
    <section id="skills" class="section skills-section">
      <div class="container">
        <div class="section-title-wrapper">
          <h2 class="section-title">职业技能</h2>
          <span class="jump-hint">(点击跳转)</span>
        </div>
        <div class="skills-container">
          <div class="skill-category">
            <h3>编程语言</h3>
            <div class="skill-tags">
              <a href="https://www.oracle.com/java/" target="_blank" class="skill-tag">Java</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>后端框架</h3>
            <div class="skill-tags">
              <a href="https://spring.io/projects/spring-boot" target="_blank" class="skill-tag">Spring Boot</a>
              <a href="https://spring.io/projects/spring-cloud" target="_blank" class="skill-tag">Spring Cloud</a>
              <a href="https://baomidou.com/" target="_blank" class="skill-tag">MyBatis-Plus</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>数据库技术</h3>
            <div class="skill-tags">
              <a href="https://www.mysql.com/" target="_blank" class="skill-tag">MySQL</a>
              <a href="https://redis.io/" target="_blank" class="skill-tag">Redis</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>中间件与消息队列</h3>
            <div class="skill-tags">
              <a href="https://rabbitmq.com/" target="_blank" class="skill-tag">RabbitMQ</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>分布式技术</h3>
            <div class="skill-tags">
              <a href="https://nacos.io/" target="_blank" class="skill-tag">Nacos</a>
              <a href="https://github.com/OpenFeign/feign" target="_blank" class="skill-tag">Feign</a>
              <a href="https://redisson.org/" target="_blank" class="skill-tag">Redisson</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>搜索引擎</h3>
            <div class="skill-tags">
              <a href="https://www.elastic.co/elasticsearch/" target="_blank" class="skill-tag">Elasticsearch</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>开发运维</h3>
            <div class="skill-tags">
              <a href="https://maven.apache.org/" target="_blank" class="skill-tag">Maven</a>
              <a href="https://git-scm.com/" target="_blank" class="skill-tag">Git</a>
              <a href="https://www.docker.com/" target="_blank" class="skill-tag">Docker</a>
              <a href="https://www.linux.org/" target="_blank" class="skill-tag">Linux</a>
              <a href="https://www.redhat.com/en/topics/devops/what-is-cicd" target="_blank" class="skill-tag">CI/CD</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>安全与认证</h3>
            <div class="skill-tags">
              <a href="https://jwt.io/" target="_blank" class="skill-tag">JWT</a>
              <a href="https://oauth.net/2/" target="_blank" class="skill-tag">OAuth2.0</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>数据处理与存储</h3>
            <div class="skill-tags">
              <a href="https://easyexcel.opensource.alibaba.com/" target="_blank" class="skill-tag">EasyExcel</a>
              <a href="https://min.io/" target="_blank" class="skill-tag">Minio</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>基础知识</h3>
            <div class="skill-tags">
              <a href="#" class="skill-tag">数据结构与算法</a>
              <a href="#" class="skill-tag">计算机网络</a>
              <a href="#" class="skill-tag">操作系统</a>
              <a href="#" class="skill-tag">系统设计</a>
            </div>
          </div>
          
          <div class="skill-category">
            <h3>其他</h3>
            <div class="skill-tags">
              <a href="#" class="skill-tag">技术文档编写</a>
              <a href="#" class="skill-tag">云原生</a>
              <a href="#" class="skill-tag">微服务</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 项目经验部分 -->
    <section id="projects" class="section projects-section">
      <div class="container">
        <div class="section-title-wrapper">
          <h2 class="section-title">项目经验</h2>
          <span class="jump-hint">(点击跳转)</span>
        </div>
        <div class="projects-grid">
          <a href="https://gitee.com/zyp556678/gmall" target="_blank" class="project-link">
            <div class="project-card">
              <h3>谷粒商城（gmall）</h3>
              <p class="project-role">后端开发工程师</p>
              <div class="project-tech">
                <span class="tech-tag">SpringCloud</span>
                <span class="tech-tag">Redis</span>
                <span class="tech-tag">RabbitMQ</span>
                <span class="tech-tag">Elasticsearch</span>
                <span class="tech-tag">Nacos</span>
              </div>
              <div class="project-details">
                <h4>项目概述：</h4>
                <p>基于SpringCloud微服务架构的分布式电商平台，涵盖商品、购物车、订单、支付、搜索等核心模块，旨在解决高并发场景下的性能问题。</p>
                <h4>职责：</h4>
                <ul>
                  <li>负责购物车服务，采用Redis缓存购物车数据，异步处理优化数据库写入</li>
                  <li>开发订单系统核心流程，集成RabbitMQ延迟队列实现订单超时自动取消</li>
                  <li>构建基于Elasticsearch的商品索引，实现多维度复杂检索与排序</li>
                  <li>参与网关鉴权与路由配置，使用Nacos进行服务发现与配置管理</li>
                </ul>
              </div>
              <div class="project-results">
                <h4>成果：</h4>
                <ul>
                  <li>通过缓存与消息队列技术，系统吞吐量提升30%</li>
                  <li>实现了完整的电商核心业务闭环，保障系统稳定与高效</li>
                </ul>
              </div>
            </div>
          </a>

          <a href="https://gitee.com/zyp556678/laboratory-master" target="_blank" class="project-link">
            <div class="project-card">
              <h3>实验室资源管理系统</h3>
              <p class="project-role">后端开发工程师</p>
              <div class="project-tech">
                <span class="tech-tag">SpringBoot</span>
                <span class="tech-tag">JWT</span>
                <span class="tech-tag">RBAC</span>
                <span class="tech-tag">EasyExcel</span>
                <span class="tech-tag">Minio</span>
                <span class="tech-tag">AOP</span>
                <span class="tech-tag">ECharts</span>
              </div>
              <div class="project-details">
                <h4>项目概述：</h4>
                <p>基于SpringBoot的实验室资源管理系统，解决权限控制、数据处理和文件存储问题。</p>
                <h4>职责：</h4>
                <ul>
                  <li>设计并实现基于JWT的认证授权系统与RBAC权限模型</li>
                  <li>开发实验室、设备、课程等资源的RESTful API及预约审核流程</li>
                  <li>集成EasyExcel实现数据批量导入导出，集成Minio处理文件存储</li>
                  <li>利用AOP记录操作日志，提供数据聚合接口支持ECharts可视化</li>
                </ul>
              </div>
              <div class="project-results">
                <h4>成果：</h4>
                <ul>
                  <li>构建了安全的多角色权限体系与完整的资源管理闭环</li>
                  <li>系统响应时间缩短30%，用户满意度提升20%</li>
                </ul>
              </div>
            </div>
          </a>

          <a href="https://gitee.com/zyp556678/take_out_system" target="_blank" class="project-link">
            <div class="project-card">
              <h3>鲲鹏外卖点餐平台</h3>
              <p class="project-role">后端开发工程师</p>
              <div class="project-tech">
                <span class="tech-tag">SpringBoot</span>
                <span class="tech-tag">MyBatis-Plus</span>
                <span class="tech-tag">Redis</span>
                <span class="tech-tag">Swagger</span>
              </div>
              <div class="project-details">
                <h4>项目概述：</h4>
                <p>基于SpringBoot的前后端分离外卖系统，提供高效、稳定的在线点餐服务。</p>
                <h4>职责：</h4>
                <ul>
                  <li>开发后台管理API（员工权限、菜品/套餐管理、订单处理）</li>
                  <li>实现用户端短信验证码登录及购物车、下单等核心业务逻辑</li>
                  <li>使用Redis缓存热点数据和验证码，优化系统性能与安全性</li>
                  <li>设计统一响应格式与数据库表结构，提供Swagger接口文档</li>
                </ul>
              </div>
              <div class="project-results">
                <h4>成果：</h4>
                <ul>
                  <li>通过Redis缓存技术，用户端响应速度提升30%</li>
                  <li>实现了完整的订单业务闭环与安全的用户认证机制</li>
                </ul>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- 校园经历部分 -->
    <section id="experience" class="section experience-section">
      <div class="container">
        <div class="section-title-wrapper">
          <h2 class="section-title">校园经历</h2>
          <span class="jump-hint">(点击跳转)</span>
        </div>
        <div class="timeline">
          <a href="/images/certificate.jpg" target="_blank" class="certificate-link">
            <div class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <h3>大学生创新创业项目 - 《穿戴管家》</h3>
                <p class="timeline-date">项目成员</p>
                <p class="timeline-description">以省级大学生创新创业项目结题。</p>
              </div>
            </div>
          </a>
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <h3>团委组织部干事</h3>
              <div class="timeline-description">
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

    <!-- 自我评价部分 -->
    <section id="evaluation" class="section evaluation-section">
      <div class="container">
        <h2 class="section-title">自我评价</h2>
        <div class="evaluation-content">
          <ul>
            <li>了解基础的软件开发流程与规范，具备良好的编程习惯和学习新技术的能力</li>
            <li>能够快速适应工作需求变化，拥有责任感</li>
            <li>在复杂多变的工作环境中能够保持冷静思考</li>
            <li>善于沟通交流，有效促进团队内部的合作氛围</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2026 张宇鹏. 版权所有</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      darkMode: false
    }
  },
  mounted() {
    this.applyTheme();
    this.initSmoothScroll();
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode;
      this.applyTheme();
    },
    applyTheme() {
      if (this.darkMode) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
      } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
      }
    },
    initSmoothScroll() {
      // 监听所有的锚点点击事件
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // 计算导航栏高度（动态获取）
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 70;
            
            // 获取目标元素距离顶部的距离
            const targetPosition = targetElement.offsetTop;
            
            // 平滑滚动到目标位置，减去导航栏高度
            window.scrollTo({
              top: targetPosition - navbarHeight - 20, // 额外减去20px的缓冲
              behavior: 'smooth'
            });
          }
        }
      });
    }
  }
}
</script>

<style>
/* 这部分样式已经在style.css中定义，这里可以为空或者只包含组件特定的样式 */
</style>