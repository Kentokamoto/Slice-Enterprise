import { type MetaFunction, Link } from 'react-router';
import { InstagramIcon } from 'lucide-react';
import free2flyGroup from '~/lib/assets/free2fly_group_1.webp';
import free2flyGroup2 from '~/lib/assets/free2fly_group_2.webp';
import runnerAndGuide from '~/lib/assets/runner_and_guide.webp';

export const meta: MetaFunction = () => [
	{ title: 'Slice Enterprises | Donate' },
	{ name: 'description', content: 'Slice Enterprises Donation Partner' }
];

export default function Donate() {
	return (
		<>
			<section className="relative flex h-[60vh] items-center justify-center overflow-hidden md:h-[80vh]">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					alt="free2fly run club group"
					src={free2flyGroup}
				/>
				<div className="from-orange/70 via-orange/60 to-orange/80 absolute inset-0 bg-linear-to-b" />
				<div className="relative z-10 max-w-4xl px-4 text-center text-white">
					<h1 className="mb-4 text-4xl font-extrabold md:mb-6 md:text-6xl">Support Free2Fly!</h1>
					<p className="mb-6 text-lg font-bold text-gray-100 md:mb-8 md:text-2xl">
						Everyone deserves a chance to fly
					</p>
					<a href="https://venmo.com/u/free2flyrc">
						<button className="w-full rounded-xl border-white bg-orange-400 py-2 font-semibold text-white hover:shadow-lg sm:w-2xs">
							Donate Here
						</button>
					</a>
				</div>
			</section>

			<section className="glass-strong mx-auto my-3 flex max-w-4xl flex-col items-center space-y-6 rounded-2xl border border-black/10 px-4 py-5 shadow-md sm:px-6 md:py-10 lg:px-8">
				<h1 className="pb-3 text-left text-3xl font-bold">About Free2Fly</h1>
				<img
					className="h-80 w-full overflow-hidden rounded-lg object-cover"
					alt="free2fly group"
					src={free2flyGroup2}
				/>
				<p className="text-lg leading-relaxed">
					This year we're partnering with <strong>Free 2 Fly</strong>, a local organization that
					supports visually-impaired athletes in our community. Each week, rain or shine, this group
					meets at Green Lake to run/walk, connect and laugh. Visually-impaired athletes are paired
					with sighted guides to create this adaptive experience.
				</p>
				<p className="text-lg leading-relaxed">
					Since its inception last year, the group has grown and now in addition to weekly runs,
					athletes are participating in races around the city (and country)!
				</p>
				<img
					className="max-w-sm rounded-lg object-cover"
					alt="free2fly runner and guide"
					src={runnerAndGuide}
				/>
				<p className="text-lg leading-relaxed">
					Free 2 Fly and Slice Enterprises both promote supportive community engagement. As part of
					your{' '}
					<Link to="/slice-a-thon/2026" className="text-red-sauce">
						Slice-a-thon 2026
					</Link>{' '}
					experience, please consider donating to Free 2 Fly. Donations will help them continue to
					grow and scale this amazing organization.
				</p>
				<div className="w-full rounded-3xl bg-orange-200 px-5 py-6 text-center text-lg font-extrabold text-orange-600 md:text-2xl">
					<span>Everyone deserves a chance to fly</span>
				</div>
			</section>

			<section className="border-venmo-blue/35 bg-venmo-blue mx-auto my-6 max-w-4xl rounded-2xl border px-6 py-8 text-center text-white">
				<h1 className="text-2xl font-bold md:text-3xl">Make a Donation Today</h1>
				<p className="my-5 text-lg">
					Your contribution directly supports visually-impaired athletes and helps grow this
					incredible community.
				</p>
				<a href="https://venmo.com/u/free2flyrc">
					<button className="text-venmo-blue rounded-2xl bg-white px-10 py-3 text-lg font-bold">
						Donate via Venmo
					</button>
				</a>
			</section>

			<section className="glass-strong mx-auto my-6 max-w-4xl rounded-2xl border p-5">
				<h1 className="mb-5 text-lg font-semibold">Connect with Free 2 Fly!</h1>
				<div className="flex items-center gap-3">
					<InstagramIcon className="text-instagram-pink" />
					<div>
						<p className="text-s">Follow on Instagram</p>
						<a
							href="https://www.instagram.com/free2fly_RC"
							target="_blank"
							rel="noreferrer"
							data-outbound="free2fly instagram"
							className="text-instagram-pink font-semibold hover:text-pink-700"
						>
							@free2fly_RC
						</a>
					</div>
				</div>
			</section>
		</>
	);
}
