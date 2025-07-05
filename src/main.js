import { createApp } from "vue";
import { createPinia } from "pinia";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "./style.css";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".dark", // Or your chosen selector
      cssLayer: {
        name: "primevue",
        order: "theme, base, primevue",
      },
    },
  },
});
app.use(pinia);
app.mount("#app");
