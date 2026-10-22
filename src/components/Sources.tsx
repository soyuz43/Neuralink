export default function Sources() {
  const sources = [
    {
      category: 'Clinical Trials & Official',
      links: [
        { title: 'Neuralink Clinical Trials Page', url: 'https://neuralink.com/trials/' },
        { title: 'Neuralink Speech Restoration Trial', url: 'https://neuralink.com/trials/speech-restoration/' },
        { title: 'VOICE Trial (NCT07224256) on ClinicalTrials.gov', url: 'https://clinicaltrials.gov/search?spons=Neuralink' },
        { title: 'Neuralink Trial Sites List (NeuraPod)', url: 'https://www.neurapod.com/clinical-trial-sites-list' },
      ],
    },
    {
      category: 'UAE-PRIME Trial',
      links: [
        { title: 'Bloomberg Law: Neuralink to Launch Brain Implant Clinical Trial in Abu Dhabi', url: 'https://news.bloomberglaw.com/tech-and-telecom-law/neuralink-to-launch-brain-implant-clinical-trial-in-abu-dhabi' },
        { title: 'Teslarati: Neuralink Blindsight human trials expected in UAE', url: 'https://www.teslarati.com/neuralink-blindsight-human-trials/' },
        { title: 'Khaleej Times: UAE\'s first brain chip trials in Abu Dhabi', url: 'https://www.khaleejtimes.com/uae/neuralink-brain-chips-trial-abu-dhabi-cleveland-clinic' },
        { title: 'Cleveland Clinic Abu Dhabi: Brain-Computer Interface Systems', url: 'https://www.clevelandclinicabudhabi.ae/en/health-library/health-resources/treatments-and-procedures/shaping-the-future-of-neurological-care' },
      ],
    },
    {
      category: 'FDA & Regulatory',
      links: [
        { title: 'Reuters: U.S. regulators rejected Neuralink\'s bid', url: 'https://www.reuters.com/investigates/special-report/neuralink-musk-fda/' },
        { title: 'The Guardian: Neuralink approved for human testing', url: 'https://www.theguardian.com/technology/2023/jun/04/elon-musk-neuralink-approved-human-testing-concern' },
        { title: 'TechCrunch: Neuralink human testing received FDA rejection', url: 'https://techcrunch.com/2023/03/02/neuralink-human-testing-has-reportedly-received-one-fda-rejection-already/' },
        { title: 'CNBC: Neuralink has faced issues with its wires for years', url: 'https://www.cnbc.com/2024/05/15/neuralink-has-faced-issues-with-its-wires-for-years-reuters-sources.html' },
      ],
    },
    {
      category: 'Ethics & Animal Testing',
      links: [
        { title: 'The Guardian: Neuralink faces federal inquiry after killing animals', url: 'https://www.theguardian.com/technology/2022/dec/05/neuralink-animal-testing-elon-musk-investigation' },
        { title: 'Reuters: Neuralink faces federal probe, employee backlash', url: 'https://www.reuters.com/technology/musks-neuralink-faces-federal-probe-employee-backlash-over-animal-tests-2022-12-05/' },
        { title: 'PCRM: Neuralink\'s Cruel Brain Experiments', url: 'https://www.pcrm.org/ethical-science/animals-in-medical-research/cruel-brain-experiments' },
        { title: 'Neurology Today: Ethical Questions Swirl Around Neuralink', url: 'https://neurologytoday.aan.com/doi/10.1097/01.NT.0001022988.26412.f4' },
      ],
    },
    {
      category: 'Research & Analysis',
      links: [
        { title: 'Nature: Long-term independent use of intracortical BCI', url: 'https://www.nature.com/articles/s41591-026-04414-6' },
        { title: 'Frontiers: Neuralink\'s BCIs - medical innovations & ethical concerns', url: 'https://www.frontiersin.org/journals/human-dynamics/articles/10.3389/fhumd.2025.1553905/full' },
        { title: 'University of Chicago: The future of medicine or ethical nightmare?', url: 'https://voices.uchicago.edu/triplehelix/2025/01/02/the-future-of-medicine-or-an-ethical-nightmare-elon-musks-neuralink-and-the-advent-of-brain-machine-interfaces/' },
        { title: 'The Hastings Center: The Neuralink Patient Behind the Musk', url: 'https://www.thehastingscenter.org/the-neuralink-patient-behind-the-musk/' },
      ],
    },
    {
      category: 'News & Updates',
      links: [
        { title: 'NeuraPod: Neuralink Begins VOICE Human Trial', url: 'https://www.neurapod.com/blog/elon-musks-neuralink-successfully-begins-voice-human-trial-for-speech-restoration' },
        { title: 'Reuters: Neuralink plans brain implant trial for speech impairments', url: 'https://www.reuters.com/business/healthcare-pharmaceuticals/elon-musks-neuralink-plans-brain-implant-trial-speech-impairments-2025-09-19/' },
        { title: 'Neuralink: Two Years of Telepathy Updates', url: 'https://neuralink.com/updates/two-years-of-telepathy/' },
        { title: 'Neuralink Wikipedia', url: 'https://en.wikipedia.org/wiki/Neuralink' },
      ],
    },
  ];

  return (
    <section id="sources" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">📚</span> Sources & References
      </h2>

      <p className="text-gray-400 mb-8 leading-relaxed">
        All information on this page is compiled from publicly available sources including news reports,
        clinical trial registries, academic publications, and official company statements. This is an
        independent documentation project and is not affiliated with Neuralink Corp.
      </p>

      <div className="space-y-8">
        {sources.map((group) => (
          <div key={group.category}>
            <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">
              {group.category}
            </h3>
            <ul className="space-y-2">
              {group.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors group"
                  >
                    <span className="text-gray-600 group-hover:text-blue-400 mt-0.5">↗</span>
                    <span className="group-hover:underline">{link.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 rounded-xl bg-gray-800/30 border border-gray-700">
        <h3 className="font-bold text-white mb-3">About This Documentation</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-4">
          This site was created to document and analyze the publicly available information about
          Neuralink's clinical trials, with particular focus on:
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The UAE-PRIME speech trial at Cleveland Clinic Abu Dhabi and its regulatory implications</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The VOICE trial at UT Southwestern Medical Center in Dallas, TX</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The speech cortex surgery procedures and associated risks</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The FDA regulatory history and ethical concerns</span>
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-4">
          This documentation is for informational and educational purposes only. It does not constitute
          medical advice. Neuralink devices are investigational and have not been approved by the FDA
          or other regulatory authorities.
        </p>
      </div>
    </section>
  );
}
