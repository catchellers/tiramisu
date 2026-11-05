/** Linh vật Tiramisu Hg: lát/hũ tiramisu kawaii phủ cacao, cắm Oreo + hoa. */
type Props = {
  id: string;
  variant?: "slice" | "cup";
  face?: boolean;
  className?: string;
  /** Tốc độ parallax (xem components/Motion.tsx) */
  parallax?: number;
};

const palette = { top: "#7B4B3A", cream: "#FFF1C9", sponge: "#D9A86C" };

/** Nửa bánh Oreo cắm trên mặt + bông hoa nhỏ — giống topping thật của tiệm. */
function OreoDaisy({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <g transform="translate(-8 0) rotate(-8)">
        <path d="M-17 4 A17 17 0 0 1 17 4Z" fill="#2A1C1B" />
        <path d="M-12 4 A12 12 0 0 1 12 4" fill="none" stroke="#4A3533" strokeWidth="1.3" />
        <path d="M-6 4 A6 6 0 0 1 6 4" fill="none" stroke="#4A3533" strokeWidth="1.1" />
        <rect x="-17" y="2.5" width="34" height="3" fill="#FFF8EE" />
      </g>
      <g transform="translate(16 6)">
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse key={i} cx="0" cy="-4" rx="2" ry="4" fill="#fff" transform={`rotate(${i * 45})`} />
        ))}
        <circle r="2.4" fill="#FFC94D" />
      </g>
    </g>
  );
}

function Face({ cx, cy }: { cx: number; cy: number }) {
  return (
    <g>
      <ellipse cx={cx - 20} cy={cy + 4} rx="6" ry="3.5" fill="#FF8FB1" opacity="0.75" />
      <ellipse cx={cx + 20} cy={cy + 4} rx="6" ry="3.5" fill="#FF8FB1" opacity="0.75" />
      <circle cx={cx - 12} cy={cy - 2} r="3.4" fill="#3B2320" />
      <circle cx={cx + 12} cy={cy - 2} r="3.4" fill="#3B2320" />
      <circle cx={cx - 11} cy={cy - 3} r="1.1" fill="#fff" />
      <circle cx={cx + 13} cy={cy - 3} r="1.1" fill="#fff" />
      <path d={`M${cx - 5} ${cy + 3} Q${cx} ${cy + 8} ${cx + 5} ${cy + 3}`} stroke="#3B2320" strokeWidth="2.2" strokeLinecap="round" fill="none" />
    </g>
  );
}

function Dust({ x, w, y, h, color }: { x: number; w: number; y: number; h: number; color: string }) {
  return (
    <g>
      {Array.from({ length: 14 }, (_, i) => (
        <circle key={i} cx={x + ((i * 37) % w)} cy={y + ((i * 13) % h)} r={i % 3 === 0 ? 1.6 : 1} fill={color} opacity="0.35" />
      ))}
    </g>
  );
}

export default function TiramisuArt({ id, variant = "slice", face = true, className, parallax }: Props) {
  const clip = `clip-${id}-${variant}`;

  if (variant === "cup") {
    return (
      <svg viewBox="0 0 200 200" className={className} role="img" aria-hidden="true" data-parallax={parallax}>
        <defs>
          <clipPath id={clip}>
            <rect x="46" y="62" width="108" height="114" rx="14" />
          </clipPath>
        </defs>
        <ellipse cx="100" cy="182" rx="58" ry="7" fill="#000" opacity="0.08" />
        <g clipPath={`url(#${clip})`}>
          <rect x="40" y="60" width="120" height="120" fill={palette.cream} />
          <rect x="40" y="62" width="120" height="14" fill={palette.top} />
          <rect x="40" y="100" width="120" height="14" fill={palette.sponge} />
          <rect x="40" y="148" width="120" height="30" fill={palette.sponge} />
          <Dust x={50} w={100} y={102} h={10} color="#3B2320" />
          <Dust x={50} w={100} y={150} h={24} color="#3B2320" />
        </g>
        <rect x="46" y="62" width="108" height="114" rx="14" fill="none" stroke="#fff" strokeWidth="3" opacity="0.9" />
        <path d="M56 74 L56 162" stroke="#fff" strokeWidth="4" strokeLinecap="round" opacity="0.5" />
        <rect x="40" y="54" width="120" height="10" rx="5" fill="#fff" opacity="0.85" />
        {face && <Face cx={100} cy={128} />}
        <OreoDaisy x={100} y={58} />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-hidden="true" data-parallax={parallax}>
      <defs>
        <clipPath id={clip}>
          <rect x="38" y="70" width="124" height="98" rx="16" />
        </clipPath>
      </defs>
      <ellipse cx="100" cy="174" rx="80" ry="13" fill="#fff" />
      <ellipse cx="100" cy="172" rx="66" ry="8" fill="#000" opacity="0.06" />
      <g clipPath={`url(#${clip})`}>
        <rect x="38" y="70" width="124" height="98" fill={palette.cream} />
        <rect x="38" y="70" width="124" height="15" fill={palette.top} />
        <rect x="38" y="108" width="124" height="14" fill={palette.sponge} />
        <rect x="38" y="146" width="124" height="22" fill={palette.sponge} />
        <Dust x={44} w={112} y={110} h={10} color="#3B2320" />
        <Dust x={44} w={112} y={148} h={18} color="#3B2320" />
        <Dust x={44} w={112} y={72} h={11} color="#fff" />
        <rect x="38" y="70" width="10" height="98" fill="#fff" opacity="0.18" />
      </g>
      {face && <Face cx={100} cy={132} />}
      <OreoDaisy x={100} y={67} />
    </svg>
  );
}
