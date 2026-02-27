<script>
	let { judgementDate } = $props();
	let days = $state(0);
	let hours = $state(0);
	let minutes = $state(0);
	let seconds = $state(0);
	setInterval(() => {
		const currDateTime = new Date().getTime();
		const diff = Math.max(judgementDate - currDateTime, 0);
		days = Math.floor(diff / (1000 * 60 * 60 * 24));
		hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		seconds = Math.floor((diff % (1000 * 60)) / 1000);
	}, 1000);
	const units = [
		{
			label: 'Days',
			get value() {
				return days;
			}
		},
		{
			label: 'Hours',
			get value() {
				return hours;
			}
		},
		{
			label: 'Minutes',
			get value() {
				return minutes;
			}
		},
		{
			label: 'Seconds',
			get value() {
				return seconds;
			}
		}
	];
</script>

<div>
	<div
		class="reveal-stagger mx-auto flex max-w-2xl flex-row justify-center gap-2 py-3 sm:gap-6 sm:py-4"
	>
		{#each units as unit (unit.label)}
			<div class="flex min-w-16 flex-col items-center px-2 sm:min-w-20 sm:px-4">
				<span
					class="font-display text-3xl leading-none font-bold text-white tabular-nums sm:text-5xl"
				>
					{String(unit.value).padStart(2, '0')}
				</span>
				<span class="mt-1 text-xs font-medium tracking-wider text-white/70 uppercase sm:text-sm">
					{unit.label}
				</span>
			</div>
		{/each}
	</div>
</div>
