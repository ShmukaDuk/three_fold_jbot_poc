/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import {
  Send,
  Sparkles,
  Clipboard,
  CheckCircle,
  Clock,
  ArrowRight,
  Flame,
  FileText,
  AlertTriangle,
  RefreshCw,
  Mail,
  Calendar,
  Layers,
  ChevronRight,
  ChevronDown,
  Info,
  Building,
  Check,
  FileSearch,
  ExternalLink,
  ShieldCheck,
  Sliders,
  Play,
  LayoutGrid,
  DollarSign,
  Scale,
  Users2,
  Shield,
  Hammer,
  Ruler,
  BadgeCheck,
  FileSignature,
  Award,
  Fingerprint,
  ShoppingCart,
  Workflow,
  Terminal,
  Eye,
  Key
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import PixelAgent from "./PixelAgent";
import RunningConstructionDude from "./RunningConstructionDude";
import TeosSpiderWeb from "./components/TeosSpiderWeb";
import { 
  CeoCockpitView, 
  MainContractorSyncView, 
  ContractLegalView, 
  CostBudgetView, 
  ProcurementSupplierView, 
  AssetManagementView, 
  OHSWHSView, 
  QAITPView, 
  HRPeopleView, 
  DesignEngineeringView, 
  ConstructionDeliveryView, 
  ClaimsLedgerView, 
  HandoverWarrantyView, 
  PolicyGovernanceView 
} from "./components/ModuleViews";
import { virtualFiles } from "./systemFiles";
import { bentoBlocks, teosPillars, TEOSBlock } from "./teosData";

// Structured types matching system data
interface Citation {
  sourceFile: string;
  category: string;
  clauseOrSection: string;
  textSnippet: string;
  strength: "critical" | "supporting";
}

interface MetricsImpact {
  currentInstallers: number;
  estimatedRequiredAhead: number;
  recommendation: string;
}

interface ProjectConfig {
  id: "proj_1" | "proj_2" | "proj_agnostic";
  title: string;
  location: string;
  type: string;
  subcontractor: string;
  governingAgreement: string;
  initialPrompt: string;
  description: string;
  details: string;
}

const getBlockIcon = (iconName: string) => {
  switch (iconName) {
    case "Gauge": return <Sliders size={18} />;
    case "Workflow": return <Workflow size={18} />;
    case "Scale": return <Scale size={18} />;
    case "DollarSign": return <DollarSign size={18} />;
    case "ShoppingCart": return <ShoppingCart size={18} />;
    case "Hammer": return <Hammer size={18} />;
    case "Shield": return <Shield size={18} />;
    case "BadgeCheck": return <BadgeCheck size={18} />;
    case "Users2": return <Users2 size={18} />;
    case "Ruler": return <Ruler size={18} />;
    case "HardHat": return <Sliders size={18} />;
    case "FileSignature": return <FileSignature size={18} />;
    case "Award": return <Award size={18} />;
    case "Fingerprint": return <Fingerprint size={18} />;
    default: return <Building size={18} />;
  }
};

export default function App() {
  // Navigation State
  const [currentTab, setCurrentTab] = useState<"teos_dashboard" | "pm_update">("teos_dashboard");
  const [selectedBentoBlock, setSelectedBentoBlock] = useState<number | null>(null);
  const [currentProject, setCurrentProject] = useState<"none" | "proj_1" | "proj_2" | "proj_agnostic">("none");
  const [prompt, setPrompt] = useState("");
  const [status, setStatus] = useState<"idle" | "thinking" | "completed">("idle");
  const [speech, setSpeech] = useState("");

  // Loaded outputs calculated
  const [delaySource, setDelaySource] = useState("");
  const [delayDays, setDelayDays] = useState(4);
  const [governingAgreement, setGoverningAgreement] = useState("MEL-CS-2026-AS4902.md");
  const [responsibleParty, setResponsibleParty] = useState("");
  const [calculatedCost, setCalculatedCost] = useState("$10,500 AUD");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailBody, setEmailBody] = useState("");
  const [clausesCited, setClausesCited] = useState<string[]>([]);
  const [citations, setCitations] = useState<Citation[]>([]);
  const [metricsImpact, setMetricsImpact] = useState<MetricsImpact>({
    currentInstallers: 8,
    estimatedRequiredAhead: 12,
    recommendation: ""
  });

  // User notifications & visual flags
  const [copied, setCopied] = useState(false);
  const [dispatched, setDispatched] = useState(false);
  const [liveLogs, setLogs] = useState<string[]>([]);
  const [activeOutputTab, setActiveOutputTab] = useState<"summary" | "gantt" | "email" | "documents">("summary");

  // Project templates list
  const projectsList: ProjectConfig[] = [
    {
      id: "proj_1",
      title: "Woolworths Sydney Regional Distribution Centre",
      location: "Minchinbury, NSW",
      type: "Refrigerated Warehouse PIR Cladding",
      subcontractor: "Sydney Foundations Civil Contractor",
      governingAgreement: "Syd-Woolies-AS4902-2026.md",
      description: "Critical sub-grade slab curing delays affecting high-bay insulated freezer rack systems.",
      details: "Site Supervisor reported structural freeze slab has fully cured late, pushing back our dry-in panel erection milestones by 4 key work days.",
      initialPrompt: "Sydney Foundations civil team poured the floor slab late, postponing our high-bay PIR wall panel lifting by 4 key work days on the Woolworths Minchinbury site."
    },
    {
      id: "proj_2",
      title: "Coles Sydney Automated Distribution Centre",
      location: "Kemps Creek, NSW",
      type: "EPS Automated Hygienic Dairy Corridors",
      subcontractor: "None (Sydney Onboarding Request)",
      governingAgreement: "TFP_Sydney_Induction_Standard_v2.md",
      description: "Onboarding checklist verification and Sydney roster mobilization guidelines compliance.",
      details: "Request to register newly inducted insulated panel specialist welder David Miller and verify heights safety tickets to commence ceiling assembly.",
      initialPrompt: "Onboard new panel welding technician David Miller to our Coles Kemps Creek site. Run induction, roster slot check, and print safety crew badge."
    },
    {
      id: "proj_agnostic",
      title: "Bidfood Sydney Cold Logistics Center",
      location: "Mascot, NSW",
      type: "Custom Sandwich Panel Freezer Ingress",
      subcontractor: "Various Sydney Site Factors",
      governingAgreement: "Syd-Generic-AS4902.md",
      description: "Apply standard AS4902 delay damages logic to unforeseen layout disruptions.",
      details: "Grid structural columns deviated by 25mm on Mascot site, necessitating manual panel profile trim adjustments.",
      initialPrompt: "We encountered a 2 day general layout alignment delay on our insulated roof panel framing due to structural alignment deviation on the Bidfood Mascot site."
    }
  ];

  // Pick project workspace
  const handleProjectSelect = (projId: "proj_1" | "proj_2" | "proj_agnostic") => {
    const config = projectsList.find((p) => p.id === projId);
    if (!config) return;

    setCurrentProject(projId);
    setPrompt(config.initialPrompt);
    setStatus("idle");
    setDispatched(false);
    setActiveOutputTab("summary");
    
    // Customize speech responses for PM Agent - J-Bot
    if (projId === "proj_1") {
      setSpeech(
        "Stationed for Woolworths Minchinbury! Active Syd-Woolies-AS4902-2026 contract profile loaded. Let me audit the sub-grade concrete delay and compute the standby claim."
      );
    } else if (projId === "proj_2") {
      setSpeech(
        "Coles Kemps Creek core active! I have verified our NSW site induction standards. Hit the 'Update PM Agent - J-Bot' action and I'll confirm the onboarded welder slot on the active roster."
      );
    } else {
      setSpeech(
        "Sydney agnostic panel analysis module loaded. Ready to trace standard delay damages and standby claims on the fly. Fire when ready!"
      );
    }

    setLogs([
      `[SYSTEM] Project initialized to ${config.title}`,
      `[SYSTEM] Linked governing agreement: ${config.governingAgreement}`,
      `[SYSTEM] Standing by for dispatch trigger.`
    ]);
  };

  const addLog = (msg: string) => {
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    setLogs((prev) => [...prev, `[${time}] ${msg}`]);
  };

  // Processing Action Ingest
  const triggerAgentProcessing = async () => {
    if (status === "thinking" || !prompt.trim()) return;

    setStatus("thinking");
    setDispatched(false);
    
    addLog(`INITIALIZING: Analytical dispatch for site update.`);
    addLog(`SCANNING: Executing text matching on contract documents...`);

    // Call server API for real-time calculation
    try {
      const response = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt })
      });

      if (response.ok) {
        const data = await response.json();
        
        // Emulate realistic thinking/panel audit latency for visual satisfaction
        setTimeout(() => {
          setStatus("completed");
          setDelaySource(data.delaySource || "Onsite Intervention");
          setDelayDays(data.delayDays ?? 1);
          setGoverningAgreement(data.governingAgreement || "Syd-Woolies-AS4902-2026.md");
          setResponsibleParty(data.responsibleParty || "Site Representative");
          setCalculatedCost(data.calculatedCost || "$0 AUD");
          setEmailSubject(data.draftSubject || "Clause 34.5 Claim notice");
          setEmailBody(data.draftBody || "");
          setClausesCited(data.clausesCited || ["Clause 34.5"]);
          setCitations(data.citations || []);
          setMetricsImpact(data.metricsImpact || {
            currentInstallers: 8,
            estimatedRequiredAhead: 12,
            recommendation: "Increase installers to offset concrete slab cure times."
          });

          // Custom Speech Response from PM Agent - J-Bot Core
          if (data.delayDays > 0) {
            setSpeech(
              `Standby claim calculated! I identified a critical-path push of ${data.delayDays} day(s). The total stand-down costs are ${data.calculatedCost}. Check the revised Gantt stages and the formal notice below!`
            );
          } else {
            setSpeech(
              "Onboarding records verified! New specialist welder David Miller increases our Kemps Creek roster to 9 technicians tomorrow. No delay claims needed!"
            );
          }

          addLog(`SUCCESS: Contract analysis resolved. Claim value compiled: ${data.calculatedCost}.`);
          addLog(`GANTT: Revised critical path dates pushed forward by ${data.delayDays} working day(s).`);
        }, 500);

      } else {
        throw new Error("SMTP Endpoint temporary delay");
      }
    } catch (e) {
      // Elegant Local Offline Fallback if server is not fully reachable
      setTimeout(() => {
        const isWelder = prompt.toLowerCase().includes("doc") || prompt.toLowerCase().includes("weld") || prompt.toLowerCase().includes("worker") || prompt.toLowerCase().includes("miller") || prompt.toLowerCase().includes("david");
        const days = currentProject === "proj_1" ? 4 : currentProject === "proj_2" ? 0 : 2;
        
        setStatus("completed");
        setGoverningAgreement(currentProject === "proj_2" ? "TFP_Sydney_Induction_Standard_v2.md" : "Syd-Woolies-AS4902-2026.md");
        setDelayDays(days);

        if (isWelder) {
          setDelaySource("Onboard new insulated panel specialist");
          setCalculatedCost("$0 AUD");
          setResponsibleParty("None (Sydney Internal Resource)");
          setClausesCited(["Section 1.2"]);
          setEmailSubject("Notice of New Onboarded Site Staff - Coles Kemps Creek");
          setEmailBody(`Subject: On-site Staff Update & Induction Confirmation - Coles Kemps Creek

Dear Site Superintendent,

We are writing to confirm that our newly onboarded panel welding specialist David Miller is scheduled to mobilise to site tomorrow.

David has completed the online Sydney safety induction suite and his Heights & Scaffold tickets are verified. This increases our on-site team size to 9 qualified installers tomorrow, enhancing dry-in assembly speeds for the automated cold corridors by approximately 12.5%.

Sincerely,
Three Fold Operations`);
          setMetricsImpact({
            currentInstallers: 8,
            estimatedRequiredAhead: 9,
            recommendation: "David Miller increases current on-site installer count to 9 tomorrow. This reduces standard insulation wall assembly time by approximately 12.5% for the refrigeration corridors."
          });
          setSpeech("Onboarding records verified! David Miller increases our on-site installer count to 9 tomorrow. No delay claims necessary, Coles project remains on track!");
          addLog("SUCCESS: Local Fallback - Sydney induction records processed smoothly.");
        } else {
          const claimValue = days * 2500 + 500;
          setDelaySource(currentProject === "proj_1" ? "Sydney Foundations Concrete Slab Delay" : "Generic Subcontractor Intervention");
          setCalculatedCost(`$${claimValue.toLocaleString()} AUD`);
          setResponsibleParty(currentProject === "proj_1" ? "Sydney Foundations Civil Contractor" : "Superintendent External Team");
          setClausesCited(["Clause 34.5", "Clause 34.7", "Clause 34.8"]);
          setEmailSubject(`Formal Delay Notice & Clause 34.5 EOT Claim - Woolworths Minchinbury stage 2`);
          setEmailBody(`Subject: Formal Request for Extension of Time (EOT) - Woolworths Minchinbury

Dear Marcus Vance,

We represent Three Fold Panel Pty Ltd under our contract for the Woolworths Sydney Regional Distribution Centre project.

We submit this formal delay is caused by site-readiness factors: ${prompt}.

This has introduced a critical-path push of ${days} day(s). In line with AS 4902 Clause 34.5, Three Fold Panel is entitled to an equivalent Extension of Time (EOT).

Additionally, under Clause 34.7, our delay damages are fixed at $2,500.00 AUD per working day of delay. Our panel supplier (Bondor) also levied a $500.00 AUD rescheduling fee.

Total Site Claim: $${claimValue.toLocaleString()}.00 AUD.

Sincerely,
Three Fold Panel Project Specialist
threefold.net.au`);
          setMetricsImpact({
            currentInstallers: 8,
            estimatedRequiredAhead: days > 2 ? 12 : 8,
            recommendation: days > 2 
              ? "We recommend scheduling weekend recovery shifts to compensate for the concrete slab wait times as requested." 
              : "Standard operational pace is sufficient to recover this minor timeline shift."
          });
          setCitations([
            {
              sourceFile: "Syd-Woolies-AS4902-2026.md",
              category: "contracts",
              clauseOrSection: "Clause 34.5 (Extension of Time)",
              textSnippet: "The Contractor shall be entitled to an Extension of Time (EOT) if delayed by concrete or civil contractors on site.",
              strength: "critical"
            },
            {
              sourceFile: "Syd-Woolies-AS4902-2026.md",
              category: "contracts",
              clauseOrSection: "Clause 34.7 (Delay damages)",
              textSnippet: "The Principal shall pay to the Contractor the practical costs incurred due to delay... fixed at $2,500.00 AUD per day.",
              strength: "critical"
            }
          ]);
          setSpeech(`Fallback analysis applied. Pushed schedule by ${days} day(s). Claimed amount: $${claimValue.toLocaleString()} AUD.`);
          addLog(`SUCCESS: Local Fallback - EOT claimed for ${days} days.`);
        }
      }, 500);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(`${emailSubject}\n\n${emailBody}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSMTPDispatch = () => {
    setDispatched(true);
    addLog(`SMTP: Official notice email dispatched to marcus.vance@melbcold.com.au`);
    addLog(`SMTP: Timesheets and Bondor delivery invoices attached automatically.`);
    setSpeech("The contract claim has been dispatched via SMTP with official timesheets attached. I also logged the critical path push to Procore. Beautiful work!");
  };

  // exact website theme color: Bright cyan (#2dccd3), Royal majestic purple (#6f00ff), very deep purple (#280071), light off-white (#fafafa)
  return (
    <div className="bg-[#fafafa] text-[#1a0f3d] min-h-screen font-sans flex flex-col selection:bg-[#2dccd3]/20 selection:text-[#280071]">
      
      {/* Three Fold Site Header */}
      <header className="bg-[#180043] text-white py-4 px-6 border-b-4 border-[#2dccd3] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {/* Logo representing panels joining */}
            <div 
              onClick={() => {
                setCurrentTab("teos_dashboard");
                setCurrentProject("none");
              }}
              className="cursor-pointer w-11 h-11 rounded-xl flex flex-col justify-between p-2 shadow-inner relative overflow-hidden group bg-gradient-to-tr from-[#2dccd3] via-[#6f00ff] to-[#280071]"
            >
              <div className="absolute top-0 left-0 w-2 h-11 bg-white/30 skew-x-12 transform -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <div className="w-full h-1.5 bg-white rounded"></div>
              <div className="w-3/4 h-1.5 bg-cyan-100 rounded"></div>
              <div className="w-full h-1.5 bg-white rounded"></div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span 
                  onClick={() => {
                    setCurrentTab("teos_dashboard");
                    setCurrentProject("none");
                  }}
                  className="cursor-pointer font-extrabold text-lg font-display tracking-tight text-white uppercase"
                >
                  Three Fold
                </span>
                <span className="text-[9px] bg-gradient-to-r from-[#2dccd3] to-[#6f00ff] text-white font-mono uppercase tracking-widest font-extrabold px-1.5 py-0.5 rounded shadow">
                  TEOS PLATFORM
                </span>
              </div>
              <p className="text-[11px] text-slate-300 font-medium">Enterprise Operating System for Insulated Cladding Systems</p>
            </div>
          </div>

          {/* Interactive Navigation Control Center */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex bg-[#0f0228] p-1 rounded-xl border border-white/10 shadow-inner">
              <button
                onClick={() => {
                  setCurrentTab("teos_dashboard");
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                  currentTab === "teos_dashboard" 
                    ? "bg-gradient-to-r from-[#2dccd3] to-[#6f00ff] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LayoutGrid size={13} />
                TEOS Console (Blueprint)
              </button>
              <button
                onClick={() => {
                  setCurrentTab("pm_update");
                }}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all ${
                  currentTab === "pm_update"
                    ? "bg-gradient-to-r from-[#2dccd3] to-[#6f00ff] text-white shadow"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2dccd3] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2dccd3]"></span>
                </span>
                Compliance Tracer [PM Agent - J-Bot]
              </button>
            </div>

            <a 
              href="https://www.threefold.net.au" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[11px] font-mono font-medium px-3 py-2 border border-slate-700 rounded-xl hover:bg-white/5 text-slate-300"
            >
              threefold.net.au
            </a>
          </div>
        </div>
      </header>

      {/* Main body area with Framer Motion transitions */}
      <div className={`flex-1 w-full mx-auto p-4 sm:p-6 lg:p-8 transition-all duration-300 ${
        currentTab === "teos_dashboard" ? "max-w-[1700px]" : "max-w-7xl"
      }`}>
        
        <AnimatePresence mode="wait">
          {currentTab === "teos_dashboard" ? (
            
            /* -------- TAB 1: THE THREEFOLD ENTERPRISE OPERATING SYSTEM (TEOS) DASHBOARD -------- */
            <motion.div
              key="teos_blueprint"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {/* Slogan Blueprint Title Banner */}
              <div className="bg-gradient-to-r from-[#180043] to-[#280071] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none overflow-hidden hidden md:block">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#2dccd3]" fill="currentColor">
                    <path d="M100 100 L0 100 L100 20 Z" />
                  </svg>
                </div>

                <div className="space-y-2 max-w-3xl relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] bg-cyan-950 text-[#2dccd3] border border-[#2dccd3]/40 font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      The Integrated Platform
                    </span>
                    <span className="text-[10px] bg-purple-950 text-purple-300 border border-purple-800/40 font-mono font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                      Pillar of Growth
                    </span>
                  </div>
                  <h1 className="text-xl sm:text-3xl font-display font-extrabold tracking-tight text-white leading-tight uppercase">
                    The Threefold Enterprise Operating System <span className="text-[#2dccd3]">(TEOS)</span>
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    Designed and built exclusively for Threefold to deliver premium projects on-time, protect hard-won margins, and automate high-value risk control.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10 shrink-0">
                  <button
                    onClick={() => {
                      setCurrentTab("pm_update");
                      setCurrentProject("proj_1");
                    }}
                    className="px-5 py-3 text-xs font-display font-bold uppercase tracking-wider rounded-xl bg-gradient-to-r from-[#2dccd3] to-[#6f00ff] text-white hover:brightness-110 shadow-lg active:scale-95 transition-all text-center whitespace-nowrap cursor-pointer"
                  >
                    AI Knowledge Layer 🚀
                  </button>
                </div>
              </div>

              {/* Master Layout - Dynamic Systems Architecture Web Map only */}
              <div className="w-full">
                <TeosSpiderWeb onSelectBlock={setSelectedBentoBlock} />
              </div>

            </motion.div>
          ) : (
            
            /* -------- TAB 2: COMPLIANCE TRACER TOOL VIEW -------- */
            <motion.div
              key="compliance_space"
              initial={{ opacity: 0, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              {currentProject === "none" ? (
                
                /* LANDING PAGE CONTAINER: CHOOSE PROJECT */
                <div className="space-y-8 py-4 sm:py-8" key="site_selectors_list">
              {/* Premium Hero presentation card inspired by Threefold homepage branding */}
              <div className="relative rounded-3xl overflow-hidden p-6 sm:p-10 text-white shadow-2xl bg-gradient-to-br from-[#180043] via-[#110134] to-[#280071] border border-white/5">
                <div className="absolute right-0 bottom-0 top-0 w-1/2 opacity-25 pointer-events-none overflow-hidden hidden md:block">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-[#2dccd3]" fill="currentColor">
                    <path d="M100 100 V0 L30 50 Z" />
                  </svg>
                </div>
                
                <div className="max-w-2xl space-y-4 relative z-10">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#2dccd3] tracking-widest bg-cyan-950/40 border border-[#2dccd3]/30 px-3 py-1 rounded-full">
                    INTERNAL PORTAL
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight leading-tight">
                    Three Fold AI Workspace
                  </h1>
                  <p className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
                    Internal portal for commercial insulated panel construction management. Analyze sub-contractor on-site events, track delay damages, and generate contract trace notices.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 pt-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                      <ShieldCheck size={14} className="text-[#2dccd3]" />
                      AS 4902-2006 compliant
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                      <Sliders size={14} className="text-[#6f00ff]" />
                      Real-time Standby Logic
                    </div>
                  </div>
                </div>

                {/* Animated J-Bot Robot Running Track */}
                <div className="mt-8">
                  <RunningConstructionDude />
                </div>
              </div>

              {/* Grid Selector of Active Sites */}
              <div className="space-y-4">
                <div className="text-center">
                  <h2 className="text-xl sm:text-2xl font-display font-extrabold text-[#280071]">
                    Select Active Construction Project
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Select a project site workspace below. This will pre-load the site parameters, custom prompts, and activate our AI Core.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projectsList.map((project) => (
                    <div
                      key={project.id}
                      onClick={() => handleProjectSelect(project.id)}
                      className="group cursor-pointer bg-white rounded-3xl border border-slate-200 hover:border-[#2dccd3] hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden transform hover:-translate-y-1"
                    >
                      {/* Top subtle color edge bar */}
                      <div className={`absolute top-0 inset-x-0 h-1.5 ${
                        project.id === "proj_1" ? "bg-[#2dccd3]" : project.id === "proj_2" ? "bg-[#6f00ff]" : "bg-[#280071]"
                      }`}></div>

                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-1">
                          <span className="text-[10px] uppercase font-mono font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded">
                            {project.location}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            {project.governingAgreement}
                          </span>
                        </div>

                        <h3 className="font-display font-bold text-base text-slate-800 group-hover:text-[#6f00ff] transition-colors leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-xs text-[#280071] font-semibold">{project.type}</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-sans">{project.description}</p>
                        
                        <div className="pt-3 border-t border-slate-100 space-y-1.5">
                          <span className="text-[10px] uppercase font-mono text-slate-400 block font-bold">Latest Site Event:</span>
                          <span className="text-xs font-sans italic text-slate-600 line-clamp-2">
                             "{project.details}"
                          </span>
                        </div>
                      </div>

                      {/* Card Button */}
                      <div className="pt-5 flex items-center justify-between text-xs font-bold text-[#6f00ff] group-hover:text-[#2dccd3] transition-colors font-mono">
                        <span>OPEN AI CORE</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-1.5 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simple illustrative specifications block */}
              <div className="bg-slate-100 rounded-3xl p-6 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white rounded-2xl shadow border border-slate-200 text-[#2dccd3]">
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-800">Need Custom Event Audit?</h4>
                    <p className="text-xs text-slate-500">You can also load Project Agnostic and write details about any delivery constraint manually.</p>
                  </div>
                </div>
                <button
                  onClick={() => handleProjectSelect("proj_agnostic")}
                  className="px-4 py-2 border border-[#280071] text-[#280071] hover:bg-[#280071] hover:text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
                >
                  Custom Workspace agnostic_
                </button>
              </div>

              </div>
            ) : (
            
            /* SPLIT SCREEN WORKSPACE: LEFT PROMPT, RIGHT AGENT */
            <motion.div
              key="workspace"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="space-y-6"
            >
              {/* Back breadcrumb bar */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <button
                  type="button"
                  onClick={() => setCurrentProject("none")}
                  className="text-xs font-mono font-bold text-slate-500 hover:text-[#280071] flex items-center gap-1.5 transition-colors uppercase"
                >
                  ⬅ Back to Project Selector
                </button>
                <div className="text-xs font-mono bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1 text-slate-600">
                  Site: <strong className="text-slate-800">{projectsList.find((p) => p.id === currentProject)?.title}</strong>
                </div>
              </div>

              {/* Split-Screen core (Left Prompt, Right Agent) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* LEFT CONTEXT PANEL (Span 5) */}
                <div className="lg:col-span-5 flex flex-col gap-6">

                  {/* Incident Ingest Form card */}
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 relative">
                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#2dccd3] via-[#6f00ff] to-[#280071]"></div>
                    
                    <div className="mb-4">
                      <span className="text-[9px] uppercase font-mono font-bold text-[#6f00ff] tracking-widest block mb-0.5">
                        SUB-CONTRACTOR REPORTING MODULE
                      </span>
                      <h3 className="font-display font-bold text-lg text-[#280071] flex items-center gap-2">
                        Pre-written Site Prompt
                      </h3>
                      <p className="text-xs text-slate-500 leading-normal mt-1 font-sans">
                        Below is the preloaded statement matching selected project milestones. Feel free to tweak, append, or click below to start PM Agent - J-Bot's trace reasoning.
                      </p>
                    </div>
 
                     <div className="space-y-4">
                       <div className="relative">
                         <textarea
                           id="active-prompt-input"
                           value={prompt}
                           onChange={(e) => setPrompt(e.target.value)}
                           placeholder="Write custom site status delay description here..."
                           className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-800 focus:outline-none focus:border-[#2dccd3] font-sans focus:ring-1 focus:ring-[#2dccd3] h-32 resize-none leading-relaxed shadow-inner"
                         />
                         <div className="absolute bottom-3 right-3 text-[9px] font-mono text-slate-400 bg-white border border-slate-100 rounded px-1.5">
                           {prompt.length} chars
                         </div>
                       </div>
 
                       {/* Dispatch Trigger Button */}
                       <button
                         type="button"
                         onClick={triggerAgentProcessing}
                         disabled={status === "thinking" || !prompt.trim()}
                         className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#2dccd3] via-[#6f00ff] to-[#280071] hover:brightness-110 disabled:bg-slate-400 text-white font-display text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl active:scale-[0.98] duration-75 flex items-center justify-center gap-2 text-center"
                       >
                         {status === "thinking" ? (
                           <>
                             <RefreshCw className="animate-spin text-cyan-200" size={15} />
                             Updating PM Agent - J-Bot...
                           </>
                         ) : (
                           <>
                             <Send size={14} className="text-cyan-200 animate-pulse" />
                             Update PM Agent - J-Bot
                           </>
                         )}
                       </button>
                    </div>

                    {/* Pre-written templates toggler within this site context */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
                      <span className="text-[10px] uppercase font-mono text-slate-400 font-bold tracking-wider">Reset Context Statement:</span>
                      <button
                        type="button"
                        onClick={() => {
                          const original = projectsList.find((p) => p.id === currentProject);
                          if (original) setPrompt(original.initialPrompt);
                        }}
                        className="text-left w-full p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-[10px] font-mono text-[#280071] border border-slate-200 flex items-center justify-between"
                      >
                        <span>✓ Restore Preset text</span>
                        <span className="text-slate-400">Ctrl + Z</span>
                      </button>
                    </div>
                  </div>

                  {/* Site Profile Folder Information */}
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-5 space-y-3">
                    <h4 className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#280071] flex items-center gap-1.5 pb-2 border-b border-slate-100">
                      <Layers size={13} className="text-[#2dccd3]" />
                      Contract Database Context Scanned
                    </h4>

                    <div className="bg-[#110134] text-cyan-300 font-mono text-[10px] p-4 rounded-xl border border-slate-800 leading-relaxed overflow-x-auto space-y-1 shadow-inner relative max-h-48 overflow-y-auto">
                      <div className="text-slate-400 font-bold mb-1 border-b border-slate-800/60 pb-1 flex justify-between items-center">
                        <span>🖿 LOCAL CONTRACT_FS/</span>
                        <span className="text-[8px] bg-[#2dccd3]/10 text-[#2dccd3] px-1 rounded">7 FILES FOUND</span>
                      </div>
                      <div className="hover:text-white transition-colors">📄 /contracts/syd-woolies-as4902-2026.md</div>
                      <div className="hover:text-white transition-colors">📄 /contracts/tfp-sydney-coles-kempscreek.md</div>
                      <div className="hover:text-white transition-colors">📄 /contracts/syd-generic-as4902.md</div>
                      <div className="hover:text-white transition-colors">📄 /policies/tfp-sydney-induction-v2.md</div>
                      <div className="hover:text-white transition-colors">📄 /suppliers/bondor-campbellfield-logistics.md</div>
                      <div className="hover:text-white transition-colors">📄 /customers/woolies-pm-marcus-profile.md</div>
                      <div className="hover:text-white transition-colors">📄 /customers/coles-creek-site-specs.md</div>
                    </div>
                  </div>

                  {/* System command lines logger stream for simulation depth */}
                  <div className="bg-[#180043] rounded-3xl border border-slate-800 p-5 shadow-inner">
                    <span className="text-[9px] uppercase font-mono text-slate-400 font-bold tracking-widest block mb-2">
                      Automated Operational pipeline Logs
                    </span>
                    <div className="font-mono text-[10px] text-slate-300 space-y-1 block max-h-28 overflow-y-auto">
                      {liveLogs.map((log, index) => (
                        <div key={index} className="flex gap-2">
                          <span className="text-[#2dccd3] font-bold">❯</span>
                          <span className="text-slate-100 select-text">{log}</span>
                        </div>
                      ))}
                      {liveLogs.length === 0 && (
                        <div className="text-slate-500 italic">No operations computed yet. Submitting prompt executes audit steps.</div>
                      )}
                    </div>
                  </div>

                </div>

                {/* RIGHT AGENT PANEL (Span 7) */}
                <div className="lg:col-span-7 flex flex-col gap-6">

                  {/* Samantha Agent Box */}
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 flex flex-col items-center relative overflow-hidden">
                    <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#2dccd3] via-[#6f00ff] to-[#280071]"></div>
                    
                    <div className="absolute top-3 right-4 flex items-center gap-1 bg-[#180043] border border-white/10 text-white rounded-lg px-2.5 py-1 text-[10px] font-mono shadow animate-pulse">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                      PM AGENT - J-BOT ENGINE LIVE
                    </div>
 
                     {/* Handcrafted animated 2D pixel girl agent! */}
                     <PixelAgent status={status === "thinking" ? "thinking" : status === "completed" ? "completed" : "idle"} speechBubble={speech} />
                   </div>
 
                   {/* DYNAMIC OUTPUT VIEWER - SMOOTH REVEAL */}
                   <AnimatePresence>
                     {status === "thinking" && (
                       <motion.div
                         key="thinking_loader"
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -10 }}
                         className="bg-white rounded-3xl border border-slate-200 p-8 shadow-xl text-center space-y-4"
                       >
                         <div className="flex justify-center">
                           <RefreshCw className="animate-spin text-[#6f00ff]" size={42} />
                         </div>
                         <h4 className="font-display font-extrabold text-lg text-[#280071] animate-pulse">
                           PM Agent - J-Bot's Core Reasoning...
                         </h4>
                         <div className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                           Checking site telemetry profiles against <strong>Syd-Woolies-AS4902-2026</strong> contract schedules and computing daily operational standby damages. One second...
                         </div>
                       </motion.div>
                     )}

                    {status === "completed" && (
                      <motion.div
                        key="completed_outputs"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-6"
                      >
                        {/* Result Output Tabs header option */}
                        <div className="bg-slate-100 rounded-2xl p-1.5 flex gap-1 border border-slate-200">
                          <button
                            type="button"
                            onClick={() => setActiveOutputTab("summary")}
                            className={`flex-1 py-2 px-3 text-xs font-mono font-bold tracking-tight rounded-xl transition-all uppercase ${
                              activeOutputTab === "summary"
                                ? "bg-white text-[#280071] shadow-md border border-slate-200"
                                : "text-slate-500 hover:text-slate-800"
                            }`}
                          >
                            📈 Cost Calculation
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveOutputTab("gantt")}
                            className={`flex-1 py-2 px-3 text-xs font-mono font-bold tracking-tight rounded-xl transition-all uppercase ${
                              activeOutputTab === "gantt"
                                ? "bg-white text-[#280071] shadow-md border border-slate-200"
                                : "text-slate-500 hover:text-slate-800"
                            }`}
                          >
                            📅 Schedule Shift
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveOutputTab("email")}
                            className={`flex-1 py-2 px-3 text-xs font-mono font-bold tracking-tight rounded-xl transition-all uppercase ${
                              activeOutputTab === "email"
                                ? "bg-white text-[#280071] shadow-md border border-slate-200"
                                : "text-slate-500 hover:text-slate-800"
                            }`}
                          >
                            ✉ claim notice
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveOutputTab("documents")}
                            className={`flex-1 py-2 px-3 text-xs font-mono font-bold tracking-tight rounded-xl transition-all uppercase ${
                              activeOutputTab === "documents"
                                ? "bg-white text-[#280071] shadow-md border border-slate-200"
                                : "text-slate-500 hover:text-slate-800"
                            }`}
                          >
                            🔎 legal cited
                          </button>
                        </div>

                        {/* TAB 1: COST SUMMARY */}
                        {activeOutputTab === "summary" && (
                          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 space-y-4">
                            <span className="text-[10px] uppercase font-mono font-bold text-[#6f00ff] tracking-widest block mb-1">
                              Live Standby Claim & Daily Penalties
                            </span>

                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                              <div>
                                <h3 className="font-display font-extrabold text-2xl text-slate-800 tracking-tight">
                                  {delaySource}
                                </h3>
                                <p className="text-xs text-slate-500 mt-1 font-sans">
                                  Responsible: <span className="font-semibold text-slate-700">{responsibleParty}</span>
                                </p>
                              </div>
                              <div className="bg-gradient-to-r from-[#2dccd3] to-[#6f00ff] text-white rounded-2xl px-5 py-3 shadow text-center">
                                <span className="text-[8px] uppercase font-mono block tracking-wider leading-none text-cyan-100">Calculated Standby Claim</span>
                                <span className="text-xl font-extrabold font-mono tracking-tight">{calculatedCost}</span>
                              </div>
                            </div>

                            {delayDays > 0 ? (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="p-4 border border-rose-100 bg-rose-50/50 rounded-2xl space-y-1">
                                  <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Site Crew Impact:</span>
                                  <strong className="text-base text-rose-950 font-bold block">{delayDays} Non-productive days</strong>
                                  <span className="text-xs text-slate-500 block leading-tight">
                                    8 installation workers idle under standby claim rate of $2,500/day.
                                  </span>
                                </div>
                                <div className="p-4 border border-[#2dccd3]/20 bg-cyan-50/30 rounded-2xl space-y-1">
                                  <span className="text-[10px] uppercase font-mono text-slate-400 font-bold block">Rescheduling Damages:</span>
                                  <strong className="text-base text-[#280071] font-bold block">$500.00 Supplier Penalty</strong>
                                  <span className="text-xs text-slate-500 block leading-tight">
                                    Bondor panel line rescheduled within 7 days under standard storage guidelines.
                                  </span>
                                </div>
                              </div>
                            ) : (
                              <div className="p-4 border border-emerald-100 bg-emerald-50/40 rounded-2xl flex items-center gap-3">
                                <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                                <div className="text-xs text-emerald-950 leading-relaxed font-sans">
                                  <strong>Crew counts successfully updated.</strong> No financial claim is necessary under internal operational rules. Standard installation timeline is secure.
                                </div>
                              </div>
                            )}

                            {/* Crew Recommendations */}
                            <div className="bg-[#180043] text-white p-5 rounded-2xl space-y-2">
                              <span className="text-[9px] uppercase font-mono text-[#2dccd3] font-bold block tracking-wider">Operational core advice:</span>
                              <div className="text-xs">
                                Capacity recommendation size: <strong className="text-cyan-200 text-sm">{metricsImpact.estimatedRequiredAhead} installers</strong> (normally {metricsImpact.currentInstallers})
                              </div>
                              <p className="text-xs text-slate-300 leading-normal font-sans italic pt-1">
                                "{metricsImpact.recommendation}"
                              </p>
                            </div>
                          </div>
                        )}

                        {/* TAB 2: GANTT CHART */}
                        {activeOutputTab === "gantt" && (
                          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 space-y-5">
                            <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                              <div>
                                <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-[#280071]">
                                  Gantt Project Schedule Shift
                                </h3>
                                <p className="text-[10px] text-slate-400 mt-0.5">Timeline calculations reflecting this active incident on the critical path.</p>
                              </div>
                              <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-slate-200 rounded"></span> Original</span>
                                <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 bg-[#6f00ff] rounded"></span> Pushed ({delayDays}d)</span>
                              </div>
                            </div>

                            <div className="space-y-5">
                              {/* Task 1 */}
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="font-semibold text-slate-700">1. Site Preparation & Foundation Slab</span>
                                  <span className="font-mono text-slate-400 text-[10px]">Days 0 to {6 + delayDays}</span>
                                </div>
                                <div className="h-6 bg-slate-100 rounded-lg overflow-hidden flex relative">
                                  <div className="h-full bg-slate-300 w-[50%] flex items-center px-2 text-[9px] font-mono text-slate-600 font-bold">Base Cure (6d)</div>
                                  {delayDays > 0 && (
                                    <div className="h-full bg-rose-500 w-[20%] flex items-center px-1 text-[9px] font-mono text-white font-bold animate-pulse">+{delayDays}d Delay</div>
                                  )}
                                </div>
                              </div>

                              {/* Task 2 */}
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="font-semibold text-slate-700">2. Bondor Insulated Panel Delivery</span>
                                  <span className="font-mono text-slate-400 text-[10px]">Days {4 + delayDays} to {7 + delayDays}</span>
                                </div>
                                <div className="h-6 bg-slate-100 rounded-lg overflow-hidden flex relative">
                                  <div className="h-full bg-transparent transition-all" style={{ width: `${30 + (delayDays * 5)}%` }}></div>
                                  <div className="h-full bg-[#2dccd3]/80 w-[25%] flex items-center px-2 text-[9px] font-mono text-[#180043] font-bold">Rescheduled</div>
                                </div>
                              </div>

                              {/* Task 3 */}
                              <div className="space-y-1">
                                <div className="flex justify-between text-xs">
                                  <span className="font-semibold text-slate-700">3. Insulated Panel Cladding (Three Fold)</span>
                                  <span className="font-mono text-slate-400 text-[10px]">Days {7 + delayDays} to {14 + delayDays}</span>
                                </div>
                                <div className="h-6 bg-slate-100 rounded-lg overflow-hidden flex relative">
                                  <div className="h-full bg-transparent transition-all" style={{ width: `${50 + (delayDays * 5)}%` }}></div>
                                  <div className="h-full bg-[#180043] w-[35%] flex items-center px-2 text-[9px] font-mono text-white font-bold">Erection Stage</div>
                                </div>
                              </div>
                            </div>

                            <p className="text-[10px] text-slate-500 italic text-center font-sans pt-2">
                              Note: Scheduled cold freezer floor slab handover limits can alter downstream structural load constraints.
                            </p>
                          </div>
                        )}

                        {/* TAB 3: claim email */}
                        {activeOutputTab === "email" && (
                          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 space-y-4">
                            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                              <div>
                                <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-[#280071]">
                                  SMTP Contract Notice Draft
                                </h3>
                                <p className="text-[10px] text-slate-400 mt-0.5">Pre-formulated forMarcus Vance & Melb Cold Store PMs.</p>
                              </div>
                              <div className="flex gap-2">
                                <button
                                  type="button"
                                  onClick={handleCopyEmail}
                                  className="px-3 py-1.5 border border-slate-200 hover:bg-slate-50 text-slate-700 text-[10px] font-mono uppercase font-bold rounded-lg transition-all flex items-center gap-1"
                                >
                                  <Clipboard size={12} className="text-slate-400" />
                                  {copied ? "Copied" : "Copy"}
                                </button>
                                <button
                                  type="button"
                                  onClick={handleSMTPDispatch}
                                  disabled={dispatched}
                                  className="px-3 py-1.5 bg-gradient-to-r from-[#2dccd3] to-[#6f00ff] hover:brightness-110 disabled:bg-slate-300 text-white text-[10px] font-mono uppercase font-bold rounded-lg transition-all flex items-center gap-1"
                                >
                                  <CheckCircle size={12} className="text-white" />
                                  {dispatched ? "Dispatched" : "e-Send Notice"}
                                </button>
                              </div>
                            </div>

                            <div className="space-y-3 font-sans text-xs">
                              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl space-y-1 font-mono text-[10px] text-slate-500">
                                <div><span className="font-bold text-slate-400">From:</span> operations@threefold.net.au (Three Fold Operational Core)</div>
                                <div><span className="font-bold text-slate-400">To:</span> marcus.vance@melbcold.com.au (Melb Cold Store PM)</div>
                                <div><span className="font-bold text-slate-400">Subject:</span> <span className="text-slate-800 font-bold">{emailSubject}</span></div>
                              </div>

                              <div className="p-4 bg-[#180043] rounded-xl text-slate-200 max-h-72 overflow-y-auto font-mono text-[10px] leading-relaxed whitespace-pre-wrap select-text selection:bg-[#2dccd3] selection:text-[#180043]">
                                {emailBody}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TAB 4: LEGAL CITED */}
                        {activeOutputTab === "documents" && (
                          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 space-y-4">
                            <span className="text-[10px] uppercase font-mono font-bold text-[#6f00ff] tracking-widest block mb-1">
                              Legal Citation Audit Alignment
                            </span>

                            <div className="space-y-4">
                              {citations.length > 0 ? (
                                citations.map((cite, idx) => (
                                  <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-100 px-2 py-0.5 rounded shadow-sm">
                                        📄 {cite.sourceFile}
                                      </span>
                                      <span className="text-[9px] uppercase font-mono bg-indigo-50 border border-indigo-100 text-[#6f00ff] font-bold px-2 py-0.5 rounded">
                                        {cite.clauseOrSection}
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-700 italic font-sans leading-relaxed">
                                      "{cite.textSnippet}"
                                    </p>
                                  </div>
                                ))
                              ) : (
                                <div className="space-y-3">
                                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                                    <div className="flex items-center justify-between">
                                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-white border border-slate-100 px-2 py-0.5 rounded shadow-sm">
                                        📄 TFP_Delay_Incident_Standard_v3.md
                                      </span>
                                      <span className="text-[9px] uppercase font-mono bg-indigo-50 border border-indigo-100 text-[#6f00ff] font-bold px-2 py-0.5 rounded">
                                        Section 1.2
                                      </span>
                                    </div>
                                    <p className="text-xs text-slate-700 italic font-sans leading-relaxed">
                                      "The Site Supervisor must induction check all onboarded staff and verify valid certificates of currency and scaffold tickets."
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>

    {/* ----- DETAILED POC SECTOR DETAILS OVERLAY MODAL ----- */}
    <AnimatePresence>
      {selectedBentoBlock !== null && (() => {
        const block = bentoBlocks.find((b) => b.id === selectedBentoBlock);
        if (!block) return null;
        return (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-slate-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl max-w-6xl w-full overflow-hidden flex flex-col max-h-[92vh] text-left"
            >
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                {(() => {
                  switch (block.id) {
                    case 1:
                      return <CeoCockpitView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 2:
                      return <MainContractorSyncView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 3:
                      return (
                        <ContractLegalView 
                          onBackToMap={() => setSelectedBentoBlock(null)} 
                          onDispatchAI={(txt) => {
                            setSelectedBentoBlock(null);
                            setCurrentTab("pm_update");
                            setSpeech(txt || "AI compliance gate active for contract delay simulation.");
                          }} 
                        />
                      );
                    case 4:
                      return <CostBudgetView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 5:
                      return <ProcurementSupplierView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 6:
                      return <AssetManagementView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 7:
                      return <OHSWHSView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 8:
                      return <QAITPView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 9:
                      return <HRPeopleView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 10:
                      return <DesignEngineeringView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 11:
                      return <ConstructionDeliveryView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 12:
                      return (
                        <ClaimsLedgerView 
                          onBackToMap={() => setSelectedBentoBlock(null)} 
                          onDispatchAI={(txt) => {
                            setSelectedBentoBlock(null);
                            setCurrentTab("pm_update");
                            setSpeech(txt || "AI statutory billing claim log loaded successfully.");
                          }} 
                        />
                      );
                    case 13:
                      return <HandoverWarrantyView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    case 14:
                      return <PolicyGovernanceView onBackToMap={() => setSelectedBentoBlock(null)} />;
                    default:
                      return (
                        <div className="text-center py-12 space-y-4">
                          <p className="text-slate-400">Loading module {block.title}...</p>
                          <button
                            onClick={() => setSelectedBentoBlock(null)}
                            className="px-4 py-2 bg-white/10 rounded-xl font-mono text-xs hover:bg-white/25"
                          >
                            ✕ Close
                          </button>
                        </div>
                      );
                  }
                })()}
              </div>

              {/* Modal Footer */}
              <div className="p-4 bg-slate-900/90 border-t border-slate-800 flex justify-between items-center text-[9px] text-slate-400 font-mono">
                <span>POC INTELLIGENCE LEVEL: 100% SPEC ACCURATE</span>
                <span>TEOS CORE INTEGRATED MICRO-WORKFOUNDRY</span>
              </div>
            </motion.div>
          </motion.div>
        );
      })()}
    </AnimatePresence>
  </div>

      {/* Modern minimal corporate footer */}
      <footer className="border-t border-slate-200 bg-white py-6 mt-auto text-center text-xs text-slate-500 font-sans">
        <p>© 2026 Three Fold Panel Pty Ltd. Victoria, Australia. All Rights Reserved.</p>
        <p className="text-[10px] text-slate-400 mt-1">
          Insulated cladding & fire-rated refrigeration panels installation tracking architecture.
        </p>
      </footer>

    </div>
  );
}
