export interface TEOSBlock {
  id: number;
  number: string;
  title: string;
  icon: "Gauge" | "Workflow" | "Scale" | "DollarSign" | "ShoppingCart" | "Hammer" | "Shield" | "BadgeCheck" | "Users2" | "Ruler" | "HardHat" | "FileSignature" | "Award" | "Fingerprint";
  color: string;
  theme: "emerald" | "cyan" | "blue" | "amber" | "rose" | "violet" | "red" | "teal" | "fuchsia" | "sky" | "orange" | "purple" | "indigo" | "slate";
  highlight: string;
  short: string;
  keyFeatures: string[];
  operations?: string[];
  commercial?: string[];
  risk?: string[];
  aiSummary?: string;
  platforms?: string[];
  connected?: string[];
  aiCapabilities?: string[];
  aiAnalytics?: string[];
  scorecard?: { quality: string; price: string; delivery: string; safety: string; service: string; innovation: string };
  benefits?: string[];
  compliance?: string[];
  deliverables?: string[];
  insights?: string[];
  workflow?: string[];
  tracking?: string[];
  actionLabel?: string;
}

export const bentoBlocks: TEOSBlock[] = [
  {
    id: 1,
    number: "3. EXECUTIVE DASHBOARD (CEO COCKPIT)",
    title: "Executive Cockpit",
    icon: "Gauge",
    color: "bg-emerald-500/10 border-emerald-500 text-emerald-400 hover:bg-emerald-500/15",
    theme: "emerald",
    highlight: "Contract Value | Variations | EOTs | LD Risk",
    short: "Real-time visibility. Smarter decisions. Complete control.",
    keyFeatures: ["Revenue Forecast", "Gross Margin Forecast", "Cashflow Forecast", "Outstanding Debtors", "Work In Hand"],
    operations: ["Active Projects", "Projects At Risk", "Labour Utilisation", "Plant Utilisation", "Resource Availability"],
    commercial: ["Variations Submitted", "Variations Approved", "EOTs Pending", "Claims Outstanding", "Contract Value"],
    risk: ["Safety Incidents", "Contract Risks", "Supplier Risks", "Quality Issues", "Insurance Expiry"],
    aiSummary: "Threefold is forecasting $2.3M profit this month. Core focus has $180k unapproved variations. Melbourne cold store utilization is 82%. Kingspan delivery risk identified on Project X."
  },
  {
    id: 2,
    number: "2. MAIN CONTRACTOR INTEGRATION",
    title: "Sync Contractor Clouds",
    icon: "Workflow",
    color: "bg-[#2dccd3]/10 border-[#2dccd3] text-[#2dccd3] hover:bg-[#2dccd3]/15",
    theme: "cyan",
    highlight: "RFIs | Drawings | Site Instructions | Defects",
    short: "Two-way integration with leading construction cloud services.",
    keyFeatures: ["PROCORE Connector", "AUTODESK Construction Cloud", "ACONEX Integrator", "ORACLE Primavera API", "INEIGHT Sync Gateway", "TeamBinder Bridge"],
    connected: ["RFIs & Transmittals", "Drawings & Revisions", "Site Instructions", "Variations & Change Orders", "Defects & Issues", "Programmes & Lookahead"]
  },
  {
    id: 3,
    number: "3. CONTRACT / COMMERCIAL / LEGAL (AI)",
    title: "AS 4902 AI Compliance Core",
    icon: "Scale",
    color: "bg-blue-500/15 border-blue-400 text-blue-400 hover:bg-blue-500/20 cursor-pointer ring-2 ring-blue-400/50",
    theme: "blue",
    highlight: "Notice of Delay | Standby Claims | Clause extraction",
    short: "AS 4902-2006 compliance analyzer. Audits sub-contractor delays and spits out legal contract notices instantly.",
    keyFeatures: ["Contract Register (Head, Sub, Supply)", "Contract Review Workflows", "Risk Register & Obligations", "Variation Management", "EOT & Delay Management", "Legal Advice Tracking"],
    aiCapabilities: ["AI Contract Review & Risk Flagging", "Clause Extraction & Summary", "Notice & Obligation Reminders", "Variation & EOT Approvals Support", "Legal Query Assistant"],
    actionLabel: "Launch Delay Damages Compliance Analyzer 🚀"
  },
  {
    id: 4,
    number: "4. COST / BUDGET CONTROL",
    title: "Financial Protection Control",
    icon: "DollarSign",
    color: "bg-amber-500/10 border-amber-500 text-amber-400 hover:bg-amber-500/15",
    theme: "amber",
    highlight: "Commitments | Forecast Final Cost | Margin %",
    short: "Ensure healthy project margins with detailed itemised cost control.",
    keyFeatures: ["Original Budget (Labour & Material)", "Purchase Orders & Commitments", "Actuals (Invoices, Timesheets)", "Margin Erosion Alerts", "Cashflow Forecasting"],
    aiAnalytics: ["Margin Forecasting", "Productivity Tracking", "Cost Variance Analysis", "Budget Overrun Predictions", "What-If Scenarios"]
  },
  {
    id: 5,
    number: "5. PROCUREMENT / SUPPLIER CONTROL",
    title: "Supplier & Panel Logistics",
    icon: "ShoppingCart",
    color: "bg-rose-500/10 border-rose-500 text-rose-400 hover:bg-rose-500/15",
    theme: "rose",
    highlight: "PO Status | Deliveries at Risk | Scorecards",
    short: "Seamless materials planning. High-bay panels scheduling.",
    keyFeatures: ["Supplier Database & Prequal", "RFQs, Quotes & Comparisons", "Purchase Orders", "Expediting & Delivery Tracking", "Factory Progress & Inspections", "Container & Shipping Tracking"],
    scorecard: { quality: "98%", price: "Premium", delivery: "95%", safety: "A+", service: "Excellent", innovation: "High" }
  },
  {
    id: 6,
    number: "6. ASSET MANAGEMENT (PLANT & EQUIPMENT)",
    title: "Heavy Lifting Logistics",
    icon: "Hammer",
    color: "bg-violet-500/10 border-violet-500 text-violet-400 hover:bg-violet-500/15",
    theme: "violet",
    highlight: "Assets On Hire | Utilisation % | Maintenance Due",
    short: "Complete physical and financial auditing of all heavy lifters & shears.",
    keyFeatures: ["Asset Register (Owned & Hired)", "Allocation to Projects", "Maintenance & Servicing", "Calibration & Compliance", "Test & Tag Inspections", "Utilisation Tracking", "Cost Recovery to Projects"],
    benefits: ["Know Where Everything Is", "Reduce Downtime", "Lower Maintenance Costs", "Maximise Utilisation", "Improve Cost Recovery"]
  },
  {
    id: 7,
    number: "7. OHS / WHS",
    title: "Health & Safety Registry",
    icon: "Shield",
    color: "bg-red-500/10 border-red-500 text-red-400 hover:bg-red-500/15",
    theme: "red",
    highlight: "Incidents | High Risk Work | Training",
    short: "First-class safety tools for risk reduction across all work zones.",
    keyFeatures: ["SWMS & SOP Library", "Inductions & Competencies", "Permits (High Risk Work)", "Incident & Hazard Reporting", "Corrective Actions", "Safety Observations", "Toolbox Talks", "Audits & Inspections"],
    compliance: ["Licence Expiry Alerts", "Induction Expiry Alerts", "High Risk Work Alerts", "Training Matrix", "Compliance Reporting"]
  },
  {
    id: 8,
    number: "8. QA / ITP (QUALITY ASSURANCE)",
    title: "Quality Assurance",
    icon: "BadgeCheck",
    color: "bg-teal-500/10 border-teal-500 text-teal-400 hover:bg-teal-500/15",
    theme: "teal",
    highlight: "ITP Progress | Open NCRs | Hold Points",
    short: "Uncompromised install accuracy for fire-rated cold storage walls.",
    keyFeatures: ["Project Quality Plans", "ITPs (Hold & Witness Points)", "Inspections & Checklists", "NCRs & Corrective Actions", "Material Traceability", "Certificates & Test Results", "QA Pack Generation"],
    deliverables: ["Inspection Records", "Product Certificates", "Test Results", "Traceability Logs", "Handover Packs"]
  },
  {
    id: 9,
    number: "9. HR / PEOPLE MANAGEMENT",
    title: "Workforce & Rostering",
    icon: "Users2",
    color: "bg-fuchsia-500/10 border-fuchsia-500 text-fuchsia-400 hover:bg-fuchsia-500/15",
    theme: "fuchsia",
    highlight: "Headcount | Utilisation | Expiring Licences",
    short: "Allocating skilled labor & specialized panel handlers safely.",
    keyFeatures: ["Employee & Contractor Records", "Skills & Competency Matrix", "Licences, Tickets & Certificates", "Training Records", "Timesheets & Rosters", "Leave Management", "Performance & Appraisals"],
    insights: ["Resource Availability", "Upcoming Expiries", "Labour Utilisation", "Skills Gap Analysis", "Workforce Planning"]
  },
  {
    id: 10,
    number: "10. DESIGN / ENGINEERING",
    title: "Thermal Detail & CAD/BIM",
    icon: "Ruler",
    color: "bg-sky-500/10 border-sky-500 text-sky-400 hover:bg-sky-500/15",
    theme: "sky",
    highlight: "Drawings Register | RFIs | BIM models",
    short: "BIM models for seamless thermal joint structural details.",
    keyFeatures: ["Drawing Register & Revisions", "Shop Drawing Workflows", "RFI Management", "Design Approvals", "BIM & 3D Model Coordination", "Clash Detection", "Engineering Certifications"],
    insights: ["Drawings Awaiting Review", "Open RFIs", "Design Hold Points", "Clash Issues", "Approvals Status"]
  },
  {
    id: 11,
    number: "11. CONSTRUCTION DELIVERY",
    title: "Site Progress & Diaries",
    icon: "HardHat",
    color: "bg-orange-500/10 border-orange-500 text-orange-400 hover:bg-orange-500/15",
    theme: "orange",
    highlight: "Programme Status | Progress % | Weather Delays",
    short: "Managing the real physical panel stacking and ceiling lifts.",
    keyFeatures: ["Baseline & Lookahead Programmes", "Daily Reports (Labour, Progress, Plant)", "Site Diaries & Photos", "Progress Tracking (KPIs)", "Resource & Crew Planning", "Weather Tracking", "Defects & Action Lists"],
    insights: ["On-time Performance", "Productivity Tracking", "Critical Path Analysis", "Lookahead Compliance", "Action Tracking"]
  },
  {
    id: 12,
    number: "12. CLAIMS & SUBMISSION MANAGEMENT",
    title: "Claims & Variation Ledger",
    icon: "FileSignature",
    color: "bg-[#6f00ff]/15 border-purple-400 text-[#2dccd3] hover:bg-purple-500/20 cursor-pointer ring-2 ring-purple-500/30",
    theme: "purple",
    highlight: "Monthly Claims | EOT Claims | Retention",
    short: "Never lose a dollar under Australian AS 4902 safety laws.",
    keyFeatures: ["Monthly Progress Claims", "Variation Submission & Pricing", "EOT Claims Management", "Final Claims Settlement", "Payment Schedules", "Retention Tracking"],
    workflow: ["Draft", "Review", "Submit", "Certified", "Paid"],
    actionLabel: "Launch Claims Notice Auditing Module"
  },
  {
    id: 13,
    number: "13. HANDOVER & WARRANTY",
    title: "Leak-Proof Warranty Handover",
    icon: "Award",
    color: "bg-indigo-500/10 border-indigo-500 text-indigo-400 hover:bg-indigo-500/15",
    theme: "indigo",
    highlight: "Warranty Expiries | Defects Liability | Closing DLP",
    short: "Seamless final handovers with robust leak-proof warranties.",
    keyFeatures: ["Handover Checklists", "As-Built Drawings", "O&M Manuals Collection", "Training Records", "Defects Management", "Client Sign-Off"],
    tracking: ["Product Serial Numbers", "Supplier Warranties", "Expiry Dates", "Warranty Claims", "History & Outcomes"]
  },
  {
    id: 14,
    number: "14. POLICY & GOVERNANCE",
    title: "Standards & Approvals Policy",
    icon: "Fingerprint",
    color: "bg-slate-500/10 border-slate-500 text-slate-400 hover:bg-slate-500/15",
    theme: "slate",
    highlight: "Policies | Document Version Control | Audits",
    short: "Corporate governance aligning Sydney & Melbourne yards.",
    keyFeatures: ["Policies & Procedures", "Document Control Processes", "Version Control", "Approval Workflows", "Compliance Register", "Audit Trail & Reporting"],
    benefits: ["Consistent Processes", "Regulatory Compliance", "Risk Reduction", "Audit Readiness", "Continuous Improvement"]
  }
];

export const teosPillars = [
  {
    title: "One Source of Truth",
    desc: "All project & commercial data combined in one high-compliance database."
  },
  {
    title: "Protect Margin",
    desc: "Real-time visibility of sub-grade concrete issues, EOTs, and delay damages."
  },
  {
    title: "Drive Efficiency",
    desc: "Simulate contract notices and timesheet attachment files automatically."
  },
  {
    title: "Reduce Risk",
    desc: "Fully AS 4902-2006 compliant delay auditing across Australian sites."
  },
  {
    title: "Improve Quality",
    desc: "Audit hold-points and witness records for hygienic cold food corridors."
  },
  {
    title: "Scalable Growth",
    desc: "Consistent processes supporting Sydney, Brisbane & Melbourne yards."
  }
];
