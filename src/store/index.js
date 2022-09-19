import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
//import { Counter } from "@/store/modules/Counter";

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  plugins: [ createPersistedState({ storage: window.sessionStorage })],
  modules: {},/*{Counter},*/
  strict: debug

})
