import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Reg from '@/components/Reg'
import Login from '@/components/Login'
import Index from '@/components/Index'
import Intro from '@/components/Intro'
import Article from '@/components/Article'
import Message from '@/components/Message'
import Note from '@/components/Note'
import Administrator from '@/components/Administrator'
import Editor from '@/components/Editor'
import Manage from '@/components/Manage'

Vue.use(Router)

 const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: '前端博客_web前端开发工程个人主页_陈传宝博客'
      },
      component: Home
    },
    {
      path: '/administrator',
      name: 'administrator',
      component: Administrator,
      children:[
      	{
	      path: '/manage',
	      name: 'manage',
	      component: Manage
	    },
      	{
	      path: '/editor',
	      name: 'editor',
	      component: Editor
	    }
      ]
    },
     {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
     {
      path: '/login',
      name: 'login',
      component:Login
    },
     {
      path: '/index',
      name: 'index',
       meta: {
        title: '前端博客_web前端开发工程个人主页_陈传宝博客'
      },
      component:Index,
      children:[
      	{
	      path: '/article',
	      name: 'articles',
        meta: {
        title: '文章列表-陈传宝博客'
        },
	      component:Article
	    },
      	{
	      path: '/intro',
	      name: 'intro',
	      component:Intro
	    },
	    {
	      path: '/message',
	      name: 'message',
	      component:Message
	    },
	    {
	      path: '/note/:id',
	      name: 'note',
	      component:Note
	    }
      ]
    }
  ]
})


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router