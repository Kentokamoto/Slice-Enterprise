<script>
	import { page } from '$app/state';

	let { children } = $props();
</script>

{@render children()}

<div class="flex h-20 w-full items-center justify-center gap-5 bg-orange-300 text-lg">
	<a href="/taco-ocho/2025">
		<button class:font-bold={page.url.pathname.includes(String(2025))}>2025</button>
	</a>
</div>
