import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main/index.vue";

Vue.use(Router);

const originalPush = Router.prototype.push;

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default new Router({
  routes: [
    {
      path: "/",
      name: "Main",
      component: Main,
    },
  ],
});
