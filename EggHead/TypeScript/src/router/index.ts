import Vue from "vue";
import Router from "vue-router";
import Hello from "@/components/Hello.vue";
import HelloTS from "@/components/HelloTS.vue";
import Users from "@/components/users.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Hello",
      component: Hello
    },
    {
      path: "/hello-ts",
      name: "HelloTS",
      component: HelloTS
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    }
  ]
});
