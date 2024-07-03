import { fileURLToPath } from "url";

export default defineNuxtConfig({
  ssr: true,

  srcDir: "./src",

  devtools: { enabled: false },

  alias: {
    img: fileURLToPath(new URL("./src/shared/images/", import.meta.url)),
    scss: fileURLToPath(new URL("./src/app/scss/main.scss", import.meta.url)),
  },
  css: ["@/app/css/normalize.css", "@/app/scss/main.scss"],

  dir: {
    layouts: "./app/layouts/",
  },

  app: {
    head: {
      title: "Golden Honey",
      link: [{ rel: "icon", type: "image/png", href: "favicon.ico" }],
    },
  },
  components: {
    global: true,
    dirs: ["./components", "./shared/icons", "./shared/icons/products", "./shared/components"],
  },
});
