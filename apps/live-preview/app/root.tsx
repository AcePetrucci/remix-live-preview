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
import { addEditableTags } from '@contentstack/utils';

import type { PublicENV } from './env.server';
import { getCSENV, getPublicENV } from './env.server';
import setContentStack from './utils/contentStack';

import type { EmbeddedItem } from './utils/contentStack/getEntry';
import LivePreviewContext from './store/livePreviewContext';

import tailwindStyles from './styles/app.css';
import contentStackStyles from '@contentstack/live-preview-utils/dist/main.css';
import lpComponentsStyles from 'lp-components/dist/style.css';

import Welcome from './components/Welcome';
import Tabs from './components/Tabs';

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
  { rel: 'stylesheet', href: contentStackStyles },
  { rel: 'stylesheet', href: lpComponentsStyles }
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

  addEditableTags(entry, contentTypeUid, true);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-full font-sans text-blue-900 bg-gray-50">
        <LivePreviewContext.Provider value={{ entry, contentTypeUid }}>
          <section className="p-12 xl:p-8 lg:p-6">
            <Welcome entry={entry} />
            <Tabs entry={entry} />

            <Outlet />
          </section>
        </LivePreviewContext.Provider>

        <ScrollRestoration />

        <script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(ENV)}` }} />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
