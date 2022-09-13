import { useEffect, useState } from "react";

import type { CSENV } from "~/utils/server/env.server";

import type { TEmbeddedItem } from "~/utils/contentStack/livePreviewContext";
import { defaultEntryState } from "~/utils/contentStack/livePreviewContext";
import { setContentStack } from "~/utils/contentStack/setContentStack";

export const useLivePreview = (contentTypeUid: string, ENV: CSENV) => {
  const [entry, setEntry] = useState<TEmbeddedItem>(defaultEntryState);

  const { onEntryChange, getEntry } = setContentStack(ENV);

  useEffect(() => {
    if (typeof window !== "undefined") {
      onEntryChange(async () => {
        const _entry = await getEntry("item");

        setEntry(_entry[0][0]);
      });
    }
  }, []);

  return { entry };
};
