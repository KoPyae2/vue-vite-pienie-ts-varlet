import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import components from "unplugin-vue-components/vite";
import autoImport from "unplugin-auto-import/vite";
import { VarletUIResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    components({
      resolvers: [VarletUIResolver()],
    }),
    autoImport({
      resolvers: [VarletUIResolver({ autoImport: true })],
    }),
  ],
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       modifyVars: {},
  //       javascriptEnabled: true,
  //     },
  //     scss: {
  //       additionalData: `@import "./src/style/modules/_utils.scss";
  //                    `,
  //     },
  //   },
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "./src/style/modules/_utils.scss";
              @import "./src/style/modules/_border.scss";
            `,
      },
    },
  },
  server: {
    host: true,
    port: 9999,
    // https: true,
    open: true,
  },
});
