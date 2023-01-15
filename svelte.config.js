import adapterStatic from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapterStatic()
	},
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeExternalLinks]
		})
	]
};

export default config;
