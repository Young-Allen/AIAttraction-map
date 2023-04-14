<template>
  <view class="container">
    <!--轮播-->
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
      <swiper-item v-for="(itemImg, index) in swiperList" :key="index">
        <view class="swiper-item">
          <image :src="itemImg" class="banner-img"></image>
        </view>
      </swiper-item>
    </swiper>
    <!--列表-->
    <view class="list">
      <view v-for="(item, index) in articleList" :key="index" @click="toArticleDetail(item.id)">
        <card :article="item"></card>
      </view>
    </view>
  </view>
</template>

<script>
  import card from "@/components/card/card.vue"
  import articleApi from '@/api/articleApi.js'

  export default {
    components: {
      card
    },
    data() {
      return {
        swiperList: [
          "https://tenfei01.cfp.cn/creative/vcg/nowater800/new/VCG211383093901.jpg?x-oss-process=image/format,webp",
          "https://alifei05.cfp.cn/creative/vcg/nowater800/new/VCG211314912356.jpg?x-oss-process=image/format,webp",
          "https://tenfei04.cfp.cn/creative/vcg/nowater800/new/VCG211284397475.jpg?x-oss-process=image/format,webp"
        ],
        articleList: [],
      }
    },
    onLoad(option) {
      articleApi.getArticleList().then(res => {
        this.articleList = res.data[0]
      })
    },
    methods: {
      toArticleDetail(index) {
        uni.navigateTo({
          url: "/subpkg/sub_travelTipsDetail/sub_travelTipsDetail?index=" + index,
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
  .swiper-item,
  .banner-img {
    width: 100%;
    height: 100%;
  }
</style>
