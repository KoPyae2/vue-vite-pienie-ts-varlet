const modules = import.meta.globEager("./language/**/*.ts");
function getLanguages(langs: any, prefix = "language") {
  let obj = {
    cn: {},
    en: {},
    jp: {},
  };
  Object.keys(langs).forEach((key) => {
    const mod = langs[key].default;
    let k = key
      .replace(`./${prefix}/`, "")
      .replace(/^\.\//, "")
      .replace("/index", "");
    const lastIndex = k.lastIndexOf(".");
    k = k.substring(0, lastIndex);
    const keyList = k.split("/");
    const lang: any = keyList.pop();
    if (obj[lang]) {
      obj[lang][keyList[0]] = { ...mod };
    }
  });
  return obj;
}
const language = getLanguages(modules);

export default language;
