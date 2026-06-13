import { useEffect } from 'react';

interface Props {
	iframeId: string;
	children: React.ReactNode;
}

export default function Registration({ iframeId, children }: Props) {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = 'https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js';
		script.onload = () => {
			if (window && 'jotformEmbedHandler' in window) {
				(window as Window & { jotformEmbedHandler: (selector: string, base: string) => void }).jotformEmbedHandler(
					`iframe[id='${iframeId}']`,
					'https://form.jotform.com/'
				);
			}
		};
		document.body.appendChild(script);
		return () => {
			if (document.body.contains(script)) document.body.removeChild(script);
		};
	}, [iframeId]);

	return (
		<div className="my-4 flex w-full flex-col place-content-center sm:flex-row">
			<section className="flex basis-full flex-col place-content-center p-4 sm:p-0">
				<h1 className="text-red-sauce mb-3 text-center text-2xl font-bold">Register Here</h1>
				{children}
			</section>
		</div>
	);
}
