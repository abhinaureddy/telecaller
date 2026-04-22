export function Waveform({ className = "" }: { className?: string }) {
  const bars = [
    18, 34, 52, 28, 70, 44, 88, 62, 100, 76, 120, 88, 140, 104, 156, 118, 140,
    92, 116, 70, 84, 48, 62, 32, 44, 22, 30, 14, 40, 24, 58, 38, 76, 52, 96, 68,
    112, 82, 128, 94, 142, 102, 152, 110, 138, 96, 120, 82, 100, 68, 80, 54, 62,
    40, 46, 28, 34, 20,
  ];

  const width = 520;
  const height = 180;
  const barWidth = 4;
  const gap = 5;
  const totalW = bars.length * (barWidth + gap);
  const startX = (width - totalW) / 2;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wv" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#0070B0" />
          <stop offset="50%" stopColor="#4040A0" />
          <stop offset="100%" stopColor="#802090" />
        </linearGradient>
      </defs>
      <g>
        {bars.map((h, i) => {
          const x = startX + i * (barWidth + gap);
          const y = (height - h) / 2;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={barWidth}
              height={h}
              rx={2}
              fill="url(#wv)"
              opacity={0.35 + (1 - Math.abs(i - bars.length / 2) / (bars.length / 2)) * 0.65}
            >
              <animate
                attributeName="height"
                values={`${h};${h * 0.55};${h}`}
                dur={`${2 + (i % 5) * 0.3}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="y"
                values={`${y};${y + h * 0.225};${y}`}
                dur={`${2 + (i % 5) * 0.3}s`}
                repeatCount="indefinite"
              />
            </rect>
          );
        })}
      </g>
      <line
        x1={startX}
        y1={height / 2}
        x2={startX + totalW - gap}
        y2={height / 2}
        stroke="url(#wv)"
        strokeOpacity="0.15"
        strokeWidth="1"
      />
    </svg>
  );
}
