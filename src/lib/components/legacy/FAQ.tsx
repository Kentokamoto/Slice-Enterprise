import Accordion from './Accordion';

interface FaqItem {
	title: string;
	description: string;
}

interface Props {
	faqs: FaqItem[];
}

export default function FAQ({ faqs }: Props) {
	return (
		<div className="flex w-full flex-col place-content-center sm:flex-row">
			<div className="flex basis-full flex-col">
				<h1 className="text-red-sauce text-center text-xl font-bold sm:pl-2 sm:text-left">FAQ</h1>
				{faqs.map((faq) => (
					<Accordion key={faq.title} title={faq.title} content={faq.description} />
				))}
			</div>
		</div>
	);
}
