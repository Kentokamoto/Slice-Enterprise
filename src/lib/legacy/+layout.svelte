<script lang="ts">
	import { dev } from '$app/environment';
	import '../app.css';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	// Vercel Metrics and Monitoring
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	let { children } = $props();
</script>

<main class="bg-crust w-full">
	<div class="w-full place-content-center">
		{@render children()}
	</div>
</main>
