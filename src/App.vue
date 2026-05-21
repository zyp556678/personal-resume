<template>
  <div id="app">

    <!-- BACKGROUND EFFECTS -->
    <div v-if="!isLanding && !isResume && !isTest" class="bg-layer" aria-hidden="true">
      <div class="bg-shape bg-shape-1"></div>
      <div class="bg-shape bg-shape-2"></div>
      <div class="bg-shape bg-shape-3"></div>
      <div class="bg-shape bg-shape-4"></div>
      <div class="bg-cursor-glow"></div>
      <div class="bg-dot-grid"></div>
    </div>

    <!-- NAV -->
    <nav v-if="!isLanding && !isResume && !isTest" class="navbar">
      <div class="nav-inner">
        <router-link to="/" class="nav-logo">ZYP</router-link>
        <ul class="nav-links">
          <li><router-link to="/resume#about">关于</router-link></li>
          <li><router-link to="/resume#education">教育</router-link></li>
          <li><router-link to="/resume#skills">技能</router-link></li>
          <li><router-link to="/resume#projects">项目</router-link></li>
          <li><router-link to="/resume#experience">经历</router-link></li>
          <li><router-link to="/resume#evaluation">评价</router-link></li>
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

    <!-- ROUTER VIEW -->
    <router-view />

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
  computed: {
    isLanding() {
      return this.$route && this.$route.path === '/'
    },
    isResume() {
      return this.$route && this.$route.path === '/resume'
    },
    isTest() {
      return this.$route && this.$route.path === '/test'
    }
  },
  mounted() {
    this.applyTheme();
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
