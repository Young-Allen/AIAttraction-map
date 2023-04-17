<template>
  <view class="formContent">
    <view class="" style="width: 100vw;">
      <uni-card :is-shadow="true">
        <uni-forms ref="valiForm" :rules="rules" :modelValue="valiFormData">
          <uni-forms-item label="团名" required name="groupName">
            <uni-easyinput v-model="valiFormData.groupName" placeholder="请输入团名" />
          </uni-forms-item>
          <uni-forms-item label="群组介绍" name="groupIntro">
            <uni-easyinput type="textarea" v-model="valiFormData.groupIntro" placeholder="请输入群组介绍" />
          </uni-forms-item>
        </uni-forms>
        <button style="background-color: #47a6ff; color: aliceblue; border-radius: 20px;"
          @click="submit('valiForm')">提交</button>
      </uni-card>
    </view>

    <uni-popup ref="alertDialog" type="dialog">
      <uni-popup-dialog type="success" confirmText="确认" title="创建成功" :content="successMsg"
        @confirm="dialogConfirm" @close="dialogClose"></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
  import tourgroupApi from '@/api/tourgroupApi.js'
  import {
    mapState,
    mapMutations
  } from 'vuex'


  export default {
    computed: {
      ...mapState('m_user', ['userinfo'])
    },
    data() {
      return {
        successMsg:'',
        // 校验表单数据
        valiFormData: {
          groupName: '',
          groupIntro: '',
          longitude: null,
          latitude: null,
          groupSize: null,
          inviteCode: null
        },
        // 校验规则
        rules: {
          groupName: {
            rules: [{
              required: true,
              errorMessage: '团名不能为空'
            }]
          },
        },
      };
    },
    onLoad() {},

    methods: {
      submit(ref) {
        console.log(this.valiFormData);
        tourgroupApi.createGroup(this.valiFormData).then(res => {
          this.successMsg = res.inviteCode
          this.$refs.alertDialog.open()
          console.log(res);
        })
      },
      dialogConfirm() {
        uni.navigateBack({
        	delta: 1
        });
      },
      dialogClose() {
        uni.navigateBack({
        	delta: 1
        });
      },
      createGroup() {
        // 生成纯数字邀请码
        const timestamp = Date.now()
        const random = Math.floor(Math.random() * 1000000)
        return `${random}`
      }
    }
  }
</script>

<style lang="scss">
  .formContent {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
