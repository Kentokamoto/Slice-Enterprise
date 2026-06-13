interface Props {
	title: string;
	content: string;
}

export default function Accordion({ title, content }: Props) {
	return (
		<details className="border-yellow-cheese group mt-2 flex w-full flex-col rounded-lg border px-5 py-3">
			<summary className="text-red-sauce flex w-full cursor-pointer list-none items-center justify-between text-left font-bold">
				{title}
				<svg
					className="h-6 w-6 flex-none transform transition-transform duration-200 group-open:rotate-180"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</summary>
			{/* content is developer-authored HTML (email/GPX links), not user input */}
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</details>
	);
}
