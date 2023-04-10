<template>
  <view class="home">
    <!-- 自定义导航栏组件 -->
    <hx-navbar ref="hxnb" :config="headerConfig">
      <block slot="left">
        <view class="left" style="width: 220rpx">
        </view>
      </block>
      <block slot="center">
        <text style="font-size: 18px; font-weight: 600;">智慧景区自由行</text>
      </block>
    </hx-navbar>

    <image src="https://alifei02.cfp.cn/creative/vcg/nowater800/new/VCG21gic3366860.jpg?x-oss-process=image/format,webp"
      mode="scaleToFill" style="width: 100%; height: 350rpx;"></image>

    <view style="margin-top: -50px; margin-bottom: 10px; background: linear-gradient(to bottom, #4f7fb6, #004387);">
      <Xsuu-swiper :swiperItems="swiperItems"></Xsuu-swiper>
    </view>

    <uni-section title="功能导览" type="line" bgc="#004387" titleColor="white">
      <o-grid col="3">
        <o-grid-item text="智能导览" icon="/static/indexImg/map-navi.png" @click="goTo('/pages/road-map/road-map')" />
        <o-grid-item text="路线推荐" icon="/static/indexImg/recommend.png" @click="goTo('/pages/road/road','tabbar')" />
        <o-grid-item text="热门攻略" icon="/static/indexImg/hot.png"
          @click="goTo('/subpkg/sub_travelTips/sub_travelTips')" />
        <o-grid-item text="加入团组" icon="/static/indexImg/add-group.png"
          @click="goTo('/subpkg/sub_addToGroup/sub_addToGroup')" />
        <o-grid-item text="公告通知" icon="/static/indexImg/information.png"
          @click="goTo('/subpkg/sub_message/sub_message')" />
        <o-grid-item text="运营时间" icon="/static/indexImg/working-time.png"
          @click="goTo('/subpkg/sub_workingTime/sub_workingTime')" />
      </o-grid>
    </uni-section>

    <uni-section title="猜你喜欢" type="line" bgc="#004387" titleColor="white">
      <!-- 热门攻略 -->
      <goodsSwiper :datas="hotList" @tapFun="hotListTap"></goodsSwiper>
      <!-- 路线推荐 -->
      <goodsSwiper :datas="roadList" @tapFun="roadListTap"></goodsSwiper>
    </uni-section>

    <tabbar :pagePath="'pages/home/home'"></tabbar>
  </view>
</template>

<script>
  import goodsSwiper from "@/components/pyh-goodsSwiper/pyh-goodsSwiper.vue"
  import tabbar from '@/components/tabbar/tabbar.vue'
  import XsuuSwiper from "../../components/Xss-swiper/Xsuu-swiper.vue"
  import userApi from '@/api/userApi.js'
  import articleApi from '@/api/articleApi.js'
  import roadApi from '@/api/roadApi.js'

  import {
    mapState,
    mapMutations
  } from 'vuex'


  export default {
    components: {
      goodsSwiper,
      tabbar,
      XsuuSwiper
    },
    computed: {
      // 2. 从 m_user 模块中导入需要的 token 字符串
      ...mapState('m_user', ['token']),
    },
    data() {
      return {
        headerConfig: {
          title: '智慧景区自由行',
          back: false,
          color: '#ffffff',
          centerSlot: true,
          leftSlot: true,
          backgroundColor: [1, ['#b0d5df', '#1772b4', '#1772b4', '#b0d5df']],
          slideBackgroundColor: [1, ['#2980B9', '#6DD5FA', '#6DD5FA', '#2980B9']],
        },
        swiperItems: [{
            "img": "https://alifei04.cfp.cn/creative/vcg/nowater800/new/VCG211372937832.jpg?x-oss-process=image/format,webp",
            "title": "如琴湖",
            "Subtitle": "人间四月芳菲尽，山寺桃花始盛开",
          },
          {
            "img": "https://tenfei03.cfp.cn/creative/vcg/nowater800/new/VCG211423703129.jpg?x-oss-process=image/format,webp",
            "title": "五老峰",
            "Subtitle": "庐山东南五老峰，青天削出金芙蓉",
          },
          {
            "img": "https://alifei05.cfp.cn/creative/vcg/nowarter800/new/VCG211169926925.jpg?x-oss-process=image/format,webp",
            "title": "三叠泉",
            "Subtitle": "当年庐山三叠泉，翠峰临水自分明",
          },
        ],

        hotList: {
          title: "热门攻略",
          list: []
        },
        roadList: {
          title: "路线推荐",
          subLable: "",
          list: [],
        },
      }
    },
    onReady() {
      roadApi.getStaticRoadList(1).then(res => {
        this.roadList.list = res.data.data[0]
      })
      
      articleApi.getArticleList().then(res => {
        this.hotList.list = res.data[0]
      })
      
      if (this.token === '') {
        uni.login({
          success: (res) => {
            if (res.code) { //微信登录成功 已拿到code
              console.log("微信登录成功 已拿到code: " + res.code);
              userApi.wechatLogin(res.code).then(res => {
                console.log(res.data.authorization);
                this.updateToken(res.data.authorization)
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        });
      }
    },
    onLoad() {
      uni.hideTabBar()
      
    },

    onPageScroll(e) {
      // 重点，用到滑动切换必须加上
      this.$refs.hxnb.pageScroll(e);
    },
    methods: {
      ...mapMutations('m_user', ['updateToken', 'saveTokenToStorage']),

      onClickBtn(data) {
        //console.log(data);
        uni.showToast({
          title: `key为 ${data.key} 的按钮`,
          icon: 'none',
          duration: 1300
        });
      },

      //功能导览
      goTo(url, type) {
        if (type === "tabbar") {
          uni.switchTab({
            url: url
          })
        } else {
          uni.navigateTo({
            url: url
          })
        }
      },
      hotListTap(e) {
        if (e.type === "more") {
          uni.navigateTo({
            url: "/subpkg/sub_travelTips/sub_travelTips"
          })
        } else if (e.type === "goods") {
          uni.navigateTo({
            url: "/subpkg/sub_travelTipsDetail/sub_travelTipsDetail?index=" + e.id,
          })
        }
      },
      roadListTap(e) {
        if (e.type === "more") {
          uni.switchTab({
            url: "/pages/road/road"
          })
        } else if (e.type === "goods") {
          uni.navigateTo({
            url: '/subpkg/sub_roadLine/sub_roadLine?id=' + e.id
          })
        }
      },
    }
  }
</script>


<style lang="less">
  page {
    background-color: #004387;
  }

  .home {
    padding-bottom: 50px;
  }

  .uni-margin-wrap {
    width: 690rpx;
    width: 100%;
  }

  .swiper {
    height: 300rpx;
  }

  .swiper-item {
    display: block;
    text-align: center;
  }

  .swiper-list {
    margin-top: 40rpx;
    margin-bottom: 0;
  }

  .uni-common-mt {
    margin-top: 60rpx;
    position: relative;
  }

  .info {
    position: absolute;
    right: 20rpx;
  }

  .uni-padding-wrap {
    width: 550rpx;
    padding: 0 100rpx;
  }
</style>
