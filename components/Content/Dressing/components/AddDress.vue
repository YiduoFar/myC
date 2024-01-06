<template>
	<view class="add trans-200ms" hover-class="add-hover" hover-start-time='5' hover-stay-time='100'>
		<u-icon name="plus" class="add-icon"></u-icon>
		<div class="add-text">
			新穿搭
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.add-hover {
		transform: scale(0.97);
	}

	.add {
		border-radius: 30rpx;
		box-shadow: 3px 3px 10px #ccc;
		background-image: var(--seasonColorGradient);

		display: flex;
		align-items: center;
		justify-content: center;

		color: #ffffff;
		text-shadow: 1px 1px 10px #b5b5b5;
		font-size: 40rpx;

		animation: add 0.5s linear 0s 1 normal forwards;

		.add-icon {
			padding-top: 5rpx;
			position: relative;
			opacity: 0;
			animation: addIcon 0.5s linear 0.4s 1 normal forwards;
			margin-right: 10rpx;
		}

		.add-text {
			position: relative;
			opacity: 0;
			animation: addText 0.5s linear 0.4s 1 normal forwards;
			margin-right: 10rpx;
		}

		@keyframes addIcon {
			0% {
				opacity: 0;
				right: -10px;
			}

			100% {
				opacity: 1;
				right: 0px;
			}
		}

		@keyframes addText {
			0% {
				opacity: 0;
				left: -10px;
			}

			100% {
				opacity: 1;
				left: 0px;
			}
		}
	}

	@keyframes add {
		0% {
			height: 0;
			opacity: 0;
		}

		100% {
			height: 18vh;
			opacity: 1;
		}
	}
</style>