import { useEffect, useMemo } from "react";

export function usePreloadImages(sources: string[]) {
  const sourcesKey = useMemo(() => sources.join("\0"), [sources]);

  useEffect(() => {
    const images: HTMLImageElement[] = [];

    for (const src of sources) {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      images.push(img);
    }

    return () => {
      for (const img of images) {
        img.src = "";
      }
    };
  }, [sourcesKey, sources]);
}
