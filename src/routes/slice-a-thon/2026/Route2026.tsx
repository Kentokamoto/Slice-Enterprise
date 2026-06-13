import StravaEmbed from '~/lib/components/StravaEmbed';

export default function Route2026() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:gap-8">
			<div className="text-center font-bold sm:p-4">
				<h1 className="text-lg">Half Marathon Route</h1>
				<StravaEmbed
					embedId="3445596670059233086"
					token="-0CIEJA_3Ed4crCL0BNBEbRCZhhuo--LfrvIaJrtuVs"
					mapHash="11.08/47.6303/-122.3272"
					fullWidth
				/>
			</div>
			<div className="text-center font-bold sm:p-4">
				<h1 className="text-lg">10k Route</h1>
				<StravaEmbed
					embedId="3460125985862464372"
					token="BjaIGsVViLuDTjg-vKkp8bvXRoTCDGONG1lkvKGvGUA"
					mapHash="11.3/47.6276/-122.3427"
					fullWidth
				/>
			</div>
		</div>
	);
}
