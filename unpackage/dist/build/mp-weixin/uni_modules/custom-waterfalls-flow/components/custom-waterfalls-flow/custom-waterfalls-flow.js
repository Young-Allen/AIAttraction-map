(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow"],{"0bad":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.data.column,(function(e,n){var a=t.__get_orig(e),i=t.__get_style([t.s1]),r=t.columnValue(n);return{$orig:a,s0:i,l0:r}})));t._isMounted||(t.e0=function(e,n){var a=arguments[arguments.length-1].currentTarget.dataset,i=a.eventParams||a["event-params"];n=i.item2;return e.stopPropagation(),t.wapperClick(n)},t.e1=function(e,n,a){var i=arguments[arguments.length-1].currentTarget.dataset,r=i.eventParams||i["event-params"];n=r.item2,a=r.index;return t.imgLoad(n,a+1)},t.e2=function(e,n,a){var i=arguments[arguments.length-1].currentTarget.dataset,r=i.eventParams||i["event-params"];n=r.item2,a=r.index;return t.imgError(n,a+1)},t.e3=function(e,n){var a=arguments[arguments.length-1].currentTarget.dataset,i=a.eventParams||a["event-params"];n=i.item2;return e.stopPropagation(),t.imageClick(n)}),t.$mp.data=Object.assign({},{$root:{l1:n}})},i=[]},"2a7a":function(t,e,n){"use strict";(function(t){var a=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("2eee")),r=a(n("c973")),u=a(n("9523"));function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){(0,u.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var o={props:{value:Array,column:{type:[String,Number],default:2},maxColumn:{type:[String,Number],default:5},columnSpace:{type:[String,Number],default:2},imageKey:{type:[String],default:"imgsUrl"},hideImageKey:{type:[String],default:"hide"},seat:{type:[String,Number],default:2},listStyle:{type:Object}},data:function(){return{data:{list:this.value?this.value:[],column:this.column<2?2:this.column,columnSpace:this.columnSpace<=5?this.columnSpace:5,imageKey:this.imageKey,seat:this.seat},msg:0,listInitStyle:{"border-radius":"12rpx","margin-bottom":"20rpx","background-color":"#fff"},adds:[],isLoaded:!0,curIndex:0,isRefresh:!0,flag:!1,refreshDatas:[]}},computed:{w:function(){var t="".concat(100/this.data.column-+this.data.columnSpace,"%");return t},m:function(){var t="".concat((100-(100/this.data.column-+this.data.columnSpace).toFixed(5)*this.data.column)/(this.data.column-1),"%");return t},s1:function(){return s(s({},this.listInitStyle),this.listStyle)}},created:function(){this.refresh()},methods:{loadImages:function(){for(var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=0,i=this.data.list.filter((function(t,e){return e>=n})),r=0;r<i.length;r++)t.getImageInfo({src:"".concat(i[r][this.imageKey],".jpg"),complete:function(t){a++,a==i.length&&e.initValue(n)}})},refresh:function(){var t=this;if(!this.isLoaded)return this.refreshDatas=this.value,!1;setTimeout((function(){t.refreshDatas=[],t.isRefresh=!0,t.adds=[],t.data.list=t.value?t.value:[],t.data.column=t.column<2?2:t.column>=t.maxColumn?t.maxColumn:t.column,t.data.columnSpace=t.columnSpace<=5?t.columnSpace:5,t.data.imageKey=t.imageKey,t.data.seat=t.seat,t.curIndex=0;for(var e=1;e<=t.data.column;e++)t.data["column_".concat(e,"_values")]=[],t.msg++;t.$nextTick((function(){t.initValue(t.curIndex,"refresh==>")}))}),1)},columnValue:function(t){return this.data["column_".concat(t+1,"_values")]},change:function(t){for(var e=0;e<this.data.list.length;e++)for(var n=this.data["column_".concat(this.data.list[e].column,"_values")],a=0;a<n.length;a++)if(t[e]&&e===n[a].index){this.data["column_".concat(this.data.list[e].column,"_values")][a]=Object.assign(n[a],t[e]),this.msg++;break}},getMin:function(t,e){for(var n=t[0][e],a=t[0],i=t.length-1;i>=0;i--)t[i][e]<n&&(n=t[i][e]);return a=t.filter((function(t){return t[e]==n})),a[0]},getMinColumnHeight:function(){var e=this;return new Promise((function(n){for(var a=[],i=function(i){var r=t.createSelectorQuery().in(e);r.select("#waterfalls_flow_column_".concat(i)).boundingClientRect((function(t){a.push({column:i,height:t.height})})).exec((function(){e.data.column<=a.length&&n(e.getMin(a,"height"))}))},r=1;r<=e.data.column;r++)i(r)}))},initValue:function(t,e){var n=this;return(0,r.default)(i.default.mark((function e(){var a,r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.isLoaded=!1,!(t>=n.data.list.length||n.refreshDatas.length)){e.next=5;break}return n.msg++,n.loaded(),e.abrupt("return",!1);case 5:return e.next=7,n.getMinColumnHeight();case 7:a=e.sent,r=n.data["column_".concat(a.column,"_values")],n.data.list[t].column=a.column,r.push(s(s({},n.data.list[t]),{},{cIndex:r.length,index:t,o:0})),n.msg++;case 12:case"end":return e.stop()}}),e)})))()},imgLoad:function(t,e){var n=t.index;t.o=1,this.$set(this.data["column_".concat(e,"_values")],t.cIndex,JSON.parse(JSON.stringify(t))),this.initValue(n+1)},imgError:function(t,e){var n=t.index;t.o=1,t[this.data.imageKey]=null,this.$set(this.data["column_".concat(e,"_values")],t.cIndex,JSON.parse(JSON.stringify(t))),this.initValue(n+1)},loaded:function(){if(this.refreshDatas.length)return this.isLoaded=!0,this.refresh(),!1;this.curIndex=this.data.list.length,this.adds.length?(this.data.list=this.adds[0],this.adds.splice(0,1),this.initValue(this.curIndex)):(this.data.list.length&&this.$emit("loaded"),this.isLoaded=!0,this.isRefresh=!1)},wapperClick:function(t){this.$emit("wapperClick",t)},imageClick:function(t){this.$emit("imageClick",t)}},watch:{value:{deep:!0,handler:function(t,e){var n=this;setTimeout((function(){n.$nextTick((function(){if(n.isRefresh)return!1;if(n.isLoaded){if(t.length<=n.curIndex)return n.change(t);n.data.list=t,n.$nextTick((function(){n.initValue(n.curIndex,"watch==>")}))}else n.adds.push(t)}))}),10)}},column:function(t){this.refresh()}}};e.default=o}).call(this,n("543d")["default"])},"51c2":function(t,e,n){"use strict";n.r(e);var a=n("2a7a"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"7f04":function(t,e,n){},"9a50":function(t,e,n){"use strict";n.r(e);var a=n("0bad"),i=n("51c2");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("b954");var u=n("f0c5"),c=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,"14a45f78",null,!1,a["a"],void 0);e["default"]=c.exports},b954:function(t,e,n){"use strict";var a=n("7f04"),i=n.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow-create-component',
    {
        'uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("9a50"))
        })
    },
    [['uni_modules/custom-waterfalls-flow/components/custom-waterfalls-flow/custom-waterfalls-flow-create-component']]
]);
