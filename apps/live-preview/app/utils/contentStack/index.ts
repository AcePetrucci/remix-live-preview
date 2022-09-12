import contentstack from 'contentstack';

import getEntry from './getEntry';

import type { CSENV } from '~/env.server';

const setContentStack = async (ENV: CSENV, url: string) => {
	const Stack = contentstack.Stack({
		api_key: ENV.CS_API_KEY,
		delivery_token: ENV.CS_DELIVERY_TOKEN,
		environment: ENV.CS_ENV,
		live_preview: {
			management_token: ENV.CS_MANAGEMENT_TOKEN,
			enable: true,
			host: ENV.CS_API_HOST
		}
	});

	const { searchParams } = new URL(url);

	const lpQuery = {
		live_preview: searchParams.get('live_preview') as string,
		content_type_uid: searchParams.get('content_type_uid') as string
	};

	Stack.livePreviewQuery(lpQuery);
	Stack.setHost(ENV.CS_API_HOST);

	const entry = await getEntry({
		contentTypeUid: lpQuery.content_type_uid || 'item',
		stack: Stack
	});

	return { entry: entry[0][0], contentTypeUid: lpQuery.content_type_uid };
};

export default setContentStack;
