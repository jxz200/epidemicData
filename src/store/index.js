import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    virusNews: [],
    virusInfo: {},
    sectionConfirmedData: [], //中国各地区累计确诊疫情数据
    sectionCurConfirmedData: [], //中国各地区现存确诊疫情数据
  },
  getters: {},
  mutations: {
    addVirusNews(state, payload) {
      state.virusNews = payload;
    },
    addVirusInfo(state, payload) {
      state.virusInfo = payload;
    },
    addSectionConfirmedData(state, payload) {
      state.sectionConfirmedData = payload;
    },
    addSectionCurConfirmedData(state, payload) {
      state.sectionCurConfirmedData = payload;
    },
  },
  actions: {},
});

export default store;
