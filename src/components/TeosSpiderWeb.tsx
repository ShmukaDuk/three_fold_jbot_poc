import React from "react";
import { motion } from "motion/react";
import { 
  Scale, 
  DollarSign, 
  ShoppingCart, 
  Hammer, 
  Shield, 
  BadgeCheck, 
  Sparkles,
  Sliders
} from "lucide-react";

interface TeosSpiderWebProps {
  onSelectBlock: (id: number) => void;
}

export default function TeosSpiderWeb({ onSelectBlock }: TeosSpiderWebProps) {
  // Web nodes with precise specifications from user request
  const nodes = [
    {
      id: 3,
      number: "AS 4902 AI Compliance Core",
      title: "AS 4902 AI Compliance Core",
      subtitle: "AS 4902-2006 compliance analyzer. Audits sub-contractor delays and spits out legal contract notices instantly.",
      icon: <Scale className="text-blue-400" size={18} />,
      highlights: ["Notice of Delay", "Standby Claims", "Clause extraction"],
      theme: "blue",
      borderColor: "border-blue-500/50 hover:border-blue-400",
      glowBg: "bg-blue-500/10",
      textTheme: "text-blue-400",
      xClass: "lg:left-[6%] lg:top-[12%]",
      xSvg: { x: 18, y: 20 }
    },
    {
      id: 4,
      number: "4. COST / BUDGET CONTROL",
      title: "Financial Protection Control",
      subtitle: "Ensure healthy project margins with detailed itemised cost control.",
      icon: <DollarSign className="text-amber-400" size={18} />,
      highlights: ["Commitments", "Forecast Final Cost", "Margin %"],
      theme: "amber",
      borderColor: "border-amber-500/50 hover:border-amber-400",
      glowBg: "bg-amber-500/10",
      textTheme: "text-amber-400",
      xClass: "lg:right-[6%] lg:top-[12%]",
      xSvg: { x: 82, y: 20 }
    },
    {
      id: 5,
      number: "5. PROCUREMENT / SUPPLIER CONTROL",
      title: "Supplier & Panel Logistics",
      subtitle: "Seamless materials planning. High-bay panels scheduling.",
      icon: <ShoppingCart className="text-rose-400" size={18} />,
      highlights: ["PO Status", "Deliveries at Risk", "Scorecards"],
      theme: "rose",
      borderColor: "border-rose-500/50 hover:border-rose-400",
      glowBg: "bg-rose-500/10",
      textTheme: "text-rose-400",
      xClass: "lg:right-[2%] lg:top-[50%] lg:-translate-y-1/2",
      xSvg: { x: 88, y: 50 }
    },
    {
      id: 6,
      number: "6. ASSET MANAGEMENT (PLANT & EQUIPMENT)",
      title: "Heavy Lifting Logistics",
      subtitle: "Complete physical and financial auditing of all heavy lifters & shears.",
      icon: <Hammer className="text-violet-400" size={18} />,
      highlights: ["Assets On Hire", "Utilisation %", "Maintenance Due"],
      theme: "violet",
      borderColor: "border-violet-500/50 hover:border-violet-400",
      glowBg: "bg-violet-500/10",
      textTheme: "text-violet-400",
      xClass: "lg:right-[6%] lg:bottom-[10%]",
      xSvg: { x: 82, y: 80 }
    },
    {
      id: 7,
      number: "7. OHS / WHS",
      title: "Health & Safety Registry",
      subtitle: "First-class safety tools for risk reduction across all work zones.",
      icon: <Shield className="text-red-400" size={18} />,
      highlights: ["Incidents", "High Risk Work", "Training"],
      theme: "red",
      borderColor: "border-red-500/50 hover:border-red-400",
      glowBg: "bg-red-500/10",
      textTheme: "text-red-400",
      xClass: "lg:left-[6%] lg:bottom-[10%]",
      xSvg: { x: 18, y: 80 }
    },
    {
      id: 8,
      number: "8. QA / ITP (QUALITY ASSURANCE)",
      title: "Quality Assurance",
      subtitle: "Uncompromised install accuracy for fire-rated cold storage walls.",
      icon: <BadgeCheck className="text-teal-400" size={18} />,
      highlights: ["ITP Progress", "Open NCRs", "Hold Points"],
      theme: "teal",
      borderColor: "border-teal-500/50 hover:border-teal-400",
      glowBg: "bg-teal-500/10",
      textTheme: "text-teal-400",
      xClass: "lg:left-[2%] lg:top-[50%] lg:-translate-y-1/2",
      xSvg: { x: 12, y: 50 }
    }
  ];

  return (
    <div className="relative w-full min-h-[720px] bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-hidden flex flex-col justify-between shadow-2xl">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1024_1px,transparent_1px),linear-gradient(to_bottom,#0c1024_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-35"></div>
      
      {/* Dynamic ambient spot glows */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      {/* Header Info */}
      <div className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 pb-2 border-b border-white/5">
        <div>
          <span className="text-[10px] uppercase font-mono font-bold text-[#2dccd3] tracking-wider block">
            Threefold Dynamic Systems Architecture
          </span>
          <h2 className="font-display font-black text-white text-lg uppercase tracking-tight mt-0.5">
            TEOS Core Interactive Web Map
          </h2>
        </div>
        <div className="text-[9px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 flex items-center gap-1.5 self-stretch sm:self-auto text-center justify-center">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span>SPIDER WEB INTERCONNECTED VISUALIZATION</span>
        </div>
      </div>

      {/* MAIN SPIDER WEB CONTAINER */}
      <div className="relative flex-1 w-full h-full min-h-[560px] my-4 flex items-center justify-center">
        
        {/* SVG SPIDER WEB LINE TRACKS - Hidden on Mobile */}
        <svg className="absolute inset-0 w-full h-full hidden lg:block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Linear gradients for laser lines */}
            <linearGradient id="gradient-blue" x1="50%" y1="50%" x2="18%" y2="20%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-amber" x1="50%" y1="50%" x2="82%" y2="20%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-rose" x1="50%" y1="50%" x2="88%" y2="50%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-violet" x1="50%" y1="50%" x2="82%" y2="80%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-red" x1="50%" y1="50%" x2="18%" y2="80%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-teal" x1="50%" y1="50%" x2="12%" y2="50%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Web concentric radar spiderweb tracks */}
          <circle cx="50%" cy="50%" r="90" fill="none" stroke="#2dccd3" strokeWidth="1" strokeOpacity="0.09" strokeDasharray="4 4" className="origin-center animate-[spin_50s_linear_infinite]" />
          <circle cx="50%" cy="50%" r="180" fill="none" stroke="#2dccd3" strokeWidth="1" strokeOpacity="0.06" strokeDasharray="3 3" className="origin-center animate-[spin_100s_linear_infinite_reverse]" />
          <circle cx="50%" cy="50%" r="260" fill="none" stroke="#6f00ff" strokeWidth="1" strokeOpacity="0.04" />
          
          {/* Radial interconnect web lines (joining outer nodes) */}
          <polygon 
            points="18%,20% 82%,20% 88%,50% 82%,80% 18%,80% 12%,50%" 
            fill="none" 
            stroke="#2dccd3" 
            strokeWidth="1.5" 
            strokeOpacity="0.1" 
            strokeDasharray="4 2"
          />

          {/* SVG Pulsing Laser connection spokes */}
          {nodes.map((node) => (
            <g key={node.id}>
              {/* Spoke line */}
              <line 
                x1="50%" 
                y1="50%" 
                x2={`${node.xSvg.x}%`} 
                y2={`${node.xSvg.y}%`} 
                stroke={`url(#gradient-${node.theme})`} 
                strokeWidth="2.5" 
                className="opacity-70"
              />
              {/* Moving light pulse on spoke */}
              <circle r="4" fill="#2dccd3" className="origin-center">
                <animateMotion 
                  dur="4s" 
                  repeatCount="indefinite" 
                  path={`M ${window.innerWidth ? window.innerWidth * 0.44 : 350} ${window.innerHeight ? window.innerHeight * 0.35 : 280} L ${Math.round(node.xSvg.x * 7)} ${Math.round(node.xSvg.y * 5.6)}`}
                  keyPoints="0;1"
                  keyTimes="0;1"
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* 1. CENTRAL HUB NODE (J-BOT PM AGENT) */}
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
          {/* Glowing solar orb */}
          <div className="relative w-36 h-36 flex items-center justify-center">
            
            {/* Spinning tracking circles */}
            <div className="absolute inset-0 border border-dashed border-[#2dccd3]/40 rounded-full animate-[spin_16s_linear_infinite]"></div>
            <div className="absolute inset-2 border border-dotted border-purple-500/40 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
            
            {/* Core glowing terminal button */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-[#110134] via-[#180043] to-[#280071] border-2 border-[#2dccd3] shadow-[0_0_20px_rgba(45,204,211,0.35)] flex flex-col items-center justify-center p-2 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#2dccd3]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <Sparkles className="text-cyan-400 animate-pulse" size={18} />
              <span className="text-[9px] font-mono text-cyan-200 uppercase font-black tracking-widest mt-1 block leading-none">
                J-BOT
              </span>
              <span className="text-[7.5px] font-mono text-purple-300 uppercase font-bold tracking-tight block mt-0.5 leading-none">
                QUERY CORE
              </span>
              <span className="absolute bottom-2 h-1 w-2 rounded bg-cyan-400 animate-ping"></span>
            </div>
          </div>
        </div>

        {/* 2. RESPONSIVE SATELLITE NODES */}
        {/* On desktop: absolutely positioned layout around J-Bot */}
        {/* On mobile/tablet: neatly stacked grid of high-compliance cards */}
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 lg:block gap-6 relative z-10 p-2">
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              onClick={() => onSelectBlock(node.id)}
              whileHover={{ scale: 1.025, y: -2 }}
              className={`lg:absolute ${node.xClass} lg:w-[195px] xl:w-[225px] bg-[#0c0525] border ${node.borderColor} rounded-2xl p-4 transition-all duration-300 relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:bg-[#11033a] flex flex-col justify-between`}
            >
              {/* Inner ambient corner lighting */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${node.glowBg} rounded-full filter blur-xl pointer-events-none`}></div>
              
              {/* Card top details */}
              <div className="space-y-1.5 flex-1 select-none">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-mono font-extrabold tracking-wider text-slate-400 uppercase leading-none truncate max-w-[140px]">
                    {node.number}
                  </span>
                  <span className="text-[8px] font-mono font-bold bg-[#2dccd3]/10 text-[#2dccd3] px-1.5 py-0.5 rounded scale-90">
                    POC CORE
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-1 border-b border-white/5 pb-1.5">
                  <div className="p-1.5 rounded-lg bg-white/5 shrink-0">
                    {node.icon}
                  </div>
                  <h3 className="font-display font-black text-[12px] leading-tight text-white uppercase tracking-tight">
                    {node.title}
                  </h3>
                </div>

                <p className="text-[10px] text-slate-400 leading-normal line-clamp-3 font-sans pt-1">
                  {node.subtitle}
                </p>
              </div>

              {/* DASHBOARD HIGHLIGHTS SECTION (As requested) */}
              <div className="mt-3.5 pt-2.5 border-t border-white/5 space-y-1.5">
                <span className="text-[8px] font-black font-mono text-[#2dccd3] block tracking-wide uppercase">
                  DASHBOARD HIGHLIGHTS:
                </span>
                <div className="flex flex-wrap gap-1">
                  {node.highlights.map((hl, k) => (
                    <span 
                      key={k} 
                      className="text-[8px] font-mono bg-white/5 text-slate-200 border border-slate-700/60 px-1.5 py-0.5 rounded hover:border-[#2dccd3]/50 transition-colors"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>

              {/* Glowing node identity marker */}
              <div className="absolute right-3.5 bottom-3.5 w-1 h-1 rounded-full bg-cyan-400 animate-pulse"></div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Web Footer details */}
      <div className="relative z-20 flex justify-between items-center text-[9px] font-mono text-slate-400 border-t border-white/5 pt-2.5">
        <span>INTERCONNECTED NODES: 6 SYNCED IN REAL-TIME</span>
        <span>SECURITY: AS 4902 COMPLIANCE GUARANTEE</span>
      </div>
    </div>
  );
}
