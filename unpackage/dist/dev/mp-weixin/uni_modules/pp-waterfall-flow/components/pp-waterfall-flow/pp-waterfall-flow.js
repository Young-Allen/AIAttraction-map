(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/pp-waterfall-flow/components/pp-waterfall-flow/pp-waterfall-flow"],{339:function(t,e,n){"use strict";n.r(e);var i=n(340),r=n(342);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n(344);var o,u=n(32),c=Object(u["default"])(r["default"],i["render"],i["staticRenderFns"],!1,null,"7b8d87e2",null,!1,i["components"],o);c.options.__file="uni_modules/pp-waterfall-flow/components/pp-waterfall-flow/pp-waterfall-flow.vue",e["default"]=c.exports},340:function(t,e,n){"use strict";n.r(e);var i=n(341);n.d(e,"render",(function(){return i["render"]})),n.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),n.d(e,"components",(function(){return i["components"]}))},341:function(t,e,n){"use strict";var i;n.r(e),n.d(e,"render",(function(){return r})),n.d(e,"staticRenderFns",(function(){return o})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return i}));try{i={lazyLoadImage:function(){return n.e("uni_modules/pp-waterfall-flow/components/lazy-load-image/lazy-load-image").then(n.bind(null,447))}}}catch(u){if(-1===u.message.indexOf("Cannot find module")||-1===u.message.indexOf(".vue"))throw u;console.error(u.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var t=this,e=t.$createElement;t._self._c},a=!1,o=[];r._withStripped=!0},342:function(t,e,n){"use strict";n.r(e);var i=n(343),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},343:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=t.getSystemInfoSync().windowWidth,i={props:{value:Array,imageKey:{type:[String],default:"imgsUrl"},padding:{type:[Number],default:20},gap:{type:[Number],default:20},columns:{type:[String,Number],default:2},itemBR:{type:[String,Number],default:20},imageBR:{type:[String],default:"20rpx 20rpx 0 0"},mbt:{type:[Number],default:20},showChar:{type:[Boolean],default:!0},charSize:{type:[Number],default:140}},computed:{charSizeFn:function(){return this.showChar?"".concat(t.upx2px(this.charSize),"px"):0},colWidth:function(){var e=t.upx2px(this.gap),i=t.upx2px(this.padding),r=Math.ceil((n-e*(this.columns+1)-2*i)/this.columns+t.upx2px(parseFloat(this.mbt)));return r},padpx:function(){return"".concat(t.upx2px(this.padding),"px")},gappx:function(){return"".concat(t.upx2px(this.gap),"px")},mbtpx:function(){return"".concat(t.upx2px(this.mbt),"px")},brpx:function(){return"".concat(t.upx2px(this.itemBR),"px")}},data:function(){return{list:[]}},watch:{value:{deep:!0,immediate:!0,handler:function(t,e){0==t.length&&(this.list=[]);var n=t.slice(this.list.length,t.length);n.forEach((function(t){"undefined"==typeof t.showChar&&(t.showChar=!0)})),this.list.push.apply(this.list,n)}}},methods:{loadImage:function(e,i){var r=e.e,a=e.index,o=t.upx2px(this.gap),u=t.upx2px(this.padding),c=(n-o*(this.columns-1)-2*u)/this.columns,l=r.detail.width/r.detail.height,s=c/l,p=+Math.ceil(s),d=p+(this.showChar&&i.showChar?t.upx2px(parseFloat(this.charSize)):0)+t.upx2px(parseFloat(this.mbt));i.rows=d,i.imageHeight="".concat(s,"px"),this.$set(this.list,a,i)},clickImage:function(t){this.$emit("clickImage",t)},clickItem:function(t){this.$emit("clickItem",t)}}};e.default=i}).call(this,n(2)["default"])},344:function(t,e,n){"use strict";n.r(e);var i=n(345),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},345:function(t,e,n){}}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/pp-waterfall-flow/components/pp-waterfall-flow/pp-waterfall-flow.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/pp-waterfall-flow/components/pp-waterfall-flow/pp-waterfall-flow-create-component',
    {
        'uni_modules/pp-waterfall-flow/components/pp-waterfall-flow/pp-waterfall-flow-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(339))
        })
    },
    [['uni_modules/pp-waterfall-flow/components/pp-waterfall-flow/pp-waterfall-flow-create-component']]
]);
