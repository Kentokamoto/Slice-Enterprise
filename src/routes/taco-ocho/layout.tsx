import { Link, Outlet, useLocation } from 'react-router';

export default function TacoOchoLayout() {
	const { pathname } = useLocation();
	return (
		<>
			<Outlet />
			<div className="flex h-20 w-full items-center justify-center gap-5 bg-orange-300 text-lg">
				<Link to="/taco-ocho/2025">
					<button className={pathname.includes('2025') ? 'font-bold' : ''}>2025</button>
				</Link>
			</div>
		</>
	);
}
