/** Ảnh minh hoạ kawaii cho panna cotta & flan (dùng ở landing; trang chi tiết dùng ảnh thật). */
export type DessertKind = "panna-chanh-day" | "panna-kiwi" | "flan";

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

function PannaCotta({ id, kiwi }: { id: string; kiwi: boolean }) {
  const clip = `clip-${id}`;
  const top = kiwi ? "#9CCB5A" : "#FFB547";
  const topDark = kiwi ? "#7DB13C" : "#F0962A";
  const cup = "M50 70 L150 70 L141 158 Q139 170 127 170 L73 170 Q61 170 59 158 Z";
  const seeds = [
    [68, 80], [84, 88], [98, 78], [112, 90], [126, 80], [140, 86], [76, 94], [118, 96], [104, 86], [90, 80],
  ];
  return (
    <>
      <defs>
        <clipPath id={clip}>
          <path d={cup} />
        </clipPath>
      </defs>
      <ellipse cx="100" cy="178" rx="58" ry="7" fill="#000" opacity="0.08" />
      <g clipPath={`url(#${clip})`}>
        <rect x="40" y="60" width="120" height="120" fill="#FFFBF2" />
        <path d="M40 60 L160 60 L160 96 Q148 106 136 98 Q122 108 108 98 Q94 108 80 98 Q66 108 52 98 L40 100Z" fill={top} />
        <path d="M40 92 Q52 102 66 96 Q80 104 94 96 Q108 104 122 96 Q136 104 160 92 L160 98 Q148 106 136 98 Q122 108 108 98 Q94 108 80 98 Q66 108 52 98 L40 100Z" fill={topDark} opacity="0.5" />
        {seeds.map(([x, y], i) =>
          kiwi ? (
            <ellipse key={i} cx={x} cy={y} rx="1.3" ry="2.2" fill="#2A2A1A" transform={`rotate(${i * 30} ${x} ${y})`} />
          ) : (
            <ellipse key={i} cx={x} cy={y} rx="2.6" ry="3.2" fill="#3B2320" opacity="0.85" />
          ),
        )}
        <rect x="56" y="104" width="8" height="56" rx="4" fill="#fff" opacity="0.5" />
      </g>
      <path d={cup} fill="none" stroke="#fff" strokeWidth="3" opacity="0.9" />
      <rect x="44" y="63" width="112" height="11" rx="5.5" fill="#fff" opacity="0.85" />
      <Face cx={100} cy={134} />
      {kiwi ? (
        <g transform="translate(138 52) rotate(18)">
          <circle r="17" fill="#8A6A3A" />
          <circle r="14.5" fill="#A9D466" />
          <circle r="5.5" fill="#F4F8E0" />
          {Array.from({ length: 10 }, (_, i) => {
            const a = (i / 10) * Math.PI * 2;
            return <ellipse key={i} cx={Math.cos(a) * 8.5} cy={Math.sin(a) * 8.5} rx="0.9" ry="1.8" fill="#2A2A1A" transform={`rotate(${(a * 180) / Math.PI + 90} ${Math.cos(a) * 8.5} ${Math.sin(a) * 8.5})`} />;
          })}
        </g>
      ) : (
        <g transform="translate(140 54) rotate(-14)">
          <path d="M-18 0 A18 18 0 0 0 18 0Z" fill="#6E2F5E" />
          <ellipse cx="0" cy="0" rx="18" ry="5" fill="#FFC94D" />
          <ellipse cx="0" cy="0" rx="14" ry="3.5" fill="#F0962A" />
          <circle cx="-6" cy="0" r="1.6" fill="#3B2320" />
          <circle cx="1" cy="-1" r="1.6" fill="#3B2320" />
          <circle cx="7" cy="0.5" r="1.6" fill="#3B2320" />
        </g>
      )}
    </>
  );
}

function Flan() {
  return (
    <>
      <ellipse cx="100" cy="166" rx="82" ry="14" fill="#fff" />
      <ellipse cx="100" cy="164" rx="70" ry="9" fill="#000" opacity="0.06" />
      <ellipse cx="100" cy="161" rx="62" ry="8" fill="#C27A35" />
      <path d="M56 160 L67 94 Q69 84 79 84 L121 84 Q131 84 133 94 L144 160 Q100 168 56 160Z" fill="#FFD36B" />
      <path d="M62 150 L70 98" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.45" />
      <path d="M67 94 Q69 84 79 84 L121 84 Q131 84 133 94 L134 102 Q127 112 120 102 Q112 116 103 102 Q94 114 86 102 Q78 112 70 103 Z" fill="#A9561C" />
      <ellipse cx="100" cy="86" rx="26" ry="3" fill="#fff" opacity="0.25" />
      <Face cx={100} cy={132} />
      <g transform="translate(100 74)">
        <path d="M-12 8 Q-14 -2 -4 -2 Q-2 -10 6 -6 Q14 -6 12 4 Q14 10 6 10 L-8 10 Q-14 10 -12 8Z" fill="#fff" />
        <circle cx="3" cy="-10" r="6" fill="#E85A8A" />
        <circle cx="1" cy="-12" r="1.6" fill="#fff" opacity="0.7" />
        <path d="M4 -16 Q6 -22 11 -24" stroke="#5E9B3D" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </g>
    </>
  );
}

export default function DessertArt({ kind, id, className }: { kind: DessertKind; id: string; className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-hidden="true">
      {kind === "flan" ? <Flan /> : <PannaCotta id={id} kiwi={kind === "panna-kiwi"} />}
    </svg>
  );
}
