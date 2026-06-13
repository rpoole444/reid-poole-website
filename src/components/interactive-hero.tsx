"use client";

import { useRef } from "react";

export function InteractiveHero() {
  const sceneRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    sceneRef.current?.style.setProperty("--pointer-x", `${x * 14}deg`);
    sceneRef.current?.style.setProperty("--pointer-y", `${y * -14}deg`);
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
      <svg
        className="instrument"
        viewBox="0 0 760 360"
        role="presentation"
      >
        <defs>
          <linearGradient id="brass-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#fff0b0" />
            <stop offset="0.22" stopColor="#dba64e" />
            <stop offset="0.52" stopColor="#7a401d" />
            <stop offset="0.78" stopColor="#e6b55d" />
            <stop offset="1" stopColor="#7f451f" />
          </linearGradient>
          <linearGradient id="brass-dark" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#603018" />
            <stop offset="0.45" stopColor="#e1ad53" />
            <stop offset="0.7" stopColor="#fff0a6" />
            <stop offset="1" stopColor="#6b3518" />
          </linearGradient>
          <radialGradient id="bell-face" cx="62%" cy="42%" r="68%">
            <stop offset="0" stopColor="#20100a" />
            <stop offset="0.18" stopColor="#4a2412" />
            <stop offset="0.2" stopColor="#dda34c" />
            <stop offset="0.55" stopColor="#f5d77f" />
            <stop offset="0.78" stopColor="#a35b27" />
            <stop offset="1" stopColor="#4e2612" />
          </radialGradient>
          <filter id="brass-shadow" x="-20%" y="-25%" width="150%" height="170%">
            <feDropShadow
              dx="18"
              dy="22"
              stdDeviation="15"
              floodColor="#000"
              floodOpacity="0.48"
            />
          </filter>
        </defs>

        <g filter="url(#brass-shadow)">
          <path
            className="trumpet-tube"
            d="M92 188 H516 C563 188 591 169 607 137"
          />
          <path
            className="trumpet-tube trumpet-leadpipe"
            d="M89 152 H354 C384 152 397 137 397 112 V95"
          />
          <path
            className="trumpet-tube trumpet-main-slide"
            d="M357 210 V274 C357 299 337 312 313 312 H279 C254 312 236 297 236 273 V221"
          />
          <path
            className="trumpet-tube trumpet-third-slide"
            d="M437 211 V260 C437 278 451 290 469 290 H493 C511 290 524 277 524 260 V218"
          />

          <g className="trumpet-valves">
            {[0, 1, 2].map((valve) => {
              const x = 330 + valve * 56;

              return (
                <g key={x}>
                  <rect
                    x={x}
                    y="111"
                    width="39"
                    height="125"
                    rx="8"
                    fill="url(#brass-dark)"
                    stroke="#f4cf78"
                    strokeWidth="3"
                  />
                  <rect
                    x={x + 7}
                    y="92"
                    width="25"
                    height="30"
                    rx="5"
                    fill="url(#brass-body)"
                  />
                  <path
                    d={`M${x + 19.5} 92 V63`}
                    stroke="url(#brass-body)"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx={x + 19.5}
                    cy="58"
                    rx="25"
                    ry="8"
                    fill="url(#brass-body)"
                  />
                  <rect
                    x={x - 3}
                    y="225"
                    width="45"
                    height="13"
                    rx="5"
                    fill="url(#brass-body)"
                  />
                </g>
              );
            })}
          </g>

          <path
            d="M303 138 H492"
            stroke="#f5d479"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.78"
          />
          <path
            d="M312 209 H492"
            stroke="#75401e"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <rect
            x="282"
            y="135"
            width="20"
            height="78"
            rx="8"
            fill="url(#brass-body)"
          />
          <path
            d="M287 128 C267 110 249 112 238 127"
            fill="none"
            stroke="url(#brass-body)"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M508 130 C565 124 604 101 635 67 L647 294 C611 257 568 235 508 229 Z"
            fill="url(#brass-body)"
            stroke="#f3cc70"
            strokeWidth="4"
          />
          <ellipse
            cx="648"
            cy="180"
            rx="82"
            ry="126"
            fill="url(#bell-face)"
            stroke="#f4ce75"
            strokeWidth="7"
          />
          <ellipse
            cx="655"
            cy="179"
            rx="38"
            ry="58"
            fill="#2a140c"
            opacity="0.84"
          />

          <path
            d="M92 152 H54"
            stroke="url(#brass-body)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M55 152 H28"
            stroke="url(#brass-dark)"
            strokeWidth="11"
            strokeLinecap="round"
          />
          <path
            d="M28 152 H12"
            stroke="#e7be69"
            strokeWidth="5"
            strokeLinecap="round"
          />

          <path
            d="M286 241 H308"
            stroke="#f0c56c"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M468 257 H494"
            stroke="#f0c56c"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <circle
            cx="282"
            cy="241"
            r="10"
            fill="none"
            stroke="#e5b45b"
            strokeWidth="6"
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
