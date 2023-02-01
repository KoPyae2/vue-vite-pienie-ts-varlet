import { App } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { createRouterGuards } from "./routes/routerGuards";
import { homeRoute } from "./routes/home";
import { other } from "./routes/other";
import { auth } from "./routes/auth";
export const routes: Array<RouteRecordRaw> = [
  homeRoute,
  {
    path: "/other",
    component: () => import("./../layout/Default.vue"),
    children: [...auth, ...other],
  },
];

const router = createRouter({
  // process.env.BASE_URL
  history: createWebHashHistory(""),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
  createRouterGuards(router);
}
export default router;
