import { memo } from "react";
import type { IctCategory, IctCategoryId } from "@/types/ict-project";

type IctCategoryTabsProps = {
  categories: IctCategory[];
  activeId: IctCategoryId;
  counts: Record<IctCategoryId, number>;
  onSelect: (id: IctCategoryId) => void;
};

function IctCategoryTabs({ categories, activeId, counts, onSelect }: IctCategoryTabsProps) {
  return (
    <div className="ict-tabs" role="tablist" aria-label="ICT project categories">
      {categories.map((category) => {
        const isActive = category.id === activeId;

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            id={`ict-tab-${category.id}`}
            aria-selected={isActive}
            aria-controls="ict-works-panel"
            className={`ict-tabs__item${isActive ? " ict-tabs__item--active" : ""}`}
            onClick={() => onSelect(category.id)}
          >
            <span className="ict-tabs__index">{category.index}</span>
            <span className="ict-tabs__label font-heading">{category.label}</span>
            <span className="ict-tabs__count">
              {counts[category.id]} {counts[category.id] === 1 ? "project" : "projects"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default memo(IctCategoryTabs);
