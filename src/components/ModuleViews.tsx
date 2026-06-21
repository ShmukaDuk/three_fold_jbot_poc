import React, { useState } from "react";
import { 
  Building2, Scale, DollarSign, ShoppingCart, Hammer, Shield, BadgeCheck, 
  Users2, Ruler, HardHat, FileSignature, Award, Fingerprint, Gauge, Workflow,
  Plus, CheckCircle2, AlertTriangle, Play, RefreshCw, Send, ChevronRight, Sliders,
  TrendingDown, TrendingUp, Sparkles, Filter, FileText, Check, Search, Calendar,
  ArrowRight, Activity, Clock, ShieldAlert, Library
} from "lucide-react";
import PixelAgent from "../PixelAgent";

// Contract Node mock for Clause Tree
interface ContractNode {
  id: string;
  name: string;
  type: string;
  status: "Backlog" | "In Review" | "Accepted" | "Solicitor Clear";
  value: string;
  riskRating: "Low" | "Medium" | "High" | "Critical";
  children?: ContractNode[];
}

// Interactive Modules Props
interface ModuleProps {
  onBackToMap: () => void;
  onDispatchAI?: (text: string) => void;
}

/* ==========================================
   1. CEO COCKPIT (EXECUTIVE DASHBOARD)
   ========================================== */
export function CeoCockpitView({ onBackToMap }: ModuleProps) {
  const [activeTab, setActiveTab] = useState<"financials" | "commercial" | "risks">("financials");
  const [projectFilter, setProjectFilter] = useState("all");

  const [simulatedGrossMargin, setSimulatedGrossMargin] = useState(24.5);
  const [revenueForecast, setRevenueForecast] = useState(12800000);

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-[#2dccd3] font-bold uppercase tracking-widest">
            Module 01 // Global Operations
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            EXECUTIVE DASHBOARD (CEO COCKPIT)
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      {/* Top Cockpit Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full filter blur-xl"></div>
          <span className="text-[10px] text-emerald-400 font-mono font-bold block uppercase">Revenue Forecast</span>
          <p className="text-xl font-display font-black text-white mt-1">
            ${(revenueForecast / 1000000).toFixed(1)}M
          </p>
          <div className="text-[10px] font-mono text-emerald-500 flex items-center gap-1 mt-1">
            <TrendingUp size={11} /> +12% target variance
          </div>
        </div>

        <div className="bg-slate-900 border border-cyan-500/30 rounded-2xl p-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full filter blur-xl"></div>
          <span className="text-[10px] text-cyan-400 font-mono font-bold block uppercase">Gross Margin Forecast</span>
          <p className="text-xl font-display font-black text-white mt-1">
            {simulatedGrossMargin.toFixed(1)}%
          </p>
          <div className="text-[10px] font-mono text-teal-400 flex items-center gap-1 mt-1">
            <TrendingUp size={11} /> Robust project health
          </div>
        </div>

        <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/5 rounded-full filter blur-xl"></div>
          <span className="text-[10px] text-amber-400 font-mono font-bold block uppercase">Cashflow Forecast</span>
          <p className="text-xl font-display font-black text-white mt-1">+$4.23M</p>
          <div className="text-[10px] font-mono text-amber-500 flex items-center gap-1 mt-1">
            <CheckCircle2 size={11} /> Positive Q2 positioning
          </div>
        </div>

        <div className="bg-slate-900 border border-rose-500/30 rounded-2xl p-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-rose-500/5 rounded-full filter blur-xl"></div>
          <span className="text-[10px] text-rose-400 font-mono font-bold block uppercase">Outstanding Debtors</span>
          <p className="text-xl font-display font-black text-white mt-1">$680K</p>
          <div className="text-[10px] font-mono text-rose-500 flex items-center gap-1 mt-1">
            <AlertTriangle size={11} /> 1 overdue trigger
          </div>
        </div>

        <div className="bg-slate-900 border border-purple-500/30 rounded-2xl p-4 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-tr from-[#6f00ff]/20 to-transparent rounded-full filter blur-xl"></div>
          <span className="text-[10px] text-purple-400 font-mono font-bold block uppercase">Work In Hand</span>
          <p className="text-xl font-display font-black text-white mt-1">$28.42M</p>
          <div className="text-[10px] font-mono text-purple-400 flex items-center gap-1 mt-1">
            <Award size={11} /> High capacity utilization
          </div>
        </div>
      </div>

      {/* Control Area Tabs */}
      <div className="bg-[#0b0321]/50 border border-white/10 rounded-3xl p-6 space-y-6">
        <div className="flex border-b border-white/10 gap-4">
          {["financials", "commercial", "risks"].map((t) => (
            <button
              key={t}
              onClick={() => setActiveTab(t as any)}
              className={`pb-3 text-xs font-mono font-black uppercase tracking-wider transition-colors relative cursor-pointer ${
                activeTab === t ? "text-[#2dccd3]" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {activeTab === t && <span className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-[#2dccd3]" />}
              {t} cockpit
            </button>
          ))}
        </div>

        {activeTab === "financials" && (
          <div className="space-y-4 animate-fadeIn">
            {/* Interactive profit simulator sliders */}
            <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="text-xs font-mono text-[#2dccd3] font-bold uppercase">
                  Interactive Margin Forecaster & Predictive Simulation
                </h4>
                <span className="text-[10px] font-mono bg-[#2dccd3]/10 text-[#2dccd3] px-2 py-0.5 rounded">
                  AI Live Forecast Engine
                </span>
              </div>
              <p className="text-xs text-slate-300">
                Adjust simulated parameters below to recalculate global profit forecast values across the Sydney and Melbourne yards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-300">
                    <span>Project Target Margin</span>
                    <span className="text-white font-extrabold">{simulatedGrossMargin.toFixed(1)}%</span>
                  </div>
                  <input 
                    type="range" min="15" max="35" step="0.5"
                    value={simulatedGrossMargin}
                    onChange={(e) => setSimulatedGrossMargin(parseFloat(e.target.value))}
                    className="w-full accent-[#2dccd3] cursor-pointer"
                  />
                  <span className="text-[9px] text-slate-400 block">Typical industry standards require at least 22% for industrial PIR cold storage rooms.</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-slate-300">
                    <span>Simulated Q2 Revenue Pipeline</span>
                    <span className="text-white font-extrabold">${(revenueForecast / 1000000).toFixed(2)}M</span>
                  </div>
                  <input 
                    type="range" min="8000000" max="22000000" step="500000"
                    value={revenueForecast}
                    onChange={(e) => setRevenueForecast(parseInt(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                  <span className="text-[9px] text-slate-400 block">Simulate major tenders currently pending final sign-off.</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/5 space-y-3">
                <h4 className="text-xs font-bold uppercase text-slate-200">Current active projects</h4>
                <div className="space-y-2">
                  {[
                    { name: "Woolworths Minchinbury DC", margin: "24.2%", status: "On Track", cost: "$4.1M" },
                    { name: "Coles Kemps Creek Cold Room", margin: "22.8%", status: "Risky", cost: "$5.8M" },
                    { name: "Sydney Airport High-Bay Storage", margin: "28.5%", status: "High Margin", cost: "$2.9M" }
                  ].map((p, i) => (
                    <div key={i} className="flex justify-between items-center text-xs p-2 bg-slate-900/60 rounded-xl border border-white/5">
                      <div>
                        <p className="font-bold text-white">{p.name}</p>
                        <p className="text-[10px] text-slate-400 font-mono">Cost to Date: {p.cost}</p>
                      </div>
                      <div className="text-right font-mono">
                        <p className="font-extrabold text-[#2dccd3]">{p.margin}</p>
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded uppercase ${
                          p.status === "On Track" ? "bg-emerald-500/10 text-emerald-400" :
                          p.status === "Risky" ? "bg-rose-500/10 text-rose-400" : "bg-purple-500/10 text-purple-400"
                        }`}>{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#180043] rounded-2xl p-4 border border-white/10 text-white space-y-2 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 w-24 h-24 bg-[#2dccd3]/10 rounded-full filter blur-xl"></div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#2dccd3] font-mono">
                  <Sparkles size={14} className="text-amber-400" />
                  <span>AI DAILY BUSINESS COCKPIT SUMMARY</span>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1.5 italic">
                  "Threefold is forecasting $2.3M profit this month. Core focus has $180k unapproved variations. Melbourne cold store utilization is 82%. Kingspan delivery risk identified on Project X. Expecting subgrade structural concrete delay impact to fully offset NSW schedule buffer unless backup welder pool is activated."
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "commercial" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="bg-white/5 border border-white/15 rounded-2xl p-4 space-y-3">
              <h4 className="text-xs font-bold font-mono text-[#2dccd3] uppercase">Variations Ledger Oversight</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400 font-mono text-[10px]">
                      <th className="pb-2">ID</th>
                      <th className="pb-2">Project</th>
                      <th className="pb-2">Variation Description</th>
                      <th className="pb-2">Value</th>
                      <th className="pb-2">AS 4902 Code</th>
                      <th className="pb-2 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2 text-slate-300 font-sans">
                    {[
                      { id: "VAR-402", proj: "Coles Kemps", desc: "Additional PIR panels for freezer wall", val: "$124,000", code: "Cl 11.2", stat: "Approved" },
                      { id: "VAR-403", proj: "Syd Airport", desc: "Seismic suspension frame modifications", val: "$88,500", code: "Cl 13.5", stat: "Approved" },
                      { id: "VAR-404", proj: "Woolworths Minch", desc: "Sub-grade concrete curing delay stand-down", val: "$182,200", code: "Cl 34.9", stat: "Pending Review" }
                    ].map((v, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/5">
                        <td className="py-2.5 font-mono text-[#2dccd3]">{v.id}</td>
                        <td className="py-2.5">{v.proj}</td>
                        <td className="py-2.5">{v.desc}</td>
                        <td className="py-2.5 font-bold text-white">{v.val}</td>
                        <td className="py-2.5 font-mono text-purple-300">{v.code}</td>
                        <td className="py-2.5 text-right font-bold">
                          <span className={`text-[10px] px-1.5 py-0.5 rounded ${
                            v.stat === "Approved" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400"
                          }`}>{v.stat}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === "risks" && (
          <div className="space-y-4 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
                <h4 className="text-xs font-bold uppercase text-red-400 flex items-center gap-1.5 font-mono">
                  <ShieldAlert size={15} /> CONTRACT OBLIGATION BREACH TRIGGERS
                </h4>
                <div className="space-y-2 font-mono text-[11px]">
                  <div className="p-2.5 bg-red-950/20 border border-red-900/30 rounded-lg text-slate-300">
                    <p className="font-bold text-red-200 uppercase">Warning: Kingspan Container delay</p>
                    <p className="text-[10px] text-slate-400 mt-1">Status: Ship delayed off Brisbane coast. Impacting high-bay insulation walls.</p>
                  </div>
                  <div className="p-2.5 bg-amber-950/20 border border-amber-900/30 rounded-lg text-slate-300">
                    <p className="font-bold text-amber-200 uppercase">Alert: Scaffold induction compliance</p>
                    <p className="text-[10px] text-slate-400 mt-1">Woolworths Minchinbury site required SWMS review for roof lifts.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-3">
                <h4 className="text-xs font-bold uppercase text-cyan-400 flex items-center gap-1.5 font-mono">
                  <Clock size={15} /> REGULATORY & INSURANCE EXPIRIES
                </h4>
                <div className="space-y-2 font-mono text-[11px]">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span>Public Liability ($50M Coverage)</span>
                    <span className="text-emerald-400">Validated (120 days)</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span>AS 4902 Latent Defect Indemnity</span>
                    <span className="text-emerald-400">Insured (Years 1-7)</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span>Cranes Hoist Inspection Certificate</span>
                    <span className="text-rose-400 font-bold">Expires in 4 days!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================
   2. MAIN CONTRACTOR INTEGRATION (SYNC LAYER)
   ========================================== */
export function MainContractorSyncView({ onBackToMap }: ModuleProps) {
  const [activeSyncing, setActiveSyncing] = useState(true);
  const [logs, setLogs] = useState([
    { time: "Just Now", module: "RFI Sync", doc: "RFI #044: High-Bay thermal air barrier clash", provider: "PROCORE" },
    { time: "12 mins ago", module: "Drawing Sync", doc: "Drawing Rev 5: PIR Panel layout - Bay 4", provider: "AUTODESK" },
    { time: "1 hour ago", module: "Site Notes", doc: "Instruction #92: Concrete subslab level variance", provider: "PROCORE" },
    { time: "3 hours ago", module: "Defects List", doc: "Defect Item #12: Coldroom door rubber compression leak", provider: "ACONEX" }
  ]);

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
            Module 02 // Cloud Architecture
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            MAIN CONTRACTOR INTEGRATION
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#0b0321]/80 border border-white/10 rounded-2xl p-6 space-y-4 shadow-xl">
            <h3 className="font-display font-bold text-white text-sm uppercase">Cloud Connectors</h3>
            <p className="text-xs text-slate-400 leading-relaxed font-sans">
              Seamlessly link on-site foreman updates with Threefold’s executive ledger to eliminate commercial delay leaking.
            </p>

            <div className="grid grid-cols-2 gap-2 text-center text-[10px] font-bold font-mono">
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/50 transition-colors">
                <p className="text-white text-xs">PROCORE</p>
                <span className="text-emerald-400 block mt-1">● SYNCED</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-cyan-400/50 transition-colors">
                <p className="text-white text-xs">AUTODESK</p>
                <span className="text-emerald-400 block mt-1">● ACTIVE</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-400/50 transition-colors">
                <p className="text-white text-xs">ACONEX</p>
                <span className="text-cyan-400 block mt-1">● LISTENING</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/10 rounded-xl opacity-60">
                <p className="text-white text-xs">PRIMAVERA</p>
                <span className="text-slate-400 block mt-1">STANDBY</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">Live Webhook Listener</span>
              <button 
                onClick={() => setActiveSyncing(!activeSyncing)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeSyncing ? "bg-emerald-500 text-white" : "bg-slate-700 text-slate-300"
                }`}
              >
                {activeSyncing ? "✓ RUNNING" : "🡛 PAUSED"}
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center pb-2 border-b border-white/10">
              <h3 className="text-xs font-mono font-bold text-cyan-400 uppercase">
                Synchronized telemetry sync logger
              </h3>
              <span className="text-[10px] font-mono text-slate-400">Status: Listening to 4 channels</span>
            </div>

            <div className="space-y-2.5">
              {logs.map((log, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white/5 border border-white/10 rounded-xl text-xs">
                  <div className="p-1 px-2 rounded font-mono font-black text-[9px] bg-cyan-950 text-cyan-400 uppercase">
                    {log.provider}
                  </div>
                  <div className="flex-1 space-y-0.5">
                    <p className="text-white font-bold">{log.doc}</p>
                    <p className="text-slate-400 text-[10px]">Module Trigger: {log.module}</p>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 shrink-0">{log.time}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button 
                onClick={() => {
                  setLogs((prev) => [
                    { time: "Just Now", module: "Programmes Sync", doc: "Woolworths Phase-3 Crane Lift lookahead updated", provider: "PROCORE" },
                    ...prev
                  ]);
                }}
                className="w-full py-2.5 border border-dashed border-cyan-500/40 text-cyan-400 text-xs font-mono font-bold hover:bg-cyan-500/5 hover:border-cyan-400 rounded-xl transition-all cursor-pointer"
              >
                + Simulate New Incoming Cloud Sync Webhook Frame
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   3. CONTRACT / COMMERCIAL / LEGAL (JIRA-STYLE)
   ========================================== */
export function ContractLegalView({ onBackToMap, onDispatchAI }: ModuleProps) {
  // Navigation tabs for the 7 systems
  const [activeTab, setActiveTab] = useState<
    "workflows" | "obligations" | "variations" | "eot" | "correspondence" | "insurances" | "legal_advice"
  >("workflows");

  // Project Selection State
  const [selectedProject, setSelectedProject] = useState<"woolworths" | "coles" | "kingspan">("woolworths");
  const [contractFileUploaded, setContractFileUploaded] = useState(true);
  const [uploadingState, setUploadingState] = useState<"idle" | "uploading" | "scanned">("idle");

  // Tab 2: Obligations States
  const [obFilter, setObFilter] = useState<"all" | "critical" | "action">("all");
  const [scanningObMessage, setScanningObMessage] = useState("");
  const [loadingOb, setLoadingOb] = useState(false);

  // Tab 3: Variations list
  const [variationsList, setVariationsList] = useState([
    {
      id: "VAR-001",
      title: "PIR Core Wall Panel Thickness Upgrade",
      cost: 45000,
      days: 4,
      clause: "Clause 36.1 (Superintendent's Directives)",
      status: "Approved",
      subcontractor: "Askin Thermal Systems",
      date: "2026-05-14"
    },
    {
      id: "VAR-002",
      title: "Sub-grade Structural Concrete Reinforcement",
      cost: 112000,
      days: 8,
      clause: "Clause 34.3 (Latent On-site Ground Conditions)",
      status: "Pending Superintendent Approval",
      subcontractor: "Rigging Specialists Ltd",
      date: "2026-06-02"
    },
    {
      id: "VAR-003",
      title: "Revised Grouting Material Compliance Scope",
      cost: 13500,
      days: 2,
      clause: "Clause 36.2 (Valuation of Variations)",
      status: "Draft",
      subcontractor: "Rigging Specialists Ltd",
      date: "2026-06-18"
    }
  ]);
  const [newVarTitle, setNewVarTitle] = useState("");
  const [newVarCost, setNewVarCost] = useState("25000");
  const [newVarDays, setNewVarDays] = useState("3");
  const [newVarClause, setNewVarClause] = useState("Clause 36.1");
  const [newVarSub, setNewVarSub] = useState("Askin Thermal Systems");

  // Tab 4: EOT State
  const [eotApproved, setEotApproved] = useState(false);
  const [eotDispatched, setEotDispatched] = useState(false);
  const [isSendingEot, setIsSendingEot] = useState(false);
  const [delayDays, setDelayDays] = useState(8);

  // Tab 5: Correspondence States
  const [selectedNoticeType, setSelectedNoticeType] = useState<"access_delay" | "sop_NSW" | "dispute_clause47">("access_delay");
  const [noticeHumanApproved, setNoticeHumanApproved] = useState(false);
  const [noticeDispatchedLog, setNoticeDispatchedLog] = useState<string[]>([]);
  const [customNoticeSubject, setCustomNoticeSubject] = useState("Formal Notice under Clause 34.4 (Delay Notification)");
  const [customNoticeBody, setCustomNoticeBody] = useState(
    `We act as Threefold Construction Project Management. We formalise notifications concerning site restrictions. 

Pursuant to Clause 34.4 of our AS 4902-2006 agreement, we notify the Superintendent of access interruptions in the Loading Yard. This critical event represents a delay to activities governing the scheduled cold room layout.

Estimated impact remains 5-8 business days dependent on delivery clearance. Please prepare necessary EOT clearances for review.`
  );

  // Tab 6: Insurance Checklist & Retention limits
  const [uploadedCoCName, setUploadedCoCName] = useState<string | null>(null);
  const [isUploadingCoC, setIsUploadingCoC] = useState(false);
  const [activeInsurances, setActiveInsurances] = useState([
    {
      name: "Public & Products Liability",
      required: "$20,000,000",
      current: "$20,000,000",
      compliance: "Fully Compliant",
      expiry: "2026-11-15",
      policyNo: "PL-45091-NSW"
    },
    {
      name: "Professional Indemnity",
      required: "$10,000,005",
      current: "$10,000,000",
      compliance: "Fully Compliant",
      expiry: "2026-12-01",
      policyNo: "PI-89102-GEN"
    },
    {
      name: "Transit & Cargo Marine Works",
      required: "$1,500,000",
      current: "$2,000,000",
      compliance: "Fully Compliant",
      expiry: "2027-01-30",
      policyNo: "TC-33821-GL"
    },
    {
      name: "Workers Compensation (NSW)",
      required: "Statutory",
      current: "Statutory NSW Compliant",
      compliance: "Fully Compliant",
      expiry: "2027-03-15",
      policyNo: "WC-88192-NSW"
    }
  ]);

  // Tab 7: AI Legal Counsel state
  const [legalHistory, setLegalHistory] = useState([
    {
      sender: "system",
      text: "⚡ TEOS Legal Agent: J-Bot initialized. Specialized in standard Australian commercial contracts (AS 4902-2006, AS 4300, AS 2124), subcontractor delay audits, and NSW Security of Payment compliance. Choose an active project and ask me to trace risks or extension-of-time (EOT) relief."
    }
  ]);
  const [legalPrompt, setLegalPrompt] = useState(
    "based on a 15-day concrete pouring delay, does this effect our contracts or obligations under Woolworths Minchinbury, and please check if there is any clause where we can extend our deadlines"
  );
  const [isAnsweringLegal, setIsAnsweringLegal] = useState(false);

  // Core metadata configs based on Selected Project Contract
  const projectContracts = {
    woolworths: {
      docName: "Woolworths_Minchinbury_Logistics_Park_AS4902_HeadAgreement.pdf",
      client: "Woolworths Group Limited",
      value: "$4,120,000",
      signed: "2026-01-14",
      liquidatedDamages: "$5,000 per day (capped at 10% contract value)",
      defectPeriod: "12 Calendar Months",
      retentionRate: "10% cash retention down to 5% safe bank guarantee sum"
    },
    coles: {
      docName: "Coles_KempsCreek_ColdStore_SubcontractAgreement.pdf",
      client: "Coles Group Supply Chain Ltd",
      value: "$5,850,000",
      signed: "2026-02-18",
      liquidatedDamages: "$7,500 per day (capped at 5% contract value)",
      defectPeriod: "18 Calendar Months",
      retentionRate: "5% bank guarantee submitted on Commencement"
    },
    kingspan: {
      docName: "Kingspan_QuadCore_FreezerPanel_DeedOfSupply.pdf",
      client: "Kingspan Insulated Panels Pty Ltd",
      value: "$1,450,000",
      signed: "2026-03-05",
      liquidatedDamages: "No direct LDs. Indemnity capped at 100% of purchase value",
      defectPeriod: "10-Year Manufacturer Integrity Warranty",
      retentionRate: "Nil (Supplier Advance Payment Bond Active)"
    }
  };

  const activeContract = projectContracts[selectedProject] || projectContracts.woolworths;

  // Simulate file upload
  const handleDummyUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadingState("uploading");
      setTimeout(() => {
        setUploadingState("scanned");
        setContractFileUploaded(true);
      }, 1500);
    }
  };

  // Switch templates on Tab 5
  React.useEffect(() => {
    if (selectedNoticeType === "access_delay") {
      setCustomNoticeSubject("Formal Notice under Clause 34.4 (Delay Notification) - Site Access Restraints");
      setCustomNoticeBody(
        `We act as Threefold Construction Project Management. We formalise notifications concerning site restrictions. 

Pursuant to Clause 34.4 of our AS 4902-2006 head contract, we hereby notify the Superintendent that structural crane paths are blocked in NSW Yard, which prevents the safe staging of PIR high-bay sliding freezer doors. This delay condition impacts critical path schedules.

Estimated delay is currently tracking at 8 business days. We request the Superintendent coordinate immediate clearing of access routes.`
      );
    } else if (selectedNoticeType === "sop_NSW") {
      setCustomNoticeSubject("Security of Payment NSW Payment Claim 04 - Work Done to June 2026");
      setCustomNoticeBody(
        `THIS IS A PAYMENT CLAIM MADE UNDER THE BUILDING AND CONSTRUCTION INDUSTRY SECURITY OF PAYMENT ACT 1999 (NSW).

Threefold Construction hereby claims the sum of $418,250.00 (plus GST) for engineering installation and materials supplied up to 21 June 2026. This relates directly to Section 5 'Procurement / Supplier Logistics' and Section 11 'Construction Delivery'.

Your attention is directed to Section 14 & Clause 42.1 of the contract. You must provide a Payment Schedule within 10 business days of receiving this claim, stating the amount you propose to pay, else the entire claim amount becomes a statutory debt.`
      );
    } else {
      setCustomNoticeSubject("Clause 47.1 - Formal Notice of Dispute (Site Access Conditions & Directives)");
      setCustomNoticeBody(
        `NOTICE OF DISPUTE - PURSUANT TO CLAUSE 47.1 OF AS 4902-2006.

A dispute has arisen between Threefold Construction and the Principal's Superintendent regarding a directive to accelerate panel installation without compensating for overtime welding rates.

We have attempted in good faith to resolve this as a variation under Clause 36. Since this directive has been rejected by you as an extra cost, we refer the matter under Clause 47.1 to senior representatives for dispute resolution. Work continues under protest to maintain schedule.`
      );
    }
    setNoticeHumanApproved(false);
  }, [selectedNoticeType]);

  // Handler to add custom Variation
  const handleAddVariation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newVarTitle) return;
    const newId = `VAR-00${variationsList.length + 1}`;
    setVariationsList([
      ...variationsList,
      {
        id: newId,
        title: newVarTitle,
        cost: Number(newVarCost),
        days: Number(newVarDays),
        clause: newVarClause,
        status: "Draft (Human Ready)",
        subcontractor: newVarSub,
        date: new Date().toISOString().split("T")[0]
      }
    ]);
    setNewVarTitle("");
  };

  // Trigger AI legal counsel queries
  const handleLegalQuery = (qText: string) => {
    if (!qText.trim()) return;
    const userMsg = { sender: "user", text: qText };
    setLegalHistory(prev => [...prev, userMsg]);
    setLegalPrompt("");
    setIsAnsweringLegal(true);

    // AI logic response simulation with deep Australian building law references
    setTimeout(() => {
      let reply = "";
      const lower = qText.toLowerCase();

      if (lower.includes("obligatyions") || lower.includes("obligations") || lower.includes("extend") || lower.includes("deadline")) {
        const projName = selectedProject === "woolworths" ? "Woolworths Minchinbury ($4.1M)" : selectedProject === "coles" ? "Coles Kemps Creek ($5.8M)" : "Kingspan Supply Deed ($1.4M)";
        const clause = selectedProject === "woolworths" ? "Clause 34.5 (EOT)" : selectedProject === "coles" ? "Clause 12.1 (Subcontractor Delay)" : "Clause 8 (General Delivery Delay Relief)";
        const penalty = selectedProject === "woolworths" ? "$5,000 per day (capped at 10% contract value)" : selectedProject === "coles" ? "$7,500 per day (capped at 5% contract value)" : "Nil direct Liquidated Damages (liability capped at 100% of supply purchase price)";
        reply = `🚨 **Agent J-Bot Commercial Analysis Core: Contract Obligations & Deadline Extensions**
        
Project Context: **${projName}**
Potential LD Exposure: **${penalty}**

Based on your prompt regarding this delay event:
1. **Contract Obligations:** This delay directly increases our risk of triggering Liquidated Damages (${penalty}). We have a core commercial obligation to execute works diligently without stalling adjacent cleanroom schedules.
2. **Clause for Extension of Time (EOT):** Under the active agreement, **${clause}** allows Threefold Construction to claim a formal Extension of Time (EOT) to extend our contract deadlines.
3. **Notification Constraints:** We must submit a written Notice of Delay under **${clause}** within the strict contractual notice period (5 business days for Head Contract, 3 days for subcontracts). Failure to do so may result in a complete waiver of our extension entitlements under common law precedents.
4. **Action Items:** 
   - Proceed to **Tab 4 (EOT & Delay)** or **Tab 5 (Correspondence & Notices)**.
   - Dispatch the formal notice citing **${clause}** stating the actual delay days.
   - Back up all site records automatically using Module 11 (Construction Delivery) lookahead program logs.`;
      } else if (lower.includes("sop") || lower.includes("payment claim") || lower.includes("security of payment")) {
        reply = `⭐ **TEOS legal intelligence: NSW SOP Act Guidance**
Under the **Building and Construction Industry Security of Payment Act 1999 (NSW) Section 13**:
1. Your payment claim must contain the exact statutory statement: *"This is a payment claim made under the Building and Construction Industry Security of Payment Act 1999 NSW."* (Which is embedded in our Tab 5 templates).
2. The Principal has exactly **10 Business Days** to respond with a Payment Schedule. Under Section 14, if they fail to issue a Payment Schedule or fail to pay by the due date, you are entitled to apply for **Adjudication** or pursue summary judgment in court under **Section 15**.
3. **PRACTICAL PM ACTION:** Check the served date carefully. Do not accept informal oral revisions. If no Payment Schedule is received, notify them of Section 17(2) intention to apply for adjudication within a strict 5-day window to preserve your rights.`;
      } else if (lower.includes("weather") || lower.includes("eot") || lower.includes("delay")) {
        reply = `⭐ **TEOS legal intelligence: EOT Claims & Delay Triggers (Clause 34.5 AS 4902)**
Clause 34.5 is a **strict condition precedent** to an Extension of Time.
1. **Notice Window:** Notice must be served within **5 business days** of when the Contractor first became aware of the delay cause (or should have become aware).
2. **Wet Weather Conditions:** Standard AS 4902 Clause 34.1 provides for EOT for weather conditions "on or after" the date of practical completion, but typically wet weather which could not reasonably have been anticipated is a claimable delay if it impacts critical path works.
3. **PRACTICAL PM ACTION:** Do not bundle delays. Force the Subcontractor to submit daily site diary photos via Module 11 (Construction Delivery) and lodge individual claims for each separate day. Ensure the claim is signed by the authorized representative to maintain strict compliance with Clause 34.5 time limits.`;
      } else if (lower.includes("defect") || lower.includes("warranty")) {
        reply = `⭐ **TEOS legal intelligence: Defects Liability & Warranties**
Under **Clause 37 of AS 4902-2006 (Defects)**:
1. The defects liability period (DLP) is defined in Annexure Part A (for Woolworths, this is set to **12 Months**).
2. During the DLP, the Superintendent can issue directions instructing Threefold to remedy outstanding defects within a designated reasonable timeframe. 
3. If Threefold fails to comply, the Principal can employ others to remedy the defect, and the costs are recoverable as a debt due or deducted from remaining bank guarantees or cash retention.
4. **PRACTICAL PM ACTION:** Cross-examine concrete subcontractor liability warranties. Ensure Askin Sliding PIR Doors are covered by back-to-back 10-year manufacturer deeds to fully protect Threefold's operational margin liability.`;
      } else {
        reply = `⭐ **TEOS construction legal guidance received:**
Regarding your query, in standard Australian AS 4902 Head Contracts and AS 4300 Subcontracts:
- Any directive from a Principal's Representative to execute works outside of the original, tender-agreed 'Design Scope Documents' constitutes a **Variation under Clause 36**.
- **Important:** Ensure you do not carry out physical layout changes until a written directive is provided or a formal variation claim is lodged. Under NSW case precedent (**Hometeam v Standard Construction**), proceeding on verbal Superintendent instructions risks forfeiting the quantum of variations.
- **Next steps:** Utilize Tab 3 (Variation Manager) to draft a formal Clause 36 notification and link it to the relevant Procurement logs to protect Threefold's hard-won margin.`;
      }

      setLegalHistory(prev => [...prev, { sender: "system", text: reply }]);
      setIsAnsweringLegal(false);
    }, 1800);
  };

  // Run Obligations Scan simulation
  const handleObligationsScan = () => {
    setLoadingOb(true);
    setScanningObMessage("Reading uploaded AS 4902 contract PDF paragraphs...");
    setTimeout(() => {
      setScanningObMessage("Extracting statutory notice periods & compliance thresholds...");
      setTimeout(() => {
        setScanningObMessage("Cross-checking liability caps against active insurance limits...");
        setTimeout(() => {
          setLoadingOb(false);
          setScanningObMessage("");
        }, 800);
      }, 700);
    }, 600);
  };

  // Send test EOT Notice
  const handleSendEOTNotice = () => {
    if (!eotApproved) return;
    setIsSendingEot(true);
    setTimeout(() => {
      setIsSendingEot(false);
      setEotDispatched(true);
      setNoticeDispatchedLog(prev => [
        `EOT Notice [Woolworths AS4902 Cl 34.5] - ${delayDays} Days Delay for PIR Slider doors successfully transmitted via SMTP server. Status: DELIVERED to Superintendent.`,
        ...prev
      ]);
    }, 1500);
  };

  // Send formal correspondence notice
  const handleSendNotice = () => {
    if (!noticeHumanApproved) return;
    const logged = `Formal Notice: "${customNoticeSubject}" dispatched to Superintendent. Authorised by Threefold PM. Ref: SOP-DISP-${Date.now().toString().slice(-4)}`;
    setNoticeDispatchedLog(prev => [logged, ...prev]);
    setNoticeHumanApproved(false);
    // Alert feedback
    alert("Notice Dispatched Successfully!");
  };

  // Upload Insurance CoC PDF
  const simulateCoCUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const fileName = e.target.files[0].name;
      setIsUploadingCoC(true);
      setTimeout(() => {
        setIsUploadingCoC(false);
        setUploadedCoCName(fileName);
        // Add or update PI or Works Cover
        setActiveInsurances(prev =>
          prev.map(ins =>
            ins.name.includes("Professional")
              ? { ...ins, current: "$10,000,000 (Checked)", expiry: "2027-06-30", compliance: "Verified Compliant ✅" }
              : ins
          )
        );
      }, 1500);
    }
  };

  return (
    <div className="space-y-6 text-slate-100">
      
      {/* 1. COMPREHENSIVE HEADER & CONTROLS */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-widest block">
            Threefold Enterprise Operating System (TEOS) • Module 03
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-1 flex items-center gap-1.5">
            <Scale className="text-[#2dccd3] shrink-0" size={24} />
            Contract & Legal AI Control Center
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-4xl">
            Exclusively structured for Threefold to deliver premium cleanroom projects on-time, protect hard-won margins, 
            and automate high-value risk control under standard Australian jurisdictions.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-2 bg-slate-900 border border-white/10 p-1.5 rounded-xl">
            <span className="text-[10px] font-mono font-bold uppercase text-slate-400 px-2">Active Contract:</span>
            <select
              value={selectedProject}
              onChange={(e) => setSelectedProject(e.target.value as "woolworths" | "coles" | "kingspan")}
              className="text-xs bg-[#0b0321] text-[#2dccd3] border-none font-bold rounded-lg py-1 px-2.5 focus:ring-1 focus:ring-[#2dccd3] outline-none cursor-pointer"
            >
              <option value="woolworths">Woolworths Minchinbury AS 4902 ($4.1M)</option>
              <option value="coles">Coles Kemps Creek Subcontract ($5.8M)</option>
              <option value="kingspan">Kingspan PIR Supply Deed ($1.4M)</option>
            </select>
          </div>

          <button 
            onClick={onBackToMap}
            className="px-4 py-2 border border-slate-700 bg-slate-900/50 hover:bg-slate-900 rounded-xl text-xs font-mono font-bold transition-all uppercase tracking-wider shrink-0 flex items-center gap-1.5"
          >
            🡠 Map View
          </button>
        </div>
      </div>

      {/* 2. PERSISTENT CONTRACT HIGHLIGHT BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 p-4 bg-gradient-to-r from-[#0d0124] to-[#16003b] border border-[#6f00ff]/30 rounded-2xl">
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono text-slate-400 block uppercase">Principal Client</span>
          <span className="text-xs font-bold text-white block truncate">{activeContract.client}</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono text-slate-400 block uppercase">Contract Value Sum</span>
          <span className="text-xs font-bold text-[#2dccd3] block">{activeContract.value}</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono text-slate-400 block uppercase">Governing Framework</span>
          <span className="text-xs font-bold text-purple-300 block">AS 4902-2006 head contract</span>
        </div>
        <div className="space-y-0.5 col-span-2 sm:col-span-1">
          <span className="text-[9px] font-mono text-slate-400 block uppercase">Liquidated Damages</span>
          <span className="text-xs font-bold text-rose-400 block truncate" title={activeContract.liquidatedDamages}>
            {activeContract.liquidatedDamages}
          </span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono text-slate-400 block uppercase">Defect Liability Period</span>
          <span className="text-xs font-bold text-slate-200 block truncate">{activeContract.defectPeriod}</span>
        </div>
        <div className="space-y-0.5">
          <span className="text-[9px] font-mono text-slate-400 block uppercase">Retention Cap</span>
          <span className="text-xs font-bold text-amber-300 block truncate" title={activeContract.retentionRate}>
            {activeContract.retentionRate}
          </span>
        </div>
      </div>

      {/* 3. SUB-SYSTEM NAVIGATION WORKSPACE */}
      <div className="flex flex-wrap gap-1.5 border-b border-white/5 pb-1">
        <button
          onClick={() => setActiveTab("workflows")}
          className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider transition-all border-b-2 flex items-center gap-1.5 focus:outline-none ${
            activeTab === "workflows"
              ? "bg-[#280071]/50 text-white border-[#2dccd3]"
              : "text-slate-400 border-transparent hover:text-white"
          }`}
        >
          <FileText size={14} className="text-[#2dccd3]" />
          1. Contract Workflows
        </button>
        <button
          onClick={() => setActiveTab("obligations")}
          className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider transition-all border-b-2 flex items-center gap-1.5 focus:outline-none ${
            activeTab === "obligations"
              ? "bg-[#280071]/50 text-white border-[#2dccd3]"
              : "text-slate-400 border-transparent hover:text-white"
          }`}
        >
          <ShieldAlert size={14} className="text-orange-400" />
          2. Risk Register & Obligations
        </button>
        <button
          onClick={() => setActiveTab("variations")}
          className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider transition-all border-b-2 flex items-center gap-1.5 focus:outline-none ${
            activeTab === "variations"
              ? "bg-[#280071]/50 text-white border-[#2dccd3]"
              : "text-slate-400 border-transparent hover:text-white"
          }`}
        >
          <Sliders size={14} className="text-blue-400" />
          3. Variation Management
        </button>
        <button
          onClick={() => setActiveTab("eot")}
          className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider transition-all border-b-2 flex items-center gap-1.5 focus:outline-none ${
            activeTab === "eot"
              ? "bg-[#280071]/50 text-white border-[#2dccd3]"
              : "text-slate-400 border-transparent hover:text-white"
          }`}
        >
          <Clock size={14} className="text-amber-400 animate-pulse" />
          4. EOT & Delay (Human Gate)
        </button>
        <button
          onClick={() => setActiveTab("correspondence")}
          className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider transition-all border-b-2 flex items-center gap-1.5 focus:outline-none ${
            activeTab === "correspondence"
              ? "bg-[#280071]/50 text-white border-[#2dccd3]"
              : "text-slate-400 border-transparent hover:text-white"
          }`}
        >
          <Send size={14} className="text-emerald-400" />
          5. Correspondence & Notices
        </button>
        <button
          onClick={() => setActiveTab("insurances")}
          className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider transition-all border-b-2 flex items-center gap-1.5 focus:outline-none ${
            activeTab === "insurances"
              ? "bg-[#280071]/50 text-white border-[#2dccd3]"
              : "text-slate-400 border-transparent hover:text-white"
          }`}
        >
          <BadgeCheck size={14} className="text-[#6f00ff]" />
          6. Insurance Guarantees
        </button>
        <button
          onClick={() => setActiveTab("legal_advice")}
          className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider transition-all border-b-2 flex items-center gap-1.5 focus:outline-none ${
            activeTab === "legal_advice"
              ? "bg-[#280071]/50 text-white border-[#2dccd3]"
              : "text-slate-400 border-transparent hover:text-white"
          }`}
        >
          <Sparkles size={14} className="text-cyan-400" />
          7. Legal Agent: J-Bot
        </button>
      </div>

      {/* 4. WORK TAB RENDER SPACE */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 min-h-[550px] shadow-2xl relative">
        
        {/* ======================= TAB 1: CONTRACT REVIEW WORKFLOWS ======================= */}
        {activeTab === "workflows" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Project Agreement & Contract Ingress</h3>
                <p className="text-xs text-slate-300">Each project possesses a single source of truth head contract regulating all commercial margins.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-lg font-bold">
                  ● ACTIVE HEAD AGREEMENT IN PLACE
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Document Tree view on left */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#0b0321]/60 border border-[#2dccd3]/20 rounded-2xl p-4 space-y-3">
                  <span className="text-[10px] font-mono text-[#2dccd3] font-bold block uppercase tracking-wider">
                    Linked Contract Registry Tree
                  </span>
                  
                  <div className="border border-white/5 bg-slate-950/60 rounded-xl p-3 font-mono text-xs space-y-3.5 select-none text-slate-200">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-indigo-400 font-bold">
                        <span>▼</span> 📂 [HEAD CONTRACT] {activeContract.docName}
                      </div>
                      
                      <div className="pl-5 space-y-2 border-l border-white/10 ml-1.5">
                        <div className="flex items-center gap-2 text-slate-300">
                          <span>▼</span> 📜 Annexure Part A (Contract Particulars)
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <span>▼</span> 📜 Clause 34 - Schedule & Site Interruption Code
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <span>▼</span> 📜 Clause 36 - Variation Directives
                        </div>
                        <div className="flex items-center gap-2 text-slate-300">
                          <span>▶</span> 📁 Subcontractors Linked
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* PDF Drag & Drop zones */}
                <div className="border-2 border-dashed border-slate-700 hover:border-[#2dccd3] rounded-2xl p-6 bg-slate-950/30 text-center transition-colors group cursor-pointer relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleDummyUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center mx-auto group-hover:bg-[#2dccd3]/20 group-hover:text-[#2dccd3] transition-all">
                      📎
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Upload New Contract PDF</p>
                      <p className="text-[10px] text-slate-400 mt-1">Drag file here or click to simulate parsing</p>
                    </div>
                  </div>
                </div>

                {uploadingState === "uploading" && (
                  <div className="p-3 bg-blue-950/30 border border-blue-500/20 rounded-xl flex items-center gap-3 font-mono text-xs text-blue-400 animate-pulse">
                    <RefreshCw className="animate-spin text-blue-400" size={14} />
                    <span>AI Contract Ingress In Progress. Scanning clauses...</span>
                  </div>
                )}

                {uploadingState === "scanned" && (
                  <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-xl flex items-center gap-2.5 font-mono text-xs text-emerald-400">
                    <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                    <span>Upload complete. Contract particulars successfully integrated.</span>
                  </div>
                )}
              </div>

              {/* PDF Content viewer mock on right */}
              <div className="lg:col-span-7 bg-slate-950/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col h-[400px]">
                <div className="bg-[#120534] border-b border-white/5 p-3 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-white flex items-center gap-1.5 uppercase tracking-wide">
                    📄 PDF VIEW: {activeContract.docName}
                  </span>
                  <span className="text-[9px] font-mono text-slate-400">Page 1 of 84 (Simulated)</span>
                </div>
                
                <div className="flex-1 p-5 overflow-y-auto font-sans text-xs text-slate-300 space-y-4 leading-relaxed bg-[#060312]/90">
                  <div className="text-center py-6 border-b border-white/5">
                    <h4 className="text-sm font-bold text-white font-display uppercase tracking-wider">ANNEXURE Part A</h4>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">FORMAL HEAD CONTRACT STIPULATIONS</p>
                  </div>

                  <div className="space-y-3 font-mono">
                    <p className="border-l-2 border-[#2dccd3]/50 pl-3">
                      <strong className="text-white block text-[11px] mb-1">Item 1: Name of the Principal</strong> 
                      {activeContract.client} Pty Ltd (ABN: 47 001 992 018)
                    </p>
                    <p className="border-l-2 border-[#2dccd3]/50 pl-3">
                      <strong className="text-white block text-[11px] mb-1">Item 2: Contractor</strong> 
                      Threefold Construction Engineering (ABN: 13 908 112 001)
                    </p>
                    <p className="border-l-2 border-[#2dccd3]/50 pl-3">
                      <strong className="text-white block text-[11px] mb-1">Item 15: Governing Jurisdiction</strong> 
                      The laws of the State of New South Wales, Australia.
                    </p>
                    <p className="border-l-2 border-[#2dccd3]/50 pl-3">
                      <strong className="text-white block text-[11px] mb-1">Item 24: Liquidated Damages (Clause 34.7)</strong> 
                      At the rate of {activeContract.liquidatedDamages} computed daily.
                    </p>
                    <p className="border-l-2 border-[#2dccd3]/50 pl-3">
                      <strong className="text-white block text-[11px] mb-1">Item 30: Defects Liability Period (Clause 37)</strong> 
                      Designated time-frame of {activeContract.defectPeriod}.
                    </p>
                    <p className="border-l-2 border-[#2dccd3]/50 pl-3">
                      <strong className="text-white block text-[11px] mb-1">Item 35: Retention and Bank Guarantees (Clause 5)</strong> 
                      {activeContract.retentionRate}.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ======================= TAB 2: RISK REGISTER & OBLIGATIONS ======================= */}
        {activeTab === "obligations" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Risk Register & Obligations Audit</h3>
                <p className="text-xs text-slate-300">Continuous AI extraction of contract risks, warning milestones, and notification windows to protect Threefold's cash flow.</p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleObligationsScan}
                  className="px-3.5 py-1.5 bg-gradient-to-r from-[#2dccd3] to-[#6f00ff] hover:brightness-110 text-white rounded-lg text-xs font-mono font-bold uppercase transition-all flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
                >
                  <RefreshCw className="animate-spin text-white" size={12} />
                  Run AI Security Scan
                </button>
              </div>
            </div>

            {loadingOb && (
              <div className="p-8 bg-[#0b0321] rounded-2xl border border-[#2dccd3]/30 flex flex-col items-center justify-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full border-4 border-[#2dccd3]/30 border-t-[#2dccd3] animate-spin"></div>
                <div className="space-y-1">
                  <p className="text-sm font-mono text-[#2dccd3] font-bold">{scanningObMessage}</p>
                  <p className="text-xs text-slate-400">TEOS Security Layer is isolating contract obligation risks...</p>
                </div>
              </div>
            )}

            {!loadingOb && (
              <div className="space-y-4">
                
                {/* Risk Filter Control Row */}
                <div className="flex items-center gap-2.5 bg-slate-950/40 p-2.5 rounded-xl border border-white/5 text-xs font-mono">
                  <span className="text-slate-400 font-bold uppercase">Filter Hazards:</span>
                  <button
                    onClick={() => setObFilter("all")}
                    className={`px-3 py-1 rounded-md font-bold transition-colors ${
                      obFilter === "all" ? "bg-[#2dccd3]/20 text-[#2dccd3] border border-[#2dccd3]/30" : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    All Obligations (6 Checked)
                  </button>
                  <button
                    onClick={() => setObFilter("critical")}
                    className={`px-3 py-1 rounded-md font-bold transition-colors ${
                      obFilter === "critical" ? "bg-red-500/20 text-red-400 border border-red-500/30" : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    ⚠️ High & Critical (3)
                  </button>
                  <button
                    onClick={() => setObFilter("action")}
                    className={`px-3 py-1 rounded-md font-bold transition-colors ${
                      obFilter === "action" ? "bg-amber-500/20 text-amber-400 border border-amber-500/30" : "text-slate-300 hover:bg-white/5"
                    }`}
                  >
                    Action Required (1)
                  </button>
                </div>

                {/* Grid list of extracted Risks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  
                  {/* Item 1 */}
                  {(obFilter === "all" || obFilter === "critical" || obFilter === "action") && (
                    <div className="bg-[#0b0321]/60 border border-red-500/30 rounded-2xl p-4 space-y-3.5 hover:bg-[#110134] transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-red-400 bg-red-950/40 border border-red-500/20 px-2 py-0.5 rounded font-black uppercase">
                          CRITICAL RISK
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Clause 34.5 (EOT NOTICE)</span>
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-bold text-white font-sans">Strict 5-day Delay Notification Obligation</h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Threefold must notify the Superintendent within **5 business days** of becoming aware of any event causing delay, or forfeit all EOT claims and delay cost recoveries.
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono">
                        <span className="text-rose-400 font-bold bg-rose-500/10 px-2 py-0.5 rounded">⚠️ ACTION NEEDED</span>
                        <span className="text-slate-300">Port logistics delays active.</span>
                      </div>
                    </div>
                  )}

                  {/* Item 2 */}
                  {obFilter === "all" && (
                    <div className="bg-[#0b0321]/60 border border-emerald-500/30 rounded-2xl p-4 space-y-3.5 hover:bg-[#110134] transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-2 py-0.5 rounded font-black uppercase">
                          LOW RISK
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Clause 42.1 (SOP PAYMENT CLAIMS)</span>
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-bold text-white font-sans">Monthly Payment Claims Filing Window</h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Filing date set on the **25th day** of each calendar month. Reference to Security of Payment Act NSW. Zero tolerance for late submission.
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono">
                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">✓ COMPLIANT</span>
                        <span className="text-slate-400">Claim 04 drafted on schedule.</span>
                      </div>
                    </div>
                  )}

                  {/* Item 3 */}
                  {(obFilter === "all" || obFilter === "critical") && (
                    <div className="bg-[#0b0321]/60 border border-rose-500/30 rounded-2xl p-4 space-y-3.5 hover:bg-[#110134] transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-rose-400 bg-rose-950/40 border border-rose-500/20 px-2 py-0.5 rounded font-black uppercase">
                          HIGH RISK
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Clause 36.2 (VARIATION PRE-APPROVALS)</span>
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-bold text-white font-sans">Directive Valuation Authority Bounds</h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Cannot commence variation physical works without signed Principal Directive instructions, else risk total denial of payment entitlements.
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono">
                        <span className="text-yellow-400 font-bold bg-yellow-500/10 px-2 py-0.5 rounded">⯊ MONITORED</span>
                        <span className="text-slate-400">3 Subcontractor claims pending.</span>
                      </div>
                    </div>
                  )}

                  {/* Item 4 */}
                  {obFilter === "all" && (
                    <div className="bg-[#0b0321]/60 border border-sky-500/30 rounded-2xl p-4 space-y-3.5 hover:bg-[#110134] transition-all">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-sky-400 bg-sky-950/40 border border-sky-500/20 px-2 py-0.5 rounded font-black uppercase">
                          MEDIUM RISK
                        </span>
                        <span className="text-[10px] font-mono text-slate-400">Clause 37 (DEFECT REMEDY TERM)</span>
                      </div>
                      <div className="space-y-1.5">
                        <h4 className="text-sm font-bold text-white font-sans">14-Day Defect Rectification Notices</h4>
                        <p className="text-xs text-slate-300 leading-relaxed font-sans">
                          Superintendent holds delegation to instruct physical remedy works inside DLP with a maximum 14-day completion cure frame before executing guarantee callouts.
                        </p>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[10px] font-mono">
                        <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">✓ COMPLIANT</span>
                        <span className="text-slate-400">No active defects listed on site registry.</span>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}
          </div>
        )}

        {/* ======================= TAB 3: VARIATION MANAGEMENT ======================= */}
        {activeTab === "variations" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Variation Control & Clause Allocation</h3>
                <p className="text-xs text-slate-300">Record, track, and draft variations against the head contract structure to secure reimbursement entitlements.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Proposal Form on left */}
              <div className="lg:col-span-5 bg-[#0b0321]/80 border border-white/10 rounded-2xl p-5 space-y-4">
                <span className="text-[10px] font-mono text-[#2dccd3] font-bold block uppercase tracking-wider">
                  Propose / Register Contract Variation
                </span>
                
                <form onSubmit={handleAddVariation} className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Variation Scope Title</label>
                    <input
                      type="text"
                      required
                      value={newVarTitle}
                      onChange={(e) => setNewVarTitle(e.target.value)}
                      placeholder="e.g. Columns reinforcement Grid G4"
                      className="w-full bg-[#050212] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#2dccd3]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Cost Impact ($)</label>
                      <input
                        type="number"
                        required
                        value={newVarCost}
                        onChange={(e) => setNewVarCost(e.target.value)}
                        placeholder="45000"
                        className="w-full bg-[#050212] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#2dccd3]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Schedule Delay (Days)</label>
                      <input
                        type="number"
                        required
                        value={newVarDays}
                        onChange={(e) => setNewVarDays(e.target.value)}
                        placeholder="4"
                        className="w-full bg-[#050212] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#2dccd3]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Associated Contract Clause</label>
                    <input
                      type="text"
                      required
                      value={newVarClause}
                      onChange={(e) => setNewVarClause(e.target.value)}
                      placeholder="Clause 36.1"
                      className="w-full bg-[#050212] border border-slate-800 rounded-xl px-3 py-2 text-xs text-[#2dccd3] font-mono focus:outline-none focus:border-[#2dccd3]"
                    />
                  </div>

                  <div className="space-y-1 pb-2">
                    <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Initiated Subcontractor</label>
                    <select
                      value={newVarSub}
                      onChange={(e) => setNewVarSub(e.target.value)}
                      className="w-full bg-[#050212] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    >
                      <option value="Askin Thermal Systems">Askin Thermal Systems</option>
                      <option value="Rigging Specialists Ltd">Rigging Specialists Ltd</option>
                      <option value="Concrete Logistics NSW">Concrete Logistics NSW</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#2dccd3] hover:brightness-110 text-slate-950 rounded-xl text-xs font-display font-black uppercase tracking-wider transition-all shadow-lg active:scale-95 text-center cursor-pointer"
                  >
                    + Log Contract Variation
                  </button>
                </form>

                <div className="bg-slate-950/60 p-3 rounded-xl border border-[#2dccd3]/10 text-[10px] text-slate-400 font-mono space-y-1.5 leading-relaxed">
                  <span className="text-yellow-400 font-bold block">🚨 TEOS CONTRACT ALIGNMENT ADVICE:</span>
                  <span>Under Clause 36.2 of standard AS 4902, you must issue a Variation Proposal notice before commencing physical labor to secure statutory payment legal security.</span>
                </div>
              </div>

              {/* Live list of variations on right */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400 uppercase font-bold">Tracked Variations Log:</span>
                  <span className="text-[#2dccd3]">Total: {variationsList.length} Items</span>
                </div>

                <div className="space-y-3 max-h-[400px] overflow-y-auto">
                  {variationsList.map((v) => (
                    <div key={v.id} className="bg-[#0b0321]/40 border border-slate-800 hover:border-slate-700 p-4 rounded-xl space-y-2.5 transition-all">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono text-[#2dccd3] font-bold">{v.id}</span>
                          <span className="text-xs font-bold text-white">{v.title}</span>
                        </div>
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${
                          v.status.includes("Approved") ? "bg-green-950/60 text-green-400" :
                          v.status.includes("Pending") ? "bg-amber-950/60 text-amber-400 animate-pulse" : "bg-slate-800 text-slate-400"
                        }`}>{v.status}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 py-2 border-t border-b border-white/5 font-mono text-[10px]">
                        <div>
                          <span className="text-slate-400 block uppercase">Cost Impact:</span>
                          <span className="text-emerald-400 font-bold">${v.cost.toLocaleString()}</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block uppercase">Schedule Lags:</span>
                          <span className="text-amber-400 font-bold">+{v.days} Days</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block uppercase">Triggering Clause:</span>
                          <span className="text-[#2dccd3] truncate block" title={v.clause}>{v.clause}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span>Sub: {v.subcontractor}</span>
                        <span>Logged: {v.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ======================= TAB 4: EOT & DELAY MANAGEMENT ======================= */}
        {activeTab === "eot" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">EOT & Delay Management Controls</h3>
                <p className="text-xs text-slate-300">Continuous background monitoring of construction laggards. Automatically drafts Extension of Time notifications under strictly enforced human gate safety constraints.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-red-400 bg-red-950/40 border border-red-500/20 px-3 py-1.5 rounded-xl font-bold uppercase flex items-center gap-1.5 animate-pulse">
                  ⚠️ ACTIVE CRITICAL PATH DELAY REGISTERED
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Monitoring alarm block & human approval control left */}
              <div className="lg:col-span-5 bg-[#18003a]/60 border border-red-500/30 rounded-3xl p-6 space-y-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-xs animate-ping font-bold shrink-0">
                    🕭
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-red-400 uppercase tracking-widest block">TELEMETRY ANOMALY DETECTED</span>
                    <h4 className="text-xs font-bold text-white uppercase font-mono mt-0.5">Teos Spider Web Node alignment alerts</h4>
                  </div>
                </div>

                <div className="p-4 bg-slate-950/60 rounded-2xl border border-white/5 space-y-3.5 text-xs font-sans">
                  <p className="text-slate-300 leading-relaxed">
                    ⚙ **Delay Source:** Node 5 'Procurement logistics' reports a shipping backlog on sandwich panels, causing a <strong className="text-amber-400">{delayDays} business days slip</strong> in Zone B loading dock schedules.
                  </p>
                  
                  <div className="space-y-1.5 p-3 bg-red-950/30 rounded-xl border border-red-500/20 font-mono text-[10px] leading-relaxed">
                    <span className="text-yellow-400 font-bold block">AS 4902 CONTRACT ALARM:</span>
                    <span>Clause 34.5 mandates filing within 5 business days of incident. Filing delay results in total waiver of right to claim cost compensation (worth $5,000/day Liquidated Damages risk).</span>
                  </div>
                </div>

                {/* HUMAN GATE SAFETY OVERRIDE */}
                <div className="p-5 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-4">
                  <div className="flex items-center gap-1.5">
                    <span className="text-yellow-400 text-xs">⚠️</span>
                    <span className="text-[10px] font-mono font-bold uppercase text-yellow-400 tracking-wider">Required Human Approval Gate</span>
                  </div>
                  
                  <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                    The TEOS system core is legally restricted from dispatching EOT / wet weather correspondence without manual certification from the authorized PM representative.
                  </p>

                  <div className="space-y-3.5 pt-2">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={eotApproved}
                        onChange={(e) => setEotApproved(e.target.checked)}
                        className="mt-0.5 accent-[#2dccd3] rounded border-white/10"
                      />
                      <span className="text-xs font-mono font-bold text-slate-200">
                        I, Threefold Project Manager, authorise this EOT Claim and verify the delay days metric.
                      </span>
                    </label>

                    <button
                      onClick={handleSendEOTNotice}
                      disabled={!eotApproved || isSendingEot}
                      className={`w-full py-3 rounded-xl font-display text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        eotApproved
                          ? "bg-gradient-to-r from-[#2dccd3] to-[#6f00ff] hover:brightness-110 text-white shadow-lg active:scale-95"
                          : "bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"
                      }`}
                    >
                      {isSendingEot ? (
                        <>
                          <RefreshCw className="animate-spin" size={13} />
                          Dispatching SMTP Telegram...
                        </>
                      ) : eotDispatched ? (
                        "✓ EOT Notice Dispatched successfully"
                      ) : (
                        "Approve & Send Notice of Delay (Clause 34.5)"
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Draft Output Pane on Right */}
              <div className="lg:col-span-7 bg-slate-950/80 border border-white/5 rounded-2xl overflow-hidden flex flex-col min-h-[420px]">
                <div className="bg-[#120534] border-b border-white/5 p-3 flex items-center justify-between font-mono">
                  <span className="text-[10px] font-bold text-white uppercase tracking-wide">
                    ✉️ AUTOMATED DRAFT: Notice of Delay (AS 4902 Cl 34.5)
                  </span>
                  <span className="text-[9px] text-yellow-400">UNAPPROVED CO-PILOT DRAFT</span>
                </div>

                <div className="flex-1 p-5 font-mono text-xs text-slate-300 space-y-4 leading-relaxed bg-[#060312]/90">
                  <div className="space-y-1">
                    <div><strong>TO:</strong> Principal Superintendent (Woolworths Group)</div>
                    <div><strong>FROM:</strong> Threefold Project Manager Representative</div>
                    <div><strong>DATE:</strong> 21 June 2026</div>
                    <div><strong>SUBJECT:</strong> Notice under Clause 34.5 - Claim for Extension of Time</div>
                  </div>

                  <div className="h-px bg-white/10"></div>

                  <p>Dear Superintendent,</p>

                  <p>
                    We act as representatives of Threefold Construction Pty Ltd. Pursuant to Clause 34.5 of our AS 4902-2006 agreement concerning the Woolworths Logistics Park Minchinbury, we write to notify you of an active delay event that impacts the critical path of Zone B handover layout works.
                  </p>

                  <p>
                    <strong>Event Description:</strong> Supply chain shipping logistics lag (SANDWICH PANEL DELAYS) and structural sliding core frame adjustments in NSW loading yard.
                  </p>

                  <p>
                    <strong>Computed Delay Duration:</strong> {delayDays} business days computed directly from sub-grade tracking metrics.
                  </p>

                  <p>
                    We request the Principal Superintendent execute a practical extension of completion date in accordance with Clause 34.5 provisions, extending the practical milestone date from October 15, 2026 to October 23, 2026 to protect the project margin.
                  </p>

                  <p>
                    Yours faithfully,<br />
                    Threefold Engineering Project Director Representative
                  </p>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ======================= TAB 5: CORRESPONDENCE & NOTICES ======================= */}
        {activeTab === "correspondence" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Correspondence & Contract Notices System</h3>
                <p className="text-xs text-slate-300">Formally draft legal notices with exact AS 4902 clause referencing to establish secure contract security, under manual approval security validation.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Picker list on left */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-[#0b0321]/60 border border-slate-800 rounded-2xl p-4 space-y-3">
                  <span className="text-[10px] font-mono text-[#2dccd3] font-bold block uppercase tracking-wider">
                    Select Standard Contract Template
                  </span>

                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedNoticeType("access_delay")}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${
                        selectedNoticeType === "access_delay"
                          ? "bg-[#2dccd3]/10 border-[#2dccd3] text-white font-bold"
                          : "bg-slate-950/40 border-white/5 text-slate-300 hover:bg-slate-900"
                      }`}
                    >
                      <span>Notice of Site Access Delay</span>
                      <ChevronRight size={13} className="text-[#2dccd3]" />
                    </button>

                    <button
                      onClick={() => setSelectedNoticeType("sop_NSW")}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${
                        selectedNoticeType === "sop_NSW"
                          ? "bg-[#2dccd3]/10 border-[#2dccd3] text-white font-bold"
                          : "bg-slate-950/40 border-white/5 text-slate-300 hover:bg-slate-900"
                      }`}
                    >
                      <span>NSW SOP Act Payment Claim</span>
                      <ChevronRight size={13} className="text-[#2dccd3]" />
                    </button>

                    <button
                      onClick={() => setSelectedNoticeType("dispute_clause47")}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-mono transition-all flex items-center justify-between ${
                        selectedNoticeType === "dispute_clause47"
                          ? "bg-[#2dccd3]/10 border-[#2dccd3] text-white font-bold"
                          : "bg-slate-950/40 border-white/5 text-slate-300 hover:bg-slate-900"
                      }`}
                    >
                      <span>Clause 47 Notice of Dispute</span>
                      <ChevronRight size={13} className="text-[#2dccd3]" />
                    </button>
                  </div>
                </div>

                {/* Audit Transmission log */}
                <div className="bg-slate-950/50 rounded-2xl p-4 border border-white/5 space-y-2">
                  <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">SMTP Dispatch Audit logs:</span>
                  <div className="space-y-2 max-h-[160px] overflow-y-auto text-[9px] font-mono text-slate-300">
                    {noticeDispatchedLog.length === 0 ? (
                      <span className="text-slate-400 block text-left">No transmissions currently logged.</span>
                    ) : (
                      noticeDispatchedLog.map((log, idx) => (
                        <div key={idx} className="p-2 bg-slate-900 border border-white/5 rounded">
                          {log}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>

              {/* Editor screen on right */}
              <div className="lg:col-span-8 bg-[#0b0321]/80 border border-white/10 rounded-2xl p-5 space-y-4">
                <span className="text-[10px] font-mono text-purple-300 font-bold block uppercase tracking-wider">
                  Interactive Correspondence Formatter & Approvals
                </span>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Mail Subject Reference</label>
                    <input
                      type="text"
                      value={customNoticeSubject}
                      onChange={(e) => setCustomNoticeSubject(e.target.value)}
                      className="w-full bg-[#050212] border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#2dccd3]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono text-slate-400 font-bold">Notice Text Block</label>
                    <textarea
                      rows={10}
                      value={customNoticeBody}
                      onChange={(e) => setCustomNoticeBody(e.target.value)}
                      className="w-full bg-[#050212] border border-slate-800 rounded-xl p-3 text-xs text-slate-200 font-mono focus:outline-none focus:border-[#2dccd3] leading-relaxed"
                    />
                  </div>

                  {/* HUMAN APPROVAL AND BINDING DISPATCH */}
                  <div className="p-4 bg-slate-950 rounded-xl border border-emerald-500/20 space-y-3">
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono font-bold uppercase">
                      <BadgeCheck size={14} className="text-emerald-400" />
                      <span>Authorized Representative Certification</span>
                    </div>

                    <label className="flex items-start gap-2.5 cursor-pointer selection-none">
                      <input
                        type="checkbox"
                        checked={noticeHumanApproved}
                        onChange={(e) => setNoticeHumanApproved(e.target.checked)}
                        className="mt-0.5 accent-emerald-500 rounded border-white/10"
                      />
                      <span className="text-xs font-mono text-slate-300 leading-snug">
                        I certify this notice adheres to Australian Building Code particulars and authorize transmission.
                      </span>
                    </label>

                    <button
                      onClick={handleSendNotice}
                      disabled={!noticeHumanApproved}
                      className={`w-full py-2.5 text-xs font-display font-black uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        noticeHumanApproved
                          ? "bg-emerald-500 text-slate-950 hover:brightness-110 shadow-lg"
                          : "bg-slate-800 text-slate-500 cursor-not-allowed"
                      }`}
                    >
                      Transmit Formal Correspondence Letter (SMTP PDF dispatch)
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ======================= TAB 6: INSURANCE & GUARANTEES ======================= */}
        {activeTab === "insurances" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Insurances & Bank Guarantees Tracker</h3>
                <p className="text-xs text-slate-300">Continuous audit mapping of Threefold’s indemnity policies, statutory coverage limits, and bank undertakings against Principal expectations.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/20 px-3 py-1.5 rounded-xl font-bold uppercase">
                  ✓ ALL KEY POLICIES IN SYNC WITH HEAD CONTRACT REQUIREMENTS
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              
              {/* Compliance list */}
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono text-slate-400 font-bold uppercase block text-left">Active Policy Comparison Ledger:</span>

                <div className="space-y-3">
                  {activeInsurances.map((ins, index) => (
                    <div key={index} className="bg-[#0b0321]/40 border border-slate-800 p-4 rounded-xl flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="text-xs font-bold text-white uppercase font-mono">{ins.name}</h4>
                        <div className="text-[10px] text-slate-400 font-mono flex flex-wrap gap-x-3">
                          <span>Policy No: <strong className="text-slate-200">{ins.policyNo}</strong></span>
                          <span>Expiry: <strong className="text-slate-200">{ins.expiry}</strong></span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-1.5 font-mono text-[10px]">
                          <div>
                            <span className="text-slate-500 block uppercase">Contract Mandate:</span>
                            <span className="text-slate-300 font-black">{ins.required}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block uppercase">Threefold Active:</span>
                            <span className="text-emerald-400 font-black">{ins.current}</span>
                          </div>
                        </div>
                      </div>

                      <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/20 px-2 py-1 rounded font-bold uppercase shrink-0">
                        {ins.compliance}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upload dynamic Certificate of Currency right */}
              <div className="lg:col-span-5 bg-slate-950/80 border border-white/5 rounded-2xl p-5 space-y-5">
                <span className="text-[10px] font-mono text-purple-300 font-bold block uppercase tracking-wider">
                  Ingress New Certificate of Currency (CoC)
                </span>

                <div className="border-2 border-dashed border-slate-700 hover:border-purple-400 rounded-2xl p-6 bg-[#0b0321]/40 text-center transition-colors group cursor-pointer relative">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={simulateCoCUpload}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                  <div className="space-y-2.5">
                    <div className="w-10 h-10 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center mx-auto group-hover:bg-[#6f00ff]/20 group-hover:text-purple-400 transition-all font-bold">
                      🛡️
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-sans">Upload CoC PDF for audit</p>
                      <p className="text-[10px] text-slate-400 mt-1">Parses policy expiry limits to confirm head contract alignment.</p>
                    </div>
                  </div>
                </div>

                {isUploadingCoC && (
                  <div className="p-3 bg-indigo-950/30 border border-indigo-500/20 rounded-xl flex items-center gap-3 font-mono text-xs text-indigo-400 animate-pulse">
                    <RefreshCw className="animate-spin text-indigo-400 animate-infinite" size={14} />
                    <span>Extracting certificate metadata limits...</span>
                  </div>
                )}

                {uploadedCoCName && (
                  <div className="p-3 bg-emerald-950/30 border border-emerald-500/20 rounded-xl space-y-2 text-emerald-400">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold">
                      <CheckCircle2 size={13} className="text-emerald-400" />
                      <span>Ingress audit successful</span>
                    </div>
                    <p className="text-[10px] text-slate-300 pl-5 leading-normal">
                      Document <strong>{uploadedCoCName}</strong> verify-checks match NSW building obligations. Limits match the required $10M professional indemnity cap limit.
                    </p>
                  </div>
                )}

                <div className="p-4 rounded-xl bg-slate-900 border border-purple-500/10 space-y-2 font-mono text-[10px] leading-relaxed text-slate-400">
                  <span className="text-[#2dccd3] font-bold block">🛡️ BANK GUARANTEES / RETENTION CHECKS:</span>
                  <span>Head contract Clause 5 limits. cash retention holds 10% on payments up to a cumulative cap of 5% of original contract value. Bank undertakings lodged to unlock retained funds.</span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ======================= TAB 7: AUSTRALIAN LEGAL AGENT (J-BOT) ======================= */}
        {activeTab === "legal_advice" && (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
              <div>
                <h3 className="text-lg font-bold font-display text-white">Australian Legal Agent: J-Bot</h3>
                <p className="text-xs text-slate-300">Interact with J-Bot, your high-knowledge AI custom-trained on standard building and construction agreement frameworks (AS 4902-2006, AS 4300, AS 2124).</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1.5 rounded-xl font-bold uppercase animate-pulse">
                  ⚖ LEGAL AGENT STATUS: ONLINE (AS4902 HEURISTICS)
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Pixel J-Bot + Profile & Project Selector */}
              <div className="lg:col-span-5 bg-[#0b0321]/40 border border-white/10 rounded-3xl p-5 flex flex-col justify-between space-y-5">
                
                {/* Agent Card header */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-slate-950/50 p-3 rounded-2xl border border-white/5">
                    {/* Retro Pixel Avatar for J-Bot */}
                    <div className="w-24 h-24 overflow-hidden rounded-xl border border-[#6f00ff]/30 flex-shrink-0 scale-90">
                      <PixelAgent status={isAnsweringLegal ? "thinking" : "idle"} />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-amber-400 font-bold tracking-wider block">📟 AGENT-03 // COMMERCIAL</span>
                      <h4 className="text-base font-bold text-white font-display">Contract Lawyer J-Bot</h4>
                      <p className="text-[10px] text-slate-400 font-sans leading-normal mt-0.5">
                        Specializes in contract liabilities, delay claims templates, Security of Payment Act logic, and latent site conditions risk.
                      </p>
                    </div>
                  </div>

                  {/* Project Selector dropdown */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/5 space-y-3">
                    <label className="text-[10px] font-mono text-slate-400 font-bold uppercase block text-left">
                      Select Project to Audit:
                    </label>
                    <select
                      value={selectedProject}
                      onChange={(e) => {
                        const proj = e.target.value as "woolworths" | "coles" | "kingspan";
                        setSelectedProject(proj);
                        const names = {
                          woolworths: "Woolworths Minchinbury AS 4902",
                          coles: "Coles Kemps Creek Subcontract",
                          kingspan: "Kingspan PIR Panel Deed"
                        };
                        const delayTypes = {
                          woolworths: "a 15-day concrete foundation curing delay",
                          coles: "a 12-day site access block delay",
                          kingspan: "an 18-day factory manufacturing delay"
                        };
                        setLegalPrompt(
                          `based on ${delayTypes[proj]}, does this effect our contracts or obligations under ${names[proj]}, and please check if there is any clause where we can extend our deadlines`
                        );
                      }}
                      className="w-full text-xs font-semibold bg-[#110134] text-[#2dccd3] border border-[#6f00ff]/30 rounded-xl py-2.5 px-3 focus:outline-none focus:border-cyan-400 cursor-pointer"
                    >
                      <option value="woolworths">Woolworths Minchinbury ($4.1M Contractor)</option>
                      <option value="coles">Coles Kemps Creek ($5.8M Subcontractor)</option>
                      <option value="kingspan">Kingspan PIR Panel Supply ($1.4M Deed)</option>
                    </select>

                    <div className="pt-2 text-[10px] text-slate-400 space-y-1 block text-left leading-relaxed">
                      <span className="text-slate-200 font-bold uppercase block">Core Target Parameters:</span>
                      <table className="w-full text-[9px] mt-1 border-collapse text-left">
                        <tbody>
                          <tr className="border-b border-white/5">
                            <td className="py-1 text-slate-500 font-mono text-[9px]">CLIENT:</td>
                            <td className="py-1 text-white font-bold text-[9px]">{activeContract.client}</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-1 text-slate-500 font-mono text-[9px]">VALUE:</td>
                            <td className="py-1 text-[#2dccd3] font-bold text-[9px]">{activeContract.value}</td>
                          </tr>
                          <tr className="border-b border-white/5">
                            <td className="py-1 text-slate-500 font-mono text-[9px]">LIQ DAMAGES:</td>
                            <td className="py-1 text-rose-400 font-bold text-[9px] truncate max-w-[120px] inline-block" title={activeContract.liquidatedDamages}>{activeContract.liquidatedDamages}</td>
                          </tr>
                          <tr>
                            <td className="py-1 text-slate-500 font-mono text-[9px]">RETENTION:</td>
                            <td className="py-1 text-amber-300 font-bold text-[9px] truncate max-w-[120px] inline-block" title={activeContract.retentionRate}>{activeContract.retentionRate}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Pre-saved quick prompts buttons */}
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block text-left">Quick Consult Scenarios:</span>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => handleLegalQuery("Is our NSW SOP Act claim safe if the Superintendent issues a $0 Payment Schedule with no written reasons provided?")}
                      className="w-full text-left p-2.5 rounded-xl border border-white/5 hover:border-cyan-400 bg-slate-950 hover:bg-[#110134] transition-all cursor-pointer block leading-snug group"
                    >
                      <p className="text-[11px] text-slate-300 group-hover:text-cyan-300 transition-colors">
                        "Is NSW SOP Act claim safe if client issues $0 schedule with no reasons?"
                      </p>
                    </button>
                    <button
                      onClick={() => {
                        const names = {
                          woolworths: "Woolworths Minchinbury AS 4902",
                          coles: "Coles Kemps Creek Subcontract",
                          kingspan: "Kingspan PIR Panel Deed"
                        };
                        const delayTypes = {
                          woolworths: "a 15-day concrete foundation curing delay",
                          coles: "a 12-day site access block delay",
                          kingspan: "an 18-day factory manufacturing delay"
                        };
                        setLegalPrompt(
                          `based on ${delayTypes[selectedProject]}, does this effect our contracts or obligations under ${names[selectedProject]}, and please check if there is any clause where we can extend our deadlines`
                        );
                      }}
                      className="w-full text-left p-2.5 rounded-xl border border-white/5 hover:border-cyan-400 bg-slate-950 hover:bg-[#110134] transition-all cursor-pointer block leading-snug group"
                    >
                      <p className="text-[11px] text-slate-300 group-hover:text-cyan-300 transition-colors">
                        🔄 Reset/Load Preloaded Delay Scenario
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              {/* Chat Terminal on right (lg:col-span-7) */}
              <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden flex flex-col h-[520px] shadow-inner">
                
                {/* Chat Display area */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#050212]">
                  {legalHistory.map((item, index) => (
                    <div
                      key={index}
                      className={`flex flex-col max-w-[85%] space-y-1 ${
                        item.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                      }`}
                    >
                      <span className="text-[9px] font-mono font-bold text-slate-500 uppercase">
                        {item.sender === "user" ? "Threefold Director Request" : "AGENT J-BOT LEGAL ADVISOR"}
                      </span>
                      <div
                        className={`p-3.5 rounded-2xl text-xs leading-relaxed font-sans whitespace-pre-line ${
                          item.sender === "user"
                            ? "bg-cyan-950/60 border border-cyan-500/20 text-cyan-200 rounded-tr-none"
                            : "bg-[#14003d] border border-[#6f00ff]/30 text-slate-200 rounded-tl-none font-sans"
                        }`}
                      >
                        {item.text}
                      </div>
                    </div>
                  ))}

                  {isAnsweringLegal && (
                    <div className="flex flex-col items-start space-y-1 mr-auto max-w-[80%] animate-pulse">
                      <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase font-bold text-left">J-BOT IS INFERRING CLAUSES & REMEDIES...</span>
                      <div className="p-3.5 bg-[#14003d] border border-cyan-500/30 text-cyan-400 rounded-2xl rounded-tl-none text-xs flex items-center gap-2">
                        <RefreshCw className="animate-spin text-cyan-400" size={13} />
                        <span>Applying deep AS 4902-2006 case laws, liquidated damage calculations & EOT precedents...</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Prompt submit zone */}
                <div className="p-3.5 bg-[#0e0428] border-t border-white/5 flex items-center gap-2">
                  <input
                    type="text"
                    value={legalPrompt}
                    onChange={(e) => setLegalPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLegalQuery(legalPrompt)}
                    placeholder="Ask J-Bot customized legal queries..."
                    className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-450 placeholder-slate-500 font-sans"
                  />
                  <button
                    onClick={() => handleLegalQuery(legalPrompt)}
                    className="px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-[#6f00ff] hover:brightness-110 text-slate-950 font-display font-medium rounded-xl text-xs uppercase tracking-wider transition-all font-black"
                  >
                    Ask J-Bot
                  </button>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  );
}

/* ==========================================
   4. COST / BUDGET CONTROL
   ========================================== */
export function CostBudgetView({ onBackToMap }: ModuleProps) {
  const [laborSlip, setLaborSlip] = useState(1.0); // productivity slippage
  const [steelPriceHike, setSteelPriceHike] = useState(0); // percentage rate increase
  
  // Base Parameters
  const originalBudget = 1250000;
  const committedPO = 820000;
  const actualInvoiced = 480000;

  // Recalculations based on slippage sliders
  const currentVariance = Math.round(originalBudget * (laborSlip - 1.0) * 0.15 + (originalBudget * (steelPriceHike / 100) * 0.25));
  const forecastFinalCost = originalBudget + currentVariance;
  const simulatedMargin = 25.0 - (currentVariance / originalBudget) * 100;

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
            Module 04 // Financial Protection Control
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            COST & BUDGET CONTROL
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Sliders panel */}
        <div className="lg:col-span-1 bg-[#0b0321]/80 border border-white/10 rounded-2xl p-6 space-y-6 shadow-xl">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#2dccd3]">
            <Sliders size={14} />
            <span className="uppercase">Margin Protection Simulator</span>
          </div>
          <p className="text-xs text-slate-300">
            Simulate actual cost spikes in supply chain materials and on-site welding workforce schedules.
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span>Labor Inefficiency Slip</span>
                <span className="text-amber-400 font-bold">x{laborSlip.toFixed(2)}</span>
              </div>
              <input 
                type="range" min="1.0" max="1.5" step="0.05"
                value={laborSlip}
                onChange={(e) => setLaborSlip(parseFloat(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block font-normal text-left">Overruns due to delays in sub-grade panel setup.</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span>Steel & Panel Commodity Spike</span>
                <span className="text-rose-400 font-bold">+{steelPriceHike}%</span>
              </div>
              <input 
                type="range" min="0" max="30" step="5"
                value={steelPriceHike}
                onChange={(e) => setSteelPriceHike(parseInt(e.target.value))}
                className="w-full accent-rose-500 cursor-pointer"
              />
              <span className="text-[10px] text-slate-400 block font-normal text-left">Raw global polyurethane foam and core cladding spot price variations.</span>
            </div>
          </div>
        </div>

        {/* Dynamic Financial outputs */}
        <div className="lg:col-span-2 space-y-4 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="flex justify-between items-center border-b border-white/10 pb-3">
            <h3 className="text-xs font-mono font-bold text-amber-400 uppercase">
              Financial Itemised Forecasting Matrix Summary
            </h3>
            <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded font-bold font-mono">
              Live Projected EAC
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center font-mono py-2">
            <div className="p-3.5 bg-slate-950/80 rounded-xl border border-white/5">
              <span className="text-[9px] text-slate-400 uppercase block">Original Budget</span>
              <p className="text-base text-white font-bold font-display mt-1">${originalBudget.toLocaleString()}</p>
            </div>
            <div className="p-3.5 bg-slate-950/80 rounded-xl border border-white/5">
              <span className="text-[9px] text-slate-400 uppercase block">Purchase Committed</span>
              <p className="text-base text-slate-300 font-bold font-display mt-1">${committedPO.toLocaleString()}</p>
            </div>
            <div className="p-3.5 bg-slate-950/80 rounded-xl border border-white/5">
              <span className="text-[9px] text-slate-400 uppercase block">Cost Incurred ACTUAL</span>
              <p className="text-base text-slate-300 font-bold font-display mt-1">${actualInvoiced.toLocaleString()}</p>
            </div>
            <div className="p-3.5 bg-slate-950/80 rounded-xl border border-amber-500/40">
              <span className="text-[9px] text-amber-400 block uppercase">Forecast Final Cost</span>
              <p className="text-base text-white font-extrabold font-display mt-1">${forecastFinalCost.toLocaleString()}</p>
            </div>
          </div>

          <div className="p-4 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-between">
            <div>
              <p className="text-xs text-slate-300 font-mono">Project Net Margin Percentage Yield</p>
              <p className="text-[10px] text-slate-400 mt-0.5">Calculated based on real committed allocations plus simulated variances.</p>
            </div>
            <div className="text-right">
              <span className={`text-xl font-display font-black font-mono ${
                simulatedMargin >= 22.0 ? "text-emerald-400" : simulatedMargin >= 18.0 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {simulatedMargin.toFixed(2)}%
              </span>
              <span className="text-[10px] text-slate-400 block font-mono">
                {simulatedMargin >= 22.0 ? "Healthy Net Margin" : "Erosion Alert Status!"}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ==========================================
   5. PROCUREMENT / SUPPLIER LOGISTICS
   ========================================== */
export function ProcurementSupplierView({ onBackToMap }: ModuleProps) {
  const [suppliers, setSuppliers] = useState([
    { name: "Kingspan Premium Australia", quality: "98%", pricing: "Premium", del: "On Time", risk: "Low", poNumber: "PO-308", ship: "Brisbane Bay Container Port" },
    { name: "Askin High-Performance Doors", quality: "95%", pricing: "Moderate", del: "Delayed", risk: "Medium", poNumber: "PO-309", ship: "Sydney Port Botany" },
    { name: "Metecno PIR Panel Castings", quality: "89%", pricing: "Low-Cost", del: "Risk Alert", risk: "High", poNumber: "PO-310", ship: "Transit Melbourne" }
  ]);

  const expediteSupplier = (index: number) => {
    setSuppliers(prev => prev.map((s, idx) => idx === index ? { ...s, del: "Expedited", risk: "Low" } : s));
  };

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-rose-400 font-bold uppercase tracking-widest">
            Module 05 // Material Flow Systems
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            PROCUREMENT & SUPPLIER LOGISTICS
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-mono font-bold text-rose-400 uppercase">
            Supplier Performance scorecards & Container logistics tracking
          </h3>
          <span className="text-[10px] font-mono text-slate-400">Total PO value tracking active</span>
        </div>

        <div className="space-y-3.5">
          {suppliers.map((sup, idx) => (
            <div key={idx} className="bg-slate-950/60 border border-white/10 rounded-2xl p-5 hover:border-rose-400/50 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-display font-black text-sm text-white">{sup.name}</h4>
                  <span className="text-[10px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-400">
                    {sup.poNumber}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
                  Container route checkpoint: <strong>{sup.ship}</strong>
                </p>
                <div className="flex flex-wrap gap-2 text-[9px] font-mono pt-1 text-slate-300">
                  <span className="bg-emerald-950/40 text-emerald-400 px-1.5 py-0.5 border border-emerald-900/40 rounded">Quality: {sup.quality}</span>
                  <span className="bg-slate-900 text-slate-300 px-1.5 py-0.5 rounded">Pricing: {sup.pricing}</span>
                  <span className={`px-1.5 py-0.5 rounded ${
                    sup.risk === "Low" ? "bg-emerald-950/40 text-emerald-400" :
                    sup.risk === "Medium" ? "bg-amber-950/40 text-amber-400" : "bg-rose-950/40 text-rose-400"
                  }`}>Risk tier: {sup.risk}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 w-full md:w-auto justify-between md:justify-end border-t border-white/5 md:border-0 pt-3 md:pt-0">
                <div className="text-left md:text-right font-mono text-xs">
                  <p className="text-slate-400 uppercase text-[9px]">SLA Delivery</p>
                  <span className={`font-extrabold ${
                    sup.del === "On Time" ? "text-emerald-400" : sup.del === "Expedited" ? "text-cyan-400" : "text-rose-400"
                  }`}>
                    {sup.del}
                  </span>
                </div>
                {sup.del !== "Expedited" && sup.del !== "On Time" && (
                  <button 
                    onClick={() => expediteSupplier(idx)}
                    className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-rose-500 to-amber-500 text-white font-mono font-bold text-[10px] uppercase hover:brightness-110 active:scale-95 transition-all cursor-pointer shadow-lg"
                  >
                    ⚡ Expedite Order
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   6. ASSET MANAGEMENT (PLANT & EQUIPMENT)
   ========================================== */
export function AssetManagementView({ onBackToMap }: ModuleProps) {
  const [assets, setAssets] = useState([
    { id: "EQ-890", name: "120-Ton Liebherr Heavy Crane rig", util: "85%", hire: "On Hire", maintenance: "Cleared", nextCheck: "14 Oct 2026", cost: "$4,200/day" },
    { id: "EQ-891", name: "Gen-3 Electric Scissor Lifts (3 units)", util: "92%", hire: "On Hire", maintenance: "Due Soon", nextCheck: "3 Days", cost: "$580/day" },
    { id: "EQ-892", name: "High-Bay Vertical Mast Climber platform", util: "12%", hire: "Idle", maintenance: "Cleared", nextCheck: "28 Nov 2026", cost: "$1,100/day" }
  ]);

  const clearMaintenance = (id: string) => {
    setAssets(prev => prev.map(a => a.id === id ? { ...a, maintenance: "Cleared", nextCheck: "30 Days Checked" } : a));
  };

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-violet-400 font-bold uppercase tracking-widest">
            Module 06 // Heavy Machinery
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            ASSET MANAGEMENT (PLANT & EQUIPMENT)
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h3 className="text-xs font-mono font-bold text-violet-400 uppercase">
          Rigging Plant Yard Register & Live utilization tracking
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {assets.map((asset) => (
            <div key={asset.id} className="bg-slate-950/70 border border-white/10 rounded-2xl p-5 hover:border-violet-400 transition-all space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono text-[#2dccd3] font-bold">{asset.id}</span>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                    asset.hire === "On Hire" ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30" : "bg-slate-800 text-slate-400"
                  }`}>
                    {asset.hire}
                  </span>
                </div>
                <h4 className="font-display font-black text-sm text-white mt-1 leading-tight">{asset.name}</h4>
                <div className="grid grid-cols-2 gap-2 mt-3 text-[10px] font-mono text-slate-400 pt-2 border-t border-white/5">
                  <div>Daily Cost: <span className="text-white">{asset.cost}</span></div>
                  <div>Utilization: <span className="text-white">{asset.util}</span></div>
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center border-t border-white/5">
                <span className="text-[10px] font-mono text-slate-400 shrink-0">Maintenace due: {asset.nextCheck}</span>
                {asset.maintenance === "Due Soon" ? (
                  <button 
                    onClick={() => clearMaintenance(asset.id)}
                    className="px-2.5 py-1 bg-red-500 hover:bg-red-600 text-white font-mono text-[9px] font-extrabold uppercase rounded cursor-pointer"
                  >
                    ⚠️ Clear Tag
                  </button>
                ) : (
                  <span className="text-[9px] font-mono text-emerald-400 bg-emerald-950/20 px-1.5 py-0.5 rounded border border-emerald-900/35">Checked ✓</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   7. OHS / WHS (HEALTH & SAFETY)
   ========================================== */
export function OHSWHSView({ onBackToMap }: ModuleProps) {
  const [incidents, setIncidents] = useState([
    { zone: "Melbourne Yard Subgrid", type: "Toolbox Hazard Logged", level: "Low Risk", time: "2 hours ago" },
    { zone: "Sydney Woolworths DC Roof Deck", type: "High Lift Crane SWMS review triggered", level: "Cleared", time: "Yesterday" }
  ]);

  const [activePermit, setActivePermit] = useState<boolean>(false);

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-red-500 font-bold uppercase tracking-widest">
            Module 07 // Safety Assurance
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            OHS / WHS HEALTH & SAFETY REGISTRY
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Interactive Permit approval slider */}
        <div className="bg-[#0b0321]/80 border border-white/10 rounded-2xl p-6 space-y-4">
          <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 font-mono">
            <ShieldAlert size={14} />
            <span className="uppercase">Permit to Work High-Risk Crane lift gate</span>
          </div>
          <p className="text-xs text-slate-300">
            For critical hot-work roofing panel welding or cranage activities requiring safety officer clearance keys.
          </p>

          <div className="p-4 bg-slate-900 border border-white/10 rounded-xl space-y-1">
            <span className="text-[9px] font-mono text-slate-400 block uppercase">Permit Type Checked</span>
            <p className="text-xs font-bold text-white">SWMS Induction Checklist & Harness Cleared</p>
            <div className="flex justify-between items-center pt-3 mt-2 border-t border-white/5">
              <span className="text-xs text-slate-300 font-mono">Permit Active Status</span>
              <button 
                onClick={() => setActivePermit(!activePermit)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer uppercase ${
                  activePermit ? "bg-emerald-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {activePermit ? "✓ APPROVED / ACTIVE" : "⛔ UNLOCKED - CLICK TO APPROVE"}
              </button>
            </div>
          </div>
        </div>

        {/* Live Incident telemetry logs */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <h3 className="text-xs font-mono font-bold text-red-400 uppercase">
            Active Hazard Logs & High Risk Work Permitting
          </h3>

          <div className="space-y-3 text-xs">
            {incidents.map((inc, i) => (
              <div key={i} className="p-3 bg-white/5 border border-white/10 rounded-xl flex justify-between items-center">
                <div>
                  <p className="font-bold text-white">{inc.type}</p>
                  <p className="text-[10px] text-slate-400 font-mono mt-0.5">Zone: {inc.zone}</p>
                </div>
                <div className="text-right font-mono">
                  <span className={`text-[10px] px-2 py-0.5 rounded ${
                    inc.level === "Cleared" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                  }`}>{inc.level}</span>
                  <p className="text-[9px] text-slate-500 mt-0.5">{inc.time}</p>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => {
              setIncidents(prev => [
                { zone: "Sydney Yard - Gantry Crane", type: "Toolbox induction completed by rigger", level: "Cleared", time: "Just Now" },
                ...prev
              ]);
            }}
            className="w-full py-2 border border-dashed border-red-500/30 text-red-400 hover:bg-red-500/5 hover:border-red-400 text-xs font-mono font-bold rounded-xl transition-all cursor-pointer"
          >
            + Register New Toolbox Safety Talk Incident Hazard Frame
          </button>
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   8. QA / ITP (QUALITY ASSURANCE)
   ========================================== */
export function QAITPView({ onBackToMap }: ModuleProps) {
  const [checklist, setChecklist] = useState([
    { id: "QA-401", spec: "PIR Core Wall panel horizontal compression seal test", status: "Cleared" },
    { id: "QA-402", spec: "Double Mastic sealing along freezer panel ceiling groove", status: "Witness Required" },
    { id: "QA-403", spec: "Thermal bridge joint alignment - exact tolerance 1.5mm", status: "Hold Point Alert" }
  ]);

  const approvalQA = (id: string) => {
    setChecklist(prev => prev.map(c => c.id === id ? { ...c, status: "Cleared" } : c));
  };

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-teal-400 font-bold uppercase tracking-widest">
            Module 08 // Structural Fidelity
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            QA / ITP (QUALITY ASSURANCE)
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xs font-mono font-bold text-teal-400 uppercase">
            ITP Hold-points checklists & Insulated Joint air-tight certifications
          </h3>
          <span className="text-[10px] font-mono text-slate-400">Total checked checkpoints: {checklist.filter(c => c.status === "Cleared").length} / {checklist.length}</span>
        </div>

        <div className="space-y-3.5">
          {checklist.map((item) => (
            <div key={item.id} className="bg-slate-950/60 border border-white/10 rounded-2xl p-4.5 hover:border-teal-400 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono text-[#2dccd3] font-bold">{item.id}</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">Tolerance specification</span>
                </div>
                <h4 className="font-sans font-bold text-xs text-white leading-relaxed">{item.spec}</h4>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded uppercase ${
                  item.status === "Cleared" ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30" : "bg-amber-950/40 text-amber-400 border border-amber-900/30"
                }`}>
                  {item.status}
                </span>

                {item.status !== "Cleared" && (
                  <button 
                    onClick={() => approvalQA(item.id)}
                    className="px-3 py-1.5 bg-gradient-to-r from-teal-500 to-emerald-500 hover:brightness-110 font-mono text-[9px] font-bold uppercase rounded-lg cursor-pointer"
                  >
                    ✓ Witness Sign-Off
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   9. HR / PEOPLE MANAGEMENT
   ========================================== */
export function HRPeopleView({ onBackToMap }: ModuleProps) {
  const [welderPool, setWelderPool] = useState([
    { name: "Damian Vance (Rigger Supervisor)", classCert: "Heavy Crane Class-3 Certification", status: "Active NSW Roster", expiry: "320 Days" },
    { name: "Wade Garmont (Hygienic Joint Welder)", classCert: "PIR Panel Special Welding Standard Class-A", status: "Standby", expiry: "Expired - Urgent Action Required!" }
  ]);

  const clearExpiry = (index: number) => {
    setWelderPool(prev => prev.map((w, idx) => idx === index ? { ...w, expiry: "Cleared / 365 Days remaining!" } : w));
  };

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-fuchsia-400 font-bold uppercase tracking-widest">
            Module 09 // Workforce Allocation
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            HR / PEOPLE MANAGEMENT
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h3 className="text-xs font-mono font-bold text-fuchsia-400 uppercase">
          Site welder allocation & specialized ticket matrix
        </h3>

        <div className="space-y-3">
          {welderPool.map((welder, idx) => (
            <div key={idx} className="bg-slate-950/60 border border-white/10 rounded-2xl p-4 hover:border-fuchsia-400 transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1">
                <h4 className="font-display font-black text-xs text-white uppercase">{welder.name}</h4>
                <p className="text-[11px] text-slate-400">{welder.classCert}</p>
                <div className="pt-1.5 text-[9px] font-mono">
                  Roster: <span className="text-fuchsia-400 font-bold">{welder.status}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <span className={`text-[10px] font-mono leading-none ${
                    welder.expiry.includes("Expired") ? "text-rose-400 font-extrabold animate-pulse" : "text-emerald-400"
                }`}>
                  Ticket Status: {welder.expiry}
                </span>

                {welder.expiry.includes("Expired") && (
                  <button 
                    onClick={() => clearExpiry(idx)}
                    className="px-2.5 py-1.5 rounded-lg bg-rose-500 hover:bg-rose-600 text-white font-mono text-[9px] font-bold uppercase cursor-pointer"
                  >
                    ⚠️ Refresh Ticket Record
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   10. DESIGN / ENGINEERING
   ========================================== */
export function DesignEngineeringView({ onBackToMap }: ModuleProps) {
  const [clashes, setClashes] = useState([
    { code: "BIM-102", title: "Thermal expansion spacer clash with Main-Beams structural layout", status: "Critical Block", date: "12 June 2026" },
    { code: "BIM-103", title: "Freezer floor vapour barrier layout insulation mismatch", status: "Cleared", date: "20 June 2026" }
  ]);

  const resolveClash = (code: string) => {
    setClashes(prev => prev.map(c => c.code === code ? { ...c, status: "Cleared" } : c));
  };

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest">
            Module 10 // CAD/BIM Detail Design
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            DESIGN / ENGINEERING
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h3 className="text-xs font-mono font-bold text-sky-400 uppercase">
          Insulated panel joint CAD draft & BIM clash analysis logs
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {clashes.map((clash) => (
            <div key={clash.code} className="bg-slate-950/60 border border-white/10 rounded-2xl p-4.5 space-y-3 hover:border-sky-400 transition-all flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center border-b border-white/5 pb-1.5 mb-1.5">
                  <span className="text-[10px] font-mono text-sky-400 font-bold uppercase">{clash.code}</span>
                  <span className={`text-[9px] font-mono px-1.5 rounded font-extrabold uppercase ${
                    clash.status === "Cleared" ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30" : "bg-rose-950/40 text-rose-400 border border-rose-900/30 font-bold"
                  }`}>
                    {clash.status}
                  </span>
                </div>
                <p className="text-xs font-sans font-bold leading-relaxed text-white">{clash.title}</p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] font-mono text-slate-500">logged: {clash.date}</span>
                {clash.status !== "Cleared" ? (
                  <button 
                    onClick={() => resolveClash(clash.code)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white font-mono text-[9px] font-extrabold uppercase rounded-lg cursor-pointer"
                  >
                    RESOLVE CLASH
                  </button>
                ) : (
                  <span className="text-[9px] text-emerald-400 font-mono">Resolved ✓</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   11. CONSTRUCTION DELIVERY
   ========================================== */
export function ConstructionDeliveryView({ onBackToMap }: ModuleProps) {
  const [diaryInput, setDiaryInput] = useState("");
  const [timeline, setTimeline] = useState([
    { stage: "Subgrade excavation complete", status: "Finished", date: "10 June", delayColor: "text-emerald-400" },
    { stage: "Slab concrete curing & stabilization", status: "Delayed (3 Days)", date: "14 June", delayColor: "text-amber-400" },
    { stage: "PIR high-bay ceiling panel lifts", status: "Active Stage", date: "Currently running", delayColor: "text-cyan-400" }
  ]);

  const submitDiary = (e: React.FormEvent) => {
    e.preventDefault();
    if (!diaryInput.trim()) return;
    setTimeline(prev => [
      ...prev,
      { stage: `Forced diary: ${diaryInput}`, status: "Recorded", date: "Today", delayColor: "text-slate-300" }
    ]);
    setDiaryInput("");
  };

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-orange-400 font-bold uppercase tracking-widest">
            Module 11 // Site Operations Gantt
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            CONSTRUCTION DELIVERY
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Diary entry form */}
        <div className="lg:col-span-5 bg-[#0b0321]/80 border border-white/10 rounded-2xl p-6 space-y-4">
          <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">
            Create on-site diary log entries
          </h3>
          <p className="text-xs text-slate-300">
            Diarise daily on-site subcontractor activities to capture delay variables and protect project delivery margins.
          </p>

          <form onSubmit={submitDiary} className="space-y-3">
            <textarea
              value={diaryInput}
              onChange={(e) => setDiaryInput(e.target.value)}
              placeholder="e.g. Weather delay limits rig lift, crane standing-down for 4 hours..."
              className="w-full h-24 p-3 bg-slate-900 border border-white/10 rounded-xl text-xs font-sans focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-white"
            />
            <button
              type="submit"
              className="w-full py-2.5 bg-[#6f00ff] hover:bg-[#5000cc] text-white font-mono font-bold text-xs uppercase rounded-xl transition-all cursor-pointer shadow-md"
            >
              ✓ Record Diary Entry & Process
            </button>
          </form>
        </div>

        {/* Live lookahead Gantt representation */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <h3 className="text-xs font-mono font-bold text-orange-400 uppercase">
            Active Sydney Lookahead Gantt Program
          </h3>

          <div className="space-y-4 pl-2 font-mono text-xs">
            {timeline.map((item, idx) => (
              <div key={idx} className="flex gap-4 relative">
                {idx < timeline.length - 1 && (
                  <div className="absolute left-[5px] top-4 bottom-[-16px] w-[1px] bg-white/10" />
                )}
                <span className="w-2.5 h-2.5 rounded-full bg-orange-400 mt-[3px] shrink-0" />
                <div className="flex-1 space-y-0.5 pb-2">
                  <div className="flex justify-between items-center gap-2">
                    <p className="font-bold text-white text-xs">{item.stage}</p>
                    <span className="text-[10px] text-slate-500 font-mono shrink-0">{item.date}</span>
                  </div>
                  <span className={`text-[10px] block font-bold ${item.delayColor}`}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

/* ==========================================
   12. CLAIMS & SUBMISSION LEDGER
   ========================================== */
export function ClaimsLedgerView({ onBackToMap }: ModuleProps) {
  const [pipelineState, setPipelineState] = useState<number>(2); // Submit index

  const pipeline = ["Draft", "Review", "Submit", "Certified", "Paid"];

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-purple-400 font-bold uppercase tracking-widest">
            Module 12 // Commercial Liquid Protection
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            CLAIMS & SUBMISSION MANAGEMENT
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Pipeline slider controls */}
        <div className="bg-[#0b0321]/80 border border-white/10 rounded-2xl p-6 space-y-5 shadow-xl">
          <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#2dccd3]">
            <Activity size={14} />
            <span className="uppercase">AS 4902 statutory Pipeline</span>
          </div>
          <p className="text-xs text-slate-300 font-sans">
            Advance claims legally across critical submission stage gates under Australian Security of Payment rules.
          </p>

          <div className="flex items-center justify-between font-mono text-[10px] text-slate-300 py-1.5 border-b border-white/5">
            <span>Pending Validation Ledger</span>
            <span className="font-extrabold text-[#2dccd3] uppercase">Active NSW Claim Gate</span>
          </div>

          <div className="flex justify-between items-center gap-1 bg-slate-900 p-3 rounded-xl border border-white/10">
            {pipeline.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setPipelineState(idx)}
                className={`text-[9px] font-mono rounded px-2 py-1.5 uppercase transition-all flex-1 cursor-pointer font-bold ${
                  idx <= pipelineState ? "bg-[#6f00ff] text-white" : "bg-slate-800 text-slate-500"
                }`}
              >
                {step}
              </button>
            ))}
          </div>

          <p className="text-[10px] text-slate-400 italic font-mono">
            Current Active Pipeline status: {pipeline[pipelineState]} stage gate locked.
          </p>
        </div>

        {/* Claims Table ledger list */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
          <h3 className="text-xs font-mono font-bold text-purple-400 uppercase">
            Active Progress claims ledger register
          </h3>

          <div className="overflow-x-auto text-xs font-mono">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10 text-slate-500 text-[10px] uppercase">
                  <th className="pb-1.5">Claim ID</th>
                  <th className="pb-1.5">Claim Amount</th>
                  <th className="pb-1.5">Retention %</th>
                  <th className="pb-1.5 text-right">Progress Rate</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 font-sans">
                {[
                  { id: "CLM_NSW_01", amt: "$182,500", retain: "5.0%", rate: "Validated ✓" },
                  { id: "CLM_NSW_02", amt: "$94,300", retain: "2.5%", rate: "Under Review" },
                  { id: "CLM_VIC_01", amt: "$134,200", retain: "5.0%", rate: "Awaiting Sign" }
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-white/5 font-mono text-xs">
                    <td className="py-2.5 font-bold text-[#2dccd3]">{item.id}</td>
                    <td className="py-2.5 font-sans font-bold text-white">{item.amt}</td>
                    <td className="py-2.5 text-slate-400">{item.retain}</td>
                    <td className="py-2.5 text-right font-bold text-purple-400">{item.rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ==========================================
   13. HANDOVER & WARRANTY
   ========================================== */
export function HandoverWarrantyView({ onBackToMap }: ModuleProps) {
  const [warranties, setWarranties] = useState([
    { code: "WAR-SND-402", description: "Hygienic polyurethane wall core leak-proof warranty", duration: "10 Years", active: true },
    { code: "WAR-SND-403", description: "Thermal Freezer sliding lock closure rubber compression deed", duration: "5 Years", active: false }
  ]);

  const activateWarranty = (code: string) => {
    setWarranties(prev => prev.map(w => w.code === code ? { ...w, active: true } : w));
  };

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-widest">
            Module 13 // Waterproof Performance Liability
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            HANDOVER & WARRANTY
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h3 className="text-xs font-mono font-bold text-indigo-400 uppercase">
          Client Waterproof Certification Checklist & O&M collectible sign-off
        </h3>

        <div className="space-y-3">
          {warranties.map((warranty) => (
            <div key={warranty.code} className="bg-slate-950/60 border border-white/10 rounded-2xl p-4.5 hover:border-indigo-400 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1 text-left">
                <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase">{warranty.code}</span>
                <h4 className="font-sans font-bold text-xs text-white leading-relaxed">{warranty.description}</h4>
                <p className="text-[10px] text-slate-400 font-mono">DLP Duration: {warranty.duration}</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                  warranty.active ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30" : "bg-rose-950/40 text-rose-400 border border-rose-900/40"
                }`}>
                  {warranty.active ? "Active Warranty" : "Action Required"}
                </span>

                {!warranty.active && (
                  <button 
                    onClick={() => activateWarranty(warranty.code)}
                    className="px-3 py-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:brightness-110 font-mono text-[9px] font-extrabold uppercase rounded-lg cursor-pointer"
                  >
                    ✓ Activate Warranty
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   14. POLICY & GOVERNANCE
   ========================================== */
export function PolicyGovernanceView({ onBackToMap }: ModuleProps) {
  const [checks, setChecks] = useState([
    { item: "ISO 9001:2015 Structural Panel QA Audit Standard", completed: true },
    { item: "ISO 14001:2015 Green-Core Polyurethane recycling procedure", completed: false }
  ]);

  const toggleCheck = (index: number) => {
    setChecks(prev => prev.map((c, i) => i === index ? { ...c, completed: !c.completed } : c));
  };

  return (
    <div className="space-y-6 text-slate-100">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
        <div>
          <span className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest">
            Module 14 // Standard Regulatory Alignment
          </span>
          <h2 className="text-2xl font-display font-black text-white uppercase tracking-tight mt-0.5">
            POLICY & GOVERNANCE
          </h2>
        </div>
        <button 
          onClick={onBackToMap}
          className="px-4 py-2 bg-white/10 border border-white/15 rounded-xl text-xs font-mono font-bold hover:bg-white/20 transition-all uppercase"
        >
          🡠 Back to TEOS Web Map
        </button>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h3 className="text-xs font-mono font-bold text-slate-450 uppercase">
          Sydney vs Melbourne yard operations alignment matrix
        </h3>

        <div className="space-y-3">
          {checks.map((c, i) => (
            <div key={i} className="bg-slate-950/60 border border-white/10 rounded-2xl p-4 hover:border-slate-400 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">Policy Requirement</span>
                <p className="font-sans font-bold text-xs text-white leading-relaxed">{c.item}</p>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                  c.completed ? "bg-emerald-950/40 text-emerald-400 border border-emerald-900/30" : "bg-slate-800 text-slate-400 border border-slate-700/30"
                }`}>
                  {c.completed ? "COMPLIANT" : "PENDING AUDIT"}
                </span>

                <button 
                  onClick={() => toggleCheck(i)}
                  className="px-3 py-1.5 bg-white/5 border border-white/10 text-white font-mono text-[9px] font-bold uppercase rounded-lg hover:bg-white/10 cursor-pointer"
                >
                  {c.completed ? "Mark Unaudited" : "✓ Mark Audited"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
