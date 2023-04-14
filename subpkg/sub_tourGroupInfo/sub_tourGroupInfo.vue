<template>
  <view>
    <view class="user-info">
      <view class="user-info-pic">
        <image src="~@/static/my-icons/department-icon.png"></image>
      </view>
      <view class="user-info-text">
        <view class="user-info-text-top">{{groupInfo.name}}</view>
      </view>
    </view>

    <view class="list">
      <view class="list-item">
        <view class="list-item-left">邀请码</view>
        <view class="list-item-right">{{groupInfo.inviteCode}}</view>
      </view>
      <view class="list-item">
        <view class="list-item-left">群容量</view>
        <view class="list-item-right" v-if="groupInfo.groupSize !== null">40/{{groupInfo.groupSize}}</view>
      </view>
      <view class="list-item show-icon">
        <view class="list-item-left">群简介</view>
        <view class="list-item-right" v-if="groupInfo.intro !== null">{{groupInfo.intro}}</view>
      </view>
    </view>

    <view class="list-btn-reject" v-if="creator.id === groupInfo.creator"><button type="button" @click="handleClickRej">解散群组</button></view>
  </view>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    computed: {
      ...mapState('m_group', ['creator']),
    },
    data() {
      return {
        groupInfo: {}
      };
    },
    onLoad(option) {
      if (option.groupInfo) {
        this.groupInfo = JSON.parse(decodeURIComponent(option.groupInfo));
      }
    },
    methods: {
      handleClickRej() {
        uni.showToast({
          title: '拒绝',
          duration: 2000
        })
      }
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
      padding: 15px 15px;
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
        height: auto;
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
