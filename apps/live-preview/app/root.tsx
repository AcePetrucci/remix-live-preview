import type { LinksFunction, LoaderFunction, MetaFunction } from '@remix-run/node';
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

import tailwindStyles from './styles/app.css';
import contentStackStyles from '@contentstack/live-preview-utils/dist/main.css';
import lpComponentsStyles from 'lp-components/dist/style.css';

import type { CSENV } from './utils/server/env.server';
import { getCSENV } from './utils/server/env.server';

import { useLivePreview } from './hooks/useLivePreview';

import Welcome from './components/Welcome';
import Tabs from './components/Tabs';

/**
 * Loader Type Definition
 */

type LoaderData = {
  ENV: CSENV;
};

/**
 * Root Server Functions
 */

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
  const ENV = getCSENV();

  return json<LoaderData>({
    ENV
  });
};

/**
 * Root Render
 */

export default function App() {
  const { ENV } = useLoaderData() as LoaderData;
  const { entry } = useLivePreview('item', ENV);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="w-full font-sans text-blue-900 bg-gray-50">
        <section className="p-12 xl:p-8 lg:p-6">
          <Welcome entry={entry} />
          <Tabs />
          <Outlet context={{ entry }} />
        </section>

        <ScrollRestoration />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`
          }}
        />
        <Scripts />
        <LiveReload port={8002} />
      </body>
    </html>
  );
}
