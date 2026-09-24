import { MinusIcon, PlusIcon } from 'lucide-react';

type FaqLink = { href: string; label: string };
type FaqAnswerSegment = string | FaqLink;
interface FaqItem {
	value: string;
	question: string;
	segments: FaqAnswerSegment[];
}

const emailLink: FaqLink = {
	href: 'mailto:slice.enterprise.seattle@gmail.com',
	label: 'slice.enterprise.seattle@gmail.com'
};

const faqItems: FaqItem[] = [
	{
		value: 'invite-friends',
		question: 'Can I invite my friends?',
		segments: [
			'Absolutely, the more the merrier. Just make sure they register here so we can get an accurate head count.'
		]
	},
	{
		value: 'food-drinks',
		question: 'What food and drinks will be served?',
		segments: [
			'We will have four holiday cheer stations throughout the race stocked with christmas cookies, apple cider, latkas, egg nog, and other holiday treats.'
		]
	},
	{
		value: 'eating-requirements',
		question: 'Are there food eating requirements?',
		segments: [
			`To be eligible for the prizes, you'll need to eat a specific tasty treat at each holiday cheer station and make sure that the volunteer crosses that item off of your bib.`,
			`If you don't want to eat the treats, just trust your heart and body and do whatever brings the most holiday joy to you`
		]
	},
	{
		value: 'prizes',
		question: 'What prizes will be given out?',
		segments: [
			`We'll be giving out prizes to the first male and female finishers, along with prizes for best costumes.`
		]
	},
	{
		value: 'costume',
		question: 'Do I have to wear a costume?',
		segments: [
			`We highly encourage everybody to embrace the festivities and wear a costume or a holiday sweater, but it's not required`
		]
	},
	{
		value: 'course-marked',
		question: 'Is the course marked?',
		segments: [
			'We will send out the Strava course route in advance of the race and will have volunteers at key turns.',
			'We will also have four pace groups, each with pacers who know the route and can lead the way. The pace groups will be from fastest to funnest; 1) Reindeer 2) Dreidel 3) Turkey and 4) Snowman'
		]
	},
	{
		value: 'how-many',
		question: 'How many people will be doing this?',
		segments: [
			`To make sure we can ensure a festive and fun experience for everybody, we're going to cap registration at 150 people.`
		]
	},
	{
		value: 'sign-up',
		question: 'Do I need to sign-up?',
		segments: [
			'Yes, we need to have your registration ahead of time to print your race bib, and figure out how many holiday treats we need to purchase. The bib is required to get any of the treats throughout the race'
		]
	},
	{
		value: 'cant-make-it',
		question: 'What if I cannot make it?',
		segments: [
			'No problem, we just ask that you email us at ',
			emailLink,
			' as soon as possible, so we have an accurate count of participants.'
		]
	},
	{
		value: 'updates',
		question: 'How can I be informed of any changes or updates?',
		segments: [
			`We'll send any major updates to your email when you sign up, along with race-day details a few days before the event.`,
			'For more fun and continuous updates, follow us on Instagram: ',
			{
				href: 'https://www.instagram.com/slice_enterprises/',
				label: 'https://www.instagram.com/slice_enterprises/'
			}
		]
	},
	{
		value: 'volunteer',
		question: 'What if I want to volunteer?',
		segments: [
			`We'd be happy to have you! You can reach out to us at `,
			emailLink,
			` and we'll find a way for you to get involved.`
		]
	}
];

export default function Faq2026() {
	return (
		<div className="sm:text-md text-xl">
			{faqItems.map((item, i) => (
				<details key={item.value} className="group">
					{i > 0 && <hr className="border-black" />}
					<summary className="flex cursor-pointer list-none items-center justify-between py-3 font-bold">
						{item.question}
						<span className="flex-none">
							<MinusIcon className="hidden size-4 group-open:block" />
							<PlusIcon className="block size-4 group-open:hidden" />
						</span>
					</summary>
					<div className="pr-2 pb-3">
						{item.segments.map((seg, j) => {
							const next = item.segments[j + 1];
							return typeof seg === 'string' ? (
								next && typeof next === 'string' ? (
									<p key={j} className="mb-3">
										{seg}
									</p>
								) : (
									<span key={j}>{seg}</span>
								)
							) : (
								<a key={j} className="text-red-sauce" href={seg.href}>
									{seg.label}
								</a>
							);
						})}
					</div>
				</details>
			))}
		</div>
	);
}
