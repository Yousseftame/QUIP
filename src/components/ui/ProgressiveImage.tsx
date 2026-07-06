import { useCallback, useEffect, useRef, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ProgressiveImageProps = ImgHTMLAttributes<HTMLImageElement>;

function isImageReady(img: HTMLImageElement | null) {
  return Boolean(img?.complete && img.naturalWidth > 0);
}

export default function ProgressiveImage({
  className,
  onLoad,
  decoding = "async",
  src,
  ...props
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    setLoaded(false);

    if (!src) return;

    const markLoadedIfReady = () => {
      if (isImageReady(imgRef.current)) {
        setLoaded(true);
      }
    };

    markLoadedIfReady();

    // Cached images (e.g. preloaded prev/next) may finish before onLoad re-attaches.
    const raf = requestAnimationFrame(markLoadedIfReady);
    return () => cancelAnimationFrame(raf);
  }, [src]);

  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(event);
    },
    [onLoad],
  );

  const handleRef = useCallback((node: HTMLImageElement | null) => {
    imgRef.current = node;
    if (isImageReady(node)) {
      setLoaded(true);
    }
  }, []);

  return (
    <img
      {...props}
      ref={handleRef}
      src={src}
      decoding={decoding}
      className={cn("progressive-image", loaded && "progressive-image--loaded", className)}
      onLoad={handleLoad}
    />
  );
}
