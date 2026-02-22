<script>
	import sliceAThonGroupPhoto from '$lib/assets/slice-a-thon_group_photo.webp?inline';
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
<!-- Stats Section -->
<!-- TODO: Stats section should include how many races are organized by Slice
            Some things to include:
            - Founded year,
            - Number of races per year
            - Number of runners who have run in the past (estimate is ok)
-->
<!-- TODO: Stats section should include how many races are organized by Slice   -->
<!-- Race Card Section -->
