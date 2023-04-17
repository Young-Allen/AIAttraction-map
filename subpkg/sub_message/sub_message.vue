<template>
  <view>
    <view class="" v-for="(item, index) in msgList" :key="index">
      <uni-card :is-shadow="false" style="border-radius: 50px;">
        <uni-section :title="item.type + ' : ' + item.subject" :sub-title="item.publishTime | parseTime" type="line">
          <uni-notice-bar :text="item.content" />
        </uni-section>
      </uni-card>
    </view>
  </view>
</template>

<script>
  import tourgroupApi from '@/api/tourgroupApi.js'

  export default {
    data() {
      return {
        msgList: [],
      }
    },
    filters: {
      parseTime(val) {
        if(val === null)  return '';
        const options = { timeZone: 'Asia/Shanghai' }
        // 将空格替换为T，转换为ISO 8601格式
        const isoString = val.replace(' ', 'T')
        // 创建一个Date对象
        const date = new Date(isoString)
        return date.toLocaleString('zh-CN', options)
      }
    },
    onLoad() {
      tourgroupApi.getGroupNotices().then(res => {
        console.log(res);
        res.data[0].forEach(item => {
          this.msgList.push(item)
        })
        console.log(this.msgList);
      })

      //获取公告消息
      tourgroupApi.getNoticeList().then(res => {
        res.data[0].forEach(item => {
          this.msgList.push(item)
        })
      })
    },
    methods: {}
  }
</script>

<style>

</style>
