// src/pages/_app.ts
import type { App } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import genesis from '@formkit/themes/tailwindcss/genesis'



export default (app: App) => {
  app.use(plugin, defaultConfig({
    icons: {
      ...genesisIcons
    },
    config:{
      classes: generateClasses(genesis),
    }
  }))
}