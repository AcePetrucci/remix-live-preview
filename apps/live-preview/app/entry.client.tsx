import { RemixBrowser } from "@remix-run/react";
import { hydrateRoot } from "react-dom/client";

import ContentstackLivePreview from "@contentstack/live-preview-utils";

hydrateRoot(document, <RemixBrowser />);

ContentstackLivePreview.init({
  stackDetails: {
    apiKey: ENV.CS_API_KEY,
  },
  enable: true,
  ssr: true,
});
