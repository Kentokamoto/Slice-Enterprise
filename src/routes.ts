import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
	layout('layouts/root-layout.tsx', [
		index('routes/home.tsx'),
		route('about', 'routes/about.tsx'),
		route('donate', 'routes/donate.tsx'),
		layout('layouts/eggnog-layout.tsx', [
			route('eggnog', 'routes/eggnog.tsx'),
			route('eggnog/2025', 'routes/eggnog.2025.tsx')
		]),
		layout('layouts/slice-a-thon-layout.tsx', [
			route('slice-a-thon', 'routes/slice-a-thon.tsx'),
			route('slice-a-thon/2025', 'routes/slice-a-thon.2025.tsx'),
			route('slice-a-thon/2026', 'routes/slice-a-thon.2026.tsx')
		]),
		layout('layouts/taco-ocho-layout.tsx', [
			route('taco-ocho', 'routes/taco-ocho.tsx'),
			route('taco-ocho/2025', 'routes/taco-ocho.2025.tsx')
		])
	])
] satisfies RouteConfig;
