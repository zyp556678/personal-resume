import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import ResumePage from '../views/ResumePage.vue'
import TestPage from '../views/TestPage.vue'

const routes = [
  { path: '/', name: 'landing', component: LandingPage },
  { path: '/resume', name: 'resume', component: ResumePage },
  { path: '/test', name: 'test', component: TestPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      const offset = 64
      const el = document.querySelector(to.hash)
      if (el) {
        return { top: el.offsetTop - offset, behavior: 'smooth' }
      }
    }
    return { top: 0 }
  }
})

export default router
