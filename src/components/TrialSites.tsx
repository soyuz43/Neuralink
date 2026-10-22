const trialSites = [
  {
    id: 1,
    city: 'Phoenix',
    state: 'AZ',
    country: 'USA',
    facility: 'Barrow Neurological Institute',
    trials: ['PRIME', 'CONVOY'],
    firstImplant: 'January 2024',
    status: 'active',
    flag: '🇺🇸',
  },
  {
    id: 2,
    city: 'Dallas',
    state: 'TX',
    country: 'USA',
    facility: 'UT Southwestern Medical Center',
    trials: ['VOICE'],
    firstImplant: '2025',
    status: 'active',
    flag: '🇺🇸',
    highlight: true,
  },
  {
    id: 3,
    city: 'Miami',
    state: 'FL',
    country: 'USA',
    facility: 'University of Miami Health',
    trials: ['PRIME', 'CONVOY'],
    firstImplant: 'April 2025',
    status: 'active',
    flag: '🇺🇸',
  },
  {
    id: 4,
    city: 'Toronto',
    state: 'ON',
    country: 'Canada',
    facility: 'University Health Network (UHN)',
    trials: ['CAN-PRIME'],
    firstImplant: 'August 2025',
    status: 'active',
    flag: '🇨🇦',
  },
  {
    id: 5,
    city: 'Newcastle upon Tyne',
    state: '',
    country: 'United Kingdom',
    facility: 'Newcastle upon Tyne Hospitals',
    trials: ['GB-PRIME'],
    firstImplant: 'Pending',
    status: 'enrolling',
    flag: '🇬🇧',
  },
  {
    id: 6,
    city: 'London',
    state: '',
    country: 'United Kingdom',
    facility: 'University College London Hospitals',
    trials: ['GB-PRIME'],
    firstImplant: 'October 2025',
    status: 'active',
    flag: '🇬🇧',
  },
  {
    id: 7,
    city: 'Abu Dhabi',
    state: '',
    country: 'UAE',
    facility: 'Cleveland Clinic Abu Dhabi',
    trials: ['UAE-PRIME'],
    firstImplant: 'Pending',
    status: 'enrolling',
    flag: '🇦🇪',
    highlight: true,
  },
];

export default function TrialSites() {
  return (
    <section id="trial-sites" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">📍</span> Clinical Trial Locations
      </h2>

      <p className="text-gray-400 mb-8 leading-relaxed">
        Neuralink's clinical trials are being conducted at 7 sites across 4 countries. The expansion
        beyond the United States — particularly to the UAE — has raised questions about regulatory
        oversight and whether the same FDA standards apply internationally.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {trialSites.map((site) => (
          <div
            key={site.id}
            className={`p-5 rounded-xl border transition-all ${
              site.highlight
                ? 'bg-amber-500/5 border-amber-500/30 hover:border-amber-500/50'
                : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{site.flag}</span>
                  <h3 className="font-bold text-white">
                    {site.city}
                    {site.state ? `, ${site.state}` : ''}
                  </h3>
                </div>
                <p className="text-sm text-gray-400">{site.facility}</p>
              </div>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                  site.status === 'active'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                }`}
              >
                {site.status === 'active' ? 'Active' : 'Enrolling'}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-3">
              {site.trials.map((trial) => (
                <span
                  key={trial}
                  className={`px-2 py-0.5 rounded text-xs font-mono ${
                    trial === 'VOICE'
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      : trial.includes('UAE')
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  }`}
                >
                  {trial}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500">
              First implant: {site.firstImplant}
            </p>

            {site.highlight && (
              <div className="mt-3 pt-3 border-t border-gray-700/50">
                <p className="text-xs text-amber-400">
                  ⚡ Key site — See detailed analysis below
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Map visualization */}
      <div className="mt-8 p-6 rounded-xl bg-gray-800/30 border border-gray-700">
        <h3 className="font-bold text-white mb-4">Geographic Distribution</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="p-3 rounded-lg bg-gray-800/50">
            <div className="text-2xl mb-1">🇺🇸</div>
            <div className="text-sm font-bold text-white">USA</div>
            <div className="text-xs text-gray-400">3 sites</div>
            <div className="text-xs text-gray-500">Phoenix, Dallas, Miami</div>
          </div>
          <div className="p-3 rounded-lg bg-gray-800/50">
            <div className="text-2xl mb-1">🇬🇧</div>
            <div className="text-sm font-bold text-white">UK</div>
            <div className="text-xs text-gray-400">2 sites</div>
            <div className="text-xs text-gray-500">London, Newcastle</div>
          </div>
          <div className="p-3 rounded-lg bg-gray-800/50">
            <div className="text-2xl mb-1">🇨🇦</div>
            <div className="text-sm font-bold text-white">Canada</div>
            <div className="text-xs text-gray-400">1 site</div>
            <div className="text-xs text-gray-500">Toronto</div>
          </div>
          <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20">
            <div className="text-2xl mb-1">🇦🇪</div>
            <div className="text-sm font-bold text-amber-400">UAE</div>
            <div className="text-xs text-gray-400">1 site</div>
            <div className="text-xs text-amber-400">Abu Dhabi</div>
          </div>
        </div>
      </div>
    </section>
  );
}
