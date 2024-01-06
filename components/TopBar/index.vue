<template>
	<view class="topbar">
		<u-avatar size="80" src="../../static/avator.jpg"></u-avatar>
		<div class="text">
			<div class="user-name">遥遥领先</div>
			<div class="tip">欢迎来到您的专属个人衣橱！</div>
		</div>
		<div class="switch-box" @tap="show=true">
			<div class="text_inner">{{seasonText[seasonKey]}}</div>
			<u-action-sheet :list="list" v-model="show" :tips="tips" :cancel-btn="true"
				@click="changeSeason"></u-action-sheet>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// isWinter: false,
				tips: {
					text: '要换一个季节吗',
					color: '#909399',
					fontSize: 24
				},
				list: [{
					text: '春与秋',
					// color: 'blue',
					fontSize: 28
				}, {
					text: '夏天',
					// color: 'blue',
					fontSize: 28
				}, {
					text: '冬天',
					// color: 'blue',
					fontSize: 28
				}, ],
				show: false,
				seasonKey: 0,
				seasonText: ['春秋', '夏', '冬']
			}
		},
		created() {
			uni.getStorage({
				key: 'seasonKey'
			}).then(res => {
				// 改变样式 类似切换暗黑模式
				this.seasonKey = res.data
				document.getElementsByTagName('html')[0].classList.toggle(
					this.seasonKey === 0 ? 'spring_autumn' : this.seasonKey === 1 ?
					'summer' : 'winter'
				)
			})
		},
		methods: {
			changeSeason(index) {
				if (this.seasonKey != index) {
					uni.setStorage({
						key: 'seasonKey',
						data: index,
					})
					// 加载动画？
					setTimeout(() => {
						this.$router.go(0)
					}, 500)
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.topbar {
		position: relative;
		height: 100rpx;
		padding: 15rpx 20rpx 15rpx 20rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		
		margin-top: 50rpx;
	}

	.text {
		padding-left: 15rpx;

		.tip {
			font-size: $uni-font-size-sm;
			color: $uni-text-color-grey;
		}
	}

	.switch-box {
		position: absolute;
		right: 0rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		width: 100rpx;
		height: 100%;

		animation: switchBox 1s linear 3s 1 normal forwards;

		.text_inner {
			color: var(--seasonColor);
			font-weight: bold;
			font-size: 35rpx;
			animation: textInner 1s linear 3s 1 normal forwards;
		}

		@keyframes textInner {
			100% {
				color: #fff;
				font-weight: lighter;
			}
		}
	}

	@keyframes switchBox {
		0% {
			background-color: linear-gradient(-225deg, #ffffff 0%, #ffffff 100%);
		}

		100% {
			background-color: var(--seasonColor);
		}
	}
</style>