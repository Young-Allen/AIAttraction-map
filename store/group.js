export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    // 用户的基本信息
    creator: JSON.parse(uni.getStorageSync('creator') || '{}'),
  }),

  mutations: {
    saveCreatorToStorage(state) {
      uni.setStorageSync('creator', JSON.stringify(state.creator))
    },
    updateCreator(state, creator) {
      state.creator = creator
      this.commit('m_group/saveCreatorToStorage')
    },
  },

  // 数据包装器
  getters: {},
}
