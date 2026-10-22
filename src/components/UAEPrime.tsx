export default function UAEPrime() {
  return (
    <section id="uae-prime" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">🇦🇪</span> UAE-PRIME: The Abu Dhabi Trial
      </h2>

      <div className="p-4 rounded-lg bg-amber-900/20 border border-amber-800/30 mb-6">
        <p className="text-amber-300 text-sm font-medium mb-1">⚠️ Key Controversy</p>
        <p className="text-amber-200/80 text-sm">
          The UAE-PRIME trial represents Neuralink's first clinical trial outside the United States.
          Questions have been raised about whether this expansion was motivated by the desire to conduct
          speech trials in a jurisdiction with different regulatory requirements than the FDA.
        </p>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">What is UAE-PRIME?</h3>
          <p className="mb-4">
            UAE-PRIME is Neuralink's first international clinical trial, launched in partnership with
            <strong className="text-white"> Cleveland Clinic Abu Dhabi</strong> and the
            <strong className="text-white"> Department of Health Abu Dhabi</strong>. The trial explores
            how individuals with motor and speech impairment can use thought to control devices and
            communicate.
          </p>
          <p>
            According to Bloomberg Law, Neuralink announced it would study "how individuals with motor
            and speech impairment can use thought to control devices & communicate" through this
            partnership — making it the region's first brain-computer interface (BCI) study.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">The FDA Authorization Question</h3>
          <p className="mb-4">
            Neuralink's devices are <strong className="text-white">investigational and have NOT been approved
            by the FDA</strong>. The company received FDA clearance for its initial PRIME trial (device
            control for paralysis) in May 2023 under an Investigational Device Exemption (IDE). However,
            the VOICE trial — which involves surgery on the speech cortex — represents a new and distinct
            procedure.
          </p>

          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 my-4">
            <h4 className="font-bold text-white text-sm mb-2">Key Regulatory Facts:</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                <span>The FDA initially <strong className="text-white">rejected</strong> Neuralink's first clinical trial application in early 2022, citing "dozens of deficiencies"</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 mt-0.5">•</span>
                <span>FDA concerns included lithium battery risks, wire displacement, and animal testing quality control issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400 mt-0.5">•</span>
                <span>Neuralink received FDA Breakthrough Device Designation for speech restoration technology in 2025</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 mt-0.5">•</span>
                <span>The UAE-PRIME trial operates under UAE regulatory authority, not the FDA — raising questions about whether this was a deliberate strategy to bypass stricter U.S. oversight</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Why the UAE?</h3>
          <p className="mb-4">
            The choice of the UAE as the first international trial site is notable for several reasons:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-lg">1</span>
              <div>
                <strong className="text-white">Different Regulatory Framework:</strong>
                <p className="text-sm text-gray-400 mt-1">
                  The UAE's regulatory environment for medical devices may have different requirements
                  and timelines than the FDA. The Department of Health Abu Dhabi partnered directly
                  with Neuralink, suggesting government-level facilitation.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-lg">2</span>
              <div>
                <strong className="text-white">Speech Trial Expansion:</strong>
                <p className="text-sm text-gray-400 mt-1">
                  The UAE-PRIME trial explicitly includes speech impairment patients — the same
                  population targeted by the VOICE trial. This means speech cortex surgery could
                  be performed under UAE regulatory authority rather than FDA oversight.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-amber-400 font-bold text-lg">3</span>
              <div>
                <strong className="text-white">Strategic Partnership:</strong>
                <p className="text-sm text-gray-400 mt-1">
                  Cleveland Clinic Abu Dhabi provides institutional credibility, while the
                  Department of Health Abu Dhabi's direct involvement suggests this was a
                  strategically facilitated arrangement.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded-lg bg-red-900/20 border border-red-800/30">
          <p className="text-red-300 text-sm">
            <strong>Critical Question:</strong> Is Neuralink expanding to the UAE specifically to
            conduct speech cortex trials with less regulatory scrutiny than the FDA would require?
            The company's own disclaimer states their devices "have not been approved by the FDA
            or other regulatory authorities" — but the UAE trial operates under its own national
            framework, which critics argue may not provide equivalent patient protections.
          </p>
        </div>
      </div>
    </section>
  );
}
