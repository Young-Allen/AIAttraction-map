export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    //是否显示地图界面的筛选模态框
    isShowModal: 'false',

    roadContent: [{
        iconPath: '/static/my-icons/default.png',
        selectedIconPath: '/static/my-icons/default-select.png',
        text: '默认线路',
        active: false
      },
      {
        iconPath: '/static/my-icons/dynamic.png',
        selectedIconPath: '/static/my-icons/dynamic-select.png',
        text: '动态线路',
        active: false
      },
      {
        iconPath: '/static/my-icons/vip-road.png',
        selectedIconPath: '/static/my-icons/vip-road-select.png',
        text: '精品线路',
        active: false
      }
    ],
    headNavi: ['景点', '餐饮住宿', '景区服务中心', '医院', ],
  }),

  // 方法
  mutations: {
    // 将 isShowModal 持久化存储到本地
    saveIsShowModalToStorage(state) {
      uni.setStorageSync('isShowModal', state.isShowModal)
    },
    // 更新当前线路的当前景点下标
    updateIsShowModal(state, isShowModal) {
      state.isShowModal = isShowModal
      // 持久化到本地
      // this.commit('m_settings/saveIsShowModalToStorage')
    },
  },
  actions: {},
  // 数据包装器
  getters: {},
}
