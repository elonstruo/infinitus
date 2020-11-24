import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)
/*  
    路由带参数规则
    模式	匹配路径	$route.params
    path: /user/:username	            /user/:username/post/:post_id
    浏览器路径：/user/evan	           /user/evan/post/123
    参数： { username: 'evan' }        { username: 'evan', post_id: '123' }
*
*
*
    想要导航到不同的 URL，则使用 router.push 方法
    router.push({ name: 'user', params: { userId }}) // -> /user/123
    router.push({ path: `/user/${userId}` }) // -> /user/123
    <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
*/

const router =  new Router({
  mode: 'history',
  routes: [
    { path: '/', redirect: '/home'},
    { 
      path: '/home', 
      name: 'Home', 
      component: Home,
      children: [
        { path: '/home', redirect: '/home/index'},
        { path: 'index', name: 'index', meta: {title: "buyfun"}, component: ()=>import('../views/index')},
        { path: 'logistics', name: 'logistics', meta: {title: "buyfun"}, component: ()=>import('../views/logistics')},
        { path: 'my', name: 'my', meta: {title: "buyfun"}, component: ()=>import('../views/my')},
      ],
      //局部守卫
      beforeEnter: (to, from, next) => {
        console.log(123)
        next()
      }
      
    },
    { path: '/login', name: 'login', meta: {title: "buyfun"}, component: ()=>import('../views/login')},

  ]

})
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
// router.beforeEach((to, from, next) => {
//   if(to.path !== '/login') {
//     if(window.isLogin) {
//       next()
//     } else {
//       next('/login?redirect='+ to.path)
//     }
//   } else {
//     next()
//   }
//   next()
// })

router.afterEach((to, from) => {
  console.log(to.meta.title)
})
export default router

