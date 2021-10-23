import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)
export default new Vuex.Store({
  state: {
    user: null,
    editMode: false,
    listData: []
  },
  mutations: {
    setUser (state, payload){
      state.user = payload
    },
    setMode (state, payload) {
      state.editMode = payload
    },
    setList (state, payload) {
      console.log(payload)
      state.listData = payload
    }
  },
  actions: {
    async LogIn ({commit}, User) {
      await axios.post('login', User)
      await commit('setUser', User.get('email'))
    },
    async Register (User) {
      await axios.post('register', User)
    },
    getList ({ commit }, data) {
      console.log(data)
      axios.get(data.api).then((response) => {
        commit('setList', response)
      })
    }
  },
  getters: {
    isAuthenticated: state => !!state.user,
    StateUser: state => state.user
  },
  modules: {
  }
})
