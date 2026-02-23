<script lang="ts">
	import Counter from '$lib/components/legacy/Counter.svelte';
	import { CalendarFoldIcon, FlagIcon, PizzaIcon, RulerDimensionLineIcon } from '@lucide/svelte';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	const eventDate = new Date('May 16, 2026 4:00 PM PDT');
	let tabValue = 'overview';
</script>

<div class="bg-red-sauce/90 shadow-lg backdrop-blur-sm"><Counter judgementDate={eventDate} /></div>

<div class="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
	<div class="glass-strong mx-5 my-1 h-20 rounded-2xl p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<CalendarFoldIcon />
			<span class="font-bold">Date</span>
		</div>
		<div class="mt-2">May 16, 2026</div>
	</div>
	<div class="glass-strong mx-5 my-1 h-20 rounded-2xl p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<FlagIcon />
			<span class="font-bold">Location</span>
		</div>
		<div class="mt-2">Gasworks Park</div>
	</div>
	<div class="glass-strong mx-5 my-1 h-20 rounded-2xl p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<RulerDimensionLineIcon />
			<span class="font-bold">Distance</span>
		</div>
		<div class="mt-2">Half Marathon (13.1 miles) and 10km</div>
	</div>
	<div class="glass-strong mx-5 my-1 h-20 rounded-2xl p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<PizzaIcon />
			<span class="font-bold">Number of Pizza Stops</span>
		</div>
		<div class="mt-2 flex justify-center">3</div>
	</div>
</div>

<div class="glass-strong m-3 min-h-[30vh] rounded-2xl p-3 shadow-md">
	<Tabs
		value={tabValue}
		onValueChange={(details) => (tabValue = details.value)}
		class="flex flex-col"
	>
		<div class="mb-4 md:hidden">
			<select
				class="bg-surface/80 text-md w-full rounded-lg p-4 font-semibold shadow-md"
				bind:value={tabValue}
			>
				<option value="overview">Overview</option>
				<option value="route">Route</option>
				<option value="stops">Pizza Stops</option>
				<option value="faq">FAQ</option>
			</select>
		</div>
		<Tabs.List class="hidden font-semibold md:flex md:gap-10">
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="route">Route</Tabs.Trigger>
			<Tabs.Trigger value="stops">Pizza Stops</Tabs.Trigger>
			<Tabs.Trigger value="faq">FAQ</Tabs.Trigger>
			<Tabs.Indicator />
		</Tabs.List>
		<Tabs.Content value="overview">Overview Section Goes Here</Tabs.Content>
		<Tabs.Content value="route">Route Section Goes Here</Tabs.Content>
		<Tabs.Content value="stops">Stops go here</Tabs.Content>
		<Tabs.Content value="faq">FAQ goes here</Tabs.Content>
	</Tabs>
</div>
<!-- FAQ Section -->
<!-- Signup Form Section -->
