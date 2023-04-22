import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.my-site.dev',
  base: '/',
  srcDir: './src',
  publicDir: './public',
  outDir: '../../dist',
});
