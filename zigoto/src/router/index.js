import { createRouter, createWebHistory } from 'vue-router'
import accueilVue from '../views/accueilVue.vue'
import maucheVue from '../views/maucheVue.vue'
import mapVue from '../views/mapVue.vue'

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
  },
  {
    path: '/map',
    name: 'map',
    component: mapVue
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
