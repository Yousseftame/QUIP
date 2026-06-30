import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import ProgressiveImage from "@/components/ui/ProgressiveImage";
import { usePreloadImages } from "@/hooks/usePreloadImages";

type FinishingProjectGalleryProps = {
  images: string[];
  projectName: string;
};

export default function FinishingProjectGallery({
  images,
  projectName,
}: FinishingProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const total = images.length;
  const hasMultiple = total > 1;

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + total) % total);
    },
    [total],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  usePreloadImages(images);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, goPrev, goNext]);

  if (total === 0) return null;

  return (
    <>
      <div className="finishing-gallery">
        <div className="finishing-gallery__stage-wrap">
          <button
            type="button"
            className="finishing-gallery__stage"
            onClick={() => setLightboxOpen(true)}
            aria-label={`View full image ${index + 1} of ${total} for ${projectName}`}
          >
            <ProgressiveImage
              key={images[index]}
              src={images[index]}
              alt=""
              className="finishing-gallery__image"
              fetchPriority="high"
              loading="eager"
            />
            <div className="finishing-gallery__frame" aria-hidden />

            <span className="finishing-gallery__zoom" aria-hidden>
              <ZoomIn size={18} strokeWidth={2} />
              View full size
            </span>
          </button>

          {hasMultiple && (
            <>
              <button
                type="button"
                className="finishing-gallery__arrow finishing-gallery__arrow--prev"
                onClick={goPrev}
                aria-label="Previous image"
              >
                <ChevronLeft size={22} strokeWidth={2} />
              </button>
              <button
                type="button"
                className="finishing-gallery__arrow finishing-gallery__arrow--next"
                onClick={goNext}
                aria-label="Next image"
              >
                <ChevronRight size={22} strokeWidth={2} />
              </button>
            </>
          )}
        </div>

        {hasMultiple && (
          <div className="finishing-gallery__footer">
            <div className="finishing-gallery__dots" role="tablist" aria-label="Gallery images">
              {images.map((image, i) => (
                <button
                  key={`${image}-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Image ${i + 1}`}
                  className={`finishing-gallery__dot${i === index ? " finishing-gallery__dot--active" : ""}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <span className="finishing-gallery__count">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      {lightboxOpen && (
        <div
          className="finishing-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} gallery`}
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            className="finishing-lightbox__close"
            onClick={() => setLightboxOpen(false)}
            aria-label="Close gallery"
          >
            <X size={22} strokeWidth={2} />
          </button>

          <div className="finishing-lightbox__inner" onClick={(e) => e.stopPropagation()}>
            <ProgressiveImage
              key={`lb-${images[index]}`}
              src={images[index]}
              alt=""
              className="finishing-lightbox__image"
              fetchPriority="high"
            />

            {hasMultiple && (
              <>
                <button
                  type="button"
                  className="finishing-lightbox__arrow finishing-lightbox__arrow--prev"
                  onClick={goPrev}
                  aria-label="Previous image"
                >
                  <ChevronLeft size={28} strokeWidth={1.75} />
                </button>
                <button
                  type="button"
                  className="finishing-lightbox__arrow finishing-lightbox__arrow--next"
                  onClick={goNext}
                  aria-label="Next image"
                >
                  <ChevronRight size={28} strokeWidth={1.75} />
                </button>
                <span className="finishing-lightbox__count">
                  {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                </span>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
