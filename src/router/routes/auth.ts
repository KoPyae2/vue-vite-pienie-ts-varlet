import { RouteRecordRaw } from "vue-router";

export const auth: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("./../../view/auth/login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("./../../view/auth/register.vue"),
  },
];
