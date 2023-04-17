<template>
  <view>
    <uni-mall-list :dataList="dataList" :defaultHeadList="defaultHeadList" @change="handleChange"></uni-mall-list>

    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog ref="inputClose" mode="input" title="发送群消息" @confirm="dialogInputConfirm">
        <view class="popupBox">
          <uni-easyinput class="uni-mt-5" trim="all" v-model="subject" placeholder="请输入主题"></uni-easyinput>
          <uni-easyinput type="textarea" v-model="groupMsg" placeholder="请输入内容"></uni-easyinput>
        </view>
      </uni-popup-dialog>
    </uni-popup>

    <view class="footer" v-if="userinfo.id === creator.id">
      <button style="border-radius: 20px; background-color: #47a6ff; color: white; width: 90%;" @click="openSendMsg()">
        <uni-icons type="paperplane-filled" size="20" color="white"></uni-icons>发送群消息
      </button>
    </view>
    <view class="footer" v-else>
      <button style="border-radius: 20px; background-color: #47a6ff; color: white; width: 90%;" @click="exitGroup()">
        <uni-icons type="undo-filled" size="20" color="white"></uni-icons>退出群组
      </button>
    </view>

  </view>
</template>

<script>
  import uniMallList from '@/components/uni-mall-list/uni-mall-list.vue';
  import tourgroupApi from '@/api/tourgroupApi.js'
  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    components: {
      uniMallList
    },
    computed: {
      ...mapState('m_user', ['userinfo']),
    },
    data() {
      return {
        subject: '',
        groupMsg: '',
        defaultHeadList: {
          name: '全部',
          id: '18AF75C3-330A-53AC-270E-EAD060BC0E1A'
        },
        dataList: [],
        //群主消息
        creator: {},
      };
    },
    onReady() {
      tourgroupApi.tourGroupInfo().then(res => {
        this.creator = res.creator
        this.updateCreator(this.creator)
        console.log(res);
        let tourgroup = {
          id: res.id,
          name: res.groupName,
          intro: res.groupIntro,
          inviteCode: res.inviteCode,
          groupSize: res.groupSize,
          type: 'department',
          creator: res.creator.id
        }
        this.dataList.push(tourgroup);
        for (let i = 0; i < res.members.length; i++) {
          let mbrs = {
            id: res.members[i].id,
            name: res.members[i].name,
            pic: res.members[i].avatar,
            birthday: res.members[i].birthday,
            gender: res.members[i].gender,
            interestTags: res.members[i].interestTags,
            phone: res.members[i].phone,
            type: 'user',
          }
          this.dataList.push(mbrs);
        }
        console.log(this.dataList);
      })
    },

    onLoad() {},

    methods: {
      ...mapMutations('m_group', ['updateCreator']),
      
      exitGroup(){
        tourgroupApi.exitGroup().then(res => {
          console.log(res);
        })
      },
      //发送群消息
      dialogInputConfirm() {
        console.log(this.subject);
        console.log(this.groupMsg);
        tourgroupApi.publishGroupNotice(this.subject, this.groupMsg).then(res => {
          console.log(res);
        })
      },
      //弹出发送消息框
      openSendMsg() {
        this.$refs.inputDialog.open();
      },

      handleChange(item) {
        console.log(item);
        if (item.type === 'user') {
          uni.navigateTo({
            url: '/subpkg/sub_agreeUser/sub_agreeUser?user=' + encodeURIComponent(JSON.stringify(item))
          });
        } else {
          uni.navigateTo({
            url: '/subpkg/sub_tourGroupInfo/sub_tourGroupInfo?groupInfo=' + encodeURIComponent(JSON.stringify(item))
          });
        }
      }
    }
  };
</script>

<style lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 750rpx;
    border-radius: 15px 15px 0px 0px;
    padding: 5px 0px;
    background-color: #ffffff;
    box-shadow:
      0px 0px 2.2px rgba(0, 0, 0, 0.087),
      0px 0px 5.3px rgba(0, 0, 0, 0.125),
      0px 0px 10px rgba(0, 0, 0, 0.155),
      0px 0px 17.9px rgba(0, 0, 0, 0.185),
      0px 0px 33.4px rgba(0, 0, 0, 0.223),
      0px 0px 80px rgba(0, 0, 0, 0.31);
  }

  .popupBox {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
