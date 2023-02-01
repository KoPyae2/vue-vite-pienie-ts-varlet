import { RouteRecordRaw } from "vue-router";

export const other: Array<RouteRecordRaw> = [
  {
    path: "/detail",
    name: "detail",
    component: () => import("./../../view/other/detail/index.vue"),
  },
];
