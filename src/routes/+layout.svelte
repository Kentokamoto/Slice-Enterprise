<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { InstagramIcon, MenuIcon } from '@lucide/svelte';
	import mascotThumb from '$lib/assets/Slice-Enterprise-Mascot_thumb.webp?inline';
	let { children } = $props();
	import '../app.css';
	let isMenuOpen = $state(false);
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	function closeMenu() {
		isMenuOpen = false;
	}
	$effect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	});
	//
	// Vercel Analytics and Insights
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	// Vercel Metrics and Monitoring
	injectAnalytics({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();
</script>

<AppBar class="bg-crust relative">
	<AppBar.Toolbar class="grid-cols-[3fr_1fr] md:grid-cols-[1fr_2fr] ">
		<AppBar.Lead>
			<a
				href="/"
				class="text-red-sauce font-display flex items-center text-3xl leading-tight font-bold lg:text-2xl"
				onclick={closeMenu}
			>
				<img
					class="m-4 w-8 flex-none place-content-center object-scale-down"
					src={mascotThumb}
					alt="slice enterprises mascot"
				/>
				Slice Enterprises
			</a>
		</AppBar.Lead>
		<AppBar.Trail class="items-center justify-end">
			<div class="text-red-sauce/80 hidden gap-4 text-md lg:text-xl font-semibold lg:flex">
				<a href="/slice-a-thon">Slice-a-thon</a>
				<a href="/taco-ocho">Taco Ocho</a>
				<a href="/eggnog">Eggnog Leg Jog</a>
				<a href="/donate">Donate</a>
				<a href="https://slice-enterprises.printful.me/">Shop</a>
				<a href="/about">About</a>
			</div>
			<button
				type="button"
				class="btn-icon btn-icon-lg hover:preset-tonal lg:hidden"
				onclick={toggleMenu}
			>
				<MenuIcon class="text-red-sauce font-semibold" />
			</button>
		</AppBar.Trail>
	</AppBar.Toolbar>
	<!--  Mobile Nav Bar -->
	<nav
		class="bg-crust fixed inset-x-0 top-25 bottom-0 z-[100] p-5 lg:hidden"
		class:hidden={!isMenuOpen}
		aria-hidden={!isMenuOpen}
	>
		<ul class="text-red-sauce mr-2 text-right text-4xl font-semibold">
			<li class="my-5">
				<a href="/slice-a-thon" onclick={closeMenu}>Slice-a-thon</a>
			</li>
			<li class="my-5">
				<a href="/taco-ocho" onclick={closeMenu}>Taco Ocho</a>
			</li>
			<li class="my-5">
				<a href="/eggnog" onclick={closeMenu}>Eggnog Leg Jog</a>
			</li>
			<li class="my-5">
				<a href="/donate" onclick={closeMenu}>Donate</a>
			</li>
			<li class="my-5">
				<a href="https://slice-enterprises.printful.me/">Shop</a>
			</li>
			<li class="my-5">
				<a href="/about" onclick={closeMenu}>About</a>
			</li>
		</ul>
	</nav>
</AppBar>
<main class="flex-1 bg-crust">
	{@render children()}
</main>

<!-- Footer -->
<footer class=" grid grid-cols-1 gap-4 bg-orange-300 p-5 md:grid-cols-4">
	<div class="col-span-1 md:col-span-2">
		<div class="text-lg font-bold">Slice Enterprises</div>
		<p class="text-gray-900">
			When running races meets food for the ultimate gastrointestinal challenge
		</p>

		<a
			class="item-center my-4 flex gap-2"
			data-outbound="slice enterprises instagrarnm"
			href="https://www.instagram.com/slice_enterprises/"
		>
			<InstagramIcon />@slice_enterprises</a
		>
	</div>

	<div class="col-span-1 mt-4 md:mt-0">
		<div class="text-lg font-bold">Races</div>
		<a class="item-center mt-1 flex" href="/slice-a-thon">Slice-a-thon</a>
		<a class="item-center mt-1 flex" href="/taco-ocho">Taco Ocho</a>
		<a class="item-center mt-1 flex" href="/eggnog">Eggnog Leg Jog</a>
		<a class="item-center mt-1 flex" href="/about">About</a>
	</div>
	<div class="col-span-1 mt-4 md:mt-0">
		<div class="text-lg font-bold">More</div>
		<a class="item-center mt-1 flex" href="/about">About</a>
		<a class="item-center mt-1 flex" href="/donate">Donate</a>
		<a href="https://slice-enterprises.printful.me/">Shop</a>
		<a class="item-center mt-1 flex" href="mailto:slice.enterprise.seattle@gmail.com">Contact Us</a>
	</div>

	<!-- Signing off -->
</footer>
