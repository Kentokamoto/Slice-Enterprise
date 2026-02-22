<script>
	import sliceAThonGroupPhoto from '$lib/assets/slice-a-thon_group_photo.webp?inline';
	const imgSrc =
		'https://images.unsplash.com/photo-1463171515643-952cee54d42a?q=80&w=450&h=190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
	import { FlagIcon, PizzaIcon, RulerDimensionLineIcon, UtensilsIcon } from '@lucide/svelte';
</script>

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
				<button class="w-full bg-orange-500 text-white hover:bg-orange-600 sm:w-auto">
					View Our Races
				</button>
			</a>
			<a href="/about">
				<button class="w-full border-white bg-white/10 text-white hover:bg-white/20 sm:w-auto">
					About Us
				</button>
			</a>
		</div>
	</div>
</section>
<!-- Race Card Section -->
<section class="relative m-5 flex items-center justify-center overflow-hidden">
	<div class="grid w-full grid-cols-3 gap-4">
		<!-- Race Card -->
		<div
			class="flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-xl"
		>
			<div class="relative overflow-hidden">
				<header>
					<img src={imgSrc} class="h-full w-full object-cover" alt="banner" />
				</header>
				<div class="m-3">
					<div>
						<h3 class="h6">May 16, 2026</h3>
						<h2 class="h3">Slice-a-thon</h2>
					</div>
					<p class="line-clamp-2 opacity-60">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
						eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam
						iure molestias cum expedita architecto itaque quae rem.
					</p>
					<div class="mt-4 mb-4 space-y-2">
						<div class="flex items-center gap-2 text-gray-700">
							<RulerDimensionLineIcon /> <span>10k and Half Marathon</span>
						</div>
						<div class="flex items-center gap-2 text-gray-700">
							<PizzaIcon /><span>3 Pizza Spots</span>
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
		<div
			class="flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-xl"
		>
			<div class="relative overflow-hidden">
				<header>
					<img src={imgSrc} class="h-full w-full object-cover" alt="banner" />
				</header>
				<div class="m-3">
					<div>
						<h3 class="h6">August 8, 2026</h3>
						<h2 class="h3">Taco Ocho</h2>
					</div>
					<p class="line-clamp-2 opacity-60">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
						eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam
						iure molestias cum expedita architecto itaque quae rem.
					</p>
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

		<div
			class="flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-xl"
		>
			<div class="relative overflow-hidden">
				<header>
					<img src={imgSrc} class="h-full w-full object-cover" alt="banner" />
				</header>
				<div class="m-3">
					<div>
						<h3 class="h6">TBD</h3>
						<h2 class="h3">Eggnog Leg Jog</h2>
					</div>
					<p class="line-clamp-2 opacity-60">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
						eveniet eligendi cumque consequatur tempore sint nisi sapiente. Iste beatae laboriosam
						iure molestias cum expedita architecto itaque quae rem.
					</p>
					<div class="mt-4 mb-4 space-y-2">
						<div class="flex items-center gap-2 text-gray-700">
							<RulerDimensionLineIcon /> <span>10k</span>
						</div>
						<div class="flex items-center gap-2 text-gray-700">
							<PizzaIcon /><span>4 Holiday Stations</span>
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
