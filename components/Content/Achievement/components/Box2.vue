<template>
	<view class="view-box trans-200ms" hover-class="view-box-hover" hover-start-time='5' hover-stay-time='150'>
		<div class="box1-title">裙子</div>
		<div class="box1">
			<qiun-data-charts type="ring" :opts="opts" :chartData="chartData" />
		</div>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chartData: {},
				//您可以通过修改 config-ucharts.js 文件中下标为 ['ring'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
				opts: {
					color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4",
						"#ea7ccc"
					],
					padding: [5, 5, 5, 5],
					enableScroll: false,
					extra: {
						pie: {
							activeOpacity: 0.5,
							activeRadius: 10,
							offsetAngle: 0,
							labelWidth: 15,
							border: false,
							borderWidth: 3,
							borderColor: "#FFFFFF",
							linearType: "custom"
						}
					},
					legend: {
						show: true,
						position: "right",
						lineHeight: 30
					},
					title: {
						name: "",
						fontSize: 15,
						color: "#666666"
					},
					subtitle: {
						name: "23条",
						fontSize: 17,
						color: "#ec85a4"
					},
				},
			};
		},
		created() {
			this.getServerData();
		},
		methods: {
			getServerData() {
				//模拟从服务器获取数据时的延时
				setTimeout(() => {
					//模拟服务器返回数据，如果数据格式和标准格式不同，需自行按下面的格式拼接
					let res = {
						series: [{
							data: [{
								"name": "连衣裙",
								"value": 6
							}, {
								"name": "百褶裙",
								"value": 3
							}, {
								"name": "包臀裙",
								"value": 4
							}, {
								"name": "公主裙",
								"value": 2,
								// "labelText": "公主裙:2"
							}, {
								"name": "马面裙",
								"value": 1
							},
							{
								"name": "蓬蓬裙",
								"value": 1
							}]
						}]
					};
					this.chartData = JSON.parse(JSON.stringify(res));
				}, 500);
			},
		}
	}
</script>

<style lang="scss" scoped>
	.view-box {
		position: relative;
		background-color: #fff;
		border-radius: 30rpx;
		height: auto;
		box-shadow: 2px 5px 20px #dedede;
		padding: 20rpx;
		margin-bottom: 30rpx;
		// overflow: scroll;

		.box1 {
			height: 27vh;
		}

		.box1-title {
			position: relative;
			margin: 15rpx 0 0 25rpx;
			color: #6f6f6f;
			font-weight: lighter;
			font-size: 30rpx;
		}
	}
	.view-box-hover{
		transform: scale(0.98);
	}
</style>