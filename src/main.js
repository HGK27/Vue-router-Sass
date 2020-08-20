import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import App from './App.vue'
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import About from './components/About.vue'
import Portfolio from './components/Portfolio.vue'

const router = new VueRouter({
  routes: [
    { path: '/', name: Home, component: Home },
    { path: '/Blog', name: Blog, component: Blog },
    { path: '/Contact', name: Contact, component: Contact },
    { path: '/About', name: About, component: About },
    { path: '/Portfolio', name: Portfolio, component: Portfolio }
  ],
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
