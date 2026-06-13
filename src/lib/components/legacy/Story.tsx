interface Props {
	storyTitle: string;
	storyParagraphs: string[];
}

export default function Story({ storyTitle, storyParagraphs }: Props) {
	return (
		<article className="text-black">
			<h1 className="text-red-sauce mt-5 text-center text-2xl font-bold sm:text-left">
				{storyTitle}
			</h1>
			{storyParagraphs.map((paragraph, i) => (
				<p key={i} className="mb-3">
					{paragraph}
				</p>
			))}
		</article>
	);
}
