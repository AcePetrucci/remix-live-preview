import type { ContentStackENV } from '../contentStack';

type ENV = ContentStackENV & {
	UUID_NAMESPACE?: string;
};

export default ENV;
