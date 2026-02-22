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
</script>

<AppBar>
	<AppBar.Toolbar class="grid-cols-[1fr_1fr] md:grid-cols-[1fr_2fr] ">
		<AppBar.Lead>
			<a href="/" class="flex items-center">
				<img
					class="m-4 w-8 flex-none place-content-center object-scale-down"
					src={mascotThumb}
					alt="slice enterprise mascot"
				/>
				Slice Enterprise
			</a>
		</AppBar.Lead>
		<AppBar.Trail class="items-center justify-end">
			<div class="hidden gap-4 md:flex">
				<a href="/slice-a-thon">Slice-a-thon</a>
				<a href="/taco-ocho">Taco Ocho</a>
				<a href="/eggnog">Eggnog Leg Jog</a>
			</div>
			<button
				type="button"
				class="btn-icon btn-icon-lg hover:preset-tonal md:hidden"
				onclick={toggleMenu}
			>
				<MenuIcon />
			</button>
		</AppBar.Trail>
	</AppBar.Toolbar>
	<nav class="block md:hidden" class:hidden={!isMenuOpen}>
		<ul class="text-right">
			<li>
				<a href="/slice-a-thon">Slice-a-thon</a>
			</li>
			<li>
				<a href="/taco-ocho">Taco Ocho</a>
			</li>
			<li>
				<a href="/eggnog">Eggnog Leg Jog</a>
			</li>
		</ul>
	</nav>
</AppBar>
<main>
	{@render children()}
</main>

<!-- Footer -->
<footer class=" grid grid-cols-1 gap-4 bg-orange-300 p-5 md:grid-cols-4">
	<div class="col-span-1 md:col-span-2">
		<div class="text-lg font-bold">Slice Enterprise</div>
		<p class="text-gray-900">
			When running races meets food for the ultimate gastrointestinal challenge
		</p>

		<a class="item-center my-4 flex gap-2" href="https://www.instagram.com/slice_enterprises/">
			<InstagramIcon />@slice_enterprises</a
		>
	</div>

	<div class="col-span-1 mt-4 md:mt-0">
		<div class=" text-lg font-bold">Races</div>
		<a class="item-center mt-1" href="/slice-a-thon">Slice-a-thon</a>
		<a class="item-center mt-1" href="/taco-ocho">Taco Ocho</a>
		<a class="item-center mt-1" href="/eggnog">Eggnog Leg Jog</a>
	</div>
	<div class="col-span-1 mt-4 md:mt-0">
		<div class="text-lg font-bold">More</div>
		<a class="item-center mt-1 flex" href="/about">Slice-a-thon</a>
		<a class="item-center mt-1 flex" href="mailto:slice.enterprise.seattle@gmail.com">Contact Us</a>
	</div>
</footer>
