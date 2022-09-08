import type { MetaFunction, LinksFunction, LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLoaderData
} from '@remix-run/react';

import type { PublicENV } from './env.server';
import { getCSENV, getPublicENV } from './env.server';
import setContentStack from './utils/contentStack';

import type { EmbeddedItem } from './utils/contentStack/getEntry';
import LivePreviewContext from './store/livePreviewContext';

import tailwindStyles from './styles/app.css';
import contentStackStyles from "@contentstack/live-preview-utils/dist/main.css";

type LoaderData = {
	ENV: PublicENV;
	entry: EmbeddedItem;
  contentTypeUid: string;
};

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'New Remix App',
	viewport: 'width=device-width,initial-scale=1'
});

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: tailwindStyles },
  { rel: 'stylesheet', href: contentStackStyles }
];

export const loader: LoaderFunction = async ({ request }) => {
	const CSENV = getCSENV();
	const PublicENV = getPublicENV();

	const { entry, contentTypeUid } = await setContentStack(CSENV, request.url);

	return json<LoaderData>({
		ENV: PublicENV,
		entry: entry,
    contentTypeUid
	});
};

export default function App() {
	const { entry, contentTypeUid, ENV } = useLoaderData() as LoaderData;

	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
        <LivePreviewContext.Provider value={{entry, contentTypeUid}}>
				  <Outlet />
        </LivePreviewContext.Provider>
				<ScrollRestoration />

				<script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(ENV)}` }} />

				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
