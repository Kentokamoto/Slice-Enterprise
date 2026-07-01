import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router';
import { InstagramIcon, MenuIcon } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import mascotThumb from '~/lib/assets/Slice-Enterprise-Mascot_thumb.webp?inline';

const NAV_LINKS = [
	{ to: '/slice-a-thon', label: 'Slice-a-thon', internal: true },
	{ to: '/taco-ocho', label: 'Taco Ocho', internal: true },
	{ to: '/eggnog', label: 'Eggnog Leg Jog', internal: true },
	{ to: '/donate', label: 'Donate', internal: true },
	{ to: 'https://slice-enterprises.printful.me/', label: 'Shop', internal: false },
	{ to: '/about', label: 'About', internal: true }
];

export default function RootLayout() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		document.body.style.overflow = isMenuOpen ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [isMenuOpen]);

	function closeMenu() {
		setIsMenuOpen(false);
	}

	return (
		<>
			<header className="bg-crust relative z-50">
				<div className="grid h-20 grid-cols-[3fr_1fr] items-center px-2 md:grid-cols-[1fr_2fr]">
					<Link
						to="/"
						className="font-display text-red-sauce flex items-center text-3xl leading-tight font-bold lg:text-2xl"
						onClick={closeMenu}
					>
						<img
							className="m-4 w-8 flex-none object-scale-down"
							src={mascotThumb}
							alt="slice enterprises mascot"
						/>
						Slice Enterprises
					</Link>

					<div className="flex items-center justify-end">
						<nav className="text-red-sauce/80 hidden gap-4 text-base font-semibold lg:flex lg:text-xl">
							{NAV_LINKS.map(({ to, label, internal }) =>
								internal ? (
									<Link key={to} to={to}>
										{label}
									</Link>
								) : (
									<a key={to} href={to}>
										{label}
									</a>
								)
							)}
						</nav>
						<button
							type="button"
							className="rounded-lg p-2 hover:bg-black/10 lg:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							aria-label="Toggle menu"
						>
							<MenuIcon className="text-red-sauce" />
						</button>
					</div>
				</div>

				<nav
					className={`bg-crust fixed inset-x-0 top-20 bottom-0 z-[100] p-5 lg:hidden ${isMenuOpen ? '' : 'hidden'}`}
					aria-hidden={!isMenuOpen}
				>
					<ul className="text-red-sauce mr-2 text-right text-4xl font-semibold">
						{NAV_LINKS.map(({ to, label, internal }) => (
							<li key={to} className="my-5">
								{internal ? (
									<Link to={to} onClick={closeMenu}>
										{label}
									</Link>
								) : (
									<a href={to}>{label}</a>
								)}
							</li>
						))}
					</ul>
				</nav>
			</header>

			<main className="bg-crust flex-1">
				<Outlet />
			</main>

			<footer className="grid grid-cols-1 gap-4 bg-orange-300 p-5 md:grid-cols-4">
				<div className="col-span-1 md:col-span-2">
					<div className="text-lg font-bold">Slice Enterprises</div>
					<p className="text-gray-900">
						When running races meets food for the ultimate gastrointestinal challenge
					</p>
					<a
						className="my-4 flex items-center gap-2"
						data-outbound="slice enterprises instagram"
						href="https://www.instagram.com/slice_enterprises/"
					>
						<InstagramIcon />
						@slice_enterprises
					</a>
				</div>
				<div className="col-span-1 mt-4 md:mt-0">
					<div className="text-lg font-bold">Races</div>
					<Link className="mt-1 flex items-center" to="/slice-a-thon">
						Slice-a-thon
					</Link>
					<Link className="mt-1 flex items-center" to="/taco-ocho">
						Taco Ocho
					</Link>
					<Link className="mt-1 flex items-center" to="/eggnog">
						Eggnog Leg Jog
					</Link>
					<Link className="mt-1 flex items-center" to="/about">
						About
					</Link>
				</div>
				<div className="col-span-1 mt-4 md:mt-0">
					<div className="text-lg font-bold">More</div>
					<Link className="mt-1 flex items-center" to="/about">
						About
					</Link>
					<Link className="mt-1 flex items-center" to="/donate">
						Donate
					</Link>
					<a href="https://slice-enterprises.printful.me/">Shop</a>
					<a className="mt-1 flex items-center" href="mailto:slice.enterprise.seattle@gmail.com">
						Contact Us
					</a>
				</div>
			</footer>

			<Analytics />
			<SpeedInsights />
		</>
	);
}
