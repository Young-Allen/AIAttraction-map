const userApi = {
  //登录获取token
  async wechatLogin(code) {
    let query = {
      code: code
    }
    const res = await uni.$http.post('/api/auth/wechatlogin', query)
    return res.data
  },

  //更新用户信息
  async updateUserInfo(datas) {
    let query = datas
    const res = await uni.$http.put('/api/user/update', query)
    return res.data
  },

  //获取用户信息
  async getUserInfo() {
    const res = await uni.$http.get('/api/user/userinfo')
    return res.data
  },

  //获取所有tags
  async getAllTags() {
    const res = await uni.$http.get('/api/user/allTag')
    return res.data.data
  },

  //推送用户的兴趣
  async getRecommendation(userinfo) {
    const res = await uni.$http.get('/api/user/user-recommend')
    return res.data.data
  }
}

export default userApi