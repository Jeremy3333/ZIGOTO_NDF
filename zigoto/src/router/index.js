import { createRouter, createWebHistory } from 'vue-router'
import accueilVue from '../views/accueilVue.vue'
import maucheVue from '../views/maucheVue.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: accueilVue
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
