<script>
	import Title from '$lib/Title.svelte';
	import Counter from '$lib/Counter.svelte';
	import Story from '$lib/Story.svelte';
	import Details from '$lib/Details.svelte';
	import FAQ from '$lib/FAQ.svelte';
	import Registration from '$lib/Registration.svelte';

	const storyTitle = `Taco Ocho Origin Story`;
	const storyParagraphs = [
		`Many years ago, on the ocho-th day, of the ocho-th month, at ocho o’clock Mountain
     Time, a traveler was making his way from Northgate to Capitol Hill, in search of the
     perfect street taco. As he was beginning to lose hope, he saw the distinct shadow of a food
     truck. Knowing he’d never make it there on time walking, he began to run. Tired, hungry and 
     full of love, the traveler began to sing as he arrived at the taco truck. Knowing they might 
     be closed, he looked deep into his heart and these were the words that came out: “no rompas 
     mas, mi pobre corazón”, which translates to “don’t break my poor heart anymore”. Hearing 
     this, the taco truck operator smiled and reopened for the traveler.`,
		`This year, we will honor the traveler’s great conquest by running, eating tacos and 
     singing “no rompas mas, mi pobre corazón”.  Whether you enjoy running, eating tacos or 
     spontaneous singing and line dancing, this race has got a little something for everyone.
     Looking forward to seeing you there at 8:00 PM Mountain Time (7:00 PM Pacific)
     on August 8th`
	];
	const eventDate = new Date('August 8, 2025 8:00 PM MDT');

	const eventLocation = 'Northgate Station';
	const faqs = [
		{
			title: 'Is this a real race?',
			description: `We will have prizes for the first place finisher, and the first duo to 
                    complete the race. Beyond that, there is no wrong way to do the Taco Ocho,
                    whether you want to go for an ocho mile PR, do a slow jog, or go for the 
                    classic ocho minutes per mile, it's all up to you`
		},
		{
			title: 'How many people are doing this?',
			description: `We are capping registration at 40 people. We expect between 20 and 40`
		},
		{
			title: 'Does this support charity?',
			description: `We request people donate $10 dollars to one of the following charities. 
                    Please place “taco ocho” in the memo line so we can pull the data later`
		},
		{
			title: 'How will I know the route?',
			description: `We will have several pacers who know the route`
		},
		{
			title: 'Where are we eating?',
			description: `There will be 3 stops:
                    <a href="https://maps.app.goo.gl/JsJehqqXYbxEdYN87" 
                       class="text-red-sauce hover:text-red-700 underline">La Cuarda Tacos</a>,
                    <a href="https://maps.app.goo.gl/MtqyhS3bGyLm3R1G8" 
                       class="text-red-sauce hover:text-red-700 underline">Interstate Taco</a>, 
                    and
                    <a href="https://maps.app.goo.gl/BUo9s1x6LPBKgqS17" 
                       class="text-red-sauce hover:text-red-700 underline">Oliveras Tacos</a>`
		},
		{
			title: 'How many tacos do I have to eat?',
			description: `The official event is ocho tacos over the three locations. With a partner,
                    the tacos can be spread amongst two people (cuatro & cuatro, cinco & tres, etc)`
		},
		{
			title: 'How much does a taco cost?',
			description: `Tacos cost around $3-4`
		},
		{
			title: 'Do they accept card?',
			description: `No. Only cash is accepted`
		},
		{
			title: 'What if I don’t want to eat all of the tacos?',
			description: `If the official taco count is too intimidating, trust your body. The Taco 
                    Ocho may be a chance for glory but it’s ultimately for fun. The taco eating is 
                    only required if you want to win a prize`
		},
		{
			title: 'How will transportation work?',
			description: `We will end the race near the Capitol Hill light rail station, after 
                    which we expect most people to take the light rail back to Northgate
`
		},
		{
			title: 'Can I invite my friends?',
			description: `Please do! We just ask that you have them register individually so we can 
                    have a headcount`
		},
		{
			title: 'Will there be lines at the Taco stands?',
			description: `It’s very likely that you will wait in lines,`
		},
		{
			title: 'Will there be line dancing?',
			description: `It’s highly likely some optional line dancing will be taking place`
		},
		{ title: 'Will I have fun?', description: `Yes` },
		{ title: 'Is there a time limit?', description: `Cutoff for the 8 miles is 2.5 hours` },
		{ title: 'Will there be vegetarian or vegan options?', description: `Yes` }
	];
	const jotformIframeId = 'JotFormIFrame-251845910128154';
</script>

<svelte:head>
	<title>2025 Seattle Taco Ocho</title>
	<meta name="description" content="Eight miles, eight tacos" />
</svelte:head>

<Title iteration="First Annual" title="Seattle Taco Ocho" />
<Counter judgementDate={eventDate.getTime()} />
<div class="flex justify-center">
	<div class="item-center mx-10 w-4xl flex-col">
		<Story {storyTitle} {storyParagraphs} />
		<Details {eventDate} {eventLocation}>
			<div
				class="strava-embed-placeholder"
				data-embed-type="route"
				data-embed-id="3365426768628971324"
				data-style="standard"
				data-map-hash="10.19/47.662/-122.3215"
				data-from-embed="true"
			></div>
		</Details>
		<FAQ {faqs} />
		<Registration iframeId={jotformIframeId}>
			<iframe
				id={jotformIframeId}
				title="2025 Taco Ocho Registration"
				allowtransparency
				allow="geolocation; microphone; camera; fullscreen; payment"
				src="https://form.jotform.com/251845910128154"
				frameborder="0"
				style="border:none;"
				scrolling="no"
				width="100%"
				height="200px"
				class="rounded-lg"
			>
			</iframe>
		</Registration>
	</div>
</div>
