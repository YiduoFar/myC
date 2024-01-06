<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	/*每个页面公共css */
</style>

<script>
	export default {
		onLaunch: function() {
			uni.getStorage({
				key: 'seasonKey',
				fail: () => {
					uni.setStorage({
						key: 'seasonKey',
						data: 0
					})
				}
			})
		},
		onShow: function() {},
		onHide: function() {}
	}
</script>