import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import TrialSites from './components/TrialSites';
import UAEPrime from './components/UAEPrime';
import VoiceTrial from './components/VoiceTrial';
import SpeechCortex from './components/SpeechCortex';
import KnownPatients from './components/KnownPatients';
import PatientFour from './components/PatientFour';
import FDATimeline from './components/FDATimeline';
import EthicalConcerns from './components/EthicalConcerns';
import Technology from './components/Technology';
import Sources from './components/Sources';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 flex flex-col">
      {/* Mobile header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800 px-4 py-3 flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-gray-300 hover:text-white p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="font-bold text-lg bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Neuralink Docs
        </span>
      </header>

      <div className="flex flex-1 pt-14 lg:pt-0">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main content */}
        <main className="flex-1 lg:ml-72 overflow-x-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
            <Hero />
            <Overview />
            <TrialSites />
            <UAEPrime />
            <VoiceTrial />
            <SpeechCortex />
            <KnownPatients />
            <PatientFour />
            <FDATimeline />
            <EthicalConcerns />
            <Technology />
            <Sources />
          </div>

          {/* Footer */}
          <footer className="border-t border-gray-800 mt-16 py-8 px-4 text-center text-gray-500 text-sm">
            <p>This is an independent documentation project. Not affiliated with Neuralink Corp.</p>
            <p className="mt-2">Information compiled from public sources, news reports, clinical trial registries, and investigative journalism.</p>
            <p className="mt-2">Last updated: 2026</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
