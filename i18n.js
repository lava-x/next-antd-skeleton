const NextI18Next = require("next-i18next").default;
const { localeSubpaths } = require("next/config").default().publicRuntimeConfig;
const path = require("path");

const availableLocales = ["en", "cn"];
const defaultLocale = "en";

const NextI18NextInstance = new NextI18Next({
  // next-i18next options
  // https://github.com/isaachinman/next-i18next#options
  defaultNS: "common",
  defaultLanguage: defaultLocale,
  otherLanguages: availableLocales.filter((l) => l !== defaultLocale),
  localePath: path.resolve("./public/static/locales"),
  localeSubpaths,

  // other options from i18next
  // https://www.i18next.com/overview/configuration-options
  initImmediate: true,
  fallbackLng: "en",
  preload: ["en"],
  load: "languageOnly"
});

NextI18NextInstance.i18n.languages = availableLocales;

module.exports = NextI18NextInstance;
