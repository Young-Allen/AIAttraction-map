<template>
  <!-- 获取一个数组，结构为[{date:'时间',info:'内容内容'}] -->
  <!-- @click事件返回点击标签元素的索引值 第一项为0 -->
  <view class="bg">
    <view class="steps">
      <view class="steps_item" v-for="(item, index) in infoList">
        <view class="s_r">
          <view class="line" :style="{backgroundColor:index != 0?backgroundColor:'rgba(0,0,0,0)'}"></view>
          <view class="index" :style="{backgroundColor:backgroundColor,color:color}">
            {{ index + 1 }}
          </view>
          <view class="line" :style="{backgroundColor:index != infoList.length-1?backgroundColor:'rgba(0,0,0,0)'}">
          </view>
        </view>
        <view class="s_l">
          <view class="info_item" @click="topage(item.id)">
            <text class="info_item_title">{{ item.name }}</text>
            <view class="info_item_time">
              <text style="color: #666; font-size: 15px; display: block;">大众评分：</text>
              <text style="color: #47a6ff; font-size: 15px; display: block;">{{item.score}}</text>
            </view>
            <view class="" style="width: 90%; height: 300rpx; background-color: #47a6ff; border-radius: 15px;">
              <image :src="item.imgsUrl" mode=""></image>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: 'YSteps',
    props: {
      infoList: {
        type: Array,
        default: []
      },
      color: {
        type: String,
        default: '#fff'
      },
      backgroundColor: {
        type: String,
        default: '#ff3838'
      },
      lineNum: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {};
    },
    onLoad(e) {
      //获取列表
    },
    methods: {
      topage(e) {
        uni.navigateTo({
          url: "/subpkg/sub_pointDetail/sub_pointDetail?id=" + e
        })
        this.$emit('toPointPage', e);
      }
    }
  };
</script>

<style lang="scss" scoped>
  page {
    background-color: #f2f2f2;
  }

  .bg {
    margin: 0upx 0;
    background-color: #e8f5ff;
    display: flex;
  }

  .steps {
    display: flex;
    flex-direction: column;

    .steps_item {
      display: flex;

      .s_r {
        padding: 0 20rpx;
        display: flex;
        flex-direction: column;
        align-items: center;

        .line {
          flex: 1;
          width: 5rpx;
          background-color: #fff;
        }

        .index {
          width: 40rpx;
          height: 40rpx;
          font-size: 12px;
          text-align: center;
          line-height: 40rpx;
          border-radius: 50rpx;
        }
      }

      .s_l {
        display: flex;
        flex-direction: column;
        padding: 20rpx 0;

        .info_item {
          background-color: #FFFFFF;
          margin-right: 30upx;
          border-radius: 20upx;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 30upx;
          box-shadow: 0 10rpx 30rpx #ddd;

          .info_item_title {
            font-weight: bold;
            font-size: 20px;
          }

          text {
            font-size: 18px;
            font-weight: 500;
            color: rgba(51, 51, 51, 1);
            line-height: 25px;
          }

          view {
            font-size: 14px;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;

            flex-direction: column;
          }
        }

        .info_item:active {
          background-color: #f4f4f4;
        }
      }
    }
  }

  .info_item_time {
    margin: 10px 0px;
    width: 100%;
    height: 20px;
    display: flex;
    align-items: center;
  }
</style>
