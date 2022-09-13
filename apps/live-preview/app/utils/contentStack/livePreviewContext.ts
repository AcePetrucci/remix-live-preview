import { useOutletContext } from "@remix-run/react";

export type TEmbeddedItem = {
  uid: string;
  _content_type_uid?: string;
  [propName: string]: any;
};

export type TLivePreviewContext = {
  entry: TEmbeddedItem;
};

export const defaultEntryState: TEmbeddedItem = {
  uid: "",
  _content_type_uid: "",
};

export const useLivePreviewContext = () =>
  useOutletContext<TLivePreviewContext>();
