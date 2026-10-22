import { useState } from 'react';
import Card from './Card';
import Modal from './Modal';
import { trialSites, TrialSite } from '../data/trialSites';

export default function TrialsTab() {
  const [selectedSite, setSelectedSite] = useState<TrialSite | null>(null);

  return (
    <div className="space-y-6">
      {/* Trial Sites Map */}
      <Card title="Global Trial Locations" icon="🌍">
        <p className="mb-4">
          Neuralink's clinical trials are being conducted at 7 sites across 4 countries. 
          Click on any site to view detailed information, trial specifics, and source documentation.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span>🇺🇸</span> United States (3 sites)
            </h4>
            <div className="space-y-2 pl-6">
              {trialSites.filter(s => s.country === 'USA').map((site) => (
                <button
                  key={site.id}
                  onClick={() => setSelectedSite(site)}
                  className={`w-full text-left rounded-lg p-3 border transition-all hover:scale-[1.02] group cursor-pointer ${
                    site.id === 'dallas' 
                      ? 'bg-purple-900/20 border-purple-800/30 hover:border-purple-600'
                      : 'bg-gray-800/50 border-gray-700 hover:border-blue-500/50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-white group-hover:underline">{site.city}, {site.state}</div>
                      <div className="text-sm text-gray-400">{site.facility}</div>
                      <div className={`text-xs mt-1 ${
                        site.id === 'dallas' ? 'text-purple-400' : 'text-blue-400'
                      }`}>
                        {site.trials.join(', ')} • First implant: {site.firstImplant}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">{site.description}</div>
                    </div>
                    <div className="text-gray-600 group-hover:text-blue-400 transition-colors ml-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span>🇬🇧</span> United Kingdom (2 sites)
            </h4>
            <div className="space-y-2 pl-6">
              {trialSites.filter(s => s.country === 'United Kingdom').map((site) => (
                <button
                  key={site.id}
                  onClick={() => setSelectedSite(site)}
                  className="w-full text-left bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-[1.02] group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-white group-hover:underline">{site.city}</div>
                      <div className="text-sm text-gray-400">{site.facility}</div>
                      <div className="text-xs text-blue-400 mt-1">
                        {site.trials.join(', ')} • First implant: {site.firstImplant}
                      </div>
                    </div>
                    <div className="text-gray-600 group-hover:text-blue-400 transition-colors ml-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <h4 className="font-bold text-white flex items-center gap-2 mt-4">
              <span>🇨🇦</span> Canada (1 site)
            </h4>
            <div className="space-y-2 pl-6">
              {trialSites.filter(s => s.country === 'Canada').map((site) => (
                <button
                  key={site.id}
                  onClick={() => setSelectedSite(site)}
                  className="w-full text-left bg-gray-800/50 rounded-lg p-3 border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-[1.02] group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-white group-hover:underline">{site.city}, {site.state}</div>
                      <div className="text-sm text-gray-400">{site.facility}</div>
                      <div className="text-xs text-blue-400 mt-1">
                        {site.trials.join(', ')} • First implant: {site.firstImplant}
                      </div>
                    </div>
                    <div className="text-gray-600 group-hover:text-blue-400 transition-colors ml-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <h4 className="font-bold text-white flex items-center gap-2 mt-4">
              <span>🇦🇪</span> United Arab Emirates (1 site)
            </h4>
            <div className="space-y-2 pl-6">
              {trialSites.filter(s => s.country === 'UAE').map((site) => (
                <button
                  key={site.id}
                  onClick={() => setSelectedSite(site)}
                  className="w-full text-left bg-amber-900/20 rounded-lg p-3 border border-amber-800/30 hover:border-amber-600 transition-all hover:scale-[1.02] group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="font-bold text-white group-hover:underline">{site.city}</div>
                      <div className="text-sm text-gray-400">{site.facility}</div>
                      <div className="text-xs text-amber-400 mt-1">
                        {site.trials.join(', ')} • Regulatory concerns
                      </div>
                    </div>
                    <div className="text-gray-600 group-hover:text-amber-400 transition-colors ml-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* UAE-PRIME Details */}
      <Card title="UAE-PRIME: Abu Dhabi Trial" icon="🇦🇪" variant="warning">
        <p className="mb-4">
          UAE-PRIME represents Neuralink's first clinical trial outside the United States, 
          launched in partnership with Cleveland Clinic Abu Dhabi and the Department of Health 
          Abu Dhabi.
        </p>

        <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-amber-400 mb-2">⚠️ Key Controversy</h4>
          <p className="text-sm text-amber-200/80">
            Questions have been raised about whether this expansion was motivated by the desire 
            to conduct speech trials in a jurisdiction with different regulatory requirements 
            than the FDA. The UAE trial operates under UAE regulatory authority, not FDA oversight.
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="font-bold text-white mb-2">Why the UAE?</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">1</span>
                <span><strong className="text-white">Different Regulatory Framework:</strong> UAE's regulatory environment may have different requirements and timelines than the FDA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">2</span>
                <span><strong className="text-white">Speech Trial Expansion:</strong> UAE-PRIME includes speech impairment patients—the same population targeted by the VOICE trial</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">3</span>
                <span><strong className="text-white">Strategic Partnership:</strong> Department of Health Abu Dhabi's direct involvement suggests government-level facilitation</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-gray-700 pt-4 mt-4">
            <h4 className="font-bold text-white mb-3">🏛️ UAE Regulatory Authority</h4>
            <p className="text-sm text-gray-300 mb-3">
              Neuralink's UAE-PRIME trial operates under the authority of the <strong className="text-white">Department of Health - Abu Dhabi (DOH)</strong>, 
              the regulatory authority for research involving human participants in the Emirate of Abu Dhabi. At the federal level, 
              the <strong className="text-white">Emirates Drug Establishment (EDE)</strong> regulates medical devices and pharmaceutical products.
            </p>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-3">
              <h5 className="font-bold text-blue-400 text-sm mb-2">Key Regulatory Documents:</h5>
              <ul className="space-y-2 text-xs">
                <li>
                  <a 
                    href="https://www.doh.gov.ae/-/media/40B18D052C3E40B2A079ABD7571E2260.ashx" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-start gap-2"
                  >
                    <span className="text-gray-600">↗</span>
                    <span>DOH Guidelines for Conducting Clinical Trials with Investigational Products and Medical Devices</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://ede.gov.ae/documents/61005/62137/Assessment+of+Medical+Products+for+Pharmacological+Research+and+Clinical+Studies+of+Drugs+-+Guidelines+for+Conducting+Clinical+Trials+with+Investigational+Products+and+Medical+Devices+2017/d2cd7244-088e-fc20-32fd-c1d3a1d3639f" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-start gap-2"
                  >
                    <span className="text-gray-600">↗</span>
                    <span>EDE Guidelines for Clinical Trials with Medical Devices (Federal)</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.aahrpp.org/docs/default-source/international-addenda/addendum-to-evaluation-instrument---uae.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 flex items-start gap-2"
                  >
                    <span className="text-gray-600">↗</span>
                    <span>UAE Abu Dhabi Addendum - AAHRPP (Research Ethics Standards)</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-xs text-gray-400">
              <strong className="text-gray-300">What applies to Neuralink:</strong>
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
      <Card title="VOICE Trial: Dallas, TX" icon="🗣️">
        <div className="bg-purple-900/20 border border-purple-800/30 rounded-lg p-4 mb-4">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-400">Trial ID</div>
              <div className="font-mono text-purple-400">NCT07224256</div>
            </div>
            <div>
              <div className="text-gray-400">Site</div>
              <div className="text-white">UT Southwestern Medical Center</div>
            </div>
            <div>
              <div className="text-gray-400">Target Area</div>
              <div className="text-white">Speech Cortex</div>
            </div>
            <div>
              <div className="text-gray-400">Patients (Jan 2026)</div>
              <div className="text-white">2+ implanted</div>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">How It Works</h4>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex-1 text-center">
                <div className="text-3xl mb-2">🧠</div>
                <div className="text-xs text-gray-400">Patient imagines speech</div>
              </div>
              <div className="text-gray-600 hidden md:block">→</div>
              <div className="flex-1 text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="text-xs text-gray-400">N1 reads speech cortex</div>
              </div>
              <div className="text-gray-600 hidden md:block">→</div>
              <div className="flex-1 text-center">
                <div className="text-3xl mb-2">🤖</div>
                <div className="text-xs text-gray-400">AI decodes signals</div>
              </div>
              <div className="text-gray-600 hidden md:block">→</div>
              <div className="flex-1 text-center">
                <div className="text-3xl mb-2">🔊</div>
                <div className="text-xs text-gray-400">Synthesized voice</div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Speech Cortex Surgery */}
      <Card title="Speech Cortex Surgery" icon="🧠">
        <p className="mb-4">
          The VOICE trial involves surgically implanting electrodes directly into the brain's 
          speech areas to read neural activity associated with imagined (silent) speech—a 
          procedure significantly more invasive than motor cortex implants.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <h4 className="font-bold text-blue-400 mb-2">Broca's Area</h4>
            <p className="text-sm text-gray-400">
              Located in the frontal lobe, responsible for speech production. Damage causes 
              expressive aphasia—inability to produce fluent speech.
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <h4 className="font-bold text-green-400 mb-2">Motor Speech Cortex</h4>
            <p className="text-sm text-gray-400">
              Controls muscles of face, tongue, and larynx. Neuralink targets neurons that 
              fire when imagining speech, even without physical movement.
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">Risks & Concerns</h4>
          <div className="space-y-2">
            <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-3">
              <div className="font-bold text-red-400 text-sm mb-1">Brain Tissue Damage</div>
              <div className="text-xs text-gray-400">
                Inserting electrodes carries risks of bleeding, infection, and tissue damage
              </div>
            </div>
            <div className="bg-orange-900/10 border border-orange-800/20 rounded-lg p-3">
              <div className="font-bold text-orange-400 text-sm mb-1">Wire Migration</div>
              <div className="text-xs text-gray-400">
                Threads can retract or migrate from original positions, reducing effectiveness
              </div>
            </div>
            <div className="bg-yellow-900/10 border border-yellow-800/20 rounded-lg p-3">
              <div className="font-bold text-yellow-400 text-sm mb-1">Long-term Biocompatibility</div>
              <div className="text-xs text-gray-400">
                Scar tissue formation could degrade signal quality over time
              </div>
            </div>
            <div className="bg-purple-900/10 border border-purple-800/20 rounded-lg p-3">
              <div className="font-bold text-purple-400 text-sm mb-1">Irreversibility</div>
              <div className="text-xs text-gray-400">
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
                <span className="text-2xl">{selectedSite.flag}</span>
                <h3 className="text-xl font-bold text-white">{selectedSite.facility}</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedSite.trials.map((trial) => (
                  <span
                    key={trial}
                    className={`px-2 py-1 rounded text-xs font-mono ${
                      trial === 'VOICE'
                        ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                        : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                    }`}
                  >
                    {trial}
                  </span>
                ))}
                <span className={`px-2 py-1 rounded text-xs ${
                  selectedSite.status === 'active'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                }`}>
                  {selectedSite.status === 'active' ? 'Active' : 'Enrolling'}
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">About</h4>
              <p className="text-gray-300 text-sm">{selectedSite.details.about}</p>
            </div>

            <div>
              <h4 className="font-bold text-white mb-2">Trial Details</h4>
              <p className="text-gray-300 text-sm">{selectedSite.details.trialDetails}</p>
            </div>

            {selectedSite.details.nearbyFacilities && (
              <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-4">
                <h4 className="font-bold text-amber-400 mb-2">⚠️ Geographic Note</h4>
                <p className="text-amber-200/80 text-sm">{selectedSite.details.nearbyFacilities}</p>
              </div>
            )}

            <div>
              <h4 className="font-bold text-white mb-3">Sources & Documentation</h4>
              <ul className="space-y-2">
                {selectedSite.details.sources.map((source, i) => (
                  <li key={i}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
                    >
                      <span className="text-gray-600 group-hover:text-blue-400 mt-0.5">↗</span>
                      <span className="group-hover:underline">{source.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
