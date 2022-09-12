import { createContext, useContext } from 'react';

import type { EmbeddedItem } from '~/utils/contentStack/getEntry';

type TLivePreviewContext = {
  entry: EmbeddedItem;
  contentTypeUid: string;
};

const defaultState: TLivePreviewContext = {
  entry: {
    uid: '',
    _content_type_uid: ''
  },
  contentTypeUid: 'item'
};

const LivePreviewContext = createContext<TLivePreviewContext>(defaultState);

export const useLivePreviewContext = () => {
  return useContext(LivePreviewContext);
};

export default LivePreviewContext;
