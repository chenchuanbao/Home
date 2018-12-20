// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$axios = axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import VueQuillEditor from 'vue-quill-editor'
import qs from 'qs'
Vue.use(VueQuillEditor)
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import 'github-markdown-css/github-markdown.css'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(mavonEditor)

import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

