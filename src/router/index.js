import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },

    {
      path: '/troubleshooter',
      name: 'troubleshooter',
      component: () => import('../views/TroubleshooterView.vue')
    },
  ],
})

export default router
