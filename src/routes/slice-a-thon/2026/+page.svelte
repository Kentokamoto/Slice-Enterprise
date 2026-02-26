<script lang="ts">
	import { Accordion } from '@skeletonlabs/skeleton-svelte';
	import Counter from '$lib/components/legacy/Counter.svelte';
	import Registration from '$lib/components/legacy/Registration.svelte';
	import {
		AlertCircleIcon,
		CalendarFoldIcon,
		FlagIcon,
		MinusIcon,
		PizzaIcon,
		PlusIcon,
		RulerDimensionLineIcon
	} from '@lucide/svelte';
	import { Tabs } from '@skeletonlabs/skeleton-svelte';
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

<div class="grid grid-cols-1 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
	<div class="glass-strong mx-5 my-1 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
		<div class="flex items-center gap-2">
			<CalendarFoldIcon />
			<span class="font-bold">Date</span>
		</div>
		<div class="mt-2">May 16, 2026</div>
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
	<div class="glass-strong mx-5 my-1 rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
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
					Runners will stop by 3 pizza spots (2 for the 10k option) for their choice of a slice of
					'za. Once you return to the finish line, there will be a final slice of pie made by our
					volunteers to round out the race
				</p>
			</div>
		</Tabs.Content>
		<Tabs.Content value="route">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:gap-8">
				<div class="text-center font-bold sm:p-4">
					<h1 class="text-lg">Half Marathon Route</h1>
					<div class="text-red-sauce flex gap-2">
						<AlertCircleIcon />
						<p>Route subject to change</p>
					</div>
					<div
						class="strava-embed-placeholder"
						data-embed-type="route"
						data-embed-id="3445596670059233086"
						data-full-width="true"
						data-style="standard"
						data-map-hash="11.08/47.6303/-122.3272"
						data-from-embed="true"
					></div>
				</div>
				<div class="text-center font-bold sm:p-4">
					<h1 class="text-lg">10k Route</h1>
					<div class="text-red-sauce flex gap-2">
						<AlertCircleIcon />
						<p class="text-red-sauce">Route subject to change</p>
					</div>
					<div
						class="strava-embed-placeholder"
						data-embed-type="route"
						data-embed-id="3460125985862464372"
						data-full-width="true"
						data-style="standard"
						data-map-hash="11.3/47.6276/-122.3427"
						data-from-embed="true"
					></div>
					<script src="https://strava-embeds.com/embed.js"></script>
				</div>
			</div>
		</Tabs.Content>
		<Tabs.Content value="stops">
			<div class="space-y-4">
				<div class="mb-4 flex items-center gap-2">
					<div class="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
						10K
					</div>
				</div>
				<div class="border-l-4 border-blue-700 pl-4">
					<h4 class="text-lg font-semibold">
						<a href="https://maps.app.goo.gl/UvW54K21xEH6Eede7">Post Alley Pizza</a>
					</h4>
				</div>
				<div class="border-l-4 border-blue-700 pl-4">
					<h4 class="text-lg font-semibold">
						<a href="https://maps.app.goo.gl/uPkZTgtqWMLv2BfY6">Tivoli's</a>
					</h4>
				</div>
			</div>

			<div class="mt-8 space-y-4">
				<div class="mb-4 flex items-center gap-2">
					<div class="rounded-full bg-orange-200 px-3 py-1 text-sm font-semibold text-orange-700">
						Half Marathon
					</div>
				</div>
				<div class="border-l-4 border-orange-500 pl-4">
					<h4 class="text-lg font-semibold">
						<a href="https://maps.app.goo.gl/Rha8MT6t1as79ZJt7">Pagliacci's on Madison</a>
					</h4>
				</div>
				<div class="border-l-4 border-orange-500 pl-4">
					<h4 class="text-lg font-semibold">
						<a href="https://maps.app.goo.gl/UvW54K21xEH6Eede7">Post Alley Pizza</a>
					</h4>
				</div>
				<div class="border-l-4 border-orange-500 pl-4">
					<h4 class="text-lg font-semibold">
						<a href="https://maps.app.goo.gl/uPkZTgtqWMLv2BfY6">Tivoli's</a>
					</h4>
				</div>
			</div>
		</Tabs.Content>
		<Tabs.Content value="faq">
			<Accordion multiple>
				<Accordion.Item value="real race">
					<h3>
						<Accordion.ItemTrigger class="flex items-center justify-between"
							>Is this a real race?
							<Accordion.ItemIndicator class="group">
								<MinusIcon class="hidden size-4 group-data-[state=open]:block" />
								<PlusIcon class="block size-4 group-data-[state=open]:hidden" />
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
					</h3>
					<Accordion.ItemContent class="pr-2">Yes</Accordion.ItemContent>
				</Accordion.Item>
				<Accordion.Item value="Eat pizza">
					<h3>
						<Accordion.ItemTrigger class="flex items-center justify-between"
							>Do I have to eat pizza?

							<Accordion.ItemIndicator class="group">
								<MinusIcon class="hidden size-4 group-data-[state=open]:block" />
								<PlusIcon class="block size-4 group-data-[state=open]:hidden" />
							</Accordion.ItemIndicator>
						</Accordion.ItemTrigger>
					</h3>
					<Accordion.ItemContent class="pr-2">Yes</Accordion.ItemContent>
				</Accordion.Item>
			</Accordion>
		</Tabs.Content>
	</Tabs>
</div>
<div class="glass-strong m-3 min-h-[30vh] rounded-2xl border border-black/10 p-3 shadow-md">
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
