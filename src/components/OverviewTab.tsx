import Card from './Card';

export default function OverviewTab() {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-gray-900 border border-gray-700 p-8">
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(white,transparent_70%)]" />
        <div className="relative">
          <h1 className="text-4xl font-bold text-white mb-4">
            Neuralink Clinical Trials
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            A comprehensive documentation of Neuralink's brain-computer interface trials, 
            regulatory history, and ethical concerns.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-gray-800/50 rounded-lg px-4 py-2 border border-gray-700">
              <div className="text-2xl font-bold text-blue-400">27+</div>
              <div className="text-sm text-gray-400">Patients</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg px-4 py-2 border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">7</div>
              <div className="text-sm text-gray-400">Trial Sites</div>
            </div>
            <div className="bg-gray-800/50 rounded-lg px-4 py-2 border border-gray-700">
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-sm text-gray-400">Countries</div>
            </div>
            <div className="bg-red-900/20 rounded-lg px-4 py-2 border border-red-800/30">
              <div className="text-2xl font-bold text-red-400">0</div>
              <div className="text-sm text-gray-400">FDA Approved</div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Information */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="What is Neuralink?" icon="🧠">
          <p className="mb-3">
            Neuralink is developing implantable brain-computer interfaces (BCIs) to restore 
            autonomy to those with unmet medical needs. The company has conducted trials in 
            the US, UK, Canada, and UAE.
          </p>
          <p className="text-sm text-gray-400">
            Founded in 2016, Neuralink aims to create a generalized brain interface for 
            medical and cognitive enhancement purposes.
          </p>
        </Card>

        <Card title="Current Status" icon="📊" variant="warning">
          <p className="mb-3">
            As of 2026, Neuralink has implanted 27+ patients across 7 clinical trial sites 
            in 4 countries. The devices remain <strong className="text-amber-400">investigational</strong> and 
            have NOT been approved by the FDA.
          </p>
          <p className="text-sm text-gray-400">
            The FDA initially rejected Neuralink's application in 2022, citing "dozens of 
            deficiencies." Approval was granted in 2023 under an Investigational Device Exemption.
          </p>
        </Card>

        <Card title="Active Trials" icon="🧪">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold">•</span>
              <div>
                <strong className="text-white">PRIME:</strong> Device control for paralysis patients
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400 font-bold">•</span>
              <div>
                <strong className="text-white">VOICE:</strong> Speech restoration via thought-to-text
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-400 font-bold">•</span>
              <div>
                <strong className="text-white">CONVOY:</strong> Additional device control study
              </div>
            </li>
          </ul>
        </Card>

        <Card title="Key Concerns" icon="⚠️" variant="error">
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Speech cortex surgery without full FDA approval</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>UAE trials bypassing US regulatory oversight</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Patient 4 GoFundMe crisis 4 months post-surgery</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-400">•</span>
              <span>Animal testing: 15 of 23 monkeys died at UC Davis</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* Quick Links */}
      <Card title="Quick Navigation" icon="🔗">
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#trials" className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors">
            <div className="text-2xl mb-2">🧪</div>
            <div className="font-bold text-white mb-1">Clinical Trials</div>
            <div className="text-sm text-gray-400">Locations, procedures, and regulatory details</div>
          </a>
          <a href="#patients" className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-colors">
            <div className="text-2xl mb-2">👥</div>
            <div className="font-bold text-white mb-1">Patient Registry</div>
            <div className="text-sm text-gray-400">All known patients and their outcomes</div>
          </a>
          <a href="#controversies" className="block p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-red-500/50 transition-colors">
            <div className="text-2xl mb-2">⚠️</div>
            <div className="font-bold text-white mb-1">Controversies</div>
            <div className="text-sm text-gray-400">Ethical concerns and investigations</div>
          </a>
        </div>
      </Card>
    </div>
  );
}
