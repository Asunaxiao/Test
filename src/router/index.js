import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'
import Info from '@/components/Info.vue'
import VueRouter from 'vue-router'


Vue.use(Router)
const routes = [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    },
  ]
  const router = new VueRouter({
    routes,
    mode:'history',
    linkActiveClass:'active'
  }) 
  router.beforeEach((to, from, next) => {
    if (to.path === "/login") return next()
    const token = window.localStorage.getItem("token")
    if(!token) {
      return next('/login')
       }else{
         next()
      }
  })
  export default router