import { defineConfig } from 'astro/config';
import WindiCSS from 'vite-plugin-windicss';
import vue from '@astrojs/vue';
import alpinejs from "@astrojs/alpinejs";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [WindiCSS()],
    ssr: {
      noExternal: ['@formkit/vue'],
    },
  },
  integrations: [
    // alpinejs(),
    vue({
      // exclude:['FormKit']
      // appEntrypoint: '/src/pages/_form',
    }),
    image(
      {
        serviceEntryPoint: '@astrojs/image/sharp',
        logLevel: 'debug'
      }
    )
  ]
});