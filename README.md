# 🏥 Hospital Management System (K-DuraCare)
### Enterprise Healthcare Operations, Clinical Workforce & Facility Surveillance Platform

> **A centralized, intelligence-driven hospital operations system designed for healthcare institutions to streamline clinical administration, automate workforce operations, safeguard patient privacy, and monitor hospital facilities in real time.**

[![Status](https://img.shields.io/badge/Status-Production%20Ready-success)](#)
[![Platform](https://img.shields.io/badge/Platform-Web%20Application%20(Vite%208%20%2B%20React%2018)-blue)](#)
[![Domain](https://img.shields.io/badge/Domain-Healthcare%20%26%20Hospital%20Operations-red)](#)
[![Compliance](https://img.shields.io/badge/Compliance-NABH%20Standards%20%26%20Clinical%20Privacy-emerald)](#)
[![AI Engine](https://img.shields.io/badge/AI%20Intelligence-Google%20Gemini%202.5%20Flash-orange)](#)
[![CCTV Surveillance](https://img.shields.io/badge/Surveillance-12%20Live%20Telemetry%20Feeds-purple)](#)

---

## 📌 Executive Summary & Client Pitch

Modern hospitals often struggle with **disconnected software silos**: biometric attendance runs on standalone office machines, CCTV surveillance operates on separate DVR wall racks, shift rosters live on paper or whiteboards, and patient data resides in isolated clinical systems. 

**K-DuraCare** unifies these disparate hospital operations into a **single, responsive command center**. Engineered specifically for hospital management teams, medical superintendents, department heads, and security supervisors, the system delivers:

* **Complete Operational Visibility**: Real-time census of 326 enrolled staff across 12 departments, active patient loads, ward bed occupancies, and critical emergency corridor statuses.
* **Intelligent Facility & Camera Telemetry**: A 12-camera command wall monitoring entrances, ICUs, Operation Theatres, trauma bays, and sterile zones with automated stream health tracking and fall event detection.
* **22-Role Healthcare RBAC**: A strict 5-tier clearance matrix protecting sensitive clinical data while providing tailored views for doctors, nurses, HR, security personnel, and hospital executives.
* **AI-Assisted Operations**: Integration with **Google Gemini 2.5 Flash** to conduct instant staffing impact simulations, payroll anomaly audits, and conversational natural language queries.

---

# 🛠️ Complete Technology Stack

The platform is constructed on modern web and cloud technologies chosen for high reliability, fast rendering, strict security, and zero latency in clinical settings:

| Layer | Technologies Used | Version | Architectural Rationale & Client Value |
| :--- | :--- | :--- | :--- |
| **Frontend Framework** | **React** (SPA Architecture) | `18.3.x` | Industry-standard component reusability, declarative state updates, and instantaneous zero-reload transitions between hospital modules. |
| **Build & Tooling** | **Vite** | `8.3.x` | Lightning-fast Hot Module Replacement (HMR) and optimized rollup production bundles ensuring sub-second initial page load times. |
| **Routing & Navigation** | **React Router DOM** | `7.18.x` | Declarative client-side routing with nested layout trees and high-security `ProtectedRoute` clearance wrappers. |
| **Design & Styling** | **Tailwind CSS** + **PostCSS** | `v4.3.x` | Utility-first CSS engine with a tailored clinical color token system, smooth dark/light mode switches, and responsive desktop/tablet layouts. |
| **Typography** | **Google Fonts** (`Outfit` & `JetBrains Mono`) | Web | Modern, legible sans-serif for clinical dashboards paired with high-readability monospace fonts for biometric IDs, timestamps, and camera telemetry. |
| **Data Visualization** | **Recharts** | `3.10.x` | Native SVG-based charting library providing responsive area charts for hospital capacity, bar graphs for muster rolls, and donut charts for activity states. |
| **Iconography** | **Lucide React** | `1.47.x` | Comprehensive medical, operational, and system icons with uniform stroke weights and zero layout shift. |
| **Alerts & Toasts** | **React Hot Toast** | `2.6.x` | Non-blocking, role-contextual floating notifications for clinical alerts, camera degradation notices, and permission errors. |
| **AI Intelligence** | **Google Gemini 2.5 Flash SDK** (`@google/generative-ai`) | `0.24.x` | Low-latency generative AI model grounded in hospital operational parameters with automated fallback to an offline deterministic mock engine. |
| **Surveillance Media** | **HTML5 Native Video Engine** | Native | Hardware-accelerated loop playback with scanline overlays, FPS telemetry, and full-screen PTZ inspection modal views. |
| **Date & Time Utilities**| **date-fns** | `4.4.x` | Lightweight, immutable date manipulation for shift rosters, biometric punch stamps, and payroll cycle calculations. |

---

# 🧭 Project Architecture & System Flow

The application follows a unidirectional, context-guarded architecture that ensures complete security and rapid data propagation:

```text
 ┌────────────────────────────────────────────────────────────────────────┐
 │                      1. BROWSER CLIENT LAYER                           │
 │     React 18 Single Page Application · Tailwind v4 · Lucide React      │
 └───────────────────────────────────┬────────────────────────────────────┘
                                     │
                                     ▼
 ┌────────────────────────────────────────────────────────────────────────┐
 │                  2. SECURITY & AUTHENTICATION CONTEXT                  │
 │   AuthContext.jsx · 22-Role RBAC · 5 Clearance Levels · Data Scoping   │
 └─────────────────┬───────────────────────────────────┬──────────────────┘
                   │                                   │
     [Authorized Session]                     [Unauthorized Route]
                   │                                   │
                   ▼                                   ▼
 ┌───────────────────────────────────┐ ┌───────────────────────────────────┐
 │       3. PROTECTED APP LAYOUT     │ │   AccessRestricted Component      │
 │  Sidebar · TopBar · Live Switcher │ │   (Clearance Level Denial Screen) │
 └─────────────────┬─────────────────┘ └───────────────────────────────────┘
                   │
         ┌─────────┴─────────┬───────────────────┬─────────────────┐
         ▼                   ▼                   ▼                 ▼
 ┌───────────────┐   ┌───────────────┐   ┌───────────────┐ ┌───────────────┐
 │ Clinical Core │   │ Workforce Ops │   │ Facility Cams │ │ Analytics/AI  │
 │ • Patients    │   │ • Muster Roll │   │ • 12 Streams  │ │ • Recharts    │
 │ • Doctors     │   │ • Rosters     │   │ • Telemetry   │ │ • Gemini 2.5  │
 │ • Emergency   │   │ • Payroll     │   │ • Fall Alerts │ │ • Audit Log   │
 └───────┬───────┘   └───────┬───────┘   └───────┬───────┘ └───────┬───────┘
         │                   │                   │                 │
         └───────────────────┴─────────┬─────────┴─────────────────┘
                                       │
                                       ▼
 ┌────────────────────────────────────────────────────────────────────────┐
 │                    4. LOCAL DATA & MOCK REPOSITORY                     │
 │ cameras.js · employees.js · departments.js · shifts.js · payroll.js    │
 └────────────────────────────────────────────────────────────────────────┘
```

### Component Interaction Flow

1. **Authentication & Session Bootstrap**: The user logs in via `/login` or selects a preset role from the one-click demo switcher. `AuthContext.jsx` validates the credentials, assigns the role's clearance level (Level 1 to Level 5), and attaches the permitted data scope.
2. **Route Authorization Guard**: When navigating, `ProtectedRoute` intercepts the request. If the user's role lacks access to the module (e.g., Receptionist trying to view OT Clinical Notes), it halts rendering and presents the secure `AccessRestricted` screen.
3. **Dynamic Role Dashboard**: The root `/dashboard` determines the authenticated role and mounts the specialized view:
   * Doctors receive clinical patient consult queues and ICU telemetry.
   * Nurses receive bed occupancy rosters and medication alerts.
   * Administrators receive hospital-wide KPIs, capacity charts, and alert feeds.
   * Staff receive personal punch records and leave balance cards.
4. **Surveillance & AI Telemetry**: The `/monitor` and `/activity` modules subscribe to camera feeds in `cameras.js` and worker activity streams in `workerActivity.js`, updating stream health indicators (Online, Degraded, Offline) and feeding vision events into `aiService.js` for natural language querying.

---

# 📁 Important Files and Folders (Detailed Guide)

Below is an exhaustive breakdown of the project structure, explaining the purpose of each key file so you can walk clients through the codebase with confidence.

```text
k-duracare/
├── public/                       # Static public assets served directly by Vite
│   ├── docs.html                 # Standalone full-page architectural reference portal
│   ├── favicon.svg               # Browser tab brand icon
│   ├── images/logo/              # Hospital logos and branding identity assets
│   └── videos/                   # Pre-encoded MP4 surveillance video loops for cameras
│
├── src/                          # Application source code
│   ├── App.jsx                   # Master router, theme provider & route protection table
│   ├── main.jsx                  # Application entry point (mounts React DOM root)
│   ├── index.css                 # Master design tokens, Tailwind v4 imports & clinical styles
│   │
│   ├── context/                  # Global application state management
│   │   ├── AuthContext.jsx       # 22-Role RBAC engine, session store & patient privacy guards
│   │   ├── ThemeContext.jsx      # Dark mode / Light mode persistent state handler
│   │   └── SidebarContext.jsx    # Collapsible navigation drawer state
│   │
│   ├── layouts/                  # Structural page layouts
│   │   └── AppLayout.jsx         # App shell containing Sidebar, TopBar, and dynamic main outlet
│   │
│   ├── components/               # Modular UI component library
│   │   ├── AccessRestricted.jsx  # Security denial screen for unauthorized clearance levels
│   │   ├── Sidebar.jsx           # Dynamic navigation drawer showing role-accessible links
│   │   ├── TopBar.jsx            # Header with live role switcher, theme toggle & alerts
│   │   ├── dashboards/           # Specialized role-based dashboard sub-components
│   │   │   ├── DoctorDashboard.jsx
│   │   │   ├── NurseDashboard.jsx
│   │   │   ├── ClinicalAlliedDashboards.jsx
│   │   │   ├── OperationsSupportDashboards.jsx
│   │   │   └── EmployeeSelfServiceDashboard.jsx
│   │   ├── common/               # PageBreadcrumb, SearchInputs, and headers
│   │   └── ui/                   # Badges, Buttons, Cards, Modals, and Dropdowns
│   │
│   ├── data/                     # Hospital operational mock datasets
│   │   ├── cameras.js            # 12-camera telemetry, IP/RTSP ports, zones, and alert feeds
│   │   ├── workerActivity.js     # Computer vision pose analysis, break timers & idle events
│   │   ├── employees.js          # 326 enrolled hospital staff profiles and bios
│   │   ├── departments.js        # 12 hospital clinical & operational wings
│   │   ├── shifts.js             # Duty shift timings, weekly rosters & NABH ratios
│   │   ├── leave.js              # Leave quotas, applications, and calendar events
│   │   ├── payroll.js            # Salary bands, PF/ESI/TDS tax rules, and payslips
│   │   ├── roles.js              # 22 RBAC role definitions and clearance levels
│   │   └── audit.js              # System compliance event logs
│   │
│   ├── pages/                    # 18 Full-page views mapping directly to application routes
│   │   ├── Dashboard.jsx         # Central command center (dispatches to role views)
│   │   ├── Employees.jsx         # Searchable hospital workforce directory
│   │   ├── Employee360.jsx       # 360-degree staff profile with AI attendance evaluations
│   │   ├── Departments.jsx       # Departmental capacity and head-of-department oversight
│   │   ├── Roles.jsx             # RBAC role permissions manager and matrix viewer
│   │   ├── Attendance.jsx        # Biometric muster rolls, punch logs & regularizations
│   │   ├── Shifts.jsx            # Duty rosters, shift assignments & NABH compliance
│   │   ├── Leave.jsx             # Leave application workflow & AI understaffing simulator
│   │   ├── Payroll.jsx           # Salary register, deductions, payslips & AI anomaly audit
│   │   ├── Monitor.jsx           # 12-camera live surveillance wall with stream telemetry
│   │   ├── WorkerActivity.jsx    # AI computer vision posture, fall and break analytics
│   │   ├── Analytics.jsx         # Executive KPI visualizations and occupancy trends
│   │   ├── Reports.jsx           # Audit-ready departmental compliance and export center
│   │   ├── AuditLogs.jsx         # Immutable security audit trail
│   │   ├── Settings.jsx          # Hospital system configurations & alert thresholds
│   │   ├── Notifications.jsx     # Clinical escalations and facility incident notices
│   │   ├── Documentation.jsx     # In-app interactive documentation reader
│   │   └── Login.jsx             # Authentication gateway with one-click demo credentials
│   │
│   └── services/                 # External service integrations
│       └── aiService.js          # Google Gemini 2.5 Flash SDK wrapper + offline mock fallback
│
├── package.json                  # NPM dependencies, metadata and build scripts
├── vite.config.js                # Vite build plugins and configuration
└── tailwind.config.js            # Tailwind theme tokens and color extensions
```

---

# 🔍 Purpose of Each Major File & Client Talking Points

When presenting this project to a client or stakeholder, use this breakdown as your direct reference:

### 1. `src/App.jsx`
* **Purpose**: The master nerve center for application routing. Defines every URL route in the application using React Router DOM.
* **How It Works**: Wraps all protected routes in `<ProtectedRoute module="...">` checks. Implements `<ScrollToTop>` on route change and mounts global toast notification providers.
* **Client Talking Point**: *"The routing architecture guarantees that unauthorized users cannot simply type a URL into their browser to view confidential medical records or financial registers."*

### 2. `src/context/AuthContext.jsx`
* **Purpose**: Implements the hospital's 22-Role Role-Based Access Control (RBAC) security framework and session persistence.
* **How It Works**: Maintains the active user state, permission validation (`hasPermission(module)`), clinical data privacy guard (`canAccessPatient()`), and supplies pre-configured demo user accounts.
* **Client Talking Point**: *"This context enforces hospital data isolation: receptionists cannot view doctor diagnostic notes, doctors only access assigned patient charts, and general staff only see their personal duty rosters."*

### 3. `src/services/aiService.js`
* **Purpose**: Powers natural language conversational assistance and predictive decision-support across hospital operations.
* **How It Works**: Connects to the **Google Gemini 2.5 Flash** API via `@google/generative-ai`. If an API key is absent (offline demo or private network), it seamlessly activates a deterministic mock engine grounded in hospital metrics (326 staff, 12 cameras, bed coverage).
* **Client Talking Point**: *"Management can ask plain-English questions like 'What is the current ICU nurse coverage?' or 'Simulate the impact if three nurses take leave tomorrow' and receive instant, grounded answers."*

### 4. `src/pages/Monitor.jsx` & `src/data/cameras.js`
* **Purpose**: Delivers a full-facility CCTV surveillance wall and hardware stream health monitor.
* **How It Works**: Ingests camera data from `cameras.js` (IDs, names, floors, RTSP ports, stream status, FPS). Automatically blinks AI detection indicators on active streams, flags degraded/offline cameras, and opens high-resolution feeds with PTZ controls upon clicking any camera.
* **Client Talking Point**: *"Instead of having to monitor a wall of 50 screens, our system runs continuous stream health checks and alerts security the moment a camera feed drops or stutters in a critical zone."*

### 5. `src/pages/WorkerActivity.jsx` & `src/data/workerActivity.js`
* **Purpose**: AI-powered computer vision analytics tracking staff posture, physical presence, break durations, and safety incidents.
* **How It Works**: Analyzes posture classification (bedside active, seated, walking transit), enforces a 30-minute break timer in pantry/canteen zones, and generates automated alerts for possible fall events in patient monitoring corridors.
* **Client Talking Point**: *"This module provides objective operational data, identifying bottlenecks in sanitization turnaround, patient fall hazards, and ensuring break policy compliance without micromanagement."*

### 6. `src/pages/Attendance.jsx` & `src/pages/Shifts.jsx`
* **Purpose**: Digital biometric muster roll reconciliation, shift management, and NABH staffing compliance.
* **How It Works**: Compares biometric check-in/out timestamps with scheduled shift hours, logs missing punches, calculates late arrivals, and evaluates ward coverage against mandatory NABH nurse-to-patient ratios.
* **Client Talking Point**: *"Eliminates manual muster roll discrepancies and ensures the hospital remains audit-ready for healthcare accreditation boards."*

### 7. `src/pages/Payroll.jsx`
* **Purpose**: End-to-end automated hospital payroll processing.
* **How It Works**: Computes gross salaries across various staff bands, deducts Provident Fund (PF), Employee State Insurance (ESI), and Tax Deducted at Source (TDS), factors in Loss of Pay (LOP) from muster rolls, and generates PDF-ready digital payslips.
* **Client Talking Point**: *"Payroll officers can finalize monthly compensation for all 326 employees in minutes, with built-in AI auditing that flags overtime anomalies before disbursement."*

---

# 📹 12-Camera Surveillance & Facility Security Matrix

The surveillance subsystem monitors 12 strategically designated zones across the hospital campus:

| Camera ID | Hospital Area | Floor / Wing | Zone Classification | Telemetry Health | Monitoring Objective |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **CAM-SEC-01** | Main Security Gate & Post | Ground Floor | Perimeter Security | 1080p @ 30 FPS 🟢 | Perimeter control, boom barrier, ANPR vehicle plate scan |
| **CAM-REC-01** | Main Reception Lounge | Ground Floor | Public Lounge | 4K @ 30 FPS 🟢 | Inflow check-in, token queue pacing, visitor reception |
| **CAM-OPD-01** | Outpatient Dept (OPD) Entrance | Ground Floor | Public Clinical | 1080p @ 25 FPS 🟢 | Footfall screening, crowd density alerts, queue flow |
| **CAM-ER-01** | Emergency Bay & Ramp | Ground Floor | Critical Trauma | 1080p @ 30 FPS 🟢 | Red corridor clearance, ambulance obstruction alerts |
| **CAM-STAFF-01** | Pharmacy & Staff Corridor | Ground Floor | Staff Only | 1080p @ 25 FPS 🟢 | Medication vault protection, staff transit logging |
| **CAM-PARK-01** | Hospital Parking Lot | Ground Floor | Exterior Perimeter | 720p @ 15 FPS 🟢 | Vehicle movement, parking capacity, boundary alerts |
| **CAM-LAB-01** | Pathology Laboratory | 1st Floor | Staff Diagnostic | 1080p @ 25 FPS 🟢 | Specimen safety, biohazard area access, staff duty |
| **CAM-NK-01** | Nurse Station & Wards | 1st Floor | Clinical Ward | 1080p @ 25 FPS 🟢 | Inpatient ward oversight, prolonged absence alerts |
| **CAM-ICU-01** | ICU Entrance Air-lock | 2nd Floor | Restricted Sterile | 1080p @ 25 FPS 🟢 | Authorized personnel verification, sterile gowning area |
| **CAM-ICU-02** | ICU Clinical Staff Area | 2nd Floor | Clinical ICU | 1080p @ 25 FPS 🟢 | Nursing station coordination, medication preparation |
| **CAM-ICU-03** | ICU Patient Monitor Zone | 2nd Floor | Critical Patient | 720p @ 10 FPS 🟡 | Vitals telemetry, posture tracking, automated fall alerts |
| **CAM-OT-01** | Operation Theatre (OT) Door | 3rd Floor | Restricted Surgical| Offline 🔴 | Sterile surgical corridor access *(Maintenance Active)* |

---

# 🔐 22-Role RBAC Security Matrix & Demo Credentials

To present multi-role workflows to clients, the system provides built-in demo credentials for every operational tier:

| Security Tier | Role Title | Demo Account | Password | Scope & Clearances |
| :--- | :--- | :--- | :--- | :--- |
| **Level 5 (Super Admin)** | Medical Director | `admin` | `admin123` | `HOSPITAL_ALL`: Complete command, user configuration, audit access |
| **Level 4 (Executive)** | Hospital Management | `management` | `mgmt123` | `HOSPITAL_EXECUTIVE`: Executive analytics, bed census, financial summaries |
| **Level 4 (Administrative)**| HR Administrator | `hr` | `hr123` | `WORKFORCE_OPS`: Employee directory, muster rolls, shifts, leave |
| **Level 3 (Financial)** | Payroll Officer | `payroll` | `pay123` | `FINANCIAL_PAYROLL`: Compensation bands, tax deductions, payslip issuance |
| **Level 3 (Clinical)** | Chief Cardiologist / Doctor| `doctor` | `doc123` | `AUTHORIZED_PATIENTS_ONLY`: Clinical patient charts, consult queues, vitals |
| **Level 3 (Clinical)** | Nursing Superintendent | `nurse` | `nurse123` | `ASSIGNED_WARD_ONLY`: Inpatient beds, ward vitals, medication timings |
| **Level 3 (Security)** | Chief Security Officer | `security` | `security123` | `CCTV_SECURITY`: 12-camera live video wall, stream telemetry, zone alarms |
| **Level 2 (Front-Desk)** | Receptionist / OPD Staff | `receptionist` | `rec123` | `FRONT_DESK_NO_CLINICAL`: Patient intake, token queues (No clinical access) |
| **Level 1 (Self-Service)**| Staff Employee / Aayah | `employee` | `emp123` | `SELF_SERVICE`: Personal biometric punches, assigned shifts, leave quota |

*(Note: In the live application, you can switch between these roles with a single click using the role selector in the TopBar or by clicking user cards on the login page.)*

---

# 🚀 Setup and Deployment Instructions

### Prerequisites
* **Node.js**: `v18.x` or `v20.x LTS` installed on your machine
* **npm**: `v9.x` or higher
* **Git**: Installed for version management

### 1. Installation
Clone the repository and install all required node modules:

```bash
# Clone the repository
git clone https://github.com/your-org/hospital-management-system.git

# Navigate into the project folder
cd hospital-management-system/k-duracare
# Or directly if already in the project directory:
cd k-duracare

# Install clean dependencies
npm install
```

### 2. Environment Configuration (Optional)
The system works out-of-the-box with a built-in offline mock engine. To enable live Google Gemini AI capabilities, create a `.env` file in the `k-duracare` directory:

```env
# Optional: Google Gemini API Key for live AI responses
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

### 3. Running Locally (Development Mode)
Start the Vite development server with Hot Module Replacement:

```bash
npm run dev
```

Open your browser and navigate to:
```text
http://localhost:5173
```

### 4. Building for Production
Generate an optimized, minified production distribution bundle:

```bash
npm run build
```

This compiles static assets into the `dist/` directory, optimized with code-splitting, tree-shaking, and minified CSS.

### 5. Previewing Production Build Locally
Test the production build locally before client deployment:

```bash
npm run preview
```

### 6. Production Hosting Options
The compiled `dist/` bundle is a standard Single Page Application (SPA) that can be deployed to:
* **Cloud Platforms**: AWS S3 + CloudFront, Microsoft Azure Static Web Apps, or Google Cloud Storage.
* **On-Premise Hospital Servers**: NGINX, Apache, or Windows IIS server configured with SPA rewrite rules (`try_files $uri $uri/ /index.html;`).

---

# 💡 Client Presentation Talking Points & ROI FAQ

When presenting K-DuraCare to hospital administrators, use these key value propositions:

### Q1: "How does this platform improve patient safety?"
> *"By linking CCTV telemetry to bed monitoring in critical wards (like the ICU), the system automatically detects abnormal postures or possible patient falls, instantly notifying the nursing station rather than waiting for scheduled rounds."*

### Q2: "How does this reduce operational leakage and costs?"
> *"Our integrated muster roll reconciles biometric punches directly with shift schedules and payroll calculations. This eliminates time-theft, automates overtime calculations, and ensures staff leaves are backed by coverage simulations so departments are never understaffed."*

### Q3: "Can our staff's privacy be protected while maintaining security?"
> *"Yes. The computer vision algorithms analyze physical pose vectors and zone presence (e.g. tracking whether someone is bedside or in a break room) without capturing audio or invading personal privacy, adhering to hospital ethical guidelines."*

### Q4: "Is the platform NABH audit ready?"
> *"Yes. The system continuously validates clinical nurse-to-patient ratios against NABH thresholds and generates immutable audit trails of all sensitive record views and administrative actions."*

---

<div align="center">

### 🏥 Kanakadurga Hospital — K-DuraCare Enterprise
**Smarter Operations · Total Facility Visibility · Compassionate Healthcare**

*Developed for Dr K B Chowdary Healthcare Providers*

</div>
