import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 一级路由
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
import Admin from '../components/Admin.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Rest from '../components/Rest.vue'


// 二级路由
import Act from '../components/about/Act.vue'
import Cat from '../components/about/Cat.vue'
import Del from '../components/about/Del.vue'
import His from '../components/about/His.vue'

// 三极路由

import Ars from '../components/about/cat/Ars.vue'
import Per from '../components/about/cat/Per.vue'
import Tel from '../components/about/cat/Tel.vue'

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component:Home 
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu 
    },
    {
      path:'/rest',
      name:'Rest',
      component:Rest 
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin 
    },
    {
      path:'/about',
      name:'About',
      component:About ,
      redirect:'/act',
      children:[
        {
          path:'/act',
          name:'Act',
          component:Act ,
        },
        {
          path:'/cat',
          name:'Cat',
          component:Cat ,
          redirect:'/per',
          children:[
            {
              path:'/ars',
              name:'Ars',
              component:Ars ,
            },
            {
              path:'/per',
              name:'Per',
              component:Per ,
            },
            {
              path:'/tel',
              name:'Tel',
              component:Tel ,
            },
          ]
        },
            {
          path:'/del',
          name:'Del',
          component:Del ,
        },
          {
          path:'/his',
          name:'His',
          component:His ,
        },
        
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login 
    },
    {
      path:'/register',
      name:'Register',
      component:Register 
    },
  ],
  mode:'history'
})
