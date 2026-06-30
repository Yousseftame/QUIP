import { memo } from "react";
import type { SoftwareDepartment, SoftwareDepartmentId } from "@/types/software-project";

type SoftwareDepartmentTabsProps = {
  departments: SoftwareDepartment[];
  activeId: SoftwareDepartmentId;
  counts: Record<SoftwareDepartmentId, number>;
  onSelect: (id: SoftwareDepartmentId) => void;
};

function SoftwareDepartmentTabs({
  departments,
  activeId,
  counts,
  onSelect,
}: SoftwareDepartmentTabsProps) {
  return (
    <div className="software-tabs" role="tablist" aria-label="Software departments">
      {departments.map((dept) => {
        const isActive = dept.id === activeId;

        return (
          <button
            key={dept.id}
            type="button"
            role="tab"
            id={`software-tab-${dept.id}`}
            aria-selected={isActive}
            aria-controls="software-works-panel"
            className={`software-tabs__item${isActive ? " software-tabs__item--active" : ""}`}
            onClick={() => onSelect(dept.id)}
          >
            <span className="software-tabs__index">{dept.index}</span>
            <span className="software-tabs__label font-heading">{dept.label}</span>
            <span className="software-tabs__count">
              {counts[dept.id]} {counts[dept.id] === 1 ? "project" : "projects"}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default memo(SoftwareDepartmentTabs);
