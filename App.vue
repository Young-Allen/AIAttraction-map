<script>
	export default {
		onLaunch: function() {
      uni.hideTabBar()
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import url("/common/font/iconfont.css");
	
	page { 
		background-color: #f3f5f7;
	}
</style>
