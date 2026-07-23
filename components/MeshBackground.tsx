"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

const BRAND_COLORS = [
  "#4fa8ab",
  "#8ec9c9",
  "#ffbe9e",
  "#ffdcc7",
  "#67b8a4",
  "#cdef86",
];

interface MeshBackgroundProps {
  colors?: string[];
  distortion?: number;
  swirl?: number;
  speed?: number;
  veilClassName?: string;
}

export function MeshBackground({
  colors = BRAND_COLORS,
  distortion = 0.85,
  swirl = 0.45,
  speed = 0.25,
  veilClassName = "bg-white/10",
}: MeshBackgroundProps) {
  const [motionOk, setMotionOk] = useState(true);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setMotionOk(!query.matches);
    const onChange = (e: MediaQueryListEvent) => setMotionOk(!e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden>
      <MeshGradient
        colors={colors}
        speed={motionOk ? speed : 0}
        distortion={distortion}
        swirl={swirl}
        style={{ width: "100%", height: "100%" }}
      />
      <div className={`absolute inset-0 ${veilClassName}`} />
    </div>
  );
}
