import { createRouter, createWebHistory } from 'vue-router'
import ProfileView from '../views/ProfileView.vue'
import SkillView from '../views/SkillView.vue'
import SampleView from '../views/SampleView.vue'
const routes = [
  {
    path: '/',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/',
    name: 'skill',
    component: SkillView
    // component: () => import('../views/SkillView.vue')
  },
  {
    path: '/',
    name: 'sample',
    component: SampleView
  },
  {
    path: '/',
    name: 'codility',
    component: () => import('../views/CodilityView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router