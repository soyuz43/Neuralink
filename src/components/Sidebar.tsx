interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const sections = [
  { id: 'overview', label: 'Overview', icon: '📋' },
  { id: 'trial-sites', label: 'Trial Locations', icon: '📍' },
  { id: 'uae-prime', label: 'UAE-PRIME (Abu Dhabi)', icon: '🇦🇪' },
  { id: 'voice-trial', label: 'VOICE Trial (Dallas)', icon: '🗣️' },
  { id: 'speech-cortex', label: 'Speech Cortex Surgery', icon: '🧠' },
  { id: 'known-patients', label: 'Known Patients', icon: '👥' },
  { id: 'patient-four', label: 'Patient 4 & GoFundMe', icon: '🔍' },
  { id: 'fda-timeline', label: 'FDA Timeline', icon: '⚖️' },
  { id: 'ethical-concerns', label: 'Ethical Concerns', icon: '⚠️' },
  { id: 'technology', label: 'Technology', icon: '🔬' },
  { id: 'sources', label: 'Sources', icon: '📚' },
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-gray-900 border-r border-gray-800 z-50 transform transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 h-full overflow-y-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
              N
            </div>
            <div>
              <h2 className="font-bold text-white text-sm">Neuralink Trials</h2>
              <p className="text-xs text-gray-500">Documentation</p>
            </div>
          </div>

          <nav className="space-y-1">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-sm ${
                  section.id === 'patient-four' ? 'text-red-400/80 hover:text-red-300' : ''
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
              </a>
            ))}
          </nav>

          <div className="mt-8 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <p className="text-xs text-gray-400 leading-relaxed">
              This documentation covers Neuralink's clinical trials, including the controversial
              UAE-PRIME speech trial, VOICE trial in Dallas, TX, the Patient 4 GoFundMe situation,
              and speech cortex surgery procedures.
            </p>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-amber-900/20 border border-amber-800/30">
            <p className="text-xs text-amber-400 leading-relaxed">
              ⚠️ <strong>Disclaimer:</strong> Neuralink devices are investigational and have NOT been approved by the FDA or other regulatory authorities.
            </p>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-red-900/10 border border-red-800/20">
            <p className="text-xs text-red-400 leading-relaxed">
              🔍 <strong>Key Investigation:</strong> Patient 4 (Mike Melgarejo) had a GoFundMe crisis campaign 4 months after surgery. A Neuralink executive donated $3,000.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
