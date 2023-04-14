<template>
  <view class="my-userinfo-container" style="position: relative;">

    <!-- 头像昵称区域 -->
    <view class="top-box">
      <image v-if="userinfo.avatar === ''" src="@/static/hm-sms-list-card/images/img_25832_0_2.png" class="avatar"></image>
      <image v-else :src="userinfo.avatar" class="avatar"></image>
      <text style="margin-top: 5px;font-weight: 600;font-size: 15px">{{userinfo.name}}</text>
    </view>

    <!-- 面板的列表区域 -->
    <view class="panel-list">
      <!-- 第二个面板 -->
      <view class="panel">
        <!-- 面板的标题 -->
        <view class="panel-title"></view>
        <!-- 面板的主体 -->
        <view class="panel-body">
          <!-- 面板主体中的 item 项 -->
        </view>
      </view>

      <!-- 第三个面板 -->
      <view class="panel">
        <view class="panel-list-item" @click="scanBtn">
          <text>扫一扫</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel-list-item" @click="toChangeUserInfoPage">
          <text>个人信息</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel-list-item" @click="makePhonecall">
          <text>联系客服</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
    <!--    <view class="panel-list-item">
          <text>退出登录</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view> -->
      </view>
    </view>
  </view>
</template>

<script>
  import userApi from '@/api/userApi.js'
  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    name: "my-userinfo",
    computed: {
      // 2. 从 m_user 模块中导入需要的 token 字符串
      ...mapState('m_user', ['token', 'userinfo']),
    },
    data() {
      return {

      };
    },
    onLoad() {},
    onReady() {
      userApi.getUserInfo().then(res => {
        this.updateUserInfo(res.data)
      })
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo']),

      makePhonecall() {
        uni.makePhoneCall({
          phoneNumber: '07928296565' //仅为示例，并非真实的电话号码
        })
      },
      toChangeUserInfoPage() {
        uni.navigateTo({
          url: "/subpkg/sub_changeUserInfo/sub_changeUserInfo"
        })
      },
      //点击扫一扫
      scanBtn() {
        // 允许从相机和相册扫码
        uni.scanCode({
          success: function(res) {
            uni.showToast({
              title: "条码类型：" + res.scanType,
              duration: 2000
            })
            uni.showToast({
              title: '条码内容：' + res.result,
              duration: 2000
            })
          }
        });
      },
    }
  }
</script>

<style lang="scss">
  .my-userinfo-container {
    height: 100%;
    // 为整个组件的结构添加浅灰色的背景
    background-color: #f4f4f4;

    .top-box {
      height: 400rpx;
      background-color: #47a6ff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .avatar {
        display: block;
        width: 90px;
        height: 90px;
        border-radius: 45px;
        border: 2px solid white;
        box-shadow: 0 1px 5px black;
      }

      .nickname {
        color: white;
        font-weight: bold;
        font-size: 16px;
        margin-top: 10px;
      }
    }
  }

  .panel-list {
    padding: 0 10px;
    position: relative;
    top: -10px;

    .panel {
      background-color: white;
      border-radius: 5px;
      margin-bottom: 8px;

      .panel-title {
        line-height: 45px;
        padding-left: 10px;
        font-size: 15px;
        height: 30px;
        border-bottom: 1px solid #f4f4f4;
      }

      .panel-body {
        display: flex;
        justify-content: space-around;

        .panel-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          font-size: 13px;
          padding: 10px 0;

          .icon {
            width: 35px;
            height: 35px;
          }
        }
      }
    }
  }

  .panel-list-item {
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    padding: 0 10px;
  }
</style>