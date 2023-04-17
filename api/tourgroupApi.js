const tourgroupApi = {
  //创建群组
  async createGroup(datas) {
    let query = datas
    const res = await uni.$http.post('/api/tourgroup/create', query)
    return res.data.data
  },

  //加入群组
  async joinGroup(inviteCode) {
    let query = {
      inviteCode: inviteCode
    }
    const res = await uni.$http.get('/api/tourgroup/join', query)
    return res.data.data
  },

  //退出群组
  async exitGroup() {
    const res = await uni.$http.get('/api/tourgroup/exit')
    return res.data.data
  },
  
  //解散群组
  async deleteGroup(groupid){
    const res = await uni.$http.DELETE(`/api/tourgroup/${groupid}`)
    return res.data.data
  },

  //获取群组详情信息
  async tourGroupInfo() {
    const res = await uni.$http.get('/api/tourgroup/info')
    return res.data.data
  },

  //获取所有群组详情信息
  async tourGroupsInfo() {
    const res = await uni.$http.get('/api/tourgroup/all')
    return res.data.data
  },

  //获取public的历史消息
  async getNoticeList() {
    let query = {
      pageSize: 10,
      currentPage: 1,
    }
    const res = await uni.$http.get('/notice/public', query)
    return res.data.data
  },

  //获取群组的历史消息
  async getGroupNotices() {
    let query = {
      pageSize: 10,
      currentPage: 1,
    }
    const res = await uni.$http.get('/notice/group', query)
    return res.data.data
  },

  //根据id获取历史消息
  async getNoticeById(id) {
    const res = await uni.$http.get(`/notice/${id}`)
    return res.data.data
  },

  //发送群组消息
  async publishGroupNotice(subject, content) {
    const date = new Date();
    const isoString = date.toISOString();
    let query = {
      subject: subject,
      content: content,
      publishTime: isoString,
      type: '一般事件'
    }
    const res = await uni.$http.post('/notice/group-publish', query)
    return res.data.data
  },
}

export default tourgroupApi