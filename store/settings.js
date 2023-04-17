export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    //是否显示地图界面的筛选模态框
    isShowModal: 'false',

    headNavi: ['景点', '住宿餐饮', '景区服务中心', '医疗急救'],

    //自定义图层信息
    GroundOverlay: [{
      id: 1,
      src: "https://i.328888.xyz/2023/03/25/iAjKKQ.png",
      bounds: {
        //左下经纬度
        southwest: {
          longitude: 115.955964,
          latitude: 29.493921,
        },
        //右上经纬度
        northeast: {
          longitude: 116.055004,
          latitude: 29.576550,
        }
      },
    }, {
      id: 2,
      src: "https://www.hualigs.cn/image/643991c5c41f2.jpg",
      bounds: {
        //左下经纬度
        southwest: {
          longitude: 115.879179,
          latitude: 29.493921,
        },
        //右上经纬度
        northeast: {
          longitude: 115.955964,
          latitude: 29.576550,
        }
      },
    }]
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