export default function EthicalConcerns() {
  return (
    <section id="ethical-concerns" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">⚠️</span> Ethical Concerns
      </h2>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Animal Testing: The UC Davis Monkey Experiments</h3>
          <p className="mb-4">
            Between <strong className="text-white">2017 and 2020</strong>, Neuralink employees conducted invasive,
            often deadly experiments on rhesus macaque monkeys at the University of California, Davis.
            The experiments involved surgically implanting electrodes into the monkeys' brains to test
            the company's brain-computer interface technology.
          </p>

          <div className="p-5 rounded-xl bg-red-900/10 border border-red-800/20 mb-4">
            <h4 className="font-bold text-red-400 text-sm mb-3">Key Facts from Investigations:</h4>
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="p-3 rounded-lg bg-gray-900/50">
                <div className="text-2xl font-bold text-red-400 mb-1">23</div>
                <div className="text-xs text-gray-400">Monkeys used in experiments</div>
              </div>
              <div className="p-3 rounded-lg bg-gray-900/50">
                <div className="text-2xl font-bold text-red-400 mb-1">15</div>
                <div className="text-xs text-gray-400">Monkeys who died (65% mortality)</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-red-900/10 border border-red-800/20 mb-4">
            <h4 className="font-bold text-red-400 text-sm mb-2">Documented Complications (from UC Davis veterinary records obtained by WIRED and PCRM):</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Bloody diarrhea</strong> — documented in multiple animals post-surgery</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Partial paralysis</strong> — animals lost motor function after procedures</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Cerebral edema ("brain swelling")</strong> — a life-threatening condition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Seizures</strong> — documented in multiple animals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Infections</strong> — both fungal and bacterial infections took root after surgeries</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Self-mutilation</strong> — monkeys scratching at surgical sites until they drew blood, yanking on connectors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">•</span>
                <span><strong className="text-white">Device failures</strong> — internal parts of devices breaking off during implantation</span>
              </li>
            </ul>
          </div>

          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 mb-4">
            <h4 className="font-bold text-white text-sm mb-2">Specific Case: "Animal 20" (December 2019)</h4>
            <p className="text-sm text-gray-400">
              In an experimental surgery to determine the "survivability" of an implant, an internal part
              of the device <strong className="text-white">"broke off"</strong> while being implanted. Overnight,
              researchers observed the monkey scratching at the surgical site, which emitted a bloody
              discharge, and yanking on a connector that eventually dislodged part of the device. A surgery
              to repair the issue was carried out the following day, yet fungal and bacterial infections
              took root.
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Source: UC Davis veterinary records cited by the Physicians Committee, obtained by WIRED through California public records request
            </p>
          </div>

          <div className="p-4 rounded-lg bg-amber-900/10 border border-amber-800/20 mb-4">
            <h4 className="font-bold text-amber-400 text-sm mb-2">Musk's Response vs. Evidence</h4>
            <p className="text-sm text-gray-400 mb-2">
              Elon Musk claimed that "no primates died as a result of Neuralink's implants" and stated
              the monkeys had preexisting conditions. However, the veterinary records and investigations
              by WIRED, Reuters, and the Physicians Committee for Responsible Medicine (PCRM) directly
              contradict this.
            </p>
            <p className="text-sm text-gray-400">
              Neuralink acknowledged that monkeys died as part of testing procedures but denied
              allegations of animal cruelty. The company has fought to keep photos and videos of the
              dead monkeys secret, even though the experiments took place at a public university.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Federal Investigations</h3>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
              <h4 className="font-bold text-white text-sm mb-2">USDA Investigation (2022)</h4>
              <p className="text-sm text-gray-400">
                The U.S. Department of Agriculture launched an investigation into potential Animal Welfare
                Act violations at Neuralink's testing facilities. The probe focused on how researchers
                treated and tested animals during the UC Davis experiments.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
              <h4 className="font-bold text-white text-sm mb-2">FDA Lab Inspection (June 2023)</h4>
              <p className="text-sm text-gray-400">
                FDA inspectors found quality control issues at Neuralink's animal lab between June 12-22,
                2023. Inspectors were unable to locate required calibration records for pH meters, vital
                signs monitors, and other equipment. This was reported by Reuters after Neuralink had
                already received FDA clearance for human trials.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
              <h4 className="font-bold text-white text-sm mb-2">Internal Employee Backlash</h4>
              <p className="text-sm text-gray-400">
                Reuters reported that internal Neuralink employees raised concerns about animal suffering
                and rushed testing timelines. The employee backlash, combined with the federal investigations,
                led to significant reputational damage for the company.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">Connection to Human Trials</h3>
          <p className="mb-4">
            The animal testing controversy directly connects to the human trials in several ways:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>The FDA's initial rejection of Neuralink's human trial application in 2022 cited safety concerns partly derived from animal testing data</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Patient 1 (Noland Arbaugh) experienced 85% thread retraction — the same wire displacement issues that were documented in animal testing</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>The "fix" for thread retraction was a software update (turning up sensitivity on remaining threads) rather than addressing the underlying hardware problem — similar to how animal complications were managed rather than prevented</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>The pattern of controlling information (fighting to keep monkey photos secret, inconsistent patient disclosure) raises questions about what else might be hidden</span>
            </li>
          </ul>
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
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Patient 4's GoFundMe — where a trial participant was begging for rent money 4 months after surgery — raises questions about whether participants understand the full financial and physical burden</span>
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
          <h3 className="text-lg font-bold text-white mb-3">Neural Data Ownership & Privacy</h3>
          <p className="mb-4">
            Neuroethicist <strong className="text-white">Marcello Ienca</strong>, who co-originated "neurorights" in 2017,
            has been particularly vocal about Neuralink:
          </p>
          <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 my-4">
            "It's the only company that has clearly stated it wants to implant brain chips in millions
            of people for nonmedical purposes — that is, solely to improve their performance."
            <footer className="text-xs text-gray-500 mt-2 not-italic">— Marcello Ienca, 2025 interview</footer>
          </blockquote>
          <div className="grid gap-3 sm:grid-cols-2 mt-4">
            <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Brain Data:</strong> Every time a patient thinks about
                moving a cursor, their brain activity is recorded, transmitted, and stored. Who owns it?
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">HIPAA Gap:</strong> HIPAA was passed in 1996, decades
                before brain-computer interfaces existed. Current laws don't protect neural data.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Musk Ecosystem:</strong> The company recording your thoughts
                is owned by the same person who owns your social platform (X), AI company (xAI), and
                self-driving cars (Tesla).
              </p>
            </div>
            <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700">
              <p className="text-sm text-gray-400">
                <strong className="text-white">Researcher Consensus:</strong> A 2020 survey by Naufel & Klein
                found BCI researchers themselves feel current laws are inadequate to protect neural data.
              </p>
            </div>
          </div>
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
                <strong className="text-white">Hacking Risk:</strong> A wireless brain implant creates
                a new attack surface for malicious actors.
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
                <strong className="text-white">Surveillance Paradox:</strong> Patients are under the most
                intimate surveillance imaginable (1,024 electrodes monitoring brain activity), yet we
                have minimal systematic surveillance of patient outcomes and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
