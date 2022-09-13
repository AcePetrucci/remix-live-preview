import type { LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import type { CSENV } from "./utils/server/env.server";
import { getCSENV } from "./utils/server/env.server";

import { useLivePreview } from "./hooks/useLivePreview";

import Welcome from "./components/Welcome";
import Tabs from "./components/Tabs";

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
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }) => {
  const ENV = getCSENV();

  return json<LoaderData>({
    ENV,
  });
};

/**
 * Root Render
 */

export default function App() {
  const { ENV } = useLoaderData() as LoaderData;
  const { entry } = useLivePreview("item", ENV);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Welcome entry={entry} />
        <Tabs />
        <Outlet context={{ entry }} />

        <ScrollRestoration />

        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload port={8002} />
      </body>
    </html>
  );
}
