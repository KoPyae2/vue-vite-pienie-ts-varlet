import { createI18n } from "vue-i18n";
//@ts-ignore
import messages from "./getLang";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: {
    en: { ...messages.en },
    cn: { ...messages.cn },
    jp: { ...messages.jp },
  },
});

// export function changeLang(locale) {
//   i18n.global.locale.value = locale;
//   store.dispatch("setLang", locale);
//   localStorage.setItem("setLang", true);
//   Locals(locale);
// }
export default i18n;
