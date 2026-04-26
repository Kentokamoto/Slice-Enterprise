<script>
	import partOfSliceMembers from '$lib/assets/part-of-slice-members.webp';
</script>

<svelte:head>
	<title>Slice Enterprises | About</title>
	<meta name="description" content="When running and our love for pizza met in the middle." />
</svelte:head>

<div class="bg-crust flex min-h-screen flex-col items-center-safe">
	<section class="m-9 flex flex-col justify-center lg:max-w-300 lg:flex-row">
		<img
			class=" mr-8 mb-4 w-full object-cover lg:mb-0 lg:h-100"
			alt="Part of slice enterprises founders"
			src={partOfSliceMembers}
		/>
		<div class="space-y-4">
			<h1 class="text-red-sauce text-2xl font-bold">A Match Made in Heaven</h1>
			<p class="">
				Slice Enterprises started with a simple but delicious idea: what if we could have pizza
				during our race? In 2025, that idea became our first-ever Slice-a-Thon event in Seattle, and
				the energy from that day made it clear we were onto something special. Runners showed up,
				had a blast, and left with full stomachs. Not long after, a member pitched a taco-themed
				race. Then came the idea for a holiday-themed event, and that’s when it hit us: this was
				more than just one race. Slice Enterprises was born.
			</p>
			<p class="">
				From the very beginning, Slice Enterprises has been shaped by its community. The ideas that
				built this organization didn’t come from a boardroom; they came from runners who showed up,
				had fun, and wanted more. That spirit is still at the heart of everything we do.
			</p>
			<p class="">
				Now, we are hosting three food-themed fun runs a year right here in Seattle, each one
				centered around a different theme and open to absolutely everyone. Whether you’ve run dozens
				of races or you’re just looking for a fun excuse to get outside, you’ll fit right in. We’re
				not about pace or performance. We’re here to enjoy the ride and celebrate at the finish line
				the best way we know how: with food.
			</p>
			<p class="">If you’re in Seattle and looking for your people, come run with us!</p>
		</div>
	</section>
	<!-- TODO: Basic Stats like when it was founded -->

	<section></section>
</div>
