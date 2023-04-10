<template>
  <view class="scenic">
    <hx-navbar ref="hxnb" :config="headerConfig" @searchConfirm="searchConfirm" @searchClick="searchClick" />

    <view style="padding: 10px 10px;">
      <custom-waterfalls-flow :value="pointList" @wapperClick="wapperClick">
        <view class="item" v-for="(item, index) in pointList" :key="index" slot="slot{{index}}">
          <view class="title">{{item.name}}</view>
          <view class="desc">{{item.introduction}}</view>
        </view>
      </custom-waterfalls-flow>
    </view>

    <tabbar :pagePath="'pages/scenicSpot-list/scenicSpot-list'"></tabbar>
  </view>
</template>

<script>
  import tabbar from '@/components/tabbar/tabbar.vue'
  import attractionApi from '@/api/attractionApi.js'

  export default {
    components: {
      tabbar,
    },
    data() {
      return {
        headerConfig: {
          pagenum: 0,
          title: '智慧景区自由行',
          back: false,
          color: '#ffffff',
          height: 70,
          backgroundImg: ['/static/header/header02.jpg', 0.1],
          search: {
            value: '',
            placeholder: '请输入景点名搜索',
            disabled: false
          },
        },

        // 是否正在请求数据
        isloading: false,
        pagenum: 1,
        pointList: [],
      };
    },
    onLoad() {
      uni.hideTabBar()
    },
    onReady(){
      this.getAttractionList()
    },
    // 触底的事件
    onReachBottom() {
      // 判断是否正在请求其它数据，如果是，则不发起额外的请求
      if (this.isloading) return
      // 让页码值自增 +1
      this.pagenum += 1
      // 重新获取列表数据
      this.getAttractionList()
    },

    methods: {
      async getAttractionList() {
        // ** 打开节流阀
        this.isloading = true
        const res = await attractionApi.getAttractionList(this.pagenum)
        // ** 关闭节流阀
        this.isloading = false
        this.pointList = [...this.pointList, ...res.data[0]]

        console.log(this.pointList);
        return res
      },

      // 当输入完点击完成时触发
      searchConfirm(data) {
        //console.log(data.value);
        uni.showToast({
          title: `输入了${data.value}`,
          icon: 'none',
          duration: 1300
        });
      },
      // 当点击了搜索框时触发
      // searchClick(data) {
      //   uni.showToast({
      //     title: '点击了搜索框',
      //     icon: 'none',
      //     duration: 1300
      //   });
      // },

      // 景点点击事件
      wapperClick(e) {
        uni.navigateTo({
          url: '/subpkg/sub_pointDetail/sub_pointDetail?id=' + e.id
        })
      },

      //搜索景点
      search(res) {
        uni.showToast({
          title: '搜索：' + res.value,
          icon: 'none'
        })
      },
    }
  };
</script>

<style>
  .scenic {
    padding-bottom: 50px;
  }+

  .card-con {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    font-weight: bold;
    font-size: 36rpx;
    margin: 15rpx 15rpx;
    color: #000;
  }

  .desc {
    font-weight: 500;
    font-size: 25rpx;
    color: #666;
    width: 100%;
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
</style>
