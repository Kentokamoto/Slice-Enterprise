import { type MetaFunction, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';
import './app.css';

export const meta: MetaFunction = () => [
	{ title: 'Slice Enterprises' },
	{ name: 'description', content: 'When running and food meet and grab a bite in Seattle' }
];

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
					rel="stylesheet"
				/>
				<script
					src="https://kit.fontawesome.com/5493abd9d4.js"
					crossOrigin="anonymous"
					async
				></script>
				<script src="https://strava-embeds.com/embed.js" async></script>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function Root() {
	return <Outlet />;
}
