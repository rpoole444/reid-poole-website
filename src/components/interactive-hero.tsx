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
      <div className="instrument">
        <div className="bell" />
        <div className="leadpipe" />
        <div className="valve valve-one" />
        <div className="valve valve-two" />
        <div className="valve valve-three" />
      </div>
      <div className="sound-wave wave-one" />
      <div className="sound-wave wave-two" />
      <div className="sound-wave wave-three" />
      <span className="spark spark-one" />
      <span className="spark spark-two" />
      <span className="spark spark-three" />
    </div>
  );
}
