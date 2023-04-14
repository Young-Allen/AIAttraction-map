<template>
  <view class="item">
    <view class="title text-ellipsis">{{article.title}}</view>
    <view class="content flex-row">
      <view class="info">
        <view class="summary">{{article.content}}</view>
        <view class="flex-row">
          <text class="date">{{article.publishTime | parseTime}}</text>
        </view>
      </view>
      <view class="cover">
        <image class="img" :src="article.coverImg"></image>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      article: {
        type: Object,
        default: function() {
          return {
            id: 0,
            title: "",
            publishTime: "2022-06-29",
            coverImg: "https://alifei05.cfp.cn/creative/vcg/nowater800/new/VCG211277836426.jpg?x-oss-process=image/format,webp",
            text: "",
          };
        }
      },
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
    data() {
      return {

      }
    },
    onLoad() {},
    methods: {}
  }
</script>

<style lang="scss" scoped>
  .item {
    padding: 30rpx;
    margin-bottom: 30rpx;
    background-color: #FFF;

    .title {
      font-weight: bold;
      padding-bottom: 30rpx;
      border-bottom: 2rpx solid #F5F5F5;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .content {
      padding-top: 30rpx;
      align-items: flex-start;

      .info {
        width: calc(100% - 160rpx);
        display: inline-block;

        .summary {
          color: #777;
          height: 80rpx;
          font-size: 24rpx;
          line-height: 1.6;
          margin-bottom: 10rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        .date {
          font-size: 24rpx;
          color: #ff9966;
          opacity: 0.6;
        }

        .views {
          color: #999;
          font-size: 24rpx;
        }
      }

      .cover {
        width: 140rpx;
        height: 120rpx;
        display: inline-block;

        .img {
          width: 100%;
          height: 100%;
          border-radius: 4rpx;
        }
      }
    }
  }
</style>
