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
        viewBox="0 0 840 360"
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
          <linearGradient id="bell-flare" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#7d411e" />
            <stop offset="0.25" stopColor="#e7b65c" />
            <stop offset="0.58" stopColor="#fff0a2" />
            <stop offset="0.82" stopColor="#b8692d" />
            <stop offset="1" stopColor="#6a3418" />
          </linearGradient>
          <radialGradient id="bell-face" cx="42%" cy="42%" r="70%">
            <stop offset="0" stopColor="#2a140c" />
            <stop offset="0.52" stopColor="#6b3518" />
            <stop offset="0.76" stopColor="#e4ae52" />
            <stop offset="1" stopColor="#fff0a3" />
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
            d="M298 211 H568 C604 211 627 198 646 175"
          />
          <path
            className="trumpet-tube trumpet-leadpipe"
            d="M111 129 H306 C329 129 343 143 343 164"
          />
          <path
            className="trumpet-tube trumpet-main-slide"
            d="M298 130 H245 C211 130 192 150 192 181 V218 C192 250 212 269 245 269 H313"
          />
          <path
            className="trumpet-tube trumpet-first-slide"
            d="M377 205 V274 C377 292 389 302 408 302 H425 C443 302 455 291 455 273 V221"
          />
          <path
            className="trumpet-tube trumpet-third-slide"
            d="M476 207 V260 C476 279 490 291 509 291 H538 C557 291 570 278 570 258 V218"
          />

          <g className="trumpet-valves">
            {[0, 1, 2].map((valve) => {
              const x = 343 + valve * 52;

              return (
                <g key={x}>
                  <rect
                    x={x}
                    y="116"
                    width="35"
                    height="119"
                    rx="7"
                    fill="url(#brass-dark)"
                    stroke="#f4cf78"
                    strokeWidth="2.5"
                  />
                  <rect
                    x={x + 6}
                    y="98"
                    width="23"
                    height="24"
                    rx="4"
                    fill="url(#brass-body)"
                  />
                  <path
                    d={`M${x + 17.5} 98 V72`}
                    stroke="url(#brass-body)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx={x + 17.5}
                    cy="68"
                    rx="22"
                    ry="7"
                    fill="url(#brass-body)"
                    stroke="#fff0a6"
                    strokeWidth="1.5"
                  />
                  <rect
                    x={x - 2}
                    y="225"
                    width="39"
                    height="12"
                    rx="5"
                    fill="url(#brass-body)"
                  />
                  <path
                    d={`M${x + 5} 129 H${x + 30}`}
                    stroke="#fff0aa"
                    strokeWidth="2"
                    strokeLinecap="round"
                    opacity="0.72"
                  />
                </g>
              );
            })}
          </g>

          <path
            d="M327 141 H505"
            stroke="#f5d479"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.78"
          />
          <path
            d="M320 211 H518"
            stroke="#75401e"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <rect
            x="309"
            y="139"
            width="15"
            height="75"
            rx="6"
            fill="url(#brass-body)"
          />
          <path
            d="M319 137 C303 116 282 115 270 130"
            fill="none"
            stroke="url(#brass-body)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle
            cx="273"
            cy="128"
            r="9"
            fill="none"
            stroke="#e7b95f"
            strokeWidth="5"
          />

          <path
            d="M548 174 C602 167 646 139 699 87 L699 273 C647 224 601 199 548 193 Z"
            fill="url(#bell-flare)"
            stroke="#f3cc70"
            strokeWidth="3"
          />
          <ellipse
            cx="702"
            cy="180"
            rx="31"
            ry="103"
            fill="url(#bell-face)"
            stroke="#f4ce75"
            strokeWidth="6"
          />
          <ellipse
            cx="698"
            cy="180"
            rx="13"
            ry="68"
            fill="#30170c"
            opacity="0.8"
          />
          <path
            d="M568 179 C611 168 654 135 688 102"
            fill="none"
            stroke="#fff2ad"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.58"
          />

          <path
            d="M111 129 H79"
            stroke="url(#brass-body)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M80 129 H52"
            stroke="url(#brass-dark)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M53 129 H31"
            stroke="#f0cc7a"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M30 116 C42 118 46 124 46 129 C46 135 42 141 30 143 Z"
            fill="url(#brass-dark)"
            stroke="#f2ce7c"
            strokeWidth="2"
          />

          <path
            d="M307 248 H329"
            stroke="#f0c56c"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M511 257 H541"
            stroke="#f0c56c"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle
            cx="301"
            cy="248"
            r="9"
            fill="none"
            stroke="#e5b45b"
            strokeWidth="5"
          />
          <path
            d="M518 159 C537 145 552 150 559 162"
            fill="none"
            stroke="#dca64f"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <circle
            cx="560"
            cy="164"
            r="11"
            fill="none"
            stroke="#eabe66"
            strokeWidth="5"
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
