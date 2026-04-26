<script>
	let { children } = $props();
	import { page } from '$app/state';

	import PizzaBackground from '../../lib/components/pizza-background.svelte';
</script>

<!-- <PizzaBackground /> -->

{@render children()}

<div class="flex h-20 w-full items-center justify-center gap-5 bg-orange-300 text-lg">
	<a href="/slice-a-thon/2025">
		<button class:font-bold={page.url.pathname.includes(String(2025))}>2025</button>
	</a>
	<a href="/slice-a-thon/2026">
		<button class:font-bold={page.url.pathname.includes(String(2026))}>2026</button>
	</a>
</div>
