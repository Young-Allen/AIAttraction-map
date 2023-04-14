<template>
  <view class="scenic">
    <uni-search-bar placeholder="搜索景点" bgColor="#EEEEEE" @confirm="search" />

    <view class="card-con">
      <view v-for="(item, index) in attractionList" style="margin: 5px 20px;">
        <hm-sms-list-card :options="item" @click.native="clickCard"></hm-sms-list-card>
      </view>
    </view>
  </view>
</template>

<script>
  import tabbar from '@/components/tabbar/tabbar.vue'
  import HmSmsListCard from '@/components/hm-sms-list-card/index.vue'
  import attractionApi from '@/api/attractionApi.js'

  export default {
    components: {
      tabbar,
      HmSmsListCard,
    },
    data() {
      return {
        attractionList: [],
      };
    },
    onReady() {
      attractionApi.getAttractionList(1, 50).then(res => {
        console.log(res);
        for (let i = 0; i < res.data[0].length; i++) {
          let opt = {
            id: res.data[0][i].id,
            primary: res.data[0][i].imgsUrl,
            paybak: res.data[0][i].name,
            score: res.data[0][i].score,
            openNote: res.data[0][i].openNote,
            txt: '详情',
            side: '/static/hm-sms-list-card/images/img_25832_0_0.png',
          }
          this.attractionList.push(opt)
        }
      })
    },
    onLoad() {
      uni.hideTabBar()
    },
    methods: {
      //点击卡片
      clickCard(e) {
      },
      //搜索景点
      search(res) {
        attractionApi.getAttractionByName(res.value, 1, 50).then(res => {
          this.attractionList = []
          res.data[0].forEach(item => {
            let opt = {
              id: item.id,
              primary: item.imgsUrl,
              paybak: item.name,
              score: item.score,
              openNote: item.openNote,
              txt: '详情',
              side: '/static/hm-sms-list-card/images/img_25832_0_0.png',
            }
            this.attractionList.push(opt)
          })
          console.log(res);
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
