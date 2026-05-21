import React from 'react';

export function BearFaceSvg({ className = "w-8 h-8", color = "#F5C842" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Ears */}
      <circle cx="28" cy="28" r="16" fill={color} />
      <circle cx="28" cy="28" r="9" fill="#2C2416" />
      <circle cx="72" cy="28" r="16" fill={color} />
      <circle cx="72" cy="28" r="9" fill="#2C2416" />
      {/* Head */}
      <ellipse cx="50" cy="56" rx="38" ry="32" fill={color} />
      {/* Eyes */}
      <circle cx="38" cy="48" r="4.5" fill="#2C2416" />
      <circle cx="62" cy="48" r="4.5" fill="#2C2416" />
      {/* Eyebrows */}
      <path d="M30 40 Q38 37 44 41" stroke="#2C2416" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M70 40 Q62 37 56 41" stroke="#2C2416" strokeWidth="3" strokeLinecap="round" fill="none" />
      {/* Snout */}
      <ellipse cx="50" cy="62" rx="15" ry="12" fill="#FDF8EE" />
      <ellipse cx="50" cy="57" rx="7" ry="5" fill="#2C2416" />
      {/* Mouth */}
      <path d="M50 61 Q50 68 43 67" stroke="#2C2416" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M50 61 Q50 68 57 67" stroke="#2C2416" strokeWidth="2.5" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function BearPawSvg({ className = "w-64 h-64" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="currentColor" className={`${className} text-[#F5C842]/6`} xmlns="http://www.w3.org/2000/svg">
      {/* Large pad */}
      <path d="M30 65 Q50 48 70 65 Q75 75 65 85 Q50 92 35 85 Q25 75 30 65 Z" />
      {/* 4 small pads / toes */}
      <ellipse cx="22" cy="42" rx="8" ry="11" transform="rotate(-20 22 42)" />
      <ellipse cx="40" cy="30" rx="9" ry="12" />
      <ellipse cx="60" cy="30" rx="9" ry="12" />
      <ellipse cx="78" cy="42" rx="8" ry="11" transform="rotate(20 78 42)" />
    </svg>
  );
}

export function SunflowerSvg({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={`${className} animate-sunflower-spin`} xmlns="http://www.w3.org/2000/svg" style={{ transformOrigin: 'center center' }}>
      {/* Petals */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = i * (360 / 12);
        return (
          <path
            key={i}
            d="M50 34 C44 20, 56 20, 50 34"
            fill="#F5C842"
            stroke="#D4A420"
            strokeWidth="1.2"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
      {/* Center disk */}
      <circle cx="50" cy="50" r="17" fill="#42311C" stroke="#2C2416" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="11" fill="none" stroke="#634A2E" strokeWidth="2" strokeDasharray="3,3" />
      <circle cx="50" cy="50" r="7" fill="#201509" />
    </svg>
  );
}

export function SteamWispsSvg({ className = "w-6 h-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 48" fill="none" stroke="#F5C842" strokeWidth="2.5" strokeLinecap="round" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M6 42 C12 32, 2 24, 10 14 C14 6, 8 2, 10 2">
        <animate attributeName="stroke-dasharray" values="100;100" dur="1s" repeatCount="indefinite" />
      </path>
      <path d="M16 44 C22 36, 12 28, 18 18 C22 10, 16 6, 18 2">
        <animate attributeName="stroke-dasharray" values="100;100" dur="1s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}

export function WheatStalkSvg({ className = "w-12 h-32", color = "#C4A060" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 30 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M15 95 V20" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Leaves/grains on left and right */}
      {Array.from({ length: 8 }).map((_, i) => {
        const y = 25 + i * 8;
        return (
          <g key={i}>
            {/* Left grain */}
            <path d={`M15 ${y} C6 ${y - 3}, 6 ${y - 10}, 15 ${y - 5}`} fill={color} stroke="#2C2416" strokeWidth="0.75" />
            <path d={`M8 ${y - 11} L14 ${y - 5}`} stroke={color} strokeWidth="1" strokeLinecap="round" />
            {/* Right grain */}
            <path d={`M15 ${y} C24 ${y - 3}, 24 ${y - 10}, 15 ${y - 5}`} fill={color} stroke="#2C2416" strokeWidth="0.75" />
            <path d={`M22 ${y - 11} L16 ${y - 5}`} stroke={color} strokeWidth="1" strokeLinecap="round" />
          </g>
        );
      })}
      {/* Top single grain */}
      <path d="M15 20 C11 13, 19 13, 15 20" fill={color} stroke="#2C2416" strokeWidth="0.75" />
      <path d="M15 11 L15 18" stroke={color} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

export function SparkleStarSvg({ className = "w-4 h-4", style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" fill="#F5C842" className={className} style={style} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0 L15.5 8.5 L24 12 L15.5 15.5 L12 24 L8.5 15.5 L0 12 L8.5 8.5 Z" />
    </svg>
  );
}

export function HeartSvg({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#F5C842" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21.35 l-1.45-1.32 C5.4 15.36 2 12.28 2 8.5 C2 5.42 4.42 3 7.5 3 c1.74 0 3.41 0.81 4.5 2.09 C13.09 3.81 14.76 3 16.5 3 C19.58 3 22 5.42 22 8.5 c0 3.78-3.4 6.86-8.55 11.54 L12 21.35 Z" fill="#F5C842" />
    </svg>
  );
}
