"use client";

import { useRef } from "react";

export function InteractiveHero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    sceneRef.current?.style.setProperty("--pointer-x", `${x * 11}deg`);
    sceneRef.current?.style.setProperty("--pointer-y", `${y * -11}deg`);
  }

  return (
    <div
      className="visual-stage"
      ref={sceneRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => {
        sceneRef.current?.style.setProperty("--pointer-x", "0deg");
        sceneRef.current?.style.setProperty("--pointer-y", "0deg");
      }}
      aria-hidden="true"
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <svg className="instrument" viewBox="0 0 840 360" role="presentation">
        <defs>
          <linearGradient id="brass-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff2b3" />
            <stop offset="0.2" stopColor="#e9bd62" />
            <stop offset="0.5" stopColor="#8b4b22" />
            <stop offset="0.76" stopColor="#dca44b" />
            <stop offset="1" stopColor="#6d3518" />
          </linearGradient>
          <linearGradient id="brass-horizontal" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#75401e" />
            <stop offset="0.35" stopColor="#e6b65a" />
            <stop offset="0.62" stopColor="#fff0a5" />
            <stop offset="1" stopColor="#743b1b" />
          </linearGradient>
          <linearGradient id="bell-flare" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#8b4a20" />
            <stop offset="0.38" stopColor="#e9b85b" />
            <stop offset="0.68" stopColor="#ffeda0" />
            <stop offset="1" stopColor="#a95e28" />
          </linearGradient>
          <radialGradient id="bell-face" cx="38%" cy="42%" r="72%">
            <stop offset="0" stopColor="#241109" />
            <stop offset="0.5" stopColor="#653118" />
            <stop offset="0.78" stopColor="#d6953e" />
            <stop offset="1" stopColor="#ffe99a" />
          </radialGradient>
          <filter id="brass-shadow" x="-20%" y="-30%" width="150%" height="180%">
            <feDropShadow
              dx="15"
              dy="20"
              stdDeviation="13"
              floodColor="#000"
              floodOpacity="0.48"
            />
          </filter>
        </defs>

        <g className="trumpet" filter="url(#brass-shadow)">
          <path
            className="trumpet-tube trumpet-leadpipe"
            d="M104 160 H302 C320 160 330 172 330 190"
          />
          <path
            className="trumpet-tube trumpet-bell-pipe"
            d="M300 216 H570 C601 216 621 206 642 188"
          />
          <path
            className="trumpet-tube trumpet-main-slide"
            d="M312 164 H248 C218 164 203 181 203 209 V238 C203 266 219 282 248 282 H335"
          />

          <g className="trumpet-valves">
            {[0, 1, 2].map((valve) => {
              const x = 330 + valve * 54;

              return (
                <g key={x}>
                  <rect
                    x={x}
                    y="132"
                    width="36"
                    height="116"
                    rx="7"
                    fill="url(#brass-body)"
                    stroke="#f2ca72"
                    strokeWidth="2.5"
                  />
                  <rect
                    x={x + 6}
                    y="113"
                    width="24"
                    height="24"
                    rx="4"
                    fill="url(#brass-horizontal)"
                  />
                  <path
                    d={`M${x + 18} 114 V88`}
                    stroke="url(#brass-body)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx={x + 18}
                    cy="83"
                    rx="20"
                    ry="7"
                    fill="url(#brass-horizontal)"
                    stroke="#ffe89a"
                    strokeWidth="1.5"
                  />
                  <rect
                    x={x - 2}
                    y="242"
                    width="40"
                    height="11"
                    rx="5"
                    fill="url(#brass-horizontal)"
                  />
                  <path
                    d={`M${x + 8} 145 H${x + 28}`}
                    stroke="#fff2ad"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.68"
                  />
                </g>
              );
            })}
          </g>

          <path
            className="trumpet-tube trumpet-valve-slide"
            d="M366 230 V273 C366 290 377 299 394 299 H407 C424 299 435 290 435 273 V230"
          />
          <path
            className="trumpet-tube trumpet-third-slide"
            d="M474 231 V266 C474 282 485 291 502 291 H528 C545 291 556 281 556 265 V226"
          />

          <path
            d="M318 177 H508"
            stroke="#ffe99b"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.68"
          />
          <path
            d="M320 216 H542"
            stroke="#6d3619"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <rect
            x="313"
            y="174"
            width="14"
            height="47"
            rx="6"
            fill="url(#brass-body)"
          />
          <path
            d="M316 175 C301 151 279 149 266 165"
            fill="none"
            stroke="url(#brass-body)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle
            cx="267"
            cy="164"
            r="8"
            fill="none"
            stroke="#e8b65b"
            strokeWidth="4"
          />

          <path
            d="M548 190 C590 184 625 164 667 126 C689 106 710 91 734 80 L734 280 C707 266 685 250 664 231 C624 197 590 184 548 181 Z"
            fill="url(#bell-flare)"
            stroke="#f2c76c"
            strokeWidth="3"
          />
          <ellipse
            cx="738"
            cy="180"
            rx="37"
            ry="108"
            fill="url(#bell-face)"
            stroke="#f6d17a"
            strokeWidth="6"
          />
          <ellipse
            cx="733"
            cy="180"
            rx="16"
            ry="72"
            fill="#2b140b"
            opacity="0.88"
          />
          <path
            d="M575 188 C622 173 670 126 714 98"
            fill="none"
            stroke="#fff1aa"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.5"
          />

          <path
            d="M104 160 H76"
            stroke="url(#brass-body)"
            strokeWidth="13"
            strokeLinecap="round"
          />
          <path
            d="M76 160 H50"
            stroke="url(#brass-horizontal)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M50 160 H35"
            stroke="#edc36d"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M22 149 H35 V171 H22 C29 165 29 155 22 149 Z"
            fill="url(#brass-horizontal)"
            stroke="#f0cb77"
            strokeWidth="2"
          />

          <path
            d="M309 270 H331"
            stroke="#edbd62"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle
            cx="301"
            cy="270"
            r="8"
            fill="none"
            stroke="#e5ad52"
            strokeWidth="4"
          />
          <path
            d="M512 263 H540"
            stroke="#edbd62"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </g>
      </svg>
      <div className="sound-wave wave-one" />
      <div className="sound-wave wave-two" />
      <div className="sound-wave wave-three" />
      <span className="spark spark-one" />
      <span className="spark spark-two" />
      <span className="spark spark-three" />
    </div>
  );
}
