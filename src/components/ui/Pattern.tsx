import React from "react";

interface PatternProps {
  className?: string;
}

function Pattern({ className = "" }: PatternProps) {
  return (
    <div className={`fixed inset-0 z-1 pointer-events-none ${className}`}>
      <div className="grid grid-cols-[repeat(auto-fill,500px)] gap-0 w-[200%] -ml-[250px] -mt-[250px]">
        {Array.from({ length: 24 }, (_, i) => (
          <img
            key={i}
            src="/pattern.svg"
            className={`w-[500px] h-[500px] object-cover ${
              Math.floor(i / 6) % 2 === 1 ? "translate-x-[250px]" : ""
            }`}
            aria-hidden="true"
          />
        ))}
      </div>
    </div>
  );
}

export default Pattern;
