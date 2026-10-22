import { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  icon: string;
}

const tabs: Tab[] = [
  { id: 'overview', label: 'Overview', icon: '📋' },
  { id: 'trials', label: 'Clinical Trials', icon: '🧪' },
  { id: 'patients', label: 'Patients', icon: '👥' },
  { id: 'controversies', label: 'Controversies', icon: '⚠️' },
  { id: 'circumstantial', label: 'Circumstantial', icon: '🔍' },
  { id: 'technology', label: 'Technology', icon: '🔬' },
  { id: 'sources', label: 'Sources', icon: '📚' },
];

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id
                  ? tab.id === 'circumstantial'
                    ? 'text-amber-400 border-amber-400'
                    : 'text-blue-400 border-blue-400'
                  : 'text-gray-400 border-transparent hover:text-gray-200 hover:border-gray-600'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
