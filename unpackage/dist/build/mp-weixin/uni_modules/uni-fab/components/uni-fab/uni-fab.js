(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uni-fab/components/uni-fab/uni-fab"],{"013a":function(t,n,o){},"0705":function(t,n,o){"use strict";var i=o("013a"),e=o.n(i);e.a},8274:function(t,n,o){"use strict";o.r(n);var i=o("e884"),e=o("a95e");for(var r in e)["default"].indexOf(r)<0&&function(t){o.d(n,t,(function(){return e[t]}))}(r);o("0705");var s=o("f0c5"),u=Object(s["a"])(e["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);n["default"]=u.exports},a95e:function(t,n,o){"use strict";o.r(n);var i=o("d3a6"),e=o.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){o.d(n,t,(function(){return i[t]}))}(r);n["default"]=e.a},d3a6:function(t,n,o){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={name:"UniFab",emits:["fabClick","trigger"],props:{pattern:{type:Object,default:function(){return{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#47a6ff",buttonColor:"#007AFF",iconColor:"#fff"}}},horizontal:{type:String,default:"left"},vertical:{type:String,default:"bottom"},direction:{type:String,default:"horizontal"},content:{type:Array,default:function(){return[]}},show:{type:Boolean,default:!1},popMenu:{type:Boolean,default:!0}},data:function(){return{fabShow:!1,isShow:!1,isAndroidNvue:!1,styles:{color:"#7A7E83",selectedColor:"#47a6ff",backgroundColor:"#fff",buttonColor:"#fff",iconColor:"#fff"}}},computed:{contentWidth:function(t){return 55*(this.content.length+1)+15+"px"},contentWidthMin:function(){return"55px"},boxWidth:function(){return this.getPosition(3,"horizontal")},boxHeight:function(){return this.getPosition(3,"vertical")},leftBottom:function(){return this.getPosition(0,"left","bottom")},rightBottom:function(){return this.getPosition(0,"right","bottom")},leftTop:function(){return this.getPosition(0,"left","top")},rightTop:function(){return this.getPosition(0,"right","top")},flexDirectionStart:function(){return this.getPosition(1,"vertical","top")},flexDirectionEnd:function(){return this.getPosition(1,"vertical","bottom")},horizontalLeft:function(){return this.getPosition(2,"horizontal","left")},horizontalRight:function(){return this.getPosition(2,"horizontal","right")},nvueBottom:function(){t.getSystemInfoSync().windowBottom;return 40}},watch:{pattern:{handler:function(t,n){this.styles=Object.assign({},this.styles,t)},deep:!0},show:function(t,n){this.isShow=t}},created:function(){this.isShow=this.show,0===this.top&&(this.fabShow=!0),this.styles=Object.assign({},this.styles,this.pattern)},methods:{changeHide:function(){this.isShow=!this.isShow},_onClick:function(){this.$emit("fabClick"),this.popMenu&&(this.isShow=!this.isShow,console.log(this.isShow))},open:function(){this.isShow=!0},close:function(){this.isShow=!1},_onItemClick:function(t,n){this.$emit("trigger",{index:t,item:n})},getPosition:function(t,n,o){return 0===t?this.horizontal===n&&this.vertical===o:1===t?this.direction===n&&this.vertical===o:2===t?this.direction===n&&this.horizontal===o:this.isShow&&this.direction===n?this.contentWidth:this.contentWidthMin}}};n.default=o}).call(this,o("543d")["default"])},e884:function(t,n,o){"use strict";o.d(n,"b",(function(){return e})),o.d(n,"c",(function(){return r})),o.d(n,"a",(function(){return i}));var i={uniIcons:function(){return Promise.all([o.e("common/vendor"),o.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(o.bind(null,"d072"))}},e=function(){var t=this,n=t.$createElement,o=(t._self._c,t.popMenu&&(t.leftBottom||t.rightBottom||t.leftTop||t.rightTop)&&t.content.length>0),i=t.isShow&&t.content.length>0;t.$mp.data=Object.assign({},{$root:{g0:o,g1:i}})},r=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uni-fab/components/uni-fab/uni-fab-create-component',
    {
        'uni_modules/uni-fab/components/uni-fab/uni-fab-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("8274"))
        })
    },
    [['uni_modules/uni-fab/components/uni-fab/uni-fab-create-component']]
]);