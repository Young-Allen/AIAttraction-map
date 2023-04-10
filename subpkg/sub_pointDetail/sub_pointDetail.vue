<template>
  <view class="">
    <view class="point">
      <image :src="attractionDetail.imgsUrl" mode=""
        style="width: 100%;z-index: -999; position: relative; border-radius: 0 0 10px 10px;"></image>

      <view class="order-status">
        <view class="status-wrap">
          <view class="cell">
            <text class="pointTitle">{{attractionDetail.name}}</text>
            <view style="display: flex; align-items: center;">
              <text class="pointRate">大众评分：{{attractionDetail.score}}</text>
              <uni-rate allow-half readonly="true" :value="attractionDetail.score" color="#bbb"
                active-color="#4095e5" />
            </view>
          </view>
        </view>
      </view>

      <view class="point-detail">
        <view class="detail">
          <text class="detail-title">开放时间</text>
          <text style="color: #4095e5; font-weight: bold; font-size: 20px;">{{attractionDetail.openNote}}</text>
        </view>
        <view class="detail">
          <text class="detail-title">门票价格</text>
          <text style="color: #4095e5; font-weight: bold; font-size: 20px;">每人{{attractionDetail.price}}元</text>
        </view>
        <view class="detail">
          <text class="detail-title">基础设施</text>
          <view v-for="(item, key) in infra" :key="key">
            <uni-tag :text="key + ' : ' +  item" :type="tagType[Math.floor(Math.random() * 5)]" />
          </view>
        </view>
        <view class="detail">
          <text class="detail-title">具体地址</text>
          <text style="font-weight: bold;">{{attractionDetail.address}}</text>
        </view>
        <view class="detail">
          <text class="detail-title">景区类型</text>
          <text style="font-weight: bold;">{{attractionDetail.category}}</text>
        </view>
        <view class="detail">
          <text class="detail-title">官方号码</text>
          <text style="font-weight: bold;">{{attractionDetail.tel}}</text>
        </view>
      </view>
      <view style="margin-bottom: 60px;">
        <uni-section title="景点介绍" type="line">
          <text style="margin: 10px 10px;" user-select="true">{{attractionDetail.introduction}}</text>
        </uni-section>
      </view>

    </view>
    <view class="footer">
      <button style="border-radius: 20px; background-color: #47a6ff; color: white; width: 90%;"
        @click="gotoPosition(attractionDetail.id)">
        <uni-icons type="redo" size="20" color="white"></uni-icons>去这里
      </button>
    </view>
  </view>
</template>

<script>
  import attractionApi from '@/api/attractionApi.js'

  export default {
    components: {},
    data() {
      return {
        attractionDetail: {},
        infra: {},
        tagType: ["primary", "success", "warning", "error", ""],
      };
    },
    onLoad(option) {
      attractionApi.getAttractionListById(option.id).then(res => {
        this.attractionDetail = res.data
        this.infra = res.data.infrastructure[0]
        console.log(this.infra);
        console.log(this.attractionDetail);
      })
    },

    methods: {
      gotoPosition(id) {
        uni.navigateTo({
          url: "/pages/road-map/road-map?gotoPosition=true&attractionId=" + id
        })
      }
    }
  };
</script>

<style lang="scss">
  page {
    background: #f2f2f2;
  }

  .btn-hover {
    background: #f2f2f2 !important;
  }

  .point {
    padding: 0rpx;
    clear: both;
    float: left;

    .user-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vw;
      padding: 30rpx;
      z-index: 9;
      border-radius: 0 0 20% 20%;
      // background: url('http://store.is.autonavi.com/showpic/9f56dfa0b736bd2b4d2b1540167e42ac,http://store.is.autonavi.com/showpic/c74bc6907048a7db9dc2ae47ae99eb0d,http://store.is.autonavi.com/showpic/abf0063f65ef46f33444f5b13143d60f') no-repeat;
      background-size: cover;
    }

    .order-status {
      padding: 0 20rpx;
      margin-top: -10vw;

      .status-wrap {
        border-radius: 25rpx;
        overflow: hidden;
      }
    }

    .cell {
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 250rpx;
      padding-left: 20rpx;
      padding-right: 20rpx;
      background: #fff;
      border-bottom: 1px solid #f8f8f8;

      &:active {
        background: #f2f2f2;
      }

      .pointTitle {
        font-size: 25px;
        font-weight: bold;
      }

      .pointRate {
        color: #4095e5;
        font-weight: bold;
        margin: 10px 0px;
      }
    }

    .point-detail {
      margin-top: 10px;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;

      .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        width: 100%;
        border-bottom: 1px solid #d1d1d1;

        .detail-title {
          color: #666;
          margin-bottom: 10px;
        }
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    width: 750rpx;
    border-radius: 15px 15px 0px 0px;
    padding: 5px 0px;
    background-color: #ffffff;
    box-shadow:
      0px 0px 2.2px rgba(0, 0, 0, 0.087),
      0px 0px 5.3px rgba(0, 0, 0, 0.125),
      0px 0px 10px rgba(0, 0, 0, 0.155),
      0px 0px 17.9px rgba(0, 0, 0, 0.185),
      0px 0px 33.4px rgba(0, 0, 0, 0.223),
      0px 0px 80px rgba(0, 0, 0, 0.31);
  }
</style>
