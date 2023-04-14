<template>
  <view class="my-container">
    <!-- 用户未登录时，显示登录组件 -->
    <my-login v-if="Object.keys(userinfo).length === 0" @userLogin="userLogin()"></my-login>
    <!-- 用户登录后，显示用户信息组件 -->
    <my-userinfo v-else></my-userinfo>

    <tabbar :pagePath="'pages/my/my'"></tabbar>
  </view>
</template>

<script>
  import tabbar from '@/components/tabbar/tabbar.vue'
  import userApi from '@/api/userApi.js'

  // 1. 从 vuex 中按需导入 mapState 辅助函数
  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    components: {
      tabbar
    },
    computed: {
      // 2. 从 m_user 模块中导入需要的 token 字符串
      ...mapState('m_user', ['token', 'userinfo', 'userPosition']),
    },
    data() {
      return {

      };
    },
    onLoad() {
      uni.hideTabBar()
      this.getPosition()
    },
    methods: {
      ...mapMutations('m_user', ['saveUserInfoToStorage', 'updateUserInfo', 'updateToken', 'saveTokenToStorage',
        'saveUserPositionToStorage',
        'updateUserPosition'
      ]),

      getPosition() {
        let that = this
        uni.getFuzzyLocation({
          success: function(res) {
            let pos = {
              latitude: res.latitude,
              longitude: res.longitude
            }
            console.log(pos);
            that.updateUserPosition(pos)
          }
        });
      },

      userLogin() {
        uni.navigateTo({
          url: '/subpkg/sub_changeUserInfo/sub_changeUserInfo'
        })
      }
    }
  }
</script>

<style lang="less">
  page {
    overflow-y: hidden
  }

  page,
  .my-container {
    height: 100%;
    padding-bottom: 50px;
  }
</style>