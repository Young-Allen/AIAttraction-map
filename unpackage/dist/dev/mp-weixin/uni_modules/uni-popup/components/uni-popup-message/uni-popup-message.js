(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-popup/components/uni-popup-message/uni-popup-message"],{523:function(e,n,t){"use strict";t.r(n);var u=t(524),r=t(526);for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t(528);var o,s=t(32),a=Object(s["default"])(r["default"],u["render"],u["staticRenderFns"],!1,null,null,null,!1,u["components"],o);a.options.__file="uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.vue",n["default"]=a.exports},524:function(e,n,t){"use strict";t.r(n);var u=t(525);t.d(n,"render",(function(){return u["render"]})),t.d(n,"staticRenderFns",(function(){return u["staticRenderFns"]})),t.d(n,"recyclableRender",(function(){return u["recyclableRender"]})),t.d(n,"components",(function(){return u["components"]}))},525:function(e,n,t){"use strict";var u;t.r(n),t.d(n,"render",(function(){return r})),t.d(n,"staticRenderFns",(function(){return o})),t.d(n,"recyclableRender",(function(){return i})),t.d(n,"components",(function(){return u}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=!1,o=[];r._withStripped=!0},526:function(e,n,t){"use strict";t.r(n);var u=t(527),r=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},527:function(e,n,t){"use strict";var u=t(4);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t(304)),i={name:"uniPopupMessage",mixins:[r.default],props:{type:{type:String,default:"success"},message:{type:String,default:""},duration:{type:Number,default:3e3},maskShow:{type:Boolean,default:!1}},data:function(){return{}},created:function(){this.popup.maskShow=this.maskShow,this.popup.messageChild=this},methods:{timerClose:function(){var e=this;0!==this.duration&&(clearTimeout(this.timer),this.timer=setTimeout((function(){e.popup.close()}),this.duration))}}};n.default=i},528:function(e,n,t){"use strict";t.r(n);var u=t(529),r=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},529:function(e,n,t){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-popup/components/uni-popup-message/uni-popup-message-create-component',
    {
        'uni_modules/uni-popup/components/uni-popup-message/uni-popup-message-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(523))
        })
    },
    [['uni_modules/uni-popup/components/uni-popup-message/uni-popup-message-create-component']]
]);
