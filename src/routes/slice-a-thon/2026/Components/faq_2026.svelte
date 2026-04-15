<script lang='ts'>
    import {Accordion} from '@skeletonlabs/skeleton-svelte'
    import {MinusIcon, PlusIcon} from "@lucide/svelte"

	type FaqLink = { href: string; label: string };
	type FaqAnswerSegment = string | FaqLink;
	type FaqItem = { value: string; question: string; segments: FaqAnswerSegment[] };

	const faqItems: FaqItem[] = [
		{ value: 'real-race', question: 'Is this a real race?', segments: ['Yes'] },
		{ value: 'eat-pizza', question: 'Do I have to eat pizza?', segments: ['Yes'] },
		{
			value: 'payments',
			question: 'What do I need to pay for?',
			segments: [
				"You'll need to pay for the slice of pizza at each checkpoint. " +
					'Each slice averages out to about $4.50.'
			]
		},
		{
			value: 'aid-stations',
			question: 'Will there be aid stations?',
			segments: [
				'No, we encourage people to bring their own water and will mark locations along ' +
					'the route where people can use restrooms or find refreshments'
			]
		},
		{
			value: 'course-markings',
			question: 'Will there be course markings?',
			segments: [
				'No. We recommend downloading the route onto your phone or watch to avoid getting' +
					' lost. We will also have several runners at different speeds familiar with ' +
					'the route who can help guide the way. You can download the route here:'
			]
		},
		{
			value: 'cant-make-race',
			question: "I can't make the race, what should I do?",
			segments: [
				'No problem, please just send us an email at ',
				{
					href: 'mailto:slice.enterprise.seattle@gmail.com',
					label: 'slice.enterprise.seattle@gmail.com'
				},
				" to let us know you won't be joining so we can adjust our pizza orders",
				' accordingly!'
			]
		}
	];
</script>

<Accordion multiple class="sm:text-md text-xl">
    {#each faqItems as item, i (item.value)}
        {#if i > 0}
            <hr class="hr border-black" />
        {/if}
        <Accordion.Item value={item.value}>
            <h3>
                <Accordion.ItemTrigger class="flex items-center justify-between">
                    {item.question}
                    <Accordion.ItemIndicator class="group">
                        <MinusIcon class="hidden size-4 group-data-[state=open]:block" />
                        <PlusIcon class="block size-4 group-data-[state=open]:hidden" />
                    </Accordion.ItemIndicator>
                </Accordion.ItemTrigger>
            </h3>
            <Accordion.ItemContent class="pr-2">
                {#each item.segments as seg, j (j)}
                    {#if typeof seg === 'string'}
                        {seg}
                    {:else}
                        <a class="text-red-sauce" href={seg.href}>{seg.label}</a>
                    {/if}
                {/each}
            </Accordion.ItemContent>
        </Accordion.Item>
    {/each}
</Accordion>