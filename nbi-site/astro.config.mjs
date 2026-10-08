import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nbd-detail.com',
  build: {
    format: 'file'
  },
  compressHTML: true
});
