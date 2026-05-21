<template>
  <div class="test-root">

    <div class="ambient" ref="ambient"></div>
    <div class="grain"></div>
    <div class="floor"></div>

    <header class="header">
      <span class="logo">ZYP</span>
      <span class="header-label">Personal Resume · 个人简历</span>
    </header>

    <div class="scene">
      <button class="arrow-btn arrow-left" @click="snapTo(1)" aria-label="上一张">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      </button>
      <div class="carousel" ref="carousel"></div>
      <button class="arrow-btn arrow-right" @click="snapTo(-1)" aria-label="下一张">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </button>
    </div>

    <nav class="indicator" ref="indicator"></nav>

    <footer class="bottom-bar">
      <div class="scroll-hint">
        <span class="scroll-line"></span>
        <span>滚轮旋转 · Scroll</span>
      </div>
      <div class="current-display">
        <div class="current-num" ref="currentNum">01</div>
        <div class="current-title" ref="currentTitle">探索</div>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'TestPage',
  data() {
    return {
      cards: [
        { num: '01', label: 'About Me',    title: '张宇鹏',   titleEn: 'ZHANG YUPENG',   desc: '黑龙江科技大学 · 软件工程 · 2023级本科 · 大三在读 · Java后端开发',          tag: 'Identity',      color: '#e8c547' },
        { num: '02', label: 'Core Stack',  title: 'Java 生态', titleEn: 'Spring Ecosystem', desc: 'Java · Spring Boot · Spring Cloud · MyBatis-Plus · 微服务架构 · JWT',   tag: 'Backend',        color: '#8b7cf6' },
        { num: '03', label: 'Project I',   title: '鲲鹏外卖', titleEn: 'Takeout Platform', desc: '外卖点餐平台，全模块后端开发，Redis缓存与统一权限校验，移动端H5',        tag: 'Full Stack',     color: '#e8606a' },
        { num: '04', label: 'Project II',  title: '悦物商城', titleEn: 'Yuewu Mall',      desc: 'Spring Cloud微服务电商，高并发秒杀优化，ES全文检索，RabbitMQ延迟队列',    tag: 'Microservice',   color: '#5de8c5' },
        { num: '05', label: 'Project III', title: '穿戴管家', titleEn: 'WearWise',        desc: 'Flutter跨平台衣橱管理App，Provider状态管理，省级大创项目结题',           tag: 'Mobile AI',      color: '#f09848' },
        { num: '06', label: 'Infrastructure', title: '数据中间件', titleEn: 'Data & Middleware', desc: 'MySQL · Redis · Elasticsearch · RabbitMQ · Nacos · Docker · Linux', tag: 'Infra',          color: '#48d4f0' },
        { num: '07', label: 'Experience',  title: '实习经历', titleEn: 'Internship',      desc: '上海金仕达 · 外汇清算系统 · FIX协议通信 · 客户报表与对账模块开发',       tag: 'FinTech',        color: '#f048a8' },
        { num: '08', label: 'Vision',      title: '职业目标', titleEn: 'Career Goal',     desc: '成为独当一面的后端工程师 · 责任感强 · 善于沟通 · Open to Work',        tag: 'OpenToWork',     color: '#a8f048' }
      ],
      currentIndex: 0,
      targetAngle: 0,
      displayAngle: 0,
      canSnap: true,
      cardEls: [],
      dotEls: [],
      rafId: null,
      touchStartY: 0,
      touchMoved: false,
      ANGLE_STEP: 0,
      RADIUS: 0,
      LERP_SPEED: 0.1,
      SNAP_THRESH: 0.05,
      COOLDOWN_MS: 500
    }
  },
  computed: {
    TOTAL() {
      return this.cards.length
    }
  },
  mounted() {
    // Take over body styles for fullscreen effect
    document.documentElement.style.background = '#06060a'
    document.body.style.background = '#06060a'
    document.body.style.overflow = 'hidden'

    this.ANGLE_STEP = 360 / this.TOTAL
    this.RADIUS = window.innerWidth < 768 ? 380 : 500

    this.buildDOM()
    this.bindEvents()
    this.startTick()
  },
  beforeUnmount() {
    if (this.rafId) cancelAnimationFrame(this.rafId)
    window.removeEventListener('wheel', this.onWheel)
    window.removeEventListener('touchstart', this.onTouchStart)
    window.removeEventListener('touchmove', this.onTouchMove)
    window.removeEventListener('keydown', this.onKeydown)
    window.removeEventListener('resize', this.onResize)

    document.documentElement.style.background = ''
    document.body.style.background = ''
    document.body.style.overflow = ''
  },
  methods: {
    buildDOM() {
      const carouselEl = this.$refs.carousel
      const indicatorEl = this.$refs.indicator

      this.cards.forEach((c, i) => {
        const el = document.createElement('div')
        el.className = 'card'
        el.style.setProperty('--card-color', c.color)
        el.style.transform = `rotateY(${i * this.ANGLE_STEP}deg) translateZ(${this.RADIUS}px)`
        el.innerHTML = `
          <div class="card-glow"></div>
          <div class="card-accent-bar"></div>
          <span class="card-bg-num">${c.num}</span>
          <div class="card-header">
            <span class="card-label">${c.label}</span>
            <h2 class="card-title">${c.title}</h2>
            <span class="card-title-en">${c.titleEn}</span>
          </div>
          <div class="card-footer">
            <div class="card-divider"></div>
            <p class="card-desc">${c.desc}</p>
            <div class="card-meta">
              <span class="card-tag">${c.tag}</span>
              <span class="card-index">${String(i + 1).padStart(2, '0')} / ${String(this.TOTAL).padStart(2, '0')}</span>
            </div>
          </div>`
        carouselEl.appendChild(el)
        this.cardEls.push(el)

        const dot = document.createElement('div')
        dot.className = 'dot-track'
        dot.innerHTML = `<div class="dot-fill" style="background:${c.color}"></div>`
        indicatorEl.appendChild(dot)
        this.dotEls.push(dot)
      })
    },

    snapTo(direction) {
      if (!this.canSnap) return
      this.canSnap = false
      setTimeout(() => { this.canSnap = true }, this.COOLDOWN_MS)

      this.currentIndex = (this.currentIndex + direction + this.TOTAL) % this.TOTAL
      this.targetAngle += direction * this.ANGLE_STEP
    },

    tick() {
      const diff = this.targetAngle - this.displayAngle
      if (Math.abs(diff) > this.SNAP_THRESH) {
        this.displayAngle += diff * this.LERP_SPEED
      } else {
        this.displayAngle = this.targetAngle
      }

      this.$refs.carousel.style.transform = `rotateY(${this.displayAngle}deg)`

      let bestIdx = 0
      let bestDist = Infinity

      this.cardEls.forEach((el, i) => {
        const raw = (i * this.ANGLE_STEP + this.displayAngle) % 360
        const norm = ((raw % 360) + 360) % 360
        const face = Math.cos(norm * Math.PI / 180)

        el.style.opacity = 0.08 + Math.max(0, face) * 0.92
        el.style.filter = `brightness(${0.55 + Math.max(0, face) * 0.45})`

        if (face > 0.75) {
          const t = (face - 0.75) / 0.25
          const c = this.cards[i].color
          el.style.boxShadow = `0 0 ${60 * t}px ${this.rgba(c, 0.18 * t)}, 0 24px 80px rgba(0,0,0,0.5)`
          el.style.borderColor = this.rgba(c, 0.12 * t)
          el.classList.toggle('is-front', face > 0.95)
        } else {
          el.style.boxShadow = '0 24px 80px rgba(0,0,0,0.5)'
          el.style.borderColor = 'rgba(255,255,255,0.05)'
          el.classList.remove('is-front')
        }

        const dist = norm > 180 ? 360 - norm : norm
        if (dist < bestDist) { bestDist = dist; bestIdx = i }
      })

      this.dotEls.forEach((d, i) => d.classList.toggle('active', i === bestIdx))

      const bc = this.cards[bestIdx]
      this.$refs.currentNum.textContent = bc.num
      this.$refs.currentNum.style.color = bc.color
      this.$refs.currentTitle.textContent = bc.title

      const af = Math.max(0, Math.cos(((bestIdx * this.ANGLE_STEP + this.displayAngle) % 360) * Math.PI / 180))
      this.$refs.ambient.style.background =
        `radial-gradient(ellipse at 50% 55%, ${this.rgba(bc.color, 0.05 * af)} 0%, transparent 65%),` +
        `radial-gradient(ellipse at 20% 80%, ${this.rgba(bc.color, 0.025 * af)} 0%, transparent 50%)`

      this.rafId = requestAnimationFrame(this.tick)
    },

    rgba(hex, a) {
      return `rgba(${parseInt(hex.slice(1, 3), 16)},${parseInt(hex.slice(3, 5), 16)},${parseInt(hex.slice(5, 7), 16)},${a})`
    },

    bindEvents() {
      this.onWheel = (e) => {
        e.preventDefault()
        this.snapTo(e.deltaY > 0 ? -1 : 1)
      }
      window.addEventListener('wheel', this.onWheel, { passive: false })

      this.onTouchStart = (e) => {
        this.touchStartY = e.touches[0].clientY
        this.touchMoved = false
      }
      window.addEventListener('touchstart', this.onTouchStart, { passive: true })

      this.onTouchMove = (e) => {
        e.preventDefault()
        if (this.touchMoved) return
        const dy = this.touchStartY - e.touches[0].clientY
        if (Math.abs(dy) > 30) {
          this.touchMoved = true
          this.snapTo(dy > 0 ? -1 : 1)
        }
      }
      window.addEventListener('touchmove', this.onTouchMove, { passive: false })

      this.onKeydown = (e) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') this.snapTo(-1)
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') this.snapTo(1)
      }
      window.addEventListener('keydown', this.onKeydown)

      this.onResize = () => {
        this.RADIUS = window.innerWidth < 768 ? 380 : 500
        this.cardEls.forEach((el, i) => {
          el.style.transform = `rotateY(${i * this.ANGLE_STEP}deg) translateZ(${this.RADIUS}px)`
        })
      }
      window.addEventListener('resize', this.onResize)
    },

    startTick() {
      this.rafId = requestAnimationFrame(this.tick)
    }
  }
}
</script>

<style>
.test-root {
  font-family: 'DM Mono', monospace;
  background: #06060a;
  color: #eeeae2;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: fixed;
  inset: 0;
  z-index: 100;
}

.ambient {
  position: fixed; inset: 0;
  z-index: 0; pointer-events: none;
  transition: background 1.2s ease;
}

.grain {
  position: fixed; inset: 0;
  z-index: 1; pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
}

.scene {
  position: relative; z-index: 2;
  perspective: 1400px;
  width: 100%; height: 100%;
  display: flex; align-items: center; justify-content: center;
}

.arrow-btn {
  position: absolute; top: 50%; transform: translateY(-50%);
  z-index: 20;
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 50%; /* indicator-style circles */
  color: rgba(255,255,255,0.35);
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.arrow-btn:hover,
.arrow-btn:focus-visible {
  background: rgba(255,255,255,0.1);
  border-color: rgba(255,255,255,0.2);
  color: rgba(255,255,255,0.8);
}

.arrow-btn:active {
  transform: translateY(-50%) scale(0.9);
}

.arrow-btn svg {
  width: 20px; height: 20px;
}

.arrow-left  { left: max(24px, 5vw); }
.arrow-right { right: max(24px, 5vw); }

.carousel {
  position: relative;
  width: 300px; height: 420px;
  transform-style: preserve-3d;
}

.card {
  position: absolute;
  width: 300px; height: 420px;
  border-radius: 22px;
  background: #111118;
  border: 1px solid rgba(255,255,255,0.05);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  padding: 36px 30px 32px;
  display: flex; flex-direction: column; justify-content: space-between;
  overflow: hidden;
  transition: box-shadow 0.5s ease, border-color 0.5s ease;
}

.card-accent-bar {
  position: absolute; top: 0; left: 0; right: 0; height: 3px;
  border-radius: 22px 22px 0 0;
  background: var(--card-color);
  opacity: 0.7; transition: opacity 0.4s ease;
}

.card-glow {
  position: absolute; top: -40%; left: -20%; width: 140%; height: 80%;
  border-radius: 50%; background: var(--card-color);
  opacity: 0; filter: blur(80px); pointer-events: none;
  transition: opacity 0.6s ease;
}

.card.is-front .card-glow { opacity: 0.07; }
.card.is-front .card-accent-bar { opacity: 1; }

.card-bg-num {
  position: absolute; top: 16px; right: 20px;
  font-family: 'Syne', sans-serif;
  font-size: 80px; font-weight: 800; line-height: 1;
  color: var(--card-color); opacity: 0.05; pointer-events: none;
}

.card-header { display: flex; flex-direction: column; gap: 10px; }

.card-label {
  font-size: 10px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--card-color); opacity: 0.7;
}

.card-title {
  font-family: 'Syne', sans-serif;
  font-size: 32px; font-weight: 700;
  line-height: 1.15; letter-spacing: -0.01em;
}

.card-title-en {
  font-family: 'Syne', sans-serif;
  font-size: 13px; font-weight: 600;
  letter-spacing: 0.08em; text-transform: uppercase;
  color: #5a5550; margin-top: 4px;
}

.card-footer { display: flex; flex-direction: column; gap: 14px; }

.card-divider { width: 36px; height: 1px; background: var(--card-color); opacity: 0.35; }

.card-desc {
  font-size: 12.5px; font-weight: 300;
  line-height: 1.7; color: #5a5550; max-width: 220px;
}

.card-meta { display: flex; align-items: center; justify-content: space-between; }

.card-tag {
  font-size: 9px; letter-spacing: 0.25em;
  text-transform: uppercase; color: #5a5550; opacity: 0.6;
}

.card-index {
  font-family: 'Syne', sans-serif;
  font-size: 11px; font-weight: 600;
  color: var(--card-color); opacity: 0.5;
}

.header {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 10; pointer-events: none;
  padding: 36px 48px;
  display: flex; align-items: center; justify-content: space-between;
}

.logo {
  font-family: 'Syne', sans-serif;
  font-size: 13px; font-weight: 800;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: #eeeae2; opacity: 0.6;
}

.header-label {
  font-size: 10px; letter-spacing: 0.25em;
  text-transform: uppercase; color: #5a5550; opacity: 0.4;
}

.indicator {
  position: fixed; right: 40px; top: 50%;
  transform: translateY(-50%);
  display: flex; flex-direction: column; align-items: flex-end; gap: 6px;
  z-index: 10; pointer-events: none;
}

.dot-track {
  width: 28px; height: 3px; border-radius: 2px;
  background: rgba(255,255,255,0.06);
  position: relative; overflow: hidden;
  transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
}

.dot-fill {
  position: absolute; inset: 0; border-radius: 2px;
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.4s cubic-bezier(0.22,1,0.36,1), background 0.4s ease;
}

.dot-track.active { width: 40px; }
.dot-track.active .dot-fill { transform: scaleX(1); }

.bottom-bar {
  position: fixed; bottom: 0; left: 0; right: 0;
  z-index: 10; pointer-events: none;
  padding: 0 48px 36px;
  display: flex; align-items: flex-end; justify-content: space-between;
}

.scroll-hint {
  font-size: 10px; letter-spacing: 0.25em;
  text-transform: uppercase; color: #5a5550; opacity: 0.35;
  display: flex; align-items: center; gap: 12px;
}

.scroll-line {
  width: 24px; height: 1px; background: #5a5550;
  animation: scrollPulse 2s ease-in-out infinite;
}

@keyframes scrollPulse {
  0%,100% { opacity: 0.2; transform: scaleX(0.6); }
  50% { opacity: 0.8; transform: scaleX(1); }
}

.current-display { text-align: right; }

.current-num {
  font-family: 'Syne', sans-serif;
  font-size: 42px; font-weight: 800; line-height: 1;
  transition: color 0.5s ease;
}

.current-title {
  font-family: 'Syne', sans-serif;
  font-size: 12px; font-weight: 600;
  letter-spacing: 0.15em; text-transform: uppercase;
  color: #5a5550; margin-top: 6px;
}

.floor {
  position: fixed; bottom: 0; left: 0; right: 0; height: 30vh;
  z-index: 1; pointer-events: none;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%);
}

@media (max-width: 768px) {
  .card { width: 240px; height: 340px; padding: 28px 22px 24px; }
  .carousel { width: 240px; height: 340px; }
  .card-title { font-size: 24px; }
  .card-bg-num { font-size: 56px; }
  .indicator { right: 16px; }
  .header { padding: 24px; }
  .bottom-bar { padding: 0 24px 24px; }
  .current-num { font-size: 32px; }
  .arrow-left  { left: 8px; }
  .arrow-right { right: 8px; }
  .arrow-btn { width: 36px; height: 36px; }
  .arrow-btn svg { width: 16px; height: 16px; }
}
</style>
