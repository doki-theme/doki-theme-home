import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import routes from './routes.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
		trailingSlash: 'always',
		prerender :{
			default: true,
			crawl: true,
			enabled: true,
			onError: 'continue',
			entries: [...routes],
		},
		vite: {
			server: {
				fs: {
					allow: ['common']
				}
			}
		}
	}
};

export default config;
