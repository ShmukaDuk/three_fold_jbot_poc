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
  Sliders,
  Gauge,
  Workflow,
  Users2,
  Ruler,
  HardHat,
  FileSignature,
  Award,
  Fingerprint
} from "lucide-react";

interface TeosSpiderWebProps {
  onSelectBlock: (id: number) => void;
}

export default function TeosSpiderWeb({ onSelectBlock }: TeosSpiderWebProps) {
  // Web nodes with precise specifications from the 14-subsection blueprint image
  const nodes = [
    {
      id: 1,
      number: "1. COCKPIT",
      title: "Executive Cockpit",
      subtitle: "CEO dashboard tracker showing real-time revenue, gross margins, cashflow and contract values.",
      icon: <Gauge className="text-emerald-400" size={18} />,
      highlights: ["Revenue Forecast", "Margin Risk", "Cashflow", "Debtors"],
      theme: "emerald",
      borderColor: "border-emerald-500/50 hover:border-emerald-400",
      glowBg: "bg-emerald-500/10",
      textTheme: "text-emerald-400",
      xClass: "lg:left-[26%] lg:top-[12%]",
      xSvg: { x: 33, y: 19 }
    },
    {
      id: 2,
      number: "2. INTEGRATION",
      title: "Cloud Sync Integration",
      subtitle: "Two-way live integration with leading construction cloud sites like Procore & Autodesk.",
      icon: <Workflow className="text-cyan-400" size={18} />,
      highlights: ["Procore Connect", "Autodesk ACC", "Aconex Sync"],
      theme: "cyan",
      borderColor: "border-cyan-500/50 hover:border-cyan-400",
      glowBg: "bg-cyan-500/10",
      textTheme: "text-cyan-400",
      xClass: "lg:right-[26%] lg:top-[12%]",
      xSvg: { x: 67, y: 19 }
    },
    {
      id: 3,
      number: "3. CONTRACT / LEGAL",
      title: "Legal Agent: J-Bot",
      subtitle: "J-Bot contract compliance analyzer. Audits sub-contractor delays and legal contract notices under AS 4902-2006.",
      icon: <Scale className="text-blue-400" size={18} />,
      highlights: ["J-Bot Legal", "Notice of Delay", "Clause Auditor"],
      theme: "blue",
      borderColor: "border-blue-500/50 hover:border-blue-400",
      glowBg: "bg-blue-500/10",
      textTheme: "text-blue-400",
      xClass: "lg:left-[1%] lg:top-[11%]",
      xSvg: { x: 10, y: 18 }
    },
    {
      id: 4,
      number: "4. COST / BUDGET",
      title: "Financial Protection",
      subtitle: "Ensure healthy project margins with detailed itemised cost control and slip simulators.",
      icon: <DollarSign className="text-amber-400" size={18} />,
      highlights: ["Budget vs Actual", "Forecast Margin", "Cost Codes"],
      theme: "amber",
      borderColor: "border-amber-500/50 hover:border-amber-400",
      glowBg: "bg-amber-500/10",
      textTheme: "text-amber-400",
      xClass: "lg:left-[1%] lg:top-[28%]",
      xSvg: { x: 10, y: 35 }
    },
    {
      id: 5,
      number: "5. PROCUREMENT",
      title: "Supplier & Panel Logistics",
      subtitle: "High-bay materials planning. Track deliveries at risk and supplier scorecard metrics.",
      icon: <ShoppingCart className="text-rose-400" size={18} />,
      highlights: ["PO Status", "Expediting Ships", "Supplier Score"],
      theme: "rose",
      borderColor: "border-rose-500/50 hover:border-rose-400",
      glowBg: "bg-rose-500/10",
      textTheme: "text-rose-400",
      xClass: "lg:left-[1%] lg:top-[45%]",
      xSvg: { x: 10, y: 52 }
    },
    {
      id: 6,
      number: "6. ASSETS",
      title: "Heavy Lifting Logistics",
      subtitle: "Complete physical and financial auditing of heavy crane lifters, scissor lifts & shears.",
      icon: <Hammer className="text-violet-400" size={18} />,
      highlights: ["Equipment register", "Daily Utilization", "Calibration"],
      theme: "violet",
      borderColor: "border-violet-500/50 hover:border-violet-400",
      glowBg: "bg-violet-500/10",
      textTheme: "text-violet-400",
      xClass: "lg:left-[1%] lg:top-[62%]",
      xSvg: { x: 10, y: 69 }
    },
    {
      id: 11,
      number: "11. CONSTRUCTION",
      title: "Construction Delivery",
      subtitle: "Insulated sandwich panel stacking progress. Baseline lookahead program synchronization.",
      icon: <HardHat className="text-orange-400" size={18} />,
      highlights: ["Lookahead Gantt", "On-time Performance", "Daily Diary"],
      theme: "orange",
      borderColor: "border-orange-500/50 hover:border-orange-400",
      glowBg: "bg-orange-500/10",
      textTheme: "text-orange-400",
      xClass: "lg:left-[1%] lg:top-[79%]",
      xSvg: { x: 10, y: 86 }
    },
    {
      id: 12,
      number: "12. CLAIMS",
      title: "Claims & Variations",
      subtitle: "statutory billing pipelines. Submit, review and certificate monthly Australian progress claims.",
      icon: <FileSignature className="text-purple-400" size={18} />,
      highlights: ["Security of Payment", "Claims Ledger", "Retention"],
      theme: "purple",
      borderColor: "border-purple-500/50 hover:border-purple-400",
      glowBg: "bg-purple-500/10",
      textTheme: "text-purple-300",
      xClass: "lg:left-[26%] lg:top-[79%]",
      xSvg: { x: 33, y: 86 }
    },
    {
      id: 7,
      number: "7. OHS / WHS",
      title: "Health & Safety Registry",
      subtitle: "SWMS library and toolbox compliance. First-class tools for major site risk reduction.",
      icon: <Shield className="text-red-400" size={18} />,
      highlights: ["High-Risk Permits", "SWMS Library", "Incident Log"],
      theme: "red",
      borderColor: "border-red-500/50 hover:border-red-400",
      glowBg: "bg-red-500/10",
      textTheme: "text-red-400",
      xClass: "lg:right-[1%] lg:top-[11%]",
      xSvg: { x: 90, y: 18 }
    },
    {
      id: 8,
      number: "8. QA / ITP",
      title: "Quality Assurance",
      subtitle: "Air-tightness joints and witness check logs for cold-room thermal wall assembly precision.",
      icon: <BadgeCheck className="text-teal-400" size={18} />,
      highlights: ["ITP Checkpoints", "Witness Signs", "NCR Register"],
      theme: "teal",
      borderColor: "border-teal-500/50 hover:border-teal-400",
      glowBg: "bg-teal-500/10",
      textTheme: "text-teal-400",
      xClass: "lg:right-[1%] lg:top-[28%]",
      xSvg: { x: 90, y: 35 }
    },
    {
      id: 9,
      number: "9. HR / PEOPLE",
      title: "Workforce & Rostering",
      subtitle: "Allocating skilled welders and riggers, with license notifications and ticket exspiries.",
      icon: <Users2 className="text-fuchsia-400" size={18} />,
      highlights: ["Welder Pool", "Ticket Expiry Alerts", "Roster Map"],
      theme: "fuchsia",
      borderColor: "border-fuchsia-500/50 hover:border-fuchsia-400",
      glowBg: "bg-fuchsia-500/10",
      textTheme: "text-fuchsia-400",
      xClass: "lg:right-[1%] lg:top-[45%]",
      xSvg: { x: 90, y: 52 }
    },
    {
      id: 10,
      number: "10. DESIGN",
      title: "Thermal Detail & CAD/BIM",
      subtitle: "Interlocking joint architectural detail drafting and BIM 3D clash resolution tracking.",
      icon: <Ruler className="text-indigo-400" size={18} />,
      highlights: ["Shop Drawings", "3D Clash Engine", "Model Review"],
      theme: "indigo",
      borderColor: "border-indigo-500/50 hover:border-indigo-400",
      glowBg: "bg-indigo-500/10",
      textTheme: "text-indigo-400",
      xClass: "lg:right-[1%] lg:top-[62%]",
      xSvg: { x: 90, y: 69 }
    },
    {
      id: 13,
      number: "13. HANDOVER",
      title: "Handover & Warranties",
      subtitle: "As-built manual compilation. Waterproof warranty tracking and defect liability certificates.",
      icon: <Award className="text-slate-400" size={18} />,
      highlights: ["DLP Management", "Warranty Ledger", "Manual Check"],
      theme: "slate",
      borderColor: "border-slate-500/50 hover:border-slate-400",
      glowBg: "bg-slate-500/10",
      textTheme: "text-slate-200",
      xClass: "lg:right-[1%] lg:top-[79%]",
      xSvg: { x: 90, y: 86 }
    },
    {
      id: 14,
      number: "14. GOVERNANCE",
      title: "Policy & Governance",
      subtitle: "National procedurial framework aligning Sydney, Brisbane and Melbourne operations.",
      icon: <Fingerprint className="text-purple-400" size={18} />,
      highlights: ["Document Control", "Compliance check", "ISO Audit"],
      theme: "purple",
      borderColor: "border-purple-500/50 hover:border-purple-400",
      glowBg: "bg-purple-500/10",
      textTheme: "text-purple-400",
      xClass: "lg:right-[26%] lg:top-[79%]",
      xSvg: { x: 67, y: 86 }
    }
  ];

  return (
    <div className="relative w-full min-h-[1050px] lg:h-[1050px] bg-slate-950 border border-slate-800 rounded-3xl p-6 overflow-hidden flex flex-col justify-between shadow-2xl">
      {/* Background cyber grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1024_1px,transparent_1px),linear-gradient(to_bottom,#0c1024_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-35"></div>
      
      {/* Dynamic ambient spot glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

      {/* Header Info */}
      <div className="relative z-20 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1.5 pb-2 border-b border-white/5">
        <div>
          <span className="text-[10px] uppercase font-mono font-bold text-[#2dccd3] tracking-wider block">
            Threefold Dynamic Systems Architecture
          </span>
          <h2 className="font-display font-black text-white text-lg uppercase tracking-tight mt-0.5">
            TEOS Core Interactive Web Map (14-Node Master Blueprint)
          </h2>
        </div>
        <div className="text-[9px] font-mono text-slate-400 bg-white/5 border border-white/10 rounded-lg px-2.5 py-1 flex items-center gap-1.5 self-stretch sm:self-auto text-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-450 animate-pulse bg-cyan-400"></span>
          <span>SPIDER WEB INTERCONNECTED VISUALIZATION // CLICK CARDS TO INGRESS WORKSPACE</span>
        </div>
      </div>

      {/* MAIN SPIDER WEB CONTAINER */}
      <div className="relative flex-1 w-full lg:h-[880px] min-h-[760px] my-6 flex items-center justify-center">
        
        {/* SVG SPIDER WEB LINE TRACKS - Hidden on Mobile */}
        <svg className="absolute inset-0 w-full h-full hidden lg:block" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Linear gradients for laser lines */}
            <linearGradient id="gradient-blue" x1="50%" y1="50%" x2="10%" y2="18%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-amber" x1="50%" y1="50%" x2="10%" y2="35%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-rose" x1="50%" y1="50%" x2="10%" y2="52%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-violet" x1="50%" y1="50%" x2="10%" y2="69%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-orange" x1="50%" y1="50%" x2="10%" y2="86%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-purple" x1="50%" y1="50%" x2="33%" y2="86%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
            
            <linearGradient id="gradient-red" x1="50%" y1="50%" x2="90%" y2="18%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-teal" x1="50%" y1="50%" x2="90%" y2="35%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-fuchsia" x1="50%" y1="50%" x2="90%" y2="52%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-indigo" x1="50%" y1="50%" x2="90%" y2="69%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-slate" x1="50%" y1="50%" x2="90%" y2="86%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#64748b" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-gov-purple" x1="50%" y1="50%" x2="67%" y2="86%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-emerald" x1="50%" y1="50%" x2="33%" y2="19%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="gradient-cyan" x1="50%" y1="50%" x2="67%" y2="19%">
              <stop offset="0%" stopColor="#6f00ff" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Web concentric radar spiderweb tracks */}
          <circle cx="50%" cy="50%" r="90" fill="none" stroke="#2dccd3" strokeWidth="1" strokeOpacity="0.08" strokeDasharray="4 4" className="origin-center animate-[spin_50s_linear_infinite]" />
          <circle cx="50%" cy="50%" r="180" fill="none" stroke="#2dccd3" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="3 3" className="origin-center animate-[spin_100s_linear_infinite_reverse]" />
          <circle cx="50%" cy="50%" r="280" fill="none" stroke="#6f00ff" strokeWidth="1" strokeOpacity="0.03" />
          
          {/* SVG Pulsing Laser connection spokes */}
          {nodes.map((node) => (
            <g key={node.id}>
              {/* Spoke line */}
              <line 
                x1="50%" 
                y1="50%" 
                x2={`${node.xSvg.x}%`} 
                y2={`${node.xSvg.y}%`} 
                stroke={`url(#gradient-${node.theme === "purple" && node.id === 14 ? "gov-purple" : node.theme})`} 
                strokeWidth="1.5" 
                className="opacity-40"
              />
            </g>
          ))}
        </svg>

        {/* 1. CENTRAL HUB NODE (J-BOT PM AGENT / AI & KNOWLEDGE LAYER) */}
        <div className="absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none lg:pointer-events-auto">
          {/* Glowing solar orb */}
          <div className="relative w-44 h-44 flex items-center justify-center">
            
            {/* Spinning tracking circles */}
            <div className="absolute inset-0 border border-dashed border-[#2dccd3]/30 rounded-full animate-[spin_16s_linear_infinite]"></div>
            <div className="absolute inset-2 border border-dotted border-purple-500/35 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
            <div className="absolute inset-4 bg-[#2dccd3]/5 rounded-full filter blur-md animate-pulse"></div>
            
            {/* Core glowing terminal button */}
            <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-[#110134] via-[#180043] to-[#280071] border-2 border-[#2dccd3] shadow-[0_0_25px_rgba(45,204,211,0.4)] flex flex-col items-center justify-center p-2 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[#2dccd3]/10 opacity-100"></div>
              
              <Sparkles className="text-cyan-300 animate-pulse" size={20} />
              <span className="text-[10px] font-mono text-cyan-200 uppercase font-black tracking-widest mt-1 block leading-none">
                J-BOT AI
              </span>
              <span className="text-[8px] font-mono text-purple-300 uppercase font-bold tracking-tight block mt-0.5 leading-none">
                KNOWLEDGE LAYER
              </span>
              <span className="text-[6.5px] font-mono text-slate-400 uppercase mt-2.5 block leading-none tracking-tight">
                COMPLIANCE GATES
              </span>
              <span className="absolute bottom-2 h-1 w-2 rounded bg-cyan-400"></span>
            </div>
          </div>
        </div>

        {/* 2. RESPONSIVE SATELLITE NODES */}
        {/* On desktop: absolutely positioned layout around J-Bot */}
        {/* On mobile/tablet: neatly stacked grid of high-compliance cards */}
        <div className="w-full h-full lg:absolute lg:inset-0 grid grid-cols-1 md:grid-cols-2 lg:block gap-4 relative z-10 p-2">
          {nodes.map((node) => (
            <motion.div
              key={node.id}
              onClick={() => onSelectBlock(node.id)}
              whileHover={{ scale: 1.03, y: -2 }}
              className={`lg:absolute ${node.xClass} lg:w-[172px] xl:w-[200px] bg-[#09031c]/95 border ${node.borderColor} rounded-2xl p-3.5 transition-all duration-300 relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:bg-[#11033a] flex flex-col justify-between min-h-[148px]`}
            >
              {/* Inner ambient corner lighting */}
              <div className={`absolute top-0 right-0 w-20 h-20 ${node.glowBg} rounded-full filter blur-xl pointer-events-none`}></div>
              
              {/* Card top details */}
              <div className="space-y-1.5 flex-1 select-none">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] font-mono font-extrabold tracking-wider text-slate-400 uppercase leading-none truncate max-w-[120px]">
                    {node.number}
                  </span>
                  <span className={`text-[7.5px] font-mono font-bold px-1.5 py-0.5 rounded scale-90 ${
                    node.id === 3 || node.id === 12 ? "bg-cyan-400/10 text-cyan-300 animate-pulse border border-cyan-400/20" : "bg-slate-800 text-slate-300"
                  }`}>
                    {node.id === 3 || node.id === 12 ? "AI ACTIVE" : "CORE SYS"}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 pt-1 border-b border-white/5 pb-1 mt-0.5">
                  <div className="p-1 rounded-lg bg-white/5 shrink-0">
                    {node.icon}
                  </div>
                  <h3 className="font-display font-black text-[11px] leading-tight text-white uppercase tracking-tight">
                    {node.title}
                  </h3>
                </div>

                <p className="text-[9.5px] text-slate-400 leading-normal line-clamp-2 font-sans pt-0.5">
                  {node.subtitle}
                </p>
              </div>

              {/* DASHBOARD HIGHLIGHTS SECTION (As requested) */}
              <div className="mt-2.5 pt-2 border-t border-white/5 space-y-1">
                <span className="text-[7.5px] font-black font-mono text-[#2dccd3] block tracking-wide uppercase">
                  DASHBOARD HIGHLIGHTS:
                </span>
                <div className="flex flex-wrap gap-0.5">
                  {node.highlights.slice(0, 3).map((hl, k) => (
                    <span 
                      key={k} 
                      className="text-[7.5px] font-mono bg-white/5 text-slate-300 border border-slate-800 px-1 py-0.5 rounded whitespace-nowrap"
                    >
                      {hl}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Web Footer details */}
      <div className="relative z-20 flex flex-col sm:flex-row justify-between items-center text-[9px] font-mono text-slate-400 border-t border-white/5 pt-3 gap-2">
        <span className="uppercase text-cyan-200">INTERCONNECTED ACTIVE BLUEPRINT // 14 SYSTEM NODES ONLINE</span>
        <span className="uppercase text-slate-400">STANDBY LAW CODES: ENFORCED // ENCRYPTION: SECURE PORTAL</span>
      </div>
    </div>
  );
}
