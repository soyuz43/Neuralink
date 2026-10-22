export default function FDATimeline() {
  const events = [
    {
      date: '2016',
      title: 'Neuralink Founded',
      description: 'Elon Musk co-founds Neuralink with the goal of developing implantable brain-computer interfaces.',
      type: 'info',
    },
    {
      date: '2019',
      title: 'First Animal Demonstrations',
      description: 'Neuralink demonstrates its brain implant in pigs. Later shows monkeys playing video games with their minds.',
      type: 'info',
    },
    {
      date: 'Early 2022',
      title: 'FDA Application Submitted',
      description: 'Neuralink submits its first application to the FDA for permission to begin human clinical trials.',
      type: 'neutral',
    },
    {
      date: '2022',
      title: '❌ FDA REJECTS Application',
      description: 'The FDA rejects Neuralink\'s application citing "dozens of deficiencies." Key concerns include: lithium battery safety (risk of leaking into brain tissue), wire migration/displacement issues, and insufficient animal testing safety data.',
      type: 'negative',
    },
    {
      date: 'Dec 2022',
      title: 'Federal Investigation Revealed',
      description: 'Reuters and The Guardian report that Neuralink is under federal investigation for potential Animal Welfare Act violations. Internal employees raise concerns about animal suffering.',
      type: 'negative',
    },
    {
      date: 'Mid 2023',
      title: 'FDA Finds Lab Issues',
      description: 'FDA inspectors find quality control issues at Neuralink\'s animal lab, including inability to locate required calibration records for equipment.',
      type: 'negative',
    },
    {
      date: 'May 2023',
      title: '✅ FDA Clears Human Trials',
      description: 'After addressing concerns, the FDA grants Neuralink clearance to begin human trials under an Investigational Device Exemption (IDE). This is NOT approval — it\'s permission to test.',
      type: 'positive',
    },
    {
      date: 'Jan 2024',
      title: 'First Human Implant (PRIME)',
      description: 'Noland Arbaugh becomes the first human to receive a Neuralink implant at Barrow Neurological Institute in Phoenix, AZ. The PRIME trial focuses on device control for paralysis patients.',
      type: 'positive',
    },
    {
      date: '2024-2025',
      title: 'Trial Expansion',
      description: 'Neuralink expands to multiple sites: Miami (April 2025), Toronto (August 2025), London (October 2025). The company implants 20+ patients across all trials.',
      type: 'info',
    },
    {
      date: '2025',
      title: 'VOICE Trial Begins (Dallas)',
      description: 'The VOICE trial for speech restoration begins at UT Southwestern Medical Center in Dallas, TX. This involves surgery on the speech cortex — a new and more sensitive brain area.',
      type: 'neutral',
    },
    {
      date: '2025',
      title: 'FDA Breakthrough Device Designation',
      description: 'Neuralink receives FDA Breakthrough Device Designation for its speech restoration technology. This expedites review but is NOT approval for commercial use.',
      type: 'positive',
    },
    {
      date: '2025-2026',
      title: '🇦🇪 UAE-PRIME Launches',
      description: 'Neuralink launches its first international trial at Cleveland Clinic Abu Dhabi in partnership with the UAE Department of Health. This trial includes speech impairment patients — operating under UAE regulatory authority, not FDA.',
      type: 'warning',
    },
    {
      date: 'Jan 2026',
      title: 'VOICE Trial Demonstrations',
      description: 'Neuralink demonstrates VOICE trial results: ALS patients communicating through AI-synthesized speech. Patient 7 describes the implant as "like a gift from God."',
      type: 'positive',
    },
    {
      date: '2026',
      title: 'Current Status',
      description: '27+ patients implanted across 7 sites in 4 countries. Devices remain investigational and NOT FDA-approved. Mass production announced for 2026.',
      type: 'info',
    },
  ];

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'positive': return 'border-green-500/30 bg-green-500/5';
      case 'negative': return 'border-red-500/30 bg-red-500/5';
      case 'warning': return 'border-amber-500/30 bg-amber-500/5';
      case 'neutral': return 'border-blue-500/30 bg-blue-500/5';
      default: return 'border-gray-700 bg-gray-800/30';
    }
  };

  const getDotColor = (type: string) => {
    switch (type) {
      case 'positive': return 'bg-green-400';
      case 'negative': return 'bg-red-400';
      case 'warning': return 'bg-amber-400';
      case 'neutral': return 'bg-blue-400';
      default: return 'bg-gray-400';
    }
  };

  return (
    <section id="fda-timeline" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">⚖️</span> FDA Regulatory Timeline
      </h2>

      <p className="text-gray-400 mb-8 leading-relaxed">
        Neuralink's path to human trials has been marked by regulatory challenges. The FDA initially
        rejected their application, and the company remains under various levels of scrutiny. Understanding
        this timeline is crucial for evaluating the significance of the UAE-PRIME trial.
      </p>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700" />

        <div className="space-y-6">
          {events.map((event, index) => (
            <div key={index} className="relative pl-10">
              {/* Dot */}
              <div className={`absolute left-2.5 top-2 w-3 h-3 rounded-full ${getDotColor(event.type)} ring-4 ring-gray-950`} />

              {/* Content */}
              <div className={`p-4 rounded-lg border ${getTypeStyles(event.type)}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-gray-500">{event.date}</span>
                </div>
                <h3 className="font-bold text-white text-sm mb-1">{event.title}</h3>
                <p className="text-sm text-gray-400">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
        <h3 className="font-bold text-white text-sm mb-3">Key Distinction</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="p-3 rounded-lg bg-green-500/5 border border-green-500/20">
            <p className="text-xs font-bold text-green-400 mb-1">FDA Clearance (IDE)</p>
            <p className="text-xs text-gray-400">
              Permission to conduct research/investigational trials in humans. The device is
              NOT approved for general use.
            </p>
          </div>
          <div className="p-3 rounded-lg bg-red-500/5 border border-red-500/20">
            <p className="text-xs font-bold text-red-400 mb-1">FDA Approval (PMA/510k)</p>
            <p className="text-xs text-gray-400">
              Formal authorization to market the device to consumers. Neuralink has NOT
              received this — and is likely years away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
