export default function PatientFour() {
  return (
    <section id="patient-four" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">🔍</span> Case Study: Patient 4 & the GoFundMe
      </h2>

      <div className="p-4 rounded-lg bg-red-900/20 border border-red-800/30 mb-6">
        <p className="text-red-300 text-sm font-medium mb-1">⚠️ This section documents verified facts and raises questions</p>
        <p className="text-red-200/80 text-sm">
          This case study is based on publicly available information including the GoFundMe campaign,
          Neuralink's own promotional materials, and investigative reporting by The Drey Dossier.
          We do not know the full picture, but the verified facts raise legitimate ethical questions.
        </p>
      </div>

      <div className="space-y-6 text-gray-300 leading-relaxed">
        <div>
          <h3 className="text-lg font-bold text-white mb-3">Who is Patient 4?</h3>
          <p className="mb-4">
            <strong className="text-white">Michael "Mike" Melgarejo</strong> is Neuralink's Patient 4,
            an advanced ALS patient and former survey technician who received his implant in
            <strong className="text-white"> February 2025</strong> at Barrow Neurological Institute in Phoenix, AZ.
            He was approved for the trial specifically because of how aggressive his ALS was.
          </p>
          <p>
            Unlike other Neuralink patients who quickly created social media accounts to post positive
            updates, Melgarejo has <strong className="text-white">no known public social media footprint</strong>,
            despite being featured in Neuralink promotional clips.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">The Timeline Discrepancy</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20">
              <h4 className="font-bold text-blue-400 text-sm mb-2">📹 Neuralink's Narrative (June 2025)</h4>
              <p className="text-sm text-gray-400">
                In Neuralink's Summer 2025 funding update video, Mike appears talking enthusiastically
                about how the implant enabled him to work full-time to support his family. Neuralink
                features him in their pitch to investors as a success story.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Source: Neuralink Summer 2025 Update (YouTube)
              </p>
            </div>
            <div className="p-4 rounded-lg bg-red-500/5 border border-red-500/20">
              <h4 className="font-bold text-red-400 text-sm mb-2">💔 GoFundMe Reality (June 2025)</h4>
              <p className="text-sm text-gray-400">
                In the <strong>same month</strong>, a GoFundMe titled "Those things we do, so others may live"
                was created stating Mike was "not in a good place—mentally, financially, physically,
                or emotionally" and "He's ready to give up on life, people."
              </p>
              <p className="text-xs text-gray-500 mt-2">
                Source: GoFundMe campaign created June 23, 2025
              </p>
            </div>
          </div>
          <div className="mt-4 p-4 rounded-lg bg-amber-900/10 border border-amber-800/20">
            <p className="text-sm text-amber-300">
              <strong>Key Question:</strong> Promotional footage and crisis fundraising existing in the
              same month with zero explanation. Was the video old footage presented as current? Did
              something change rapidly? The lack of systematic tracking makes it impossible to know.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">The GoFundMe Details</h3>
          <div className="p-5 rounded-xl bg-gray-800/30 border border-gray-700">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-gray-700/50">
                <tr>
                  <td className="py-2 text-gray-500">Campaign Title</td>
                  <td className="py-2 text-white">"Those things we do, so others may live"</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-500">Created</td>
                  <td className="py-2 text-white">June 23, 2025</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-500">Organizer</td>
                  <td className="py-2 text-white">Ryan Biggs (states he and Mike met as gaming friends playing Battlefield 4 on Xbox)</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-500">Amount Raised</td>
                  <td className="py-2 text-white">Over $21,000</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-500">Notable Donor</td>
                  <td className="py-2 text-white">
                    <span className="text-red-400 font-bold">$3,000 from Shivon Zilis</span> — Director of Operations and Special Projects at Neuralink, mother of three of Elon Musk's children
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-4 p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <h4 className="font-bold text-white text-sm mb-2">Direct Quotes from GoFundMe (verified):</h4>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-400 my-3">
              "He's ready to give up on life, people. Not an understatement. Everything has been taken
              from him. He's not in a good place mentally, financially, physically, or emotionally."
            </blockquote>
            <p className="text-sm text-gray-400 mb-2">
              The campaign included screenshots showing Mike asking for rent money in Discord chats:
            </p>
            <blockquote className="border-l-4 border-red-500 pl-4 italic text-gray-400">
              "I hate to ask this, but I'm stuck in an embarrassing and tight spot. Can I borrow some
              cash? Rent's coming up and we're short. I'm so sorry for asking."
            </blockquote>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">The Organizer: Ryan Biggs</h3>
          <p className="mb-4">
            Public professional records show Ryan Biggs works in risk management for
            <strong className="text-white"> Marsh McLennan</strong>, one of the world's largest insurance
            brokers — the kind that handles corporate liability for medical device manufacturers.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>His LinkedIn had been dormant for six years with no posts or updates</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Suddenly, four months ago, three posts about Mike's GoFundMe appeared in quick succession</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-400">•</span>
              <span>Each post got around 10 shares without any comments or likes — unusual engagement for a personal crisis shared with colleagues</span>
            </li>
          </ul>

          <div className="mt-4 p-4 rounded-lg bg-amber-900/10 border border-amber-800/20">
            <h4 className="font-bold text-amber-400 text-sm mb-2">The "Battlefield 4" Claim (Unverified)</h4>
            <p className="text-sm text-gray-400 mb-2">
              Ryan Biggs posted: "Neuralink saw the GoFundMe and they are going to make Battlefield 4
              compatible with Neuralink. An absolute miracle and storybook ending."
            </p>
            <p className="text-sm text-red-400">
              <strong>⚠️ There is NO public record, press release, or technical evidence from Neuralink
              to support this claim.</strong> It appears to be either a rumor, a misunderstanding, or
              an unverified claim made by the fundraiser organizer.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">The Ethical Concerns</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-red-900/10 border border-red-800/20">
              <h4 className="font-bold text-red-400 text-sm mb-2">1. Conflict of Interest</h4>
              <p className="text-sm text-gray-400">
                It is highly unusual for a senior executive of a clinical trial sponsor (Shivon Zilis)
                to make a large, direct personal donation to a patient's personal crisis fundraiser.
                Standard clinical trial protocols typically have mechanisms to cover trial-related adverse
                events or patient hardships. A personal donation blurs the line between corporate
                responsibility and personal charity, potentially complicating informed consent and
                regulatory reporting.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-orange-900/10 border border-orange-800/20">
              <h4 className="font-bold text-orange-400 text-sm mb-2">2. Adverse Event Reporting</h4>
              <p className="text-sm text-gray-400">
                If a patient is experiencing severe mental health crises (e.g., suicidal ideation)
                shortly after experimental brain surgery, this qualifies as a
                <strong className="text-white"> Serious Adverse Event (SAE)</strong>. The FDA requires
                trial sponsors to report SAEs under <span className="font-mono text-xs">21 CFR 312.32</span>.
                If this was not reported, it would be a major regulatory violation.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-yellow-900/10 border border-yellow-800/20">
              <h4 className="font-bold text-yellow-400 text-sm mb-2">3. Financial Exploitation</h4>
              <p className="text-sm text-gray-400">
                Trial participants generate invaluable data that boosts a company's valuation. If a patient
                is struggling to pay rent while their data is being used to secure hundreds of millions
                in funding (like Neuralink's recent $650M raise), it highlights a stark ethical imbalance
                in how experimental subjects are compensated and protected.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-purple-900/10 border border-purple-800/20">
              <h4 className="font-bold text-purple-400 text-sm mb-2">4. The "Storybook Ending" Problem</h4>
              <p className="text-sm text-gray-400">
                The organizer described a "storybook ending" — but the ending wasn't about Mike's
                wellbeing or recovery. It was about a claimed software compatibility that can't be
                verified. That's not how you describe someone's recovery from suicidal ideation unless
                the point was never actually Mike's wellbeing in the first place.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white mb-3">What We Don't Know</h3>
          <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>Whether Mike's crisis was caused by the implant or is the natural progression of aggressive ALS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>Whether this was reported as a Serious Adverse Event to the FDA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>Whether the Neuralink promotional video was current or old footage</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>Mike's current status — his family has pushed back against "missing person" rumors, clarifying his absence is due to ALS progression and privacy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-500">•</span>
                <span>Whether Shivon Zilis's donation was reported under FDA financial disclosure requirements (21 CFR Part 54)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-gray-800/30 border border-gray-700">
          <h4 className="font-bold text-white text-sm mb-2">Sources for This Section:</h4>
          <ul className="space-y-1 text-xs text-gray-500">
            <li>• GoFundMe: "Those things we do, so others may live" (gofundme.com/f/those-things-we-do-so-others-may-live)</li>
            <li>• The Drey Dossier: "Who TF Is In My Head?? | Part 4: Where TF Is Patient Four?" (Substack, Nov 7, 2025)</li>
            <li>• Neuralink Summer 2025 Update (YouTube)</li>
            <li>• Distractify: "What Happened to Neuralink Patient 4?"</li>
            <li>• NeuraPod Patient Timeline (neurapod.com/neuralink-patient-timeline)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
