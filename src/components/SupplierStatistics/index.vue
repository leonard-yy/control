<template>
	<div class="tab-page-content">
		<div class="main-content">
			<div class="search-box">
				<span class="search-label">日期</span>
				<a-range-picker
					:placeholder="['请输入开始日期','请输入结束日期']"
					@change="onChangeDate"
					:locale="zhCN"
					style="width: 326px"
				/>
				<span class="search-label ml30">快速选择</span>
				<a-select
					style="width: 160px"
					placeholder="请选择时间段"
					@change="onChangeDateQuick"
				>
					<a-select-option value="7">
						最近七天
					</a-select-option>
					<a-select-option value="10">
						最近十天
					</a-select-option>
					<a-select-option value="30">
						最近三十天
					</a-select-option>
				</a-select>
				<span class="search-label ml30">供应商</span>
				<a-select
					style="width: 326px"
					placeholder="请输入供应商名称关键词"
					@change="onChangeDateQuick"
				>
					<a-select-option value="jack">
						最近七天
					</a-select-option>
					<a-select-option value="lucy">
						最近十天
					</a-select-option>
					<a-select-option value="disabled">
						最近三十天
					</a-select-option>
				</a-select>
				<a-button
					type="primary"
					class="orange-button ml30"
				>
					查询
				</a-button>
				<a-button
					type="primary"
					class="orange-cancel-button ml15"
				>
					重置
				</a-button>
			</div>

			<div class="table-box">
				<div class="table-container">
					<div class="tips-bar">
						<div class="blue-block"></div>
						<span>分析结果—N</span>
					</div>
					<a-table
						:columns="columnsN"
						:data-source="dataN"
						:locale="zhCN"
						:pagination="{
						position: 'bottom',
							pageSizeOptions:['10','20','30'],
							showSizeChanger:true,
							current: pageIndexN,
							total: NTotal,
							showTotal: (total, range) => this.showTotal(total, range),
							style: { marginRight: '20px' },
						}"
					>
					</a-table>
				</div>

				<div class="table-container">
					<div class="tips-bar">
						<div class="blue-block"></div>
						<span>分析结果—M</span>
					</div>
					<a-table
						:columns="columnsM"
						:data-source="dataM"
						:locale="zhCN"
						:pagination="{
							position: 'bottom',
							pageSizeOptions:['10','20','30'],
							showSizeChanger:true,
							current: pageIndexM,
							total: MTotal,
							showTotal: (total, range) => this.showTotal(total, range),
							style: { marginRight: '20px' },
						}"
					>
					</a-table>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
	import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
	const columnsN = [
		{
			title: "序号",
			dataIndex: "index",
			key: "index",
		},
		{
			title: "种类名称",
			dataIndex: "typeEnName",
			key: "typeEnName",
		},
		{
			title: "种类编号",
			dataIndex: "typeCode",
			key: "typeCode",
			ellipsis: true,
		},
		{
			title: "种类名称（中文）",
			dataIndex: "typeName",
			key: "typeName",
			ellipsis: true,
		},
		{
			title: "计费使用数量（条）",
			dataIndex: "chargeCount",
			key: "chargeCount",
			ellipsis: true,
		},
		{
			title: "总数用数量（条）",
			dataIndex: "totalCount",
			key: "totalCount",
			ellipsis: true,
		},
	];
	const dataN = [
		{
			index: "1",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "2",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "3",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "4",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "5",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "6",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "7",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "8",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "9",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "10",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
	];

	const columnsM = [
		{
			title: "序号",
			dataIndex: "index",
			key: "index",
		},
		{
			title: "种类名称",
			dataIndex: "typeEnName",
			key: "typeEnName",
		},
		{
			title: "种类编号",
			dataIndex: "typeCode",
			key: "typeCode",
			ellipsis: true,
		},
		{
			title: "种类名称（中文）",
			dataIndex: "typeName",
			key: "typeName",
			ellipsis: true,
		},
		{
			title: "计费使用数量（条）",
			dataIndex: "chargeCount",
			key: "chargeCount",
			ellipsis: true,
		},
		{
			title: "总数用数量（条）",
			dataIndex: "totalCount",
			key: "totalCount",
			ellipsis: true,
		},
	];
	const dataM = [
		{
			index: "1",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "2",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "3",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "4",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "5",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "6",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "7",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "8",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "9",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
		{
			index: "10",
			typeEnName: "English Name",
			typeCode: 32,
			typeName: "车辆违章",
			chargeCount: 2000,
			totalCount: 5000,
		},
	];

	export default {
		name: "SupplierStatistics",
		menuName: "按供应商统计分析",
		data() {
			return {
				searchDate: undefined,
				quickSearchValue: undefined,
				companyName: undefined,
				dataM,
				columnsM,
				dataN,
				columnsN,
				NTotal: 100,
				MTotal: 200,
				pageIndexM: 1,
				pageSizeM: 10,
				pageIndexN: 1,
				pageSizeN: 10,
			};
		},
		components: {},
		methods: {
			onChangeDate() {},
			onChangeDateQuick() {},
			showTotal(total, range) {
				return (
					<span className="tbPgS">
						共 <strong>{total}</strong> 条纪录
					</span>
				);
			},
		},
	};
</script>

<style scoped lang="less">
	.main-content {
		height: 100%;
		width: 100%;

		display: flex;
		flex-direction: column;
	}
	.search-label {
		margin-right: 15px;
		font-size: 14px;
		color: #333333;
	}
	.table-box {
		flex: 1;
		overflow: auto;
	}
	.tips-bar {
		display: flex;
		align-items: center;
		height: 40px;
		margin-top: 10px;
	}
	.blue-block {
		width: 2px;
		height: 14px;
		background: #0064c8;
		margin-right: 15px;
	}
</style>
