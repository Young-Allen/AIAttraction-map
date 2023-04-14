<template>
  <view class="road">
    <hx-navbar ref="hxnb" :config="headerConfig"> </hx-navbar>

    <block v-for="(item, i) in staticRoad" :key="i">
      <uni-card :title="item.name" :cover="item.coverImg" :bgColor="colorList[i%4]" :is-shadow="true"
        @click="onClick(item.id)">
        <text v-if="item.roadList.length !== null" style="color: aliceblue;">途经点{{item.roadList.length}}个</text>
      </uni-card>
    </block>

    <tabbar :pagePath="'pages/road/road'"></tabbar>
  </view>
</template>

<script>
  import tabbar from '@/components/tabbar/tabbar.vue'
  import roadApi from '@/api/roadApi.js'

  export default {
    components: {
      tabbar
    },
    data() {
      return {
        headerConfig: {
          back: false,
          color: '#ffffff',
          height: 70,
          backgroundImg: '/static/header/header01.jpg',
        },

        colorList: ["#0093d8", "#ee3f4d", "#ef710b", "#7427e8"],
        staticRoad: {},
      }
    },
    onReady() {
      roadApi.getStaticRoadList(1, 10).then(res => {
        console.log(res);
        this.staticRoad = res.data.data[0]
      })
    },
    onLoad() {
      uni.hideTabBar()
    },
    onPageScroll(e) {
      // 重点，用到滑动切换必须加上
      this.$refs.hxnb.pageScroll(e);
    },
    methods: {
      onClick(id) {
        uni.navigateTo({
          url: '/subpkg/sub_roadLine/sub_roadLine?id=' + id
        })
      },
    }
  }
</script>

<style lang="less">
  .road {
    padding-bottom: 50px;
  }
</style>
