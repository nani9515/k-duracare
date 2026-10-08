# 🏥 Hospital Management System

> **A modern, intelligent, and centralized hospital management platform designed to streamline healthcare operations, enhance patient care, improve facility monitoring, and provide real-time operational visibility.**

[![Status](https://img.shields.io/badge/Status-Active-success)](#)
[![Platform](https://img.shields.io/badge/Platform-Web%20Application-blue)](#)
[![Healthcare](https://img.shields.io/badge/Domain-Healthcare-red)](#)
[![Management](https://img.shields.io/badge/System-Hospital%20Management-purple)](#)
[![Compliance](https://img.shields.io/badge/Compliance-NABH%20Standards-emerald)](#)
[![AI-Powered](https://img.shields.io/badge/AI%20Engine-Google%20Gemini%202.5%20Flash-orange)](#)

---

## 📌 Executive Overview

The **Hospital Management System (HMS)** — featuring the **K-DuraCare Enterprise Healthcare Platform** — is a unified digital ecosystem engineered to bring clinical workflows, workforce management, facility infrastructure, and security surveillance into a single command center.

Designed for high-reliability medical environments such as **Kanakadurga Hospital (A Unit of Dr K B Chowdary Healthcare Providers)**, the platform equips hospital directors, medical superintendents, physicians, head nurses, administrative leaders, and security chiefs with real-time operational intelligence.

```
                      ┌──────────────────────────────────────────┐
                      │     K-DURACARE HOSPITAL COMMAND CENTER    │
                      └────────────────────┬─────────────────────┘
                                           │
         ┌───────────────────┬─────────────┴─────────────┬───────────────────┐
         ▼                   ▼                           ▼                   ▼
 🩺 Clinical Care     👥 Workforce Ops            🏢 Facility Ops      📹 AI Vision & Safety
 • Patients           • 326 Staff Roster          • 12 Departments     • 12 CCTV Feeds
 • Doctors            • Biometric Muster          • Capacity & Wards   • Fall Detection
 • Appointments       • Shifts & NABH Ratio       • Emergency Bays     • Zone Intrusions
 • Emergency Bay      • Leave & Payroll           • Pharmacy & Lab     • Break Time Sensors
```

### Operational Scope

* 👨‍⚕️ **Doctors & Medical Staff:** Credentialing, consultation slots, ward assignments, and duty schedules.
* 🧑‍🤝‍🧑 **Patients:** Registration records, admission histories, vitals tracking, and clinical ward allocations.
* 📅 **Appointments:** Multi-department booking, token queues, doctor availability, and status tracking.
* 🏥 **Departments & Hospital Areas:** 12 specialized wings including ICU, OT, OPD, Laboratory, and Inpatient Wards.
* 🚨 **Emergency Services:** Trauma bay management, red corridor transit, ambulance lane clearing, and triage monitoring.
* 💊 **Pharmacy:** Inventory management, scheduled drug security, low-stock alerts, and dispensary tracking.
* 🛏️ **Beds & Wards:** ICU, emergency, step-down, and general ward bed occupancy and turnaround tracking.
* 🧪 **Laboratory Services:** Specimen order processing, diagnostic reports, and test pipeline statuses.
* 💳 **Billing & Payments:** Treatment fee breakdowns, statutory receipts, insurance claims, and revenue analytics.
* 📊 **Hospital Analytics:** Executive KPIs, bed occupancy rates, attendance trends, and clinical performance.
* 📹 **Facility & Camera Monitoring:** 12-camera live CCTV telemetry with real-time stream health and full-screen inspection.
* 🔐 **Security & Access Monitoring:** 22-tier Role-Based Access Control (RBAC), biometric check-ins, and perimeter watch.
* 🤖 **AI Operational Intelligence:** Google Gemini 2.5 Flash assistant with automated fall detection and posture analytics.

The overarching mission: **Deliver total operational visibility, streamline patient-centric coordination, and enforce data-driven governance across the hospital.**

---

# 🎯 Project Objectives

The architecture of the Hospital Management System is anchored on five foundational pillars:

### 1. Centralized Management
Eliminate siloed departmental software by converging clinical data, HR rosters, biometric attendance, financial ledgers, and surveillance video into an integrated platform.

### 2. Elevated Patient Care & Experience
Minimize waiting times at reception and outpatient corridors, accelerate emergency intake through dedicated trauma bay protocols, and guarantee optimal nurse-to-patient ratios aligned with NABH guidelines.

### 3. Real-Time Surveillance & Facility Monitoring
Deliver proactive situational awareness through continuous CCTV telemetry, instantaneous offline/degraded camera alerts, perimeter boom barrier checks, and restricted clean-room monitoring.

### 4. Operational Efficiency & Automation
Automate daily muster rolls, statutory payroll deductions (PF/ESI/TDS), missing punch regularizations, and leave impact evaluations to relieve administrative overhead.

### 5. Intelligent, Data-Driven Decision Making
Provide hospital leadership with executive drill-down dashboards, department-by-department utilization metrics, and predictive AI staffing recommendations grounded in live operational data.

---

# 🖥️ Core Modules

## 📊 1. Hospital Command Dashboard

The primary mission control center of the platform. The dashboard dynamically adapts based on the authenticated user's role:

* **Executive View:** Hospital capacity, workforce availability, patient census, active emergency cases, and active alerts.
* **Doctor View:** Assigned patient consultation roster, ICU patient telemetry alerts, and today's clinical schedule.
* **Nurse View:** Ward bed occupancy, vitals monitoring log, and upcoming medication schedules.
* **Operations & Security View:** Biometric muster status, CCTV health grid, and perimeter breach indicators.
* **Key Metrics Displayed:** Total Staff (326), Active Attendance (278 Present), Emergency Status (Nominal/Elevated), Camera Network (10 Online, 1 Degraded, 1 Offline).

---

## 👨‍⚕️ 2. Doctor Management

A centralized directory and scheduling engine for medical practitioners and clinical specialists:

* Comprehensive doctor profiles, credentials, medical council registration, and department affiliations.
* Weekly consultation availability, OPD timing slots, and emergency on-call schedules.
* Ward rounds assignment and patient case responsibility mapping.
* Cross-specialty collaboration and physician directory lookups.

---

## 🧑‍🤝‍🧑 3. Patient Management

Centralized clinical records and patient tracking engineered to uphold healthcare privacy:

* Patient intake registration, unique Health ID (UHID), and demographic management.
* Outpatient token generation and queue status updates.
* Inpatient admission records, bed assignment history, and discharge planning.
* Strict clinical data scoping: Reception staff cannot view diagnosis or clinical notes; doctors only access assigned patient charts.

---

## 📅 4. Appointment Management

End-to-end appointment scheduling coordinating patients with clinical specialists:

* Multi-department booking engine (Cardiology, Orthopedics, Pediatrics, General Medicine, General Surgery).
* Real-time doctor availability verification to prevent double bookings.
* Appointment life-cycle states: *Scheduled*, *Checked-In*, *In Consultation*, *Completed*, and *Cancelled*.
* Automated queue token display for OPD waiting lounges.

---

## 🚨 5. Emergency Management

Rapid-response management for critical trauma and casualty admissions:

* Live status of the emergency trauma bay, resuscitation suites, and ambulance arrival lanes.
* Color-coded triage classification (Red: Immediate, Yellow: Urgent, Green: Non-Urgent).
* Rapid stretcher transit sensors and dedicated trauma team dispatching.
* Instant emergency bed reservation and direct escalation to the Operation Theatre.

---

## 🛏️ 6. Bed & Ward Management

Comprehensive hospital capacity monitoring ensuring optimal bed turnover:

* Real-time bed occupancy status across all hospital units (ICU, Step-down, Isolation, Post-Op, General Male/Female Wards).
* Ward-wise capacity gauges and visual vacancy indicators.
* Bed cleaning, sanitation turnaround status, and rapid admission assignment.
* Bedside telemetry feed links for high-dependency patients.

---

## 💊 7. Pharmacy Management

Integrated pharmacy dispensary and pharmaceutical inventory tracking:

* Central medicine catalogue with stock levels, batch numbers, and expiry tracking.
* Automated low-stock thresholds with proactive reorder alerts.
* Inpatient medication sheet reconciliation and outpatient prescription fulfillment.
* Controlled drug access logs and high-value medication audit trails.

---

## 🧪 8. Laboratory Management

Diagnostic laboratory pipeline management from test ordering to report delivery:

* Specimen collection logging (Blood, Urine, Biopsy, Cultures) with sample barcoding.
* Departmental lab processing status (Pathology, Biochemistry, Microbiology).
* Technician sign-off and senior pathologist verification workflows.
* Real-time report dispatch to treating doctors and patient charts.

---

## 💳 9. Billing & Financial Management

Transparent hospital accounts and patient billing management:

* Itemized billing statements consolidating consultation fees, bed charges, pharmacy dispensations, lab diagnostics, and surgery packages.
* Automated statutory salary deductions, Loss of Pay (LOP) calculations, and overtime disbursements for 326 employees.
* Revenue analytics, department billing summaries, and audit-ready receipt generation.
* Downloadable PDF-ready salary slips and financial ledgers.

---

## 🏢 10. Facility Management

Infrastructure health and building management oversight:

* Environmental zoning: Restricted Surgical Suites, Clean Rooms, Public Lounges, and Service Corridors.
* Power backup and medical oxygen manifold telemetry monitoring.
* Housekeeping hygiene schedules and sanitization audit logs.
* Facility maintenance ticket management and contractor access oversight.

---

## 📹 11. Facility Monitoring → Camera Health

The platform features an advanced **Surveillance Command Wall** integrating continuous video feeds and real-time hardware telemetry.

### 🎥 12-Camera Strategic Placement Matrix

| Camera ID | Hospital Area | Floor / Wing | Zone Classification | Stream Telemetry | Primary Monitoring Objective |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CAM-SEC-01** | Main Security Gate & Post | Ground Floor | Security Zone | 1080p @ 30 FPS 🟢 | Perimeter intrusion, boom barrier, ANPR vehicle plate scan |
| **CAM-REC-01** | Main Reception Lounge | Ground Floor | Public Zone | 4K @ 30 FPS 🟢 | Inflow check-in, token queue pacing, visitor reception |
| **CAM-OPD-01** | Outpatient Dept (OPD) Entrance | Ground Floor | Public Zone | 1080p @ 25 FPS 🟢 | Footfall screening, crowd density alerts, queue congestion |
| **CAM-ER-01** | Emergency Bay & Ramp | Ground Floor | Critical Zone | 1080p @ 30 FPS 🟢 | Red corridor clearance, ambulance bay obstruction alerts |
| **CAM-STAFF-01** | Pharmacy & Staff Corridor | Ground Floor | Staff Only | 1080p @ 25 FPS 🟢 | Medication vault protection, staff hallway transit |
| **CAM-PARK-01** | Hospital Parking Lot | Ground Floor | Public Perimeter | 720p @ 15 FPS 🟢 | Vehicle movement, parking capacity, exterior security |
| **CAM-LAB-01** | Pathology Laboratory | 1st Floor | Staff Only | 1080p @ 25 FPS 🟢 | Specimen safety, biohazard area access, technician duty |
| **CAM-NK-01** | Nurse Station & Wards | 1st Floor | Staff / Clinical | 1080p @ 25 FPS 🟢 | Inpatient ward oversight, prolonged absence alerts |
| **CAM-ICU-01** | ICU Entrance Air-lock | 2nd Floor | Restricted Zone | 1080p @ 25 FPS 🟢 | Authorized personnel verification, sterile gowning area |
| **CAM-ICU-02** | ICU Clinical Staff Area | 2nd Floor | Staff Only | 1080p @ 25 FPS 🟢 | Nursing station coordination, medication preparation |
| **CAM-ICU-03** | ICU Patient Monitor Zone | 2nd Floor | Critical Clinical | 720p @ 10 FPS 🟡 | Vitals telemetry, posture tracking, automated fall alerts |
| **CAM-OT-01** | Operation Theatre (OT) Door | 3rd Floor | Restricted Zone | Offline 🔴 | Sterile surgical corridor access control *(Maintenance Active)* |

### 🔐 Security & Stream Health Telemetry
* **Heartbeat Ping & FPS Monitoring:** Continuous telemetry tracking bitrates, frame rates, and latency.
* **Degraded Stream Notification:** Automated warnings when packet loss degrades feeds below clinical thresholds (e.g., CAM-ICU-03).
* **Failover & Maintenance Tickets:** Auto-triggers work orders for offline hardware (e.g., CAM-OT-01).
* **Live Video Playback:** Integrated video feeds (`/videos/cam-*.mp4`) displaying authentic surveillance footage for each designated hospital area.

---

## 🔐 12. Security & Access Monitoring (22-Role RBAC Matrix)

Hospital security demands granular access segregation. K-DuraCare implements a 5-tier clearance hierarchy spanning 22 distinct hospital positions:

```
┌────────────────────────────────────────────────────────────────────────┐
│ LEVEL 5: Super Administrator (Dr. K. B. Chowdary)                      │
│ Scope: HOSPITAL_ALL — Complete command, system configuration, audit    │
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 4: Executive Board & HR Management                               │
│ Scope: WORKFORCE_OPS & EXECUTIVE — Roster approval, payroll, compliance│
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 3: Clinical & Specialized Operations                             │
│ Scope: Clinical (Doctor, Nurse, ICU) & Security (CCTV Wall Supervisor) │
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 2: Departmental & Front-Desk Staff                               │
│ Scope: Registration, token queues, departmental rosters               │
├────────────────────────────────────────────────────────────────────────┤
│ LEVEL 1: Employee Self-Service                                         │
│ Scope: Individual punch logs, personal duty calendar, leave balance   │
└────────────────────────────────────────────────────────────────────────┘
```

### Privacy & Data Protection Safeguards
* **Clinical Patient Scope:** Non-clinical personnel (Security, Reception, Accounts) are programmatically blocked from reading medical diagnoses, clinical notes, and physician notes.
* **Biometric Muster Integrity:** Biometric punch logs cannot be tampered with without Level 4 HR supervisor approval and immutable audit logging.
* **Tamper-Evident Audit Trails:** Every user login, permission change, patient record view, and stream inspection is permanently recorded in the system audit registry.

---

## 📈 13. Analytics, Insights & AI Assistance

* **Hospital KPI Engine:** Interactive Recharts visualizations tracking daily patient footfall, ward bed occupancy percentages, and departmental overtime expenditures.
* **NABH Compliance Monitor:** Automated checks verifying that the nurse-to-patient ratio remains within required thresholds (1:1 in ICU, 1:4 in wards).
* **Google Gemini 2.5 Flash AI Assistant:**
  * Inquires into live hospital staffing and muster roll status.
  * Conducts leave impact simulations (prevents approvals that cause departmental staffing to drop below 80%).
  * Audits payroll calculations for anomalies prior to final salary sign-off.
  * Includes a built-in mock fallback engine for offline or low-connectivity operation.

---

# 🧭 System Architecture

```text
                               ┌───────────────────────────────────┐
                               │       Client Browser / App        │
                               │    (React 18, Vite 8, Tailwind)   │
                               └─────────────────┬─────────────────┘
                                                 │
                                                 ▼
                               ┌───────────────────────────────────┐
                               │    Authentication & AuthContext   │
                               │   (22 Roles · 5 Security Levels)  │
                               └─────────────────┬─────────────────┘
                                                 │
                        ┌────────────────────────┴────────────────────────┐
                        ▼                                                 ▼
       ┌─────────────────────────────────┐               ┌─────────────────────────────────┐
       │     Clinical & Admin Core       │               │      Facility & Surveillance    │
       ├─────────────────────────────────┤               ├─────────────────────────────────┤
       │ • Dashboard & Role Switcher     │               │ • 12 CCTV Stream Health Engine  │
       │ • Workforce Directory (326)     │               │ • Zone Intrusion Sensors        │
       │ • Biometric Muster Rolls        │               │ • Fall & Posture Detection      │
       │ • Shift Rosters & NABH Ratios   │               │ • Canteen Break Limit Timers    │
       │ • Leave & Automated Payroll     │               │ • Video Telemetry Controller    │
       └────────────────┬────────────────┘               └────────────────┬────────────────┘
                        │                                                 │
                        └────────────────────────┬────────────────────────┘
                                                 │
                                                 ▼
                               ┌───────────────────────────────────┐
                               │        AI Intelligence Engine     │
                               │  Google Gemini 2.5 Flash Service  │
                               │  + Mock Offline Fallback Handler  │
                               └───────────────────────────────────┘
```

---

# ✨ Feature Comparison & Summary

| Operational Domain | Platform Capabilities | Key Benefit |
| :--- | :--- | :--- |
| **Command Dashboard** | Role-adaptive UI, live status feeds, quick actions | Immediate situational awareness for all staff tiers |
| **Medical Staff** | Directory, credentials, consultation slots, on-call rosters | Optimized doctor allocation and patient coverage |
| **Patient Care** | Intake UHID, token queue, admission history, clinical scoping | Reduced wait times and strict privacy compliance |
| **Emergency Bay** | Rapid trauma triage, ambulance lane monitoring, red corridor | Instant life-saving response coordination |
| **Beds & Wards** | Live bed vacancy, ICU beds, rapid sanitation status | Eliminated admission bottlenecks |
| **CCTV Surveillance** | 12 live feeds, heartbeat ping, stream degradation alerts | Real-time facility protection and patient safety |
| **Computer Vision** | Posture classification, fall detection, break timers | Automated incident detection without manual watching |
| **Workforce & Muster** | Biometric reconciliation, late-entry logs, shift swaps | Accurate attendance and zero payroll leakage |
| **Payroll & Finance** | PF/ESI/TDS tax deductions, LOP calculations, digital payslips | Transparent, audit-ready financial operations |
| **AI Copilot** | Google Gemini 2.5 Flash query engine, staffing simulation | Intelligent operational support across all shifts |

---

# 🎨 User Experience & Design Philosophy

The interface is engineered around modern clinical human-factor standards:

* **Executive Visual Polish:** Built with modern design aesthetics, refined dark/light themes, and custom typography (**Outfit** & **JetBrains Mono**).
* **Color Psychology:** Emerald (`#10b981`) for healthy operational statuses, Amber (`#f59e0b`) for degraded streams/coverage warnings, Rose (`#ef4444`) for critical clinical events and unauthorized intrusions.
* **Instant Role Switcher:** Quick switcher in the demo navigation to test experiences across Super Admin, HR, Doctor, Nurse, and Security perspectives without re-entering credentials.
* **High Information Density with Zero Clutter:** Card-based metrics, synchronized charts, and searchable data grids.

---

# 🛠️ Technology Stack

### Frontend Architecture
* **Core Framework:** React 18 (SPA Architecture)
* **Build System & Bundler:** Vite 8 (Ultra-fast HMR and optimized production bundles)
* **Routing:** React Router v7 (`BrowserRouter` with nested layouts and `ProtectedRoute` guards)
* **Styling Engine:** Tailwind CSS v4 (`@tailwindcss/vite`, PostCSS, custom CSS variables)
* **Icons & Visuals:** Lucide React (Comprehensive medical and operational iconography)
* **Data Visualization:** Recharts 3.x (Responsive capacity area charts, attendance bars, payroll distributions)
* **Feedback System:** React Hot Toast (Real-time toast notifications with role-specific alerts)

### AI & Intelligence Services
* **AI Engine:** Google Gemini 2.5 Flash via `@google/generative-ai` SDK
* **Offline Fallback Engine:** Rule-grounded deterministic mock engine simulating hospital parameters
* **Computer Vision Mock Telemetry:** Video event parsing, pose vector state tracking, and duration timers

### Development & Tooling
* **Language:** Modern JavaScript (ES Modules) + TypeScript definitions
* **Package Manager:** npm
* **Version Control:** Git & GitHub

---

# 🚀 Getting Started

## Prerequisites

Ensure your workstation has the modern Node.js runtime installed:

```bash
# Recommended Node version: 18.x or 20.x LTS
node --version
npm --version
git --version
```

---

## Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-org/hospital-management-system.git
   ```

2. **Navigate to the application directory:**
   ```bash
   cd hospital-management-system/k-duracare
   # Or directly inside the project root:
   cd k-duracare
   ```

3. **Install project dependencies:**
   ```bash
   npm install
   ```

4. **Configure Environment Variables (Optional):**
   Create a `.env` file in the root of the project to enable live Gemini AI queries:
   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *(Note: If no API key is provided, the platform automatically switches to the built-in Mock Intelligence Engine.)*

5. **Launch the development server:**
   ```bash
   npm run dev
   ```

6. **Open in your browser:**
   ```text
   http://localhost:5173
   ```

---

## 🔑 Demo Access Credentials

The platform includes pre-configured credential presets for testing multi-role workflows:

| Role Title | Security Level | Username | Password | Permitted Modules |
| :--- | :--- | :--- | :--- | :--- |
| **Super Administrator** | Level 5 | `admin` | `admin123` | All modules, settings, role configuration |
| **Hospital Management** | Level 4 | `management` | `mgmt123` | Executive dashboard, rosters, reports, analytics |
| **HR Administrator** | Level 4 | `hr` | `hr123` | Employees, muster rolls, shifts, leave, payroll |
| **Doctor / Consultant** | Level 3 | `doctor` | `doc123` | Clinical patient views, shifts, self-service |
| **Nursing Superintendent** | Level 3 | `nurse` | `nurse123` | Ward beds, vitals logs, telemetry, leave |
| **Chief Security Officer** | Level 3 | `security` | `security123` | 12-camera monitor wall, worker activity, zone alerts |

*(Alternatively, click any user card on the `/login` screen to sign in instantly.)*

---

# 📁 Project Directory Structure

```text
k-duracare/
├── public/
│   ├── docs.html                 # Standalone web documentation portal
│   ├── favicon.svg               # Application icon
│   ├── images/
│   │   └── logo/
│   │       └── kanakadurga-hospital.jpg
│   └── videos/                   # Authentic camera surveillance footage
│       ├── cam-icu-01.mp4        # ICU Entrance feed
│       ├── cam-icu-02.mp4        # ICU Staff Area feed
│       ├── cam-icu-03.mp4        # ICU Monitor Zone feed
│       ├── cam-er-01.mp4         # Emergency Entrance feed
│       ├── cam-opd-01.mp4        # OPD Reception & Inflow feed
│       ├── cam-sec-01.mp4        # Main Security & Watchman Gate feed
│       └── ...
│
├── src/
│   ├── App.jsx                   # Master routing table & protected route wrappers
│   ├── index.css                 # Master Tailwind v4 styles, themes & utilities
│   ├── main.jsx                  # Application entry point
│   │
│   ├── components/               # Reusable UI component library
│   │   ├── AccessRestricted.jsx  # Clearance denial guard screen
│   │   ├── common/               # Breadcrumbs, headers, search bars
│   │   └── ui/                   # Badges, modals, cards, tabs, dropdowns
│   │
│   ├── context/
│   │   ├── AuthContext.jsx       # 22-role RBAC, permission matrix & clinical guards
│   │   └── ThemeContext.jsx      # Dark/Light mode theme provider
│   │
│   ├── data/                     # Hospital mock datasets & telemetry stores
│   │   ├── cameras.js            # 12 cameras, zones, telemetry & alert feeds
│   │   ├── departments.js        # 12 hospital clinical & operational units
│   │   ├── employees.js          # 326 enrolled staff members with biographies
│   │   ├── shifts.js             # Roster shifts, timings & NABH ratio rules
│   │   ├── leave.js              # Leave balances & application history
│   │   ├── payroll.js            # Salary bands, PF/ESI/TDS tax deductions
│   │   └── roles.js              # 22 RBAC roles & access clearance mapping
│   │
│   ├── layouts/
│   │   └── AppLayout.jsx         # Layout frame with Sidebar, TopBar & Live Switcher
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx         # Central command center (Dynamic multi-role view)
│   │   ├── Employees.jsx         # 326-member workforce directory
│   │   ├── Employee360.jsx       # Individual staff 360 profile & AI evaluation
│   │   ├── Departments.jsx       # Hospital unit administration
│   │   ├── Roles.jsx             # 22-role clearance administration
│   │   ├── Attendance.jsx        # Biometric muster rolls & punch reconciliation
│   │   ├── Shifts.jsx            # Weekly duty roster & NABH coverage checker
│   │   ├── Leave.jsx             # Leave approvals & AI understaffing simulator
│   │   ├── Payroll.jsx           # Salary register, statutory taxes & payslips
│   │   ├── Monitor.jsx           # 12-camera live video wall & stream health
│   │   ├── WorkerActivity.jsx    # Computer vision posture, fall & break analytics
│   │   ├── Analytics.jsx         # Executive KPIs, occupancy & cost charts
│   │   ├── Reports.jsx           # Exportable audit & compliance summaries
│   │   ├── AuditLogs.jsx         # Immutable security & access event log
│   │   ├── Settings.jsx          # Hospital system parameters & preferences
│   │   ├── Notifications.jsx     # Clinical escalation & alert center
│   │   ├── Documentation.jsx     # In-app architecture & user documentation
│   │   └── Login.jsx             # Multi-role authentication portal
│   │
│   └── services/
│       └── aiService.js          # Google Gemini 2.5 Flash SDK + Mock Fallback
│
├── package.json                  # Dependencies, metadata & build scripts
├── vite.config.js                # Vite build and plugin configuration
├── tailwind.config.js            # Tailwind theme tokens & color extensions
└── tsconfig.json                 # TypeScript compiler configuration
```

---

# 🔒 Security & Healthcare Compliance

Operating a hospital platform requires stringent digital safeguards:

1. **Role-Based Access Control (RBAC):** Strict 5-level clearance enforcement ensuring only authorized individuals access sensitive endpoints.
2. **Clinical Data Privacy:** Enforces patient data segregation; non-clinical accounts cannot read diagnostic information.
3. **NABH Nurse-to-Patient Compliance:** Automatic verification of ward staff coverage (1:1 in ICU, 1:4 in wards) to meet accreditation guidelines.
4. **Audit Logging:** Every user login, profile update, salary modification, and camera feed inspection is logged with timestamps and user IDs.
5. **Session Isolation:** Authentication tokens and session contexts are cleanly cleared upon sign-out to prevent credential hijacking on shared nurse-station terminals.

---

# 📊 Future Roadmap

* 🤖 **Predictive Patient Risk Scoring:** Machine learning telemetry integration to forecast ICU bed deterioration hours in advance.
* 📷 **Edge-AI Video Analytics:** Real-time on-camera edge inferencing for automated PPE compliance and surgical gown detection.
* ☁️ **Cloud Native Scaling:** Migration pathways for high-availability multi-region hosting on Microsoft Azure with HIPAA-compliant data lakes.
* 📱 **Mobile Clinical Companion:** Native iOS & Android companion applications for on-call doctors to approve emergency medication orders and view vital telemetry remotely.

---

# 🌟 Why K-DuraCare?

Traditional healthcare facilities struggle with fragmented point solutions: biometric attendance on one desktop, CCTV feeds on a separate DVR, roster schedules on whiteboards, and clinical records in standalone archives.

**K-DuraCare unifies these operations into a single pane of glass.**

> ### *"One Hospital. One Platform. Complete Operational Visibility."*

---

# 👥 Project Credits & Governance

### **Kanakadurga Hospital Healthcare Administration**
* **Institution:** Kanakadurga Hospital / Nursing Home
* **Parent Organization:** Dr K B Chowdary Healthcare Providers
* **System Designation:** K-DuraCare Enterprise Hospital Management System
* **Core Domains:** Clinical Informatics • Workforce Automation • AI Video Surveillance • NABH Quality Compliance

---

<div align="center">

### 🏥 Kanakadurga Hospital — K-DuraCare
**Smarter Healthcare Operations · Total Facility Visibility · Compassionate Care**

</div>
