import adapter from '@sveltejs/adapter-static';
import svelte from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		svelte({
			postcss: true
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeExternalLinks]
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),
		trailingSlash: 'always'
	}
};

export default config;
