(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/sub_changeUserInfo/sub_changeUserInfo"],{153:function(e,t,n){"use strict";(function(e,t){var a=n(4);n(26);a(n(25));var o=a(n(154));e.__webpack_require_UNI_MP_PLUGIN__=n,t(o.default)}).call(this,n(1)["default"],n(2)["createPage"])},154:function(e,t,n){"use strict";n.r(t);var a=n(155),o=n(157);for(var r in o)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(r);n(159);var i,s=n(32),u=Object(s["default"])(o["default"],a["render"],a["staticRenderFns"],!1,null,null,null,!1,a["components"],i);u.options.__file="subpkg/sub_changeUserInfo/sub_changeUserInfo.vue",t["default"]=u.exports},155:function(e,t,n){"use strict";n.r(t);var a=n(156);n.d(t,"render",(function(){return a["render"]})),n.d(t,"staticRenderFns",(function(){return a["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return a["recyclableRender"]})),n.d(t,"components",(function(){return a["components"]}))},156:function(e,t,n){"use strict";var a;n.r(t),n.d(t,"render",(function(){return o})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return a}));var o=function(){var e=this,t=e.$createElement;e._self._c},r=!1,i=[];o._withStripped=!0},157:function(e,t,n){"use strict";n.r(t);var a=n(158),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},158:function(e,t,n){"use strict";(function(e,a){var o=n(4);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(47)),i=o(n(49)),s=o(n(11)),u=o(n(46)),c=n(34);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,s.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(){Promise.all([n.e("common/vendor"),n.e("components/drag-ball/drag-ball")]).then(function(){return resolve(n(406))}.bind(null,n)).catch(n.oe)},g={components:{dragBall:f},computed:d({},(0,c.mapState)("m_user",["token","userinfo","userPosition"])),data:function(){return{interestsTags:[{x:79.45049232358554,y:123.96125634387865,radius:56,color:["#787878","#25AEBF"],colse:!1,size:"15",floating:[0,!1],labelName:"山川美景"},{x:198.76606872737423,y:79.28588367513791,radius:54,color:["#787878","#25AEBF"],colse:!1,size:"15",floating:[5,!1],labelName:"文物古迹"},{x:290.5796037054993,y:108.66399668264214,radius:60,color:["#787878","#25AEBF"],colse:!1,size:"15",floating:[7,!0],labelName:"放松身心"},{x:152.08387466634375,y:132.84566053159986,radius:50,color:["#787878","#25AEBF"],colse:!1,size:"15",floating:[5,!1],labelName:"温泉度假"},{x:287.6493903164786,y:188.97865661799298,radius:46,color:["#787878","#25AEBF"],colse:!1,size:"15",floating:[5,!1],labelName:"工作出行"},{x:107.73067038886846,y:187.2797271941687,radius:44,color:["#787878","#25AEBF"],colse:!1,size:"15",floating:[5,!1],labelName:"亲友伴游"},{x:40,y:205.77712553537478,radius:42,color:["#787878","#25AEBF"],colse:!1,size:"15",floating:[5,!1],labelName:"宗教文化"}],colse:!1,curInt:[],tmptags:[],position:"",value:"请填写",sex:[{id:1,name:"男"},{id:2,name:"女"}],index:0,date:"请填写",avater:"",url:"",headimg:"",name:""}},onReady:function(){this.avater=this.userinfo.avatar,this.date=this.userinfo.birthday,this.name=this.userinfo.name,"男"===this.userinfo.gender?this.index=0:this.index=1},onLoad:function(e){var t=this,n=this;if(u.default.getAllTags().then((function(e){t.tmptags=e,console.log(t.tmptags),e.forEach((function(e,a){t.$set(n.interestsTags[a],"labelName",e.tagName)}))})),this.getPosition(),void 0!==e.userInfo){var a=JSON.parse(decodeURIComponent(e.userInfo));this.avater=a.avatarUrl,this.date=a.birthday,console.log(a)}},methods:d(d({},(0,c.mapMutations)("m_user",["saveUserInfoToStorage","updateUserInfo","updateToken","saveTokenToStorage","updateUserPosition"])),{},{calculateAge:function(e){var t=new Date(e),n=new Date,a=n.getFullYear()-t.getFullYear(),o=n.getMonth()-t.getMonth();return(o<0||0===o&&n.getDate()<t.getDate())&&a--,a},getPosition:function(){var t=this;e.getFuzzyLocation({success:function(e){var n={latitude:e.latitude,longitude:e.longitude};console.log(n),t.position=e.latitude+","+e.longitude,t.updateUserPosition(n)}})},click_:function(t){var n=this,a=null,o=t;n.curInt.forEach((function(e,t){e==o&&(a=t)})),null==a?n.curInt.length<=7?n.curInt.push(o):e.showToast({title:"超出可选范围8个",duration:2e3}):n.curInt.splice(a,1)},savaInfo:function(){var t=this;console.log(this.curInt),console.log(this.userPosition);var n=this,a=n.headimg,o=n.name,r=n.index,i=n.date,s="",u={};if(this.curInt.length<2)e.showToast({title:"请选择至少两个感兴趣的标签",icon:"none",duration:2e3});else{var c=[];this.curInt.forEach((function(e){var n={id:t.tmptags[e].id,tagName:t.tmptags[e].tagName};c.push(n)})),u.interestTags=c,a||(a=n.avater),u.avatar=a,u.gender=this.sex[r].name,"0000-00-00"!=i?(u.birthday=i,u.address=s,u.name=o,n.updata(u)):e.showToast({title:"请选择生日",icon:"none",duration:2e3})}},updata:function(t){var n=this;return(0,i.default)(r.default.mark((function o(){var i,s,c;return r.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return console.log(t),o.next=3,u.default.updateUserInfo(t);case 3:i=o.sent,i.data.birthday=i.data.birthday.substring(0,10),console.log(i.data),console.log(i.data.birthday.substring(0,10)),s=[],i.data.interestTags.forEach((function(e){s.push(e.tagName)})),c={id:i.data.id,age:n.calculateAge(i.data.birthday),gender:i.data.gender,interests:s},a.vrequest({url:"http://region-41.seetacloud.com:59650/recommend",method:"POST",header:{"content-type":"application/json"},data:JSON.stringify(c),success:function(e){console.log("[post.res]",e)}}),console.log(c),n.updateUserInfo(i.data),e.switchTab({url:"/pages/my/my"});case 14:case"end":return o.stop()}}),o)})))()},isPoneAvailable:function(e){var t=/^[1][3,4,5,7,8][0-9]{9}$/;return!!t.test(e)},avatarChoose:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){t.imgUpload(e.tempFilePaths);e.tempFilePaths}})},getUserInfo:function(){e.getUserProfile({desc:"用于完善会员资料",success:function(t){console.log(t),e.showToast({title:"已授权",icon:"none",duration:2e3})}})},imgUpload:function(t){var n=this;e.uploadFile({header:{Authorization:e.getStorageSync("token")},url:"/api/upload/image",filePath:t[0],name:"file",formData:{type:"user_headimg"},success:function(e){var t=JSON.parse(e.data);t=t.data,n.avater=n.url+t.img,n.headimg=n.url+t.img},fail:function(e){console.log(e)}})},bindPickerChange:function(e){this.index=e.detail.value},bindDateChange:function(e){this.date=e.detail.value}})};t.default=g}).call(this,n(2)["default"],n(1)["default"])},159:function(e,t,n){"use strict";n.r(t);var a=n(160),o=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=o.a},160:function(e,t,n){}},[[153,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/subpkg/sub_changeUserInfo/sub_changeUserInfo.js.map