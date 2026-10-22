import Card from './Card';

export default function TrialsTab() {
  return (
    <div className="space-y-6">
      {/* Trial Sites Map */}
      <Card title="Global Trial Locations" icon="🌍">
        <p className="mb-4">
          Neuralink's clinical trials are being conducted at 7 sites across 4 countries. 
          The expansion beyond the United States—particularly to the UAE—has raised questions 
          about regulatory oversight.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span>🇺🇸</span> United States (3 sites)
            </h4>
            <div className="space-y-2 pl-6">
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <div className="font-bold text-white">Phoenix, AZ</div>
                <div className="text-sm text-gray-400">Barrow Neurological Institute</div>
                <div className="text-xs text-blue-400 mt-1">PRIME, CONVOY • First implant: Jan 2024</div>
              </div>
              <div className="bg-purple-900/20 rounded-lg p-3 border border-purple-800/30">
                <div className="font-bold text-white">Dallas, TX</div>
                <div className="text-sm text-gray-400">UT Southwestern Medical Center</div>
                <div className="text-xs text-purple-400 mt-1">VOICE trial • Speech cortex surgery</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <div className="font-bold text-white">Miami, FL</div>
                <div className="text-sm text-gray-400">University of Miami Health</div>
                <div className="text-xs text-blue-400 mt-1">PRIME, CONVOY • First implant: Apr 2025</div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-bold text-white flex items-center gap-2">
              <span>🇬🇧</span> United Kingdom (2 sites)
            </h4>
            <div className="space-y-2 pl-6">
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <div className="font-bold text-white">London</div>
                <div className="text-sm text-gray-400">University College London Hospitals</div>
                <div className="text-xs text-blue-400 mt-1">GB-PRIME • First implant: Oct 2025</div>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <div className="font-bold text-white">Newcastle upon Tyne</div>
                <div className="text-sm text-gray-400">Newcastle upon Tyne Hospitals</div>
                <div className="text-xs text-gray-500 mt-1">GB-PRIME • Enrolling</div>
              </div>
            </div>

            <h4 className="font-bold text-white flex items-center gap-2 mt-4">
              <span>🇨🇦</span> Canada (1 site)
            </h4>
            <div className="space-y-2 pl-6">
              <div className="bg-gray-800/50 rounded-lg p-3 border border-gray-700">
                <div className="font-bold text-white">Toronto, ON</div>
                <div className="text-sm text-gray-400">University Health Network</div>
                <div className="text-xs text-blue-400 mt-1">CAN-PRIME • First implant: Aug 2025</div>
              </div>
            </div>

            <h4 className="font-bold text-white flex items-center gap-2 mt-4">
              <span>🇦🇪</span> United Arab Emirates (1 site)
            </h4>
            <div className="space-y-2 pl-6">
              <div className="bg-amber-900/20 rounded-lg p-3 border border-amber-800/30">
                <div className="font-bold text-white">Abu Dhabi</div>
                <div className="text-sm text-gray-400">Cleveland Clinic Abu Dhabi</div>
                <div className="text-xs text-amber-400 mt-1">UAE-PRIME • Regulatory concerns</div>
              </div>
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
    </div>
  );
}
