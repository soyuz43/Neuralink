import { useState, useEffect } from 'react';
import TabNavigation from './components/TabNavigation';
import OverviewTab from './components/OverviewTab';
import TrialsTab from './components/TrialsTab';
import PatientsTab from './components/PatientsTab';
import ControversiesTab from './components/ControversiesTab';
import CircumstantialTab from './components/CircumstantialTab';
import AustinFacilityTab from './components/AustinFacilityTab';
import TechnologyTab from './components/TechnologyTab';
import SourcesTab from './components/SourcesTab';

export default function App() {
  const [activeTab, setActiveTab] = useState(() => {
    // Read hash on initial load
    const hash = window.location.hash.slice(1); // Remove #
    const validTabs = ['overview', 'clinical-trials', 'patients', 'controversies', 'circumstantial', 'austin-facility', 'technology', 'sources'];
    return validTabs.includes(hash) ? hash : 'overview';
  });
  
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    // Fall back to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  // Update hash when tab changes
  useEffect(() => {
    window.location.hash = activeTab;
  }, [activeTab]);

  // Listen for hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      const validTabs = ['overview', 'clinical-trials', 'patients', 'controversies', 'circumstantial', 'austin-facility', 'technology', 'sources'];
      if (validTabs.includes(hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab onTabChange={setActiveTab} />;
      case 'clinical-trials':
        return <TrialsTab />;
      case 'patients':
        return <PatientsTab />;
      case 'controversies':
        return <ControversiesTab />;
      case 'circumstantial':
        return <CircumstantialTab />;
      case 'austin-facility':
        return <AustinFacilityTab />;
      case 'technology':
        return <TechnologyTab />;
      case 'sources':
        return <SourcesTab />;
      default:
        return <OverviewTab onTabChange={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-desk">
      {/* Header */}
      <header className="bg-paper border-b-[1.5px] border-[var(--color-ink)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.1em] mb-2">
                Investigative Dossier // 2026
              </div>
              <h1 className="text-[2rem] sm:text-[2.5rem] leading-[1.1] tracking-tight">
                Neuralink<br />Clinical Trials
              </h1>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.1em]">
                  Document Status
                </div>
                <div className="status-badge status-badge--warning mt-2">
                  Active Investigation
                </div>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="theme-toggle"
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                aria-pressed={darkMode}
                title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {darkMode ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 scroll-mt-20">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="border-t-[1.5px] border-[var(--color-ink)] mt-16 py-8 px-4 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-mono text-xs uppercase tracking-[0.1em] text-[var(--color-ink-muted)] mb-2">
                Classification
              </div>
              <p className="text-sm text-[var(--color-ink-light)]">
                Independent documentation project. Not affiliated with Neuralink Corp., 
                the FDA, or any regulatory body.
              </p>
            </div>
            <div>
              <div className="text-mono text-xs uppercase tracking-[0.1em] text-[var(--color-ink-muted)] mb-2">
                Disclaimer
              </div>
              <p className="text-sm text-[var(--color-ink-light)]">
                Neuralink devices are investigational and have NOT been approved by the FDA 
                or other regulatory authorities. Information compiled from public sources.
              </p>
            </div>
          </div>
          <div className="divider" />
          <div className="text-mono text-xs text-[var(--color-ink-muted)] text-center">
            Last Updated: 2026 // All Sources Publicly Available
          </div>
        </div>
      </footer>
    </div>
  );
}
