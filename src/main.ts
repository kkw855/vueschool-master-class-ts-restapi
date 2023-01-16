import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "@/App.vue";
import router from "@/router";
import GlobalComponents from "@/globals";

const forumApp = createApp(App);

forumApp.use(createPinia());
forumApp.use(router);
forumApp.use(GlobalComponents);

forumApp.mount("#app");
