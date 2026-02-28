<script>
	import { base } from '$app/paths';
	import Image from '$lib/components/Image.svelte';
	import mascotThumb from '$lib/assets/Slice-Enterprise-Mascot_thumb.webp?inline';
	let { iteration, title } = $props();
</script>

<header class="bg-yellow-cheese flex w-full flex-row overflow-hidden object-cover">
	<Image
		class="m-4 w-8 flex-none place-content-center object-scale-down"
		url={mascotThumb}
		description="slice enterprise mascot"
	/>
	<div class="flex-1 place-content-center">
		<h2 class="text-red-sauce text-center text-xl font-extrabold sm:text-3xl">
			{iteration}
		</h2>
		<h1 class="text-red-sauce text-center text-2xl font-black sm:text-4xl">
			{title}
		</h1>
	</div>
	<Image
		class="m-4 w-8 flex-none place-content-center object-scale-down"
		url={mascotThumb}
		description="slice enterprise mascot"
	/>
</header>
