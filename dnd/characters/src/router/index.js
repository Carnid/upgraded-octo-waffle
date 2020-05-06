import Vue from "vue";
import VueRouter from "vue-router";
import Start from "../views/Start.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start
  },
  {
    path: "/new",
    name: "New",
    component: () => import(/* webpackChunkName: "about" */ "../views/New.vue")
  },
  {
    path: "/game",
    name: "Game",
    component: () => import(/* webpackChunkName: "about" */ "../views/Game.vue")
  },
  {
    path: "/patate",
    name: "Patate",
    component: () => import(/* webpackChunkName: "about" */ "../views/Patate.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
