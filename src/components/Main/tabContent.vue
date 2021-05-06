<template>
	<div class="control-main-page">
		<a-tabs
			v-model="activeKey"
			type="editable-card"
			class="control-tab-box"
			@edit="onEdit"
			@change="onChange"
			hide-add
		>
			<a-tab-pane
				v-for="pane in panes"
				:key="pane.key"
				:tab="pane.title"
				:closable="pane.closable"
			>
				<component :is="pane.key" />
			</a-tab-pane>
		</a-tabs>
	</div>
</template>

<script>
	// 所有菜单需要加载到组件内，确保需要时能按名称加载
	import SupplierStatistics from "@/components/SupplierStatistics/index.vue";
	import SupplierTypeStatistics from "@/components/SupplierTypeStatistics/index.vue";
	import ClienteleStatistics from "@/components/ClienteleStatistics/index.vue";
	import ServiceCategoryStatistics from "@/components/ServiceCategoryStatistics/index.vue";
	import SupplierAnalysis from "@/components/SupplierAnalysis/index.vue";
	import ServiceQualityAnalysis from "@/components/ServiceQualityAnalysis/index.vue";

	import store from "@/store";
	export default {
		name: "TabContent",
		data() {
			return {
				panes: [],
				activeKey: "",
			};
		},
		mounted() {
			this.addMenu(store.state.menu.current);
		},
		// 加载组件
		components: {
			SupplierStatistics,
			SupplierTypeStatistics,
			ClienteleStatistics,
			ServiceCategoryStatistics,
			SupplierAnalysis,
			ServiceQualityAnalysis,
		},
		methods: {
			// 触发菜单监听事件
			onChange(current) {
				store.commit("menu/setIndex", current);
			},
			onEdit(targetKey, action) {
				this[action](targetKey);
			},
			remove(targetKey) {
				// 至少保留一个
				if (this.panes.length <= 1) {
					this.$message.info(`请保留至少一个窗口！`);
					return;
				}

				let activeKey = this.activeKey;
				let lastIndex;
				this.panes.forEach((pane, i) => {
					if (pane.key === targetKey) {
						lastIndex = i - 1;
					}
				});

				const panes = this.panes.filter((pane) => pane.key !== targetKey);
				if (panes.length && activeKey === targetKey) {
					if (lastIndex >= 0) {
						activeKey = panes[lastIndex].key;
					} else {
						activeKey = panes[0].key;
					}
				}
				this.panes = panes;
				this.activeKey = activeKey;
				store.commit("menu/setIndex", activeKey);
			},
			// 添加菜单
			addMenu(current) {
				const panes = this.panes;
				let has = false;

				// 检查是否存在菜单路径
				this.activeKey = current.index;
				panes.forEach((pane, i) => {
					if (pane.key === current.index) {
						has = true;
						return;
					}
				});
				// 已存在则取消
				if (has) return;

				// 大于五个菜单则提示关闭
				if (this.panes.length >= store.state.menu.maxMenuNumber) {
					this.$message.info(
						`最多展示${store.state.menu.maxMenuNumber}个窗口，请先关闭其他窗口！`
					);
					let last = this.panes[0];
					store.commit("menu/setIndex", last.key);
					this.activeKey = last.key;
					return;
				}

				let pane = { title: current.name || "", key: current.index };
				panes.push(pane);
				this.panes = panes;
			},
		},
		watch: {
			// 监听左侧菜单切换事件
			"$store.state.menu.current": function () {
				let current = this.$store.state.menu.current;
				this.addMenu(current);
			},
		},
	};
</script>

<style>
	.control-tab-box {
		height: 100%;
	}
	.ant-tabs .ant-tabs-top-content {
		flex: 1;
	}
	.tab-page-content {
		position: absolute;
		top: 56px;
		left: 0;
		bottom: 0;
		right: 0;
		overflow: auto;
	}
</style>
