<template>
  <view class="tabbar_pages">
    <view class="uni-tabbar">
      <view class="tababr_item tabbar_find" v-for="(item,index) in tabbarList" :key="index" @click="tabbarSave(item)">
        <view class="tabbar_icon" v-if="item.type == 0">
          <image :src="item.icon_select" class="select_img" mode="" v-if="item.pagePath == pagePath"></image>
          <image :src="item.icon" mode="" v-else></image>
        </view>
        <view class="find_icon" v-if="item.type == 1">
          <view class="icon">
            <image :src="item.icon_select" class="select_img" mode="" v-if="item.pagePath == pagePath">
            </image>
            <image :src="item.icon" mode="" v-else></image>
          </view>
        </view>
        <view class="tababr_text">{{item.text}}</view>
      </view>
    </view>
  </view>
</template>


<script>
  export default {
    props: {
      //从父级继承过来的属性 需要在父级中使用:pagePath='pagePath',
      pagePath: {
        default: '',
        type: String
      }
    },
    data() {
      return {
        showPage: false,
        page: '',
        tabbarList: [{
            "pagePath": "pages/home/home",
            "text": "首页",
            "icon_select": "../../static/tabbar/select_home.png",
            "icon": "../../static/tabbar/home.png",
            "type": 0,
          },
          {
            "pagePath": "pages/road/road",
            "text": "线路",
            "icon_select": "../../static/tabbar/select_road.png",
            "icon": "../../static/tabbar/road.png",
            "type": 0
          },
          {
            "pagePath": "pages/road-map/road-map",
            "text": "地图",
            "icon_select": "../../static/tabbar/road-map-active.png",
            "icon": "../../static/tabbar/find.png",
            "type": 1
          },
          {
            "pagePath": "pages/scenicSpot-list/scenicSpot-list",
            "text": "景点",
            "icon_select": "../../static/tabbar/select_sq.png",
            "icon": "../../static/tabbar/sq.png",
            "type": 0
          },
          {
            "pagePath": "pages/my/my",
            "text": "我的",
            "icon_select": "../../static/tabbar/select_my.png",
            "icon": "../../static/tabbar/my.png",
            "type": 0
          }
        ]
      };
    },
    methods: {
      tabbarSave(e) {
        this.page = e.pagePath
        if (e.pagePath === "pages/road-map/road-map") {
          uni.navigateTo({
            url: '/' + e.pagePath
          })
        } else {
          uni.switchTab({
            url: '/' + e.pagePath
          });
        }
      }
    }
  }
</script>


<style lang="scss">
  .uni-tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: space-around;
    height: 100upx;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 0px 17rpx 1rpx rgba(206, 206, 206, 0.32);

    .tabbar_find {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .find_icon {
        width: 60px;
        height: 55px;
        margin-top: -30px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        box-shadow: 0px 0px -17rpx 1rpx rgba(206, 206, 206, 0.32);

        .icon {
          background-color: #3668FC;
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          image {
            width: 28px;
            height: 28px;
          }

          .select_img {
            animation: tabbar-item-button-click 0.2s forwards 1;
          }

        }
      }
    }

    .tababr_item {
      font-size: 20rpx;
      text-align: center;
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .tabbar_icon {
        height: 25px;
        width: 25px;

        .select_img {
          animation: tabbar-item-button-click 0.2s forwards 1;
        }

        image {
          width: 100%;
          height: 100%;
        }
      }

      .tababr_text {
        line-height: 24rpx;
        font-size: 24rpx;
        margin-top: 2px;
        color: #999;
      }
    }
  }

  /* 点击动画 start */

  @keyframes tabbar-item-button-click {
    from {
      transform: scale(0.5);
    }

    to {
      transform: scale(1);
    }
  }
</style>
