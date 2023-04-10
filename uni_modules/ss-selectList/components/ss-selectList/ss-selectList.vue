<template>
	<view>
		<view v-for="(item, index) in dataArr" :key="index">
			<view class="listview">
				<view v-if="isEdit" @click="selectRowVoid({ item, index })">
					<uni-icons v-if="!queyIsSelect(index)" type="circle" color="#999" :style="{ 'font-size': fontsize + 'rpx' }"></uni-icons>
					<uni-icons v-else type="checkbox-filled" color="#007AFF" :style="{ 'font-size': fontsize + 'rpx' }"></uni-icons>
				</view>
				<view class="customView"><slot :rowItem="item"></slot></view>
			</view>
			<!-- 底部分割线 -->
			<view class="specLine"></view>
		</view>
	</view>
</template>

<script>
const car_num = 'num';
const car_price = 'price';

export default {
	props: {
		dataArr: {
			type: Array,
			default: function() {
				return [];
			}
		},

		fontsize: {
			type: Number | String,
			default: 38
		},
		isEdit: {
			type: Boolean,
			default: true
		}
	},

	data() {
		return {
			rowItem: { name: '张三' },
			selectArr: []
		};
	},

	methods: {
		// 选中的方法
		selectRowVoid: function({ index, item }) {
			let isExit = this.selectArr.findIndex(function(a, b) {
				return a == index;
			});
			if (isExit >= 0) {
				this.selectArr.splice(isExit, 1);
			} else {
				this.selectArr.push(index);
			}
			this.$emit('change', this.getSelectArr());
		},
		// 查询是否选中
		queyIsSelect: function(index) {
			let isExit = this.selectArr.findIndex(function(a, b) {
				return a == index;
			});
			return isExit >= 0;
		},
		// 是不是全选
		isAllSelect: function() {
			return this.dataArr.length == this.selectArr.length;
		},
		// 全选
		allSelectVoid: function() {
			if (!this.isEdit) {
				uni.showToast({
					title: '请先开启编辑状态',
					icon: 'none'
				});
				return;
			}
			if (this.isAllSelect()) {
				this.selectArr = [];
			} else {
				this.selectArr = [];
				for (let i in this.dataArr) {
					this.selectArr.push(i);
				}
			}
			this.$emit('change', this.getSelectArr());
			this.$forceUpdate();
		},
		// 选中的值
		getSelectArr: function() {
			let self = this;
			let arr = this.selectArr.map(function(a, b) {
				return self.dataArr[a];
			});
			return arr;
		}
	}
};
</script>

<style>
.specLine {
	background-color: #f8f8f8;
	width: 100%;
	height: 10rpx;
}
.listview {
	display: flex;
	align-items: center;
	padding: 10rpx 30rpx;
}
.customView {
	align-self: stretch;
	flex-grow: 1;
	margin-left: 24rpx;
}
</style>
