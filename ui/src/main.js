import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import { createI18n } from "vue-i18n";
import ja from "./assets/locales/ja.json";
import en from "./assets/locales/en.json";

export const i18n = createI18n({
  locale: "ja",
  messages: {
    en: en,
    ja: ja
  }
});

createApp(App).use(router).use(i18n).mount('#app')
