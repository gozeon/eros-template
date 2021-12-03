module.exports = {
  namespaced: true,
  state: {
    collapse: false,
  },
  mutations: {
    toggleSideBarCollapse(state) {
      state.collapse = !state.collapse
    },
  },
}
