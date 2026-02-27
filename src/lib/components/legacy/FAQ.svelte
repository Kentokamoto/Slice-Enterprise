<script>
	import Accordion from './Accordion.svelte';
	let {faqs} = $props()
</script>

<div class="flex w-full flex-col place-content-center sm:flex-row">
	<div class="flex basis-full flex-col">
		<h1 class="text-red-sauce text-center text-xl font-bold sm:pl-2 sm:text-left">FAQ</h1>
		{#each faqs as faq (faq.title)}
			<Accordion title={faq.title} content={faq.description} />
		{/each}
	</div>
</div>
