import { RouteRecordRaw } from "vue-router";

export const homeRouters: any = [
  {
    path: "/",
    name: "home",
    meta: {
      icon: "home",
    },
    component: () => import("./../../view/home/index.vue"),
  },
  {
    path: "/video",
    name: "video",
    meta: {
      icon: "play-circle",
    },
    component: () => import("./../../view/video/index.vue"),
  },
  {
    path: "/account",
    name: "account",
    meta: {
      icon: "account-circle",
    },
    component: () => import("./../../view/account/index.vue"),
  },
];

export const homeRoute: RouteRecordRaw = {
  path: "/",
  component: () => import("./../../layout/Home.vue"),
  redirect: "/home",
  children: [...homeRouters],
};
