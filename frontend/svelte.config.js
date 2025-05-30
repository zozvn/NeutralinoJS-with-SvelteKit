import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: '../resources', 
			assets: '../resources',
			fallback: 'index.html'
		}),
		paths: {
			base: ''
		},
		appDir: 'src'
	},
};

export default config;
