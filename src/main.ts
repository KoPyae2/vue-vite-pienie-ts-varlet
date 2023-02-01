import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import { setupRouter } from "./router/index";
import i18n from "./locales/i18n";

const pinia = createPinia();
const app = createApp(App);
setupRouter(app);
app.use(pinia);
app.use(i18n);
app.mount("#app");
