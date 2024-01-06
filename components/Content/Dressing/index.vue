<template>
	<div class="view">
		<!-- 新增搭配 -->
		<AddDress></AddDress>
		<!-- 搜索 -->
		<div class="search">
			<u-search placeholder="输入穿搭关键字"></u-search>
		</div>
		<!-- 最近穿搭 -->
		<RecentlyDress></RecentlyDress>
		<!-- 词条云 -->
		<TagCloud></TagCloud>
	</div>
</template>

<script>
	import AddDress from './components/AddDress.vue'
	import RecentlyDress from './components/RecentlyDress.vue'
	import TagCloud from './components/TagCloud.vue'
	export default {
		components: {
			AddDress,
			RecentlyDress,
			TagCloud
		},
		data() {
			return {

			};
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.view {
		height: calc(81.5vh);
		/* #ifdef H5 */
		height: calc(81.5vh - var(--window-top));
		/* #endif */
		display: flex;
		flex-direction: column;

		padding: 17rpx 30rpx 17rpx 30rpx;
		background-color: #fcfcfc;

		overflow-y: scroll;
	}

	.search {
		margin-top: 30rpx;
	}
</style>