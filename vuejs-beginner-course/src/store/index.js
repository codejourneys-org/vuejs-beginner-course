import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: 'asd',
    surname: 'Foo',
    age: '30',
    country: 'Ger',
    counter: 0,
    isLoading: true,
  },
  mutations: {
    CHANGE_NAME(state, name) {
      state.name = name;
    },
    INCREMENT_COUNTER(state) {
      state.counter += 1;
    },
    SET_LOADING(state, v) {
      state.isLoading = v;
    },

  },
  actions: {
    changeName({ commit }, name) {
      commit('CHANGE_NAME', name);
      commit('SET_LOADING', false);
    },
    updateCounter({ commit }) {
      commit('INCREMENT_COUNTER');
    },
  },
});
