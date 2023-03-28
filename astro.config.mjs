import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import pinegrow from '@pinegrow/astro-module'
// import { fileURLToPath, URL } from 'node:url'

import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import preact from '@astrojs/preact'

import svelte from '@astrojs/svelte'

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
        designableFileTypes: ['.astro', '.jsx', '.tsx', '.svelte'],
        // experimental: {
        //   metaFrameworks: ['astro'],
        // },
      },

      // https://github.com/antfu/unplugin-vue-components#configuration
      autoImportComponents: {
        dirs: ['src/components'],
      },
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    preact(),
    svelte(),
  ],
})
