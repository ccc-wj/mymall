import Vue from 'vue'
import VueRouter from 'vue-router'
const home=()=>import('../views/home/home.vue')
const category=()=>import('../views/category/category.vue')
const me=()=>import('../views/me/me.vue')
const shopcart=()=>import('../views/shopcart/shopcart.vue')
const detail=()=>import('../views/detail/detail.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'home',
    component:home,
  },
  {
    path: '/category',
    
    component:category
  },
  {
    path: '/me',
    
    component:me
  },
  {
    path: '/shopcart',
    component:shopcart
  },
  {
    path: '/detail/:id',
    component:detail
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
