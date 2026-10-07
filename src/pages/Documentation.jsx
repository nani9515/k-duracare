import React, { useState } from 'react';
import { BookOpen, Shield, Cpu, ExternalLink, Search, Layers, Key, Server, CheckCircle2, ChevronRight, Activity } from 'lucide-react';
import PageBreadcrumb from '../components/common/PageBreadcrumb';
import Badge from '../components/ui/badge/Badge';

export default function Documentation() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');

  const docSections = [
    { id: 'overview', label: '1. Executive Overview', icon: BookOpen },
    { id: 'architecture', label: '2. System Architecture', icon: Layers },
    { id: 'rbac', label: '3. 22-Role RBAC Matrix', icon: Shield },
    { id: 'ai', label: '4. AI CCTV & Gemini Engine', icon: Cpu },
    { id: 'credentials', label: '5. Demo Credentials', icon: Key },
    { id: 'deployment', label: '6. Deployment Guide', icon: Server },
  ];

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white shadow-xs ring-4 ring-brand-50 dark:ring-brand-500/10 border border-gray-100 dark:border-gray-800">
            <img src="/images/logo/kanakadurga-hospital.jpg" alt="Kanakadurga Hospital logo" className="h-full w-full object-cover" />
          </div>
          <PageBreadcrumb
            pageTitle="System Documentation & Architecture Guide"
            breadcrumbs={[
              { label: 'System', path: '/dashboard' },
              { label: 'Documentation' }
            ]}
          />
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/docs.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white px-4 py-2 text-xs font-semibold shadow-xs transition"
          >
            <span>Open Standalone Web Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200 dark:border-gray-800 overflow-x-auto pb-1">
        {docSections.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-t-xl transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-white dark:bg-gray-900 text-brand-600 dark:text-brand-400 border-t-2 border-brand-500 shadow-xs'
                  : 'text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 shadow-xs space-y-6">
        
        {activeTab === 'overview' && (
          <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">K-Duracare System Overview</h2>
            <p>
              <strong>K-Duracare</strong> is an integrated Healthcare Workforce Management and Operational Surveillance Platform developed for <strong>Kanakadurga Nursing Home (A Unit of Dr K B Chowdary Healthcare Providers)</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-white/[0.02]">
                <div className="text-2xl font-bold text-brand-600 dark:text-brand-400 font-mono">326</div>
                <div class="text-xs font-semibold text-gray-800 dark:text-white mt-1">Enrolled Staff</div>
                <div className="text-[11px] text-gray-500 mt-1">Across 12 hospital departments & clinical wards.</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-white/[0.02]">
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 font-mono">22</div>
                <div class="text-xs font-semibold text-gray-800 dark:text-white mt-1">Role Tiers</div>
                <div className="text-[11px] text-gray-500 mt-1">Granular access clearance levels Level 1–5.</div>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-white/[0.02]">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 font-mono">12</div>
                <div class="text-xs font-semibold text-gray-800 dark:text-white mt-1">Surveillance Cameras</div>
                <div className="text-[11px] text-gray-500 mt-1">Real-time CCTV posture & fall detection.</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Architecture & Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-white/[0.02] space-y-2">
                <h3 className="font-bold text-gray-900 dark:text-white">Frontend Core</h3>
                <ul class="space-y-1 text-xs">
                  <li>• React 18 & Vite 8 SPA Architecture</li>
                  <li>• React Router v7 with ProtectedRoutes</li>
                  <li>• Tailwind CSS v4 styling system</li>
                  <li>• Recharts & Lucide Icon set</li>
                </ul>
              </div>
              <div className="p-4 rounded-xl border border-gray-100 bg-gray-50 dark:border-gray-800 dark:bg-white/[0.02] space-y-2">
                <h3 className="font-bold text-gray-900 dark:text-white">Security & AI Engine</h3>
                <ul class="space-y-1 text-xs">
                  <li>• AuthContext 22-Role Permission Guard</li>
                  <li>• Clinical Patient Scope Protection</li>
                  <li>• Google Gemini 2.5 Flash Integration</li>
                  <li>• Mock Engine Fallback for Offline Execution</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'rbac' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">22-Role RBAC Clearance Matrix</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400">Strict clearance levels enforced across all hospital data endpoints.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold border-b border-gray-200 dark:border-gray-700">
                  <tr>
                    <th className="p-2.5">Role</th>
                    <th className="p-2.5">Clearance</th>
                    <th className="p-2.5">Scope</th>
                    <th className="p-2.5">Accessible Modules</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  <tr>
                    <td className="p-2.5 font-bold">Super Administrator</td>
                    <td className="p-2.5 text-red-600 font-bold">Level 5</td>
                    <td className="p-2.5 font-mono">HOSPITAL_ALL</td>
                    <td className="p-2.5">Unrestricted Command</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">HR Administrator</td>
                    <td className="p-2.5 text-purple-600 font-bold">Level 4</td>
                    <td className="p-2.5 font-mono">WORKFORCE_OPS</td>
                    <td className="p-2.5">Staff, Attendance, Leave, Rosters</td>
                  </tr>
                  <tr>
                    <td className="p-2.5 font-bold">Doctor / Consultant</td>
                    <td className="p-2.5 text-blue-600 font-bold">Level 3</td>
                    <td className="p-2.5 font-mono">AUTHORIZED_PATIENTS</td>
                    <td className="p-2.5">Clinical Patients, Shifts, Self-Service</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'ai' && (
          <div className="space-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">AI CCTV & Gemini Engine</h2>
            <p>
              Integrated vision camera sensors monitor posture, fall events, restricted zone intrusions, and employee break duration limits.
            </p>
          </div>
        )}

        {activeTab === 'credentials' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Quick Demo Credentials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl space-y-1">
                <div className="font-bold">Super Admin</div>
                <div className="font-mono text-brand-600">User: admin | Pass: admin123</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl space-y-1">
                <div className="font-bold">Doctor</div>
                <div className="font-mono text-brand-600">User: doctor | Pass: doc123</div>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl space-y-1">
                <div className="font-bold">Nurse</div>
                <div className="font-mono text-brand-600">User: nurse | Pass: nurse123</div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'deployment' && (
          <div className="space-y-3 font-mono text-xs bg-gray-900 text-gray-100 p-4 rounded-xl">
            <div className="text-gray-400">// Development Command</div>
            <div className="text-emerald-400">npm run dev</div>
            <div className="text-gray-400 pt-2">// Production Build</div>
            <div className="text-emerald-400">npm run build</div>
          </div>
        )}

      </div>
    </div>
  );
}
