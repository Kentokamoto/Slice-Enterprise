import mascotThumb from '~/lib/assets/Slice-Enterprise-Mascot_thumb.webp?inline';

interface Props {
	iteration: string;
	title: string;
}

export default function Title({ iteration, title }: Props) {
	return (
		<header className="bg-yellow-cheese flex w-full flex-row overflow-hidden object-cover">
			<img
				className="m-4 w-8 flex-none object-scale-down"
				src={mascotThumb}
				alt="slice enterprise mascot"
			/>
			<div className="flex-1 place-content-center">
				<h2 className="text-red-sauce text-center text-xl font-extrabold sm:text-3xl">
					{iteration}
				</h2>
				<h1 className="text-red-sauce text-center text-2xl font-black sm:text-4xl">{title}</h1>
			</div>
			<img
				className="m-4 w-8 flex-none object-scale-down"
				src={mascotThumb}
				alt="slice enterprise mascot"
			/>
		</header>
	);
}
