(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/road-map/road-map"],{

/***/ 62:
/*!*************************************************************************************!*\
  !*** F:/Studying Code/小程序/uni-map02/main.js?{"page":"pages%2Froad-map%2Froad-map"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _roadMap = _interopRequireDefault(__webpack_require__(/*! ./pages/road-map/road-map.vue */ 63));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_roadMap.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 63:
/*!******************************************************************!*\
  !*** F:/Studying Code/小程序/uni-map02/pages/road-map/road-map.vue ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./road-map.vue?vue&type=template&id=0b664b66& */ 64);
/* harmony import */ var _road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./road-map.vue?vue&type=script&lang=js& */ 66);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _road_map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./road-map.vue?vue&type=style&index=0&lang=scss& */ 71);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/road-map/road-map.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/*!*************************************************************************************************!*\
  !*** F:/Studying Code/小程序/uni-map02/pages/road-map/road-map.vue?vue&type=template&id=0b664b66& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./road-map.vue?vue&type=template&id=0b664b66& */ 65);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_template_id_0b664b66___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 65:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Studying Code/小程序/uni-map02/pages/road-map/road-map.vue?vue&type=template&id=0b664b66& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    lTabs: function () {
      return __webpack_require__.e(/*! import() | uni_modules/l-tabs/components/l-tabs/l-tabs */ "uni_modules/l-tabs/components/l-tabs/l-tabs").then(__webpack_require__.bind(null, /*! @/uni_modules/l-tabs/components/l-tabs/l-tabs.vue */ 233))
    },
    uniNoticeBar: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar */ "uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.vue */ 240))
    },
    uniFab: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-fab/components/uni-fab/uni-fab */ "uni_modules/uni-fab/components/uni-fab/uni-fab").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-fab/components/uni-fab/uni-fab.vue */ 247))
    },
    uniPopup: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-popup/components/uni-popup/uni-popup */ "uni_modules/uni-popup/components/uni-popup/uni-popup").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup/uni-popup.vue */ 254))
    },
    uniSteps: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-steps/components/uni-steps/uni-steps */ "uni_modules/uni-steps/components/uni-steps/uni-steps").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-steps/components/uni-steps/uni-steps.vue */ 261))
    },
    movableSwiper: function () {
      return __webpack_require__.e(/*! import() | components/movable-swiper/movable-swiper */ "components/movable-swiper/movable-swiper").then(__webpack_require__.bind(null, /*! @/components/movable-swiper/movable-swiper.vue */ 268))
    },
    uniIcons: function () {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 275))
    },
    zqsSelect: function () {
      return __webpack_require__.e(/*! import() | components/zqs-select/zqs-select */ "components/zqs-select/zqs-select").then(__webpack_require__.bind(null, /*! @/components/zqs-select/zqs-select.vue */ 283))
    },
    cmdProgress: function () {
      return __webpack_require__.e(/*! import() | components/cmd-progress/cmd-progress */ "components/cmd-progress/cmd-progress").then(__webpack_require__.bind(null, /*! @/components/cmd-progress/cmd-progress.vue */ 292))
    },
    uniPopupDialog: function () {
      return Promise.all(/*! import() | uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.vue */ 299))
    },
    uniRate: function () {
      return __webpack_require__.e(/*! import() | uni_modules/uni-rate/components/uni-rate/uni-rate */ "uni_modules/uni-rate/components/uni-rate/uni-rate").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-rate/components/uni-rate/uni-rate.vue */ 311))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.polyline.length
  var g1 = g0 !== 0 ? _vm.threeRoadOne.length : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 66:
/*!*******************************************************************************************!*\
  !*** F:/Studying Code/小程序/uni-map02/pages/road-map/road-map.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./road-map.vue?vue&type=script&lang=js& */ 67);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 67:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Studying Code/小程序/uni-map02/pages/road-map/road-map.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, wx) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 47));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 49));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _helper = __webpack_require__(/*! @/components/sn-swiper/esc-swiper/helper.js */ 68);
var _vuex = __webpack_require__(/*! vuex */ 34);
var _roadApi = _interopRequireDefault(__webpack_require__(/*! @/api/roadApi.js */ 51));
var _userApi = _interopRequireDefault(__webpack_require__(/*! @/api/userApi.js */ 46));
var _attractionApi = _interopRequireDefault(__webpack_require__(/*! @/api/attractionApi.js */ 69));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var img = '../../static/place_icons/place02.png';
var locImg = '../../static/place_icons/locPosition.png';
var midTabbar = function midTabbar() {
  __webpack_require__.e(/*! require.ensure | components/map_tabbar/map_tabbar */ "components/map_tabbar/map_tabbar").then((function () {
    return resolve(__webpack_require__(/*! @/components/map_tabbar/map_tabbar.vue */ 318));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var movableSwiper = function movableSwiper() {
  __webpack_require__.e(/*! require.ensure | components/movable-swiper/movable-swiper */ "components/movable-swiper/movable-swiper").then((function () {
    return resolve(__webpack_require__(/*! @/components/movable-swiper/movable-swiper.vue */ 268));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var xiaoStarComponent = function xiaoStarComponent() {
  __webpack_require__.e(/*! require.ensure | components/xiao-star-component/xiao-star-component */ "components/xiao-star-component/xiao-star-component").then((function () {
    return resolve(__webpack_require__(/*! @/components/xiao-star-component/xiao-star-component.vue */ 325));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var zqsSelect = function zqsSelect() {
  __webpack_require__.e(/*! require.ensure | components/zqs-select/zqs-select */ "components/zqs-select/zqs-select").then((function () {
    return resolve(__webpack_require__(/*! @/components/zqs-select/zqs-select.vue */ 283));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var HmSmsListCard = function HmSmsListCard() {
  __webpack_require__.e(/*! require.ensure | components/hm-sms-list-card/index */ "components/hm-sms-list-card/index").then((function () {
    return resolve(__webpack_require__(/*! @/components/hm-sms-list-card/index.vue */ 332));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var cmdProgress = function cmdProgress() {
  __webpack_require__.e(/*! require.ensure | components/cmd-progress/cmd-progress */ "components/cmd-progress/cmd-progress").then((function () {
    return resolve(__webpack_require__(/*! @/components/cmd-progress/cmd-progress.vue */ 292));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var QQMapWX = __webpack_require__(/*! ../../libs/qqmap-wx-jssdk.js */ 70);
var qqmapsdk = new QQMapWX({
  key: 'K7JBZ-VCBHQ-ET554-4CBVM-YLCXT-MGFNJ'
});
var _default = {
  components: {
    midTabbar: midTabbar,
    movableSwiper: movableSwiper,
    xiaoStarComponent: xiaoStarComponent,
    zqsSelect: zqsSelect,
    HmSmsListCard: HmSmsListCard,
    cmdProgress: cmdProgress
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0, _vuex.mapState)('m_settings', ['headNavi', 'isShowModal', 'GroundOverlay'])), (0, _vuex.mapState)('m_roadMsg', ['activePoint', 'roadList',, 'allPointList', 'pointList', 'road'])), (0, _vuex.mapState)('m_user', ['userPosition', 'token', 'userinfo'])),
  watch: {
    activePoint: function activePoint(newIndex, oldIndex) {
      this.moveToLocation(this.threeRoadOne[newIndex]);
    }
  },
  data: function data() {
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
      dynamicSpendTime: '',
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
        score: 5
      },
      roadContent: [{
        iconPath: '/static/my-icons/default.png',
        selectedIconPath: '/static/my-icons/default-select.png',
        text: '默认线路',
        active: false
      }, {
        iconPath: '/static/my-icons/dynamic.png',
        selectedIconPath: '/static/my-icons/dynamic-select.png',
        text: '动态线路',
        active: false
      }, {
        iconPath: '/static/my-icons/vip-road.png',
        selectedIconPath: '/static/my-icons/vip-road-select.png',
        text: '精品线路',
        active: false
      }]
    };
  },
  onReady: function onReady() {
    var _this2 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      var that, res;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              that = _this2; // this._mapContext = uni.createMapContext("map", this);
              // 仅调用初始化，才会触发 on.("markerClusterCreate", (e) => {})
              _this2._mapContext.initMarkerCluster({
                enableDefaultStyle: false,
                zoomOnClick: true,
                gridSize: 40
              });

              //限制地图移动范围
              _this2.setMapBoundary();

              //获取景点信息
              _attractionApi.default.getAttractionList(1, 50).then(function (res) {
                _this2.updateAllPoints(res.data[0]);
              });

              //获取景点实时人数
              _context.next = 6;
              return _attractionApi.default.getDynamicAttractionInfo();
            case 6:
              res = _context.sent;
              _this2.dynamicCrowds = res.data;

              //加标记点到地图上
              _this2.addMarkers(_this2.allPointList);

              //加上手绘地图
              _this2.addGroundOverlay();

              //获取用户当前位置
              _this2.pageTabL();
              _this2._mapContext.setLocMarkerIcon({
                iconPath: '../../static/place_icons/locPosition.png'
              });
              if (_this2.userPosition !== '') {
                _this2.addUserMarker(_this2.userPosition);
                _this2.moveToLocation(_this2.userPosition);
              }
              uni.connectSocket({
                url: 'wss://www.expiredcanned.love/contact/' + _this2.userinfo.id,
                header: {
                  'authorization': _this2.token
                },
                success: function success(res) {
                  console.log(res);
                }
              });
              uni.onSocketMessage(function (res) {
                console.log('收到服务器内容：' + res.data);
                that.notice = JSON.parse(res.data).content;
              });
            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  onLoad: function onLoad(option) {
    var _this3 = this;
    var that = this;
    this._mapContext = uni.createMapContext("map", this);
    if (option.showStaticRoad === 'true') {
      this.polyline = [];
      this.getStaticRoad(option.staticRoadId);
    } else if (option.showStaticRoad === 'true') {}
    if (option.gotoPosition) {
      var moveToPos = JSON.parse(decodeURIComponent(option.pos));
      this.moveToLocation(moveToPos);
    }

    //获取景点实时人数
    this.getCrowdsTimer = setInterval(function () {
      // 在此处调用后端接口
      _attractionApi.default.getDynamicAttractionInfo().then(function (res) {
        _this3.dynamicCrowds = res.data;
        console.log(res);
      });
    }, 1000 * 60 * 5); // 每隔5分钟访问一次接口
  },
  onUnload: function onUnload() {
    uni.onSocketClose(function (res) {
      console.log('WebSocket 已关闭！');
    });
    clearInterval(this.getCrowdsTimer);
    this.getCrowdsTimer = null;
  },
  methods: _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, (0, _vuex.mapMutations)('m_roadMsg', ['saveActivePointToStorage', 'updateActivePoint', 'updatePointList', 'updateAllPoints'])), (0, _vuex.mapMutations)('m_settings', ['updateIsShowModal', 'updateRoadContent'])), (0, _vuex.mapMutations)('m_user', ['saveUserPositionToStorage', 'updateUserPosition'])), {}, {
    //获取动态路线
    gotoPos: function gotoPos(targetId) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        var that, _yield$roadApi$pathTo, dynamicRoad, _loop, i;
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                that = _this4;
                console.log(targetId);
                console.log(_this4.userPosition);
                _context2.next = 5;
                return _roadApi.default.pathToSingleSource(_this4.userPosition.longitude, _this4.userPosition.latitude, targetId);
              case 5:
                _yield$roadApi$pathTo = _context2.sent;
                dynamicRoad = _yield$roadApi$pathTo.data;
                console.log(dynamicRoad);
                _this4.dynamicSpendTime = dynamicRoad.totalCost;
                _this4.spendTime = dynamicRoad.totalCost;
                _this4.polyline = [];
                _this4.dynamicRoad = [];
                _this4.dynamicRoad.push(_this4.userPosition);
                dynamicRoad.viaNodeIds.forEach(function (item) {
                  var pos = _this4.allPointList.find(function (res) {
                    return res.id === item;
                  });
                  _this4.dynamicRoad.push(pos);
                });
                _this4.roadContent.forEach(function (item) {
                  return item.active = false;
                });
                _this4.roadContent[1].active = true;
                _loop = function _loop() {
                  var to = {
                      longitude: _this4.dynamicRoad[i + 1].longitude,
                      latitude: _this4.dynamicRoad[i + 1].latitude
                    },
                    from = {
                      longitude: _this4.dynamicRoad[i].longitude,
                      latitude: _this4.dynamicRoad[i].latitude
                    };
                  //非企业用户限制并发访问量为5次/秒，设置延时访问
                  setTimeout(function () {
                    that.addPointPolyline(from, to);
                  }, (i / 4 - 1) * 10000);
                };
                for (i = 0; i < _this4.dynamicRoad.length - 1; i++) {
                  _loop();
                }
                _this4.dynamicRoad.shift();
                _this4.dynamicRoadPolyline = _this4.polyline;
                _this4.threeRoadOne = _this4.dynamicRoad;
                _this4.$refs.popupHi.close();
                _this4.$refs.roadMsg.open();
              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //切换顶部导航栏
    chooseTab: function chooseTab(item) {
      if (item.item === '景点') {
        this.addMarkers(this.allPointList);
      } else {
        var tempPoint = this.allPointList.filter(function (obj) {
          return obj.category === item.item;
        });
        this.addMarkers(tempPoint);
      }
    },
    //获取静态路线
    getStaticRoad: function getStaticRoad(id) {
      var _this5 = this;
      this.spendTime = '';
      var that = this;
      _roadApi.default.getStaticRoadById(id).then(function (res) {
        console.log(res);
        _this5.staticRoad = res.data;
        _this5.threeRoadOne = res.data.roadList;
        _this5.roadContent.forEach(function (item) {
          return item.active = false;
        });
        _this5.roadContent[0].active = true;
        _this5.$refs.roadMsg.open();
        var _loop2 = function _loop2(_i) {
          var to = {},
            from = {};
          if (_this5.staticRoad.roadList[_i + 1].name === "三叠泉") {
            to = {
              longitude: '116.024443',
              latitude: '29.560302'
            };
          } else {
            to = {
              longitude: _this5.staticRoad.roadList[_i + 1].longitude,
              latitude: _this5.staticRoad.roadList[_i + 1].latitude
            };
          }
          if (_this5.staticRoad.roadList[_i].name === "三叠泉") {
            from = {
              longitude: '116.024443',
              latitude: '29.560302'
            };
          } else {
            from = {
              longitude: _this5.staticRoad.roadList[_i].longitude,
              latitude: _this5.staticRoad.roadList[_i].latitude
            };
          }
          //非企业用户限制并发访问量为5次/秒，设置延时访问
          setTimeout(function () {
            that.addPointPolyline(from, to);
          }, (_i / 4 - 1) * 10000);
        };
        for (var _i = 0; _i < _this5.staticRoad.roadList.length - 1; _i++) {
          _loop2(_i);
        }
        _this5.staticRoadPolyline = _this5.polyline;
      });
    },
    //获取两点之间的聚合点，为添加两点之间的路线使用
    addPointPolyline: function addPointPolyline(from, to) {
      var that = this;
      //调用距离计算接口
      qqmapsdk.direction({
        mode: 'walking',
        //可选值：'driving'（驾车）、'walking'（步行）、'bicycling'（骑行），不填默认：'driving',可不填
        from: from,
        to: to,
        success: function success(res) {
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
            });
          }
          that.addPolyline(pl);
        }
      });
    },
    //添加聚合点之间的路线
    addPolyline: function addPolyline(points) {
      this.polyline.push({
        points: points,
        color: "#47a6ff",
        width: 7,
        arrowLine: true,
        borderWidth: 1 //线的边框宽度，还有很多参数，请看文档 
      });
    },
    //确认扫码好评
    dialogInputConfirm: function dialogInputConfirm(val) {
      _attractionApi.default.addNewScore(this.scanPoint.id, this.scanPoint.score).then(function (res) {
        console.log(res);
      });
      // 关闭窗口后，恢复默认内容
      this.$refs.inputDialog.close();
    },
    //点击扫一扫
    scanBtn: function scanBtn() {
      var that = this;
      // 允许从相机和相册扫码
      uni.scanCode({
        success: function success(res) {
          try {
            var data = JSON.parse(res.result);
            that.scanPoint = data;
            console.log(that.scanPoint);
            that.$refs.inputDialog.open();
          } catch (e) {
            uni.showToast({
              title: "数据获取失败！",
              duration: 2000
            });
          }
        }
      });
    },
    //将地图中心移置当前定位点
    moveToLocation: function moveToLocation(e) {
      console.log(e);
      this._mapContext.moveToLocation({
        longitude: parseFloat(e.longitude),
        latitude: parseFloat(e.latitude)
      });
    },
    //路线页面点击详情跳转景点
    toPointDetail: function toPointDetail(id) {
      uni.navigateTo({
        url: '/subpkg/sub_pointDetail/sub_pointDetail?id=' + id
      });
    },
    //点击景点卡片跳转详情页面
    clickCard: function clickCard(e) {
      console.log(e);
      uni.navigateTo({
        url: '/subpkg/sub_pointDetail/sub_pointDetail'
      });
    },
    selectChange2: function selectChange2() {
      // 此处为点击的事件
    },
    //筛选想去的景点
    selectPoint: function selectPoint(uniqueIds) {
      var _this6 = this;
      console.log(uniqueIds);
      if (uniqueIds.length === 1) return uni.showToast({
        icon: 'none',
        title: '再选一个景点吧！',
        duration: 2000
      });
      this.sortCheckPointList = [];
      uniqueIds.forEach(function (item) {
        var temp = {};
        var checkPos = _this6.allPointList.find(function (pos) {
          return pos.id === item;
        });
        temp.name = checkPos.name;
        temp.id = checkPos.id;
        temp.location = {
          lat: checkPos.latitude,
          lng: checkPos.longitude
        };
        _this6.sortCheckPointList.push(temp);
      });
      this.getDistance(this.sortCheckPointList);
    },
    //事件触发，调用接口
    getDistance: function getDistance(to) {
      var _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var _this;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _this = _this7; //调用距离计算接口
                _context4.next = 3;
                return qqmapsdk.calculateDistance({
                  //mode: 'driving',//可选值：'driving'（驾车）、'walking'（步行），不填默认：'walking',可不填
                  from: _this7.userPosition,
                  //若起点有数据则采用起点坐标，若为空默认当前地址
                  to: to,
                  //终点坐标
                  success: function () {
                    var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(res) {
                      var result, pointIds, _yield$roadApi$getVip, vipRoadId, _loop3, i;
                      return _regenerator.default.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              //成功后的回调
                              result = res.result.elements;
                              result.forEach(function (obj, index) {
                                _this.sortCheckPointList[index].dis = obj.distance;
                              });
                              _this.sortCheckPointList.sort(function (a, b) {
                                return a.dis - b.dis;
                              });
                              console.log(_this.sortCheckPointList);
                              pointIds = [];
                              _this.sortCheckPointList.forEach(function (item) {
                                pointIds.push(item.id);
                              });
                              _context3.next = 8;
                              return _roadApi.default.getVipRoad(pointIds);
                            case 8:
                              _yield$roadApi$getVip = _context3.sent;
                              vipRoadId = _yield$roadApi$getVip.data;
                              console.log(vipRoadId);
                              _this.spendTime = vipRoadId.totalCost;
                              _this.vipRoadSpendTime = vipRoadId.totalCost;
                              _this.vipRoad = [];
                              _this.polyline = [];
                              vipRoadId.viaNodeIds.forEach(function (item) {
                                var pos = _this.allPointList.find(function (res) {
                                  return res.id === item;
                                });
                                _this.vipRoad.push(pos);
                              });
                              _this.roadContent.forEach(function (item) {
                                return item.active = false;
                              });
                              _this.roadContent[2].active = true;
                              _this.threeRoadOne = _this.vipRoad;
                              _this.$refs.roadMsg.open();
                              _loop3 = function _loop3() {
                                var to = {},
                                  from = {};
                                if (_this.vipRoad[i + 1].name === "三叠泉") {
                                  to = {
                                    longitude: '116.024443',
                                    latitude: '29.560302'
                                  };
                                } else {
                                  to = {
                                    longitude: _this.vipRoad[i + 1].longitude,
                                    latitude: _this.vipRoad[i + 1].latitude
                                  };
                                }
                                if (_this.vipRoad[i].name === "三叠泉") {
                                  from = {
                                    longitude: '116.024443',
                                    latitude: '29.560302'
                                  };
                                } else {
                                  from = {
                                    longitude: _this.vipRoad[i].longitude,
                                    latitude: _this.vipRoad[i].latitude
                                  };
                                }
                                //非企业用户限制并发访问量为5次/秒，设置延时访问
                                setTimeout(function () {
                                  _this.addPointPolyline(from, to);
                                }, (i / 4 - 1) * 10000);
                              };
                              for (i = 0; i < _this.vipRoad.length - 1; i++) {
                                _loop3();
                              }
                              console.log(_this.vipRoad);
                              _this.vipRoadPolyline = _this.polyline;
                            case 24:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));
                    function success(_x) {
                      return _success.apply(this, arguments);
                    }
                    return success;
                  }()
                });
              case 3:
                _this7.threeRoadOne = _this7.vipRoad;
                _this7.$refs.roadMsg.open();
              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    //筛选想去的景点页面的搜索
    searchEvent: function searchEvent(val) {
      var _this8 = this;
      this.wantToGoList = [];
      _attractionApi.default.getAttractionByName(val, 1, 50).then(function (res) {
        _this8.wantToGoList = [].concat((0, _toConsumableArray2.default)(_this8.wantToGoList), (0, _toConsumableArray2.default)(res.data[0]));
      });
    },
    switchSpot: function switchSpot(e) {
      this.updateActivePoint(e);
    },
    // 改变路线当前景点信息
    change: function change() {
      if (this.activePoint < this.pointList.length - 1) {
        this.activePoint += 1;
      } else {
        this.activePoint = 0;
      }
    },
    //展开菜单点击事件，返回点击信息
    trigger: function trigger(e) {
      this.updateActivePoint(0);
      if (e.index === 0) {
        this.spendTime = '';
        this.polyline = this.staticRoadPolyline;
        this.threeRoadOne = this.staticRoad.roadList;
      } else if (e.index === 1) {
        this.spendTime = this.dynamicSpendTime;
        this.polyline = this.dynamicRoadPolyline;
        this.threeRoadOne = this.dynamicRoad;
      } else if (e.index === 2) {
        this.spendTime = this.vipRoadSpendTime;
        this.polyline = this.vipRoadPolyline;
        this.threeRoadOne = this.vipRoad;
      }
      console.log(this.threeRoadOne);
      if (this.roadContent[e.index].active === false) {
        this.roadContent.forEach(function (obj) {
          obj.active = false;
        });
        this.roadContent[e.index].active = !e.item.active;
      }
      this.$refs.roadMsg.open();
      this.$refs.fab.changeHide();
    },
    //点击导航岛最左侧,设置当前定位
    pageTabL: function pageTabL() {
      var that = this;
      uni.getFuzzyLocation({
        success: function success(res) {
          var pos = {
            latitude: res.latitude,
            longitude: res.longitude
          };
          // 2. 调用腾讯地图API查询位置所在城市
          wx.request({
            url: "https://apis.map.qq.com/ws/geocoder/v1/?location=".concat(pos.latitude, ",").concat(pos.longitude, "&key=K7JBZ-VCBHQ-ET554-4CBVM-YLCXT-MGFNJ"),
            success: function success(res) {
              var city = res.data.result.address_component.city;
              // 3. 判断是否在庐山市
              if (city.includes('庐山市')) {
                that.position = pos;
                that.updateUserPosition(that.position);
                this.addUserMarker(that.position);
                console.log('当前位置在庐山市内');
              } else {
                that.isGetLocation = true;
                uni.showToast({
                  title: '您当前的位置不在景区内请点击地图设置当前位置',
                  duration: 4000,
                  icon: 'none'
                });
              }
            }
          });
        }
      });
    },
    //点击地图获取经纬度
    tapMap: function tapMap(e) {
      this.viewshow = false; // 隐藏信息框F
      console.log('点击返回经纬度:', e.detail);
      if (this.isGetLocation) {
        this.position = e.detail;
        this.updateUserPosition(this.position);
        this.addUserMarker(this.position);
        this.isGetLocation = false;
      }
    },
    //点击导航岛中间左侧，跳转加团页面
    pageTabML: function pageTabML() {
      uni.navigateTo({
        url: '/subpkg/sub_addToGroup/sub_addToGroup'
      });
    },
    //点击导航岛中间，跳转消息页面
    pageTabMM: function pageTabMM() {
      uni.navigateTo({
        url: '/subpkg/sub_message/sub_message'
      });
    },
    //点击导航岛中间右侧
    pageTabMR: function pageTabMR() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this9.wantToGoList = _this9.allPointList;
                _context5.next = 3;
                return _userApi.default.getRecommendation();
              case 3:
                _this9.recommendations = _context5.sent;
                _this9.recommendations.forEach(function (item, index) {
                  _this9.$set(_this9.recommendations[index], 'checked', false);
                });
                _this9.updateIsShowModal('true');
              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    //绘制用户当前位置的marker
    addUserMarker: function addUserMarker(position) {
      this._mapContext.removeMarkers({
        markerIds: [999],
        success: function success(res) {
          console.log(res);
        }
      });
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
          }
        }],
        clear: false,
        complete: function complete(res) {
          console.log('addMarkers', res);
        }
      });
    },
    //给地图添加标记点  
    addMarkers: function addMarkers(pointMarkers) {
      var _this10 = this;
      console.log(pointMarkers);
      var markers = [];
      pointMarkers.forEach(function (p, i) {
        var crowds = _this10.dynamicCrowds.find(function (item) {
          return item.attractionId === p.id;
        });
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
            display: 'ALWAYS'
          }
        });
      });
      this._mapContext.addMarkers({
        markers: markers,
        clear: true,
        complete: function complete(res) {
          console.log('addMarkers', res);
        }
      });
    },
    //给地图添加自定义图层
    addGroundOverlay: function addGroundOverlay() {
      var _this11 = this;
      this.GroundOverlay.forEach(function (item) {
        _this11._mapContext.addGroundOverlay(item);
      });
    },
    //markers点击事件，点击标记点事件
    markertap: function markertap(e) {
      if (e.detail.markerId === 999) return;
      var pos = this.allPointList.find(function (item) {
        return item.id === e.detail.markerId;
      });
      console.log(pos);
      var crowds = this.dynamicCrowds.find(function (item) {
        return item.attractionId === pos.id;
      });
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
      };
      this.$refs.popupHi.open();
    },
    //限制地图移动范围
    setMapBoundary: function setMapBoundary() {
      var southwest = {
        //southwest
        longitude: 115.879179,
        latitude: 29.493921
      };
      var northeast = {
        //northeast
        longitude: 116.055004,
        latitude: 29.576550
      };
      var that = this;
      this._mapContext.setBoundary({
        southwest: southwest,
        northeast: northeast,
        success: function success(res) {
          that._mapContext.moveToLocation({
            latitude: (southwest.latitude + northeast.latitude) / 2,
            longitude: (southwest.longitude + northeast.longitude) / 2,
            scale: 10
          });
        }
      });
    }
  })
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"]))

/***/ }),

/***/ 71:
/*!****************************************************************************************************!*\
  !*** F:/Studying Code/小程序/uni-map02/pages/road-map/road-map.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./road-map.vue?vue&type=style&index=0&lang=scss& */ 72);
/* harmony import */ var _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_road_map_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/Studying Code/小程序/uni-map02/pages/road-map/road-map.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[62,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/road-map/road-map.js.map