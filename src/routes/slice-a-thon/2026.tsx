import { useState } from 'react';
import { type MetaFunction, Link } from 'react-router';
import { CalendarFoldIcon, ClockIcon, FlagIcon, PizzaIcon, Ruler } from 'lucide-react';
import Counter from '~/lib/components/legacy/Counter';
import Registration from '~/lib/components/legacy/Registration';
import Faq2026 from './2026/Faq2026';
import Route2026 from './2026/Route2026';
import Stops2026 from './2026/Stops2026';

export const meta: MetaFunction = () => [
	{ title: 'Seattle Slice-a-Thon 2026' },
	{
		name: 'description',
		content: '10k and half marathon fun run around Seattle stopping by 3 pizza spots'
	}
];

const eventDate = new Date('May 16, 2026 4:00 PM PDT');

const TABS = ['overview', 'route', 'stops', 'faq'] as const;
type Tab = (typeof TABS)[number];
const TAB_LABELS: Record<Tab, string> = {
	overview: 'Overview',
	route: 'Route',
	stops: 'Pizza Stops',
	faq: 'FAQ'
};

export default function SliceAThon2026() {
	const [tab, setTab] = useState<Tab>('overview');

	return (
		<>
			<div className="bg-red-sauce/90 shadow-lg backdrop-blur-sm">
				<Counter judgementDate={eventDate.getTime()} />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 lg:grid-cols-4">
				{[
					{ icon: <CalendarFoldIcon />, label: 'Date', value: 'May 16, 2026' },
					{ icon: <ClockIcon />, label: 'Time', value: '4:00 PM PDT' },
					{ icon: <FlagIcon />, label: 'Location', value: 'Gasworks Park' },
					{
						icon: <Ruler />,
						label: 'Distance',
						value: 'Half Marathon (13.1 miles) and 10km'
					}
				].map(({ icon, label, value }) => (
					<div
						key={label}
						className="glass-strong mx-5 my-1 rounded-2xl border border-black/10 p-3 shadow-md md:m-5"
					>
						<div className="flex items-center gap-2">
							{icon}
							<span className="font-bold">{label}</span>
						</div>
						<div className="mt-2">{value}</div>
					</div>
				))}
			</div>

			<div className="glass-strong mx-5 my-1 max-w-full rounded-2xl border border-black/10 p-3 shadow-md md:m-5">
				<div className="flex items-center gap-2 whitespace-nowrap">
					<PizzaIcon />
					<span className="font-bold">Number of Pizza Stops</span>
				</div>
				<div className="mt-2">3</div>
			</div>

			<div className="mx-5 mt-6 max-w-full">
				<Link to="/donate" target="_blank" rel="noopener" className="block">
					<div className="to-red-sauce hover:to-red-sauce flex cursor-pointer flex-col items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-orange-600 px-5 py-7 text-white transition-all hover:from-orange-600 sm:flex-row">
						<div>
							<p className="text-2xl font-extrabold">Donate to Free2Fly!</p>
							<p className="text-md font-semibold">
								Help visually-impaired athletes in our community
							</p>
						</div>
						<button className="text-red-sauce rounded-lg bg-white p-3 font-semibold">
							Learn More &amp; Donate →
						</button>
					</div>
				</Link>
			</div>

			<div className="mx-5 mt-6 max-w-full">
				<a
					href="https://slice-enterprises.printful.me/"
					target="_blank"
					rel="noopener"
					className="block"
				>
					<div className="flex cursor-pointer flex-col items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-blue-500 to-blue-900 px-5 py-7 text-white transition-all hover:from-blue-600 hover:to-blue-950 sm:flex-row">
						<div>
							<p className="text-2xl font-extrabold">Get your Slice-a-thon Gear!</p>
							<p className="text-md font-semibold">T-shirts, hats, and more now available now</p>
						</div>
						<button className="rounded-lg bg-white p-3 font-semibold text-blue-900">
							Shop merch →
						</button>
					</div>
				</a>
			</div>

			<div className="glass-strong m-3 min-h-[30vh] rounded-2xl border border-black/10 p-3 shadow-md">
				{/* Mobile: select dropdown */}
				<div className="mb-4 sm:hidden">
					<select
						className="bg-surface/80 text-md w-full rounded-lg border p-4 font-semibold shadow-md"
						value={tab}
						onChange={(e) => setTab(e.target.value as Tab)}
					>
						{TABS.map((t) => (
							<option key={t} value={t}>
								{TAB_LABELS[t]}
							</option>
						))}
					</select>
				</div>

				{/* Desktop: tab buttons */}
				<div className="mb-4 hidden gap-6 border-b font-semibold sm:flex">
					{TABS.map((t) => (
						<button
							key={t}
							onClick={() => setTab(t)}
							className={`pb-2 transition-colors ${
								tab === t
									? 'border-red-sauce text-red-sauce border-b-2'
									: 'text-gray-600 hover:text-gray-900'
							}`}
						>
							{TAB_LABELS[t]}
						</button>
					))}
				</div>

				{tab === 'overview' && (
					<div>
						<h1 className="font-bold">The race that started it all, back for seconds</h1>
						<p className="mt-4">
							Slice-a-thon was born out of our love for pizza and running. After a very successful
							innaugural event in 2025, we're back in 2026 with a mix of old and new ideas to make
							the 2nd annual even better. This year we're offering not just a half marathon
							distance, but a 10k option as well making the race open to more people!
						</p>
						<p className="mt-1">
							Runners will stop by 3 pizza spots (2 for the 10k option) for their choice of a slice
							of 'za. Once you return to the finish line, there will be a final slice of pie made by
							our volunteers to round out the race
						</p>
					</div>
				)}
				{tab === 'route' && <Route2026 />}
				{tab === 'stops' && <Stops2026 />}
				{tab === 'faq' && <Faq2026 />}
			</div>

			<div className="glass-strong m-3 flex min-h-[30vh] flex-col items-center rounded-2xl border border-black/10 p-3 shadow-md">
				<div className="w-full lg:w-3xl">
					<Registration iframeId="JotFormIFrame-260540870713151">
						<iframe
							id="JotFormIFrame-260540870713151"
							title="2026 Slice-A-Thon Registration"
							src="https://form.jotform.com/260540870713151"
							frameBorder="0"
							style={{ minWidth: '100%', maxWidth: '100%', border: 'none' }}
							scrolling="no"
							width="100%"
						/>
					</Registration>
				</div>
			</div>
		</>
	);
}
