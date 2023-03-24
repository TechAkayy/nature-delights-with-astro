import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import pinegrow from '@pinegrow/astro-module'
// import { fileURLToPath, URL } from 'node:url'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    pinegrow({
      liveDesigner: {
        tailwindcss: {
          configPath: 'tailwind.config.cjs',
          cssPath: '@/assets/css/tailwind.css',
          restartOnConfigUpdate: true,
          restartOnThemeUpdate: false,
        },
      },
      // https://github.com/antfu/unplugin-vue-components#configuration
      autoImportComponents: {
        dirs: ['src/components'],
      },
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: { applyBaseStyles: false },
    }),
  ],
})
