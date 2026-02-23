<script>
	import Story from '$lib/components/legacy/Story.svelte';
	import Details from '$lib/components/legacy/Details.svelte';
	import FAQ from '$lib/components/legacy/FAQ.svelte';
	import Registration from '$lib/components/legacy/Registration.svelte';
	import Title from '$lib/components/legacy/Title.svelte';
	import Counter from '$lib/components/legacy/Counter.svelte';

	// Placeholders:
	const eventDate = new Date('November 15, 2025 10:00 AM PST');
	const eventLocation = 'Lower Woodland Park Shelter 7';
	const storyTitle = 'Eggnog Leg Jog';
	const storyParagraphs = [
		`The Egg Nog Leg Jog is the world’s first race that not only tests your physical fitness, 
     but also your capacity to experience holiday joy! Are you training for a longer winter 
     race, like the Seattle Marathon or CIM? Are you preparing for a cross-country flight to 
     celebrate traditions with family on the east coast? Are you gearing up to enjoy numerous 
     Thanksgiving/Christmas/Hanukkah parties, right here in Seattle? Nothing is going to 
    prepare you for all of the holiday magic like the Egg Nog Leg Jog. `,
		`This 10K on November 15th will be run by 100+ family, friends, and soon to be friends. 
     Bring your best holiday themed costume (ie Santa / Scrooge / Menorah) or favorite Christmas 
     sweater and join us at Woodland Park for a festive Leg Jog. We’ll run through Greenlake and
     Woodland Park, stopping at four holiday cheer stations along the way to consume cookies, 
     egg nog and other classic holiday treats, which will warm your body and grow your heart at 
     least three sizes.`
	];

	import { base } from '$app/paths';
	const mailtoLink = `<a href="mailto:seattlesliceathon@gmail.com"
	                       class="text-holiday-red hover:text-red-700 underline">
						   seattlesliceathon@gmail.com
						</a>`;
	const instagramLink = `<a href=" https://www.instagram.com/slice_enterprises/"
	                       class="text-holiday-red hover:text-red-700 underline">
                         https://www.instagram.com/slice_enterprises/</a>`;
	const faqs = [
		{
			title: 'Can I invite my friends?',
			description: `Absolutely, the more the merrier. Just make sure they
                    register here so we can get an accurate head count.`
		},

		{
			title: 'What food and drinks will be served? ',
			description: `We will have four holiday cheer stations throughout 
                    the race stocked with christmas cookies, apple cider,
                    latkas, egg nog, and other holiday treats. 
`
		},
		{
			title: 'Are there food eating requirements?',
			description: `To be eligible for the prizes, you’ll need to  
                    eat a specific tasty treat  at each holiday cheer 
                    station and make sure that the volunteer crosses 
                    that item off of your bib.\n
                    If you don’t want to eat the treats,  just trust 
                    your heart and body and do whatever brings the most holiday joy to you`
		},
		{
			title: 'What prizes will be given out?',
			description: `We’ll be giving out prizes to the first male and female finishers, 
                    along with prizes for best costumes.`
		},
		{
			title: 'Do I have to wear a costume?',
			description: `We highly encourage everybody to embrace the festivities and wear a
                    costume or a holiday sweater, but it’s not required`
		},
		{
			title: 'Is the course marked? ',
			description: `We will send out the Strava course route in advance of the race and
                    will have volunteers at key turns.\n
                    You can download the GPX file here.\n
                    We will also have four pace groups, each with pacers who know the 
                    route and can lead the way. The pace groups will be from fastest to 
                    funnest; 1) Reindeer 2) Dreidel 3) Turkey and 4) Snowman`
		},
		{
			title: 'How many people will be doing this? ',
			description: `To make sure we can ensure a festive and fun experience for everybody, 
                    we’re going to cap registration at 150 people.`
		},
		{
			title: 'Do I need to sign-up?',
			description: `Yes, we need to have your registration ahead of time to print your race
                    bib, and figure out how many holiday treats we need to purchase. The 
                    bib is required to get any of the treats throughout the race`
		},
		{
			title: 'What if I cannot make it? ',
			description: `No problem, we just ask that you email us at ${mailtoLink} as soon as
                    possible, so we have an accurate count of participants.
`
		},
		{
			title: 'How can I be informed of any changes or updates?',
			description: `We’ll send any major updates to your email when you sign up, along with 
                    race-day details a few days before the event.\n
                    For more fun and continuous updates, follow us on Instagram:${instagramLink}`
		},
		{
			title: 'What if I want to volunteer?',
			description: `We’d be happy to have you! You can reach out to us at ${mailtoLink} and 
                    we’ll find a way for you to get involved.`
		}
	];
	// JotForm
	let jotformIframeId = 'JotFormIFrame-250816626970059';
</script>

<svelte:head>
	<title>2025 Seattle Eggnog Leg Jog</title>
	<meta name="description" content="Start the holiday season off on the right foot" />
</svelte:head>

<div class="bg-eggnog-cream w-full p-5">
	<div class="place-content-center overflow-hidden rounded-4xl object-cover shadow-2xl">
		<Title iteration="First Annual" title="Seattle Eggnog Leg Jog" />
		<div class="bg-holiday-green">
			<Counter judgementDate={eventDate.getTime()} />
		</div>
		<div></div>
		<div class="flex justify-center">
			<div class="item-center mx-10 w-4xl flex-col">
				<Story {storyParagraphs} {storyTitle} />
				<Details {eventDate} {eventLocation}>
					<div
						class="strava-embed-placeholder"
						data-embed-type="route"
						data-embed-id="3406145129692623686"
						data-style="standard"
						data-map-hash="12.41/47.675/-122.34166"
						data-from-embed="true"
					></div>
				</Details>
				<FAQ {faqs} />
				<Registration iframeId={jotformIframeId}>
					<iframe
						id="JotFormIFrame-250816626970059"
						title="2025 Eggnog Leg Jog Registration"
						allowtransparency
						allow=""
						src="https://form.jotform.com/252468546155161"
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
	</div>
</div>
