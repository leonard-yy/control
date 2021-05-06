const menu = {
  namespaced: true,
  state: {
    // Menu默认菜单
    current: { name: "按供应商统计分析", index: 'SupplierStatistics' },
    // Tab切换菜单
    index: 'SupplierStatistics',
    // 菜单配置
    menuPath: [
      {
        name: "用量统计",
        index: 'UsageStatistics',
        isLeaf: false,
        children: [
          {
            name: "上游统计分析",
            index: 'UpstreamStatistics',
            isLeaf: false,
            children: [
              {
                name: "按供应商统计分析",
                index: 'SupplierStatistics',
                isLeaf: true
              }, {
                name: "按供应种类统计分析",
                index: 'SupplierTypeStatistics',
                isLeaf: true,
              }
            ]
          }, {
            name: "下游统计分析",
            index: 'DownstreamStatistics',
            isLeaf: false,
            isLeaf: false,
            children: [
              {
                name: "按客户统计分析",
                index: 'ClienteleStatistics',
                isLeaf: true
              }, {
                name: "按服务种类统计分析",
                index: 'ServiceCategoryStatistics',
                isLeaf: true,
              }
            ]
          }
        ]
      },
      {
        name: "质量分析",
        index: 'QualityAnalysis',
        isLeaf: false,
        children: [
          {
            name: "供应商质量分析",
            index: 'SupplierAnalysis',
            isLeaf: true,
          }, {
            name: "服务质量分析",
            index: 'ServiceQualityAnalysis',
            isLeaf: true,
          }
        ]
      }
    ],
    // 最大菜单个数
    maxMenuNumber: 5
  },
  mutations: {
    setCurrent(state, current) {
      state.current = current;
    },
    setIndex(state, index) {
      state.index = index;
    }
  }
};
export default menu;
