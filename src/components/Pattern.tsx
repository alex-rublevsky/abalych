import patternSvg from '../assets/pattern.svg';

interface PatternProps {
  className?: string;
}

function Pattern({ className = "" }: PatternProps) {
  return (
    <div className={`fixed inset-0 z-0 pointer-events-none ${className}`}>
      <img
        src={patternSvg}
        className={`h-full w-full object-cover`}
        aria-hidden="true"
      />
    </div>
  );
}

export default Pattern;
