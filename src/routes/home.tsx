import { type MetaFunction, Link } from 'react-router';
import {
	CroissantIcon,
	FlagIcon,
	PizzaIcon,
	Ruler,
	UtensilsIcon
} from 'lucide-react';
import sliceAThonGroupPhoto from '~/lib/assets/slice-a-thon_group_photo.webp?inline';
import eggnogLegJogGroupPhoto from '~/lib/assets/eggnog-leg-jog-preview.webp';
import tacoOchoGroupPhoto from '~/lib/assets/taco-ocho-preview.webp';
import sliceAThonPreview from '~/lib/assets/slice-a-thon-preview.webp';

export const meta: MetaFunction = () => [
	{ title: 'Slice Enterprises' },
	{ name: 'description', content: 'When running and food meet and grab a bite in Seattle' }
];

export default function Home() {
	return (
		<>
			<section className="relative flex h-[60vh] items-center justify-center overflow-hidden md:h-[70vh]">
				<img
					className="absolute inset-0 h-full w-full object-cover"
					alt="slice-a-thon 2025 attendees"
					src={sliceAThonGroupPhoto}
				/>
				<div className="absolute inset-0 bg-linear-to-b from-black/50 via-black/40 to-black/60" />
				<div className="relative z-10 max-w-4xl px-4 text-center text-white">
					<h1 className="mb-4 text-4xl font-bold md:mb-6 md:text-6xl">Crust or Bust.</h1>
					<p className="mb-6 text-lg text-gray-100 md:mb-8 md:text-2xl">Now that's amore!</p>
					<div className="flex flex-col justify-center gap-4 sm:flex-row">
						<Link to="/slice-a-thon">
							<button className="w-full rounded-xl bg-orange-500/90 py-2 text-white hover:bg-orange-600 hover:shadow-lg sm:w-2xs">
								View Our Next Run
							</button>
						</Link>
						<Link to="/about">
							<button className="w-full rounded-xl border-white bg-black/80 py-2 text-white hover:bg-black hover:shadow-lg sm:w-2xs">
								About Us
							</button>
						</Link>
					</div>
				</div>
			</section>

			<section className="relative m-5 flex items-center justify-center overflow-hidden">
				<div className="grid w-full grid-cols-1 gap-4 px-0 py-2 md:grid-cols-2 md:px-10 lg:grid-cols-3">
					<div className="glass-strong flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-2xl">
						<div className="relative overflow-hidden">
							<header className="relative">
								<img src={sliceAThonPreview} className="h-full w-full object-cover" alt="banner" />
							</header>
							<div className="m-3">
								<h3 className="h6">May 16, 2026</h3>
								<h2 className="h3">Slice-a-thon</h2>
								<div className="h-10">
									<p className="line-clamp-2 opacity-60">
										The race that started it all. Run and eat pizza from some of Seattle's best pizza spots.
									</p>
								</div>
								<div className="mt-4 mb-4 space-y-2">
									<div className="flex items-center gap-2 text-gray-700">
										<Ruler /> <span>10k and half marathon</span>
									</div>
									<div className="flex items-center gap-2 text-gray-700">
										<PizzaIcon /><span>3 pizza spots</span>
									</div>
									<div className="flex items-center gap-2 text-gray-700">
										<FlagIcon /><span>Gasworks Park</span>
									</div>
								</div>
								<Link className="flex w-full justify-center rounded-xl bg-amber-500" to="/slice-a-thon">
									<button className="mx-5 my-2">More Info</button>
								</Link>
							</div>
						</div>
					</div>

					<div className="glass-strong flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-2xl">
						<div className="relative overflow-hidden">
							<header className="relative">
								<img src={tacoOchoGroupPhoto} className="h-full w-full object-cover" alt="banner" />
							</header>
							<div className="m-3">
								<h3 className="h6">August 8, 2026</h3>
								<h2 className="h3">Taco Ocho</h2>
								<div className="h-10">
									<p className="line-clamp-2 opacity-60">8 miles, 8 tacos, all on August 8th.</p>
								</div>
								<div className="mt-4 mb-4 space-y-2">
									<div className="flex items-center gap-2 text-gray-700">
										<Ruler /> <span>8 miles</span>
									</div>
									<div className="flex items-center gap-2 text-gray-700">
										<UtensilsIcon /><span>3 taco locations</span>
									</div>
									<div className="flex items-center gap-2 text-gray-700">
										<FlagIcon /><span>Northgate Station</span>
									</div>
								</div>
								<Link className="flex w-full justify-center rounded-xl bg-amber-500" to="/taco-ocho">
									<button className="mx-5 my-2">More Info</button>
								</Link>
							</div>
						</div>
					</div>

					<div className="glass-strong flex flex-col gap-6 overflow-hidden rounded-xl border transition-shadow hover:shadow-2xl">
						<div className="relative overflow-hidden">
							<header className="relative">
								<img src={eggnogLegJogGroupPhoto} className="h-full w-full object-cover" alt="banner" />
							</header>
							<div className="m-3">
								<h3 className="h6">November 2026</h3>
								<h2 className="h3">Eggnog Leg Jog</h2>
								<div className="h-10">
									<p className="line-clamp-2 opacity-60">
										Kick off the holiday season with some baked goods and dancing around Green Lake!
									</p>
								</div>
								<div className="mt-4 mb-4 space-y-2">
									<div className="flex items-center gap-2 text-gray-700">
										<Ruler /> <span>10k</span>
									</div>
									<div className="flex items-center gap-2 text-gray-700">
										<CroissantIcon /><span>4 holiday stations</span>
									</div>
									<div className="flex items-center gap-2 text-gray-700">
										<FlagIcon /><span>Woodland Park</span>
									</div>
								</div>
								<Link className="flex w-full justify-center rounded-xl bg-amber-500" to="/eggnog">
									<button className="mx-5 my-2">More Info</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
