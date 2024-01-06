<template>
	<view>
		<u-tabs-swiper class="u-tabs-swiper " ref="uTabs" :list="list" :current="current" @change="tabsChange"
			:is-scroll="false" :active-color="seasonColor" :key="seasonColor" inactive-color="#999"></u-tabs-swiper>
		<swiper class="swiper " :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<!-- <component v-bind:is="components[index]"></component> -->
				<Dressing v-if="index === 0"></Dressing>
				<Closet v-if="index === 1"></Closet>
				<Reminiscence v-if="index === 2"></Reminiscence>
				<Achievement v-if="index === 3" :key="Date.now()"></Achievement>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import Dressing from '@/components/Content/Dressing/index.vue'
	import Closet from '@/components/Content/Closet/index.vue'
	import Reminiscence from '@/components/Content/Reminiscence/index.vue'
	import Achievement from '@/components/Content/Achievement/index.vue'
	export default {
		name: "Content",
		components: {
			Closet,
			Dressing,
			Reminiscence,
			Achievement
		},
		data() {
			return {
				list: [{
					name: '搭配'
				}, {
					name: '衣橱'
				}, {
					name: '印象',
				}, {
					name: '成就',
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				tabs: [1, 2, 3, 4],
				seasonColor: '',
				components: ['Dressing','Closet', 'Reminiscence', 'Achievement']
			};
		},
		created() {
			uni.getStorage({
				key: 'seasonKey'
			}).then(res => {
				this.seasonColor = res.data === 0 ? this.$constants.COLOR_SPRING_AUTUMN : res.data === 1 ?
					this.$constants.COLOR_SUMMER : this.$constants.COLOR_WINTER;
			})
			// console.log(1);
		},
		computed: {
			...mapState(['bottomBarCurrent']),
			Component() {
				return this.components[this.current]
			}
		},
		watch: {
			// 监听底部并通知
			bottomBarCurrent(newValue, oldValue) {
				if (newValue < 2) {
					this.tabsChange(newValue)
				}
			},
		},
		methods: {
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
				// 通知底部导航
				if (index < 2) {
					this.$store.state.bottomBarCurrent = index
				}
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
				// 通知底部导航
				if (current < 2) {
					this.$store.state.bottomBarCurrent = current
				}
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-tabs-swiper {
		position: relative;
		height: 80rpx;
	}

	.swiper {
		position: relative;
		height: calc(81.5vh);
		/* #ifdef H5 */
		height: calc(81.5vh - var(--window-top));
		/* #endif */

		.swiper-item {
			position: relative;
			height: 100%;
		}
	}
</style>