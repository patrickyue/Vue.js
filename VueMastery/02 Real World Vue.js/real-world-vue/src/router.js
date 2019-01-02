import Vue from "vue";
import Router from "vue-router";
import EventCreate from "@/views/EventCreate.vue";
import EventList from "@/views/EventList.vue";
import EventShow from "@/views/EventShow.vue";
// import User from "@/views/User.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "event-list",
      component: EventList
    },
    {
      path: "/event/:id",
      name: "event-show",
      component: EventShow,
      props: true
    },
    {
      path: "/event-create",
      name: "event-create",
      component: EventCreate
    }
    // {
    //   path: "/user/:username",
    //   name: "user",
    //   component: User,
    //   props: true
    // }
  ]
});
