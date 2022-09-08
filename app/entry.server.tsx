import type { EntryContext } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';

import { getPublicENV } from './env.server';

global.ENV = getPublicENV();

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: EntryContext
) {
	const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

	responseHeaders.set('Content-Type', 'text/html');
  responseHeaders.set('Access-Control-Allow-Origin', '*');

	return new Response('<!DOCTYPE html>' + markup, {
		status: responseStatusCode,
		headers: responseHeaders
	});
}
