import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, MessageSquare } from "lucide-react";

export default function RunningConstructionDude() {
  const [positionX, setPositionX] = useState(20);
  const [isFacingRight, setIsFacingRight] = useState(true);
  const [speechBubble, setSpeechBubble] = useState<string | null>(
    "Heading to the site with Australia's best insulated panels!"
  );
  const [speechTimer, setSpeechTimer] = useState<NodeJS.Timeout | null>(null);
  const [isSprinting, setIsSprinting] = useState(false);

  // Quotes from our hardworking construction dude
  const quotes = [
    "AS 4902-2006 compliant panels on delivery! 📐",
    "These 150mm thick thermal cores are surprisingly light! 🧊",
    "Time is money! No delay damages under my watch today! ⏱️",
    "Three Fold panels: Acoustic barrier + premium steel! 🛡️",
    "Australian standards-certified sandwich cladding panels! 🇦🇺",
    "J-Bot says: always double-check the structural wind load! 💨",
    "Safety first, panels second! 🦺",
    "Moving these building panels to the commercial sector! 🏢",
    "High-density polyurethane core insulation rules! ❄️",
  ];

  // Continuous movement behavior (walking path across the screen)
  useEffect(() => {
    const speed = isSprinting ? 1.4 : 0.6;
    const interval = setInterval(() => {
      setPositionX((prev) => {
        if (isFacingRight) {
          return prev + speed;
        } else {
          return prev - speed;
        }
      });
    }, 40);

    return () => clearInterval(interval);
  }, [isFacingRight, isSprinting]);

  // Monitor position and switch directions cleanly to avoid dual-state setter warnings
  useEffect(() => {
    if (isFacingRight && positionX >= 105) {
      setIsFacingRight(false);
      if (Math.random() > 0.4) {
        triggerSpeech("All panels safely delivered! Turning back for more! 🔄");
      }
    } else if (!isFacingRight && positionX <= -5) {
      setIsFacingRight(true);
      if (Math.random() > 0.4) {
        triggerSpeech("Loading new premium panels for the cold storage warehouse! 🏃");
      }
    }
  }, [positionX, isFacingRight]);

  // Rotational randomized dialogue trigger (every 14 seconds)
  useEffect(() => {
    const speechInterval = setInterval(() => {
      if (!speechBubble) {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        triggerSpeech(randomQuote);
      }
    }, 14000);
    return () => clearInterval(speechInterval);
  }, [speechBubble]);

  const triggerSpeech = (text: string) => {
    if (speechTimer) clearTimeout(speechTimer);
    setSpeechBubble(text);
    const timer = setTimeout(() => {
      setSpeechBubble(null);
    }, 4500);
    setSpeechTimer(timer);
  };

  const handleDudeClick = () => {
    // Make him sprint on click!
    setIsSprinting(true);
    const clickQuotes = [
      "Turbo speed! Delivering these sandwich panel layers double-time! ⚡",
      "AS 4902 tracing triggered! High-velocity transport mode! 🚀",
      "These thermal panels handle extreme out-of-boundary heat! 🔥",
      "Whoa! Mind the step! Carrying delicate structural foam core! 📦",
      "Sprinting ahead! J-Bot workspace productivity multiplier active! 💪",
    ];
    triggerSpeech(clickQuotes[Math.floor(Math.random() * clickQuotes.length)]);
    
    // Resume normal walk speed after 3.5 seconds
    setTimeout(() => {
      setIsSprinting(false);
    }, 3500);
  };

  // Leg swing degree configurations based on speed
  const swingDuration = isSprinting ? 0.35 : 0.65;
  const legSwingMaxAngle = isSprinting ? 38 : 22;
  const bobbingAmount = isSprinting ? -6 : -3;

  return (
    <div className="relative h-36 bg-[#0f042e] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-end p-2 select-none group shadow-inner">
      {/* Dynamic Runway Background grids */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#210255] via-[#09021b] to-[#120138] opacity-60"></div>
      
      {/* Background neon visual guidelines (construction depth indicators) */}
      <div className="absolute top-2 left-4 text-[7.5px] font-mono uppercase tracking-widest text-slate-400 font-bold bg-[#ffffff08] px-2.5 py-1 rounded-md border border-white/5 flex items-center gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping"></span>
        AUTOMATED TRANS-PANEL LOGISTICS RUNWAY
      </div>

      {/* Grid cross lines referencing Australian Standards */}
      <div className="absolute top-0 right-4 h-full w-24 border-l border-r border-[#ffffff03] flex justify-between pointer-events-none text-[6.5px] font-mono text-slate-600/40 p-1">
        <span>GRID B4</span>
        <span>GRID B5</span>
      </div>

      {/* Runway surface line */}
      <div className="absolute inset-x-0 bottom-6 h-[4.5px] bg-[#2dccd3]/25 flex items-center justify-between">
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#2dccd3]/80 to-transparent"></div>
      </div>
      <div className="absolute inset-x-0 bottom-[14.5px] h-[1px] bg-slate-700/50 border-dashed border-t"></div>

      {/* Walking Construction Dude Container */}
      <div
        className="absolute bottom-4 z-20 cursor-pointer"
        style={{
          left: `${positionX}%`,
          transform: `translateX(-50%)`,
          transition: "left 40ms linear",
        }}
        onClick={handleDudeClick}
      >
        <div className="relative w-28 h-28 flex flex-col items-center justify-end">
          
          {/* Reactive speech bubble over his head */}
          {speechBubble && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.85 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute -top-14 bg-slate-900 text-slate-100 px-3 py-2 rounded-xl text-[10px] leading-snug border border-[#2dccd3]/50 shadow-2xl max-w-[190px] text-center whitespace-normal z-30 font-medium"
            >
              {/* Little speech tail pointing down */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 bg-slate-900 border-b border-r border-[#2dccd3]/40 rotate-45"></div>
              <p className="font-sans flex items-center justify-center gap-1">
                {speechBubble}
              </p>
            </motion.div>
          )}

          {/* Quick interactive instruction tooltip that appears on hover */}
          <div className="absolute -top-6 bg-amber-500/10 text-amber-400 font-mono text-[8px] font-bold tracking-wider px-1.5 py-0.5 rounded border border-amber-500/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 pointer-events-none">
            ⚡ CLICK DUDE TO SPRINT
          </div>

          {/* Core SVG Construction Dude Drawing with dynamic flipping */}
          <motion.div
            style={{ originX: 0.5, originY: 0.85 }}
            animate={{
              scaleX: isFacingRight ? 1 : -1,
              y: isSprinting ? [0, bobbingAmount, 0] : [0, -1.8, 0],
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: swingDuration / 2,
                ease: "easeInOut",
              },
              scaleX: { duration: 0.15 },
            }}
            className="w-20 h-20"
          >
            <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible">
              
              {/* Shadow underneath feet */}
              <ellipse
                cx="60"
                cy="105"
                rx="22"
                ry="3"
                fill="#000000"
                opacity="0.45"
              />

              {/* DUST PUFF EMITTERS (Swaying behind heels) */}
              {isSprinting && (
                <g>
                  {/* Dust cloud left */}
                  <motion.circle
                    cx="40"
                    cy="102"
                    r="4"
                    fill="#475569"
                    opacity="0.6"
                    animate={{
                      scale: [0.6, 1.6, 0],
                      x: [-2, -22],
                      y: [-1, -4],
                      opacity: [0.7, 0.4, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  />
                  {/* Dust cloud right */}
                  <motion.circle
                    cx="38"
                    cy="104"
                    r="3.2"
                    fill="#64748b"
                    opacity="0.5"
                    animate={{
                      scale: [0.5, 1.4, 0],
                      x: [-1, -16],
                      y: [0, -2],
                      opacity: [0.6, 0.3, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.3,
                      delay: 0.15,
                      ease: "easeOut",
                    }}
                  />
                </g>
              )}

              {/* LEFT LEG (Back placement) */}
              <motion.g
                style={{ originX: "60px", originY: "82px" }}
                animate={{ rotate: [-legSwingMaxAngle, legSwingMaxAngle, -legSwingMaxAngle] }}
                transition={{ repeat: Infinity, duration: swingDuration, ease: "easeInOut" }}
              >
                {/* Upper leg */}
                <line x1="60" y1="82" x2="52" y2="94" stroke="#1e293b" strokeWidth="6" strokeLinecap="round" />
                {/* Lower shin */}
                <line x1="52" y1="94" x2="48" y2="104" stroke="#1e293b" strokeWidth="5.5" strokeLinecap="round" />
                {/* Heavy work boot details (Steel Cap boot) */}
                <path d="M42 101 h11 v4 a2 2 0 0 1 -2 2 h-9 z" fill="#f97316" stroke="#9a3412" strokeWidth="1" />
                <rect x="39" y="103" width="5" height="4" rx="1.5" fill="#e2e8f0" /> {/* Steel cap accent */}
              </motion.g>

              {/* RIGHT LEG (Front placement) */}
              <motion.g
                style={{ originX: "64px", originY: "82px" }}
                animate={{ rotate: [legSwingMaxAngle, -legSwingMaxAngle, legSwingMaxAngle] }}
                transition={{ repeat: Infinity, duration: swingDuration, ease: "easeInOut" }}
              >
                {/* Upper leg */}
                <line x1="64" y1="82" x2="70" y2="94" stroke="#0f172a" strokeWidth="6.5" strokeLinecap="round" />
                {/* Lower shin */}
                <line x1="70" y1="94" x2="74" y2="104" stroke="#0f172a" strokeWidth="6" strokeLinecap="round" />
                {/* Heavy work boot details */}
                <path d="M68 101 h11 v4 a2 2 0 0 1 -2 2 h-9 z" fill="#f97316" stroke="#ea580c" strokeWidth="1" />
                <rect x="65" y="103" width="5" height="4" rx="1.5" fill="#f8fafc" />
              </motion.g>

              {/* BODY TORSO & HI-VIS RETRO-REFLECTIVE SAFETY VEST */}
              <g>
                {/* Blue denim heavy work undershirt */}
                <path d="M50 58 h24 v26 h-24 z" fill="#1d4ed8" rx="2" />
                
                {/* HI-VIS Orange safety waistcoat panel additions */}
                <path d="M49 59 h26 v21 h-26 z" fill="#ea580c" />
                <path d="M49 80 h26 v3 h-26 z" fill="#fbbf24" /> {/* Yellow warning band base */}
                
                {/* Reflective silver metallic suspender/safety-cross braces */}
                <rect x="52" y="59" width="3.5" height="21" fill="#e2e8f0" />
                <rect x="68.5" y="59" width="3.5" height="21" fill="#e2e8f0" />
                <line x1="49" y1="69" x2="75" y2="69" stroke="#e2e8f0" strokeWidth="2.5" /> {/* Mid body horizontal */}
                <line x1="49" y1="69" x2="75" y2="69" stroke="#cbd5e1" strokeWidth="0.8" /> {/* Inset shadow */}
              </g>

              {/* CHARMING FACE HEAD (No hair-cutoffs, sturdy and cute) */}
              <g>
                {/* Neck */}
                <rect x="58" y="49" width="8" height="10" fill="#fed7aa" rx="1" />
                
                {/* Head circle peach shell */}
                <circle cx="62" cy="42" r="13" fill="#ffedd5" />
                <circle cx="62" cy="42" r="13" fill="none" stroke="#fed7aa" strokeWidth="1" />

                {/* Happy work glasses / goggles (Teal insulated sky protective sunglasses) */}
                <path d="M51 39 h22 v5.5 h-22 z" fill="#06b6d4" opacity="0.9" rx="1.5" />
                <line x1="47" y1="41" x2="77" y2="41" stroke="#334155" strokeWidth="1.5" /> {/* Black frame */}
                <circle cx="56" cy="42" r="4.5" fill="none" stroke="#334155" strokeWidth="1.2" /> {/* Round glass borders */}
                <circle cx="68" cy="42" r="4.5" fill="none" stroke="#334155" strokeWidth="1.2" />
                <path d="M53 40.5 Q55 39 57 41" stroke="#ffffff" strokeWidth="0.8" fill="none" /> {/* Sun glint left lens */}
                <path d="M65 40.5 Q67 39 69 41" stroke="#ffffff" strokeWidth="0.8" fill="none" /> {/* Sun glint right lens */}

                {/* Cute confident smile */}
                <path d="M59 48 Q62 51 65 48" stroke="#0f172a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                {/* Rose pink cheek makeup accents */}
                <circle cx="51" cy="46" r="1.5" fill="#f43f5e" opacity="0.4" />
                <circle cx="73" cy="46" r="1.5" fill="#f43f5e" opacity="0.4" />
              </g>

              {/* SHINY REFLECTIVE HARD-HAT HELMET */}
              <g>
                {/* Main Yellow Shell helmet skull */}
                <path d="M47 33 C47 20, 77 20, 77 33 Z" fill="#fbbf24" />
                <path d="M49 28 Q62 17 75 28" stroke="#fef08a" strokeWidth="2.5" fill="none" /> {/* Specular light highlighting */}
                <circle cx="62" cy="18" r="1" fill="#fef08a" />
                
                {/* Safety Helmet Ridged comb detail */}
                <path d="M59 19 Q62 14 65 19 L63 32 L61 32 Z" fill="#ea580c" opacity="0.85" />

                {/* Helmet visor brim protruding forward */}
                <path d="M44 32 h36 v2.5 h-36 z" fill="#f59e0b" rx="0.5" />
                
                {/* Small grey headlamp detail installed on helmet center */}
                <g>
                  <rect x="58.5" y="22" width="7" height="4.5" rx="1" fill="#475569" />
                  <ellipse cx="62" cy="24.25" rx="2" ry="2" fill="#38bdf8" />
                  <ellipse cx="62" cy="24.25" rx="1" ry="1" fill="#ffffff" />
                  {/* Dynamic glow spotlight beam when sprinting */}
                  {isSprinting && (
                    <polygon
                      points="62,24 88,14 88,34"
                      fill="url(#headlamp-glow)"
                      opacity="0.25"
                    />
                  )}
                </g>
              </g>

              {/* THREE HEAVY THREE FOLD INSULATED PANELS - Cradled under arm / shoulder */}
              {/* These sway dynamically as he walking sprints */}
              <motion.g
                style={{ originX: "62px", originY: "69px" }}
                animate={{
                  rotate: isSprinting ? [-5, 5, -5] : [-2.5, 2.5, -2.5],
                  y: isSprinting ? [-1.5, 1.5, -1.5] : [0, 0.5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: swingDuration,
                  ease: "easeInOut",
                }}
              >
                {/* PANEL 3 (Background grey insulated sandwich panel) */}
                <g opacity="0.8">
                  {/* Back steel outer skin layer */}
                  <rect x="73" y="44" width="28" height="40" rx="2.5" fill="#475569" stroke="#334155" strokeWidth="1" />
                  {/* Interior insulation foam core sandwich line showing panel composition */}
                  <rect x="73" y="48" width="5" height="32" fill="#e2e8f0" />
                  <line x1="81" y1="44" x2="81" y2="84" stroke="#334155" strokeWidth="0.6" strokeDasharray="2 1" />
                  <line x1="88" y1="44" x2="88" y2="84" stroke="#334155" strokeWidth="0.6" strokeDasharray="3 1.5" />
                  {/* Outer profiling rib lines */}
                  <line x1="94" y1="44" x2="94" y2="84" stroke="#1e293b" strokeWidth="0.7" />
                </g>

                {/* PANEL 2 (Middle steel insulation slab) */}
                <g>
                  {/* Mid steel layer */}
                  <rect x="69" y="49" width="31" height="41" rx="2.5" fill="#334155" stroke="#1e293b" strokeWidth="1.2" />
                  {/* High visibility sandwich foam layer in center */}
                  <rect x="69" y="54" width="6.5" height="31" fill="#e2e8f0" />
                  <rect x="72" y="54" width="2" height="31" fill="#94a3b8" opacity="0.3" /> {/* Internal cell detail */}
                  <line x1="79" y1="49" x2="79" y2="90" stroke="#1e293b" strokeWidth="0.6" strokeDasharray="2 2" />
                  <line x1="86" y1="49" x2="86" y2="90" stroke="#1e293b" strokeWidth="0.7" />
                  <line x1="93" y1="49" x2="93" y2="90" stroke="#1e293b" strokeWidth="0.7" />
                </g>

                {/* PANEL 1 (Foreground core sandwich cladding with Three Fold branding) */}
                <g>
                  {/* Front steel wrapper skin */}
                  <rect x="65" y="55" width="33" height="42" rx="2.5" fill="#1e3a8a" stroke="#172554" strokeWidth="1.5" />
                  {/* Clean foam white insulation core exposed on left cut edge */}
                  <rect x="65" y="60" width="7" height="32" fill="#2dccd3" />
                  <rect x="68" y="60" width="2" height="32" fill="#ffffff" opacity="0.7" /> {/* Silver foil layer */}
                  
                  {/* Profile ribs on steel cladding skin */}
                  <line x1="77" y1="55" x2="77" y2="97" stroke="#172554" strokeWidth="1" />
                  <line x1="84" y1="55" x2="84" y2="97" stroke="#172554" strokeWidth="1" />
                  <line x1="91" y1="55" x2="91" y2="97" stroke="#172554" strokeWidth="1" />

                  {/* Tiny simulated branding stamp text (3-FOLD) */}
                  <rect x="78" y="72" width="12" height="6" rx="1" fill="#fbbf24" opacity="0.85" />
                  <text x="84" y="76.5" fill="#000000" fontSize="3.8" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                    3F
                  </text>
                </g>
              </motion.g>

              {/* HEAVY WORKMAN ARMS wrapping securely around the panels */}
              <g>
                {/* Left Shoulder base */}
                <circle cx="53" cy="62" r="3.5" fill="#1e293b" />
                
                {/* Arm holding panels (denim blue sleeve + muscular hand) */}
                <motion.g
                  style={{ originX: "53px", originY: "62px" }}
                  animate={{
                    rotate: isSprinting ? [0, 8, -4, 0] : [0, 3, -1, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: swingDuration,
                    ease: "easeInOut",
                  }}
                >
                  {/* Outer jacket sleeve */}
                  <path d="M50 63 Q43 72 63 76 Q78 77 75 66 Q63 68 53 63" fill="#1d4ed8" stroke="#172554" strokeWidth="1" />
                  
                  {/* Yellow safety sleeve cuff */}
                  <path d="M72 65 Q74 69 76 72" stroke="#ea580c" strokeWidth="2" fill="none" />
                  
                  {/* Strong peach grip hand clutching panel face */}
                  <circle cx="76" cy="68" r="4" fill="#ffedd5" stroke="#fed7aa" strokeWidth="0.8" />
                  <circle cx="78" cy="66" r="1.5" fill="#ffedd5" /> {/* Finger thumb grip bump */}
                  <circle cx="78" cy="70" r="1.5" fill="#ffedd5" />
                </motion.g>
              </g>

              {/* Helper GRADIENT DEFINITIONS for beautiful neon light beams */}
              <defs>
                <linearGradient id="headlamp-glow" x1="0" y1="0.5" x2="1" y2="0.5">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                </linearGradient>
              </defs>

            </svg>
          </motion.div>

        </div>
      </div>

      {/* Retro decorative trace labels in ambient margins */}
      <div className="absolute bottom-1 right-2 flex items-center gap-1.5 text-[7px] font-mono font-semibold text-slate-500/80">
        <Sparkles size={10} className="text-[#2dccd3]" />
        <span>THREE FOLD PANEL DELIVERY METRICS: ACTIVE</span>
      </div>

      <div className="absolute bottom-1 left-2 text-[7px] font-mono font-semibold text-slate-500/80">
        LAT_DISPATCH_SPEED: <span className="font-bold text-[#ea580c]">{isSprinting ? "3.2m/s" : "1.2m/s"}</span>
      </div>
    </div>
  );
}
