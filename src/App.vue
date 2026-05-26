<template>
  <div id="app">
    <!-- Apple-style sticky blur nav (always visible) -->
    <nav v-if="showNav" class="navbar" aria-label="Primary">
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
          {{ darkMode ? 'Light' : 'Dark' }}
        </button>
      </div>
    </nav>

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
    showNav() {
      // Show nav globally; landing has its own (we hide here to avoid duplicate)
      return this.$route && this.$route.path !== '/'
    }
  },
  mounted() {
    // Restore preference if any
    const stored = localStorage.getItem('zyp-theme')
    if (stored === 'dark') this.darkMode = true
    this.applyTheme()
  },
  methods: {
    toggleTheme() {
      this.darkMode = !this.darkMode
      this.applyTheme()
      localStorage.setItem('zyp-theme', this.darkMode ? 'dark' : 'light')
    },
    applyTheme() {
      document.body.classList.toggle('dark-mode', this.darkMode)
      document.body.classList.toggle('light-mode', !this.darkMode)
    }
  }
}
</script>

<style>
/* 样式见 style.css */
</style>
