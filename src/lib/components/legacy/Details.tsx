import { useEffect } from 'react';

interface Props {
	eventDate: Date;
	eventLocation: string;
	children: React.ReactNode;
}

export default function Details({ eventDate, eventLocation, children }: Props) {
	useEffect(() => {
		if (document.querySelector('script[src="https://strava-embeds.com/embed.js"]')) return;
		const script = document.createElement('script');
		script.src = 'https://strava-embeds.com/embed.js';
		document.body.appendChild(script);
	}, []);

	return (
		<div className="mt-4 flex flex-col place-content-center sm:flex-row">
			<section className="flex flex-3 basis-full flex-col place-content-center">
				<h1 className="text-red-sauce text-center text-2xl font-bold">Race Details</h1>
				<div className="basis-full text-xl text-black">
					<h2 className="text-left text-xl font-extrabold">Date</h2>
					<p className="text-left text-black">
						{eventDate.toLocaleDateString('en-US', {
							weekday: 'long',
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</p>
					<h2 className="text-left text-xl font-extrabold">Start Time</h2>
					<p className="text-left text-black">
						{eventDate.toLocaleString('en-US', {
							hour: 'numeric',
							minute: '2-digit',
							hour12: true,
							timeZoneName: 'short'
						})}
					</p>
					<h2 className="text-left text-xl font-extrabold">Location</h2>
					<p className="text-left text-black">{eventLocation}</p>
				</div>
			</section>
			<section className="flex flex-3 basis-full flex-col place-content-center p-4 sm:p-0">
				<h1 className="text-red-sauce text-center text-2xl font-bold">Course Route</h1>
				{children}
			</section>
		</div>
	);
}
