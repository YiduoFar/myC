<template>
	<view>
		<div class="tag-cloud-title">标签</div>
		<div class="tag-cloud">
			<template v-for="item in tagList">
				<view class="tag-cloud-item trans-200ms" hover-class="cloud-item-hover" hover-start-time='5'
					hover-stay-time='200'>
					{{item.name}}
				</view>
			</template>
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tagList: [{
						id: 0,
						name: '甜美风'
					},
					{
						id: 1,
						name: '萝莉风'
					},
					{
						id: 0,
						name: '温柔'
					},
					{
						id: 0,
						name: '古风'
					},
					{
						id: 0,
						name: '汉服'
					},
					{
						id: 0,
						name: '辣妹装'
					},
					{
						id: 0,
						name: '清纯少女'
					}, {
						id: 0,
						name: '赛车风'
					}, {
						id: 0,
						name: '纯欲'
					},
				]
			};
		},
	}
</script>

<style lang="scss" scoped>
	.tag-cloud-title {
		position: relative;
		margin: 25rpx 0 0 5rpx;
		color: $uni-text-color-grey;
		animation: cloud 1s linear 0.5s 1 normal forwards;
		opacity: 0;
	}

	.tag-cloud {
		position: relative;
		margin-top: 20rpx;
		height: auto;
		max-height: 15vh;
		background-color: #fcfcfc;
		background: #fcfcfc;
		display: flex;
		flex-wrap: wrap;
		animation: cloud 1s linear 0.5s 1 normal forwards;
		opacity: 0;

		.tag-cloud-item {
			padding: 5rpx 10rpx 5rpx 10rpx;
			margin: 0 10rpx 15rpx 0;
			background-color: #fff;
			box-shadow: 2px 2px 10px #ccc;
			font-size: 15px;
			color: #8b8b8b;
			border-radius: 8rpx;
		}

		.cloud-item-hover {
			transform: scale(1.1);
		}

	}

	@keyframes cloud {
		0% {
			opacity: 0;
			top: 25px;
		}

		100% {
			opacity: 1;
			top: 0;
		}
	}
</style>