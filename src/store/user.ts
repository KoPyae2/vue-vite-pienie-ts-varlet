import { defineStore } from "pinia";
import { useLocalStorage } from "@vueuse/core";

export const userStore = defineStore("user", {
  state: () =>
    useLocalStorage("user:data", {
      userName: "" as string,
      lang: "en" as string,
    }) as any,
  actions: {
    setUserData(name: string) {
      this.userName = name;
    },
    changeLang(lang: string) {
      this.lang = lang;
    },
  },
});
