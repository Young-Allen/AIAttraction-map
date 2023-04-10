<template>
  <view>
    <view class="pageTabCon">
      <view class="pageTabL" @click="pageTabL">
        <image src="~@/static/my-icons/located.png" mode="" style="width: 30px;height: 30px;"></image>
      </view>

      <view class="pageTab">
        <view class="lef" @click="pageTabML">
          <image src="~@/static/my-icons/addGroup.png" mode="" style="width: 30px;height: 30px;"></image>
          <text style="font-size: 10px;">加团</text>
        </view>
        <view class="mid">
          <view class="midmid" @click="pageTabMM">
            <image src="~@/static/my-icons/message.png" mode="" style="width: 30px;height: 30px;"></image>
            <text style="font-size: 10px;">消息</text>
          </view>
        </view>
        <view class="lef" @click="pageTabMR">
          <image src="~@/static/my-icons/screening.png" mode="" style="width: 30px;height: 30px;"></image>
          <text style="font-size: 10px;">筛选</text>
        </view>
      </view>

    <!--  <view class="pageTabR" @click="pageTabR">
        <image src="~@/static/my-icons/icon1.png" mode="" style="width: 30px;height: 30px;"></image>
        <text style="font-size: 10px;">线路</text>
      </view> -->
    </view>
  </view>
</template>

<script>
  export default {
    name: "map_tabbar",
    data() {
      return {

      };
    },

    methods: {
      pageTabL() {
        this.$emit('pageTabL') // 子向父
      },
      pageTabML() {
        this.$emit('pageTabML') // 子向父
      },
      pageTabMM() {
        this.$emit('pageTabMM') // 子向父
      },
      pageTabMR() {
        this.$emit('pageTabMR') // 子向父
      },
      pageTabR() {
        this.$emit('pageTabR') // 子向父
      }
    }
  }
</script>

<style lang="scss">
  .pageTabCon {
    position: absolute;
    width: 100%;
    bottom: 70px;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: #666;

    .pageTabL {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      position: absolute;
      left: 50rpx;
      width: 40px;
      height: 40px;
      box-shadow: 0px 0px 10px 2px rgba(199, 199, 199, 0.9);
      background-color: white;
      border-radius: 30px;
    }

    .pageTabR {
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      position: absolute;
      right: 50rpx;
      width: 50px;
      height: 50px;
      background-color: white;
      border-radius: 25px;
    }

    .pageTab {
      justify-content: center;
      align-items: center;
      display: flex;
      position: absolute;
      width: 350rpx;
      height: 90rpx;
      background-color: white;
      border-radius: 90px;

      .lef {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 40px;
      }

      .mid {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background-color: white;
        border-radius: 30px;

        .midmid {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          border-radius: 25px;
          color: white;
          background-color: #47a6ff;
        }
      }
    }
  }
</style>
