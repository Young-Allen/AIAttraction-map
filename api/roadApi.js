const roadApi = {
  //获取静态线路
  async getStaticRoadList(currentPage, pageSize) {
    let query = {
      pageSize: pageSize,
      currentPage: currentPage,
    }
    const res = await uni.$http.get('/route/static/all', query)
    return res.data
  },

  //根据Id获取静态线路
  async getStaticRoadById(id) {
    const res = await uni.$http.get(`/route/static/${id}`)
    return res.data
  },

  //获取群组路线
  async getVipRoad(attractionIds) {
    const res = await uni.$http.post('/route/walking/multiple', attractionIds)
    return res.data
  },

  //获取动态路线
  async pathToSingleSource(longitude, latitude, target) {
    let query = {
      longitude: parseFloat(longitude.toFixed(6)),
      latitude: parseFloat(latitude.toFixed(6)),
      target
    }
    const res = await uni.$http.post('/route/walking/single-source', query)
    return res.data
  },
}

export default roadApi