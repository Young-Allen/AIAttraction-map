# ss-selectList
### 使用说明 
### 
### ***导入到项目中  导入后右键安装下依赖 uni-icons

```<ss-selectList :isEdit="ssEdit" ref="ssList" :dataArr="arr" style="background-color: #FFFFFF;" @change="sschange">
			<template v-slot:default="item">
				<view class="itemview">
					<text>{{ item.rowItem.name }}</text>
				</view>
			</template>
		</ss-selectList>
		<button type="primary" @click="editState()">编辑状态</button>
		<button type="primary" @click="selectAll()">全选/反选</button>
```



### 参数说明

字段|类型|说明
---|---|---|
dataArr|array|list数据
fontsize|number/string|选择icon的大小
isEdit|bool|是否可编辑
selectArr|选中的数组|可this.$refs.ssList.selectArr=[0,1] 设置默认选中


### 事件说明

事件名|说明|使用
---|---|---|
allSelectVoid|全选与反选|this.$refs.ssList.allSelectVoid()
@change|选中数据变动处罚|

## 示例
```
<template>
	<view class="">
		<ss-selectList :isEdit="ssEdit" ref="ssList" :dataArr="arr" style="background-color: #FFFFFF;" @change="sschange">
			<template v-slot:default="item">
				<view class="itemview">
					<text>{{ item.rowItem.name }}</text>
				</view>
			</template>
		</ss-selectList>
		<button type="primary" @click="editState()">编辑状态</button>
		<button type="primary" @click="selectAll()">全选/反选</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			ssEdit:true,
			arr: [
				{
					name: '这里的内容自定义',
					num: 2,
					price: 1,
					id: 0
				},
				{
					name: '这里的内容自定义',
					num: 3,
					price: 1,
					id: 1
				},
				{
					name: '这里的内容自定义',
					num: 1,
					price: 1,
					id: 2
				}
			]
		};
	},

	methods: {
		editState: function() {
			this.ssEdit=!this.ssEdit
		},
		selectAll: function() {
			this.$refs.ssList.allSelectVoid();
		},
		deleteSelect: function() {
			this.$refs.ssList.deleteVoid();
		},
		sschange: function(e) {
			console.log('数据变动', e);
		}
	}
};
</script>

<style>
page {
	background-color: #f8f8f8;
}
.itemview {
	background-color: #ffffff;
}
</style>

```

