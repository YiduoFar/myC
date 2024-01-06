<template>
	<view class="wrap">
		<!-- <u-button @click="clear">清空列表</u-button> -->
		<u-waterfall v-model="flowList" ref="uWaterfall">
			<template v-slot:left="{leftList}">
				<view class="warter trans-200ms" v-for="(item, index) in leftList" :key="index"
					hover-class="warter-hover" hover-start-time="5" hover-stay-time="100">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<u-lazy-load threshold="50" border-radius="10" loading-img="../../static/loadingimg.png"
						error-img="../../static/errorloadimg.png" :image="item.img" :index="index"></u-lazy-load>
					<div class="item-label1">
						{{item.name}}
					</div>
					<div class="item-label2">
						<u-icon name="map-fill" color="#999" size="25"></u-icon>
						<div class="item-place">{{item.place}}</div>
						<div class="item-weather">{{weatherText[item.weather]}}</div>
					</div>
					<div class="item-label3">
						<template v-for="i in item.tags">
							<div class="item-tag">#{{i.name}}</div>
						</template>
					</div>
				</view>
			</template>
			<template v-slot:right="{rightList}">
				<view class="warter trans-200ms" v-for="(item, index) in rightList" :key="index"
					hover-class="warter-hover" hover-start-time="5" hover-stay-time="100">
					<u-lazy-load threshold="50" border-radius="10" :image="item.img" :index="index"></u-lazy-load>
					<div class="item-label1">
						{{item.name}}
					</div>
					<div class="item-label2">
						<u-icon name="map-fill" color="#999" size="25"></u-icon>
						<div class="item-place">{{item.place}}</div>
						<div class="item-weather">{{weatherText[item.weather]}}</div>
					</div>
					<div class="item-label3">
						<template v-for="i in item.tags">
							<div class="item-tag">#{{i.name}}</div>
						</template>
					</div>
				</view>
			</template>
		</u-waterfall>
		<!-- <u-loadmore bg-color="rgb(240, 240, 240)" :status="loadStatus" @loadmore="addRandomData"></u-loadmore> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				loadStatus: 'loadmore',
				flowList: [],
				weatherText: ['晴', '阴', '雨'],
				list: [{
						id: 0,
						dressId: 0,
						name: '阳光灿烂，空气美好', // 印象简介
						weather: 0, // 天气 0晴天 1阴天 2雨天
						place: '广州永庆坊',
						img: '../../static/deb92a9a981314ca2da81a16c5cd1e9.jpg', // 印象图片
						tags: [{
								id: 0,
								name: '甜辣风'
							},
							{
								id: 0,
								name: '温柔'
							},
							{
								id: 0,
								name: '唯美'
							}
						]
					},
					{
						id: 0,
						dressId: 0,
						name: '阳光灿烂，空气美好', // 印象简介
						weather: 0, // 天气 0晴天 1阴天 2雨天
						place: '广州永庆坊',
						img: '../../static/7eae44a0da3a7674c88e472c779a3ea.jpg', // 印象图片
						tags: [{
								id: 0,
								name: '甜辣风'
							},
							{
								id: 0,
								name: '温柔'
							},
							{
								id: 0,
								name: '唯美'
							}
						]
					},
					{
						id: 0,
						dressId: 0,
						name: '阳光灿烂，空气美好', // 印象简介
						weather: 0, // 天气 0晴天 1阴天 2雨天
						place: '广州永庆坊',
						img: '../../static/b6cdc8041e04d1ff0be1cf7d57363ae.jpg', // 印象图片
						tags: [{
								id: 0,
								name: '甜辣风'
							},
							{
								id: 0,
								name: '温柔'
							},
							{
								id: 0,
								name: '唯美'
							}
						]
					},
					{
						id: 0,
						dressId: 0,
						name: '阳光灿烂，空气美好', // 印象简介
						weather: 0, // 天气 0晴天 1阴天 2雨天
						place: '广州永庆坊',
						img: '../../static/IMG_20220912_205136.jpg', // 印象图片
						tags: [{
								id: 0,
								name: '甜辣风'
							},
							{
								id: 0,
								name: '温柔'
							},
							{
								id: 0,
								name: '唯美'
							}
						]
					},
					{
						id: 0,
						dressId: 0,
						name: '阳光灿烂，空气美好', // 印象简介
						weather: 0, // 天气 0晴天 1阴天 2雨天
						place: '广州永庆坊',
						img: '../../static/20230921125939.png', // 印象图片
						tags: [{
								id: 0,
								name: '甜辣风'
							},
							{
								id: 0,
								name: '温柔'
							},
							{
								id: 0,
								name: '唯美'
							}
						]
					}, {
						id: 0,
						dressId: 0,
						name: '阳光灿烂，空气美好', // 印象简介
						weather: 0, // 天气 0晴天 1阴天 2雨天
						place: '广州永庆坊',
						img: '../../static/IMG_20221005_204315.jpg', // 印象图片
						tags: [{
								id: 0,
								name: '甜辣风'
							},
							{
								id: 0,
								name: '温柔'
							},
							{
								id: 0,
								name: '唯美'
							}
						]
					},
				]
			}
		},
		created() {
			this.addRandomData();
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			addRandomData() {
				// const set = new Set();
				const list = this.list
				for (let i = 0; i < 6; i++) {
					let index = this.$u.random(0, list.length - 1);
					// if (set.has(index)) {
					// 	i--
					// } else {
					// 	set.add(index)
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
					list.splice(index, 1)
					// }
				}
			},
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	/* page {
		background-color: rgb(240, 240, 240);
	} */
</style>

<style lang="scss" scoped>
	.wrap {
		height: calc(81.5vh);
		/* #ifdef H5 */
		height: calc(81.5vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
		padding: 20rpx 25rpx 20rpx 25rpx;
		overflow: scroll;
	}

	.warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
		box-shadow: 2px 2px 10px #ebebeb;

		// border-top: 1px dashed var(--seasonColor);
		// border-left: 1px dashed var(--seasonColor);
		// border-right: 2px dashed var(--seasonColor);
		border-bottom: 1px dashed var(--seasonColor);

		.item-label1 {
			margin-top: 10rpx;
			padding: 0 5rpx 0 5rpx;
			font-size: 13px;
			color: #5d5d5d;
		}

		.item-label2 {
			margin-top: 10rpx;
			padding: 0 5rpx 0 5rpx;
			font-size: 12px;
			color: #999;
			display: flex;

			.item-weather {}

			.item-place {
				margin-right: 10rpx;
			}
		}

		.item-label3 {
			margin-top: 10rpx;
			padding: 0 5rpx 0 5rpx;
			font-size: 12px;
			color: #999;
			display: flex;

			.item-tag {}
		}
	}

	.warter-hover {
		transform: scale(0.98);
	}

	// .u-close {
	// 	position: absolute;
	// 	top: 32rpx;
	// 	right: 32rpx;
	// }

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 30rpx;
		margin-top: 5px;
		color: $u-main-color;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $u-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $u-type-primary;
		color: $u-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 30rpx;
		color: $u-type-error;
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $u-tips-color;
		margin-top: 5px;
	}
</style>