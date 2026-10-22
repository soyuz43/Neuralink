export default function Overview() {
  return (
    <section id="overview" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">📋</span> Overview
      </h2>

      <div className="prose prose-invert max-w-none space-y-4 text-gray-300 leading-relaxed">
        <p>
          <strong className="text-white">Neuralink Corp.</strong> is an American neurotechnology company founded by Elon Musk
          in 2016, developing implantable brain-computer interfaces (BCIs). The company's goal is to create
          a generalized brain interface to restore autonomy to those with unmet medical needs and unlock
          human potential.
        </p>

        <p>
          As of 2026, Neuralink has implanted its device in <strong className="text-white">27+ patients</strong> across
          <strong className="text-white"> 7 clinical trial sites</strong> in <strong className="text-white">4 countries</strong>
          (United States, United Kingdom, Canada, and United Arab Emirates). The company runs three active
          clinical trials:
        </p>

        <div className="grid gap-4 sm:grid-cols-3 my-6">
          <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20">
            <h3 className="font-bold text-blue-400 mb-2">PRIME</h3>
            <p className="text-sm text-gray-400">
              Investigating hands-free control of computers and robotic arms for people with quadriplegia
              from ALS, brain stem stroke, or spinal cord injury.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20">
            <h3 className="font-bold text-purple-400 mb-2">VOICE</h3>
            <p className="text-sm text-gray-400">
              Studying translation of thoughts into spoken voice from a device. For people with severe
              speech impairment from ALS, stroke, spinal cord injury, or other conditions.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
            <h3 className="font-bold text-green-400 mb-2">CONVOY</h3>
            <p className="text-sm text-gray-400">
              Additional study for device control, expanding the research on how brain-computer interfaces
              can restore independence.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-red-900/20 border border-red-800/30 my-6">
          <p className="text-red-300 text-sm">
            <strong>⚠️ Critical Note:</strong> Neuralink devices are <em>investigational</em> and have
            <strong> NOT been approved</strong> by the FDA or other regulatory authorities. The company
            initially had its FDA application rejected in 2022 with "dozens of deficiencies" cited.
            It was eventually cleared for human trials in May 2023 under an Investigational Device Exemption (IDE).
          </p>
        </div>

        <p>
          The most controversial aspects of Neuralink's trials involve the <strong className="text-white">speech cortex
          surgery</strong> — where electrodes are implanted directly into the brain's speech areas to decode
          neural activity associated with imagined speech — and the expansion of trials to countries like
          the <strong className="text-white">UAE</strong>, where regulatory frameworks may differ from the FDA's requirements.
        </p>
      </div>
    </section>
  );
}
