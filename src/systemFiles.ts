/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface VirtualFile {
  id: string;
  name: string;
  category: 'contracts' | 'policies' | 'emails' | 'customers' | 'suppliers' | 'weather_competitors';
  path: string;
  content: string;
  meta: Record<string, string>;
}

export const virtualFiles: VirtualFile[] = [
  {
    id: "contract-01",
    name: "MEL-CS-2026-AS4902.md",
    category: "contracts",
    path: "File Storage/Contracts/MEL-CS-2026-AS4902.md",
    meta: {
      type: "Design and Construct Contract",
      parties: "Three Fold Panel Pty Ltd & Melbourne Cold Storage Pty Ltd",
      signedDate: "2026-02-14",
      projectValue: "$2,450,000 AUD",
      liquidatedDamages: "$3,000 / day",
      delayCosts: "$2,500 / day entitlement for partner delays",
      governingLaw: "Victoria, Australia"
    },
    content: `# CONTRACT AGREEMENT - DESIGN AND CONSTRUCT (AS 4902-2006)
## PROJECT: Laverton North Cold Storage Facility (Phase 2)
### PARTIES:
- **Principal:** Melbourne Cold Storage Pty Ltd (ABN 55 128 394 294)
- **Contractor:** Three Fold Panel Pty Ltd (ABN 68 493 204 192)

---

### CLAUSE 34: PROGRESS AND DELAYS
#### 34.5 Extension of Time (EOT)
The Contractor shall be entitled to an Extension of Time (EOT) for practical completion if the Contractor has been or will be delayed in reaching practical completion by a qualifying cause of delay. 

A "qualifying cause of delay" includes:
a) any act, default, or omission of the Principal, the Superintendent, or the Principal's employees, consultants, or other contractors (such as other civil, concrete, or roofing contractors on site);
b) industrial action or weather events causing suspended panel lifting operations.

#### 34.7 Delay Damages & Cost Reimbursement
Where the Contractor has been granted an Extension of Time under Clause 34.5 for a delay caused by an act, default, or omission of the Principal, the Principal's consultants, agents, or other contractors on site, the Principal shall pay to the Contractor the practical costs incurred by the Contractor due to the delay. These are fixed at **$2,500.00 AUD per working day** of delay.

Conversely, if the Contractor is in delay of reaching Practical Completion by their own default, liquidated damages shall accrue at **$3,000.00 AUD per calendar day** (Clause 35.2).

#### 34.8 Notification of Delay and Claims
To claim an Extension of Time or delay costs, the Contractor must give the Superintendent a written claim for an EOT within **5 working days** of when the Contractor first became aware, or reasonably should have become aware, of the delay commencing. The notice must specify the cause, the estimated delay, and reference this Clause 34.5.`
  },
  {
    id: "policy-01",
    name: "TFP_Delay_Incident_Standard_v3.md",
    category: "policies",
    path: "File Storage/Policies/TFP_Delay_Incident_Standard_v3.md",
    meta: {
      approvedBy: "Director, Three Fold Panel",
      effectiveDate: "2025-01-01",
      classification: "Internal Operational Standard"
    },
    content: `# THREE FOLD PANEL INTERNAL POLICY: DELAYS AND INCIDENTS
## SECTION 4.2: SITE OBSTRUCTION AND EXTERNAL DELAYS

1. **Immediate Documenting:**
   Whenever an external contractor (e.g. steel frame fabricators, concrete slab contractors, refrigeration engineers) causes an interruption that prevents our installers from mounting PIR/EPS panels or racking progress, the Site Supervisor must:
   - Photograph the obstructed work area with timestamp.
   - Send an immediate SMS notification to the Three Fold Project Manager.
   - Note the exact crew members (staff count) sidelined and any equipment idle (e.g. Scissor Lifts, Boom Lifts, Cranes).

2. **Template Formulation for Notices:**
   Any delay caused by other contractors or site-readiness must cite the corresponding Contract EOT clause immediately.
   The formal Delay Notice email draft must include:
   - The specific delay reason (e.g. "Civil contractor delayed concrete slab pour").
   - The date and location of the delay.
   - The computed operational cost impact ($2,500 per day or actual crew standby costs).
   - An attachment with standby crew metrics and the latest project Gantt chart demonstrating the critical path impact.
   - An explanation of supplier disruption fees (e.g. Bondor panel delivery rescheduling fees, which stand at $500 per incident).`
  },
  {
    id: "supp-01",
    name: "Bondor_Supplier_Profile.md",
    category: "suppliers",
    path: "File Storage/Suppliers/Bondor_Supplier_Profile.md",
    meta: {
      accountManager: "Sarah Jenkins",
      email: "orders@bondorpanels.com.au",
      location: "Campbellfield VIC",
      leadTime: "14 Days",
      status: "Preferred Supplier - PIR/EPS sandwich panels"
    },
    content: `# SUPPLIER PROFILE: BONDOR INSULATED PANELS
## Account: Three Fold Panel Pty Ltd

### KEY CONTACTS:
- **Primary Sales & Scheduling:** Sarah Jenkins
- **Email:** orders@bondorpanels.com.au
- **Direct Phone:** +61 3 9359 1000

### SUPPLY PARAMETERS:
- **Core Materials:** PIR Insulated Wall Panels, FlameGuard Mineral Wool Ceilings, EPS Frigpanel.
- **Processing Lead Time:** Standard catalog panels require **14 calendar days** from formal purchase order to logistics dispatch.
- **Rescheduling policy:** Rescheduling a scheduled production run or slot within 7 days of the dispatch date incurs a **$500.00 AUD administration and racking storage fee** per order. This must be covered by Three Fold or claimed against the delaying party if site readiness is pushed back.`
  },
  {
    id: "cust-01",
    name: "Melb_Cold_Storage_Profile.md",
    category: "customers",
    path: "File Storage/Customers/Melb_Cold_Storage_Profile.md",
    meta: {
      companyName: "Melbourne Cold Storage Pty Ltd",
      projectManager: "Marcus Vance",
      email: "marcus.vance@melbcold.com.au",
      siteAddress: "140 Boundary Road, Laverton North VIC",
      reputation: "Key Enterprise Account"
    },
    content: `# CUSTOMER PROFILE: MELBOURNE COLD STORAGE
## Laverton North Logistics Park - Stage 2 Build

### CONTACT INFORMATION:
- **Lead Project Manager / Superintendent:** Marcus Vance
- **Email:** marcus.vance@melbcold.com.au
- **Site Office Phone:** +61 491 570 156

### PROJECT STATUS SUMMARY:
Three Fold Panel is contracted to install 12,500 sqm of PIR insulated panels for the mega freezer and chilled storage facility.
- **Target completion date:** July 15, 2026.
- **Current crew allocation:** 8 premium panel installers, 2 site supervisors.
- **Critical dependency:** The main warehouse concrete slab must be fully cured and cleared by concrete subcontractor (Apex Civil) before sandwich panels can be erected.`
  },
  {
    id: "supp-02",
    name: "Kingspan_Supplier_Profile.md",
    category: "suppliers",
    path: "File Storage/Suppliers/Kingspan_Supplier_Profile.md",
    meta: {
      accountManager: "David Cole",
      email: "david.cole@kingspan.com.au",
      location: "Somerton VIC",
      leadTime: "18 Days",
      status: "Secondary Supplier"
    },
    content: `# SUPPLIER PROFILE: KINGSPAN INSULATED PANELS
## Account Support

### CONTACTS:
- **Email:** david.cole@kingspan.com.au
- **Key materials:** KS1100 CS Cold Store panels, high performance micro-rib thermal panels.
- **Lead Time Status:** High current volume. Production queue currently at **18 days** lead time.
- **Delivery reschedule:** Requires 10 days notice or incurs penalty fees.`
  },
  {
    id: "weather-01",
    name: "Melbourne_Laverton_North_Weather.json",
    category: "weather_competitors",
    path: "System Data/Weather & External/Melbourne_Laverton_North_Weather.json",
    meta: {
      station: "LAVERTON NORTH AWS",
      lastUpdated: "Today 08:30 AEST"
    },
    content: `{
  "location": "Laverton North, VIC",
  "temperature": "13.4 °C",
  "conditions": "Intermittent Heavy Rain & Strong Winds",
  "windSpeed": "38 km/h gusting to 52 km/h",
  "precipitationProbability": "85%",
  "safetyAdvisory": "CRITICAL WIND WARNING: Panel lifting operations and crane operations above 30m suspended due to high gust safety limits (limit is 35 km/h for insulated roof panel sheets)."
}`
  },
  {
    id: "comp-01",
    name: "Competitor_Market_Intelligence.json",
    category: "weather_competitors",
    path: "System Data/Weather & External/Competitor_Market_Intelligence.json",
    meta: {
      monitored: "Polar Cold Rooms, Zenith Panel Co",
      status: "Active Tracking"
    },
    content: `[
  {
    "competitor": "Polar Cold Rooms Pty Ltd",
    "announcedWin": "Geelong Chilled Distribution Hub Extension",
    "projectValue": "$3.1M",
    "estimatedStart": "August 2026",
    "procurementSourced": "Bondor standard PIR"
  },
  {
    "competitor": "Zenith Panel Co",
    "announcedWin": "Tullamarine Pharma Cold Store",
    "projectValue": "$1.8M",
    "estimatedStart": "Immediate",
    "operationalStaffCount": "High, currently bidding on Melbourne West projects"
  }
]`
  }
];

export const emailTemplates = {
  delayNotice: `Subject: Formal Delay Notice & Request for Extension of Time (EOT) - Laverton North Cold Storage Facility

Dear {PM_NAME},

We represent Three Fold Panel Pty Ltd under our contract for the Laverton North Cold Storage Facility (Phase 2). 

We are writing to provide a formal notice of delay in accordance with Clause 34.8 of our project contract, triggered by: **{DELAY_REASON}**.

As a direct result of this obstruction, Three Fold Panel’s critical path panel installation works are delayed by **{DELAY_DAYS} days**. Because this delay is caused by {RESPONSIBLE_PARTY} (Principal / Superintendent's other contractors on site), Clause 34.5 of our agreement entitles Three Fold Panel to a complete Extension of Time (EOT).

Additionally, as per **AS 4902 Contract Clause 34.7**, Three Fold Panel is entitled to delay damages and cost reimbursement for our crew standby and logistics rescheduling. Under the contract, these costs are fixed at **$2,500.00 AUD per working day**. 

Furthermore, our panel supplier (Bondor Insulated Panels) has charged a **$500.00 AUD rescheduling fee** due to site-readiness postponement. 

**Cost Breakdown Summary:**
- standby crew costs ({DELAY_DAYS} days @ $2,500.00/day): **{DELAY_DAMAGES_CLAIMED}**
- supplier dispatch rescheduling penalty: **$500.00 AUD**
- Total Delay Claim Amount: **{TOTAL_CLAIM}**

Please review and approve this EOT claim and process the corresponding invoice ({INVOICE_NUMBER}) by **{INVOICE_DUE_DATE}** to avoid project stand-down. 

Attached is our updated Critical-Path Gantt chart illustrating the knock-on effects. Our Project Manager will call you shortly to coordinate recovery schedules.

Sincerely,

Three Fold Panel Project Specialist
threefold.net.au`
};
