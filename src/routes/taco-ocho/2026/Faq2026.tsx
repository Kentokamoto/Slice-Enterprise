import { MinusIcon, PlusIcon } from 'lucide-react';

type FaqLink = { href: string; label: string };
type FaqAnswerSegment = string | FaqLink;
interface FaqItem {
	value: string;
	question: string;
	segments: FaqAnswerSegment[];
}

const faqItems: FaqItem[] = [
	{
		value: 'race-register',
		question: 'Do I need to register?',
		segments: [
			`While we won't stop you from joining in on the fun without signing up, we encourage you to register. `,
			`While we don't charge an entry fee, the race will include printing bibs, making finishers certificates, and communicating with taco stands to ensure a smooth night. Registering and showing up (or letting us know if you can't make it) helps us make sure everybody gets to join in on the fun, and minimal supplies are wasted.`,
			'Also, if you already attended the Slice-A-Thon, registering and attending this event will keep you eligible for our trifecta award given out after the Egg Nog Leg Jog'
		]
	},
	{
		value: 'partner-register',
		question: 'Do both me and my partner need to register?',
		segments: ['Yes, that would be preferred!']
	},
	{
		value: 'no-partner',
		question: `I want to do the partner event, but I don't know my partner yet`,
		segments: [
			'No worries, shoot us an email at ',
			{
				href: 'mailto:slice.enterprise.seattle@gmail.com',
				label: 'slice.enterprise.seattle@gmail.com'
			},
			` as soon as you decide and we can make sure the bibs are printed.Also, if your partner registers after you, they can identify you as partner and we'll figure it out on our own end`
		]
	},
	{
		value: 'cant-make-race',
		question: "I can't make the race, what should I do?",
		segments: [
			`No worries, while we'll miss you, we all know the excitement of signing up for a race doesn't always translate to being able to actually run it.`,
			'Just send us a quick email at ',
			{
				href: 'mailto:slice.enterprise.seattle@gmail.com',
				label: 'slice.enterprise.seattle@gmail.com'
			},
			"and we'll remove you"
		]
	},
	{
		value: 'vegetarian',
		question: 'Are there vegetarian options?',
		segments: [
			'Yes, at each taco stand you can always order without meat (even if its off menu) and we will count it!'
		]
	},
	{
		value: 'taco-enforcement',
		question: 'How is the taco eating enforced?',
		segments: [
			`It's the honor system, but we know as runners you wouldn't be satisfied with cutting corners anyway!`
		]
	},
	{
		value: 'card',
		question: 'Do taco stands take card?',
		segments: [
			'No, while at least one stand takes Venmo, be prepared with enough cash to buy the tacos'
		]
	},
	{
		value: 'cost',
		question: 'How much does this cost?',
		segments: [
			'While there is no entry fee, expect about $4 dollar per taco, so around 30-40 dollars total. We recommend budgeting for the horchatas as well!'
		]
	},
	{
		value: 'prizes',
		question: 'What are the prizes?',
		segments: [
			'Expect medals / trophies for top 3 finishers for male and female solo runners, and Tequila for the fastest overall in the solo division and the fastest partner',
			'Also prizes for spirit (think costumes, musical instruments, other ways of bringing up the energy)',
			'In addition, all finishers will come home with something signifying their completion of a challenge '
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
