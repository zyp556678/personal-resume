<template>
  <div class="hyper" ref="root">

    <!-- OVERLAYS -->
    <div class="hyper-scanlines"></div>
    <div class="hyper-vignette"></div>
    <div class="hyper-noise"></div>

    <!-- HUD -->
    <div class="hyper-hud">
      <div class="hyper-hud-top">
        <span>SYS.READY</span>
        <div class="hyper-hud-line"></div>
        <span>FPS: <strong>{{ fps }}</strong></span>
      </div>
      <div class="hyper-hud-center">
        SCROLL VELOCITY // <strong>{{ velocityDisplay }}</strong>
      </div>
      <div class="hyper-hud-bottom">
        <span>COORD: <strong>{{ coordDisplay }}</strong></span>
        <div class="hyper-hud-line"></div>
        <router-link to="/resume" class="hyper-hud-cta">VIEW RESUME →</router-link>
      </div>
    </div>

    <!-- 3D VIEWPORT -->
    <div class="hyper-viewport" ref="viewport">
      <div class="hyper-world" ref="world"></div>
    </div>

  </div>
</template>

<script>
import Lenis from 'lenis'

export default {
  name: 'LandingPage',
  data() {
    return {
      fps: 60,
      velocityDisplay: '0.00',
      coordDisplay: '000.000',
      lenis: null,
      rafId: null,
      scrollProxy: null,
      items: [],
      state: {
        scroll: 0,
        velocity: 0,
        targetSpeed: 0,
        mouseX: 0,
        mouseY: 0
      },
      config: {
        itemCount: 20,
        starCount: 150,
        zGap: 800,
        camSpeed: 2.5,
        loopSize: 0
      }
    }
  },
  created() {
    this.config.loopSize = this.config.itemCount * this.config.zGap
  },
  mounted() {
    // Apply dark background to html and body
    document.documentElement.style.background = '#030303'
    document.body.style.background = '#030303'

    // Create scroll proxy at body level (outside overflow:hidden)
    this.scrollProxy = document.createElement('div')
    this.scrollProxy.className = 'hyper-scroll-proxy'
    document.body.appendChild(this.scrollProxy)

    this.initWorld()
    this.initLenis()
    this.initEvents()
    this.startLoop()
  },
  beforeUnmount() {
    if (this.lenis) this.lenis.destroy()
    if (this.rafId) cancelAnimationFrame(this.rafId)
    window.removeEventListener('mousemove', this.onMouseMove)

    // Remove scroll proxy
    if (this.scrollProxy && this.scrollProxy.parentNode) {
      this.scrollProxy.parentNode.removeChild(this.scrollProxy)
    }

    // Reset background
    document.documentElement.style.background = ''
    document.body.style.background = ''
  },
  methods: {
    initWorld() {
      const world = this.$refs.world
      if (!world) return

      const texts = [
        '张宇鹏', '后端', '构建者', '可靠', '成长'
      ]

      const cards = [
        { title: '张宇鹏', sub: '黑龙江科技大学 · 软件工程 · 2023 级', id: 'INTRO-001' },
        { title: '我在做什么', sub: '专注 Java 后端开发，用 Spring 生态构建可靠的分布式系统', id: 'INTRO-002' },
        { title: '鲲鹏外卖', sub: '从零搭建的外卖点餐平台，后端全模块开发', id: 'PRJ-001' },
        { title: '悦物商城', sub: 'Spring Cloud 微服务电商，高并发场景优化', id: 'PRJ-002' },
        { title: '穿戴管家', sub: '跨平台衣橱管理 App，省级大创项目结题', id: 'PRJ-003' },
        { title: 'Java', sub: '主力语言，扎实的基础与工程实践', id: 'STACK-001' },
        { title: 'Spring 生态', sub: 'Boot · Cloud · MVC · MyBatis-Plus', id: 'STACK-002' },
        { title: '数据层', sub: 'MySQL · Redis · Elasticsearch', id: 'STACK-003' },
        { title: '中间件', sub: 'RabbitMQ · Nacos · Redisson', id: 'STACK-004' },
        { title: '工程化', sub: 'Docker · Git · CI/CD · Linux', id: 'STACK-005' },
        { title: '代码习惯', sub: '良好的编程习惯，快速学习新技术的能力', id: 'BELIEF-001' },
        { title: '责任感', sub: '在复杂环境中保持冷静思考', id: 'BELIEF-002' },
        { title: '团队协作', sub: '善于沟通，促进团队合作氛围', id: 'BELIEF-003' },
        { title: '目标', sub: '成为能独当一面的后端工程师', id: 'GOAL-001' },
        { title: '状态', sub: '大三在读 · Open to Work', id: 'GOAL-002' }
      ]

      let cardIdx = 0

      for (let i = 0; i < this.config.itemCount; i++) {
        const el = document.createElement('div')
        el.className = 'hyper-item'

        const isHeading = i % 4 === 0

        if (isHeading) {
          const txt = document.createElement('div')
          txt.className = 'hyper-big-text'
          txt.innerText = texts[i % texts.length]
          el.appendChild(txt)
          this.items.push({
            el, type: 'text',
            x: 0, y: 0, rot: 0,
            baseZ: -i * this.config.zGap
          })
        } else {
          const card = document.createElement('div')
          card.className = 'hyper-card'
          const c = cards[cardIdx % cards.length]
          cardIdx++

          card.innerHTML = `
            <div class="hyper-card-header">
              <span class="hyper-card-id">${c.id}</span>
              <div class="hyper-card-dot"></div>
            </div>
            <h2>${c.title}</h2>
            <p class="hyper-card-sub">${c.sub}</p>
            <div class="hyper-card-footer">
              <span>GRID: ${Math.floor(Math.random() * 10)}x${Math.floor(Math.random() * 10)}</span>
              <span>DATA: ${(Math.random() * 100).toFixed(1)}MB</span>
            </div>
            <div class="hyper-card-watermark">0${i}</div>
          `
          el.appendChild(card)

          const angle = (i / this.config.itemCount) * Math.PI * 6
          const x = Math.cos(angle) * (window.innerWidth * 0.3)
          const y = Math.sin(angle) * (window.innerHeight * 0.3)
          const rot = (Math.random() - 0.5) * 30

          this.items.push({
            el, type: 'card',
            x, y, rot,
            baseZ: -i * this.config.zGap
          })
        }
        world.appendChild(el)
      }

      // Stars
      for (let i = 0; i < this.config.starCount; i++) {
        const el = document.createElement('div')
        el.className = 'hyper-star'
        world.appendChild(el)
        this.items.push({
          el, type: 'star',
          x: (Math.random() - 0.5) * 3000,
          y: (Math.random() - 0.5) * 3000,
          baseZ: -Math.random() * this.config.loopSize
        })
      }
    },

    initLenis() {
      this.lenis = new Lenis({
        smooth: true,
        lerp: 0.08,
        duration: 1.2,
        gestureDirection: 'vertical',
        smoothTouch: true
      })

      this.lenis.on('scroll', ({ scroll, velocity }) => {
        this.state.scroll = scroll
        this.state.targetSpeed = velocity
      })
    },

    initEvents() {
      window.addEventListener('mousemove', this.onMouseMove)
    },

    onMouseMove(e) {
      this.state.mouseX = (e.clientX / window.innerWidth - 0.5) * 2
      this.state.mouseY = (e.clientY / window.innerHeight - 0.5) * 2
    },

    startLoop() {
      let lastTime = 0

      const loop = (time) => {
        if (this.lenis) this.lenis.raf(time)

        const delta = time - lastTime
        lastTime = time
        if (time % 10 < 1 && delta > 0) {
          this.fps = Math.round(1000 / delta)
        }

        this.state.velocity += (this.state.targetSpeed - this.state.velocity) * 0.1

        this.velocityDisplay = Math.abs(this.state.velocity).toFixed(2)
        this.coordDisplay = this.state.scroll.toFixed(0).padStart(6, '0')

        // Camera tilt
        const tiltX = this.state.mouseY * 5 - this.state.velocity * 0.5
        const tiltY = this.state.mouseX * 5
        const world = this.$refs.world
        const viewport = this.$refs.viewport

        if (world) {
          world.style.transform = `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
        }

        // Dynamic FOV
        if (viewport) {
          const baseFov = 1000
          const fov = baseFov - Math.min(Math.abs(this.state.velocity) * 10, 600)
          viewport.style.perspective = `${fov}px`
        }

        // Items
        const cameraZ = this.state.scroll * this.config.camSpeed
        const modC = this.config.loopSize

        this.items.forEach(item => {
          let relZ = item.baseZ + cameraZ
          let vizZ = ((relZ % modC) + modC) % modC
          if (vizZ > 500) vizZ -= modC

          let alpha = 1
          if (vizZ < -3000) alpha = 0
          else if (vizZ < -2000) alpha = (vizZ + 3000) / 1000
          if (vizZ > 100 && item.type !== 'star') alpha = 1 - (vizZ - 100) / 400
          if (alpha < 0) alpha = 0

          item.el.style.opacity = alpha

          if (alpha > 0) {
            let trans = `translate3d(${item.x}px, ${item.y}px, ${vizZ}px)`

            if (item.type === 'star') {
              const stretch = Math.max(1, Math.min(1 + Math.abs(this.state.velocity) * 0.1, 10))
              trans += ` scale3d(1, 1, ${stretch})`
            } else if (item.type === 'text') {
              trans += ` rotateZ(${item.rot}deg)`
              if (Math.abs(this.state.velocity) > 1) {
                const offset = this.state.velocity * 2
                item.el.style.textShadow = `${offset}px 0 red, ${-offset}px 0 cyan`
              } else {
                item.el.style.textShadow = 'none'
              }
            } else {
              const t = time * 0.001
              const float = Math.sin(t + item.x) * 10
              trans += ` rotateZ(${item.rot}deg) rotateY(${float}deg)`
            }

            item.el.style.transform = trans
          }
        })

        this.rafId = requestAnimationFrame(loop)
      }

      this.rafId = requestAnimationFrame(loop)
    }
  }
}
</script>
