import React, { useEffect, useState } from "react";

interface PatternProps {
  className?: string;
}

function Pattern({ className = "" }: PatternProps) {
  const [tiles, setTiles] = useState<{ cols: number; rows: number }>({
    cols: 0,
    rows: 0,
  });
  const TILE_SIZE = 500; // Size in pixels

  useEffect(() => {
    const calculateTiles = () => {
      const width = window.innerWidth;
      // Get the height from the main content element only
      const mainElement = document.querySelector("main");
      const height = mainElement?.offsetHeight || window.innerHeight;

      const cols = Math.ceil(width / TILE_SIZE) + 2;
      const rows = Math.ceil(height / TILE_SIZE) + 1;
      setTiles({ cols, rows });
    };

    // Initial calculation
    calculateTiles();

    // Watch for main element size changes
    const observer = new ResizeObserver(calculateTiles);
    const mainElement = document.querySelector("main");
    if (mainElement) {
      observer.observe(mainElement);
    }

    // Handle window resize
    window.addEventListener("resize", calculateTiles);

    return () => {
      window.removeEventListener("resize", calculateTiles);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-1 pointer-events-none opacity-100 ${className}`}
    >
      <div
        className="grid gap-0"
        style={{
          gridTemplateColumns: `repeat(${tiles.cols}, ${TILE_SIZE}px)`,
          marginLeft: `-${TILE_SIZE / 2}px`,
          marginTop: `-${TILE_SIZE / 2}px`,
          height: "100%",
        }}
      >
        {Array.from({ length: tiles.cols * tiles.rows }, (_, i) => {
          const row = Math.floor(i / tiles.cols);
          return (
            <img
              key={i}
              src="/pattern.svg"
              className={`w-[500px] h-[500px] object-cover ${
                row % 2 === 1 ? "translate-x-[250px]" : ""
              }`}
              aria-hidden="true"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Pattern;
