import Vue from 'vue'
import Vuex from 'vuex'
import { getAdminInfo } from '@/api/getData'

Vue.use(Vuex)

const state = {
  adminInfo: {
    avatar: 'default.jpg',
  },
  //后面再处理模块化
  currentTheme: 'theme-light',
}

const mutations = {
  saveAdminInfo(state, adminInfo) {
    state.adminInfo = adminInfo
  },
  SET_CURRENT_THEME(state, val) {
    state.currentTheme = val
  },
}

const actions = {
  async getAdminData({ commit }) {
    try {
      const res = await getAdminInfo()
      if (res.status == 1) {
        commit('saveAdminInfo', res.data)
      } else {
        throw new Error(res.type)
      }
    } catch (err) {
      // console.log(err.message)
    }
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
