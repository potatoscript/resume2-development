import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
const routes = [
  {
    path: '/',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/skill',
    name: 'skill',
    component: () => import('../views/SkillView.vue')
  },
  {
    path: '/sample',
    name: 'sample',
    component: () => import('../views/SampleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router