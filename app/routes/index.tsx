import { useContext } from 'react';
import { Link } from '@remix-run/react';

import { addEditableTags } from '@contentstack/utils';

import LivePreviewContext from '~/store/livePreviewContext';

export default function Index() {
	const { entry, contentTypeUid } = useContext(LivePreviewContext);

  addEditableTags(entry, contentTypeUid, true);

	return (
		<>
			<h1 className="text-3xl font-bold underline" {...entry?.$?.title}>
				{entry?.title || 'Live Preview'}
			</h1>

			<Link prefetch="intent" to={`/livePreview`}>
				Live Preview Link
			</Link>
		</>
	);
}
