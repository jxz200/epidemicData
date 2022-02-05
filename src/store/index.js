import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    virusNews: [],
    virusInfo: {},
  },
  getters: {},
  mutations: {
    addVirusNews(state, payload) {
      state.virusNews = payload;
    },
    addVirusInfo(state, payload) {
      state.virusInfo = payload;
    },
  },
  actions: {},
});

export default store;
