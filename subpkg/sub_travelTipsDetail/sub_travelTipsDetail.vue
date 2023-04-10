<template>
  <view class="container">
    <view class="title">{{articleDetail.title}}</view>
    <view class="row flex-row">
      <text class="text">{{articleDetail.publishTime}}</text>
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
