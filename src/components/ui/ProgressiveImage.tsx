import { useCallback, useEffect, useState, type ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ProgressiveImageProps = ImgHTMLAttributes<HTMLImageElement>;

export default function ProgressiveImage({
  className,
  onLoad,
  decoding = "async",
  src,
  ...props
}: ProgressiveImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  const handleLoad = useCallback(
    (event: React.SyntheticEvent<HTMLImageElement>) => {
      setLoaded(true);
      onLoad?.(event);
    },
    [onLoad],
  );

  const handleRef = useCallback((node: HTMLImageElement | null) => {
    if (node?.complete && node.naturalWidth > 0) {
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
