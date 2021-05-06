<template>
	<div class="control-header">
		<div class="menu-ctr">
			<img :src="require('@/assets/images/logo.png')">
		</div>
		<div class="welcome-text">
			<i
				class="el-icon-s-custom"
				style="color:#FF6A00"
			></i>
			{{ userName }}
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				userName: "Admin",
			};
		},
		components: {},
		mounted() {},
		methods: {},
	};
</script>

<style scoped lang="less">
	.control-header {
		background: #ffffff;
		border-bottom: 0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
		.menu-ctr {
			font-size: 18px;
			height: 48px;
			width: 124px;
			line-height: 48px;
			display: block;
			text-align: center;
			color: #fff;
			cursor: pointer;
		}
		.welcome-text {
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			cursor: pointer;
			padding: 0 20px;
			line-height: 48px;
			height: 48px;
			display: inline-block;
			text-align: center;
			font-family: AlibabaPuHuiTiR;
			font-size: 14px;
			color: #333333;
			font-weight: 400;
		}
	}
</style>
