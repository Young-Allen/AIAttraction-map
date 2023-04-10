const roadApi = {
  //获取静态线路
  async getStaticRoadList(pagenum) {
    let query = {
      pageSize: 10,
      currentPage: pagenum,
    }
    const res = await uni.$http.get('/route/all', query)
    return res.data
  },
  
  //根据Id获取静态线路
  async getStaticRoadById(id) {
    const res = await uni.$http.get(`/route/${id}`)
    return res.data
  },
}

export default roadApi
