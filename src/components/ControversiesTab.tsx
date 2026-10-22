import Card from './Card';
import SourceLink from './SourceLink';
import { Icons } from './Icons';

export default function ControversiesTab() {
  return (
    <div className="space-y-6">
      {/* Patient 4 Case Study */}
      <Card title="Patient 4: Mike Melgarejo" icon={<Icons.Circumstantial size={24} />} variant="error">
        <div className="disclaimer-box mb-4">
          <div className="disclaimer-box__title">Key Case</div>
          <div className="disclaimer-box__text">
            This case study is based on publicly available information including the GoFundMe campaign, 
            Neuralink's promotional materials, and investigative reporting by The Drey Dossier.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-verified-bg)]">
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-verified)] mb-2">
              Neuralink's Narrative (June 2025)
            </h4>
            <p className="text-sm text-[var(--color-ink-light)]">
              In Neuralink's Summer 2025 funding update video, Mike appears talking enthusiastically 
              about how the implant enabled him to work full-time to support his family.
            </p>
          </div>
          <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-unverified-bg)]">
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-accent-red)] mb-2">
              GoFundMe Reality (June 2025)
            </h4>
            <p className="text-sm text-[var(--color-ink-light)]">
              In the <strong className="text-[var(--color-ink)]">same month</strong>, a <a href="https://www.gofundme.com/f/those-things-we-do-so-others-may-live" target="_blank" rel="noopener noreferrer" className="source-link">GoFundMe</a> stated Mike was "not in a good place—mentally, 
              financially, physically, or emotionally" and "He's ready to give up on life, people."
            </p>
          </div>
        </div>

        <div className="dossier-card dossier-card--compact dossier-card--no-hover mb-4">
          <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
            <a href="https://www.gofundme.com/f/those-things-we-do-so-others-may-live" target="_blank" rel="noopener noreferrer" className="source-link">GoFundMe Details</a>
          </h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div className="metadata-row">
              <span className="metadata-row__label">Campaign</span>
              <span className="metadata-row__value">
                <a href="https://www.gofundme.com/f/those-things-we-do-so-others-may-live" target="_blank" rel="noopener noreferrer" className="source-link">"Those things we do, so others may live"</a>
              </span>
            </div>
            <div className="metadata-row">
              <span className="metadata-row__label">Created</span>
              <span className="metadata-row__value">June 23, 2025</span>
            </div>
            <div className="metadata-row">
              <span className="metadata-row__label">Organizer</span>
              <span className="metadata-row__value">Ryan Biggs (gaming friend)</span>
            </div>
            <div className="metadata-row">
              <span className="metadata-row__label">Raised</span>
              <span className="metadata-row__value">Over $21,000</span>
            </div>
            <div className="metadata-row md:col-span-2">
              <span className="metadata-row__label">Notable Donor</span>
              <span className="metadata-row__value text-[var(--color-accent-red)] font-bold">
                $3,000 from <a href="https://en.wikipedia.org/wiki/Shivon_Zilis" target="_blank" rel="noopener noreferrer" className="source-link">Shivon Zilis</a>
              </span>
              <span className="text-[var(--color-ink-muted)] ml-2">— Neuralink's Director of Operations and Special Projects, mother of four of Elon Musk's children</span>
            </div>
          </div>
        </div>

        <div className="dossier-card dossier-card--compact dossier-card--no-hover mb-4">
          <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
            Direct Quotes from GoFundMe (verified)
          </h4>
          <blockquote className="border-l-3 border-[var(--color-accent-red)] pl-4 italic text-[var(--color-ink-light)] my-3">
            "He's ready to give up on life, people. Not an understatement. Everything has been taken 
            from him. He's not in a good place mentally, financially, physically, or emotionally."
          </blockquote>
          <blockquote className="border-l-3 border-[var(--color-accent-red)] pl-4 italic text-[var(--color-ink-light)]">
            "I hate to ask this, but I'm stuck in an embarrassing and tight spot. Can I borrow some 
            cash? Rent's coming up and we're short. I'm so sorry for asking."
          </blockquote>
        </div>

        <div>
          <h4 className="text-mono text-sm uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
            Ethical Concerns
          </h4>
          <div className="space-y-3">
            <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-unverified-bg)]">
              <div className="text-mono text-xs font-bold text-[var(--color-accent-red)] uppercase tracking-[0.05em] mb-1">
                01 // Conflict of Interest
              </div>
              <div className="text-xs text-[var(--color-ink-light)]">
                It is highly unusual for a senior executive to make a large personal donation to a 
                patient's crisis fundraiser. This blurs the line between corporate responsibility and 
                personal charity.
              </div>
            </div>
            <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-mixed-bg)]">
              <div className="text-mono text-xs font-bold text-[var(--color-mixed)] uppercase tracking-[0.05em] mb-1">
                02 // Adverse Event Reporting
              </div>
              <div className="text-xs text-[var(--color-ink-light)]">
                If a patient experiences severe mental health crises after experimental brain surgery, 
                this qualifies as a Serious Adverse Event (SAE). The FDA requires reporting under 
                21 CFR 312.32. If not reported, it would be a major violation.
              </div>
            </div>
            <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-warning-bg)]">
              <div className="text-mono text-xs font-bold text-[var(--color-warning)] uppercase tracking-[0.05em] mb-1">
                03 // Financial Exploitation
              </div>
              <div className="text-xs text-[var(--color-ink-light)]">
                Trial participants generate invaluable data that boosts company valuation. If a patient 
                struggles to pay rent while their data secures hundreds of millions in funding, it 
                highlights a stark ethical imbalance.
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Animal Testing */}
      <Card title="Animal Testing: UC Davis Monkey Experiments" icon={<Icons.Warning size={24} />} variant="error">
        <p className="mb-4">
          Between <strong className="text-[var(--color-ink)]">2017 and 2020</strong>, Neuralink conducted invasive, 
          often deadly experiments on rhesus macaque monkeys at the University of California, Davis.
        </p>

        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-unverified-bg)] mb-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-[2rem] font-bold text-[var(--color-accent-red)]">23</div>
              <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em]">Monkeys used</div>
            </div>
            <div className="text-center">
              <div className="text-[2rem] font-bold text-[var(--color-accent-red)]">15</div>
              <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em]">Monkeys died (65%)</div>
            </div>
          </div>
        </div>

        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-unverified-bg)] mb-4">
          <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-accent-red)] mb-2">
            Documented Complications
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-ink-light)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">Bloody diarrhea</strong> — documented in multiple animals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">Partial paralysis</strong> — animals lost motor function</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">Cerebral edema</strong> — "brain swelling," life-threatening</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">Seizures</strong> — documented in multiple animals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">Infections</strong> — fungal and bacterial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">Self-mutilation</strong> — scratching at surgical sites until bleeding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">Device failures</strong> — internal parts breaking off during implantation</span>
            </li>
          </ul>
        </div>

        <div className="dossier-card dossier-card--compact dossier-card--no-hover">
          <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
            Federal Investigations
          </h4>
          <ul className="space-y-2 text-sm text-[var(--color-ink-light)]">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">USDA Investigation (2022):</strong> Probe into Animal Welfare Act violations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">FDA Lab Inspection (June 2023):</strong> Quality control issues found, missing calibration records</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent-red)]">•</span>
              <span><strong className="text-[var(--color-ink)]">Internal Employee Backlash:</strong> Employees raised concerns about animal suffering</span>
            </li>
          </ul>
        </div>
      </Card>

      {/* FDA Timeline */}
      <Card title="FDA Regulatory Timeline" icon={<Icons.Document size={24} />}>
        <div className="space-y-4">
          <div className="timeline-item timeline-item--red">
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em] mb-1">
              Early 2022
            </div>
            <div className="text-mono text-sm font-bold text-[var(--color-ink)] uppercase tracking-[0.02em] mb-1">
              FDA REJECTS Application
            </div>
            <div className="text-sm text-[var(--color-ink-light)]">
              Citing "dozens of deficiencies" including lithium battery safety, wire migration issues, 
              and insufficient animal testing data.
            </div>
          </div>
          <div className="timeline-item timeline-item--red">
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em] mb-1">
              December 2022
            </div>
            <div className="text-mono text-sm font-bold text-[var(--color-ink)] uppercase tracking-[0.02em] mb-1">
              Federal Investigation Revealed
            </div>
            <div className="text-sm text-[var(--color-ink-light)]">
              Reuters and The Guardian report Neuralink under federal investigation for Animal Welfare 
              Act violations.
            </div>
          </div>
          <div className="timeline-item">
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em] mb-1">
              May 2023
            </div>
            <div className="text-mono text-sm font-bold text-[var(--color-ink)] uppercase tracking-[0.02em] mb-1">
              FDA Clears Human Trials
            </div>
            <div className="text-sm text-[var(--color-ink-light)]">
              After addressing concerns, FDA grants clearance under Investigational Device Exemption (IDE). 
              This is NOT approval—just permission to test.
            </div>
          </div>
          <div className="timeline-item timeline-item--red">
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em] mb-1">
              2025
            </div>
            <div className="text-mono text-sm font-bold text-[var(--color-ink)] uppercase tracking-[0.02em] mb-1">
              UAE-PRIME Launches
            </div>
            <div className="text-sm text-[var(--color-ink-light)]">
              First international trial at Cleveland Clinic Abu Dhabi. Operates under UAE regulatory 
              authority, not FDA.
            </div>
          </div>
          <div className="timeline-item">
            <div className="text-mono text-xs text-[var(--color-ink-muted)] uppercase tracking-[0.05em] mb-1">
              2026
            </div>
            <div className="text-mono text-sm font-bold text-[var(--color-ink)] uppercase tracking-[0.02em] mb-1">
              Current Status
            </div>
            <div className="text-sm text-[var(--color-ink-light)]">
              27+ patients implanted. Devices remain investigational and NOT FDA-approved.
            </div>
          </div>
        </div>
      </Card>

      {/* Ethical Concerns */}
      <Card title="Additional Ethical Concerns" icon={<Icons.Warning size={24} />}>
        <div className="space-y-4">
          <div>
            <h4 className="text-mono text-sm uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              Informed Consent
            </h4>
            <ul className="space-y-2 text-sm text-[var(--color-ink-light)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-red)]">•</span>
                <span>Patients with severe conditions may be desperate enough to accept risks they wouldn't otherwise consider</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-red)]">•</span>
                <span>The "false hope" problem—Neuralink's messaging may overstate benefits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-red)]">•</span>
                <span>Patient 4's GoFundMe raises questions about whether participants understand the full burden</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-mono text-sm uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              Lack of Ethics Oversight
            </h4>
            <blockquote className="border-l-3 border-[var(--color-accent-red)] pl-4 italic text-[var(--color-ink-light)] my-3">
              "It doesn't have, as far as we know, an internal ethics board or a code of ethics. 
              We don't know what goes on behind the closed doors."
              <footer className="text-xs text-[var(--color-ink-muted)] mt-2 not-italic">
                — Dr. Paul Wolpe, neuroethicist
              </footer>
            </blockquote>
          </div>

          <div>
            <h4 className="text-mono text-sm uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              Neural Data Privacy
            </h4>
            <ul className="space-y-2 text-sm text-[var(--color-ink-light)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)]">•</span>
                <span>Every time a patient thinks about moving a cursor, their brain activity is recorded, transmitted, and stored</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)]">•</span>
                <span>HIPAA was passed in 1996, decades before BCIs existed. Current laws don't protect neural data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)]">•</span>
                <span>The company recording thoughts is owned by the same person who owns X, xAI, and Tesla</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
