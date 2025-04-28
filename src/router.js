import { createRouter, createWebHistory } from 'vue-router'
import DialogPage from './pages/DialogPage.vue'
import VideoPage from './pages/VideoPage.vue'
import CardGalleryPage from './pages/CardGalleryPage.vue'

const routes = [
  { path: '/', redirect: '/dialog' },
  { path: '/dialog', component: DialogPage },
  { path: '/video', component: VideoPage },
  { path: '/cards', component: CardGalleryPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
