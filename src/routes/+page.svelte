<script>
	import sliceAThonGroupPhoto from '$lib/assets/slice-a-thon_group_photo.webp?inline';
	import eggnogLegJogGroupPhoto from '$lib/assets/eggnog-leg-jog-preview.webp';
	import tacoOchoGroupPhoto from '$lib/assets/taco-ocho-preview.webp';
	import sliceAThonPreview from '$lib/assets/slice-a-thon-preview.webp';
	import {
		CroissantIcon,
		FlagIcon,
		PizzaIcon,
		RulerDimensionLineIcon,
		UtensilsIcon
	} from '@lucide/svelte';
	import PizzaBackground from '$lib/components/pizza-background.svelte';
</script>

<svelte:head>
	<title>Slice Enterprise</title>
	<meta name="description" content="When running and food meet and grab a bite in Seattle" />
</svelte:head>

<PizzaBackground />
<!-- Hero Section -->
<section class="relative flex h-[60vh] items-center justify-center overflow-hidden md:h-[70vh]">
	<img
		class="absolute inset-0 h-full w-full object-cover"
		alt="slice-a-thon 2025 attendees"
		src={sliceAThonGroupPhoto}
	/>
	<div class="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60"></div>
	<div class="relative z-10 max-w-4xl px-4 text-center text-white">
		<h1 class="mb-4 text-4xl font-bold md:mb-6 md:text-6xl">Run. Eat. Repeat.</h1>
		<p class="mb-6 text-lg text-gray-100 md:mb-8 md:text-2xl">Now that's amore!</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a href="/slice-a-thon">
				<button
					class="w-full rounded-xl bg-orange-500/90 py-2 text-white hover:bg-orange-600 hover:shadow-lg sm:w-2xs"
				>
					View Our Next Race
				</button>
			</a>
			<a href="/about">
				<button
					class="w-full rounded-xl border-white bg-black/80 py-2 text-white hover:bg-black hover:shadow-lg sm:w-2xs"
				>
					About Us
				</button>
			</a>
		</div>
	</div>
</section>
<!-- Race Card Section -->
<section class="relative m-5 flex items-center justify-center overflow-hidden">
	<div class="grid w-full grid-cols-1 gap-4 px-0 py-2 md:grid-cols-2 md:px-10 lg:grid-cols-3">
		<!-- Slice-a-thon -->
		<div
			class="glass-strong flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-2xl"
		>
			<div class="relative overflow-hidden">
				<header class="relative">
					<img src={sliceAThonPreview} class="h-full w-full object-cover" alt="banner" />
				</header>
				<div class="m-3">
					<div>
						<h3 class="h6">May 16, 2026</h3>
						<h2 class="h3">Slice-a-thon</h2>
					</div>
					<div class="h-10">
						<p class="line-clamp-2 opacity-60">
							The race that started it all. Run and eat pizza from some of Seattle's best pizza
							spots.
						</p>
					</div>
					<div class="mt-4 mb-4 space-y-2">
						<div class="flex items-center gap-2 text-gray-700">
							<RulerDimensionLineIcon /> <span>10k and half marathon</span>
						</div>
						<div class="flex items-center gap-2 text-gray-700">
							<PizzaIcon /><span>3 pizza spots</span>
						</div>
						<div class="flex items-center gap-2 text-gray-700">
							<FlagIcon /><span>Gasworks Park</span>
						</div>
					</div>
					<div class="flex w-full items-center justify-center">
						<a class="flex w-full justify-center rounded-xl bg-amber-500" href="/slice-a-thon">
							<button class="mx-5 my-2">More Info</button>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Taco Ocho -->
		<div
			class="glass-strong flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-2xl"
		>
			<div class="relative overflow-hidden">
				<header class="relative">
					<img src={tacoOchoGroupPhoto} class="h-full w-full object-cover" alt="banner" />
				</header>
				<div class="m-3">
					<div>
						<h3 class="h6">August 8, 2026</h3>
						<h2 class="h3">Taco Ocho</h2>
					</div>
					<div class="h-10">
						<p class=" line-clamp-2 opacity-60">8 miles, 8 tacos, all on August 8th.</p>
					</div>
					<div class="mt-4 mb-4 space-y-2">
						<div class="flex items-center gap-2 text-gray-700">
							<RulerDimensionLineIcon /> <span>8 miles</span>
						</div>
						<div class="flex items-center gap-2 text-gray-700">
							<UtensilsIcon /><span>3 taco locations</span>
						</div>
						<div class="flex items-center gap-2 text-gray-700">
							<FlagIcon /><span>Northgate Station</span>
						</div>
					</div>
					<div class="flex w-full items-center justify-center">
						<a class="flex w-full justify-center rounded-xl bg-amber-500" href="/taco-ocho">
							<button class="mx-5 my-2">More Info</button>
						</a>
					</div>
				</div>
			</div>
		</div>

		<!-- Eggnog Leg Jog -->
		<div
			class="glass-strong flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-2xl"
		>
			<div class="relative overflow-hidden">
				<header class="relative">
					<img src={eggnogLegJogGroupPhoto} class="h-full w-full object-cover" alt="banner" />
				</header>
				<div class="m-3">
					<div>
						<h3 class="h6">November 2026</h3>
						<h2 class="h3">Eggnog Leg Jog</h2>
					</div>
					<div class="h-10">
						<p class="line-clamp-2 opacity-60">
							Kick off the holiday season with some baked goods and dancing around Green Lake!
						</p>
					</div>
					<div class="mt-4 mb-4 space-y-2">
						<div class="flex items-center gap-2 text-gray-700">
							<RulerDimensionLineIcon /> <span>10k</span>
						</div>
						<div class="flex items-center gap-2 text-gray-700">
							<CroissantIcon /><span>4 holiday stations</span>
						</div>
						<div class="flex items-center gap-2 text-gray-700">
							<FlagIcon /><span>Woodland Park</span>
						</div>
					</div>
					<div class="flex w-full items-center justify-center">
						<a class="flex w-full justify-center rounded-xl bg-amber-500" href="/eggnog">
							<button class="mx-5 my-2">More Info</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<!-- TODO: Stats section should include how many races are organized by Slice   -->
