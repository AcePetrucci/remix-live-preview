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

import type { PublicENV } from "./utils/server/env.server";
import { getPublicENV } from "./utils/server/env.server";

import type { EmbeddedItem } from "./utils/contentStack/getEntry";
import { livePreviewQuery } from "./utils/contentStack";

import Welcome from "./components/Welcome";
import Tabs from "./components/Tabs";

/**
 * Loader Type Definition
 */

type LoaderData = {
  ENV: PublicENV;
  entry: EmbeddedItem;
  contentTypeUid: string;
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
  const publicENV = getPublicENV();

  const { entry, contentTypeUid } = await livePreviewQuery(request.url);

  return json<LoaderData>({
    ENV: publicENV,
    entry,
    contentTypeUid,
  });
};

/**
 * Root Render
 */

export default function App() {
  const { entry, contentTypeUid, ENV } = useLoaderData() as LoaderData;

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Welcome entry={entry} />
        <Tabs />
        <Outlet context={{ entry, contentTypeUid }} />

        {entry?.title}

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
