<template>
	<div>
		<template v-for="(item,index) in list">
			<!-- 标题 -->
			<template v-if="!item.isLeaf">
				<el-submenu
					:key="index"
					:index="item.index"
				>
					<template
						:index="item.index"
						slot="title"
					>
						<span>{{item.name}}</span>
					</template>
					<menuItem :list="item.children" />
				</el-submenu>
			</template>
			　　　
			<!-- 选项 -->
			<template v-else>
				<el-menu-item
					:key="index"
					:index="item.index"
				>
					<span>{{item.name}}</span>
				</el-menu-item>
			</template>
		</template>
	</div>
</template>
<script>
	export default {
		name: "menuItem",
		props: {
			list: Array,
		},
	};
</script>
<style>
	.el-submenu {
		background: #f5f5f5;
		font-size: 14px;
	}
	.el-menu-item {
		background-color: #f5f5f5;
		font-size: 12px;
	}
	.el-menu-item.is-active {
		background: #dedede;
		font-weight: bold;
		color: #333333;
	}
</style>