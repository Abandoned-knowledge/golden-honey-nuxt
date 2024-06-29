import { fileURLToPath } from "url";

export default defineNuxtConfig({
  srcDir: "./src",

  alias: {
    "@img": fileURLToPath(new URL("./shared/images/", import.meta.url)),
  },

  css: ["@/app/css/normalize.css", "@/app/scss/main.scss"],

  app: {
    head: {
      title: "Golden Honey",
    },
  },
  components: {
    global: true,
    dirs: ["./components", "./shared/icons", "./shared/components"],
  },
});
