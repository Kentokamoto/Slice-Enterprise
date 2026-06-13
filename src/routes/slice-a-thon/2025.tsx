import { type MetaFunction } from 'react-router';
import Title from '~/lib/components/legacy/Title';
import Counter from '~/lib/components/legacy/Counter';
import Story from '~/lib/components/legacy/Story';
import Details from '~/lib/components/legacy/Details';
import FAQ from '~/lib/components/legacy/FAQ';
import Registration from '~/lib/components/legacy/Registration';
import StravaEmbed from '~/lib/components/StravaEmbed';

export const meta: MetaFunction = () => [
	{ title: 'Seattle Slice-a-Thon 2025' },
	{ name: 'description', content: '4 pizza locations in Seattle. All in a half marathon' }
];

const eventDate = new Date('June 14, 2025 4:00 PM PDT');
const eventLocation = 'Gasworks Park';

const storyTitle = 'Slice-A-Thon is Born!';
const storyParagraphs = [
	`While the exact moment and who said what is still unclear, one thing is for certain
	– slice-a-thon was born on a cool fall evening in Seattle. A group of friends were gathered
	 at a bar after completing a weekly run around the Fremont neighborhood. As the drinks and
	 pretzels were flowing, the conversation bounced back and forth between two of the group's
	 favorite topics – pizza and running. There was discussion about which style reigns
	 supreme, upcoming races and the genius that is pizza by the slice.`,
	`As the night carried on, the two conversations slowly moved closer and closer together
	until someone finally said "well, couldn't we do both?" And just like that, the clouds
	parted, a rainbow emerged across the sky and a cat and a dog high-fived, all as if to
	emphatically say "yes, we can do both!"`,
	`From there, the friends began drawing up the plans for the first annual slice-a-thon. The
	vision was to create a uniquely fun race, where participants would run a half marathon
	distance while also stopping at some local pizza by the slice places along the way.
	Essentially run, eat, repeat until the finish line.`,
	`If you've been eating pizza and going for occasional runs, this is the event you've been
	training your whole life for. And if you've never done one or both of those things, you're
	especially in for a treat. The road to slice-a-thon glory is paved in sauce and cheese.`
];

const mailtoLink = `<a href="mailto:seattlesliceathon@gmail.com" class="text-red-sauce hover:text-red-700 underline">seattlesliceathon@gmail.com</a>`;
const gpxLink = `<a href="/Seattle-Slice-a-Thon-2025.gpx" class="text-red-sauce hover:text-red-700 underline">Slice-A-Thon route</a>`;

const faqs = [
	{
		title: 'Should I treat this as a race?',
		description: `As long as you run the distance and eat the pizza, there is no wrong way to do the Slice-A-Thon. If you're feeling motivated by a challenge, aim for your half marathon PR and you may win a pizza themed prize. Otherwise just relax and experience the dual joy of a couple of slices while running with some friends`
	},
	{
		title: 'Is there a minimum time?',
		description: `We'll be around for 3 hours after the start of the race`
	},
	{
		title: 'What do I need to pay for?',
		description: `You'll need to pay for the slice of pizza at each checkpoint. Each slice averages out to about $4.50.`
	},
	{
		title: 'How do I prove I bought pizza?',
		description: `After you pay for your pizza at each checkpoint, take a selfie of you eating your slice with the store sign in the background`
	},
	{
		title: 'Will there be signs on the course?',
		description: `No. We recommend downloading the route onto your phone or watch to avoid getting lost. We will also have several runners at different speeds familiar with the route who can help guide the way. You can download the route here: ${gpxLink}`
	},
	{
		title: 'Will there be any aid stations?',
		description: `No, we encourage people to bring their own water and will mark locations along the route where people can use restrooms or find refreshments`
	},
	{
		title: 'Is this race supporting any charities?',
		description: `After the race, we will give participants the chance to vote for "Slice of the Night" by donating to a charity associated with your favorite pizza stop. Giving is optional but encouraged`
	},
	{
		title: "I don't think I can make the race anymore, what should I do?",
		description: `No problem, please just send us an email at ${mailtoLink} to let us know you won't be joining so we can adjust our pizza orders accordingly!`
	},
	{ title: 'I have different question!', description: `Email it to us at ${mailtoLink}` },
	{
		title: 'Will there be pie?',
		description: `Yes. In addition to the pizza pies, your last task in finishing the race is to eat a slice of pie.`
	}
];

const jotformIframeId = 'JotFormIFrame-250816626970059';

export default function SliceAThon2025() {
	return (
		<div className="p-5">
			<div className="bg-crust place-content-center overflow-hidden rounded-4xl object-cover shadow-2xl">
				<Title iteration="First Annual" title="Seattle Slice-A-Thon" />
				<div className="bg-red-sauce">
					<Counter judgementDate={eventDate.getTime()} />
				</div>
				<div className="flex justify-center">
					<div className="mx-10 w-4xl flex-col">
						<Story storyParagraphs={storyParagraphs} storyTitle={storyTitle} />
						<Details eventDate={eventDate} eventLocation={eventLocation}>
							<StravaEmbed
								embedId="3356103777858949274"
								token="SaXWFP0cElSh4kXVBgUrw4ryeO56NjYqeLbapX_Im20"
								mapHash="11.08/47.6303/-122.3237"
							/>
						</Details>
						<FAQ faqs={faqs} />
						<Registration iframeId={jotformIframeId}>
							<iframe
								id={jotformIframeId}
								title="2025 Slice-A-Thon Registration"
								src="https://form.jotform.com/250816626970059"
								frameBorder="0"
								style={{ border: 'none' }}
								scrolling="no"
								width="100%"
								height="200px"
								className="rounded-lg"
							/>
						</Registration>
					</div>
				</div>
			</div>
		</div>
	);
}
