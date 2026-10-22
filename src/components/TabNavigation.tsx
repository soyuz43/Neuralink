import { useState, useEffect } from 'react';
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
  { id: 'austin-facility', label: 'Austin Facility', icon: Icons.Location },
  { id: 'technology', label: 'Technology', icon: Icons.Technology },
  { id: 'sources', label: 'Sources', icon: Icons.Sources },
];

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu when tab changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeTab]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-paper border-b-[1.5px] border-[var(--color-ink)] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="desktop-nav flex items-center gap-0 overflow-x-auto flex-1">
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

          {/* Mobile Hamburger Button */}
          <button
            className="hamburger-btn lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`mobile-menu lg:hidden ${mobileMenuOpen ? 'mobile-menu--open' : ''}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <ul className="mobile-menu__list">
          {tabs.map((tab) => {
            const IconComponent = tab.icon;
            const isActive = activeTab === tab.id;
            const isCircumstantial = tab.id === 'circumstantial';
            
            return (
              <li key={tab.id} className="mobile-menu__item">
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''} ${isCircumstantial && isActive ? 'text-[var(--color-accent-red)]' : ''}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <IconComponent size={20} />
                  <span>{tab.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
