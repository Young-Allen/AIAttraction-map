(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my-userinfo/my-userinfo"],{"05d1":function(n,e,t){"use strict";t.d(e,"b",(function(){return r})),t.d(e,"c",(function(){return u})),t.d(e,"a",(function(){return o}));var o={uniIcons:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(t.bind(null,"d072"))}},r=function(){var n=this.$createElement;this._self._c},u=[]},"23d3":function(n,e,t){"use strict";(function(n){var o=t("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(t("9523")),u=o(t("1253")),c=t("26cb");function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){(0,r.default)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var s={name:"my-userinfo",computed:i({},(0,c.mapState)("m_user",["token","userinfo"])),data:function(){return{}},onLoad:function(){},onReady:function(){var n=this;u.default.getUserInfo().then((function(e){n.updateUserInfo(e.data)}))},methods:i(i({},(0,c.mapMutations)("m_user",["updateUserInfo"])),{},{makePhonecall:function(){n.makePhoneCall({phoneNumber:"07928296565"})},toChangeUserInfoPage:function(){n.navigateTo({url:"/subpkg/sub_changeUserInfo/sub_changeUserInfo"})},scanBtn:function(){n.scanCode({success:function(e){n.showToast({title:"条码类型："+e.scanType,duration:2e3}),n.showToast({title:"条码内容："+e.result,duration:2e3})}})}})};e.default=s}).call(this,t("543d")["default"])},"31c7":function(n,e,t){"use strict";t.r(e);var o=t("05d1"),r=t("55cc");for(var u in r)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return r[n]}))}(u);t("89cd");var c=t("f0c5"),a=Object(c["a"])(r["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);e["default"]=a.exports},"55cc":function(n,e,t){"use strict";t.r(e);var o=t("23d3"),r=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){t.d(e,n,(function(){return o[n]}))}(u);e["default"]=r.a},"7d7d":function(n,e,t){},"89cd":function(n,e,t){"use strict";var o=t("7d7d"),r=t.n(o);r.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my-userinfo/my-userinfo-create-component',
    {
        'components/my-userinfo/my-userinfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("31c7"))
        })
    },
    [['components/my-userinfo/my-userinfo-create-component']]
]);
