/*路由*/
import Vue from 'vue'
import VueRouter  from 'vue-router'


import Msite from '../pages/Msite/Msite'
import Profile from '../pages/Profile/Profile'
import Classes from '../pages/Classes/Classes'
import Detail from '../pages/Detail/Detail'
import Shopcart from '../pages/Shopcart/Shopcart'
import Interlayer from '../pages/Interlayer/Interlayer'
import CateList from '../pages/Classes/CateList/CateList'



Vue.use(VueRouter)

export default new VueRouter({
  routes : [
    {
      path : '/msite',
      component : Msite,
      meta : {
        footerShow:true
      }
    },
    {
      path : '/detail',
      component : Detail,
      meta : {
        footerShow:true
      }
    },
    {
      path : '/classes',
      component : Classes,
      meta : {
        footerShow:true
      },
      children: [
        {
          path: '/classes/cateList/:id',
          component: CateList,
          meta : {
            footerShow:true
          },
        }
      ]
    },
    {
      path : '/shopcart',
      component : Shopcart,
      meta : {
        footerShow:true
      }
    },
    {
      path : '/profile',
      component : Profile,
    },
    {
      path : '/interlayer',
      component : Interlayer,
    },
    {
      path: '/',
      redirect: '/interlayer'
    },
  ]
})


