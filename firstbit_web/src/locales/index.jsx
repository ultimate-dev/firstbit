import I18n from "i18n-js";
// Langs
import tr from "./langs/tr.json";
import en from "./langs/en.json";
// Default Browser Language
export const default_lang = String(
  window.navigator.userLanguage || window.navigator.language
).substring(0, 2);
//
I18n.fallbacks = true;
I18n.locales.no = "tr";
//
I18n.translations = {
  tr,
  en,
};
I18n.locale = default_lang;

export default I18n;

export function changeLocale(lang) {
  localStorage.setItem("locale", lang);
  window.location.reload();
}

export const getLocale = () => {
  var locale = localStorage.getItem("locale");
  return locale ? locale : "en";
};