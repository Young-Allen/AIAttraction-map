const attractionApi = {
  //景点数组
  async getAttractionList(currentPage, pageSize) {
    let query = {
      pageSize: pageSize,
      currentPage: currentPage,
    }
    const res = await uni.$http.post('/api/attraction/all', query);
    return res.data.data
  },

  //根据景点名称模糊搜索景点
  async getAttractionByName(name, currentPage, pageSize) {
    let query = {
      pageSize: pageSize,
      currentPage: currentPage,
      name: name,
    }
    const res = await uni.$http.post('/api/attraction/all', query)
    return res.data.data
  },

  //根据id获取景点信息
  async getAttractionListById(id) {
    const res = await uni.$http.get(`/api/attraction/${id}`)
    return res.data
  },

  //评价景点
  async addNewScore(id, score) {
    let query = {
      id,
      score,
    }
    const res = await uni.$http.post('/rating/new', query)
    return res.data
  },
  
  //获取景点的实时人数
  async getDynamicAttractionInfo() {
    const res = await uni.$http.get('/api/attraction/dynamic/info')
    return res.data
  },
  
  //获取距离用户3公里内距离最近的一个景点
  async matchFuzzyPosition(lat, lng) {
    let query = {
      lat, 
      lng
    }
    const res = await uni.$http.get('/api/showplace/fuzzyposition', query)
    return res.data
  },
}

export default attractionApi