<template>
  <view class="container">
    <view class="title">{{articleDetail.title}}</view>
    <view class="row flex-row">
      <text class="text" style="color: #47a6ff;">{{articleDetail.publishTime | parseTime}}</text>
    </view>
    <view class="content" v-html="articleDetail.content"></view>
  </view>
</template>

<script>
  import articleApi from '@/api/articleApi.js'
  import {StringToTime} from "@/libs/utils.js"
  
  export default {
    computed: {
    },
    data() {
      return {
        articleDetail: {},
      }
    },
    filters: {
      parseTime(isoString){
        const date = new Date(isoString);
        
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const readableDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        console.log(readableDate); // "2023-04-08 20:05:03"
        return readableDate
      }
    },
    onLoad(option) {
      articleApi.getArticleById(option.index).then(res => {
        this.articleDetail = res
        console.log(this.articleDetail);
      })
    },
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: #FFF;

    .title {
      font-size: 32rpx;
      font-weight: bold;
      padding: 30rpx 30rpx 10rpx;
    }

    .row {
      padding: 0 30rpx;
    }

    .content {
      padding: 30rpx;
      font-size: 28rpx;
      line-height: 1.4;
      white-space: pre-line;
    }
  }
</style>
