"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  className?: string;
  cellSize?: number;
  cellThickness?: number;
  cellColor?: string;
  variant?: "dot" | "line";
}

export function GridPattern({
  className,
  cellSize = 40,
  cellThickness = 1,
  cellColor = "rgba(120, 120, 120, 0.2)",
  variant = "line",
}: GridPatternProps) {
  const randId = React.useId();

  return (
    <div
      className={cn(
        "absolute inset-0 z-0 opacity-50 -z-10",
        className
      )}
      aria-hidden="true"
    >
      {variant === "line" ? (
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`${randId}-grid-pattern`}
              width={cellSize}
              height={cellSize}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={`M ${cellSize} 0 L 0 0 0 ${cellSize}`}
                fill="none"
                stroke={cellColor}
                strokeWidth={cellThickness}
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#${randId}-grid-pattern)`}
          />
        </svg>
      ) : (
        <svg
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id={`${randId}-dots-pattern`}
              width={cellSize}
              height={cellSize}
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx={cellSize / 2}
                cy={cellSize / 2}
                r={cellThickness}
                fill={cellColor}
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill={`url(#${randId}-dots-pattern)`}
          />
        </svg>
      )}
    </div>
  );
} 