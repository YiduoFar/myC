<template>
	<view class="pop-panel">
		<view class="pop-item trans-200ms" hover-class="pop-hover" hover-start-time="5" hover-stay-time="100">
			👗添加衣服
		</view>
		<view class="pop-item trans-200ms" hover-class="pop-hover" hover-start-time="5" hover-stay-time="100">
			🥂添加搭配
		</view>
		<view class="pop-item trans-200ms" hover-class="pop-hover" hover-start-time="5" hover-stay-time="100">
			📷添加印象
		</view>
		<view class="triangle"></view>
	</view>
</template>

<script>
</script>

<style lang="scss" scoped>
	.pop-panel {
		position: absolute;
		// top: -220rpx;
		bottom: 140rpx;
		left: 370rpx;
		width: 200rpx;
		height: 0rpx;
		background-color: #fff;
		border-radius: 10rpx;
		box-shadow: 2px 2px 10px #e2e2e2;

		animation: identifier 0.2s linear 0s 1 normal forwards;

		display: flex;
		flex-direction: column;

		color: #3a3a3a;
		text-align: center;

	}

	.pop-item {
		height: 33.33333%;
		display: flex;
		// flex-direction: column;
		justify-content: center;
		align-items: center;
		letter-spacing: 2px;
		background-color: #fff;
		border-bottom: 1px solid #e6e6e6;
		// border-radius: 10rpx;
	}

	.pop-hover {
		transform: scale(1.1);
	}

	.pop-item:last-child {
		border: none;
	}

	.triangle {
		position: absolute;
		width: 0rpx;
		height: 0rpx;
		bottom: -18rpx;
		left: 80rpx;
		border-top: 10px solid #fff;
		border-left: 10px solid #ffffff00;
		border-right: 10px solid #ffffff00;
	}

	@keyframes identifier {
		0% {
			opacity: 0;
			height: 0;
		}

		100% {
			opacity: 1;
			height: 200rpx;
		}
	}
</style>