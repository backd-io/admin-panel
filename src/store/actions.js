import Backd from 'backd-js'

const backd = new Backd({})

export default {
  async loginAction({ dispatch }, formData) {
    console.log('loginAction.formData: ', formData)
    await backd.auth.postSession(formData.domain, formData.username, formData.password)
    console.log('backd._client: ', backd._client)
    dispatch('setUserAction')
  },
  async setUserAction({ commit }) {
    const me = await backd.auth.me()
    commit('setUser', me)
  }
}
