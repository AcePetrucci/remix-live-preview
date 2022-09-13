import { RemixBrowser } from "@remix-run/react";

import { hydrateRoot } from "react-dom/client";

/**
 * Content Stack Context
 */

hydrateRoot(document, <RemixBrowser />);
