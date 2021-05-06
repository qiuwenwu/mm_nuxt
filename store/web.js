export default {
  state() {
    return {
      active_index: 1
    }
  },
  mutations: {
    set_alert(state, obj) {
      state.alert = Object.assign(state.alert, obj);
    }
  }
}
