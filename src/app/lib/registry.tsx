"use client";
import { Global } from "@emotion/react";
import { GlobalStyles } from "../style";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
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

  useServerInsertedHTML(() => {
    return (
      <>
        <style
          data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
          dangerouslySetInnerHTML={{
            __html: Object.values(cache.inserted).join(" "),
          }}
        />
      </>
    );
  });

  return (
    <CacheProvider value={cache}>
      <Global styles={GlobalStyles} />
      {children}
    </CacheProvider>
  );
}
