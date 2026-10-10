<template>
  <div
    class="deck"
    @mouseenter="paused = true"
    @mouseleave="paused = false"
    @focusin="paused = true"
    @focusout="paused = false"
  >
    <div class="deck-stage">
      <router-link
        v-for="(repo, i) in order"
        :key="repo.name"
        :to="{ path: '/repos', query: { r: repo.name } }"
        class="deck-card"
        :class="posClass(i)"
        :style="cardStyle(i)"
        :aria-hidden="i !== active ? 'true' : 'false'"
        :tabindex="i === active ? 0 : -1"
      >
        <div class="deck-head">
          <span class="deck-idx">{{ String(i + 1).padStart(2, '0') }}</span>
          <span class="deck-kind">{{ repo.kind }}</span>
          <span class="deck-when">{{ repo.when }}</span>
        </div>
        <h3 class="deck-title">{{ repo.title }}</h3>
        <p class="deck-sub">{{ repo.sub }}</p>
        <div class="deck-bar">
          <span
            v-for="l in repo.langs"
            :key="l.name"
            class="deck-seg"
            :style="{ width: l.pct + '%', background: langColor(l.name) }"
          ></span>
        </div>
        <div class="deck-foot">
          <span class="deck-lang">{{ repo.langs[0].name }} {{ repo.langs[0].pct }}%</span>
          <span class="deck-go">查看 <i class="fas fa-arrow-down"></i></span>
        </div>
      </router-link>
    </div>

    <div class="deck-controls">
      <button class="deck-btn" aria-label="上一个" @click="prev">
        <i class="fas fa-chevron-up"></i>
      </button>
      <div class="deck-dots">
        <button
          v-for="(repo, i) in order"
          :key="repo.name"
          class="deck-dot"
          :class="{ on: i === active }"
          :aria-label="`查看 ${repo.title}`"
          :aria-current="i === active"
          @click="go(i)"
        ></button>
      </div>
      <button class="deck-btn" aria-label="下一个" @click="next">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { ALL_REPOS, langColor } from '../data/repos.js'

export default {
  name: 'RepoCarousel',
  props: {
    interval: { type: Number, default: 3600 }
  },
  data() {
    return {
      active: 0,
      paused: false,
      timer: null,
      order: ALL_REPOS
    }
  },
  mounted() {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) this.start()
  },
  beforeUnmount() {
    this.stop()
  },
  methods: {
    langColor,
    start() {
      this.stop()
      this.timer = setInterval(() => {
        if (!this.paused) this.next()
      }, this.interval)
    },
    stop() {
      if (this.timer) clearInterval(this.timer)
      this.timer = null
    },
    next() { this.active = (this.active + 1) % this.order.length },
    prev() { this.active = (this.active - 1 + this.order.length) % this.order.length },
    go(i) { this.active = i },
    /* relative offset: -1 = going up (previous), 0 = active, 1 = down (next) */
    offset(i) {
      const n = this.order.length
      let d = i - this.active
      if (d > n / 2) d -= n
      if (d < -n / 2) d += n
      return d
    },
    posClass(i) {
      const d = this.offset(i)
      if (d === 0) return 'is-active'
      if (d === -1) return 'is-prev'
      if (d === 1) return 'is-next'
      return 'is-hidden'
    },
    cardStyle(i) {
      const d = this.offset(i)
      const abs = Math.abs(d)
      if (abs > 1) return { display: 'none' }
      const scale = d === 0 ? 1 : 0.94
      const y = d === 0 ? 0 : d * 50 // ±50% of card height
      const z = 10 - abs
      const op = d === 0 ? 1 : 0.5
      return {
        transform: `translateY(${y}%) scale(${scale})`,
        zIndex: z,
        opacity: op
      }
    }
  }
}
</script>
