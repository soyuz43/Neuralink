export default function EthicalConcerns() {
  return (
    <section id="ethical-concerns" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">⚠️</span> Ethical Concerns
      </h2>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Animal Testing Controversy</h3>
          <p className="mb-4">
            Neuralink has faced significant criticism over its animal testing practices. Since 2017,
            the company has subjected animals — including monkeys, pigs, rats, and sheep — to invasive
            brain experiments.
          </p>
          <div className="p-4 rounded-lg bg-red-900/10 border border-red-800/20 mb-4">
            <h4 className="font-bold text-red-400 text-sm mb-2">Key Findings from Investigations:</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Monkeys died as part of testing procedures, with some experiencing seizures, infections, and paralysis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Wired investigation revealed "grisly complications" of brain implants in monkeys, including brain swelling and infection</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Federal investigation launched for potential Animal Welfare Act violations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>Internal employees raised concerns about animal suffering and rushed testing timelines</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span>FDA inspectors found quality control issues including missing calibration records</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Informed Consent Concerns</h3>
          <p className="mb-4">
            Ethicists have raised concerns about whether patients with severe neurological conditions
            can truly provide informed consent for such an experimental procedure:
          </p>
          <ul className="space-y-2 mb-4">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Patients with ALS or severe paralysis may be desperate enough to accept risks they wouldn't otherwise consider</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>The "false hope" problem — critics argue Neuralink's public messaging may overstate benefits</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>The Hastings Center noted concerns about "false hope to countless thousands of people with serious neurological disabilities"</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Regulatory Arbitrage</h3>
          <p className="mb-4">
            The expansion to the UAE raises significant questions about "regulatory arbitrage" — the
            practice of conducting research in jurisdictions with less stringent oversight:
          </p>
          <div className="p-4 rounded-lg bg-amber-900/10 border border-amber-800/20 mb-4">
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>The UAE-PRIME trial operates under UAE regulatory authority, not the FDA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Questions about whether UAE regulatory standards provide equivalent patient protections</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>The Department of Health Abu Dhabi's direct partnership suggests government-level facilitation that may expedite approval</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">•</span>
                <span>Critics ask: Would these trials have been possible under FDA oversight given the agency's initial rejection?</span>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Lack of Internal Ethics Oversight</h3>
          <p className="mb-4">
            According to the American Academy of Neurology, Neuralink has drawn criticism for its
            apparent lack of formal ethics structures:
          </p>
          <blockquote className="border-l-4 border-purple-500 pl-4 italic text-gray-400 my-4">
            "It doesn't have, as far as we know, an internal ethics board or a code of ethics.
            We don't know what goes on behind the closed doors."
            <footer className="text-xs text-gray-500 mt-2 not-italic">— Dr. Paul Wolpe, neuroethicist</footer>
          </blockquote>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Long-term Unknowns</h3>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Brain Degradation:</strong> What happens to the implant
                and surrounding tissue over 10, 20, or 30 years?
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Data Privacy:</strong> Who owns and controls the neural
                data being collected from patients' brains?
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Identity Changes:</strong> Can altering brain activity
                through a BCI change a person's sense of self?
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Hacking Risk:</strong> A wireless brain implant creates
                a new attack surface for malicious actors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
