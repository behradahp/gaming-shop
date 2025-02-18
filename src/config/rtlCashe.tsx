import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { JSX } from "react";

// Create rtl cache
const rtlCache = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const Rtl: React.FC<{ children: React.ReactNode }> = ({
  children,
}): JSX.Element => {
  return <CacheProvider value={rtlCache}>{children}</CacheProvider>;
};
