import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import SourceLink from './SourceLink';
import { Icons } from './Icons';
import { trialSites, TrialSite } from '../data/trialSites';

export default function TrialsTab() {
  const [selectedSite, setSelectedSite] = useState<TrialSite | null>(null);

  return (
    <div className="space-y-6">
      {/* Trial Sites Map */}
      <Card title="Global Trial Locations" icon={<Icons.Location size={24} />}>
        <p className="mb-4">
          Neuralink's clinical trials are being conducted at 7 sites across 4 countries. 
          Click on any site to view detailed information, trial specifics, and source documentation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="space-y-3">
            <div className="text-mono text-xs uppercase tracking-[0.1em] text-[var(--color-ink-muted)] mb-2">
              United States (3 sites)
            </div>
            <div className="space-y-2">
              {trialSites.filter(s => s.country === 'USA').map((site) => (
                <button
                  key={site.id}
                  onClick={() => setSelectedSite(site)}
                  className="interactive-card w-full"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="interactive-card__title">{site.city}, {site.state}</div>
                      <div className="interactive-card__subtitle">{site.facility}</div>
                      <div className="text-mono text-xs text-[var(--color-accent-blue)] mt-1">
                        {site.trials.join(', ')} // First implant: {site.firstImplant}
                      </div>
                      <div className="text-xs text-[var(--color-ink-muted)] mt-1">{site.description}</div>
                    </div>
                    <Icons.ArrowRight className="flex-shrink-0 text-[var(--color-ink-muted)]" />
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-mono text-xs uppercase tracking-[0.1em] text-[var(--color-ink-muted)] mb-2">
                United Kingdom (2 sites)
              </div>
              <div className="space-y-2">
                {trialSites.filter(s => s.country === 'United Kingdom').map((site) => (
                  <button
                    key={site.id}
                    onClick={() => setSelectedSite(site)}
                    className="interactive-card w-full"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="interactive-card__title">{site.city}</div>
                        <div className="interactive-card__subtitle">{site.facility}</div>
                        <div className="text-mono text-xs text-[var(--color-accent-blue)] mt-1">
                          {site.trials.join(', ')} // First implant: {site.firstImplant}
                        </div>
                      </div>
                      <Icons.ArrowRight className="flex-shrink-0 text-[var(--color-ink-muted)]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-mono text-xs uppercase tracking-[0.1em] text-[var(--color-ink-muted)] mb-2">
                Canada (1 site)
              </div>
              <div className="space-y-2">
                {trialSites.filter(s => s.country === 'Canada').map((site) => (
                  <button
                    key={site.id}
                    onClick={() => setSelectedSite(site)}
                    className="interactive-card w-full"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="interactive-card__title">{site.city}, {site.state}</div>
                        <div className="interactive-card__subtitle">{site.facility}</div>
                        <div className="text-mono text-xs text-[var(--color-accent-blue)] mt-1">
                          {site.trials.join(', ')} // First implant: {site.firstImplant}
                        </div>
                      </div>
                      <Icons.ArrowRight className="flex-shrink-0 text-[var(--color-ink-muted)]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="text-mono text-xs uppercase tracking-[0.1em] text-[var(--color-accent-red)] mb-2">
                United Arab Emirates (1 site)
              </div>
              <div className="space-y-2">
                {trialSites.filter(s => s.country === 'UAE').map((site) => (
                  <button
                    key={site.id}
                    onClick={() => setSelectedSite(site)}
                    className="interactive-card w-full bg-[var(--color-unverified-bg)]"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="interactive-card__title text-[var(--color-accent-red)]">{site.city}</div>
                        <div className="interactive-card__subtitle">{site.facility}</div>
                        <div className="text-mono text-xs text-[var(--color-accent-red)] mt-1">
                          {site.trials.join(', ')} // Regulatory concerns
                        </div>
                      </div>
                      <Icons.ArrowRight className="flex-shrink-0 text-[var(--color-accent-red)]" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* UAE-PRIME Details */}
      <Card title="UAE-PRIME: Abu Dhabi Trial" icon={<Icons.Warning size={24} />} variant="warning">
        <p className="mb-4">
          UAE-PRIME represents Neuralink's first clinical trial outside the United States, 
          launched in partnership with Cleveland Clinic Abu Dhabi and the Department of Health 
          Abu Dhabi.
        </p>

        <div className="disclaimer-box mb-4">
          <div className="disclaimer-box__title">Key Controversy</div>
          <div className="disclaimer-box__text">
            Questions have been raised about whether this expansion was motivated by the desire 
            to conduct speech trials in a jurisdiction with different regulatory requirements 
            than the FDA. The UAE trial operates under UAE regulatory authority, not FDA oversight.
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-mono text-sm uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              Why the UAE?
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-red)] font-bold text-mono">01</span>
                <span><strong className="text-[var(--color-ink)]">Different Regulatory Framework:</strong> UAE's regulatory environment may have different requirements and timelines than the FDA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-red)] font-bold text-mono">02</span>
                <span><strong className="text-[var(--color-ink)]">Speech Trial Expansion:</strong> UAE-PRIME includes speech impairment patients—the same population targeted by the VOICE trial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-red)] font-bold text-mono">03</span>
                <span><strong className="text-[var(--color-ink)]">Strategic Partnership:</strong> Department of Health Abu Dhabi's direct involvement suggests government-level facilitation</span>
              </li>
            </ul>
          </div>

          <div className="divider" />

          <div>
            <h4 className="text-mono text-sm uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
              UAE Regulatory Authority
            </h4>
            <p className="text-sm text-[var(--color-ink-light)] mb-3">
              Neuralink's UAE-PRIME trial operates under the authority of the <strong className="text-[var(--color-ink)]">Department of Health - Abu Dhabi (DOH)</strong>, 
              the regulatory authority for research involving human participants in the Emirate of Abu Dhabi. At the federal level, 
              the <strong className="text-[var(--color-ink)]">Emirates Drug Establishment (EDE)</strong> regulates medical devices and pharmaceutical products.
            </p>
            
            <div className="dossier-card dossier-card--compact dossier-card--no-hover mb-3">
              <h5 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-accent-blue)] mb-2">
                Key Regulatory Documents
              </h5>
              <div className="space-y-2">
                <SourceLink 
                  url="https://www.doh.gov.ae/-/media/40B18D052C3E40B2A079ABD7571E2260.ashx"
                  title="DOH Guidelines for Conducting Clinical Trials with Investigational Products and Medical Devices"
                />
                <SourceLink 
                  url="https://ede.gov.ae/documents/61005/62137/Assessment+of+Medical+Products+for+Pharmacological+Research+and+Clinical+Studies+of+Drugs+-+Guidelines+for+Conducting+Clinical+Trials+with+Investigational+Products+and+Medical+Devices+2017/d2cd7244-088e-fc20-32fd-c1d3a1d3639f"
                  title="EDE Guidelines for Clinical Trials with Medical Devices (Federal)"
                />
                <SourceLink 
                  url="https://www.aahrpp.org/docs/default-source/international-addenda/addendum-to-evaluation-instrument---uae.pdf"
                  title="UAE Abu Dhabi Addendum - AAHRPP (Research Ethics Standards)"
                />
              </div>
            </div>

            <div className="text-xs text-[var(--color-ink-muted)]">
              <strong className="text-[var(--color-ink)] text-mono uppercase tracking-[0.05em]">What applies to Neuralink:</strong>
              <ul className="mt-2 space-y-1 ml-4">
                <li>• DOH approval required for all clinical trials involving human participants in Abu Dhabi</li>
                <li>• Good Clinical Practice (GCP) standards must be followed</li>
                <li>• Investigational medical devices require specific regulatory pathway</li>
                <li>• Ethics committee review mandatory before trial initiation</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>

      {/* VOICE Trial Details */}
      <Card title="VOICE Trial: Dallas, TX" icon={<Icons.Brain size={24} />}>
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-verified-bg)] mb-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="metadata-row">
                <span className="metadata-row__label">Trial ID</span>
                <span className="metadata-row__value text-mono">NCT07224256</span>
              </div>
              <div className="metadata-row">
                <span className="metadata-row__label">Site</span>
                <span className="metadata-row__value">UT Southwestern Medical Center</span>
              </div>
            </div>
            <div>
              <div className="metadata-row">
                <span className="metadata-row__label">Target Area</span>
                <span className="metadata-row__value">Speech Cortex</span>
              </div>
              <div className="metadata-row">
                <span className="metadata-row__label">Patients (Jan 2026)</span>
                <span className="metadata-row__value">2+ implanted</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-mono text-sm uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
            How It Works
          </h4>
          <div className="dossier-card dossier-card--compact dossier-card--no-hover">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 text-center">
                <Icons.Brain size={32} className="mx-auto mb-2" />
                <div className="text-xs text-mono text-[var(--color-ink-muted)]">Patient imagines speech</div>
              </div>
              <Icons.ArrowRight size={20} className="hidden md:block text-[var(--color-ink-muted)]" />
              <div className="flex-1 text-center">
                <div className="text-2xl mb-2">⚡</div>
                <div className="text-xs text-mono text-[var(--color-ink-muted)]">N1 reads speech cortex</div>
              </div>
              <Icons.ArrowRight size={20} className="hidden md:block text-[var(--color-ink-muted)]" />
              <div className="flex-1 text-center">
                <Icons.Technology size={32} className="mx-auto mb-2" />
                <div className="text-xs text-mono text-[var(--color-ink-muted)]">AI decodes signals</div>
              </div>
              <Icons.ArrowRight size={20} className="hidden md:block text-[var(--color-ink-muted)]" />
              <div className="flex-1 text-center">
                <div className="text-2xl mb-2">🔊</div>
                <div className="text-xs text-mono text-[var(--color-ink-muted)]">Synthesized voice</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Speech Cortex Surgery */}
      <Card title="Speech Cortex Surgery" icon={<Icons.Brain size={24} />}>
        <p className="mb-4">
          The VOICE trial involves surgically implanting electrodes directly into the brain's 
          speech areas to read neural activity associated with imagined (silent) speech—a 
          procedure significantly more invasive than motor cortex implants.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="dossier-card dossier-card--compact dossier-card--no-hover">
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-accent-blue)] mb-2">
              Broca's Area
            </h4>
            <p className="text-sm text-[var(--color-ink-light)]">
              Located in the frontal lobe, responsible for speech production. Damage causes 
              expressive aphasia—inability to produce fluent speech.
            </p>
          </div>
          <div className="dossier-card dossier-card--compact dossier-card--no-hover">
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-accent-blue)] mb-2">
              Motor Speech Cortex
            </h4>
            <p className="text-sm text-[var(--color-ink-light)]">
              Controls muscles of face, tongue, and larynx. Neuralink targets neurons that 
              fire when imagining speech, even without physical movement.
            </p>
          </div>
        </div>

        <div>
          <h4 className="text-mono text-sm uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
            Risks & Concerns
          </h4>
          <div className="space-y-2">
            <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-unverified-bg)]">
              <div className="text-mono text-xs font-bold text-[var(--color-accent-red)] uppercase tracking-[0.05em] mb-1">
                Brain Tissue Damage
              </div>
              <div className="text-xs text-[var(--color-ink-light)]">
                Inserting electrodes carries risks of bleeding, infection, and tissue damage
              </div>
            </div>
            <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-mixed-bg)]">
              <div className="text-mono text-xs font-bold text-[var(--color-mixed)] uppercase tracking-[0.05em] mb-1">
                Wire Migration
              </div>
              <div className="text-xs text-[var(--color-ink-light)]">
                Threads can retract or migrate from original positions, reducing effectiveness
              </div>
            </div>
            <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-warning-bg)]">
              <div className="text-mono text-xs font-bold text-[var(--color-warning)] uppercase tracking-[0.05em] mb-1">
                Long-term Biocompatibility
              </div>
              <div className="text-xs text-[var(--color-ink-light)]">
                Scar tissue formation could degrade signal quality over time
              </div>
            </div>
            <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-verified-bg)]">
              <div className="text-mono text-xs font-bold text-[var(--color-verified)] uppercase tracking-[0.05em] mb-1">
                Irreversibility
              </div>
              <div className="text-xs text-[var(--color-ink-light)]">
                Brain tissue damage from implantation is permanent
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Site Detail Modal */}
      <Modal
        isOpen={!!selectedSite}
        onClose={() => setSelectedSite(null)}
        title={selectedSite ? `${selectedSite.city}${selectedSite.state ? `, ${selectedSite.state}` : ''}` : ''}
      >
        {selectedSite && (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-mono text-lg uppercase tracking-[0.02em]">{selectedSite.facility}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedSite.trials.map((trial) => (
                  <span
                    key={trial}
                    className={`status-badge ${trial === 'VOICE' ? 'status-badge--mixed' : 'status-badge--neutral'}`}
                  >
                    {trial}
                  </span>
                ))}
                <span className={`status-badge ${
                  selectedSite.status === 'active' ? 'status-badge--verified' : 'status-badge--warning'
                }`}>
                  {selectedSite.status === 'active' ? 'Active' : 'Enrolling'}
                </span>
              </div>
            </div>

            <div>
              <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink-muted)] mb-2">
                About
              </h4>
              <p className="text-[var(--color-ink-light)]">{selectedSite.details.about}</p>
            </div>

            <div>
              <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink-muted)] mb-2">
                Trial Details
              </h4>
              <p className="text-[var(--color-ink-light)]">{selectedSite.details.trialDetails}</p>
            </div>

            {selectedSite.details.nearbyFacilities && (
              <div className="disclaimer-box">
                <div className="disclaimer-box__title">Geographic Note</div>
                <div className="disclaimer-box__text">{selectedSite.details.nearbyFacilities}</div>
              </div>
            )}

            <div>
              <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink-muted)] mb-3">
                Sources & Documentation
              </h4>
              <div className="space-y-2">
                {selectedSite.details.sources.map((source, i) => (
                  <SourceLink key={i} url={source.url} title={source.title} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
