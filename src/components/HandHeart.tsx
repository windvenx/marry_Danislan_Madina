export function HandHeart({
  className = "",
  strokeWidth = 1.2,
  filled = false,
}: {
  className?: string;
  strokeWidth?: number;
  filled?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={filled ? 0 : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path
        d="M12 21c-4-3.5-7-6.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 3.5-3 6.5-7 10z"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  );
}
