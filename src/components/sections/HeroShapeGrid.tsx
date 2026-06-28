type HeroShapeGridProps = {
  columns?: number;
  rows?: number;
};

export default function HeroShapeGrid({ columns = 5, rows = 5 }: HeroShapeGridProps) {
  return (
    <div
      className="hero-shape-grid"
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
      }}
      aria-hidden
    >
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: columns }).map((_, col) => (
          <span
            key={`${row}-${col}`}
            className="hero-shape-grid-cell"
            style={{
              borderRight: col === columns - 1 ? "none" : undefined,
              borderBottom: row === rows - 1 ? "none" : undefined,
            }}
          />
        )),
      )}
    </div>
  );
}
