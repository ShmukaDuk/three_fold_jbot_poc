/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";

interface PixelAgentProps {
  status: "idle" | "thinking" | "completed" | "typing";
  speechBubble?: string;
}

export default function PixelAgent({ status, speechBubble }: PixelAgentProps) {
  const [blink, setBlink] = useState(false);
  const [bounce, setBounce] = useState(0);
  const [micGlow, setMicGlow] = useState(true);

  // Blinking eyes animation
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 200);
    }, 3000);

    return () => clearInterval(blinkInterval);
  }, []);

  // Soft bouncing posture animation
  useEffect(() => {
    const bounceInterval = setInterval(() => {
      setBounce((b) => (b === 0 ? 1 : 0));
    }, 600);

    return () => clearInterval(bounceInterval);
  }, []);

  // Flashing microphone LED
  useEffect(() => {
    const micInterval = setInterval(() => {
      setMicGlow((g) => !g);
    }, 450);

    return () => clearInterval(micInterval);
  }, []);

  // 32x32 custom handcrafted retro pixel grid representing J-Bot: a handsome blonde construction expert wearing a yellow/orange safety helmet, headphones, and a hi-vis vest.
  // Let's express this using high-fidelity vector squares for absolute sharp rendering
  const pixelSize = 8;
  const gridWidth = 32;
  const gridHeight = 32;

  // Let's define the color palette map for J-Bot (Blonde hair, Orange Vest)
  const C = {
    x: "transparent",
    h: "#f97316", // Safety orange hi-vis vest
    b: "#0f172a", // Dark navy/slate
    p: "#fbbf24", // Blonde golden hair
    l: "#fef08a", // Light blonde highlights
    f: "#ffedd5", // Peach skin
    d: "#fed7aa", // Shadow peach
    w: "#ffffff", // Pure white
    a: "#1e3a8a", // Matte dark-blue safety helmet/headset
    g: "#0ea5e9", // Cool cyan indicator arc
    k: "#1e293b", // Slate shadow
    y: "#fed7aa"  // Peach blush contour
  };

  // 32 x 32 precise pixel art map representing the cute constructor gamer girl
  const pixelGrid: string[][] = [
    // 0 - 3 (Top / air / cap space)
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","x","x","x","x","h","h","h","h","h","h","h","h","h","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","x","x","h","h","h","h","h","h","h","h","h","h","h","h","h","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","x","h","h","h","h","h","h","h","h","h","h","h","h","h","h","h","x","x","x","x","x","x","x","x","x","x"],
    // 4 - 7 (Hair top & headset start)
    ["x","x","x","x","x","x","p","p","p","p","p","p","p","p","p","p","p","p","p","p","p","p","p","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","a","a","p","p","p","p","p","p","p","p","p","p","p","p","p","p","p","a","a","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","a","a","a","a","p","p","p","p","p","p","p","p","p","p","p","p","p","a","a","a","a","x","x","x","x","x","x","x"],
    ["x","x","x","x","a","g","g","a","l","p","p","p","l","l","l","p","p","p","p","p","p","a","g","g","a","x","x","x","x","x","x","x"],
    // 8 - 11 (Headband arc & face sides)
    ["x","x","x","x","a","g","g","a","f","f","f","f","f","f","f","f","f","f","f","p","p","a","g","g","a","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","a","a","f","f","f","f","f","f","f","f","f","f","f","f","f","f","x","a","a","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","f","f","w","w","f","f","f","f","f","f","f","w","w","f","f","f","x","x","x","x","x","x","x","x","x","x"],
    // 12 - 15 (Eyes and Blush area)
    ["x","x","x","x","x","x","f","f","b","b","f","f","f","f","f","f","f","b","b","f","f","f","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","f","y","b","b","f","f","f","f","f","f","f","b","b","y","f","f","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","f","f","f","f","f","f","b","f","f","b","f","f","f","f","f","f","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","f","x","x","x","x","x","x","x","x","x","x"],
    // 16 - 19 (Mouth & Neck / Mic boom)
    ["x","x","x","x","x","x","x","f","f","f","b","b","b","b","b","b","f","f","f","f","f","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","x","x","f","f","f","f","f","f","f","f","f","f","f","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","x","x","x","b","b","f","f","f","f","b","b","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","x","x","k","h","h","h","h","h","h","h","h","k","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    // 20 - 23 (Construction vest & shoulders)
    ["x","x","x","x","x","x","x","k","h","y","y","w","h","h","w","y","y","h","k","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","k","k","h","y","y","w","h","h","w","y","y","h","k","k","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","k","k","b","b","h","h","h","h","h","h","h","h","b","b","k","k","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","k","k","b","b","b","b","h","h","h","h","h","h","b","b","b","b","k","k","x","x","x","x","x","x","x","x","x","x"],
    // 24 - 27 (typing hands setup)
    ["x","x","x","k","k","b","b","b","b","b","b","w","w","w","w","b","b","b","b","b","b","k","k","x","x","x","x","x","x","x","x","x"],
    ["x","x","k","k","b","b","b","b","b","b","b","w","w","w","w","b","b","b","b","b","b","b","k","k","x","x","x","x","x","x","x","x"],
    ["x","x","k","b","b","b","b","b","b","b","f","f","f","f","f","f","b","b","b","b","b","b","b","k","x","x","x","x","x","x","x","x"],
    ["x","x","k","b","b","b","b","b","f","f","f","f","f","f","f","f","f","f","b","b","b","b","b","k","x","x","x","x","x","x","x","x"],
    // 28 - 31 (base / keyboard rows)
    ["x","x","k","b","b","b","b","b","w","w","w","w","w","w","w","w","w","w","b","b","b","b","b","k","x","x","x","x","x","x","x","x"],
    ["x","x","k","k","k","k","k","k","k","k","k","k","k","k","k","k","k","k","k","k","k","k","k","k","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"],
    ["x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x","x"]
  ];

  // Dynamically alter grid logic depending on blink/bounce status
  const getPixelColor = (rowIdx: number, colIdx: number, originalCode: string): string => {
    // If blinking eyes, close eyes at index row 12-13, col 8-9 and 17-18
    if (blink && (rowIdx === 12 || rowIdx === 13) && ((colIdx >= 8 && colIdx <= 9) || (colIdx >= 17 && colIdx <= 18))) {
      return C.f; // replace eye pixels with skin tone
    }

    // Mic glow boom at row 17, col 6
    if (rowIdx === 17 && colIdx === 6) {
      return micGlow ? C.g : C.b;
    }

    // Bounce translation
    if (bounce === 1 && rowIdx > 3 && rowIdx < 23) {
      // Offset torso and hair slightly upwards
      const lowerPixel = pixelGrid[rowIdx + 1]?.[colIdx];
      return (C as any)[lowerPixel || "x"] || "transparent";
    }

    // Typing fingers animation
    if (status === "thinking" || status === "typing") {
      if (rowIdx === 26 || rowIdx === 27) {
        if ((colIdx + Math.floor(Date.now() / 150)) % 4 === 0) {
          return C.w; // render twitchy pixel coding fingers
        }
      }
    }

    return (C as any)[originalCode] || "transparent";
  };

  return (
    <div className="flex flex-col items-center">
      
      {/* 2D Animated Pixel Viewer Screen */}
      <div className="relative p-2 bg-[#12151c] rounded-2xl border-4 border-slate-700/80 shadow-2xl overflow-hidden aspect-square w-64 flex items-center justify-center">
        {/* Retro TV scanlines overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/15 to-transparent pointer-events-none z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none z-10"></div>
        
        {/* Digital terminal status crown */}
        <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[9px] font-mono tracking-wider z-20">
          <span className="text-slate-500 font-bold">SYSTEM_CORE: V2.4</span>
          <span className={`px-1.5 py-0.5 rounded uppercase font-bold ${
            status === "thinking" ? "bg-orange-500/20 text-orange-400 animate-pulse" : "bg-emerald-500/20 text-emerald-400"
          }`}>
            {status}
          </span>
        </div>

        {/* The SVG Grid Render */}
        <svg
          viewBox={`0 0 ${gridWidth * pixelSize} ${gridHeight * pixelSize}`}
          className="w-full h-full object-contain"
        >
          {pixelGrid.map((row, rIdx) =>
            row.map((colorKey, cIdx) => {
              const fill = getPixelColor(rIdx, cIdx, colorKey);
              if (fill === "transparent") return null;
              return (
                <rect
                  key={`${rIdx}-${cIdx}`}
                  x={cIdx * pixelSize}
                  y={rIdx * pixelSize}
                  width={pixelSize}
                  height={pixelSize}
                  fill={fill}
                />
              );
            })
          )}
        </svg>

        {/* Ambient room shadows */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-center pointer-events-none">
          <div className="h-1 bg-black/40 rounded-full blur-sm w-36"></div>
        </div>
      </div>

      {/* Retro Dialogue Speech Bubble bubble */}
      {speechBubble && (
        <div className="mt-4 relative bg-slate-900 border border-slate-800 text-slate-100 rounded-2xl p-3.5 max-w-sm shadow-xl font-mono text-[11px] leading-relaxed text-center">
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-t border-l border-slate-800 rotate-45"></div>
          <span className="text-orange-400 font-bold block mb-1 uppercase tracking-wider text-[10px]">📟 Agent J-Bot</span>
          <p className="text-slate-300 font-sans">{speechBubble}</p>
        </div>
      )}

    </div>
  );
}
