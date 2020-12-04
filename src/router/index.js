import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Search from '@/components/Search'
import AddLots from '@/components/AddLots'
import cont from '@/components/cont'
Vue.use(Router)
export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/cont',
      name: 'cont',
      component: cont
    },
    {
      path: '/addLots',
      name: 'addLots',
      component: AddLots
    },
  ]
})
