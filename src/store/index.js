import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)
export default new Vuex.Store({
  state: {
    user: null,
    editMode: false,
    listStatus: false,
    listData: [],
    content: {},
    infoStatus: false,
    infoMessage: null,
    itemInfoStatus: false,
    itemInfoMessage: null,
    userData: {
      id: localStorage.getItem('userDataId'),
      name: localStorage.getItem('userDataName'),
      email: localStorage.getItem('userDataEmail')
    }
  },
  mutations: {
    setUser (state, payload){
      state.user = payload.user
    },
    setUserData (state, payload){
      localStorage.setItem('userDataId', payload.data.id)
      localStorage.setItem('userDataName', payload.data.name)
      localStorage.setItem('userDataEmail', payload.data.email)
      state.userData.id = localStorage.getItem('userDataId')
      state.userData.name = localStorage.getItem('userDataName')
      state.userData.email = localStorage.getItem('userDataEmail')
      location.reload()
      console.log(state.userData)
    },
    setMode (state, payload) {
      state.editMode = payload
    },
    setInfo (state, payload) {
      state.infoStatus = payload.status
      state.infoMessage = payload.message
    },
    setItemInfo (state, payload) {
      state.itemInfoStatus = payload.status
      state.itemInfoMessage = payload.message
    },
    setList (state, payload) {
      state.listStatus = payload.status
      state.listData = payload.data
    },
    setContent (state, payload) {
      state.content = payload.data
    }
  },
  actions: {
    async LogIn ({ commit }, User) {
      await axios.post('login', User)
      await commit('setUser', User.get('email'))
    },
    Register ({ commit }, User) {
      axios.post('register', User).then((response) => {
        commit('setUserData', response.data)
      })
    },
    async postData ({ state, commit }, data) {
      commit('setInfo', {status: false, message: null})
      const endpoint = `${data.api}?user=${state.userData.id}`
      axios.post(endpoint, data.form).then((response) => {
        commit('setInfo', response.data)
      })
    },
    async updateData ({ commit }, data) {
      commit('setInfo', {status: false, message: null})
      const endpoint = `${data.api}/${data.show}`
      axios.put(endpoint, data.form).then((response) => {
        commit('setInfo', { status: response.data.status, message: response.data.message })
      })
    },
    getList ({ state, commit }, data) {
      commit('setInfo', {status: false, message: null})
      const endpoint = `${data.api}?user=${state.userData.id}`
      axios.get(endpoint).then((response) => {
        commit('setList', response.data)
      })
    },
    searchData ({ state, commit }, data) {
      const endpoint = `search?user=${state.userData.id}&search=${data.key}&type=${data.type}`
      console.log(endpoint)
      axios.get(endpoint).then((response) => {
        commit('setList', response.data)
      })
    },
    getContent ({ state, commit }, data) {
      commit('setInfo', {status: false, message: null})
      const endpoint = `${data.api}/${data.show}?user=${state.userData.id}`
      axios.get(endpoint).then((response) => {
        commit('setContent', response.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    removeData ({ commit }, data) {
      commit('setInfo', {status: false, message: null})
      const endpoint = `${data.api}/${data.show}`
      axios.delete(endpoint).then((response) => {
        commit('setInfo', response)
      })
    },
    removeItem ({ commit }, data) {
      commit('setInfo', {status: false, message: null})
      const endpoint = `${data.api}/${data.show}`
      axios.delete(endpoint).then((response) => {
        commit('setItemInfo', response)
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
