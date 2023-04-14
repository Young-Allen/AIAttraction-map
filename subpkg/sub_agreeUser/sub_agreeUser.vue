<template>
  <view>
    <view class="user-info">
      <view class="user-info-pic">
        <image :src="user.pic"></image>
      </view>
      <view class="user-info-text">
        <view class="user-info-text-top">{{user.name}}</view>
        <view class="user-info-text-bottom">
          <text>{{user.birthday | toAge}}</text>
        </view>
      </view>
    </view>

    <view class="list">
      <view class="list-item">
        <view class="list-item-left">性别</view>
        <view class="list-item-right">{{user.gender}}</view>
      </view>
      <view class="list-item show-icon">
        <view class="list-item-left">电话</view>
        <view class="list-item-right">+86-{{user.phone}}</view>
      </view>
      <view class="list-item show-icon">
        <view class="list-item-left">兴趣</view>
        <view class="list-item-right" style="padding: 10px 0px;">
          <block v-for="(item, index) in user.interestTags" :key="index">
            <uni-tag :text="item.tagName" :type="types[index % 5]" />
          </block>
        </view>
      </view>
    </view>

    <!-- <view class="list-btn"><button type="button" @click="handleClick">同意</button></view> -->
    <!-- <view class="list-btn-reject"><button type="button" @click="handleClickRej">拒绝</button></view> -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        types: ["default", "primary", "success", "warning", "error"],
        user: {}
      };
    },
    filters: {
      toAge(val) {
        // 计算时间差
        const diffTime = Date.now() - new Date(val).getTime()
        // 计算年龄（向下取整）
        const age = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365))
        return age
      }
    },
    onLoad(option) {
      if (option.user) {
        this.user = JSON.parse(decodeURIComponent(option.user));
      }
    },
    methods: {
      // handleClick() {
      //   uni.showToast({
      //     title: '同意',
      //     duration: 2000
      //   })
      // },
      // handleClickRej() {
      //   uni.showToast({
      //     title: '拒绝',
      //     duration: 2000
      //   })
      // }
    }
  };
</script>

<style scoped lang="scss">
  .user-info {
    background: #ffffff;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 14px 18px;
    box-sizing: border-box;

    .user-info-pic {
      width: 60px;
      height: 60px;
      background: #377fff;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      overflow: hidden;

      image {
        width: 60px;
        height: 60px;
      }
    }

    .user-info-text {
      .user-info-text-top {
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        color: #333333;
        margin-bottom: 10px;
      }

      .user-info-text-bottom {
        text {
          font-size: 14px;
          line-height: 18px;
          color: #666666;
          margin-right: 10px;
        }
      }
    }
  }

  .list {
    .list-item {
      background: #ffffff;
      height: 48px;
      display: flex;
      align-items: center;
      margin-bottom: 1px;
      padding: 10px 15px;
      box-sizing: border-box;
      position: relative;

      &:last-child {
        margin-bottom: 0px;
      }

      &:active {
        background: #f2f3f4;
      }

      &.show-icon {
        height: auto;

        &::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 10px;
          top: 20px;
          right: 15px;
          // background: url(../../static/more.png) no-repeat;
        }
      }

      .list-item-left {
        font-size: 16px;
        color: #666666;
        width: 100px;
      }

      .list-item-right {
        font-size: 14px;
        color: #000000;
        flex: 1;
      }
    }
  }

  .list-btn {
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 30px;

    button {
      height: 48px;
      background: linear-gradient(270deg, #55bafe -0.03%, #3072ff 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 24px;
      color: #ffffff;
      font-weight: bold;
      font-size: 18px;
      outline: none;
      border: none;

      &:active {
        opacity: 0.9;
      }
    }
  }

  .list-btn-reject {
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 30px;

    button {
      height: 48px;
      background: linear-gradient(270deg, #EB3349 -0.03%, #F45C43 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
      border-radius: 24px;
      color: #ffffff;
      font-weight: bold;
      font-size: 18px;
      outline: none;
      border: none;

      &:active {
        opacity: 0.9;
      }
    }
  }
</style>
