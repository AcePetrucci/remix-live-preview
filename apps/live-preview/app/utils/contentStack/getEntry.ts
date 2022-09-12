import type contentstack from 'contentstack';

export type GetEntry = {
	contentTypeUid: string;
	stack: contentstack.Stack;
};

export type EmbeddedItem = {
	uid: string;
	_content_type_uid?: string;
	[propName: string]: any;
};

const getEntry = ({ contentTypeUid, stack }: GetEntry) => {
	return new Promise((resolve) => {
		const query = stack.ContentType(contentTypeUid).Query();

		query
			.includeOwner()
			.toJSON()
			.find()
			.then((res) => resolve(res))
			.catch((err) => {
				console.log(err);
			});
	}) as Promise<[[EmbeddedItem]]>;
};

export default getEntry;
