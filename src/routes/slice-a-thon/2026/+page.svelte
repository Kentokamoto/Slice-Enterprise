<script lang="ts">
	import Counter from '$lib/components/legacy/Counter.svelte';
	import { CalendarFoldIcon, FlagIcon, PizzaIcon, RulerDimensionLineIcon } from '@lucide/svelte';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	const eventDate = new Date('May 16, 2026 4:00 PM PDT');
	let tabValue = 'overview';
</script>

<div class="bg-red-sauce/90 shadow-lg backdrop-blur-sm"><Counter judgementDate={eventDate} /></div>

<div class="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
	<div class="glass-strong mx-5 my-1 h-20 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<CalendarFoldIcon />
			<span class="font-bold">Date</span>
		</div>
		<div class="mt-2">May 16, 2026</div>
	</div>
	<div class="glass-strong mx-5 my-1 h-20 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<FlagIcon />
			<span class="font-bold">Location</span>
		</div>
		<div class="mt-2">Gasworks Park</div>
	</div>
	<div class="glass-strong mx-5 my-1 h-20 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<RulerDimensionLineIcon />
			<span class="font-bold">Distance</span>
		</div>
		<div class="mt-2">Half Marathon (13.1 miles) and 10km</div>
	</div>
	<div class="glass-strong mx-5 my-1 h-20 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<PizzaIcon />
			<span class="font-bold">Number of Pizza Stops</span>
		</div>
		<div class="mt-2 flex justify-center">3</div>
	</div>
</div>

<div class="glass-strong m-3 min-h-[30vh] rounded-2xl border border-black/10 p-3 shadow-md">
	<Tabs
		value={tabValue}
		onValueChange={(details) => (tabValue = details.value)}
		class="flex flex-col"
	>
		<div class="mb-4 sm:hidden">
			<select
				class="bg-surface/80 text-md w-full rounded-lg border p-4 font-semibold shadow-md"
				bind:value={tabValue}
			>
				<option value="overview">Overview</option>
				<option value="route">Route</option>
				<option value="stops">Pizza Stops</option>
				<option value="faq">FAQ</option>
			</select>
		</div>
		<Tabs.List class="hidden font-semibold sm:flex md:gap-10">
			<Tabs.Trigger value="overview">Overview</Tabs.Trigger>
			<Tabs.Trigger value="route">Route</Tabs.Trigger>
			<Tabs.Trigger value="stops">Pizza Stops</Tabs.Trigger>
			<Tabs.Trigger value="faq">FAQ</Tabs.Trigger>
			<Tabs.Indicator />
		</Tabs.List>
		<Tabs.Content value="overview">
			<div>
				<h1 class="font-bold">The race that started it all, back for seconds</h1>
				<p class="mt-4">
					Slice-a-thon was born out of our love for pizza and running. After a very successful
					innaugural event in 2025, we're back in 2026 with a mix of old and new ideas to make the
					2nd annual even better. This year we're offering not just a half marathon distance, but a
					10k option as well making the race open to more people!
				</p>
				<p class="mt-1">
					Runners will top by 3 pizza spots (2 for the 10k option) for their choice of a slice of
					'za. Once you return to the finish line, there will be a final slice of pie made by our
					volunteers to round out the race
				</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="route">Route Section Goes Here</Tabs.Content>
		<Tabs.Content value="stops">Stops go here</Tabs.Content>
		<Tabs.Content value="faq">FAQ goes here</Tabs.Content>
	</Tabs>
</div>
<!-- FAQ Section -->
<!-- Signup Form Section -->
