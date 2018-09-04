import Vue from 'vue';
import Vuex from 'vuex';
import state from './state';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex);

// 下面是通过vuex创建的一个仓库
export default new Vuex.Store({
  state,
  actions,
  mutations
});
