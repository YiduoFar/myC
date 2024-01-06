<template>
	<view class="me ">
		<div class="me-box ">
			<!-- 个人信息 -->
			<div class="up ">
				<div class="avator-box">
					<img class="avatorA" src="../../static/avator.jpg"></img>
				</div>
				<div class="user ">
					<div class="name">
						遥遥领先
						<div class="sex">
							<u-icon name="woman" color="#e730ff" size="40"></u-icon>
						</div>
						<div class="edit">
							<u-icon name="edit-pen" color="#989898" size="40"></u-icon>
						</div>
					</div>
					<div class="account">
						账号：weixin_2368123
					</div>
					<div class="create-time">
						号龄 4年3个月7天
					</div>
				</div>
				<div class="size ">
					<div class="">
						身高150cm、体重45kg （常用尺码XS）
					</div>
					<div class="size2">
						胸围70cm、腰围70cm、臀围84cm、鞋码35
					</div>
					<div class="size3">
						大腿围46cm、臂长40cm、腿长73cm
						<div class="size-more">详细尺码</div>
					</div>
				</div>
			</div>
			<!-- 管理 -->
			<div class="down ">
				<div class="manger-box-list">
					<template v-for="(item,index) in mangerBtn">
						<view class="manger trans-200ms" hover-class="manger-hover" hover-start-time="5"
							hover-stay-time="100">
							<view class="manger-text">
								{{item}}
							</view>
						</view>
					</template>
				</div>
				<!-- 	修改密码
				注销 -->
				<div class="btn-list">
					<template v-for="item in btn">
						<div class="btn">{{item}}</div>
					</template>
				</div>
			</div>
		</div>
		<!-- 还没写呢急啥 -->
		<div class="coder">
			<template v-for="item in message">
				<div class="">
					{{item}}
				</div>
			</template>
		</div>
		<!-- 底部 -->
		<BottomBar></BottomBar>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import BottomBar from '@/components/BottomBar/index.vue'
	export default {
		components: {
			BottomBar
		},
		data() {
			return {
				mangerBtn: ['衣服管理', '搭配管理', '印象管理', '编辑尺码'],
				btn: ['修改密码', '注销'],
				message: ['22岁开发者，因女朋友衣服多写的第一个app',
					'仓库地址：https://gitee.com/ayingzz/my-c',
					// '（长按复制，坐标广州，求职中）'
				]
			}
		},
		computed: {
			...mapState(['bottomBarCurrent']),
		},
		watch: {
			// 监听底部并通知
			bottomBarCurrent(newValue, oldValue) {
				if (newValue < 2) {
					uni.navigateTo({
						url: '/pages/index/index?current=' + newValue
					})
				}
			},
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.me {
		position: relative;
		width: 750rpx;
		height: 93vh;
	}

	.me-box {
		position: relative;
		width: 100%;
		display: flex;
		flex-direction: column;
	}


	.up {
		position: relative;
		height: 23vh;
		margin: 15rpx 20rpx 15rpx 20rpx;
		animation: upBox 0.5s ease-out 0.5s 1 normal forwards;

		.avator-box {
			position: relative;
			height: 58%;
			width: 29%;

			.avatorA {
				position: absolute;
				width: 40%;
				height: 38%;
				border-radius: 50%;
				animation: avator 0.9s ease-in-out 0s 1 normal forwards;
			}

			@keyframes avator {
				0% {
					top: 0rpx;
					left: 0rpx;
				}

				100% {
					width: 90%;
					height: 90%;
					border-radius: 10rpx;
					top: 15rpx;
					left: 20rpx;
				}
			}
		}

		.user {
			position: absolute;
			width: 63%;
			height: 53%;
			opacity: 0;
			top: 15rpx;

			animation: user 1s ease-in-out 0.3s 1 normal forwards;

			.name {
				font-size: 20px;
				font-weight: normal;
				font-family: 'MyFont3';
				display: flex;

				.sex {
					margin-left: 5rpx;
				}

				.edit {
					position: absolute;
					right: 10rpx;
				}
			}

			.account {
				margin-top: 10rpx;
				color: #999;
				font-weight: lighter;
			}

			.create-time {
				margin-top: 10rpx;
				color: #303030;
				font-weight: lighter;
				bottom: 0;
				position: absolute;
			}
		}

		@keyframes user {
			0% {
				opacity: 0;
				right: 100rpx;
			}

			100% {
				opacity: 1;
				right: 20rpx;
			}
		}

		@keyframes size {
			0% {
				opacity: 0;
				left: -100rpx;
			}

			100% {
				opacity: 1;
				left: 0rpx;
			}
		}

		.size {
			animation: size 1s ease-in-out 0.5s 1 normal forwards;
			opacity: 0;
			position: absolute;
			width: 94%;
			padding: 15rpx 20rpx 0rpx 20rpx;
			height: 37%;
			font-size: 13px;
			color: #303030;
			font-weight: lighter;

			.size2 {
				margin-top: 10rpx;
			}

			.size3 {
				width: 100%;
				position: relative;
				margin-top: 10rpx;
				display: flex;

				.size-more {
					position: absolute;
					right: 0;
					color: #38a2da;
				}
			}
		}
	}

	.down {
		height: auto;
		border-radius: 10rpx;
		margin: 15rpx 20rpx 15rpx 20rpx;

		.manger-box-list {
			display: flex;

			.manger {
				width: 24%;
				height: 175rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-left: 1%;
				border-radius: 10rpx;
				opacity: 0;
				position: relative;

				.manger-text {
					padding-left: 5rpx;
					width: 50%;
					color: #fff;
					font-size: 18px;
					letter-spacing: 2px;
					text-shadow: 2px 2px 10px #5b5b5b;
					font-family: 'MyFont3';
				}
			}

			.manger:nth-child(1) {
				animation: manger 0.8s ease-in-out 0.5s 1 normal forwards;
			}

			.manger:nth-child(2) {
				animation: manger 0.8s ease-in-out 0.6s 1 normal forwards;
			}

			.manger:nth-child(3) {
				animation: manger 0.8s ease-in-out 0.7s 1 normal forwards;
			}

			.manger:nth-child(4) {
				animation: manger 0.8s ease-in-out 0.8s 1 normal forwards;
			}

			@keyframes manger {
				0% {
					opacity: 0;
					top: 50rpx;
				}

				100% {
					opacity: 1;
					top: 0rpx;
				}
			}

			.manger-hover {
				transform: scale(1.1);
				border-radius: 0rpx;
			}

			.manger:nth-child(1) {
				background-color: #ff7c85;
				// background-color: #2ed87e;
				margin-left: 0.5%;
			}

			.manger:nth-child(2) {
				background-color: #ff8999;
				// background-color: #cad400;
			}

			.manger:nth-child(3) {
				background-color: #ff97a5;
				// background-color: #cc3f14;
			}

			.manger:nth-child(4) {
				background-color: #ffa9b2;
				// background-color: #10b8d1;
			}
		}

		.btn-list {
			margin-top: 40rpx;
			height: auto;

			.btn {
				position: relative;
				height: 80rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				background-color: #e3e3e3;
				// background-color: #d4d4d4;
				color: #fff;
				font-size: 16px;
				text-shadow: 1px 1px 5px #878787;
				margin-top: 10rpx;
				border-radius: 5rpx;
				opacity: 0;
			}

			.btn:nth-child(1) {
				animation: btn 0.8s ease-in-out 0.8s 1 normal forwards;
			}

			.btn:nth-child(2) {
				animation: btn 0.8s ease-in-out 0.9s 1 normal forwards;
			}

			@keyframes btn {
				0% {
					opacity: 0;
					top: 50rpx;
				}

				100% {
					opacity: 1;
					top: 0rpx;
				}
			}
		}
	}

	.coder {
		position: relative;
		font-size: 12px;
		color: #999999;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin: 30rpx;
		opacity: 0;
		animation: coder 0.8s ease-in-out 1s 1 normal forwards;
	}
	
	@keyframes coder {
		0% {
			opacity: 0;
			// top: 50rpx;
		}
		
		100% {
			opacity: 1;
			// top: 0rpx;
		}
	}
</style>