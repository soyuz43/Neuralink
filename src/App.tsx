import { useState } from 'react';
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
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab onTabChange={setActiveTab} />;
      case 'trials':
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
            <div className="text-right hidden sm:block">
              <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.1em]">
                Document Status
              </div>
              <div className="status-badge status-badge--warning mt-2">
                Active Investigation
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
