<template>
  <view class="scenic">
    <uni-search-bar placeholder="搜索景点" bgColor="#EEEEEE" @confirm="search" />

    <view class="card-con">
      <hm-sms-list-card :options="options" @click.native="clickCard"></hm-sms-list-card>
    </view>
  </view>
</template>

<script>
  import tabbar from '@/components/tabbar/tabbar.vue'
  import HmSmsListCard from '@/components/hm-sms-list-card/index.vue'

  export default {
    components: {
      tabbar,
      HmSmsListCard,
    },
    data() {
      return {
        options: {
          primary: 'http://store.is.autonavi.com/showpic/7bd14f6913f7e2bb18f0d11672e4e5af,http://store.is.autonavi.com/showpic/ed132a4469bd154c29b39ea37014a823,http://store.is.autonavi.com/showpic/737884c8bb1a3fcf67e334f8d2a17913',
          paybak: '白鹿洞书院',
          txt: '详情',
          score: '5.0',
          desc: '糟糕的星期三！通常用于演示',
          side: '/static/hm-sms-list-card/images/img_25832_0_0.png'
        }
      };
    },
    onLoad() {
      uni.hideTabBar()
    },
    methods: {
      //点击卡片
      clickCard(e) {
        console.log('onClick');
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
  }

  .card-con {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
