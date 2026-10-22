export default function VoiceTrial() {
  return (
    <section id="voice-trial" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">🗣️</span> VOICE Trial — Dallas, TX
      </h2>

      <div className="p-4 rounded-lg bg-purple-900/20 border border-purple-800/30 mb-6">
        <p className="text-purple-300 text-sm">
          <strong>Trial ID:</strong> NCT07224256 | <strong>Site:</strong> UT Southwestern Medical Center, Dallas, TX | <strong>Type:</strong> Early Feasibility Study
        </p>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">What is the VOICE Trial?</h3>
          <p className="mb-4">
            The VOICE trial (study identifier NCT07224256) is an <strong className="text-white">Early Feasibility Study</strong> designed
            to evaluate the initial clinical safety and efficacy of Neuralink's N1 Implant and R1 System
            for speech restoration. It is being conducted at <strong className="text-white">UT Southwestern Medical Center</strong> in
            Dallas, Texas.
          </p>
          <p>
            This trial specifically targets patients with severe speech impairment from conditions including
            ALS, stroke, spinal cord injury, or other neurological conditions. The N1 implant is placed
            in the brain's speech cortex to read neural activity associated with imagined speech and
            convert it into text or synthesized voice output.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Dallas Connection</h3>
          <p className="mb-4">
            UT Southwestern Medical Center in Dallas was selected as the site for Neuralink's speech-specific
            trial. This is significant because:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-purple-400">•</span>
              <span>It's the <strong className="text-white">only site</strong> running the VOICE trial specifically</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">•</span>
              <span>The trial involves <strong className="text-white">surgery on the speech cortex</strong> — a more invasive and sensitive brain region than the motor cortex used in PRIME</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-purple-400">•</span>
              <span>As of January 2026, at least <strong className="text-white">2 patients</strong> have been implanted in the VOICE trial</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Patient Results</h3>
          <p className="mb-4">
            Neuralink has demonstrated results from VOICE trial participants, including:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 my-4">
            <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
              <h4 className="font-bold text-purple-400 text-sm mb-2">Patient 7 (ALS Patient)</h4>
              <p className="text-sm text-gray-400">
                An ALS patient whose speech has deteriorated was able to communicate through a
                computer-generated version of his own voice. The implant reads brain signals tied
                to speech and decodes them — described by the patient as "like a gift from God."
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
              <h4 className="font-bold text-purple-400 text-sm mb-2">Technology Demonstration</h4>
              <p className="text-sm text-gray-400">
                The system uses AI (including Grok) to synthesize speech in the patient's own voice
                from decoded neural signals. Patients can simply think the words and the system
                decodes them into audible speech.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">How It Works</h3>
          <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4 items-center text-center">
              <div className="flex-1 p-3 rounded-lg bg-purple-500/10">
                <div className="text-2xl mb-1">🧠</div>
                <p className="text-xs text-gray-400">Patient imagines speech</p>
              </div>
              <span className="text-gray-600 hidden sm:block">→</span>
              <div className="flex-1 p-3 rounded-lg bg-purple-500/10">
                <div className="text-2xl mb-1">⚡</div>
                <p className="text-xs text-gray-400">N1 implant reads speech cortex neurons</p>
              </div>
              <span className="text-gray-600 hidden sm:block">→</span>
              <div className="flex-1 p-3 rounded-lg bg-purple-500/10">
                <div className="text-2xl mb-1">🤖</div>
                <p className="text-xs text-gray-400">AI decodes neural signals to text</p>
              </div>
              <span className="text-gray-600 hidden sm:block">→</span>
              <div className="flex-1 p-3 rounded-lg bg-purple-500/10">
                <div className="text-2xl mb-1">🔊</div>
                <p className="text-xs text-gray-400">Synthesized voice output</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
          <h4 className="font-bold text-white text-sm mb-2">VOICE Trial Details</h4>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-700">
              <tr>
                <td className="py-2 text-gray-400">Study ID</td>
                <td className="py-2 text-white font-mono">NCT07224256</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400">Site</td>
                <td className="py-2 text-white">UT Southwestern Medical Center, Dallas, TX</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400">Device</td>
                <td className="py-2 text-white">N1 Implant + R1 System</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400">Target Area</td>
                <td className="py-2 text-white">Speech Cortex (Motor Speech Area)</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400">Patients (as of Jan 2026)</td>
                <td className="py-2 text-white">2+ implanted</td>
              </tr>
              <tr>
                <td className="py-2 text-gray-400">Conditions</td>
                <td className="py-2 text-white">ALS, stroke, spinal cord injury, other</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
