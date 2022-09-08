import contentstack from 'contentstack';
import ContentstackLivePreview from '@contentstack/live-preview-utils';

import type { GetEntry, ContentStackENV } from '~/models/contentStack';

const setContentStack = (ENV: ContentStackENV) => {
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

	Stack.setHost(ENV.CS_API_HOST);

	// ContentstackLivePreview.init({
	// 	stackDetails: {
	// 		apiKey: ENV.CS_API_KEY
	// 	},
	// 	enable: true,
	// 	ssr: true
	// });

	const getEntry = ({ contentTypeUid, jsonRtePath, referenceFieldPath }: GetEntry) => {
		return new Promise((resolve) => {
			const query = Stack.ContentType(contentTypeUid).Query();

			if (referenceFieldPath) query.includeReference(referenceFieldPath);

			query
				.includeOwner()
				.toJSON()
				.find()
				.then((res) => {
					jsonRtePath &&
						contentstack.Utils.jsonToHTML({
							entry: res,
							paths: jsonRtePath
						});

					resolve(res);
				})
				.catch((err) => {
					console.log(err);
				});
		});
	};

	// const { onEntryChange } = ContentstackLivePreview;

	return { Stack, getEntry };
};

export default setContentStack;
