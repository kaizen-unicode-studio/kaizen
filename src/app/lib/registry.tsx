"use client";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../style";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useState } from "react";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cache] = useState(() => {
    const cache = createCache({ key: "next" });
    cache.compat = true;
    return cache;
  });

  return (
    <CacheProvider value={cache}>
      <Global styles={GlobalStyles} />
      {children}
    </CacheProvider>
  );
}
