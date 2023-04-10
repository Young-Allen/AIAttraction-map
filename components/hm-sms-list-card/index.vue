<template>
  <div class="hm-sms-list-card">
    <div class="box">
      <image class="primary" :src="options.primary" />
      <div class="sub">
        <div class="outer">
          <div class="wrap">
            <text style="color: black;font-size: 15px; font-weight: 600;">{{ options.paybak }}</text>
          </div>
          <text class="txt" @click="toPointDetail()">{{ options.txt }}</text>
        </div>
        <div class="block">
          <image src="../../static/my-icons/time.png" style="width: 15px; height: 15px;"></image>
          <text style="color: #47a6ff; font-size: 10px;">2023年3月14日21:53:12</text>
        </div>
        <div class="block" v-if="isShowRate">
          评个分吧：
          <uni-rate allow-half :value="0" />
        </div>
        <div class="block" v-else="isShowRate">
          <xiaoStarComponent :starCount="6.5" :title="'大众评分'"></xiaoStarComponent>
        </div>
      </div>
      <image class="side" :src="options.side" />
    </div>
  </div>
</template>
<script>
  import xiaoStarComponent from '../xiao-star-component/xiao-star-component.vue'

  export default {
    name: 'HmSmsListCard',
    components: {
      xiaoStarComponent
    },
    props: {
      isShowRate: {
        type: Boolean,
        default: false
      },
      dataId: {
        type: String,
        default: 'hm-sms-list-card'
      },
      options: {
        type: Object,
        default: function() {
          return {
            primary: '/static/hm-sms-list-card/images/img_25832_0_2.png',
            paybak: '景点名称',
            txt: '详情',
            score: '5.0',
            desc: '糟糕的星期三！通常用于演示',
            side: '/static/hm-sms-list-card/images/img_25832_0_0.png'
          };
        }
      }
    },
    data() {
      return {};
    },
    methods: {}
  };
</script>
<style>
  @import './index.response.css';
</style>
