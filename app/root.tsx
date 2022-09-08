import type { MetaFunction, LinksFunction, LoaderFunction} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";

import type { ContentStackENV } from './models/contentStack';

import styles from './styles/app.css';

import setContentStack from "./utils/contentStack";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => ([
  { rel: "stylesheet", href: styles }
])

export const loader: LoaderFunction = async ({ request }) => {
  const ENV: ContentStackENV = {
    CS_API_KEY: process.env.CS_API_KEY as string,
    CS_MANAGEMENT_TOKEN: process.env.CS_MANAGEMENT_TOKEN as string,
    CS_DELIVERY_TOKEN: process.env.CS_DELIVERY_TOKEN as string,
    CS_ENV: process.env.CS_ENV as string,
    CS_API_HOST: process.env.CS_API_HOST as string,
  };

  const { Stack, getEntry } = setContentStack(ENV);

  const itemCombined = await getEntry({
    contentTypeUid: 'item',
    jsonRtePath: undefined,
    referenceFieldPath: undefined
  });

  return itemCombined;
}

export default function App() {
  const data = useLoaderData();

  console.log(data);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
