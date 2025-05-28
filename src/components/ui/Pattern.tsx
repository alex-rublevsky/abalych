import React from "react";

interface PatternProps {
  className?: string;
}

function Pattern({ className = "" }: PatternProps) {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className}`}>
      <img
        src="https://assets.abaly.ch/pattern.svg"
        className={`h-full w-full object-cover`}
        aria-hidden="true"
      />
    </div>
  );
}

export default Pattern;
