export default {
  // 开启命名空间
  namespaced: true,

  // state 数据
  state: () => ({
    // 当前线路的当前景点下标
    activePoint: 0,
    
    //所有的景点信息
    allPointList: [{
      id: 0,
      name: '三叠泉',
      latitude: '29.55527',
      longitude: '116.043974',
      imgsUrl: 'http://store.is.autonavi.com/showpic/9f56dfa0b736bd2b4d2b1540167e42ac,http://store.is.autonavi.com/showpic/c74bc6907048a7db9dc2ae47ae99eb0d,http://store.is.autonavi.com/showpic/abf0063f65ef46f33444f5b13143d60f',
      score: '4.8',
    }, {
      id: 1,
      name: '五老峰',
      latitude: '29.544069',
      longitude: '116.021780',
      imgsUrl: 'http://store.is.autonavi.com/showpic/e7088b4d591679a9a432cbd9db300461,http://store.is.autonavi.com/showpic/f0de68280cb4a0b349029e937f59c1bd,http://store.is.autonavi.com/showpic/d425dcf8bddb8dc64d03cd80107e14d5',
      score: '4.6',
    }, {
      id: 2,
      name: '庐山植物园',
      latitude: '29.546914',
      longitude: '115.986702',
      imgsUrl: 'http://store.is.autonavi.com/showpic/2accc6ddd57ff82f9f7e46958f319656,http://store.is.autonavi.com/showpic/cb760320cc0780810e2b59e1aa517c3b,http://store.is.autonavi.com/showpic/299ee8fea9a493d6cf7e2b6df8ba4c6b',
      score: '4.5',
    }, {
      id: 3,
      name: '庐山博物馆',
      latitude: '29.55075',
      longitude: '115.9779',
      imgsUrl: 'http://store.is.autonavi.com/showpic/ee127b9af3b703194ba6a3e88ef77b4e,http://store.is.autonavi.com/showpic/7fc218a0d6e8124e2df086d1b2b5a071,http://store.is.autonavi.com/showpic/071082135a00b053d202804c2055d001',
      score: '4.6',
    }, {
      id: 4,
      name: '芦林湖',
      latitude: '29.54993',
      longitude: '115.9744',
      imgsUrl: 'http://aos-cdn-image.amap.com/sns/ugccomment/2ddf8c4d-8894-43e0-b7c7-05e9bc5c290f.jpg,http://store.is.autonavi.com/showpic/84f605a68f4803f84573a6f35c1ef062',
      score: '4.5',
    }, {
      id: 5,
      name: '黄龙寺',
      latitude: '29.55064',
      longitude: '115.9682',
      imgsUrl: 'http://store.is.autonavi.com/showpic/6f6659ab26860f5ee44160766e670af6,http://aos-cdn-image.amap.com/sns/ugccomment/65597f9e-5056-4238-9e19-f0065c6ecd58.jpg,http://store.is.autonavi.com/showpic/ad3d7b78286905b27bdda0a3c4d57398',
      score: '4.3',
    }, {
      id: 6,
      name: '黄龙潭',
      latitude: '29.55112',
      longitude: '115.9634',
      imgsUrl: 'http://store.is.autonavi.com/showpic/88e700c88f85537f6e19683a9b6a0ce1,http://store.is.autonavi.com/showpic/1ae70f5cc01ecc0cc58f9eed11f19d5e,http://store.is.autonavi.com/showpic/08deb0c1bdf2c81806f9d0807db356bd',
      score: '4.3',
    }, {
      id: 7,
      name: '庐山大坝',
      latitude: '29.55134',
      longitude: '115.9602',
      imgsUrl: 'http://store.is.autonavi.com/showpic/d3de57d79aba120507244b011251f746,http://store.is.autonavi.com/showpic/c4f1c45476a1775dccc867675e033e1c',
      score: '4.1',
    }, {
      id: 8,
      name: '大天池',
      latitude: '29.5576',
      longitude: '115.9559',
      imgsUrl: 'http://store.is.autonavi.com/showpic/0a6746e142f3b02293d6c5fb1e7ac8aa,http://store.is.autonavi.com/showpic/80d94f50a23e0aa1e3228db5254e98e8,http://store.is.autonavi.com/showpic/9c38854cb7d23ef976e123bc344768d7',
      score: '4.5',
    }, {
      id: 9,
      name: '天池塔',
      latitude: '29.55947',
      longitude: '115.956',
      imgsUrl: 'http://store.is.autonavi.com/showpic/83f1838ddb4242e0a2c2c27612858a18,http://store.is.autonavi.com/showpic/4e96345968c143f888f63f33892cd27d,http://store.is.autonavi.com/showpic/5462f636a3c84a0bb1b71b2de2ba37bd',
      score: '4.1',
    }, {
      id: 10,
      name: '仙人洞',
      latitude: '29.56208',
      longitude: '115.9626',
      imgsUrl: 'http://store.is.autonavi.com/showpic/7292e19d24ca38e0605933ecb5b0a8b9,http://store.is.autonavi.com/showpic/faed0159b69c30d55e3b5c7ce025a3b4,http://store.is.autonavi.com/showpic/6ae01b37513afd096621e6f42051785f',
      score: '4.7',
    }, {
      id: 11,
      name: '礼贤门',
      latitude: '29.56385',
      longitude: '115.9637',
      imgsUrl: 'http://store.is.autonavi.com/showpic/88e700c88f85537f6e19683a9b6a0ce1,http://store.is.autonavi.com/showpic/1ae70f5cc01ecc0cc58f9eed11f19d5e,http://store.is.autonavi.com/showpic/08deb0c1bdf2c81806f9d0807db356bd',
      score: '3.1',
    }, {
      id: 12,
      name: '好运石',
      latitude: '29.56703',
      longitude: '115.9685',
      imgsUrl: 'http://store.is.autonavi.com/showpic/8198e205d6ad5a2d229a99f762ec0d30,http://store.is.autonavi.com/showpic/2e09d650bce4a53423bc071d8bcada27,http://store.is.autonavi.com/showpic/6f552521cb719cee83bfb2cd6420ab47',
      score: '4.3',
    }, {
      id: 13,
      name: '白居易草堂',
      latitude: '29.56474',
      longitude: '115.9674',
      imgsUrl: 'http://store.is.autonavi.com/showpic/62d0e593c10cd09c79d43d843f76def4,http://store.is.autonavi.com/showpic/3df6fc1ac12e78ad71d2ecdb07c02883,http://store.is.autonavi.com/showpic/d2b17d2b0aaf10d500a6f69970af234f',
      score: '4.5',
    }, {
      id: 14,
      name: '如琴湖',
      latitude: '29.56589',
      longitude: '115.971',
      imgsUrl: 'http://store.is.autonavi.com/showpic/7190afebc21b963119417c51daf888ba,https://aos-comment.amap.com/B0FFH027GK/headerImg/8b861c8d18ecc320d703a0f9bb850dea_2048_2048_80.jpg,https://aos-comment.amap.com/B0FFH027GK/headerImg/62faaedcc9d6094446ce3fcec8acf82a_2048_2048_80.jpg',
      score: '4.6',
    }, {
      id: 15,
      name: '庐山牯岭街心公园',
      latitude: '29.56897',
      longitude: '115.9842',
      imgsUrl: 'http://store.is.autonavi.com/showpic/a80875d916b64223a1dfdf5c131e3928,http://store.is.autonavi.com/showpic/d7d4b4b70b62493abc6e0b6771f29935,http://store.is.autonavi.com/showpic/32f413e4d19a4e0d9dae0ead6d2bce6a',
      score: '4.5',
    }, {
      id: 16,
      name: '美庐别墅',
      latitude: '29.56429',
      longitude: '115.9835',
      imgsUrl: 'http://store.is.autonavi.com/showpic/ff8347ba48a1ab8518d715b84c33aec1,http://store.is.autonavi.com/showpic/16266f55eb6a7a8ff37449438ebb0c6b,http://store.is.autonavi.com/showpic/839a4c90930e4491ecb35d0012ce1eea',
      score: '4.6',
    }, {
      id: 17,
      name: '283教堂',
      latitude: '29.56114',
      longitude: '115.9819',
      imgsUrl: 'http://store.is.autonavi.com/showpic/92c4db03cad29fdc2fc5d5937b2e0159',
      score: '4',
    }, {
      id: 18,
      name: '朱德旧居',
      latitude: '29.55808',
      longitude: '115.9793',
      imgsUrl: 'http://store.is.autonavi.com/showpic/8b7f1c5805730ed5708de7587e5ed228,http://store.is.autonavi.com/showpic/17c55ee41e4cd87c6d5ae95ba7324c1f,http://store.is.autonavi.com/showpic/94a63893b637943851364b56d7675e04',
      score: '4',
    }, {
      id: 19,
      name: '中国共产党中央委员会庐山会议旧址',
      latitude: '29.55906',
      longitude: '115.9771',
      imgsUrl: 'http://store.is.autonavi.com/showpic/35c31171fd5460838763c47a63a4317d,http://store.is.autonavi.com/showpic/2c55fa447b1dd4cffc11b9c4c22079fc,http://aos-cdn-image.amap.com/sns/ugccomment/17fa9e73-a9b1-4688-86a1-e5dcae90db52.jpg',
      score: '4.6',
    }],

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
