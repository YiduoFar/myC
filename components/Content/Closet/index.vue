<template>
	<view class="u-wrap">
		<!-- 		<view class="u-search-box">
			<view class="u-search-inner">
				<u-icon name="search" color="#909399" :size="28"></u-icon>
				<text class="u-search-text">搜索2</text>
			</view>
		</view> -->
		<div class="u-menu-wrap ">
			<scroll-view scroll-y scroll-with-animation class="u-tab-view menu-scroll-view" :scroll-top="scrollTop"
				:scroll-into-view="itemId">
				<view v-for="(item,index) in tabbar" :key="index" class="u-tab-item"
					:class="[current == index ? 'u-tab-item-active ' : '']" @tap.stop="swichMenu(index)">
					<text class="u-line-1">{{item.name}}</text>
				</view>
			</scroll-view>
			<scroll-view :scroll-top="scrollRightTop" scroll-y scroll-with-animation class="right-box"
				@scroll="rightScroll">
				<view class="page-view">
					<view class="class-item" :id="'item' + index" v-for="(item , index) in tabbar" :key="index">
						<view class="item-title">
							<text>{{item.name}}</text>
							<text class="count-num">8件</text>
						</view>
						<view class="item-container ">
							<view class="thumb-box trans-200ms" v-for="(i, index1) in item.foods" :key="index1"
								hover-class="thumb-box-hover" hover-start-time="5" hover-stay-time="150">
								<img class="item-menu-image" :src="i.icon" mode=""></img>
								<!-- <view class="item-menu-image"> -->
								<!-- <u-lazy-load class="item-menu-image" style="opacity: 0.8;" threshold="-450"
									border-radius="10" :image="i.icon" :index="index1"></u-lazy-load> -->
								<!-- </view> -->
								<view class="item-menu-name" :class="calc(index, index1)">{{i.name}}</view>
							</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</div>
	</view>
</template>
<script>
	import classifyData from '@/common/data/index2-data.js';
	export default {
		name: 'Closet',
		data() {
			return {
				scrollTop: 0, //tab标题的滚动条位置
				oldScrollTop: 0,
				current: 0, // 预设当前项的值
				menuHeight: 0, // 左边菜单的高度
				menuItemHeight: 0, // 左边菜单item的高度
				itemId: '', // 栏目右边scroll-view用于滚动的id
				tabbar: classifyData,
				menuItemPos: [],
				arr: [],
				scrollRightTop: 0, // 右边栏目scroll-view的滚动条高度
				timer: null, // 定时器
				imgClazz: [
					['c00', 'c01', 'c02', 'c03', 'c04'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
					['c10', 'c11', 'c12', 'c13', 'c14', 'c15'],
				],
				imgClazzIndex: 0,
				tabbarLength: [5, 6, 0, 0, 0, 0, 0, 0, 0],
			}
		},
		onLoad() {

		},
		onReady() {
			this.getMenuItemTop()
		},
		methods: {
			calc(index, index1) {
				return (index > 1 || (index == 1 && index1 > 0)) ? 'c000' : this.imgClazz[index][index1]
			},
			// 点击左边的栏目切换
			async swichMenu(index) {
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (index == this.current) return;
				this.scrollRightTop = this.oldScrollTop;
				this.$nextTick(function() {
					this.scrollRightTop = this.arr[index];
					this.current = index;
					this.leftMenuStatus(index);
					// console.log(index);
				})
			},
			// 获取一个目标元素的高度
			getElRect(elClass, dataVal) {
				new Promise((resolve, reject) => {
					const query = uni.createSelectorQuery().in(this);
					query.select('.' + elClass).fields({
						size: true
					}, res => {
						// 如果节点尚未生成，res值为null，循环调用执行
						if (!res) {
							setTimeout(() => {
								this.getElRect(elClass);
							}, 10);
							return;
						}
						this[dataVal] = res.height;
						resolve();
					}).exec();
				})
			},
			// 观测元素相交状态
			// async observer() {
			// 	this.tabbar.map((val, index) => {
			// 		let observer = uni.createIntersectionObserver(this);
			// 		// 检测右边scroll-view的id为itemxx的元素与right-box的相交状态
			// 		// 如果跟.right-box底部相交，就动态设置左边栏目的活动状态
			// 		observer.relativeTo('.right-box', {
			// 			top: 0
			// 		}).observe('#item' + index, res => {
			// 			if (res.intersectionRatio > 0) {
			// 				let id = res.id.substring(4);
			// 				this.leftMenuStatus(id);
			// 			}
			// 		})
			// 	})
			// },
			// 设置左边菜单的滚动状态
			async leftMenuStatus(index) {
				this.current = index;
				// 如果为0，意味着尚未初始化
				if (this.menuHeight == 0 || this.menuItemHeight == 0) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
					await this.getElRect('u-tab-item', 'menuItemHeight');
				}
				// 将菜单活动item垂直居中
				this.scrollTop = index * this.menuItemHeight + this.menuItemHeight / 2 - this.menuHeight / 2;
			},
			// 获取右边菜单每个item到顶部的距离
			getMenuItemTop() {
				new Promise(resolve => {
					let selectorQuery = uni.createSelectorQuery();
					selectorQuery.selectAll('.class-item').boundingClientRect((rects) => {
						// 如果节点尚未生成，rects值为[](因为用selectAll，所以返回的是数组)，循环调用执行
						if (!rects.length) {
							setTimeout(() => {
								this.getMenuItemTop();
							}, 10);
							return;
						}
						rects.forEach((rect) => {
							// 这里减去rects[0].top，是因为第一项顶部可能不是贴到导航栏(比如有个搜索框的情况)
							this.arr.push(rect.top - rects[0].top);
							resolve();
						})
					}).exec()
				})
			},
			// 右边菜单滚动
			async rightScroll(e) {
				this.oldScrollTop = e.detail.scrollTop;
				if (this.arr.length == 0) {
					await this.getMenuItemTop();
				}
				if (this.timer) return;
				if (!this.menuHeight) {
					await this.getElRect('menu-scroll-view', 'menuHeight');
				}
				setTimeout(() => { // 节流
					this.timer = null;
					// scrollHeight为右边菜单垂直中点位置
					// -55 修正bug
					// let scrollHeight = e.detail.scrollTop + this.menuHeight / 2 - 55;
					let scrollHeight = e.detail.scrollTop + 200;
					// console.log(scrollHeight);
					for (let i = 0; i < this.arr.length; i++) {
						let height1 = this.arr[i];
						let height2 = this.arr[i + 1];
						// 如果不存在height2，意味着数据循环已经到了最后一个，设置左边菜单为最后一项即可
						if (!height2 || scrollHeight >= height1 && scrollHeight < height2) {
							this.leftMenuStatus(i);
							return;
						}
					}
				}, 10)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-wrap {
		height: calc(81.5vh);
		/* #ifdef H5 */
		height: calc(81.5vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
	}

	.u-search-box {
		padding: 18rpx 30rpx;
	}

	.u-menu-wrap {
		// position: relative;
		height: 100%;
		flex: 1;
		display: flex;
		// overflow: hidden;
	}

	.u-search-inner {
		background-color: rgb(234, 234, 234);
		border-radius: 100rpx;
		display: flex;
		align-items: center;
		padding: 10rpx 16rpx;
	}

	.u-search-text {
		font-size: 26rpx;
		color: $u-tips-color;
		margin-left: 10rpx;
	}

	.u-tab-view {
		width: 200rpx;
		height: 100%;
	}

	.u-tab-item {
		height: 110rpx;
		// background: #f6f6f6;
		background: #fff;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #444;
		font-weight: 400;
		line-height: 1;
	}

	.u-tab-item-active {
		position: relative;
		color: #000;
		font-size: 30rpx;
		font-weight: 600;
		background: #f6f6f6;
	}

	.u-tab-item-active::before {
		content: "";
		position: absolute;
		border-left: 4px solid var(--seasonColor);
		// border-left: 4px solid $u-type-primary;
		height: 32rpx;
		left: 0;
		top: 39rpx;
		// border: ;
	}

	.u-tab-view {
		height: 100%;
	}

	.right-box {
		// background-color: rgb(250, 250, 250);
		background: #f6f6f6;
	}

	.page-view {
		padding: 16rpx;
	}

	.class-item {
		margin-bottom: 30rpx;
		// background-color: #fff;
		padding: 16rpx;
		border-radius: 8rpx;
	}

	.class-item:last-child {
		// min-height: 100vh;
		min-height: 70vh;
	}

	.item-title {
		position: relative;
		font-size: 26rpx;
		color: $u-main-color;
		font-weight: bold;

		.count-num {
			font-weight: normal;
			position: absolute;
			right: 10rpx;
			// margin-left: 400rpx;
			color: #999;
		}
	}

	.item-container {
		display: flex;
		flex-wrap: wrap;
		position: relative;
	}

	.item-menu-name {
		position: absolute;
		font-size: 16px;
		color: #fff;
	}

	.thumb-box {
		// width: 33.333333%;
		width: 100%;
		// height: 155rpx;
		// height: auto;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		margin-top: 20rpx;
		// background-color: #fff;
		border-radius: 10rpx;
		// opacity: 0.5;
		position: relative;
		border: 2px solid #fff;
		// border: 2px dashed #f6f6f6;
		
	}
	

	.thumb-box-hover {
		transform: scale(0.98);
		border: 2px dashed var(--seasonColor);
	}

	.item-menu-image {
		width: 100%;
		height: auto;
		max-height: 100%;
		opacity: 0.8;
		border-radius: 10rpx;
	}

	.c00 {
		font-size: 18px;
		font-family: "myFont2";
		letter-spacing: 1px;
		text-shadow: 2px 2px 10px #555555;
	}

	.c01 {
		top: 70rpx;
		font-size: 18px;
		right: 300rpx;
		font-family: "myFont2";
		text-shadow: 2px 2px 10px #555555;
	}

	.c02 {
		right: 100rpx;
		font-size: 18px;
		font-family: "myFont";
		text-shadow: 2px 2px 10px #444444;
		letter-spacing: 3px;
		border-bottom: 2px dashed #ffffff;
	}

	.c03 {
		font-family: "myFont2";
		letter-spacing: 10px;
	}

	.c04 {
		font-family: "myFont2";
		right: 300rpx;
		letter-spacing: 10px;
		text-shadow: 2px 2px 10px #555555;
	}

	.c10 {
		font-family: "myFont2";
		text-shadow: 2px 2px 10px #555555;
		font-size: 20px;
		left: 70rpx;
	}

	.c11 {
		font-family: "myFont";
		font-size: 20px;
		text-shadow: 2px 2px 10px #555555;
	}

	.c12 {
		font-family: "myFont";
		font-size: 20px;
		text-shadow: 2px 2px 10px #555555;
	}
	
	.c000 {
		font-family: "myFont2";
		font-size: 16px;
		text-shadow: 2px 2px 10px #4d4d4d;
	}
</style>