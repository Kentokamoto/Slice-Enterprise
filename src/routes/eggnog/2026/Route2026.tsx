import StravaEmbed from '~/lib/components/StravaEmbed';

export default function Route2026() {
	return (
		<div className="grid grid-cols-1 md:gap-8">
			<div className="mx-auto w-auto justify-center text-center font-bold sm:w-full sm:p-4">
				<h1 className="text-lg">Eggnog Leg Jog Route</h1>
				<StravaEmbed
					embedId="3406145129692623686"
					token="8-hKOcRQCzeOHk4LSA8HXzcMuqVV3Ian_0tnjzI6KK4"
					mapHash="12.41/47.675/-122.34166"
					fullWidth
				/>
			</div>
		</div>
	);
}
