import { createRouter, createWebHistory } from 'vue-router'
import testVue from '../views/testVue.vue'

const routes = [
  {
    path: '/test',
    name: 'test',
    component: testVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
