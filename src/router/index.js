import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import antUpload from '@/views/antUpload/antUpload'
import slide from '@/views/slide/slide'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/slide',
      name: 'slide',
      component: slide
    },

  ]
})
