// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuefire from 'vuefire'
import {database} from '@/services/firebase'
import VueResource from 'vue-resource'

Vue.use(vuefire);
Vue.use(VueResource);

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  firebase: {
    cat: database.ref('cats').orderByChild("created_at"),
  },
  router,
  template: '<App/>',
  components: { App }
})
