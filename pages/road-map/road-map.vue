<template>
  <view class="content">
    <!-- 顶部导航栏 -->
    <l-tabs :list="headNavi" activeTextColor="#4d4d4d" textColor="#ffffff" layout="scroll" :lineShow="true"
      :lineCrude="6" labelPadding="10" bk="#47a6ff" activeSize="16" linePlace="30px"
      lineColor="linear-gradient(to right, #FF8008, 30%, #ffc837)">
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
      <view style="background-color: white; border-radius: 20px 20px 0px 0px; height: 400rpx;">
        <!-- <vgt-tab :list="roadNameList" @onValueChange="onValueChange"></vgt-tab> -->
        <view class="scenicCon">
          <!-- 景点进度条 -->
          <uni-steps :options="staticRoad.roadList" :active="activePoint" @switchSpot="switchSpot"></uni-steps>
          <!-- 景点卡片 -->
          <movable-swiper v-if="staticRoad.roadList !== undefined" ref="movableSwiper" :dataList="staticRoad.roadList"
            :height="'150rpx'" style="margin-top: 30px;">
            <template v-slot="{movSlotData}">
              <view v-if="movSlotData" class="pointBox">
                <image class="pointBox_primary" mode="scaleToFill" :src="movSlotData.imgsUrl" />
                <view class="pointBox_msg">
                  <text style="font-size: 15px; font-weight: 600; display: block;">{{movSlotData.name}}</text>
                  <xiaoStarComponent :starCount="movSlotData.score"></xiaoStarComponent>
                  <view class="more" @click="toPointDetail">
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
      </view>
    </uni-popup>

    <!-- :enable-poi="false"-->
    <map id="map" class="map" scale="18" min-scale="12" max-scale="15" :show-location="true" :polyline="polyline"
      :enable-poi="false" :latitude="'29.565137170757925'" :longitude="'115.9703530452523'" @markertap="markertap"
      @tap="tapMap">
    </map>

    <!-- 中间导航岛组件 -->
    <midTabbar @pageTabL="pageTabL" @pageTabML="pageTabML" @pageTabMM="pageTabMM" @pageTabMR="pageTabMR"></midTabbar>
    <!-- 筛选想去的景点界面 -->
    <zqs-select :list="allPointList" label-key="title" value-key="pointId" v-show="isShowModal=='true'"
      v-model="checkPointList" @search="searchEvent" @change="selectChange2"></zqs-select>

    <!-- 弹出框，景点简介 -->
    <uni-popup ref="popupHi" type="bottom">
      <view style="background-color: white; border-radius: 20px 20px 0px 0px; height: 400rpx;">
        <view style="padding-top: 5px">
          <hm-sms-list-card :options="options" :isShowRate="false" @click.native="clickCard"></hm-sms-list-card>
          <view style="display: flex;justify-content: center;position: relative;">
            <text style="position: absolute; left: 20px; top: 20px; color: #47a6ff; font-weight: 700;"> 景点当前人数</text>
            <cmd-progress type="circle" :percent="3.33/ 20 * 100" stroke-color="#47a6ff" :stroke-width="12" :width="70"
              :showInfo="false"></cmd-progress>
            <view style="position: absolute;text-align: center;top: 45%;">
              <view style="font-size:15rpx;">500/700</view>
            </view>
          </view>
        </view>
      </view>
    </uni-popup>

    <!-- 扫码好评 -->
    <uni-popup ref="inputDialog" type="dialog">
      <uni-popup-dialog ref="inputClose" mode="input" title="评价一下当前景点吧!" @confirm="dialogInputConfirm">
        三叠泉：
        <uni-rate allow-half :value="3.5" />
      </uni-popup-dialog>
    </uni-popup>

  </view>
</template>

<script>
  const img = '../../static/place_icons/place02.png';
  const img1 = 'https://i.328888.xyz/2023/03/25/iAjKKQ.png';
  const img2 = '../../static/mapborder.png';
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
  import userApi from '../../api/userApi.js';

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
      ...mapState('m_settings', ['headNavi', 'roadContent', 'isShowModal']),
      ...mapState('m_roadMsg', ['activePoint', 'roadList', 'pointList', 'allPointList', 'road']),
      ...mapState('m_user', ['userPosition', 'token', 'userinfo']),

      normalList() {
        return getSwiperList(this.swiperList, {
          circular: this.circular,
          plus: this.plus
        });
      },
    },
    watch: {
      activePoint(newIndex, oldIndex) {
        this.moveToLocation(this.staticRoad.roadList[newIndex])
      },
    },
    data() {
      return {
        pointCrowds: 50,
        isGetLocation: false,
        isShowRoadContent: false,
        //map上下文对象
        _mapContext: '',
        //路线数组
        polyline: [],
        //静态路线
        staticRoad: {},
        //当前定位的位置信息
        position: {},
        //消息
        notice: "",
        //点击景点弹出的详情弹框信息
        options: {},

        checkPointList: [],
      }
    },

    onLoad(option) {
      if (option.showStaticRoad === 'true') {
        this.getStaticRoad(option.staticRoadId);
      } else if (option.showStaticRoad === 'true') {

      }


      // uni.connectSocket({
      //   url: 'ws://100.66.108.73:8000/contact/' + this.userinfo.id,
      //   header: {
      //     'authorization': this.token,
      //   },
      //   success: function(res) {
      //     console.log(res);
      //   },
      // });
      // uni.onSocketOpen(function(res) {
      //   console.log('WebSocket连接已打开！');
      // });
      // uni.onSocketMessage(function(res) {
      //   console.log('收到服务器内容：' + res.data);
      //   this.notice = res.data.content
      // });

    },

    onReady() {
      this._mapContext = uni.createMapContext("map", this);

      // 仅调用初始化，才会触发 on.("markerClusterCreate", (e) => {})
      this._mapContext.initMarkerCluster({
        enableDefaultStyle: false,
        zoomOnClick: true,
        gridSize: 40,
      });

      //限制地图移动范围
      this.setMapBoundary({
        //southwest
        longitude: 115.955964,
        latitude: 29.493921
      }, {
        //northeast
        longitude: 116.055004,
        latitude: 29.576550
      })

      //加标记点到地图上
      this.addMarkers();

      //加上手绘地图
      this.addGroundOverlay();
    },

    methods: {
      ...mapMutations('m_roadMsg', ['saveActivePointToStorage', 'updateActivePoint', 'updatePointList']),
      ...mapMutations('m_settings', ['updateIsShowModal']),
      ...mapMutations('m_user', ['saveUserPositionToStorage', 'updateUserPosition']),

      //获取静态路线
      getStaticRoad(id) {
        let that = this
        roadApi.getStaticRoadById(id).then(res => {
          this.staticRoad = res.data
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
        })
      },

      dialogInputConfirm(val) {
        console.log(val);

        // 关闭窗口后，恢复默认内容
        this.$refs.inputDialog.close()
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
          width: 5,
          arrowLine: true,
          borderWidth: 1 //线的边框宽度，还有很多参数，请看文档 
        })
      },

      //点击扫一扫
      scanBtn() {
        let that = this
        // 允许从相机和相册扫码
        uni.scanCode({
          success: function(res) {
            that.$refs.inputDialog.open()
            uni.showToast({
              title: '条码内容：' + res.result,
              duration: 2000
            })
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
        this._mapContext.setLocMarkerIcon({
          iconPath: '../../static/place_icons/locPosition.png'
        })
      },

      //路线页面点击详情跳转景点
      toPointDetail() {
        uni.navigateTo({
          url: '/subpkg/sub_pointDetail/sub_pointDetail'
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

      searchEvent(val) {
        console.log('查询事件参数', val)
        // 此处把新的请求值 赋值给options
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
          this.isGetLocation = false
        }
      },

      //点击导航岛中间左侧，跳转加团页面
      pageTabML() {
        console.log("pageTabML");
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
      pageTabMR() {
        this.updateIsShowModal('true')
      },

      //给地图添加标记点  
      addMarkers() {
        const markers = []
        this.allPointList.forEach((p, i) => {
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
              color: '#666',
              // fontSize: 15,
              borderRadius: 5,
              bgColor: this.pointCrowds > 70 ? '#f0a1a8' : '#ffffff',
              // borderWidth: 10, 
              padding: 5,
              textAlign: 'center',
              display: 'ALWAYS',
            },
          })
        })

        this._mapContext.addMarkers({
          markers,
          clear: false,
          complete(res) {
            console.log('addMarkers', res)
          }
        })
      },

      //给地图添加自定义图层
      addGroundOverlay() {
        this._mapContext.addGroundOverlay({
          id: 1,
          src: img1,
          bounds: {
            //左下经纬度
            southwest: {
              longitude: 115.955964,
              latitude: 29.493921,
            },
            //右上经纬度
            northeast: {
              longitude: 116.055004,
              latitude: 29.576550,
            }
          },
        });
        this._mapContext.addGroundOverlay({
          id: 2,
          src: img2,
          bounds: {
            //左下经纬度
            southwest: {
              longitude: 115.955964,
              latitude: 29.576550,
            },
            //右上经纬度
            northeast: {
              longitude: 116.055004,
              latitude: 29.626550,
            }
          },
        });
        this._mapContext.addGroundOverlay({
          id: 3,
          src: img2,
          bounds: {
            //左下经纬度
            southwest: {
              longitude: 115.955964,
              latitude: 29.443921,
            },
            //右上经纬度
            northeast: {
              longitude: 116.055004,
              latitude: 29.493921,
            }
          },
        });
      },

      //markers点击事件，点击标记点事件
      markertap(e) {
        console.log("你点击的标记点ID是:" + e.detail.markerId)
        const pos = this.allPointList.find(item => item.id === e.detail.markerId)
        console.log(pos);
        this.options = {
          primary: pos.imgsUrl,
          paybak: pos.name,
          txt: '详情',
          score: pos.score,
          side: '/static/hm-sms-list-card/images/img_25832_0_0.png'
        }
        this.$refs.popupHi.open()
      },

      //限制地图移动范围
      setMapBoundary(southwest, northeast) {
        let that = this
        this._mapContext.setBoundary({
          southwest,
          northeast,
          success: function(res) {
            that._mapContext.moveToLocation({
              latitude: (southwest.latitude + northeast.latitude) / 2,
              longitude: (southwest.longitude + northeast.longitude) / 2,
              scale: 15
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
