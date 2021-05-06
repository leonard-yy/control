<template>
	<div class="control-menu-part">
		<el-menu
			:default-active="active"
			class="control-menu-vertical"
			@select="handleSelected"
		>
			<MenuItem :list="menuPath" />
		</el-menu>
	</div>
</template>

<script>
	import store from "@/store";
	import MenuItem from "./menuItem";
	export default {
		name: "Menu",
		data() {
			return {
				active: store.state.menu.index || "",
				menuPath: store.state.menu.menuPath || [],
			};
		},
		components: {
			MenuItem,
		},
		mounted() {},
		methods: {
			// 选择菜单 切换当前菜单选项 激活Tab监听事件 同步切换
			handleSelected(item, pathArr) {
				let obj = this.findItem(pathArr);
				store.commit("menu/setIndex", item);
				if (obj && obj.index && obj.name) {
					store.commit("menu/setCurrent", obj);
				} else {
					store.commit("menu/setCurrent", { index: item, name: "" });
				}
			},
			// 查询具体菜单
			findItem(pathArr) {
				let filterArr = this.menuPath;
				let obj = {};
				for (let i = 0; i < pathArr.length; i++) {
					let filterIndex = pathArr[i];
					let filter = filterArr.find(
						(item) => item.index == filterIndex
					);

					filterArr = filter.children || [];
					obj = filter;
				}
				return obj;
			},
		},
		watch: {
			// 监听Tab切换事件
			"$store.state.menu.index": function () {
				let index = this.$store.state.menu.index;
				this.active = index;
			},
		},
	};
</script>

<style  scoped lang="less">
	.control-menu-part {
		display: flex;
		flex-direction: column;
		.logo-container {
			display: flex;
			flex-direction: row;
			background: #2a2b2f;
			.logo {
				width: 30px;
				height: 24px;
				margin: 13px 16px 13px 20px;
				float: left;
				background-size: 100% 100%;
				background-repeat: no-repeat;
			}
			.logoText {
				font-size: 16px;
				font-weight: 500;
				color: #ffffff;
				float: left;
				line-height: 50px;
			}
		}
		.control-menu-vertical {
			flex: 1;
			border-top: 1px solid #e2e2e2;
			background: #f5f5f5;
		}

		.control-menu-vertical:not(.el-menu--collapse) {
			width: 200px;
			min-height: 400px;
		}
	}
</style>
