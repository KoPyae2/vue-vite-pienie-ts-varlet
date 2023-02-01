import { createI18n } from "vue-i18n";
import { createPinia } from "pinia";
import messages from "./getLang";
import { userStore } from "./../store/user";
const pinia = createPinia();
const userStoreData = userStore(pinia);

const lang = userStoreData.lang;
const i18n = createI18n({
  legacy: false,
  locale: lang,
  fallbackLocale: "en",
  messages: {
    en: { ...messages.en },
    cn: { ...messages.cn },
    jp: { ...messages.jp },
  },
});

export function changeLanguage(lang: string) {
  userStoreData.changeLang(lang);
  i18n.global.locale.value = lang;
}
export default i18n;
