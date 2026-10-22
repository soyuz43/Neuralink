import Card from './Card';

export default function ControversiesTab() {
  return (
    <div className="space-y-6">
      {/* Patient 4 Case Study */}
      <Card title="Patient 4: Mike Melgarejo" icon="🔍" variant="error">
        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4">
          <p className="text-sm text-red-300">
            <strong>⚠️ Key Case:</strong> This case study is based on publicly available information 
            including the GoFundMe campaign, Neuralink's promotional materials, and investigative 
            reporting by The Drey Dossier.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4">
            <h4 className="font-bold text-blue-400 text-sm mb-2">📹 Neuralink's Narrative (June 2025)</h4>
            <p className="text-sm text-gray-400">
              In Neuralink's Summer 2025 funding update video, Mike appears talking enthusiastically 
              about how the implant enabled him to work full-time to support his family.
            </p>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4">
            <h4 className="font-bold text-red-400 text-sm mb-2">💔 GoFundMe Reality (June 2025)</h4>
            <p className="text-sm text-gray-400">
              In the <strong>same month</strong>, a GoFundMe stated Mike was "not in a good place—mentally, 
              financially, physically, or emotionally" and "He's ready to give up on life, people."
            </p>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-white text-sm mb-3">GoFundMe Details</h4>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-500">Campaign:</span>{' '}
              <span className="text-white">"Those things we do, so others may live"</span>
            </div>
            <div>
              <span className="text-gray-500">Created:</span>{' '}
              <span className="text-white">June 23, 2025</span>
            </div>
            <div>
              <span className="text-gray-500">Organizer:</span>{' '}
              <span className="text-white">Ryan Biggs (gaming friend)</span>
            </div>
            <div>
              <span className="text-gray-500">Raised:</span>{' '}
              <span className="text-white">Over $21,000</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-gray-500">Notable Donor:</span>{' '}
              <span className="text-red-400 font-bold">$3,000 from Shivon Zilis</span>
              <span className="text-gray-400"> — Neuralink's Director of Operations</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-white text-sm mb-2">Direct Quotes from GoFundMe (verified):</h4>
          <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-400 my-3">
            "He's ready to give up on life, people. Not an understatement. Everything has been taken 
            from him. He's not in a good place mentally, financially, physically, or emotionally."
          </blockquote>
          <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-400">
            "I hate to ask this, but I'm stuck in an embarrassing and tight spot. Can I borrow some 
            cash? Rent's coming up and we're short. I'm so sorry for asking."
          </blockquote>
        </div>

        <div>
          <h4 className="font-bold text-white mb-3">Ethical Concerns</h4>
          <div className="space-y-3">
            <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-3">
              <div className="font-bold text-red-400 text-sm mb-1">1. Conflict of Interest</div>
              <div className="text-xs text-gray-400">
                It is highly unusual for a senior executive to make a large personal donation to a 
                patient's crisis fundraiser. This blurs the line between corporate responsibility and 
                personal charity.
              </div>
            </div>
            <div className="bg-orange-900/10 border border-orange-800/20 rounded-lg p-3">
              <div className="font-bold text-orange-400 text-sm mb-1">2. Adverse Event Reporting</div>
              <div className="text-xs text-gray-400">
                If a patient experiences severe mental health crises after experimental brain surgery, 
                this qualifies as a Serious Adverse Event (SAE). The FDA requires reporting under 
                21 CFR 312.32. If not reported, it would be a major violation.
              </div>
            </div>
            <div className="bg-yellow-900/10 border border-yellow-800/20 rounded-lg p-3">
              <div className="font-bold text-yellow-400 text-sm mb-1">3. Financial Exploitation</div>
              <div className="text-xs text-gray-400">
                Trial participants generate invaluable data that boosts company valuation. If a patient 
                struggles to pay rent while their data secures hundreds of millions in funding, it 
                highlights a stark ethical imbalance.
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Animal Testing */}
      <Card title="Animal Testing: UC Davis Monkey Experiments" icon="🐒" variant="error">
        <p className="mb-4">
          Between <strong className="text-white">2017 and 2020</strong>, Neuralink conducted invasive, 
          often deadly experiments on rhesus macaque monkeys at the University of California, Davis.
        </p>

        <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-4 mb-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">23</div>
              <div className="text-xs text-gray-400">Monkeys used</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400">15</div>
              <div className="text-xs text-gray-400">Monkeys died (65%)</div>
            </div>
          </div>
        </div>

        <div className="bg-red-900/10 border border-red-800/20 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-red-400 text-sm mb-2">Documented Complications:</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span><strong className="text-white">Bloody diarrhea</strong> — documented in multiple animals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span><strong className="text-white">Partial paralysis</strong> — animals lost motor function</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span><strong className="text-white">Cerebral edema</strong> — "brain swelling," life-threatening</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span><strong className="text-white">Seizures</strong> — documented in multiple animals</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span><strong className="text-white">Infections</strong> — fungal and bacterial</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span><strong className="text-white">Self-mutilation</strong> — scratching at surgical sites until bleeding</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span><strong className="text-white">Device failures</strong> — internal parts breaking off during implantation</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
          <h4 className="font-bold text-white text-sm mb-2">Federal Investigations:</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span><strong className="text-white">USDA Investigation (2022):</strong> Probe into Animal Welfare Act violations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span><strong className="text-white">FDA Lab Inspection (June 2023):</strong> Quality control issues found, missing calibration records</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span><strong className="text-white">Internal Employee Backlash:</strong> Employees raised concerns about animal suffering</span>
            </li>
          </ul>
        </div>
      </Card>

      {/* FDA Timeline */}
      <Card title="FDA Regulatory Timeline" icon="⚖️">
        <div className="space-y-4">
          <div className="border-l-2 border-red-500 pl-4">
            <div className="text-xs text-gray-500 mb-1">Early 2022</div>
            <div className="font-bold text-white mb-1">❌ FDA REJECTS Application</div>
            <div className="text-sm text-gray-400">
              Citing "dozens of deficiencies" including lithium battery safety, wire migration issues, 
              and insufficient animal testing data.
            </div>
          </div>
          <div className="border-l-2 border-red-500 pl-4">
            <div className="text-xs text-gray-500 mb-1">December 2022</div>
            <div className="font-bold text-white mb-1">Federal Investigation Revealed</div>
            <div className="text-sm text-gray-400">
              Reuters and The Guardian report Neuralink under federal investigation for Animal Welfare 
              Act violations.
            </div>
          </div>
          <div className="border-l-2 border-green-500 pl-4">
            <div className="text-xs text-gray-500 mb-1">May 2023</div>
            <div className="font-bold text-white mb-1">✅ FDA Clears Human Trials</div>
            <div className="text-sm text-gray-400">
              After addressing concerns, FDA grants clearance under Investigational Device Exemption (IDE). 
              This is NOT approval—just permission to test.
            </div>
          </div>
          <div className="border-l-2 border-amber-500 pl-4">
            <div className="text-xs text-gray-500 mb-1">2025</div>
            <div className="font-bold text-white mb-1">🇦🇪 UAE-PRIME Launches</div>
            <div className="text-sm text-gray-400">
              First international trial at Cleveland Clinic Abu Dhabi. Operates under UAE regulatory 
              authority, not FDA.
            </div>
          </div>
          <div className="border-l-2 border-blue-500 pl-4">
            <div className="text-xs text-gray-500 mb-1">2026</div>
            <div className="font-bold text-white mb-1">Current Status</div>
            <div className="text-sm text-gray-400">
              27+ patients implanted. Devices remain investigational and NOT FDA-approved.
            </div>
          </div>
        </div>
      </Card>

      {/* Ethical Concerns */}
      <Card title="Additional Ethical Concerns" icon="⚠️">
        <div className="space-y-4">
          <div>
            <h4 className="font-bold text-white mb-2">Informed Consent</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Patients with severe conditions may be desperate enough to accept risks they wouldn't otherwise consider</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>The "false hope" problem—Neuralink's messaging may overstate benefits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Patient 4's GoFundMe raises questions about whether participants understand the full burden</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">Lack of Ethics Oversight</h4>
            <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-400 my-3">
              "It doesn't have, as far as we know, an internal ethics board or a code of ethics. 
              We don't know what goes on behind the closed doors."
              <footer className="text-xs text-gray-500 mt-2 not-italic">— Dr. Paul Wolpe, neuroethicist</footer>
            </blockquote>
          </div>

          <div>
            <h4 className="font-bold text-white mb-2">Neural Data Privacy</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>Every time a patient thinks about moving a cursor, their brain activity is recorded, transmitted, and stored</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>HIPAA was passed in 1996, decades before BCIs existed. Current laws don't protect neural data</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">•</span>
                <span>The company recording thoughts is owned by the same person who owns X, xAI, and Tesla</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
