"use client";

import { useEffect, useRef } from "react";

const CandleChart = () => {
  const canvasRef = useRef(null);
  const numCandles = 6;

  const getRandomHeight = () => Math.random() * 100 + 50;

  const candles = Array.from({ length: numCandles }, () => ({
    height: getRandomHeight(),
    speed: Math.random() * 2 + 1,
  }));

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      candles.forEach((candle, index) => {
        const x = canvas.width - index * 70 - 50;

        // Update the height to create the up and down effect
        candle.height += Math.sin(Date.now() * 0.002 * candle.speed) * 1.5;

        // Glowing effect
        ctx.shadowColor = index % 2 === 0 ? "#00e1ff" : "#a855f7";
        ctx.shadowBlur = 20;

        // Candle body
        ctx.fillStyle = index % 2 === 0 ? "#00e1ff" : "#a855f7";
        ctx.fillRect(x, canvas.height - candle.height - 10, 40, candle.height);
      });

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={500}
      height={300}
      style={{ backgroundColor: "#0d0d25", display: "block", margin: "auto" }}
    />
  );
};

export default CandleChart;
