import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import Home from '@/views/home.vue'
import Vuex from '@/views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    alias: '/',
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('@/views/axios.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
