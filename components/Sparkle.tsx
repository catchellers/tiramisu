export default function Sparkle({ className, color = "#FF8FB1", parallax }: { className?: string; color?: string; parallax?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" data-parallax={parallax}>
      <path d="M12 0 C13 8 16 11 24 12 C16 13 13 16 12 24 C11 16 8 13 0 12 C8 11 11 8 12 0Z" fill={color} />
    </svg>
  );
}
