import Card from './Card';

export default function CircumstantialTab() {
  return (
    <div className="space-y-6">
      {/* Disclaimer Banner */}
      <div className="bg-amber-900/30 border-2 border-amber-600 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="text-4xl">⚠️</div>
          <div>
            <h2 className="text-2xl font-bold text-amber-400 mb-2">CIRCUMSTANTIAL EVIDENCE</h2>
            <p className="text-amber-200 leading-relaxed">
              <strong>This section documents circumstantial connections only.</strong> There is <strong>NO direct evidence</strong> that Neuralink has conducted or is conducting experiments on ICE detainees. 
              The information below documents geographic proximity, timing correlations, and patterns that investigators have noted. 
              These observations warrant scrutiny but do not constitute proof of wrongdoing.
            </p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <Card title="Executive Summary" icon="📋" variant="warning">
        <p className="mb-4">
          Recent investigative reporting has raised questions about the intersection of Elon Musk's Neuralink clinical trials, 
          federal regulatory oversight, and the U.S. immigration detention system. This section examines:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Geographic proximity of Neuralink trial sites to major ICE detention centers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Documented medical emergencies with neurological symptoms at those facilities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>A surge in solitary confinement coinciding with Neuralink's expansion</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>Obscure federal neurological contracts in Honolulu coinciding with ICE detainee transfers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400">•</span>
            <span>The firing of FDA regulators overseeing Neuralink by DOGE</span>
          </li>
        </ul>
      </Card>

      {/* Section 1: Geographic Proximity */}
      <Card title="1. Geographic Proximity of Trial Sites and ICE Facilities" icon="📍" variant="warning">
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-3 mb-4">
          <span className="text-green-400 font-bold text-sm">✓ VERIFIED</span>
          <p className="text-green-200 text-sm mt-1">
            Neuralink trial sites are located near major ICE detention facilities.
          </p>
        </div>

        <p className="mb-4">
          Neuralink currently operates FDA-approved clinical trial sites in <strong className="text-white">Phoenix, Arizona</strong> (Barrow Neurological Institute) 
          and <strong className="text-white">Miami, Florida</strong> (University of Miami). Investigative mapping confirms that both of these major medical research hubs 
          are located in close proximity to massive U.S. Immigration and Customs Enforcement (ICE) detention facilities.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">🌴 Miami, FL</h4>
            <p className="text-sm text-gray-400 mb-2">
              The University of Miami trial site is located in the same county as the <strong className="text-white">Krome Service Processing Center</strong>, 
              a major ICE intake and detention facility.
            </p>
            <a 
              href="https://www.ice.gov/detain/detention-facilities" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              ICE Facility Locator →
            </a>
          </div>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <h4 className="font-bold text-white mb-2">🌵 Phoenix, AZ</h4>
            <p className="text-sm text-gray-400 mb-2">
              Barrow Neurological Institute is located in Maricopa County, relatively near the <strong className="text-white">Eloy and Florence ICE detention centers</strong> located in Pinal County.
            </p>
            <a 
              href="https://www.ice.gov/detain/detention-facilities" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 text-sm"
            >
              ICE Facility Locator →
            </a>
          </div>
        </div>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
          <h4 className="font-bold text-white text-sm mb-2">Sources:</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="https://neuralink.com/trials/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Neuralink Official Clinical Trials Page
              </a>
            </li>
            <li>
              <a href="https://www.ice.gov/detain/detention-facilities" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                ICE Detention Facility Locator
              </a>
            </li>
          </ul>
        </div>
      </Card>

      {/* Section 2: Medical Emergencies */}
      <Card title="2. Medical Emergencies and Deaths at Krome Detention Center" icon="🏥" variant="error">
        <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-3 mb-4">
          <span className="text-yellow-400 font-bold text-sm">✓ VERIFIED (Medical Symptoms) | ✗ UNVERIFIED (Link to Neuralink)</span>
          <p className="text-yellow-200 text-sm mt-1">
            Neurological symptoms documented. No evidence linking to Neuralink implants.
          </p>
        </div>

        <p className="mb-4">
          Between late 2024 and early 2025, investigative reporting documented a severe pattern of medical emergencies and deaths 
          at the Krome Service Processing Center in Miami. Reports specifically highlight detainees suffering from 
          <strong className="text-white"> acute neurological symptoms</strong>, including:
        </p>

        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Severe seizures</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Vomiting</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Confusion</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Unequal pupils</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-red-400">•</span>
            <span>Delayed emergency responses from facility staff</span>
          </li>
        </ul>

        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4">
          <p className="text-sm text-red-300">
            <strong>Important:</strong> While some online theories attempt to link these medical emergencies directly to experimental brain implants, 
            there is <strong>zero public evidence</strong> to support that detainees are being implanted. However, the documented neurological symptoms 
            and medical neglect at Krome are matters of public record and represent a severe humanitarian crisis.
          </p>
        </div>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
          <h4 className="font-bold text-white text-sm mb-2">Sources:</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="https://www.miamiherald.com/news/local/immigration/article304966226.html" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Miami Herald: Krome deaths and neurological symptoms
              </a>
            </li>
            <li>
              <a href="https://www.wlrn.org/immigration/2025-08-29/increased-medical-emergencies-at-krome-as-immigrant-detention-swells" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                WLRN: Medical emergencies at Krome
              </a>
            </li>
            <li>
              <a href="https://www.hrw.org/report/2026/06/25/dying-in-detention/rising-deaths-in-an-expanding-us-immigration-detention-system" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Human Rights Watch: Deaths in ICE detention
              </a>
            </li>
          </ul>
        </div>
      </Card>

      {/* Section 3: Solitary Confinement */}
      <Card title="3. Surge in Solitary Confinement in Arizona ICE Facilities" icon="🔒" variant="warning">
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-3 mb-4">
          <span className="text-green-400 font-bold text-sm">✓ VERIFIED</span>
          <p className="text-green-200 text-sm mt-1">
            Solitary confinement increased from 14 to 38 days average.
          </p>
        </div>

        <p className="mb-4">
          Data and investigative reports from late 2024 through 2025 confirm a sharp, documented rise in the use of solitary confinement 
          in Arizona ICE detention centers (specifically <strong className="text-white">Eloy and Florence</strong>). Reports indicate that the average time spent 
          in solitary confinement surged from historical averages of around <strong className="text-white">14 days to as high as 38 days</strong>.
        </p>

        <p className="mb-4">
          Solitary confinement is widely recognized by human rights organizations as a form of psychological torture that can induce 
          or exacerbate severe mental health crises. While the timeline of this surge coincides with Neuralink's expansion and scaling efforts, 
          the increase in solitary confinement is a verified, standalone policy shift driven by broader DHS operational changes and facility overcrowding.
        </p>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
          <h4 className="font-bold text-white text-sm mb-2">Sources:</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="https://www.axios.com/local/phoenix/2025/10/08/arizona-ice-solitary-confinement-rise" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Axios: Arizona ICE solitary confinement spike
              </a>
            </li>
            <li>
              <a href="https://cronkitenews.azpbs.org/2025/11/10/as-solitary-confinement-surges-in-ice-detention-centers-oversight-weakens-and-concerns-mount/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Cronkite News: Solitary confinement surging in ICE centers
              </a>
            </li>
            <li>
              <a href="https://firrp.org/arizona-adult-immigration-detention-center-complaints-march-2024-august-2024/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Florence Project: Arizona detention center conditions
              </a>
            </li>
            <li>
              <a href="https://firrp.org/medical-neglect-strip-searches-and-abuse-deadly-and-dehumanizing-conditions-in-the-eloy-detention-center-june-2024-november-2025/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Florence Project: Eloy Detention Center Report (June 2024 - Nov 2025)
              </a>
            </li>
          </ul>
        </div>
      </Card>

      {/* Section 4: Honolulu Pipeline */}
      <Card title="4. The Honolulu Pipeline: FDC Honolulu, NIR LLC, and Neurological Contracts" icon="🌺" variant="error">
        <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-3 mb-4">
          <span className="text-yellow-400 font-bold text-sm">⚠️ MIXED (Verified Contracts & ICE Transfers | Speculative Link to Neuralink)</span>
          <p className="text-yellow-200 text-sm mt-1">
            Contracts and transfers verified. Link to Neuralink is speculative.
          </p>
        </div>

        <p className="mb-4">
          In mid-2025, ICE began transferring mainland detainees to the <strong className="text-white">Federal Detention Center (FDC) in Honolulu, Hawaii</strong>, 
          to relieve overcrowding. Lawyers have raised alarms that moving detainees 4,500 miles away effectively cuts them off from legal representation and public oversight.
        </p>

        <p className="mb-4">
          Concurrently, federal contracting data reveals that the Department of Defense (DoD) has awarded millions in contracts for 
          <strong className="text-white"> "neurological surgery procedures"</strong> and <strong className="text-white">"neuro interventional procedures"</strong> to an obscure Honolulu-based firm called <strong className="text-white">NIR LLC</strong>. 
          The company has virtually no public web presence, but its billing and operational footprints point toward major local medical hubs like 
          Tripler Army Medical Center and Straub Medical Center.
        </p>

        <div className="bg-red-900/20 border border-red-800/30 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-red-400 text-sm mb-2">The Speculative Leap:</h4>
          <p className="text-sm text-red-300">
            Some investigators have theorized that NIR LLC is a shell company acting as a front for Neuralink to conduct unregulated, 
            experimental brain-computer interface testing on isolated ICE detainees. <strong>There is currently no public evidence linking NIR LLC to Neuralink, 
            Elon Musk, or BCI technology.</strong> In the medical contracting industry, "NIR" is a standard abbreviation for "Neuro Interventional Radiology." 
            However, the opacity of the LLC, the high-dollar DoD neurological contracts, and the sudden isolation of ICE detainees in Honolulu 
            warrant intense independent oversight.
          </p>
        </div>

        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 mb-4">
          <h4 className="font-bold text-white text-sm mb-2">NIR LLC Contract Details:</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>UEI: JX94GN4KSB44</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>CAGE Code: 43RS4</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Location: Honolulu, HI</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>Total Federal Awards: $1,979,789</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400">•</span>
              <span>First Government Contract: 2005</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
          <h4 className="font-bold text-white text-sm mb-2">Sources:</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="https://www.hawaiipublicradio.org/local-news/2025-12-18/ice-has-been-sending-immigrants-from-the-continental-u-s-to-hawaii-and-no-one-knows-why" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Hawaii Public Radio: ICE transferring detainees to Honolulu
              </a>
            </li>
            <li>
              <a href="https://reason.com/2025/07/18/ice-is-shipping-detainees-to-hawaii-as-bed-space-on-the-u-s-mainland-fills-up/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Reason Magazine: ICE detainees shipped to Hawaii
              </a>
            </li>
            <li>
              <a href="https://www.usaspending.gov/award/CONT_AWD_HT009025FG1270007_9700_W81K0223A0006_9700" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                USAspending.gov: NIR LLC contract record
              </a>
            </li>
            <li>
              <a href="https://govtribe.com/award/federal-contract-award/bpa-call-w81k0223a0006-ht009025fg0770013" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                GovTribe: NIR LLC neurological services contract
              </a>
            </li>
            <li>
              <a href="https://www.sweetspot.so/markets/federal/contractors/nir-llc-jx94gn4ksb44/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                SweetSpot: NIR LLC federal contractor profile
              </a>
            </li>
            <li>
              <a href="https://civilbeat.org/2025/07/ice-moving-immigrants-arrested-mainland-to-honolulu/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Civil Beat: ICE moving immigrants to Honolulu
              </a>
            </li>
          </ul>
        </div>
      </Card>

      {/* Section 5: DOGE FDA Firings */}
      <Card title="5. Regulatory Capture: DOGE and the FDA Firings" icon="🏛️" variant="error">
        <div className="bg-green-900/20 border border-green-700 rounded-lg p-3 mb-4">
          <span className="text-green-400 font-bold text-sm">✓ VERIFIED</span>
          <p className="text-green-200 text-sm mt-1">
            DOGE fired FDA employees overseeing Neuralink.
          </p>
        </div>

        <p className="mb-4">
          In February 2025, the <strong className="text-white">Department of Government Efficiency (DOGE)</strong>, led by Elon Musk, executed a series of layoffs 
          at the U.S. Food and Drug Administration (FDA). Multiple major news outlets confirmed that these cuts specifically targeted 
          approximately <strong className="text-white">20 employees within the FDA's Office of Neurological and Physical Medicine Devices</strong>.
        </p>

        <p className="mb-4">
          This is the exact regulatory office responsible for overseeing, reviewing, and approving implantable brain-computer interfaces, 
          including Neuralink. The firing of the specific regulators tasked with overseeing Musk's company raises profound, documented questions 
          about <strong className="text-white">regulatory capture, conflicts of interest, and the erosion of safety oversight</strong> for experimental human trials.
        </p>

        <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
          <h4 className="font-bold text-white text-sm mb-2">Sources:</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a href="https://fortune.com/2025/02/18/doge-fired-fda-employees-overseeing-elon-musk-neuralink/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Fortune: DOGE fired FDA employees overseeing Neuralink
              </a>
            </li>
            <li>
              <a href="https://www.mobihealthnews.com/news/fda-neuralink-reviewers-fired-musks-doge-cuts-jobs" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                MobiHealthNews: FDA Neuralink reviewers fired
              </a>
            </li>
            <li>
              <a href="https://www.citizen.org/news/musks-doge-operatives-should-leave-the-fda-alone/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Public Citizen: DOGE operatives should leave FDA alone
              </a>
            </li>
            <li>
              <a href="https://www.fastcompany.com/91280397/elon-musk-faces-more-conflict-of-interest-questions-after-doge-fires-fda-staff-reviewing-neuralink" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                Fast Company: Musk conflict of interest questions
              </a>
            </li>
          </ul>
        </div>
      </Card>

      {/* Final Disclaimer */}
      <div className="bg-gray-900 border-2 border-gray-700 rounded-xl p-6">
        <h3 className="text-xl font-bold text-white mb-3">Conclusion</h3>
        <p className="text-gray-300 leading-relaxed mb-4">
          The circumstantial evidence documented above—geographic proximity, timing correlations, obscure contracting, 
          and regulatory erosion—raises legitimate questions that warrant independent investigation and oversight. 
          However, <strong className="text-amber-400">correlation does not equal causation</strong>, and there is currently 
          <strong className="text-amber-400"> no direct evidence</strong> linking Neuralink to experiments on ICE detainees.
        </p>
        <p className="text-gray-400 text-sm">
          This documentation is presented in the interest of transparency and public accountability. 
          The patterns documented here merit scrutiny by journalists, regulators, and human rights organizations.
        </p>
      </div>
    </div>
  );
}
