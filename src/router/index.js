import  Vue from  'vue'
import  VueRouter from 'vue-router'
import  Login  from "../components/Login"
Vue.use(VueRouter)

//配置路由跳转路径
const routes = [
  {path: '/',name:'login',component:Login},
  {path: '/login',name:'login',component:Login}
]
//实例化路由
const router = new VueRouter({
  mode: 'history',
  routes})

//配置路由拦截
router.beforeEach((to, from, next) => {
  // 1. 判断是不是登录页面
  // 是登录页面
  if( to.path==="/" ||to.path === '/login' ) {
    next()
  } else {
    // 不是登录页面
    //  判断是否登录过
    let token = localStorage.getItem('token')
    token ===""? next() : next('/login')
  }
})
//导出路由
export  default  router;
