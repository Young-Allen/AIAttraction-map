import Vue from 'vue'
import App from './App'
import tabbar from './components/tabbar/tabbar.vue'
import store from './store/store.js'
// 按需导入 $http 对象
import {
  $http
} from '@escook/request-miniprogram'
Vue.component('tabbar', tabbar);

// 在 uni-app 项目中，可以把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http
//请求根路径
// $http.baseUrl = 'http://www.gerry42.top:8000'
$http.baseUrl = 'https://www.expiredcanned.love'
// $http.baseUrl = 'http://192.168.43.3:8000'

//请求拦截器
$http.beforeRequest = function(options) {
  uni.showLoading({
    title: "数据加载中..."
  })
  // 判断请求的是否为有权限的 API 接口
  if (options.url.indexOf('/my/') === -1) {
    // 为请求头添加身份认证字段
    options.header = {
      // 字段的值可以直接从 vuex 中进行获取
      'authorization': store.state.m_user.token,
    }
  }
}
// 请求完成之后做一些事情
$http.afterRequest = function() {
  uni.hideLoading()
}
// 封装的展示消息提示的方法
uni.$showMsg = function(title = '数据加载失败！', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none',
  })
}

// #ifndef VUE3

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  store,
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
