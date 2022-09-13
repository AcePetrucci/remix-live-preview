import type { CSENV } from "../server/env.server";

import contentstack from "contentstack";
import ContentstackLivePreview from "@contentstack/live-preview-utils";

import type { TEmbeddedItem } from "./livePreviewContext";

export const setContentStack = (ENV: CSENV) => {
  /**
   * Stack Configuration
   */

  const Stack = contentstack.Stack({
    api_key: ENV.CS_API_KEY,
    delivery_token: ENV.CS_DELIVERY_TOKEN,
    environment: ENV.CS_ENV,
    live_preview: {
      management_token: ENV.CS_MANAGEMENT_TOKEN,
      enable: true,
      host: ENV.CS_API_HOST,
    },
  });

  /**
   * Live Preview Configuration
   */

  ContentstackLivePreview.init({
    //@ts-ignore
    stackSdk: Stack,
    stackDetails: {
      apiKey: ENV.CS_API_KEY,
      environment: ENV.CS_ENV,
    },
    enable: true,
    ssr: false,
  });

  const { onEntryChange } = ContentstackLivePreview;

  /**
   * Query Helper
   */

  const getEntry = (contentTypeUid: string): Promise<[[TEmbeddedItem]]> => {
    return new Promise((resolve, reject) => {
      const query = Stack.ContentType(contentTypeUid).Query();

      query
        .includeOwner()
        .toJSON()
        .find()
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  };

  /**
   * Return Helpers
   */

  return { Stack, onEntryChange, getEntry };
};
