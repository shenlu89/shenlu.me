import { useEffect, useState } from "react";
import type { GiscusProps } from "@/lib/types";

export default function Giscus({
  id,
  host,
  repo,
  repoId,
  category,
  categoryId,
  mapping,
  term,
  strict,
  reactionsEnabled,
  emitMetadata,
  inputPosition,
  theme,
  lang,
  loading,
}: GiscusProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import("giscus").then(() => setMounted(true));
  }, []);

  return (
    <>
      {mounted && (
        // @ts-ignore
        <giscus-widget
          id={id}
          host={host}
          repo={repo}
          repoid={repoId}
          category={category}
          categoryid={categoryId}
          mapping={mapping}
          term={term}
          strict={strict}
          reactionsenabled={reactionsEnabled}
          emitmetadata={emitMetadata}
          inputposition={inputPosition}
          theme={theme}
          lang={lang}
          loading={loading}
        />
      )}
    </>
  );
}
