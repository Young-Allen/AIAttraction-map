export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    // 当前线路的当前景点下标
    activePoint: 0,

    //所有的景点信息
    allPointList: JSON.parse(uni.getStorageSync('allPointList') || '[]'),

    // {
    //       id: 0,
    //       name: '三叠泉',
    //       latitude: '29.55527',
    //       longitude: '116.043974',
    //       imgsUrl: 'http://store.is.autonavi.com/showpic/9f56dfa0b736bd2b4d2b1540167e42ac,http://store.is.autonavi.com/showpic/c74bc6907048a7db9dc2ae47ae99eb0d,http://store.is.autonavi.com/showpic/abf0063f65ef46f33444f5b13143d60f',
    //       score: '4.8',
    //     }


    //静态路线信息
    road: [{
      roadId: 0,
      roadName: "文化溯源三日游",
      roadList: [{
          id: 0,
          name: '庐山大坝',
          latitude: '29.551343',
          longitude: '115.960183',
          imgsUrl: "http://store.is.autonavi.com/showpic/d3de57d79aba120507244b011251f746,http://store.is.autonavi.com/showpic/c4f1c45476a1775dccc867675e033e1c",
          score: "4.9"
        },
        {
          id: 1,
          name: '天池塔',
          latitude: '29.55947',
          longitude: '115.956',
          imgsUrl: "http://store.is.autonavi.com/showpic/0a6746e142f3b02293d6c5fb1e7ac8aa,http://store.is.autonavi.com/showpic/80d94f50a23e0aa1e3228db5254e98e8,http://store.is.autonavi.com/showpic/9c38854cb7d23ef976e123bc344768d7",
          score: "4.9"
        },
        {
          id: 2,
          name: '大天池',
          latitude: '29.5576',
          longitude: '115.9559',
          imgsUrl: "http://store.is.autonavi.com/showpic/83f1838ddb4242e0a2c2c27612858a18,http://store.is.autonavi.com/showpic/4e96345968c143f888f63f33892cd27d,http://store.is.autonavi.com/showpic/5462f636a3c84a0bb1b71b2de2ba37bd",
          score: "4.9"
        },
        {
          id: 3,
          name: '仙人洞',
          latitude: '29.562082',
          longitude: '115.962579',
          imgsUrl: "http://store.is.autonavi.com/showpic/7292e19d24ca38e0605933ecb5b0a8b9,http://store.is.autonavi.com/showpic/faed0159b69c30d55e3b5c7ce025a3b4,http://store.is.autonavi.com/showpic/6ae01b37513afd096621e6f42051785f",
          score: "4.7"
        },
        {
          id: 4,
          name: '礼贤门',
          latitude: '29.563853',
          longitude: '115.963662',
          imgsUrl: "http://store.is.autonavi.com/showpic/7292e19d24ca38e0605933ecb5b0a8b9,http://store.is.autonavi.com/showpic/faed0159b69c30d55e3b5c7ce025a3b4,http://store.is.autonavi.com/showpic/6ae01b37513afd096621e6f42051785f",
          score: "3.1"
        },
        {
          id: 5,
          name: '白居易草堂',
          latitude: '29.564743',
          longitude: '115.967367',
          imgsUrl: "http://store.is.autonavi.com/showpic/62d0e593c10cd09c79d43d843f76def4,http://store.is.autonavi.com/showpic/3df6fc1ac12e78ad71d2ecdb07c02883,http://store.is.autonavi.com/showpic/d2b17d2b0aaf10d500a6f69970af234f",
          score: "4.5"
        },
        {
          id: 6,
          name: '好运石',
          latitude: '29.56703',
          longitude: '115.968492',
          imgsUrl: "http://store.is.autonavi.com/showpic/8198e205d6ad5a2d229a99f762ec0d30,http://store.is.autonavi.com/showpic/2e09d650bce4a53423bc071d8bcada27,http://store.is.autonavi.com/showpic/6f552521cb719cee83bfb2cd6420ab47",
          score: "4.3"
        },
        {
          id: 6,
          name: '如琴湖',
          latitude: '29.56567761987316',
          longitude: '115.97124201013969',
          imgsUrl: "https://alifei02.cfp.cn/creative/vcg/nowater800/new/VCG211372937832.jpg?x-oss-process=image/format,webp",
          score: "4.5"
        },
      ]
    }],

    pointList: []
  }),

  // 方法
  mutations: {
    // 将 activePoint 持久化存储到本地
    saveActivePointToStorage(state) {
      uni.setStorageSync('activePoint', state.activePoint)
    },
    // 更新当前线路的当前景点下标
    updateActivePoint(state, activePoint) {
      state.activePoint = activePoint
      // 持久化到本地
      this.commit('m_roadMsg/saveActivePointToStorage')
    },

    saveAllPointsToStorage(state) {
      uni.setStorageSync('allPointList', JSON.stringify(state.allPointList))
    },
    updateAllPoints(state, e) {
      state.allPointList = e
      // 持久化到本地
      this.commit('m_roadMsg/saveAllPointsToStorage')
    },

    savePointListToStorage(state) {
      uni.setStorageSync('pointList', state.pointList)
    },
    updatePointList(state, e) {
      state.roadList.forEach(item => {
        if (item.roadName === e) {
          state.pointList = item.pointList
        }
      })
      // 持久化到本地
      this.commit('m_roadMsg/savePointListToStorage')
    },
  },
  actions: {},
  // 数据包装器
  getters: {
    roadNameList(state) {
      let c = []
      state.roadList.forEach(item => {
        c.push(item.roadName)
      })
      return c
    }
  },
}
