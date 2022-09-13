import type { Stack } from "contentstack";
import contentstack from "contentstack";

import type { CSENV } from "./env.server";

export const setContentStack = (ENV: CSENV) => {
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

  Stack.setHost(ENV.CS_API_HOST);

  return { Stack };
};

declare global {
  var Stack: Stack;
  interface Window {
    Stack: Stack;
  }
}
