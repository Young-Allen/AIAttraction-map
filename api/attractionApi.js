const attractionApi = {
  //景点数组
  async getAttractionList(pagenum) {
    let query = {
      pageSize: 5,
      currentPage: pagenum,
    }
    const res = await uni.$http.post('/api/attraction/all', query);
    return res.data.data
  },

  //根据景点名称模糊搜索景点
  async getAttractionByName(name, pagenum){
    let query = {
      pageSize: 5,
      currentPage: pagenum,
      name: name,
    }
    const res = await uni.$http.get('/api/attraction/search', query)
    return res.data.data
  },
  
  //根据id获取景点信息
  async getAttractionListById(id) {
    const res = await uni.$http.get(`/api/attraction/${id}`)
    return res.data
  },

}

export default attractionApi
