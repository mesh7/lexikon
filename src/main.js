import { createApp } from "vue";
import PrimeVue from "primevue/config";
import Aura from "@primeuix/themes/aura";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
