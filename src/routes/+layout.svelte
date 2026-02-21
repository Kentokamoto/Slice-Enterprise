<script lang="ts">
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import { MenuIcon } from '@lucide/svelte';
	import mascotThumb from '$lib/assets/Slice-Enterprise-Mascot_thumb.webp?inline';

	let isMenuOpen = $state(false);
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<AppBar>
	<AppBar.Toolbar class="grid-cols-[1fr_2fr] ">
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
