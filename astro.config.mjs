import { defineConfig } from 'astro/config';
import WindiCSS from 'vite-plugin-windicss';
import vue from '@astrojs/vue';
import alpinejs from "@astrojs/alpinejs";
// import image from "@astrojs/image";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  vite: {
    plugins: [WindiCSS()],
    ssr: {
      noExternal: ['@formkit/vue'],
    },
  },
  integrations: [
    alpinejs(),
    vue({
      appEntrypoint:'/src/pages/_form'
    }),
    astroImageTools,
    // image(
    //   {
    //     serviceEntryPoint: '@astrojs/image/sharp',
    //     logLevel: 'debug'
    //   }
    // )
  ]
});