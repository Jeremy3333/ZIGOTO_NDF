import { createRouter, createWebHistory } from 'vue-router'
import testVue from '../views/testVue.vue'
import maucheVue from '../views/maucheVue.vue'

const routes = [
  {
    path: '/test',
    name: 'test',
    component: testVue
  },
  {
    path: '/mauche',
    name: 'mauche',
    component: maucheVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
