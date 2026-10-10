import StravaEmbed from '~/lib/components/StravaEmbed';

export default function Route2026() {
	return (
		<div className="grid grid-cols-1 md:gap-8">
			<div className="mx-auto w-auto justify-center text-center font-bold sm:w-full sm:p-4">
				<h1 className="text-lg">Eggnog Leg Jog Route</h1>
				<StravaEmbed
					embedId="3543490608935628284"
					token="t9MgaxOGYlldFzYfUAEmaH2GYgIsZcLfyygP4JeMbVg"
					mapHash="12.43/47.67508/-122.33792"
				/>
			</div>
		</div>
	);
}
