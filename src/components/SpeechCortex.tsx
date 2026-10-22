export default function SpeechCortex() {
  return (
    <section id="speech-cortex" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">🧠</span> Speech Cortex Surgery
      </h2>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <p>
          The speech cortex is a region of the brain responsible for planning and executing speech.
          Neuralink's VOICE trial involves surgically implanting electrodes directly into this area
          to read neural activity associated with <strong className="text-white">imagined (silent) speech</strong> — a
          procedure that is significantly more invasive and carries different risks than the motor
          cortex implants used in the PRIME trial.
        </p>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Anatomy of the Speech Cortex</h3>
          <div className="p-5 rounded-xl bg-gray-800/30 border border-gray-700">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <h4 className="font-bold text-blue-400 text-sm mb-2">Broca's Area</h4>
                <p className="text-sm text-gray-400">
                  Located in the frontal lobe (typically left hemisphere), responsible for speech
                  production and language processing. Damage here causes expressive aphasia —
                  the inability to produce fluent speech.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-400 text-sm mb-2">Motor Speech Cortex</h4>
                <p className="text-sm text-gray-400">
                  Part of the primary motor cortex controlling muscles of the face, tongue, and
                  larynx. Neuralink targets neurons here that fire when a person imagines speaking,
                  even without physical movement.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-purple-400 text-sm mb-2">Wernicke's Area</h4>
                <p className="text-sm text-gray-400">
                  Located in the temporal lobe, involved in language comprehension. While Neuralink
                  primarily targets motor speech areas, the broader speech network is involved.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-amber-400 text-sm mb-2">Neuralink's Target</h4>
                <p className="text-sm text-gray-400">
                  The N1 implant's 64+ threads (with 1,024+ electrodes) are positioned in the
                  motor speech cortex to capture signals from ~65+ neurons involved in speech
                  planning and execution.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">The Surgical Procedure</h3>
          <p className="mb-4">
            The implantation procedure involves several critical steps:
          </p>
          <ol className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">1</span>
              <div>
                <strong className="text-white">Craniotomy:</strong>
                <p className="text-sm text-gray-400 mt-1">
                  A portion of the skull is removed to access the brain. The R1 surgical robot
                  assists in precision placement.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">2</span>
              <div>
                <strong className="text-white">Thread Insertion:</strong>
                <p className="text-sm text-gray-400 mt-1">
                  The R1 robot inserts ultra-thin flexible threads (thinner than a human hair)
                  into the speech cortex. Each thread contains multiple electrodes that record
                  neural activity.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">3</span>
              <div>
                <strong className="text-white">N1 Implant Placement:</strong>
                <p className="text-sm text-gray-400 mt-1">
                  The N1 "Link" device is embedded into the skull, flush with the bone. It
                  processes neural signals wirelessly and transmits data to external devices.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center text-xs font-bold">4</span>
              <div>
                <strong className="text-white">Calibration & Training:</strong>
                <p className="text-sm text-gray-400 mt-1">
                  The patient undergoes extensive training sessions where they imagine speaking
                  while the system learns to decode their specific neural patterns. AI models
                  are trained on their individual brain activity.
                </p>
              </div>
            </li>
          </ol>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Risks & Concerns</h3>
          <div className="grid gap-3">
            <div className="p-4 rounded-lg bg-red-900/10 border border-red-800/20">
              <h4 className="font-bold text-red-400 text-sm mb-1">Brain Tissue Damage</h4>
              <p className="text-sm text-gray-400">
                Inserting electrodes into brain tissue carries inherent risks of bleeding,
                infection, and tissue damage. The speech cortex is particularly sensitive.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-orange-900/10 border border-orange-800/20">
              <h4 className="font-bold text-orange-400 text-sm mb-1">Wire/thread Migration</h4>
              <p className="text-sm text-gray-400">
                Neuralink has faced documented issues with its threads retracting or migrating
                from their original positions. Reuters reported this has been an ongoing problem
                for years, potentially reducing the device's effectiveness over time.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
              <h4 className="font-bold text-yellow-400 text-sm mb-1">Long-term Biocompatibility</h4>
              <p className="text-sm text-gray-400">
                The long-term effects of having a foreign device embedded in brain tissue are
                not fully understood. Scar tissue formation could degrade signal quality over time.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-purple-900/10 border border-purple-800/20">
              <h4 className="font-bold text-purple-400 text-sm mb-1">Irreversibility</h4>
              <p className="text-sm text-gray-400">
                While the device can theoretically be removed, the brain tissue damage from
                implantation is permanent. Removing the device does not restore the brain to
                its pre-surgery state.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <h4 className="font-bold text-white text-sm mb-2">Speech Cortex vs. Motor Cortex</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-2 text-left text-gray-400 font-medium">Aspect</th>
                <th className="py-2 text-left text-gray-400 font-medium">Motor Cortex (PRIME)</th>
                <th className="py-2 text-left text-gray-400 font-medium">Speech Cortex (VOICE)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              <tr>
                <td className="py-2 text-gray-300">Function</td>
                <td className="py-2 text-gray-400">Movement control</td>
                <td className="py-2 text-gray-400">Speech production</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-300">Complexity</td>
                <td className="py-2 text-gray-400">Relatively simpler signals</td>
                <td className="py-2 text-gray-400">Highly complex language encoding</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-300">Risk Level</td>
                <td className="py-2 text-gray-400">Moderate</td>
                <td className="py-2 text-gray-400">Higher (language-critical area)</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-300">Accuracy Required</td>
                <td className="py-2 text-gray-400">Movement direction/intent</td>
                <td className="py-2 text-gray-400">Precise word/phoneme decoding</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
