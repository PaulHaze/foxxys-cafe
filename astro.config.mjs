import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import { astroImageTools } from 'astro-imagetools';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [
		astroImageTools,
		tailwind({
			applyBaseStyles: false,
		}),
		react(),
		icon({
			iconDir: 'src/assets/icons',
		}),
	],
});
