<template>
	<div class="view">
		<Box1></Box1>
		<Box2></Box2>
		<Box3 v-if="more"></Box3>
		<Box0 v-if="more"></Box0>
		<div class="loadmore" @tap="loadMore">
			<u-loadmore :status="status" :load-text="loadText" />
		</div>
	</div>
</template>

<script>
	import Box0 from './components/Box0.vue'
	import Box1 from './components/Box1.vue'
	import Box2 from './components/Box2.vue'
	import Box3 from './components/Box3.vue'
	export default {
		components: {
			Box0,
			Box1,
			Box2,
			Box3,
		},
		data() {
			return {
				status: 'loadmore',
				loadText: {
					loadmore: '展示全部',
					loading: '努力加载中',
					nomore: '收起'
				},
				more: false,
			}
		},
		methods: {
			loadMore() {
				if (this.status == 'nomore') {
					this.status = 'loadmore'
					this.more = false
					return
				}
				this.status = 'loading'
				setTimeout(() => {
					this.more = true
					this.status = 'nomore'
				}, 1000)
			}
		}
	};
</script>

<style lang="scss" scoped>
	.view {
		// position: relative;
		height: calc(81.5vh);
		/* #ifdef H5 */
		height: calc(81.5vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;
		padding: 20rpx 25rpx 20rpx 25rpx;
		overflow: scroll;
	}

	.loadmore {
		// position: relative;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
</style>