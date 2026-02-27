<script>
	let { title, content } = $props();
</script>

<details class="border-yellow-cheese group mt-2 flex w-full flex-col rounded-lg border px-5 py-3">
	<summary
		class="text-red-sauce flex w-full flex-15 cursor-pointer list-none items-center justify-between text-left font-bold"
	>
		{title}
		<div>
			<svg
				class="h-6 w-6 transform transition-transform duration-200 group-open:rotate-180"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
			</svg>
		</div>
	</summary>
	<p class=" flex-15 origin-top transform pt-2 text-black transition-all duration-300 ease-in-out">
		<!-- eslint-disable -->
		<!-- Content being rendered are currently hard coded in repository. -->
		{@html content}
	</p>
</details>
