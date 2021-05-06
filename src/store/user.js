const user = {
  namespaced: true,
  state: {
    userInfo: {
      userId: "",
      userName: "",
    },
    isLogin: false,
  },
  mutations: {
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
    setIsLogin(state, isLogin) {
      state.isLogin = isLogin;
    },
  },
};
export default user;
