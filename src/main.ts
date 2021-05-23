import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: '亚历二〇',
		description: `## Best Girl`,
		}
});

export default app;