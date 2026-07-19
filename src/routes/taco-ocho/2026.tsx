import { useState } from 'react';
import { type MetaFunction } from 'react-router';
import { CalendarFoldIcon, ClockIcon, FlagIcon, Ruler, UtensilsIcon } from 'lucide-react';
import Counter from '~/lib/components/legacy/Counter';
import Registration from '~/lib/components/legacy/Registration';
import Faq2026 from './2026/Faq2026';
import Route2026 from './2026/Route2026';
import Stops2026 from './2026/Stops2026';

export const meta: MetaFunction = () => [
	{ title: 'Seattle Taco Ocho 2026' },
	{
		name: 'description',
		content: '8 mile fun run around Seattle stopping by 3 taco stands'
	}
];

const eventDate = new Date('August 1, 2026 7:00 PM PDT');

const TABS = ['overview', 'route', 'stops', 'faq'] as const;
type Tab = (typeof TABS)[number];
const TAB_LABELS: Record<Tab, string> = {
	overview: 'Overview',
	route: 'Route',
	stops: 'Taco Stops',
	faq: 'FAQ'
};

export default function TacoOcho2026() {
	const [tab, setTab] = useState<Tab>('overview');

	return (
		<>
			<div className="bg-red-sauce/90 shadow-lg backdrop-blur-sm">
				<Counter judgementDate={eventDate.getTime()} />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 md:gap-1 lg:grid-cols-4">
				{[
					{ icon: <CalendarFoldIcon />, label: 'Date', value: 'August 1, 2026' },
					{ icon: <ClockIcon />, label: 'Time', value: '7:00 PM PDT' },
					{ icon: <FlagIcon />, label: 'Location', value: 'Northgate' },
					{
						icon: <Ruler />,
						label: 'Distance',
						value: '8 Mile'
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
					<UtensilsIcon />
					<span className="font-bold">Number of Taco Stops</span>
				</div>
				<div className="mt-2">3</div>
			</div>

			<div className="mx-5 mt-6 max-w-full">
				<a
					href="https://slice-enterprises.printful.me/"
					target="_blank"
					rel="noopener"
					className="block"
				>
					<div className="flex cursor-pointer flex-col items-center justify-between gap-4 rounded-2xl bg-linear-to-r from-blue-500 to-blue-900 px-5 py-7 text-white transition-all hover:from-blue-600 hover:to-blue-950 sm:flex-row">
						<div className="w-auto">
							<p className="text-2xl font-extrabold">Get your Slice-a-thon Gear!</p>
							<p className="text-md font-semibold">T-shirts, hats, and more now available now</p>
						</div>
						<button className="w-40 shrink-0 rounded-lg bg-white p-3 font-semibold text-blue-900">
							Shop merch →
						</button>
					</div>
				</a>
			</div>

			<div className="mx-5 mt-6 max-w-full">
				<a
					href="https://www.mightycause.com/story/Tacoocho"
					target="_blank"
					rel="noopener"
					className="block"
				>
					<div className="flex cursor-pointer flex-col items-center justify-between gap-4 rounded-2xl bg-green-900  px-5 py-7 text-white hover:bg-green-800 sm:flex-row">
						<div className="w-auto">
						<p className="text-2xl font-extrabold">Donate to Food Lifeline!</p>
						<p className="text-md font-semibold">
								This year Taco Ocho is partnering with Food Lifeline, a non-profit organization
								working to fight hunger in Washington. Food Lifeline tackles hunger by distributing
								nutritious food to local partners such as food banks and shelters. Let’s celebrate
								our love for running and tacos, and support our community in the process.
							</p>
							<p className='text-md font-semibold'>
								Please consider making a one time donation of $20, or an amount you’re comfortable
								with as part of your Taco Ocho experience.
							</p>
						</div>
						<button className="w-40 shrink-0 rounded-lg bg-white p-3 font-semibold text-green-900">
							Donate Here →
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
					<div className="">
						<h1 className="font-bold">Taco Ocho is back for más!</h1>
						<p className="mt-4">
							At the start of our 8th month at 8pm MDT (7pm PDT), we will be running the Taco Ocho.
							This is an 8 mile race from Northgate to Capitol Hill, with stops at three delicious
							taco stands. You, your friends, neighbors, coworkers, and romantic partners are all
							invited!
						</p>
						<p className="mt-4">We have two variations, that each cover 8 miles and 8 tacos :</p>
						<p>
							<ul className="mt-3">
								<li className="ml-5 list-inside list-disc">
									The Classic - For those seeking the pinnacle of individual achievement. You might
									be here to make friends, but at some point, you’ll have to leave those friends in
									the taco seasoning dust as you race to the finish line.
									<span className="italic">
										{' '}
										Eat 8 tacos by yourself (minimum of 1 taco per stand)
									</span>
								</li>
								<li className="mt-3 ml-5 list-inside list-disc">
									The Partner Race - For those seeking to share in the magic of Taco Ocho with
									someone else, the partner race is for you. Whether it’s long-time love, an
									unforgettable first date, a beautiful friendship, or just a shared appreciation of
									tortilla meeting cheese, the partner event delivers.{' '}
									<span className="italic">
										Eat 8 tacos between the two fo you (minimum 1 per stand and minimum of 1 per
										person) team finishing time is based on last person to finish
									</span>{' '}
								</li>
							</ul>
						</p>
						<p className="mt-3 font-bold">
							Important: Please note that the taco stands do not take cards, so please make sure to
							bring enough cash to pay for 8 tacos.
						</p>
					</div>
				)}
				{tab === 'route' && <Route2026 />}
				{tab === 'stops' && <Stops2026 />}
				{tab === 'faq' && <Faq2026 />}
			</div>

			<div className="glass-strong m-3 flex min-h-[30vh] flex-col items-center rounded-2xl border border-black/10 p-3 shadow-md">
				<div className="w-full lg:w-3xl">
					<Registration iframeId="JotFormIFrame-261811110265142">
						<iframe
							id="JotFormIFrame-261811110265142"
							title="2026 Taco Ocho Registration"
							src="https://form.jotform.com/261811110265142"
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
