import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Detail from '@/components/Detail';
import Post from '@/components/Post';
import Camera from '@/components/Camera';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    },
    {
      path: "/post",
      name: "post",
      component: Post
    },
    {
      path: "/camera",
      name: "camera",
      component: Camera
    }
  ]
})
