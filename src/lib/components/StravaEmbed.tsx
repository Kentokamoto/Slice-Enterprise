import { useEffect } from 'react';

interface Props {
	embedId: string;
	token: string;
	mapHash?: string;
	fullWidth?: boolean;
}

export default function StravaEmbed({ embedId, token, mapHash, fullWidth }: Props) {
	useEffect(() => {
		const existing = document.querySelector('script[src="https://strava-embeds.com/embed.js"]');
		if (existing) existing.remove();

		const script = document.createElement('script');
		script.src = 'https://strava-embeds.com/embed.js';
		document.head.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

	return (
		<div
			className="strava-embed-placeholder"
			data-embed-type="route"
			data-embed-id={embedId}
			data-style="standard"
			data-from-embed="true"
			data-token={token}
			{...(mapHash ? { 'data-map-hash': mapHash } : {})}
			{...(fullWidth ? { 'data-full-width': 'true' } : {})}
		/>
	);
}
