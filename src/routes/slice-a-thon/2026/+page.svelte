<script lang="ts">
	import Counter from '$lib/components/legacy/Counter.svelte';
	import Registration from '$lib/components/legacy/Registration.svelte';
	import {
		CalendarFoldIcon,
		FlagIcon,
		PizzaIcon,
		RulerDimensionLineIcon,
		ClockIcon
	} from '@lucide/svelte';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
	import Faq2026 from './Components/faq_2026.svelte';
	import Stops2026 from './Components/stops_2026.svelte';
	import Route2026 from './Components/route_2026.svelte';

	const eventDate = new Date('May 16, 2026 4:00 PM PDT');
	let tabValue = 'overview';
</script>

<svelte:head>
	<title>Seattle Slice-a-Thon 2026</title>
	<meta
		name="description"
		content="10k and half marathon fun run around Seattle stopping by 3 pizza spots"
	/>
</svelte:head>

<div class="bg-red-sauce/90 shadow-lg backdrop-blur-sm"><Counter judgementDate={eventDate} /></div>

<div class="grid grid-cols-1 md:grid-cols-2 md:gap-1 lg:grid-cols-4">
	<div class="glass-strong mx-5 my-1 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<CalendarFoldIcon />
			<span class="font-bold">Date</span>
		</div>
		<div class="mt-2">May 16, 2026</div>
	</div>
	<div class="glass-strong mx-5 my-1 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<ClockIcon />
			<span class="font-bold">Time</span>
		</div>
		<div class="mt-2">4:00 PM PDT</div>
	</div>
	<div class="glass-strong mx-5 my-1 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<FlagIcon />
			<span class="font-bold">Location</span>
		</div>
		<div class="mt-2">Gasworks Park</div>
	</div>
	<div class="glass-strong mx-5 my-1 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<RulerDimensionLineIcon />
			<span class="font-bold">Distance</span>
		</div>
		<div class="mt-2">Half Marathon (13.1 miles) and 10km</div>
	</div>
</div>

<div
	class="glass-strong mx-5 my-1 max-w-full rounded-2xl border border-black/10 p-3
		shadow-md md:m-5"
>
	<div class="flex items-center gap-2 whitespace-nowrap">
		<PizzaIcon />
		<span class="font-bold">Number of Pizza Stops</span>
	</div>
	<div class="mt-2">3</div>
</div>
<div class="mt-6 max-w-full mx-5">
	<a href="/donate" target="_blank" rel="noopener" class="block">
		<div
			class="flex text-white rounded-2xl py-7 px-5 flex-col sm:flex-row items-center justify-between gap-4 bg-linear-to-r from-orange-600 to-red-sauce hover:from-orange-600 hover:to-red-sauce transition-all cursor-pointer border-none"
		>
			<div>
				<p class="font-extrabold text-2xl">Donate to Free2Fly!</p>

				<p class="font-semibold text-md">Help visually-impaired athletes in our community</p>
			</div>
			<button class="bg-white text-red-sauce p-3 rounded-lg font-semibold">
				Learn More & Donate →
			</button>
		</div>
	</a>
</div>

<div class="mt-6 max-w-full mx-5">
	<a href="https://slice-enterprises.printful.me/" target="_blank" rel="noopener" class="block">
		<div
			class="flex text-white rounded-2xl py-7 px-5 flex-col sm:flex-row items-center justify-between gap-4 bg-linear-to-r from-blue-500 to-blue-900 hover:from-blue-600 hover:to-blue-950 transition-all cursor-pointer border-none"
		>
			<div>
				<p class="font-extrabold text-2xl">Get your Slice-a-thon Gear!</p>

				<p class="font-semibold text-md">T-shirts, hats, and more now available now</p>
			</div>
			<button class="bg-white text-blue-900 p-3 rounded-lg font-semibold"> Shop merch → </button>
		</div>
	</a>
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
					Runners will stop by 3 pizza spots (2 for the 10k option) for their choice of a slice of
					'za. Once you return to the finish line, there will be a final slice of pie made by our
					volunteers to round out the race
				</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="route">
			<Route2026 />
		</Tabs.Content>
		<Tabs.Content value="stops">
			<Stops2026 />
		</Tabs.Content>
		<Tabs.Content value="faq">
			<Faq2026 />
		</Tabs.Content>
	</Tabs>
</div>
<div
	class="glass-strong m-3 flex min-h-[30vh] flex-col items-center rounded-2xl border border-black/10 p-3 shadow-md"
>
	<div class="w-full lg:w-3xl">
		<Registration iframeId={'JotFormIFrame-260540870713151'}>
			<iframe
				id="JotFormIFrame-260540870713151"
				title="2026 Slice-A-Thon Registration"
				allowtransparency
				src="https://form.jotform.com/260540870713151"
				frameborder="0"
				style="min-width:100%;max-width:100%;border:none;"
				scrolling="no"
				width="100%"
			>
			</iframe>
		</Registration>
	</div>
</div>
