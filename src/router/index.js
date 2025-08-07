import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
import GX2view from'../views/GX2.vue'
import Teimpoview from '../views/Tiempo.vue'
import vaporview from '../views/vapor.vue'
import aboutview from ' ../views/about.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gx2',
      name: 'gxz',
      component: GX2view,
    },
    {
      path: '/tiempo',
      name: 'tiempo',
      component: Teimpoview,
    },
    {
      path: '/vapor',
      name: 'vapor',
      component: vaporview,
    },
    {
      path: '/About',
      name: 'about',
      component: Aboutview,
    }
  ],
})

export default router
