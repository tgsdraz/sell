import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import goods from '../components/goods'
import rating from '../components/rating'
import sellers from '../components/sellers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/goods',
      name: 'goods',
      component:goods
    },
    {
      path:'/rating',
      name:'rating',
      component:rating
    },
    {
      path:'/sellers',
      name:'sellers',
      component:sellers
    },
    {
      path: '/',
      name: 'goods',
      component:goods
    },
  ]
})
