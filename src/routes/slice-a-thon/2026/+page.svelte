<script lang="ts">
	import Counter from '$lib/components/legacy/Counter.svelte';
	const eventDate = new Date('May 14, 2026 4:00 PM PDT');
</script>

<div class="bg-red-sauce/90 shadow-lg backdrop-blur-sm"><Counter judgementDate={eventDate} /></div>
