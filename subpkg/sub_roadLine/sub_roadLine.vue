<template>
  <view class="">
    <view class="point">
      <!-- 头部 -->
      <view class="user-wrap" v-if="road.coverImg" :style="{backgroundImage:'url('+road.coverImg+')'}"></view>

      <view class="point-detail">
        <view class="detail">
          <text style="font-weight: bold; font-size: 25px;">{{road.name}}</text>
          <text style="font-size: 15px; color: #666; margin-top: 10px;">{{roadLength}}个景点</text>
        </view>
      </view>
      <YSteps lineNum='0' color='#fff' backgroundColor='#47a6ff' :infoList='road.roadList'></YSteps>
      <view style="margin-bottom: 50px;"></view>
    </view>

    <view class="footer">
      <button style="border-radius: 20px; background-color: #47a6ff; color: white; width: 90%;"
        @click="toStaticRoad(road.id)">
        <uni-icons type="redo" size="20" color="white"></uni-icons>地图上查看
      </button>
    </view>
  </view>
</template>

<script>
  import YSteps from '@/components/Y-Steps/Y-Steps.vue'
  import roadApi from '@/api/roadApi.js'

  export default {
    components: {
      YSteps
    },
    computed: {
      roadLength() {
        if(this.road.roadList !== undefined){
           return this.road.roadList.length
        }
      }
    },
    data() {
      return {
        road: {},
      };
    },
      
    onLoad(option) {
      roadApi.getStaticRoadById(option.id).then(res => {
        this.road = res.data
        console.log(this.road);
      })
    },

    methods: {
      toStaticRoad(id){
        uni.navigateTo({
          url: "/pages/road-map/road-map?showStaticRoad=true&staticRoadId=" + id
        })
      }
    }
  };
</script>

<style lang="scss">
  .point {
    width: 100%;
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
      background-size: cover;
    }

    .point-detail {
      width: 100%;
      margin-top: -15px;
      border-radius: 20px 20px 0px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #e8f5ff;

      .detail {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100px;
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
