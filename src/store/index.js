import Vue from 'vue'
import Vuex from 'vuex'
// import { stat } from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => {
      if (state.count > 0) state.count--
    },
    reset: state => state.count = 0
  },
  actions: {
  },
  modules: {
  }
})
