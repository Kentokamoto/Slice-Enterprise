<script>
	import free2fly_group from '$lib/assets/free2fly_group_1.webp';
	import free2fly_group_2 from '$lib/assets/free2fly_group_2.webp';
	import runner_and_guide from '$lib/assets/runner_and_guide.webp';
	import { InstagramIcon } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Slice Enterprises | Donate</title>
	<meta name="description" content="Slice Enterprises Donation Partner" />
</svelte:head>
<!-- <PizzaBackground /> -->
<section class="relative flex h-[60vh] items-center justify-center overflow-hidden md:h-[80vh]">
	<img
		class="absolute inset-0 h-full w-full object-cover"
		alt="free2fly run club group"
		src={free2fly_group}
	/>
	<div class="absolute inset-0 bg-linear-to-b from-orange/70 via-orange/60 to-orange/80"></div>

	<div class="relative z-10 max-w-4xl px-4 text-center text-white">
		<h1 class="mb-4 text-4xl font-extrabold md:mb-6 md:text-6xl">Support Free2Fly!</h1>
		<p class="mb-6 text-lg text-gray-100 md:mb-8 md:text-2xl font-bold">
			Everyone deserves a chance to fly
		</p>
		<div class="flex flex-col justify-center gap-4 sm:flex-row">
			<a href="https://venmo.com/u/free2flyrc">
				<button
					class="w-full rounded-xl border-white bg-orange-400 py-2 font-semibold text-white hover:shadow-lg sm:w-2xs"
				>
					Donate Here
				</button>
			</a>
		</div>
	</div>
</section>
<!-- Blurb Section -->
<section
	class="space-y-6 px-4 sm:px-6 lg:px-8 glass-strong mx-auto my-3 flex max-w-4xl flex-col items-center rounded-2xl border border-black/10 py-5 md:py-10 shadow-md"
>
	<h1 class="text-3xl text-left pb-3 font-bold">About Free2Fly</h1>
	<img
		class="h-80 w-full object-cover overflow-hidden rounded-lg"
		alt="free2fly group"
		src={free2fly_group_2}
	/>
	<p class="leading-relaxed text-lg">
		This year we’re partnering with <strong>Free 2 Fly</strong>, a local organization that supports
		visually- impaired athletes in our community. Each week, rain or shine, this group meets at
		Green Lake to run/walk, connect and laugh. Visually-impaired athletes are paired with sighted
		guides to create this adaptive experience.
	</p>
	<p class="leading-relaxed text-lg">
		Since its inception last year, the group has grown and now in addition to weekly runs, athletes
		are participating in races around the city (and country)!
	</p>
	<img
		class="max-w-sm object-cover rounded-lg"
		alt="free2fly runner and guide"
		src={runner_and_guide}
	/>

	<p class="leading-relaxed text-lg">
		Free 2 Fly and Slice Enterprises both promote supportive community engagement. As part of your <a
			href="slice-a-thon/2026"
			class="text-red-sauce">Slice-a-thon 2026</a
		> experience, please consider donating to Free 2 Fly. Donations will help them continue to grow and
		scale this amazing organization.
	</p>
	<div
		class=" bg-orange-200 text-orange-600 py-6 text-lg md:text-2xl px-5 w-full font-extrabold rounded-3xl text-center"
	>
		<span>Everyone deserves a chance to fly</span>
	</div>
</section>

<!-- Venmo Section-->
<section
	class="mx-auto my-6 rounded-2xl border border-venmo-blue/35 bg-venmo-blue px-6 py-8 text-white text-center max-w-4xl"
>
	<h1 class="text-2xl md:text-3xl font-bold">Make a Donation Today</h1>
	<p class="text-lg my-5">
		Your contribution directly supports visually-impaired athletes and helps grow this incredible
		community.
	</p>
	<a href="https://venmo.com/u/free2flyrc">
		<button class="bg-white text-venmo-blue py-3 px-10 text-lg rounded-2xl font-bold">
			Donate via Venmo
		</button>
	</a>
</section>

<!-- Social Media Section-->
<section class="mx-auto my-6 rounded-2xl border p-5 glass-strong max-w-4xl">
	<h1 class="text-lg font-semibold mb-5">Connect with Free 2 Fly!</h1>
	<div class="flex items-center gap-3">
		<InstagramIcon class="text-instagram-pink" />
		<div>
			<p class="text-s">Follow on Instagram</p>
			<a
				href="https://www.instagram.com/free2fly_RC"
				target="_blank"
				data-outbound="free2fly instagram"
				class="font-semibold text-instagram-pink hover:text-pink-700"
			>
				@free2fly_RC
			</a>
		</div>
	</div>
</section>
