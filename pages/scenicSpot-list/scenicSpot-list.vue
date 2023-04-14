<template>
  <view class="scenic">
    <hx-navbar ref="hxnb" :config="headerConfig" @searchConfirm="searchConfirm" />

    <pp-waterfall-flow :value="pointList" @clickItem="clickItem" @clickImage="clickImage"></pp-waterfall-flow>

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
        total: 0,
        pointList: [],
      };
    },
    onLoad() {
      uni.hideTabBar()
    },
    onReady() {
      this.getAttractionList()
    },
    // 触底的事件
    onReachBottom() {
      // 判断是否还有下一页数据
      if (this.pagenum * 10 >= this.total) return uni.$showMsg('数据加载完毕！')
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
        const res = await attractionApi.getAttractionList(this.pagenum, 10)
        this.total = res.totalElements
        // ** 关闭节流阀
        this.isloading = false
        this.pointList = [...this.pointList, ...res.data[0]]

        console.log(this.pointList);
        return res
      },

      // 当输入完点击完成时触发
      searchConfirm(data) {
        this.pointList = []
        attractionApi.getAttractionByName(data.value, 1, 10).then(res => {
          this.pointList = [...this.pointList, ...res.data[0]]
        })
      },

      clickItem(id) {
        uni.navigateTo({
          url: '/subpkg/sub_pointDetail/sub_pointDetail?id=' + id
        })
      },
      clickImage(id) {
        uni.navigateTo({
          url: '/subpkg/sub_pointDetail/sub_pointDetail?id=' + id
        })
      },
    }
  };
</script>

<style>
  .scenic {
    padding-bottom: 50px;
  }

  +.card-con {
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
</style>