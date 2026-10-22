import { useState, useEffect, useRef } from 'react';
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
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [visibleTabs, setVisibleTabs] = useState<Tab[]>(tabs);
  const [overflowTabs, setOverflowTabs] = useState<Tab[]>([]);
  const navContainerRef = useRef<HTMLDivElement>(null);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  // Calculate which tabs fit and which overflow
  useEffect(() => {
    const calculateVisibleTabs = () => {
      if (!tabsContainerRef.current || !navContainerRef.current) return;
      
      const containerWidth = navContainerRef.current.offsetWidth;
      const moreButtonWidth = 60; // Approximate width of "More" button
      const availableWidth = containerWidth - moreButtonWidth;
      
      let totalWidth = 0;
      const visible: Tab[] = [];
      const overflow: Tab[] = [];
      
      for (const tab of tabs) {
        // Estimate tab width (icon + text + padding)
        const tabWidth = tab.label.length * 9 + 60; // Rough estimate
        
        if (totalWidth + tabWidth <= availableWidth) {
          visible.push(tab);
          totalWidth += tabWidth;
        } else {
          overflow.push(tab);
        }
      }
      
      // If all tabs fit, show them all and no overflow
      if (overflow.length === 0) {
        setVisibleTabs(tabs);
        setOverflowTabs([]);
      } else {
        setVisibleTabs(visible);
        setOverflowTabs(overflow);
      }
    };

    calculateVisibleTabs();
    window.addEventListener('resize', calculateVisibleTabs);
    return () => window.removeEventListener('resize', calculateVisibleTabs);
  }, []);

  // Close mobile menu when tab changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
  }, [activeTab]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
        if (moreMenuOpen) {
          setMoreMenuOpen(false);
        }
      }
    };

    if (mobileMenuOpen || moreMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen, moreMenuOpen]);

  // Close more menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (moreMenuOpen && navContainerRef.current && !navContainerRef.current.contains(e.target as Node)) {
        setMoreMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [moreMenuOpen]);

  const handleTabClick = (tabId: string) => {
    onTabChange(tabId);
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
  };

  return (
    <nav className="bg-paper border-b-[1.5px] border-[var(--color-ink)] sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={navContainerRef}>
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="desktop-nav flex items-center gap-0 flex-1" ref={tabsContainerRef}>
            {visibleTabs.map((tab) => {
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
            
            {/* More Menu Button */}
            {overflowTabs.length > 0 && (
              <div className="relative">
                <button
                  onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                  className={`nav-tab ${moreMenuOpen ? 'nav-tab--active' : ''}`}
                  aria-expanded={moreMenuOpen}
                  aria-haspopup="true"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter">
                    <circle cx="12" cy="5" r="1" fill="currentColor" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                    <circle cx="12" cy="19" r="1" fill="currentColor" />
                  </svg>
                  <span>More</span>
                </button>
                
                {/* More Menu Dropdown */}
                {moreMenuOpen && (
                  <div className="more-menu-dropdown">
                    <ul className="more-menu__list">
                      {overflowTabs.map((tab) => {
                        const IconComponent = tab.icon;
                        const isActive = activeTab === tab.id;
                        const isCircumstantial = tab.id === 'circumstantial';
                        
                        return (
                          <li key={tab.id} className="more-menu__item">
                            <button
                              onClick={() => handleTabClick(tab.id)}
                              className={`more-menu__link ${isActive ? 'more-menu__link--active' : ''} ${isCircumstantial && isActive ? 'text-[var(--color-accent-red)]' : ''}`}
                              aria-current={isActive ? 'page' : undefined}
                            >
                              <IconComponent size={18} />
                              <span>{tab.label}</span>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            )}
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
