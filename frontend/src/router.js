import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('@/views/home/LandingPage.vue'),
  },
  {
    path: '/join/:roomId?',
    name: 'joinGame',
    component: () => import('@/views/game/JoinGame.vue'),
  },
  {
    path: '/room/:roomId',
    name: 'LobbyGame',
    component: () => import('@/views/game/LobbyGame.vue')
  },
  {
    path: '/game/:roomId',
    name: 'Game',
    component: () => import('@/views/game/Game.vue')
  },
  {
    path: '/results/:roomId',
    name :'Results',
    component : () => import('@/views/Result.vue')
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
