<template>
  <view class="container">
    <view class="ui-all">
      <view class="avatar" @tap="avatarChoose">
        <view class="imgAvatar">
          <view class="iavatar" :style="'background: url('+avater+') no-repeat center/cover #eeeeee;'"></view>
        </view>
        <text v-if="avater">修改头像</text>
        <text v-if="!avater">授权微信</text>
        <button v-if="!avater" open-type="getUserInfo" @tap="getUserInfo" class="getInfo"></button>
      </view>

      <view class="ui-list right">
        <text>性别</text>
        <picker @change="bindPickerChange" mode='selector' range-key="name" :value="index" :range="sex">
          <view class="picker">
            {{sex[index].name}}
          </view>
        </picker>
      </view>

      <view class="ui-list right">
        <text>生日</text>
        <picker mode="date" :value="date" @change="bindDateChange">
          <view class="picker">
            {{date}}
          </view>
        </picker>
      </view>

      <text style="font-size: 15px; color: #848484;font-weight: 300;">选择你感兴趣的话题以获取更精准的推荐</text>
      <view class="content">
        <dragBall :onInit='interestsTags' :colse='colse' @click_='click_'></dragBall>
      </view>
      <button class="save" type="primary" @tap="savaInfo">保 存 修 改</button>
    </view>

  </view>
</template>

<script>
  import dragBall from '@/components/drag-ball/drag-ball.vue'
  import userApi from '@/api/userApi.js'
  import {
    mapState,
    mapMutations
  } from 'vuex'

  export default {
    components: {
      dragBall
    },
    computed: {
      // 2. 从 m_user 模块中导入需要的 token 字符串
      ...mapState('m_user', ['token', 'userinfo', 'userPosition']),
    },
    data() {
      return {
        interestsTags: [{
            "x": 79.45049232358554,
            "y": 123.96125634387865,
            "radius": 56,
            "color": ["#787878", "#25AEBF"],
            "colse": false,
            "size": "15",
            "floating": [0, false],
            "labelName": "山川美景",
          },
          {
            "x": 198.76606872737423,
            "y": 79.28588367513791,
            "radius": 54,
            "color": ["#787878", "#25AEBF"],
            "colse": false,
            "size": "15",
            "floating": [5, false],
            "labelName": "文物古迹"
          },
          {
            "x": 290.5796037054993,
            "y": 108.66399668264214,
            "radius": 60,
            "color": ["#787878", "#25AEBF"],
            "colse": false,
            "size": "15",
            "floating": [7, true],
            "labelName": "放松身心"
          },
          {
            "x": 152.08387466634375,
            "y": 132.84566053159986,
            "radius": 50,
            "color": ["#787878", "#25AEBF"],
            "colse": false,
            "size": "15",
            "floating": [5, false],
            "labelName": "温泉度假"
          },
          {
            "x": 287.6493903164786,
            "y": 188.97865661799298,
            "radius": 46,
            "color": ["#787878", "#25AEBF"],
            "colse": false,
            "size": "15",
            "floating": [5, false],
            "labelName": "工作出行"
          },
          {
            "x": 107.73067038886846,
            "y": 187.2797271941687,
            "radius": 44,
            "color": ["#787878", "#25AEBF"],
            "colse": false,
            "size": "15",
            "floating": [5, false],
            "labelName": "亲友伴游"
          },
          {
            "x": 40,
            "y": 205.77712553537478,
            "radius": 42,
            "color": ["#787878", "#25AEBF"],
            "colse": false,
            "size": "15",
            "floating": [5, false],
            "labelName": "宗教文化"
          },
        ],
        colse: false,
        curInt: [],
        tmptags:[],
        
        position: '',
        value: '请填写',
        sex: [{
          id: 1,
          name: '男'
        }, {
          id: 2,
          name: '女'
        }],
        index: 0,
        date: '请填写',
        avater: '',
        url: '',
        headimg: ''
      }
    },

    onLoad(option) {
      let that = this
      userApi.getAllTags().then(res => {
        this.tmptags = res
        console.log(this.tmptags);
        res.forEach((item, index) => {
          this.$set(that.interestsTags[index], 'labelName', item.tagName)
        })
      })

      this.getPosition()

      if (option.userInfo !== undefined) {
        const userInfo = JSON.parse(decodeURIComponent(option.userInfo));
        this.avater = userInfo.avatarUrl
        console.log(userInfo);
      }
    },

    methods: {
      ...mapMutations('m_user', ['saveUserInfoToStorage', 'updateUserInfo', 'updateToken', 'saveTokenToStorage',
        'updateUserPosition'
      ]),

      //获取用户当前的定位
      getPosition() {
        let that = this
        uni.getFuzzyLocation({
          success: function(res) {
            let pos = {
              latitude: res.latitude,
              longitude: res.longitude
            }
            console.log(pos);
            that.position = res.latitude + ',' + res.longitude
            that.updateUserPosition(pos)
          }
        });
      },

      click_(index) {
        let _this = this;
        let number = null;
        let curInt = index;
        _this.curInt.forEach((item, index) => {
          if (item == curInt) {
            number = index;
          }
        });

        if (number == null) {
          if (_this.curInt.length <= 7) {
            _this.curInt.push(curInt);
          } else {
            uni.showToast({
              title: '超出可选范围8个',
              duration: 2000
            })
          }
        } else {
          _this.curInt.splice(number, 1);
        }
      },

      savaInfo() {
        console.log(this.curInt);
        console.log(this.userPosition);
        let that = this;
        let headimg = that.headimg;
        let gender = that.index;
        let birthday = that.date;
        let interestTags = []
        let address = ""
        let updata = {};

        if (this.curInt.length < 2) {
          uni.showToast({
            title: '请选择至少两个感兴趣的标签',
            icon: 'none',
            duration: 2000
          });
          return;
        } else {
          let tmp = []
          this.curInt.forEach(item => {
            let tag = {
              id: this.tmptags[item].id,
              tagName: this.tmptags[item].tagName
            }
            tmp.push(tag)
          })
          updata.interestTags = tmp
        }

        if (!headimg) {
          headimg = that.avater;
        }
        updata.avatar = headimg;

        updata.gender = this.sex[gender].name;
        if (birthday == "0000-00-00") {
          uni.showToast({
            title: '请选择生日',
            icon: 'none',
            duration: 2000
          });
          return;
        }
        updata.birthday = birthday;
        updata.address = address

        that.updata(updata);
      },

      async updata(datas) {
        //传后台
        console.log(datas);
        userApi.updateUserInfo(datas).then(res => {
          this.updateUserInfo(res.data)
          uni.switchTab({
            url: '/pages/my/my'
          })
        })
      },

      isPoneAvailable(poneInput) {
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (!myreg.test(poneInput)) {
          return false;
        } else {
          return true;
        }
      },

      avatarChoose() {
        let that = this;
        uni.chooseImage({
          count: 1,
          sizeType: ['original', 'compressed'],
          sourceType: ['album', 'camera'],
          success(res) {
            // tempFilePath可以作为img标签的src属性显示图片
            that.imgUpload(res.tempFilePaths);
            const tempFilePaths = res.tempFilePaths;
          }
        });
      },

      getUserInfo() {
        uni.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log(res);
            uni.showToast({
              title: '已授权',
              icon: 'none',
              duration: 2000
            })
          }
        })
      },


      imgUpload(file) {
        let that = this;
        uni.uploadFile({
          header: {
            Authorization: uni.getStorageSync('token')
          },
          url: '/api/upload/image', //需传后台图片上传接口
          filePath: file[0],
          name: 'file',
          formData: {
            type: 'user_headimg'
          },
          success: function(res) {
            var data = JSON.parse(res.data);
            data = data.data;
            that.avater = that.url + data.img;
            that.headimg = that.url + data.img;
          },
          fail: function(error) {
            console.log(error);
          }
        });
      },

      bindPickerChange(e) {
        this.index = e.detail.value;
      },
      bindDateChange(e) {
        this.date = e.detail.value;
      },
      
    },
  }
</script>

<style lang="less">
  .content {
    width: 100%;
    height: 700upx;
    margin: 20rpx auto;
  }

  .container {
    display: block;
  }

  .ui-all {
    padding: 20rpx 40rpx;

    .avatar {
      width: 100%;
      text-align: left;
      padding: 20rpx 0;
      border-bottom: solid 1px #f2f2f2;
      position: relative;

      .imgAvatar {
        width: 140rpx;
        height: 140rpx;
        border-radius: 50%;
        display: inline-block;
        vertical-align: middle;
        overflow: hidden;

        .iavatar {
          width: 100%;
          height: 100%;
          display: block;
        }
      }

      text {
        display: inline-block;
        vertical-align: middle;
        color: #8e8e93;
        font-size: 28rpx;
        margin-left: 40rpx;
      }

      &:after {
        content: ' ';
        width: 20rpx;
        height: 20rpx;
        border-top: solid 1px #030303;
        border-right: solid 1px #030303;
        transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        /* IE 9 */
        -moz-transform: rotate(45deg);
        /* Firefox */
        -webkit-transform: rotate(45deg);
        /* Safari 和 Chrome */
        -o-transform: rotate(45deg);
        position: absolute;
        top: 85rpx;
        right: 0;
      }
    }

    .ui-list {
      width: 100%;
      text-align: left;
      padding: 20rpx 0;
      border-bottom: solid 1px #f2f2f2;
      position: relative;

      text {
        color: #4a4a4a;
        font-size: 28rpx;
        display: inline-block;
        vertical-align: middle;
        min-width: 150rpx;
      }

      input {
        color: #030303;
        font-size: 30rpx;
        display: inline-block;
        vertical-align: middle;
      }

      button {
        color: #030303;
        font-size: 30rpx;
        display: inline-block;
        vertical-align: middle;
        background: none;
        margin: 0;
        padding: 0;

        &::after {
          display: none;
        }
      }

      picker {
        width: 90%;
        color: #030303;
        font-size: 30rpx;
        display: inline-block;
        vertical-align: middle;
        position: absolute;
        top: 30rpx;
        left: 150rpx;
      }

      textarea {
        color: #030303;
        font-size: 30rpx;
        vertical-align: middle;
        height: 150rpx;
        width: 100%;
        margin-top: 50rpx;
      }

      .place {
        color: #999999;
        font-size: 28rpx;
      }
    }

    .right:after {
      content: ' ';
      width: 20rpx;
      height: 20rpx;
      border-top: solid 1px #030303;
      border-right: solid 1px #030303;
      transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      /* IE 9 */
      -moz-transform: rotate(45deg);
      /* Firefox */
      -webkit-transform: rotate(45deg);
      /* Safari 和 Chrome */
      -o-transform: rotate(45deg);
      position: absolute;
      top: 40rpx;
      right: 0;
    }

    .save {
      height: 50px;
      line-height: 50px;
      border-radius: 100px;
      margin: 15px 0;
      background-color: #4095E5;
      font-size: 28rpx;
    }
  }
</style>
