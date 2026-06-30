import { memo } from "react";
import { ArrowUpRight } from "lucide-react";
import type { FinishingCategory, FinishingCategoryId } from "@/types/finishing-project";

type FinishingTypeSelectorProps = {
  categories: FinishingCategory[];
  activeId: FinishingCategoryId;
  counts: Record<FinishingCategoryId, number>;
  onSelect: (id: FinishingCategoryId) => void;
};

function FinishingTypeSelector({
  categories,
  activeId,
  counts,
  onSelect,
}: FinishingTypeSelectorProps) {
  return (
    <div className="finishing-types" role="tablist" aria-label="Project types">
      {categories.map((category) => {
        const isActive = category.id === activeId;

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            id={`finishing-tab-${category.id}`}
            aria-selected={isActive}
            aria-controls="finishing-works-panel"
            className={`finishing-types__item${isActive ? " finishing-types__item--active" : ""}`}
            onClick={() => onSelect(category.id)}
          >
            <span className="finishing-types__top">
              <span className="finishing-types__index">{category.index}</span>
              <ArrowUpRight
                size={18}
                strokeWidth={2}
                className="finishing-types__icon"
                aria-hidden
              />
            </span>
            <span className="finishing-types__label font-heading">{category.label}</span>
            <span className="finishing-types__headline">{category.headline}</span>
            <span className="finishing-types__count">
              {counts[category.id]} {counts[category.id] === 1 ? "project" : "projects"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default memo(FinishingTypeSelector);
