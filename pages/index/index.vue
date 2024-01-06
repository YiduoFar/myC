<template>
	<div class="view">
		<!-- 顶部 -->
		<TopBar></TopBar>
		<!-- <div class="l"> -->
		<u-top-tips class="top-tip" ref="uTips" :navbar-height="statusBarHeight + navbarHeight"></u-top-tips>
		<!-- </div> -->
		<!-- 内容 -->
		<Content></Content>
		<!-- 底部 -->
		<BottomBar></BottomBar>
	</div>
</template>

<script>
	import TopBar from '@/components/TopBar/index.vue'
	import Content from '@/components/Content/index.vue'
	import BottomBar from '@/components/BottomBar/index.vue'
	export default {
		components: {
			TopBar,
			Content,
			BottomBar
		},
		data() {
			return {
				// 状态栏高度，H5中，此值为0，因为H5不可操作状态栏
				statusBarHeight: uni.getSystemInfoSync().statusBarHeight,
				// 导航栏内容区域高度，不包括状态栏高度在内
				// navbarHeight: 58,
				navbarHeight: 58,
				tipTypes: ['success', 'warning', 'primary'],
				seasonWelcomeText: [
					['忽如一夜春风来，千树万树梨花开', '枯藤老树昏鸦，小桥流水人家', '等闲识得东风面，万紫千红总是春'],
					['力尽不知热,但惜夏日长', '连雨不知春去，一晴方觉夏深', '小荷才露尖尖角，早有蜻蜓立上头'],
					['瀚海阑干百丈冰，愁云惨淡万里凝', '晚来天欲雪，能饮一杯无', '山回路转不见君，雪上空留马行处']
				],
				seasonKey: 0,
			}
		},
		onLoad() {
			// document.getElementsByTagName('html')[0].classList.toggle(
			// 	this.seasonKey === 0 ? 'spring_autumn' : this.seasonKey === 1 ?
			// 	'summer' : 'winter'
			// )
		},
		onReady() {
			uni.getStorage({
				key: 'seasonKey'
			}).then(res => {
				var textKey = Math.floor(Math.random() * 3)
				this.$refs.uTips.show({
					title: this.seasonWelcomeText[res.data][textKey],
					type: this.tipTypes[res.data],
					duration: '2000'
				})
				this.seasonKey = res.data
				// document.getElementsByTagName('html')[0].classList.toggle(
				// 	this.seasonKey === 0 ? 'spring_autumn' : this.seasonKey === 1 ?
				// 	'summer' : 'winter'
				// )
				console.log(this.seasonKey);
			})
		},
		onInit() {

		},
		computed: {

		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.view {
		position: relative;
		width: 750rpx;
		height: auto;
	}

	.top-tip {
		width: 100%;
		// width: 84%;
		height: 50rpx;
		font-size: 14rpx;
		// left: 8%;
		// // 省略效果
		// overflow: hidden;
		// display: -webkit-box;
		// /*第几行裁剪*/
		// -webkit-line-clamp: 1;
		// -webkit-box-orient: vertical;
		// border-radius: 10rpx;
		overflow: hidden;
		background-image: var(--seasonColorGradientTip);
		animation: topTip 0.5s linear 0s 1 normal forwards;
	}

	@keyframes topTip {
		0% {
			width: 70%;
			left: 15%;
			border-radius: 100rpx;
		}

		100% {
			width: 84%;
			left: 8%;
			border-radius: 5rpx;
		}
	}
</style>