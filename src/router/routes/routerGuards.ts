import { Router } from "vue-router";
import { createPinia } from "pinia";
import { userStore } from "./../../store/user";

const pinia = createPinia();

const list = ["/home", "/login", "/register", "/", "/home"];

const userStoreData = userStore(pinia);

export function createRouterGuards(router: Router) {
  router.beforeEach((to, _from, next) => {
    const { path } = to;
    const name = userStoreData.userName;

    const isWhite = list.includes(path);
    if (!name) {
      if (!isWhite) {
        next("/login");
      }
    }
    next();
  });
}
