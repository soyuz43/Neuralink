import { useState } from 'react';
import TabNavigation from './components/TabNavigation';
import OverviewTab from './components/OverviewTab';
import TrialsTab from './components/TrialsTab';
import PatientsTab from './components/PatientsTab';
import ControversiesTab from './components/ControversiesTab';
import CircumstantialTab from './components/CircumstantialTab';
import TechnologyTab from './components/TechnologyTab';
import SourcesTab from './components/SourcesTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return <OverviewTab />;
      case 'trials':
        return <TrialsTab />;
      case 'patients':
        return <PatientsTab />;
      case 'controversies':
        return <ControversiesTab />;
      case 'circumstantial':
        return <CircumstantialTab />;
      case 'technology':
        return <TechnologyTab />;
      case 'sources':
        return <SourcesTab />;
      default:
        return <OverviewTab />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                N
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Neuralink Documentation</h1>
                <p className="text-xs text-gray-500">Clinical Trials & Investigations</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">Last updated: 2026</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tab Navigation */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-2">
            This is an independent documentation project. Not affiliated with Neuralink Corp.
          </p>
          <p className="text-xs text-gray-600">
            Information compiled from public sources, news reports, clinical trial registries, and investigative journalism.
          </p>
          <div className="mt-4 p-4 bg-amber-900/10 border border-amber-800/20 rounded-lg max-w-2xl mx-auto">
            <p className="text-xs text-amber-400">
              ⚠️ <strong>Disclaimer:</strong> Neuralink devices are investigational and have NOT been approved by the FDA or other regulatory authorities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
