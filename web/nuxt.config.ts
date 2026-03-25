import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/styles.scss',
  ],
  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },
  workspaceDir: '../',
  devtools: { enabled: true },
  devServer: {
    host: 'localhost',
    port: 4200,
  },
  typescript: {
    typeCheck: false,
    tsConfig: {
      extends: '../../tsconfig.base.json',
    },
  },
  imports: {
    autoImport: true,
  },
  vite: {
    plugins: [nxViteTsPaths()],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },
});

