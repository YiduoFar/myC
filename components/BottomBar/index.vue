<template>
	<view class="foot">
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<u-tabbar v-model="$store.state.bottomBarCurrent" :list="list" :border-top="false" bg-color="#ffffffff"
			:active-color="seasonColor" @change="bottomBarChange"></u-tabbar>
		<AddPop v-if="showPop"></AddPop>
	</view>
</template>

<script>
	import AddPop from './components/AddPop.vue'
	export default {
		name: "BottomBar",
		components: {
			AddPop
		},
		data() {
			return {
				list: [{
						iconPath: "list",
						selectedIconPath: "list-dot",
						text: '搭配',
						// count: 2,
						// isDot: true,
						customIcon: false,
					},
					{
						iconPath: "grid",
						selectedIconPath: "grid-fill",
						text: '衣橱',
						customIcon: false,
					},
					{
						iconPath: "plus",
						selectedIconPath: "plus",
						text: '添加',
						customIcon: false,
					},
					{
						iconPath: "account",
						selectedIconPath: "account-fill",
						text: '我',
						// count: 23,
						// isDot: false,
						customIcon: false,
					},
				],
				current: 0,
				seasonColor: '',
				showPop: false,
			}
		},
		created() {
			uni.getStorage({
				key: 'seasonKey'
			}).then(res => {
				this.seasonColor = res.data === 0 ? this.$constants.COLOR_SPRING_AUTUMN : res.data === 1 ?
					this.$constants.COLOR_SUMMER : this.$constants.COLOR_WINTER;
			})
		},
		methods: {
			bottomBarChange(index) {
				this.current = index
				if (index === 2) {
					this.showPop = !this.showPop
					// console.log(this.showPop);
				}
				if (index != 2 && this.showPop) {
					this.showPop = false
				}
				// 跳转
				if (index === 3 && !this.$route.path.includes('Me')) {
					uni.navigateTo({
						url: '/pages/Me/Me'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.foot {
		position: fixed;
		bottom: 0;
		// z-index: 50;
	}
</style>