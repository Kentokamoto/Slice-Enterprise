import { useState, useEffect } from 'react';

interface Props {
	judgementDate: number;
}

const UNITS = ['Days', 'Hours', 'Minutes', 'Seconds'] as const;

function computeTime(judgementDate: number) {
	const diff = Math.max(judgementDate - Date.now(), 0);
	return {
		Days: Math.floor(diff / 86400000),
		Hours: Math.floor((diff % 86400000) / 3600000),
		Minutes: Math.floor((diff % 3600000) / 60000),
		Seconds: Math.floor((diff % 60000) / 1000)
	};
}

export default function Counter({ judgementDate }: Props) {
	const [time, setTime] = useState(() => computeTime(judgementDate));

	useEffect(() => {
		const id = setInterval(() => setTime(computeTime(judgementDate)), 1000);
		return () => clearInterval(id);
	}, [judgementDate]);

	return (
		<div className="mx-auto flex max-w-2xl flex-row justify-center gap-2 py-3 sm:gap-6 sm:py-4">
			{UNITS.map((unit) => (
				<div key={unit} className="flex min-w-16 flex-col items-center px-2 sm:min-w-20 sm:px-4">
					<span className="font-display text-3xl leading-none font-bold text-white tabular-nums sm:text-5xl">
						{String(time[unit]).padStart(2, '0')}
					</span>
					<span className="mt-1 text-xs font-medium tracking-wider text-white/70 uppercase sm:text-sm">
						{unit}
					</span>
				</div>
			))}
		</div>
	);
}
