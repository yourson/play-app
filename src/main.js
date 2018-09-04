// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store'; // vuex文件的引入
import fastClick from 'fastclick'; // 300ms
import VueAwesomeSwiper from 'vue-awesome-swiper'; // 轮播库
import 'swiper/dist/css/swiper.css'; // 轮播库的样式
import './assets/styles/iconfont.css'; // 图标库样式引入
import './assets/styles/reset.css'; // 基本样式
import './assets/styles/border.css'; // 移动端1像素解决

Vue.config.productionTip = false;
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
