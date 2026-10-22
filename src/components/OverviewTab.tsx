import Card from './Card';
import { Icons } from './Icons';

interface OverviewTabProps {
  onTabChange: (tabId: string) => void;
}

export default function OverviewTab({ onTabChange }: OverviewTabProps) {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="dossier-card dossier-card--white">
        <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.1em] mb-4">
          Executive Summary
        </div>
        <h2 className="text-[1.75rem] mb-4">
          Brain-Computer Interface<br />Clinical Investigation
        </h2>
        <p className="text-[var(--color-ink-light)] mb-6 max-w-3xl">
          Comprehensive documentation of Neuralink's clinical trials, regulatory history, 
          patient outcomes, and circumstantial evidence requiring scrutiny. All information 
          sourced from publicly available records.
        </p>
        
        {/* Stats Grid */}
        <div className="grid stat-strip gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))'}}>
          <button 
            onClick={() => onTabChange('patients')}
            className="interactive-card text-left"
          >
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.1em] mb-1">
              Patients
            </div>
            <div className="text-[2rem] font-bold text-[var(--color-ink)]">27+</div>
          </button>
          <button 
            onClick={() => onTabChange('clinical-trials')}
            className="interactive-card text-left"
          >
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.1em] mb-1">
              Trial Sites
            </div>
            <div className="text-[2rem] font-bold text-[var(--color-ink)]">7</div>
          </button>
          <button 
            onClick={() => onTabChange('clinical-trials')}
            className="interactive-card text-left"
          >
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.1em] mb-1">
              Countries
            </div>
            <div className="text-[2rem] font-bold text-[var(--color-ink)]">4</div>
          </button>
          <button 
            onClick={() => onTabChange('controversies')}
            className="interactive-card text-left bg-[var(--color-unverified-bg)]"
          >
            <div className="text-mono text-xs text-[var(--color-accent-red)] uppercase tracking-[0.1em] mb-1">
              FDA Status
            </div>
            <div className="text-[2rem] font-bold text-[var(--color-accent-red)]">0</div>
          </button>
        </div>
      </div>

      {/* Quick Navigation */}
      <Card title="Quick Navigation" icon={<Icons.Overview size={24} />}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button 
            onClick={() => onTabChange('clinical-trials')}
            className="interactive-card"
          >
            <Icons.Trials size={24} className="mb-2" />
            <div className="interactive-card__title">Clinical Trials</div>
            <div className="interactive-card__subtitle">Interactive site map with detailed documentation</div>
          </button>
          <button 
            onClick={() => onTabChange('patients')}
            className="interactive-card"
          >
            <Icons.Patients size={24} className="mb-2" />
            <div className="interactive-card__title">Patient Registry</div>
            <div className="interactive-card__subtitle">All known patients and their outcomes</div>
          </button>
          <button 
            onClick={() => onTabChange('controversies')}
            className="interactive-card"
          >
            <Icons.Warning size={24} className="mb-2" />
            <div className="interactive-card__title">Controversies</div>
            <div className="interactive-card__subtitle">Ethical concerns and investigations</div>
          </button>
          <button 
            onClick={() => onTabChange('circumstantial')}
            className="interactive-card"
          >
            <Icons.Circumstantial size={24} className="mb-2 text-[var(--color-accent-red)]" />
            <div className="interactive-card__title text-[var(--color-accent-red)]">Circumstantial</div>
            <div className="interactive-card__subtitle">ICE detention connections (no direct evidence)</div>
          </button>
        </div>
      </Card>

      {/* Key Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="What is Neuralink?" icon={<Icons.Brain size={24} />}>
          <p className="mb-3">
            Neuralink is developing implantable brain-computer interfaces (BCIs) to restore 
            autonomy to those with unmet medical needs. The company has conducted trials in 
            the US, UK, Canada, and UAE.
          </p>
          <p className="text-sm text-[var(--color-ink-muted)]">
            Founded in 2016, Neuralink aims to create a generalized brain interface for 
            medical and cognitive enhancement purposes.
          </p>
        </Card>

        <Card title="Current Status" icon={<Icons.Warning size={24} />} variant="warning">
          <p className="mb-3">
            As of 2026, Neuralink has implanted 27+ patients across 7 clinical trial sites 
            in 4 countries. The devices remain <strong className="text-[var(--color-accent-red)]">investigational</strong> and 
            have NOT been approved by the FDA.
          </p>
          <p className="text-sm text-[var(--color-ink-muted)]">
            The FDA initially rejected Neuralink's application in 2022, citing "dozens of 
            deficiencies." Approval was granted in 2023 under an Investigational Device Exemption.
          </p>
        </Card>
      </div>
    </div>
  );
}
