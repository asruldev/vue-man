import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    watchCounter(state) {
      return state.counter * 10;
    }
  },
  mutations: {
    increment(state, payload) {
      state.counter += payload;
    }
  },
  actions: {
    increment({commit}) {
      commit('increment', 1);
    },
  },
  modules: {
  }
})
