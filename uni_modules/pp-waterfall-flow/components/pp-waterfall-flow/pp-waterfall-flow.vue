<template>
  <view class="waterfall-flow" :style="{'--pad':padpx,'--gap':gappx,'--col':columns}">
    <view class="item" v-for="(item,index) in list" :key="index"
      :style="{'--mbt':mbtpx,'--br':brpx,'grid-row':`span ${item.rows?item.rows:colWidth}`}"
      @click="clickItem(item.id)">
      <lazy-load-image :image="item[imageKey]" imgMode="widthFix" :height="item.imageHeight" :index="index"
        :border-radius="imageBR" @finish="loadImage($event,item)" @click="clickImage(item.id)"></lazy-load-image>
      <view class="char" :style="{'--h':charSizeFn}" v-if="showChar && item.rows && item.showChar">
        <view class="title">{{item.name}}</view>
        <view class="desc">{{item.introduction}}</view>
      </view>
    </view>
  </view>
</template>
<script>
  const windowWidth = uni.getSystemInfoSync().windowWidth;
  export default {
    props: {
      value: Array,
      imageKey: {
        type: [String],
        default: 'imgsUrl'
      },
      padding: {
        type: [Number],
        default: 20
      },
      gap: {
        type: [Number],
        default: 20
      },
      columns: {
        type: [String, Number],
        default: 2
      },
      itemBR: {
        type: [String, Number],
        default: 20
      },
      imageBR: {
        type: [String],
        default: '20rpx 20rpx 0 0'
      },
      mbt: {
        type: [Number],
        default: 20
      },
      showChar: {
        type: [Boolean],
        default: true
      },
      charSize: {
        type: [Number],
        default: 140
      }
    },
    computed: {
      charSizeFn() {
        return this.showChar ? `${uni.upx2px(this.charSize)}px` : 0;
      },
      colWidth() {
        const gap = uni.upx2px(this.gap);
        const padding = uni.upx2px(this.padding);
        const result = Math.ceil(((windowWidth - gap * (this.columns + 1) - padding * 2) / this.columns) + uni.upx2px(
          parseFloat(this.mbt)));
        return result;
      },
      padpx() {
        return `${uni.upx2px(this.padding)}px`;
      },
      gappx() {
        return `${uni.upx2px(this.gap)}px`;
      },
      mbtpx() {
        return `${uni.upx2px(this.mbt)}px`;
      },
      brpx() {
        return `${uni.upx2px(this.itemBR)}px`;
      }
    },
    data() {
      return {
        list: []
      }
    },
    watch: {
      value: {
        deep: true,
        immediate: true,
        handler(newVal, oldVal) {
          if (newVal.length == 0) this.list = [];
          const newArr = newVal.slice(this.list.length, newVal.length);
          newArr.forEach(item => {
            if (typeof item.showChar == 'undefined') item.showChar = true;
          })
          this.list.push.apply(this.list, newArr);
        }
      }
    },
    methods: {
      loadImage({
        e,
        index
      }, item) {
        const gap = uni.upx2px(this.gap);
        const padding = uni.upx2px(this.padding);
        const width = ((windowWidth - gap * (this.columns - 1) - padding * 2) / this.columns);
        const rate = e.detail.width / e.detail.height;
        const imageHeight = width / rate;
        const rows = +Math.ceil(imageHeight);
        const gridRow = rows + (this.showChar && item.showChar ? uni.upx2px(parseFloat(this.charSize)) : 0) + uni
          .upx2px(parseFloat(this.mbt));
        item.rows = gridRow;
        item.imageHeight = `${imageHeight}px`;
        // #ifdef VUE2
        this.$set(this.list, index, item);
        // #endif
      },
      clickImage(index) {
        this.$emit('clickImage', index);
      },
      clickItem(index) {
        this.$emit('clickItem', index);
      }
    }
  }
</script>
<style>
</style>
<style scoped lang="scss">
  .waterfall-flow {
    display: grid;
    grid-template-columns: repeat(var(--col), 1fr);
    grid-template-rows: repeat(auto-fill, 1px);
    grid-auto-rows: 1px;
    grid-column-gap: var(--gap);
    padding: 0 var(--pad);
  }

  .item {
    margin-bottom: var(--mbt);
    border-radius: var(--br);
    box-shadow: 0 0 20rpx rgba(0, 0, 0, 0.1);
    background-color: #fff;
    overflow: hidden;
    font-size: 0;
    // 骗系统开启硬件加速
    transform: transition3d(0, 0, 0);

    .char {
      height: var(--h);
    }
  }

  // 图片下方内容扩展样式
  .char {
    padding: 0 10rpx;

    .title {
      line-height: 48rpx;
      font-size: 30rpx;
      font-weight: 700;
      color: #222;
    }

    .desc {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      line-height: 36rpx;
      font-size: 24rpx;
      color: #666;
    }
  }
</style>