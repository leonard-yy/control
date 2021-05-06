<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
	export default {
		name: "App",
		components: {},
		data() {
			return {};
		},
		mounted() {},
		methods: {},
	};
</script>

<style>
	html,
	body {
		height: 100%;
	}

	body {
		margin: 0px 0px 0px 0px;
	}
	#app {
		width: 100%;
		height: 100%;
		top: 0px;
		left: 0px;
		position: fixed;
	}
</style>
