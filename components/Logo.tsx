/** Logo cupcake + cherry trong vòng tròn hồng, theo sticker H.G House. */
export default function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <circle cx="24" cy="24" r="23" fill="#FFC2D4" />
      <path d="M14 27 L17 39 Q17.5 40 18.5 40 L29.5 40 Q30.5 40 31 39 L34 27Z" fill="#fff" stroke="#5B3A33" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M20 29 L21 38 M24 29 L24 38 M28 29 L27 38" stroke="#5B3A33" strokeWidth="1" strokeLinecap="round" />
      <path d="M12.5 27 Q11 22 16 21 Q15 15 21 15.5 Q23 11 27.5 14 Q33 13 32.5 19 Q37 21 35.5 27Z" fill="#FF8FB1" stroke="#5B3A33" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M17 23 Q22 25 27 22 M20 18.5 Q24 20 28 17.5" stroke="#5B3A33" strokeWidth="1" fill="none" strokeLinecap="round" />
      <path d="M25 13 Q26 8 29 6" stroke="#5B3A33" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="24.5" cy="11.5" r="3" fill="#E85A8A" stroke="#5B3A33" strokeWidth="1.2" />
    </svg>
  );
}
