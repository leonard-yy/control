<template>
	<div class="control-main-container">
		<Header />
		<div class="control-main-content">
			<Menu />
			<TabContent />
		</div>
	</div>
</template>

<script>
	import Header from "./header.vue";
	import Menu from "./menu.vue";
	import TabContent from "./tabContent.vue";
	import "@/assets/css/common.less";
	import "@/assets/css/theme.less";

	export default {
		name: "Main",
		components: {
			Header,
			Menu,
			TabContent,
		},
		data() {
			return {};
		},
		methods: {},
	};
</script>

<style scoped lang="less">
	.control-main-container {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		.control-main-content {
			flex: 1;
			display: flex;
			.control-main-page {
				flex: 1;
				padding: 15px 20px;
			}
		}
	}
</style>
