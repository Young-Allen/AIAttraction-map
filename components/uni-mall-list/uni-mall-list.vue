<template>
  <view>
    <view class="box-head">
      <view style="width: 80%; display: inline-block;">
        <uni-mall-head ref="refUniMallHead" @change="tabChange"></uni-mall-head>
      </view>
      <view style="width: 10%; display: inline-block; margin-left: 5px;" @click="isShowMenuPop()"
        @blur="showMenuPop = !showMenuPop">
        <image style="width: 50px; height: 50px;" src="~@/static/my-icons/add01.png" mode="aspectFit"></image>
      </view>
      <view style="z-index:100; overflow: visible;">
        <luanqing-popup-dialog :isShow="showMenuPop" :top="42" :right="18" :list="popList"
          @onClickPopupItem="onClickPopMenu">
        </luanqing-popup-dialog>
      </view>
    </view>

    <!-- 输入框邀请码 -->
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog ref="inputClose" mode="input" title="请输入邀请码" value="" placeholder="邀请码"
        @confirm="dialogInputConfirm"></uni-popup-dialog>
    </uni-popup>


    <!-- item.children && item.children.length ? 'box-list-item-department-icon' : '', -->
    <view class="box-list">
      <template v-for="item in currentData">
        <view class="box-list-item" :class="[
						item.type === 'user' ? 'box-list-item-user' : 'box-list-item-department'
					]"  @click="handelClickItem(item)">
          <view class="box-list-item-department-pic" v-if="item.type === 'department'">
            <image src="~@/static/my-icons/department-icon.png"></image>
          </view>
          <view class="box-list-item-user-pic" v-else>
            <image v-if="item.pic" :src="item.pic"></image>
            <text v-else>{{ getUserName(item.name) }}</text>
          </view>
          <view class="box-list-item-right">
            <view class="box-list-item-text">{{ item.name }}
              {{ item.children && item.children.length > 0 ? `（${item.children.length}）` : '' }}
            </view>
            <view class="box-list-item-user-tag" v-if="item.type === 'user'">
              <!-- <text v-if="item.tag === 0" class="unprocessed-tag">未处理</text>
              <text v-else-if="item.tag === 1" class="agreed-tag">同意</text>
              <text v-else="item.tag === -1" class="rejected-tag">拒绝</text> -->
            </view>
          </view>
        </view>
      </template>
    </view>
  </view>
</template>

<script>
  import uniMallHead from '@/components/uni-mall-head/uni-mall-head.vue';
  import tourgroupApi from '@/api/tourgroupApi.js'


  export default {
    components: {
      uniMallHead
    },
    props: {
      dataList: {
        type: Array,
        default: () => []
      },
      defaultHeadList: {
        type: Object,
        default: () => {}
      }
    },
    watch: {
      dataList(newVal, oldVal) {
        console.log(newVal);
        this.currentData = newVal
      }
    },
    data() {
      return {
        currentData: [],
        isShow: true,
        showMenuPop: false,
        timerId: '',
        popList: [{
          name: '加入群组',
          icon: '/static/my-icons/addtogroup.png'
        }, {
          name: '创建群组',
          icon: '/static/my-icons/groupchat.png'
        }],
      };
    },
    mounted() {
      this.init();
    },
    methods: {
      dialogInputConfirm(val) {
        console.log(val);
        tourgroupApi.joinGroup(val).then(res => {
          console.log(res);
        })
        // 关闭窗口后，恢复默认内容
        this.$refs.inputDialog.close()
        uni.navigateTo({
          url: "/subpkg/sub_addToGroup/sub_addToGroup"
        })
      },

      //点击下拉栏的标签所执行的函数
      onClickPopMenu(item) {
        if (item.name === "加入群组") {
          this.$refs.inputDialog.open()
        } else {
          uni.navigateTo({
            url: "/subpkg/sub_createGroup/sub_createGroup"
          })
        }
      },

      //显示隐藏下拉栏
      isShowMenuPop() {
        if (this.isShow === false) return
        // 取消定时器
        clearTimeout(this.timerId);
        this.showMenuPop = !this.showMenuPop
        this.isShow = !this.isShow
        this.imerId = setTimeout(() => {
          this.showMenuPop = !this.showMenuPop
          this.isShow = !this.isShow
        }, 3000);
      },


      init() {
        if (Object.keys(this.defaultHeadList).length > 0) {
          this.$refs.refUniMallHead.addTab(this.defaultHeadList);
        }
        this.currentData = this.dataList;
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
        if (id === this.defaultHeadList.id) {
          this.currentData = this.dataList;
        } else {
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
      padding: 0 14px;
      box-sizing: border-box;
      background: #ffffff;
      margin-bottom: 1px;

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
          background: url(../../static/my-icons/more.png) no-repeat;
        }
      }
    }

    .box-list-item-department+.box-list-item-user {
      margin-top: 10px;
    }
  }
</style>
