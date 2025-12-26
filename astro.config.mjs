import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  adapter: cloudflare({
    imageService: 'cloudflare',
  }),
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
