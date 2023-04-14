<template>
  <view class="content">
    <!-- 顶部导航栏 -->
    <l-tabs :list="headNavi" activeTextColor="#4d4d4d" textColor="#ffffff" layout="scroll" :lineShow="true"
      :lineCrude="6" labelPadding="30" bk="#47a6ff" activeSize="16" linePlace="30px"
      lineColor="linear-gradient(to right, #FF8008, 30%, #ffc837)" @chooseTab="chooseTab">
    </l-tabs>

    <!-- 通知栏 -->
    <uni-notice-bar v-if="notice !== ''" show-icon scrollable :text="notice" />

    <!-- 扫一扫 -->
    <view class="scanBtn" @click="scanBtn">
      <image src="~@/static/my-icons/scan1.png" mode="" style="width: 40px;height: 40px;"></image>
    </view>

    <!-- 路线选择 -->
    <uni-fab ref="fab" :contentPath="roadContent" :horizontal="'right'" :direction="'vertical'"
      :show="isShowRoadContent" @trigger="trigger" />
    <!-- 弹出框，具体路线信息 -->
    <uni-popup ref="roadMsg" type="bottom">
      <view class="roadContent">
        <!-- <vgt-tab :list="roadNameList" @onValueChange="onValueChange"></vgt-tab> -->
        <view class="scenicCon" v-if="polyline.length !== 0">
          <text v-if="spendTime !== ''"
            style="color: #47a6ff; font-weight: 700; font-size: 17px; text-align: center; margin-bottom: 5px;">预计花费时间：{{spendTime}}分钟</text>
          <!-- 景点进度条 -->
          <uni-steps :options="threeRoadOne" :active="activePoint" @switchSpot="switchSpot"></uni-steps>
          <!-- 景点卡片 -->
          <movable-swiper v-if="threeRoadOne.length !== 0" ref="movableSwiper" :dataList="threeRoadOne"
            :height="'150rpx'" style="margin-top: 30px;">
            <template v-slot="{movSlotData}">
              <view v-if="movSlotData" class="pointBox">
                <image class="pointBox_primary" mode="scaleToFill" :src="movSlotData.imgsUrl" />
                <view class="pointBox_msg">
                  <text class="movSlotDataName">{{movSlotData.name}}</text>
                  <xiaoStarComponent :starCount="movSlotData.score"></xiaoStarComponent>
                  <view class="more" @click="toPointDetail(movSlotData.id)">
                    <text>详情</text>
                    <image style="width: 20px;height: 20px;" :src="'/static/my-icons/goIcon.png'" />
                  </view>
                </view>
                <view class="midmid"
                  @click="moveToLocation({longitude: movSlotData.longitude, latitude: movSlotData.latitude })">
                  <uni-icons class="fab-circle-icon" type="navigate" size="32"></uni-icons>
                  <text style="font-size: 10px;">到这里去</text>
                </view>
              </view>
            </template>
          </movable-swiper>
        </view>

        <text v-else
          style="color: #47a6ff; font-weight: 700; font-size: 20px; line-height: 400rpx; text-align: center;">未选择路线</text>
      </view>
    </uni-popup>

    <!-- :enable-poi="false"-->
    <map id="map" class="map" scale="18" min-scale="12" max-scale="17" show-compass="true" show-scale="true"
      :show-location="true" :polyline="polyline" :enable-poi="false" :latitude="'29.565137170757925'"
      :longitude="'115.9703530452523'" @markertap="markertap" @tap="tapMap">
    </map>

    <!-- 中间导航岛组件 -->
    <midTabbar @pageTabL="pageTabL" @pageTabML="pageTabML" @pageTabMM="pageTabMM" @pageTabMR="pageTabMR"></midTabbar>
    <!-- 筛选想去的景点界面 -->
    <zqs-select :list="wantToGoList" :recommendations="recommendations" label-key="name" value-key="id"
      v-show="isShowModal=='true'" v-model="checkPointList" @search="searchEvent" @change="selectChange2"
      @confirm="selectPoint"></zqs-select>

    <!-- 弹出框，景点简介 -->
    <uni-popup ref="popupHi" type="bottom">
      <view style="background-color: white; border-radius: 20px 20px 0px 0px; height: 400rpx;">
        <view style="padding-top: 5px">
          <hm-sms-list-card :options="options" :isShowRate="false"></hm-sms-list-card>

          <view style="display: flex;justify-content: center;position: relative;">
            <text style="position: absolute; left: 20px; top: 20px; color: #47a6ff; font-weight: 700;"> 景点当前人数</text>
            <cmd-progress type="circle" :percent="options.current/ options.capacity * 100" stroke-color="#47a6ff"
              :stroke-width="12" :width="70" :showInfo="false"></cmd-progress>
            <view style="position: absolute;text-align: center;top: 45%;">
              <view style="font-size:15rpx;">{{options.current}}/{{options.capacity}}</view>
            </view>

            <view class="goto" @click="gotoPos(options.id)">
              <image src="~@/static/my-icons/goto.png" mode="" style="width: 35px;height: 35px;"></image>
              <text style="font-size: 15px;">前往</text>
            </view>
          </view>
        </view>
      </view>
    </uni-popup>

    <!-- 扫码好评 -->
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog ref="inputClose" mode="input" title="评价一下当前景点吧!" @confirm="dialogInputConfirm">
        <view class="popupBox">
          <text>{{scanPoint.name}}</text>
          <uni-rate allow-half :value="scanPoint.score" />
        </view>
      </uni-popup-dialog>
    </uni-popup>

  </view>
</template>

<script>
  const img = '../../static/place_icons/place02.png';
  const locImg = '../../static/place_icons/locPosition.png';
  import {
    getSwiperList
  } from '@/components/sn-swiper/esc-swiper/helper.js';
  import {
    mapGetters,
    mapState,
    mapMutations
  } from 'vuex'
  import midTabbar from '@/components/map_tabbar/map_tabbar.vue'
  import movableSwiper from '@/components/movable-swiper/movable-swiper.vue'
  import xiaoStarComponent from '@/components/xiao-star-component/xiao-star-component.vue'
  import zqsSelect from '@/components/zqs-select/zqs-select.vue'
  import HmSmsListCard from '@/components/hm-sms-list-card/index.vue'
  import cmdProgress from "@/components/cmd-progress/cmd-progress.vue"
  import roadApi from '@/api/roadApi.js'
  import userApi from '@/api/userApi.js'
  import attractionApi from '@/api/attractionApi.js'

  const QQMapWX = require('../../libs/qqmap-wx-jssdk.js');
  const qqmapsdk = new QQMapWX({
    key: 'K7JBZ-VCBHQ-ET554-4CBVM-YLCXT-MGFNJ'
  });


  export default {
    components: {
      midTabbar,
      movableSwiper,
      xiaoStarComponent,
      zqsSelect,
      HmSmsListCard,
      cmdProgress
    },
    computed: {
      //默认的一些配置的数据
      ...mapState('m_settings', ['headNavi', 'isShowModal', 'GroundOverlay']),
      ...mapState('m_roadMsg', ['activePoint', 'roadList', , 'allPointList', 'pointList', 'road']),
      ...mapState('m_user', ['userPosition', 'token', 'userinfo']),
    },
    watch: {
      activePoint(newIndex, oldIndex) {
        this.moveToLocation(this.threeRoadOne[newIndex])
      },
    },
    data() {
      return {
        pointCrowds: 50,
        isGetLocation: false,
        isShowRoadContent: false,
        //获取景区人数的定时器
        getCrowdsTimer: null,
        //map上下文对象
        _mapContext: '',
        //所有景点数组
        //路线数组
        polyline: [],
        //静态路线
        staticRoad: {
          roadList: []
        },
        //静态路线绘制点集数组
        staticRoadPolyline: [],
        //动态选择的路线的景点id
        dynamicPoint: [],
        //动态路线
        dynamicRoad: [],
        dynamicRoadPolyline: [],
        //群组vip路线
        vipRoad: [],
        vipRoadPolyline: [],
        vipRoadSpendTime: '',
        //选择三种路线中的一种
        threeRoadOne: [],
        //路线花费时间
        spendTime: '',
        //当前定位的位置信息
        position: {},
        //消息
        notice: "",
        //点击景点弹出的详情弹框信息
        options: {},
        //推荐给游客想去的景点数
        recommendations: [],
        //筛选出的想去的景点的id数组
        checkPointList: [],
        //排序后的想去的景点的对象数组
        sortCheckPointList: [],
        //想去的点的数组
        wantToGoList: [],
        //景点实时人数数组
        dynamicCrowds: [],
        //扫码获取景点信息
        scanPoint: {
          id: '',
          name: '',
          score: 5,
        },
        roadContent: [{
            iconPath: '/static/my-icons/default.png',
            selectedIconPath: '/static/my-icons/default-select.png',
            text: '默认线路',
            active: false
          },
          {
            iconPath: '/static/my-icons/dynamic.png',
            selectedIconPath: '/static/my-icons/dynamic-select.png',
            text: '动态线路',
            active: false
          },
          {
            iconPath: '/static/my-icons/vip-road.png',
            selectedIconPath: '/static/my-icons/vip-road-select.png',
            text: '精品线路',
            active: false
          }
        ],
      }
    },

    async onReady() {
      let that = this
      this._mapContext = uni.createMapContext("map", this);

      // 仅调用初始化，才会触发 on.("markerClusterCreate", (e) => {})
      this._mapContext.initMarkerCluster({
        enableDefaultStyle: false,
        zoomOnClick: true,
        gridSize: 40,
      });

      //限制地图移动范围
      // this.setMapBoundary()

      //获取景点信息
      attractionApi.getAttractionList(1, 50).then(res => {
        this.updateAllPoints(res.data[0])
      })

      //获取景点实时人数
      const res = await attractionApi.getDynamicAttractionInfo()
      this.dynamicCrowds = res.data

      //加标记点到地图上
      this.addMarkers(this.allPointList);

      //加上手绘地图
      this.addGroundOverlay();

      //获取用户当前位置
      this.pageTabL()

      this._mapContext.setLocMarkerIcon({
        iconPath: '../../static/place_icons/locPosition.png'
      });

      if (this.userPosition !== '') this.addUserMarker(this.userPosition)

      uni.connectSocket({
        url: 'wss://www.expiredcanned.love/contact/' + this.userinfo.id,
        header: {
          'authorization': this.token,
        },
        success(res) {
          console.log(res);
        }
      });
      uni.onSocketMessage(function(res) {
        console.log('收到服务器内容：' + res.data);
        that.notice = JSON.parse(res.data).content
      });

    },


    onLoad(option) {
      let that = this
      if (option.showStaticRoad === 'true') {
        this.polyline = []
        this.getStaticRoad(option.staticRoadId);
      } else if (option.showStaticRoad === 'true') {

      }

      //获取景点实时人数
      this.getCrowdsTimer = setInterval(() => {
        // 在此处调用后端接口
        attractionApi.getDynamicAttractionInfo().then(res => {
          this.dynamicCrowds = res.data
          console.log(res);
        })
      }, 1000 * 60 * 5); // 每隔5分钟访问一次接口
    },

    onUnload() {
      uni.onSocketClose(function(res) {
        console.log('WebSocket 已关闭！');
      });
      clearInterval(this.getCrowdsTimer);
      this.getCrowdsTimer = null;
    },

    methods: {
      ...mapMutations('m_roadMsg', ['saveActivePointToStorage', 'updateActivePoint', 'updatePointList',
        'updateAllPoints'
      ]),
      ...mapMutations('m_settings', ['updateIsShowModal', 'updateRoadContent']),
      ...mapMutations('m_user', ['saveUserPositionToStorage', 'updateUserPosition']),

      //获取动态路线
      async gotoPos(targetId) {
        console.log(targetId);
        console.log(this.userPosition);
        const dynamicRoad = await roadApi.pathToSingleSource(this.userPosition.longitude, this.userPosition.latitude, targetId)
        console.log(dynamicRoad);
      },

      //切换顶部导航栏
      chooseTab(item) {
        if (item.item === '景点') {
          this.addMarkers(this.allPointList);
        } else {
          let tempPoint = this.allPointList.filter(obj => obj.category === item.item)
          this.addMarkers(tempPoint);
        }
      },
      //获取静态路线
      getStaticRoad(id) {
        this.spendTime = ''
        let that = this
        roadApi.getStaticRoadById(id).then(res => {
          console.log(res);
          this.staticRoad = res.data
          this.threeRoadOne = res.data.roadList
          this.roadContent.forEach(item => item.active = false)
          this.roadContent[0].active = true
          this.$refs.roadMsg.open()
          for (let i = 0; i < this.staticRoad.roadList.length - 1; i++) {
            let to = {},
              from = {};
            if (this.staticRoad.roadList[i + 1].name === "三叠泉") {
              to = {
                longitude: '116.024443',
                latitude: '29.560302'
              }
            } else {
              to = {
                longitude: this.staticRoad.roadList[i + 1].longitude,
                latitude: this.staticRoad.roadList[i + 1].latitude
              }
            }
            if (this.staticRoad.roadList[i].name === "三叠泉") {
              from = {
                longitude: '116.024443',
                latitude: '29.560302'
              }
            } else {
              from = {
                longitude: this.staticRoad.roadList[i].longitude,
                latitude: this.staticRoad.roadList[i].latitude
              }
            }
            //非企业用户限制并发访问量为5次/秒，设置延时访问
            setTimeout(function() {
              that.addPointPolyline(from, to)
            }, ((i / 4) - 1) * 10000);
          }

          this.staticRoadPolyline = this.polyline
        })
      },

      //获取两点之间的聚合点，为添加两点之间的路线使用
      addPointPolyline(from, to) {
        var that = this;
        //调用距离计算接口
        qqmapsdk.direction({
          mode: 'walking', //可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
          from,
          to,
          success: function(res) {
            console.log(res.result.routes[0]);
            var coors = res.result.routes[0].polyline,
              pl = [];
            //坐标解压（返回的点串坐标，通过前向差分进行压缩）
            for (var i = 2; i < coors.length; i++) {
              coors[i] = Number(coors[i - 2]) + Number(coors[i]) / 1000000;
            }
            //将解压后的坐标放入点串数组pl中
            for (var i = 0; i < coors.length; i += 2) {
              pl.push({
                latitude: coors[i],
                longitude: coors[i + 1]
              })
            }
            that.addPolyline(pl)
          },
        });
      },

      //添加聚合点之间的路线
      addPolyline(points) {
        this.polyline.push({
          points: points,
          color: "#47a6ff",
          width: 7,
          arrowLine: true,
          borderWidth: 1 //线的边框宽度，还有很多参数，请看文档 
        })
      },

      //确认扫码好评
      dialogInputConfirm(val) {
        attractionApi.addNewScore(this.scanPoint.id, this.scanPoint.score).then(res => {
          console.log(res);
        })
        // 关闭窗口后，恢复默认内容
        this.$refs.inputDialog.close()
      },

      //点击扫一扫
      scanBtn() {
        let that = this
        // 允许从相机和相册扫码
        uni.scanCode({
          success: function(res) {
            try {
              const data = JSON.parse(res.result);
              that.scanPoint = data
              console.log(that.scanPoint);
              that.$refs.inputDialog.open()
            } catch (e) {
              uni.showToast({
                title: "数据获取失败！",
                duration: 2000
              })
            }
          }
        });
      },

      //将地图中心移置当前定位点
      moveToLocation(e) {
        console.log(e);
        this._mapContext.moveToLocation({
          longitude: parseFloat(e.longitude),
          latitude: parseFloat(e.latitude),
        })
      },

      //路线页面点击详情跳转景点
      toPointDetail(id) {
        uni.navigateTo({
          url: '/subpkg/sub_pointDetail/sub_pointDetail?id=' + id
        })
      },

      //点击景点卡片跳转详情页面
      clickCard(e) {
        console.log(e);
        uni.navigateTo({
          url: '/subpkg/sub_pointDetail/sub_pointDetail'
        })
      },

      selectChange2() {
        // 此处为点击的事件
      },

      //筛选想去的景点
      selectPoint(uniqueIds) {
        this.sortCheckPointList = []
        uniqueIds.forEach(item => {
          let temp = {}
          const checkPos = this.allPointList.find(pos => pos.id === item)
          temp.name = checkPos.name
          temp.id = checkPos.id
          temp.location = {
            lat: checkPos.latitude,
            lng: checkPos.longitude
          }
          this.sortCheckPointList.push(temp)
        })
        this.getDistance(this.sortCheckPointList)
      },

      //事件触发，调用接口
      async getDistance(to) {
        var _this = this;
        //调用距离计算接口
        await qqmapsdk.calculateDistance({
          //mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
          from: this.userPosition, //若起点有数据则采用起点坐标，若为空默认当前地址
          to: to, //终点坐标
          success: async function(res) { //成功后的回调
            const result = res.result.elements
            result.forEach((obj, index) => {
              _this.sortCheckPointList[index].dis = obj.distance;
            });
            _this.sortCheckPointList.sort((a, b) => a.dis - b.dis);
            console.log(_this.sortCheckPointList);
            let pointIds = []
            _this.sortCheckPointList.forEach(item => {
              pointIds.push(item.id)
            })

            const {
              data: vipRoadId
            } = await roadApi.getVipRoad(pointIds)
            console.log(vipRoadId);
            _this.spendTime = vipRoadId.totalCost
            _this.vipRoadSpendTime = vipRoadId.totalCost
            _this.vipRoad = []
            _this.polyline = []
            vipRoadId.viaNodeIds.forEach(item => {
              const pos = _this.allPointList.find(res => res.id === item)
              _this.vipRoad.push(pos)
            })
            _this.roadContent.forEach(item => item.active = false)
            _this.roadContent[2].active = true
            _this.threeRoadOne = _this.vipRoad
            _this.$refs.roadMsg.open()
            for (var i = 0; i < _this.vipRoad.length - 1; i++) {
              let to = {},
                from = {};
              if (_this.vipRoad[i + 1].name === "三叠泉") {
                to = {
                  longitude: '116.024443',
                  latitude: '29.560302'
                }
              } else {
                to = {
                  longitude: _this.vipRoad[i + 1].longitude,
                  latitude: _this.vipRoad[i + 1].latitude
                }
              }
              if (_this.vipRoad[i].name === "三叠泉") {
                from = {
                  longitude: '116.024443',
                  latitude: '29.560302'
                }
              } else {
                from = {
                  longitude: _this.vipRoad[i].longitude,
                  latitude: _this.vipRoad[i].latitude
                }
              }
              //非企业用户限制并发访问量为5次/秒，设置延时访问
              setTimeout(function() {
                _this.addPointPolyline(from, to)
              }, ((i / 4) - 1) * 10000);
            }
            console.log(_this.vipRoad);
            _this.vipRoadPolyline = _this.polyline
          },
        });
        this.threeRoadOne = this.vipRoad
        this.$refs.roadMsg.open()
      },

      //筛选想去的景点页面的搜索
      searchEvent(val) {
        this.wantToGoList = []
        attractionApi.getAttractionByName(val, 1, 50).then(res => {
          this.wantToGoList = [...this.wantToGoList, ...res.data[0]]
        })
      },

      switchSpot(e) {
        this.updateActivePoint(e)
      },

      // 改变路线当前景点信息
      change() {
        if (this.activePoint < this.pointList.length - 1) {
          this.activePoint += 1
        } else {
          this.activePoint = 0
        }
      },

      //选中路线事件
      // onValueChange(e) {
      //   this.updatePointList(e.currentItem)
      //   console.log(e);
      // },

      //展开菜单点击事件，返回点击信息
      trigger(e) {
        this.updateActivePoint(0)
        if (e.index === 0) {
          this.spendTime = ''
          this.polyline = this.staticRoadPolyline
          this.threeRoadOne = this.staticRoad.roadList
        } else if (e.index === 1) {
          this.polyline = this.dynamicRoadPolyline
          this.threeRoadOne = this.dynamicRoad
        } else if (e.index === 2) {
          this.spendTime = this.vipRoadSpendTime
          this.polyline = this.vipRoadPolyline
          this.threeRoadOne = this.vipRoad
        }

        console.log(this.threeRoadOne);
        if (this.roadContent[e.index].active === false) {
          this.roadContent.forEach(obj => {
            obj.active = false
          })
          this.roadContent[e.index].active = !e.item.active
        }
        this.$refs.roadMsg.open()
        this.$refs.fab.changeHide();
      },

      //点击导航岛最左侧,设置当前定位
      pageTabL() {
        let that = this
        uni.getFuzzyLocation({
          success: function(res) {
            let pos = {
              latitude: res.latitude,
              longitude: res.longitude
            }
            // 2. 调用腾讯地图API查询位置所在城市
            wx.request({
              url: `https://apis.map.qq.com/ws/geocoder/v1/?location=${pos.latitude},${pos.longitude}&key=K7JBZ-VCBHQ-ET554-4CBVM-YLCXT-MGFNJ`,
              success(res) {
                const city = res.data.result.address_component.city;
                // 3. 判断是否在庐山市
                if (city.includes('庐山市')) {
                  that.position = pos
                  that.updateUserPosition(that.position)
                  this.addUserMarker(that.position)
                  console.log('当前位置在庐山市内');
                } else {
                  that.isGetLocation = true
                  uni.showToast({
                    title: '您当前的位置不在景区内请点击地图设置当前位置',
                    duration: 4000,
                    icon: 'none'
                  })
                }
              }
            });
          }
        });
      },

      //点击地图获取经纬度
      tapMap(e) {
        this.viewshow = false // 隐藏信息框F
        console.log('点击返回经纬度:', e.detail)
        if (this.isGetLocation) {
          this.position = e.detail
          this.updateUserPosition(this.position)
          this.addUserMarker(this.position)
          this.isGetLocation = false
        }
      },

      //点击导航岛中间左侧，跳转加团页面
      pageTabML() {
        uni.navigateTo({
          url: '/subpkg/sub_addToGroup/sub_addToGroup'
        })
      },

      //点击导航岛中间，跳转消息页面
      pageTabMM() {
        uni.navigateTo({
          url: '/subpkg/sub_message/sub_message'
        })
      },

      //点击导航岛中间右侧
      async pageTabMR() {
        this.wantToGoList = this.allPointList
        this.recommendations = await userApi.getRecommendation()
        this.recommendations.forEach((item, index) => {
          this.$set(this.recommendations[index], 'checked', false)
        })
        this.updateIsShowModal('true')
      },

      //绘制用户当前位置的marker
      addUserMarker(position) {
        this._mapContext.removeMarkers({
          markerIds: [999],
          success: function(res) {
            console.log(res);
          }
        })
        this._mapContext.addMarkers({
          markers: [{
            id: 999,
            latitude: position.latitude,
            longitude: position.longitude,
            iconPath: locImg,
            width: 30,
            height: 30,
            anchor: {
              x: .5,
              y: .5
            },
          }],
          clear: false,
          complete(res) {
            console.log('addMarkers', res)
          }
        })
      },

      //给地图添加标记点  
      addMarkers(pointMarkers) {
        console.log(pointMarkers);
        const markers = []
        pointMarkers.forEach((p, i) => {
          let crowds = this.dynamicCrowds.find(item => item.attractionId === p.id)
          markers.push({
            id: p.id,
            title: p.name,
            latitude: p.latitude,
            longitude: p.longitude,
            joinCluster: true,
            iconPath: img,
            width: 25,
            height: 25,
            anchor: {
              x: .5,
              y: .5
            },
            callout: {
              content: p.name,
              color: crowds.current / crowds.capacity > 0.85 ? '#ffffff' : '#666',
              // fontSize: 15,
              borderRadius: 5,
              bgColor: crowds.current / crowds.capacity > 0.85 ? '#e43d33' : '#ffffff',
              // borderWidth: 10, 
              padding: 5,
              textAlign: 'center',
              display: 'ALWAYS',
            },
          })
        })

        this._mapContext.addMarkers({
          markers,
          clear: true,
          complete(res) {
            console.log('addMarkers', res)
          }
        })
      },

      //给地图添加自定义图层
      addGroundOverlay() {
        this.GroundOverlay.forEach(item => {
          this._mapContext.addGroundOverlay(item);
        })
      },

      //markers点击事件，点击标记点事件
      markertap(e) {
        if (e.detail.markerId === 999) return
        const pos = this.allPointList.find(item => item.id === e.detail.markerId)
        console.log(pos);
        const crowds = this.dynamicCrowds.find(item => item.attractionId === pos.id)
        this.options = {
          id: pos.id,
          primary: pos.imgsUrl,
          openNote: pos.openNote,
          paybak: pos.name,
          score: pos.score,
          capacity: crowds.capacity,
          current: crowds.current,
          txt: '详情',
          side: '/static/hm-sms-list-card/images/img_25832_0_0.png'
        }
        this.$refs.popupHi.open()
      },

      //限制地图移动范围
      setMapBoundary() {
        let southwest = {
          //southwest
          longitude: 115.879179,
          latitude: 29.493921,
        }
        let northeast = {
          //northeast
          longitude: 116.055004,
          latitude: 29.576550,
        }
        let that = this
        this._mapContext.setBoundary({
          southwest,
          northeast,
          success: function(res) {
            that._mapContext.moveToLocation({
              latitude: (southwest.latitude + northeast.latitude) / 2,
              longitude: (southwest.longitude + northeast.longitude) / 2,
              scale: 10
            })
          }
        })
      },

    }
  }
</script>

<style lang="scss">
  @import './road_map.scss';
</style>