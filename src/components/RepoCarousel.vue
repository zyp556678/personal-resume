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
        :class="{ 'is-active': i === nearest }"
        :style="cardStyle(i)"
        :aria-hidden="isHidden(i) ? 'true' : 'false'"
        :tabindex="isHidden(i) ? -1 : 0"
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
      <button class="deck-btn" aria-label="上一个" @click="nudge(-1)">
        <i class="fas fa-chevron-up"></i>
      </button>
      <div class="deck-dots">
        <button
          v-for="(repo, i) in order"
          :key="repo.name"
          class="deck-dot"
          :class="{ on: i === nearest }"
          :aria-label="`跳到 ${repo.title}`"
          @click="goTo(i)"
        ></button>
      </div>
      <button class="deck-btn" aria-label="下一个" @click="nudge(1)">
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
  </div>
</template>

<script>
import { ALL_REPOS, langColor } from '../data/repos.js'

/* Cards fade out by |distance| = FADE, which sets how much vertical
   room the stage must reserve (see --deck-fade in the stylesheet). */
const FADE = 1.6

export default {
  name: 'RepoCarousel',
  props: {
    /* ms for one card to travel one slot */
    stepMs: { type: Number, default: 2800 }
  },
  data() {
    return {
      order: ALL_REPOS,
      pos: 0,          // continuous position, in cards (float)
      tween: null,     // target when easing after a click
      paused: false,
      raf: null,
      last: 0,
      reduced: false
    }
  },
  computed: {
    count() { return this.order.length },
    nearest() {
      const n = Math.round(this.pos) % this.count
      return (n + this.count) % this.count
    }
  },
  mounted() {
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!this.reduced) {
      this.last = performance.now()
      this.raf = requestAnimationFrame(this.tick)
    }
  },
  beforeUnmount() {
    if (this.raf) cancelAnimationFrame(this.raf)
  },
  methods: {
    langColor,
    tick(ts) {
      const dt = Math.min(ts - this.last, 64)
      this.last = ts

      if (this.tween != null) {
        this.pos += (this.tween - this.pos) * Math.min(1, dt / 240)
        if (Math.abs(this.tween - this.pos) < 0.002) {
          this.pos = this.tween
          this.tween = null
        }
      } else if (!this.paused) {
        this.pos += dt / this.stepMs
      }

      this.raf = requestAnimationFrame(this.tick)
    },

    /* signed distance from the current position to card i, folded into
       [-count/2, count/2] so the deck wraps at both ends */
    dist(i) {
      const n = this.count
      let x = (i - this.pos) % n
      if (x < -n / 2) x += n
      if (x >= n / 2) x -= n
      return x
    },

    isHidden(i) { return Math.abs(this.dist(i)) > FADE },

    cardStyle(i) {
      const x = this.dist(i)
      const ax = Math.abs(x)
      if (ax > FADE) return { display: 'none' }

      // opacity: 1 at centre, 0.5 one slot away, 0 at the fade edge
      const opacity = ax <= 1 ? 1 - 0.5 * ax : 0.5 * ((FADE - ax) / (FADE - 1))

      return {
        transform: `translateY(${x * 50}%) scale(${1 - Math.min(ax, 1) * 0.06})`,
        zIndex: 100 - Math.round(ax * 50),
        opacity
      }
    },

    /* Ease to the slot nearest the given index, taking the short way round. */
    goTo(i) {
      const n = this.count
      const cur = this.tween != null ? this.tween : this.pos
      this.tween = i + Math.round((cur - i) / n) * n
      if (this.reduced) this.settleNow()
    },

    nudge(dir) {
      if (this.reduced) {
        this.pos = Math.round(this.pos) + dir
        return
      }
      const cur = this.tween != null ? this.tween : this.pos
      this.tween = dir > 0 ? Math.ceil(cur + 0.0001) : Math.floor(cur - 0.0001)
    },

    /* Reduced motion: jump straight to the target instead of easing. */
    settleNow() {
      this.pos = this.tween
      this.tween = null
    }
  }
}
</script>
