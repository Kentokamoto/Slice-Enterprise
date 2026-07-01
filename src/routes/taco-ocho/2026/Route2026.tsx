import StravaEmbed from '~/lib/components/StravaEmbed';

export default function Route2026() {
	return (
		<div className="grid grid-cols-1 md:gap-8">
			<div className="mx-auto w-auto justify-center text-center font-bold sm:w-full sm:p-4">
				<h1 className="text-lg">Taco Ocho Route</h1>
				<StravaEmbed
					embedId="3365426768628971324"
					token="gUCPOAVQtM_VZKfv6AhrHJ7DvNPZLsYuK7duL7qv7G0"
					mapHash="10.19/47.662/-122.3215"
					fullWidth
				/>
			</div>
		</div>
	);
}
