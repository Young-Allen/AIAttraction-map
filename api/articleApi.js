const articleApi = {
  //获取热门攻略
  async getArticleList() {
    let query = {
      pageSize: 10,
      currentPage: 1,
    }
    const res = await uni.$http.get('/api/article/all', query)
    return res.data.data
  },

  //根据id获取热门攻略
  async getArticleById(index) {
    let query = BigInt(index)
    const res = await uni.$http.get(`/api/article/${query}`)
    return res.data.data
  },
}

export default articleApi
