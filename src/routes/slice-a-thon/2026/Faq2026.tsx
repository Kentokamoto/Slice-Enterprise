import { MinusIcon, PlusIcon } from 'lucide-react';

type FaqLink = { href: string; label: string };
type FaqAnswerSegment = string | FaqLink;
interface FaqItem {
	value: string;
	question: string;
	segments: FaqAnswerSegment[];
}

const faqItems: FaqItem[] = [
	{ value: 'real-race', question: 'Is this a real race?', segments: ['Yes'] },
	{ value: 'eat-pizza', question: 'Do I have to eat pizza?', segments: ['Yes'] },
	{
		value: 'payments',
		question: 'What do I need to pay for?',
		segments: [
			"You'll need to pay for the slice of pizza at each checkpoint. Each slice averages out to about $4.50."
		]
	},
	{
		value: 'aid-stations',
		question: 'Will there be aid stations?',
		segments: [
			'No, we encourage people to bring their own water and will mark locations along the route where people can use restrooms or find refreshments'
		]
	},
	{
		value: 'course-markings',
		question: 'Will there be course markings?',
		segments: [
			'No. We recommend downloading the route onto your phone or watch to avoid getting lost. We will also have several runners at different speeds familiar with the route who can help guide the way. You can download the route here:'
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
			" to let us know you won't be joining so we can adjust our pizza orders accordingly!"
		]
	}
];

export default function Faq2026() {
	return (
		<div className="sm:text-md text-xl">
			{faqItems.map((item, i) => (
				<details key={item.value} className="group">
					{i > 0 && <hr className="border-black" />}
					<summary className="flex cursor-pointer list-none items-center justify-between py-3 font-semibold">
						{item.question}
						<span className="flex-none">
							<MinusIcon className="hidden size-4 group-open:block" />
							<PlusIcon className="block size-4 group-open:hidden" />
						</span>
					</summary>
					<div className="pr-2 pb-3">
						{item.segments.map((seg, j) =>
							typeof seg === 'string' ? (
								<span key={j}>{seg}</span>
							) : (
								<a key={j} className="text-red-sauce" href={seg.href}>
									{seg.label}
								</a>
							)
						)}
					</div>
				</details>
			))}
		</div>
	);
}
