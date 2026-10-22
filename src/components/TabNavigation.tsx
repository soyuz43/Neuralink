import { Icons } from './Icons';

interface Tab {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
}

const tabs: Tab[] = [
  { id: 'overview', label: 'Overview', icon: Icons.Overview },
  { id: 'trials', label: 'Clinical Trials', icon: Icons.Trials },
  { id: 'patients', label: 'Patients', icon: Icons.Patients },
  { id: 'controversies', label: 'Controversies', icon: Icons.Warning },
  { id: 'circumstantial', label: 'Circumstantial', icon: Icons.Circumstantial },
  { id: 'technology', label: 'Technology', icon: Icons.Technology },
  { id: 'sources', label: 'Sources', icon: Icons.Sources },
];

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <nav className="bg-paper border-b-[1.5px] border-[var(--color-ink)] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-0 overflow-x-auto">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            const isCircumstantial = tab.id === 'circumstantial';
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`nav-tab ${isActive ? 'nav-tab--active' : ''} ${isCircumstantial && isActive ? 'nav-tab--circumstantial' : ''}`}
              >
                <IconComponent size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
