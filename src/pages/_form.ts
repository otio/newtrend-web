import type { App } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue'

export default function setup(app: App) {
    app.use(plugin, defaultConfig);
}