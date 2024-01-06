<template>
	<view>
		<div class="dress-list-title">近段时间</div>
		<scroll-view class="dress-list " scroll-y="true" @scrolltolower="loadMore">
			<template v-for="(item, index) in dressArr">
				<view class="dress-item trans-200ms" hover-class="dress-item-hover" hover-start-time="5"
					hover-stay-time="100">
					<div class="clothes-list">
						<img src="@/static/avator.jpg" class="clothes-item">
						<template v-for="i in item.clothesList">
							<img class="clothes-item " :src="i.img"></img>
						</template>
						<div class="icon-arrow-right">
							<u-icon name="arrow-right"></u-icon>
						</div>
					</div>
				</view>
			</template>
			<u-loadmore :status="status" @loadmore="loadMore" />
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				dressArr: [{
					clothesList: [{
						img: 'https://cdn.uviewui.com/uview/common/classify/1/4.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/10/1.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/6/9.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/9/3.jpg'
					}, ]
				}, {
					clothesList: [{
						img: 'https://cdn.uviewui.com/uview/common/classify/1/4.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/10/1.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/6/9.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/9/3.jpg'
					}, ],
				}, {
					clothesList: [{
						img: 'https://cdn.uviewui.com/uview/common/classify/1/4.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/10/1.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/6/9.jpg'
					}, {
						img: 'https://cdn.uviewui.com/uview/common/classify/9/3.jpg'
					}, ],
				}],
				status: 'loadmore',
			};
		},
		methods: {
			loadMore() {
				if (this.dressArr.length >= 9) {
					this.status = 'nomore'
					return
				}
				// 拿数据put进数组，一次10条
				this.status = 'loading'
				setTimeout(() => {
					for (let i = 0; i < 5; i++) {
						this.dressArr.push({
							clothesList: [{
								img: 'https://cdn.uviewui.com/uview/common/classify/1/4.jpg'
							}, {
								img: 'https://cdn.uviewui.com/uview/common/classify/1/1.jpg'
							}, {
								img: 'https://cdn.uviewui.com/uview/common/classify/10/1.jpg'
							}, {
								img: 'https://cdn.uviewui.com/uview/common/classify/6/9.jpg'
							}, {
								img: 'https://cdn.uviewui.com/uview/common/classify/9/3.jpg'
							}, ],
						})
					}
				}, 1000)
			},
		}
	}
</script>

<style lang="scss" scoped>
	.dress-list-title {
		margin: 25rpx 0 0 5rpx;
		color: $uni-text-color-grey;
	}

	.dress-list {
		margin-top: 15rpx;
		padding-bottom: 15rpx;
		height: auto;
		max-height: 31vh;
		background-color: #fcfcfc;

		.dress-item:first-child {
			margin: 10rpx 10rpx 30rpx 10rpx;
		}

		.dress-item-hover {
			transform: scale(0.98);
		}

		.dress-item {
			height: 100rpx;
			border-radius: 10rpx;
			// box-shadow: 2px 2px 10px #e7e7e7;
			background-color: #fff;
			margin: 30rpx 10rpx 30rpx 10rpx;
			border: 1px solid var(--seasonColor);

			.clothes-list {
				position: relative;
				height: 100%;
				display: flex;

				.clothes-item {
					position: relative;
					width: 96rpx;
					height: 96rpx;
					// border: 2px dashed #fff;
					// border: 2px dashed var(--seasonColor);
					border-right: none;
				}

				.clothes-item:first-child {
					// width: 100rpx;
					// height: 100rpx;
					border: none;
				}

				.clothes-item:nth-child(2) {
					border-left: none;
				}

				.clothes-item:last-child {
					// border-right: 2px dashed var(--seasonColor);
				}

				.icon-arrow-right {
					width: 96rpx;
					height: 96rpx;
					line-height: 94rpx;
					text-align: center;
					border: 2px dashed #fff;
					color: #fff;
					background-color: var(--seasonColor2);
					position: relative;
					top: -4rpx;
					right: -4rpx;
					// border-radius: 5px;
					// background-image: var(--seasonColorLabelJump);
				}
			}
		}
	}
</style>