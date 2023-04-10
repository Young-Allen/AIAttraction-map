<template>
  <view>
    <view class="box-head" style="background-color: #47a6ff; display: flex; align-items: center;">
      <view style="width: 85%; display: inline-block;">
        <uni-search-bar clearButton="auto" cancelButton="none" radius="20" v-model="searchValue" @confirm="search"
          @blur="blur" @clear="clear">
        </uni-search-bar>
      </view>
      <view style="width: 10%; display: inline-block; margin-left: 5px;" @click="showMenuPop = !showMenuPop"
        @blur="showMenuPop = !showMenuPop">
        <image style="width: 30px; height: 30px;" src="../../static/my-icons/add.png" mode="aspectFit"></image>
      </view>
      <view style="z-index:100; overflow: inherit;">
        <luanqing-popup-dialog :isShow="showMenuPop" :top="40" :right="10" :list="popList"
          @onClickPopupItem="onClickPopMenu">
        </luanqing-popup-dialog>
      </view>
    </view>

    <view class="box-list">
      <template v-for="item in currentData">
        <view class="box-list-item" :class="[
						item.children && item.children.length ? 'box-list-item-department-icon' : '', 'box-list-item-user']"
          :key="item.id" @click="handelClickItem(item)">
          <view class="box-list-item-department-pic" v-if="item.type === 'department'">
            <image src="../../static/department-icon.png"></image>
          </view>
          <view class="box-list-item-user-pic" v-else>
            <image v-if="item.pic" :src="item.pic"></image>
            <text v-else>{{ getUserName(item.name) }}</text>
          </view>
          <view class="box-list-item-right">
            <view class="box-list-item-text">{{ item.name }}
              {{ item.children && item.children.length > 0 ? `（${item.children.length}）` : '' }}
            </view>
            <view class="box-list-item-user-tag">
              <text v-if="item.tag === 0" class="unprocessed-tag">未处理</text>
              <text v-else-if="item.tag === 1" class="agreed-tag">同意</text>
              <text v-else="item.tag === -1" class="rejected-tag">拒绝</text>
            </view>
          </view>
        </view>
      </template>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      dataList: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        currentData: [],
        searchValue: '123123',
        showMenuPop: false,
        popList: [{
          name: '添加群组',
          icon: 'https://gitee.com/XXXTENTWXD/pic/raw/master/images/%E6%B7%BB%E5%8A%A0%E7%BE%A4%E8%81%8A.png'
        }, {
          name: '创建群组',
          icon: 'https://gitee.com/XXXTENTWXD/pic/raw/master/images/%E6%95%B0%E8%AF%91_%E7%BE%A4%E8%81%8A.png'
        }],
      };
    },
    mounted() {
      this.currentData = this.dataList;
    },
    methods: {
      onClickPopMenu(item) {
        if (item.name === "添加聊天") {
          uni.showToast({
            title: '跳转添加聊天',
            icon: 'none'
          })
        } else {
          uni.showToast({
            title: '跳转创建群聊',
            icon: 'none'
          })
        }
      },
      clear(res) {
        uni.showToast({
          title: 'clear事件，清除值为：' + res.value,
          icon: 'none'
        })
      },
      blur(res) {
        uni.showToast({
          title: 'blur事件，输入值为：' + res.value,
          icon: 'none'
        })
      },
      //搜索框搜索
      search(res) {
        uni.showToast({
          title: '搜索：' + res.value,
          icon: 'none'
        })
      },
      tabChange(obj) {
        this.getCurrentData(obj.id, this.dataList);
      },
      handelClickItem(item) {
        this.$emit('change', item);
      },
      getUserName(name) {
        if (name.length === 0) {
          return '';
        } else if (name.length <= 2) {
          return name;
        } else if (name.length >= 3) {
          return name.substring(name.length - 2);
        }
      },
      getCurrentData(id, data) {
        if (data.length > 0) {
          data.map(item => {
            if (item.id === id) {
              this.currentData = item.children;
            }
            if (item.children && item.children.length > 0) {
              this.getCurrentData(id, item.children);
            }
          });
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .box-head {
    position: fixed;
    left: 0px;
    width: 100%;
    height: 48px;
    background: #ffffff;
    padding-left: 17px;
    box-sizing: border-box;
    z-index: 999;
  }

  .box-list {
    padding-top: 52px;

    .box-list-item {
      position: relative;
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0px 14px;
      margin: 5px 0px;
      box-sizing: border-box;
      background: #ffffff;

      &:active {
        background: #f2f3f4;
      }

      &:last-child {
        margin-bottom: 0px;
      }

      .box-list-item-department-pic {
        width: 40px;
        height: 40px;
        background: rgba(55, 127, 255, 0.1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 14px;
        overflow: hidden;

        image {
          width: 20px;
          height: 20px;
        }
      }

      .box-list-item-user-pic {
        width: 40px;
        height: 40px;
        background: #377fff;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 14px;
        overflow: hidden;

        image {
          width: 40px;
          height: 40px;
        }

        text {
          color: #ffffff;
          font-size: 12px;
        }
      }

      .box-list-item-right {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
      }

      .box-list-item-text {
        color: #333333;
        font-size: 16px;
      }

      .box-list-item-user-tag {
        .unprocessed-tag {
          background: rgba(55, 127, 255, 0.05);
          border: 1px solid #377fff;
          color: #377fff;
        }

        .agreed-tag {
          background: rgba(49, 210, 144, 0.05);
          border: 1px solid #31d290;
          color: #31d290;
        }

        .rejected-tag {
          background: rgba(210, 74, 88, 0.0);
          border: 1px solid #ff0000;
          color: #ff0000;
        }

        text {
          box-sizing: border-box;
          border-radius: 8px;
          padding: 4px 8px;
          font-size: 10px;
          margin-left: 5px;

          &:first-child {
            margin-left: 0px;
          }
        }
      }

      &.box-list-item-department-icon {
        &::after {
          content: '';
          position: absolute;
          width: 5px;
          height: 10px;
          top: 26px;
          right: 15px;
          // background: url(../../static/more.png) no-repeat;
        }
      }
    }

    .box-list-item-department+.box-list-item-user {
      margin-top: 10px;
    }
  }
</style>
