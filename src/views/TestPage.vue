<template>
  <div class="test-page">
    <header class="test-hero">
      <div class="container">
        <p class="eyebrow reveal">Showcase</p>
        <h1 class="test-hero-title reveal">关键卡片浏览器</h1>
        <p class="test-hero-sub reveal">逐张查看，每一张都讲一个故事。</p>
      </div>
    </header>

    <div class="container">
      <div class="test-stage reveal">
        <transition name="card-fade" mode="out-in">
          <div class="test-card" :key="active">
            <p class="test-card-eyebrow">{{ current.label }}</p>
            <h2 class="test-card-title">{{ current.title }}</h2>
            <p class="test-card-en">{{ current.titleEn }}</p>
            <div class="test-card-divider"></div>
            <p class="test-card-desc">{{ current.desc }}</p>
            <div class="test-card-meta">
              <span>{{ current.tag }}</span>
              <span>{{ String(active + 1).padStart(2, '0') }} / {{ String(cards.length).padStart(2, '0') }}</span>
            </div>
          </div>
        </transition>
      </div>

      <div class="test-controls">
        <button class="test-arrow" aria-label="上一张" @click="prev">
          <i class="fas fa-chevron-left"></i>
        </button>

        <div class="test-dots">
          <button
            v-for="(c, i) in cards"
            :key="c.num"
            class="test-dot"
            :class="{ active: i === active }"
            :aria-label="`Show ${c.title}`"
            @click="active = i"
          ></button>
        </div>

        <button class="test-arrow" aria-label="下一张" @click="next">
          <i class="fas fa-chevron-right"></i>
        </button>

        <span class="test-counter">{{ String(active + 1).padStart(2, '0') }} / {{ String(cards.length).padStart(2, '0') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data() {
    return {
      active: 0,
      observer: null,
      cards: [
        { num: '01', label: 'About Me',    title: '张宇鹏',     titleEn: 'ZHANG YUPENG',         desc: '黑龙江科技大学 · 软件工程 · 2023 级 · 大三在读 · Java 后端开发。',                  tag: 'Identity' },
        { num: '02', label: 'Core Stack',  title: 'Java 生态',   titleEn: 'Spring Ecosystem',     desc: 'Java · Spring Boot · Spring Cloud · MyBatis-Plus · 微服务架构 · JWT。',           tag: 'Backend' },
        { num: '03', label: 'Project I',   title: '鲲鹏外卖',   titleEn: 'Takeout Platform',     desc: '外卖点餐平台，全模块后端开发，Redis 缓存与统一权限校验，移动端 H5。',           tag: 'Full Stack' },
        { num: '04', label: 'Project II',  title: '悦物商城',   titleEn: 'Yuewu Mall',           desc: 'Spring Cloud 微服务电商，高并发优化，ES 全文检索，RabbitMQ 延迟队列。',         tag: 'Microservice' },
        { num: '05', label: 'Project III', title: '穿戴管家',   titleEn: 'WearWise',             desc: 'Flutter 跨平台衣橱管理 App，Provider 状态管理，省级大创项目结题。',              tag: 'Mobile' },
        { num: '06', label: 'Infra',       title: '数据中间件', titleEn: 'Data & Middleware',    desc: 'MySQL · Redis · Elasticsearch · RabbitMQ · Nacos · Docker · Linux。',           tag: 'Infra' },
        { num: '07', label: 'Vision',      title: '职业目标',   titleEn: 'Career Goal',          desc: '成为独当一面的后端工程师 · 责任感强 · 善于沟通 · Open to Work。',              tag: 'OpenToWork' }
      ]
    }
  },
  computed: {
    current() {
      return this.cards[this.active]
    }
  },
  mounted() {
    this.initReveal()
    document.addEventListener('keydown', this.onKey)
  },
  beforeUnmount() {
    if (this.observer) this.observer.disconnect()
    document.removeEventListener('keydown', this.onKey)
  },
  methods: {
    next() {
      this.active = (this.active + 1) % this.cards.length
    },
    prev() {
      this.active = (this.active - 1 + this.cards.length) % this.cards.length
    },
    onKey(e) {
      if (e.key === 'ArrowRight') this.next()
      if (e.key === 'ArrowLeft') this.prev()
    },
    initReveal() {
      this.observer = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view')
            this.observer.unobserve(e.target)
          }
        }),
        { threshold: 0.1 }
      )
      this.$nextTick(() => {
        document.querySelectorAll('.reveal').forEach((el) => this.observer.observe(el))
      })
    }
  }
}
</script>

<style scoped>
.card-fade-enter-active,
.card-fade-leave-active {
  transition: opacity 320ms cubic-bezier(0.4, 0, 0.2, 1), transform 320ms cubic-bezier(0.4, 0, 0.2, 1);
}
.card-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.card-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
