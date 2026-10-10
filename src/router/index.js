import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ResumePage from '../views/ResumePage.vue'
import ReposPage from '../views/ReposPage.vue'
import TestPage from '../views/TestPage.vue'

const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/resume', name: 'resume', component: ResumePage },
  { path: '/repos', name: 'repos', component: ReposPage },
  { path: '/test', name: 'test', component: TestPage }
]

const scrollToEl = (el, offset) =>
  el ? { top: el.getBoundingClientRect().top + window.scrollY - offset } : null

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      const res = scrollToEl(document.querySelector(to.hash), 64)
      if (res) return res
    }
    // /repos?r=<repo> is handled inside ReposPage, after webfonts settle.
    if (to.query && to.query.r) return false
    return { top: 0 }
  }
})

export default router
