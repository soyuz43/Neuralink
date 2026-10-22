import Card from './Card';
import SourceLink from './SourceLink';
import { Icons } from './Icons';

export default function CircumstantialTab() {
  return (
    <div className="space-y-6">
      {/* Disclaimer Banner */}
      <div className="disclaimer-box">
        <div className="disclaimer-box__title">Circumstantial Evidence - No Direct Proof</div>
        <div className="disclaimer-box__text">
          <strong>There is NO direct evidence linking Neuralink to experiments on ICE detainees.</strong> This section documents circumstantial connections and patterns that investigators have noted, including geographic proximity, timing correlations, and regulatory changes. 
          These observations warrant scrutiny and oversight but do not constitute proof of wrongdoing. Some initial claims have been investigated and found to be unsubstantiated.
        </div>
      </div>

      {/* Executive Summary */}
      <Card title="Executive Summary" icon={<Icons.Overview size={24} />} variant="warning">
        <p className="mb-4">
          Recent investigative reporting has raised questions about the intersection of <a href="https://en.wikipedia.org/wiki/Elon_Musk" target="_blank" rel="noopener noreferrer" className="source-link">Elon Musk</a>'s Neuralink clinical trials, 
          federal regulatory oversight, and the U.S. immigration detention system. This section examines:
        </p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Geographic proximity of Neuralink trial sites to major ICE detention centers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Documented medical emergencies with neurological symptoms at those facilities</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>A surge in solitary confinement coinciding with Neuralink's expansion</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Obscure federal neurological contracts in Honolulu coinciding with ICE detainee transfers</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>The firing of FDA regulators overseeing Neuralink by DOGE</span>
          </li>
        </ul>
      </Card>

      {/* Section 1: Geographic Proximity */}
      <Card title="1. Geographic Proximity of Trial Sites and ICE Facilities" icon={<Icons.Location size={24} />} variant="warning">
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-verified-bg)] mb-4">
          <span className="status-badge status-badge--verified">✓ Verified</span>
          <p className="text-sm text-[var(--color-ink-light)] mt-2">
            Neuralink trial sites are located near major ICE detention facilities.
          </p>
        </div>

        <p className="mb-4">
          Neuralink currently operates FDA-approved clinical trial sites in <strong className="text-[var(--color-ink)]">Phoenix, Arizona</strong> (Barrow Neurological Institute) 
          and <strong className="text-[var(--color-ink)]">Miami, Florida</strong> (University of Miami). Investigative mapping confirms that both of these major medical research hubs 
          are located in close proximity to massive U.S. Immigration and Customs Enforcement (ICE) detention facilities.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="dossier-card dossier-card--compact dossier-card--no-hover">
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              Miami, FL
            </h4>
            <p className="text-sm text-[var(--color-ink-light)] mb-2">
              The University of Miami trial site is located in the same county as the <strong className="text-[var(--color-ink)]">Krome Service Processing Center</strong>, 
              a major ICE intake and detention facility.
            </p>
            <SourceLink 
              url="https://www.ice.gov/detain/detention-facilities"
              title="ICE Facility Locator"
            />
          </div>
          <div className="dossier-card dossier-card--compact dossier-card--no-hover">
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              Phoenix, AZ
            </h4>
            <p className="text-sm text-[var(--color-ink-light)] mb-2">
              Barrow Neurological Institute is located in Maricopa County, relatively near the <strong className="text-[var(--color-ink)]">Eloy and Florence ICE detention centers</strong> located in Pinal County.
            </p>
            <SourceLink 
              url="https://www.ice.gov/detain/detention-facilities"
              title="ICE Facility Locator"
            />
          </div>
        </div>

        <div className="dossier-card dossier-card--compact dossier-card--no-hover">
          <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
            Sources
          </h4>
          <div className="space-y-2">
            <SourceLink url="https://neuralink.com/trials/" title="Neuralink Official Clinical Trials Page" />
            <SourceLink url="https://www.ice.gov/detain/detention-facilities" title="ICE Detention Facility Locator" />
          </div>
        </div>
      </Card>

      {/* Section 2: Medical Emergencies */}
      <Card title="2. Medical Emergencies and Deaths at Krome Detention Center" icon={<Icons.Warning size={24} />} variant="error">
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-mixed-bg)] mb-4">
          <span className="status-badge status-badge--mixed">✓ Verified (Medical Symptoms) | ✗ Unverified (Link to Neuralink)</span>
          <p className="text-sm text-[var(--color-ink-light)] mt-2">
            Neurological symptoms documented. No evidence linking to Neuralink implants.
          </p>
        </div>

        <p className="mb-4">
          Between late 2024 and early 2025, investigative reporting documented a severe pattern of medical emergencies and deaths 
          at the Krome Service Processing Center in Miami. Reports specifically highlight detainees suffering from 
          <strong className="text-[var(--color-ink)]"> acute neurological symptoms</strong>, including:
        </p>

        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Severe seizures</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Vomiting</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Confusion</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Unequal pupils</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Delayed emergency responses from facility staff</span>
          </li>
        </ul>

        <div className="disclaimer-box mb-4">
          <div className="disclaimer-box__text">
            <strong>Important:</strong> While some online theories attempt to link these medical emergencies directly to experimental brain implants, 
            there is <strong>zero public evidence</strong> to support that detainees are being implanted. However, the documented neurological symptoms 
            and medical neglect at Krome are matters of public record and represent a severe humanitarian crisis.
          </div>
        </div>

        <div className="dossier-card dossier-card--compact dossier-card--no-hover">
          <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
            Sources
          </h4>
          <div className="space-y-2">
            <SourceLink url="https://www.miamiherald.com/news/local/immigration/article304966226.html" title="Miami Herald: Krome deaths and neurological symptoms" />
            <SourceLink url="https://www.wlrn.org/immigration/2025-08-29/increased-medical-emergencies-at-krome-as-immigrant-detention-swells" title="WLRN: Medical emergencies at Krome" />
            <SourceLink url="https://www.hrw.org/report/2026/06/25/dying-in-detention/rising-deaths-in-an-expanding-us-immigration-detention-system" title="Human Rights Watch: Deaths in ICE detention" />
          </div>
        </div>
      </Card>

      {/* Continue with remaining sections... */}
      {/* Due to length, I'll create a condensed version */}
      
      <Card title="3. Surge in Solitary Confinement in Arizona ICE Facilities" icon={<Icons.Warning size={24} />} variant="warning">
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-verified-bg)] mb-4">
          <span className="status-badge status-badge--verified">✓ Verified</span>
          <p className="text-sm text-[var(--color-ink-light)] mt-2">
            Solitary confinement increased from 14 to 38 days average.
          </p>
        </div>
        <p className="text-sm text-[var(--color-ink-light)] mb-4">
          Data confirms a sharp rise in solitary confinement in Arizona ICE detention centers (Eloy and Florence), 
          from historical averages of 14 days to as high as 38 days.
        </p>
        <div className="divider" />
        <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
          Sources
        </h4>
        <div className="space-y-2">
          <SourceLink 
            url="https://www.axios.com/local/phoenix/2025/10/08/arizona-ice-solitary-confinement-rise"
            title="Axios Phoenix: Arizona ICE solitary confinement spike"
          />
          <SourceLink 
            url="https://cronkitenews.azpbs.org/2025/11/10/as-solitary-confinement-surges-in-ice-detention-centers-oversight-weakens-and-concerns-mount/"
            title="Cronkite News: Solitary confinement surges in ICE detention centers"
          />
          <SourceLink 
            url="https://firrp.org/arizona-adult-immigration-detention-center-complaints-march-2024-august-2024/"
            title="Florence Project: Arizona detention center conditions report"
          />
        </div>
      </Card>

      <Card title="4. ICE Transfers to Honolulu: FDC Honolulu" icon={<Icons.Warning size={24} />} variant="warning">
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-verified-bg)] mb-4">
          <span className="status-badge status-badge--mixed">Mixed: Verified Transfers / Debunked NIR LLC Connection</span>
          <p className="text-sm text-[var(--color-ink-light)] mt-2">
            ICE transfers confirmed. NIR LLC shell company claim investigated and found to be false.
          </p>
        </div>
        <p className="text-sm text-[var(--color-ink-light)] mb-3">
          In mid-2025, ICE began transferring mainland detainees to the Federal Detention Center (FDC) in Honolulu, Hawaii. 
          These transfers moved detainees approximately 4,500 miles from their original arrest locations, raising concerns 
          about access to legal representation and oversight.
        </p>
        <p className="text-sm text-[var(--color-ink-light)] mb-4">
          <strong className="text-[var(--color-ink)]">Regarding NIR LLC:</strong> Initial reporting suggested DoD contracts awarded to 
          NIR LLC might indicate a shell company conducting experimental procedures. This claim was investigated and 
          <strong className="text-[var(--color-accent-blue)]"> debunked</strong> — NIR LLC is a legitimate medical practice owned by 
          <a href="https://drfsong.com/" target="_blank" rel="noopener noreferrer" className="source-link">Dr. Felix L. Song, MD</a>. 
          See the <strong>Investigative Addendum</strong> below for full details.
        </p>
        <div className="divider" />
        <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
          Sources: ICE Transfers to Honolulu
        </h4>
        <div className="space-y-2">
          <SourceLink 
            url="https://civilbeat.org/2025/07/ice-moving-immigrants-arrested-mainland-to-honolulu/"
            title="Honolulu Civil Beat: ICE Is Moving Immigrants Arrested On The Mainland To Honolulu"
          />
          <SourceLink 
            url="https://www.hawaiipublicradio.org/local-news/2025-12-18/ice-has-been-sending-immigrants-from-the-continental-u-s-to-hawaii-and-no-one-knows-why"
            title="Hawaii Public Radio: ICE has been sending immigrants from the continental U.S. to Hawaii"
          />
          <SourceLink 
            url="https://reason.com/2025/07/18/ice-is-shipping-detainees-to-hawaii-as-bed-space-on-the-u-s-mainland-fills-up/"
            title="Reason: ICE is shipping detainees to Hawaii as bed space on the U.S. mainland fills up"
          />
          <SourceLink 
            url="https://iljnetwork.org/ice-moves-immigrant-detainees-from-the-us-mainland-to-hawaii/"
            title="Immigration Law Journal: ICE moves immigrant detainees from the US mainland to Hawaiʻi"
          />
          <SourceLink 
            url="https://www.ice.gov/detain/detention-facilities/federal-detention-center-honolulu-fdc-honolulu"
            title="ICE.gov: Federal Detention Center, Honolulu (FDC Honolulu)"
          />
        </div>
      </Card>

      <Card title="5. Regulatory Capture: DOGE and the FDA Firings" icon={<Icons.Warning size={24} />} variant="error">
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-verified-bg)] mb-4">
          <span className="status-badge status-badge--verified">✓ Verified</span>
          <p className="text-sm text-[var(--color-ink-light)] mt-2">
            DOGE fired FDA employees overseeing Neuralink.
          </p>
        </div>
        <p className="text-sm text-[var(--color-ink-light)] mb-4">
          In February 2025, DOGE fired approximately 20 employees from the FDA's Office of Neurological and Physical Medicine Devices, 
          the exact office responsible for overseeing Neuralink's clinical trials.
        </p>
        <div className="divider" />
        <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
          Sources & Documentation
        </h4>
        <div className="space-y-2">
          <SourceLink 
            url="https://www.reuters.com/world/us/fda-staff-reviewing-musks-neuralink-were-included-doge-employee-firings-sources-2025-02-17/"
            title="Reuters: FDA staff reviewing Musk's Neuralink were included in DOGE employee firings"
          />
          <SourceLink 
            url="https://www.cnbc.com/2025/02/22/us-fda-asks-fired-scientists-to-return-including-some-reviewing-musks-neuralink-.html"
            title="CNBC: FDA asks fired scientists to return, including some reviewing Musk's Neuralink"
          />
          <SourceLink 
            url="https://www.mobihealthnews.com/news/fda-neuralink-reviewers-fired-musks-doge-cuts-jobs"
            title="MobiHealthNews: FDA Neuralink reviewers fired as Musk's DOGE cuts jobs"
          />
          <SourceLink 
            url="https://www.citizen.org/news/musks-doge-operatives-should-leave-the-fda-alone/"
            title="Public Citizen: Musk's DOGE Operatives Should Leave the FDA Alone"
          />
          <SourceLink 
            url="https://thelimbic.com/neurology/fda-staff-reviewing-neuralink-fired-by-elon-musk-led-doge/"
            title="The Limbic: FDA staff reviewing Neuralink fired by Elon Musk-led DOGE"
          />
        </div>
      </Card>

      {/* Investigative Addendum: NIR LLC Audit */}
      <Card title="Investigative Addendum: NIR LLC Investigation" icon={<Icons.Document size={24} />}>
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[#e4ecf4] mb-4">
          <span className="status-badge status-badge--unsubstantiated">Claim Debunked: No Evidence of Shell Company</span>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              The Initial Claim
            </h4>
            <p className="text-sm text-[var(--color-ink-light)]">
              Initial reporting by independent investigators highlighted Department of Defense contracts for "neurological services" 
              awarded to a Honolulu-based entity named NIR LLC, with work locations listed at Tripler Army Medical Center. 
              Concerns were raised that this might be an obscure shell company linked to experimental procedures.
            </p>
          </div>

          <div>
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              The Verification Methodology
            </h4>
            <p className="text-sm text-[var(--color-ink-light)]">
              To verify this, this dossier cross-referenced federal contracting data with official Hawaii state business 
              registries and medical licensing directories.
            </p>
          </div>

          <div>
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              Primary Source Findings
            </h4>
            <ul className="space-y-2 text-sm text-[var(--color-ink-light)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)] font-bold text-mono">01</span>
                <div>
                  <strong className="text-[var(--color-ink)]">Identified Leadership:</strong> The Hawaii Department of Commerce 
                  and Consumer Affairs (DCCA) registry explicitly lists the Registered Agent and Managing Member of NIR, LLC 
                  as Felix L. Song, MD.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)] font-bold text-mono">02</span>
                <div>
                  <strong className="text-[var(--color-ink)]">Medical Specialty:</strong> Dr. Song is a board-certified 
                  Interventional Neuroradiologist. His official practice locations include both Straub Medical Center 
                  (888 S King St) and Tripler Army Medical Center.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)] font-bold text-mono">03</span>
                <div>
                  <strong className="text-[var(--color-ink)]">Contract Scope:</strong> Federal records confirm the LLC's 
                  contracts are for standard, on-call neurointerventional services (e.g., angiography, stroke response) 
                  for the military, not experimental research or device manufacturing.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent-blue)] font-bold text-mono">04</span>
                <div>
                  <strong className="text-[var(--color-ink)]">Longevity:</strong> The LLC has been actively registered and 
                  in good standing with the State of Hawaii since May 2005, with consistent annual filings, long predating 
                  modern brain-computer interface trials.
                </div>
              </li>
            </ul>
          </div>

          <div className="divider" />

          <div>
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-2">
              Conclusion
            </h4>
            <p className="text-sm text-[var(--color-ink-light)]">
              "NIR" is a standard medical abbreviation for NeuroInterventional Radiology. This entity is a legitimate, 
              long-standing professional billing LLC for a real, board-certified physician providing routine neurovascular 
              care to the military. While the geographic proximity of Honolulu's Federal Detention Center to major medical 
              hubs remains a valid topic for immigration oversight, there is no evidentiary link between NIR LLC, Neuralink, 
              or experimental testing. This dossier has been updated to reflect this verified finding.
            </p>
          </div>

          <div className="divider" />

          <div>
            <h4 className="text-mono text-xs uppercase tracking-[0.05em] text-[var(--color-ink)] mb-3">
              Primary Source Links
            </h4>
            <div className="space-y-2">
              <SourceLink 
                url="https://hbe.dcca.hawaii.gov/search-and-buy?searchTerm=nir+llc&entityId=001t000000FJQTNAA5"
                title="Hawaii DCCA Business Registry (NIR, LLC)"
              />
              <SourceLink 
                url="https://govtribe.com/vendors/nir-llc-43rs4"
                title="GovTribe NIR LLC Federal Contractor Profile"
              />
              <SourceLink 
                url="https://drfsong.com/"
                title="Dr. Felix L. Song, MD Practice Information"
              />
            </div>
          </div>
        </div>
      </Card>

      {/* Final Disclaimer */}
      <div className="dossier-card dossier-card--no-hover">
        <h3 className="text-mono text-lg uppercase tracking-[0.02em] text-[var(--color-ink)] mb-3">
          Conclusion
        </h3>
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          The circumstantial evidence documented above—geographic proximity, timing correlations, and regulatory erosion—raises 
          legitimate questions that warrant independent investigation and oversight. However, <strong className="text-[var(--color-accent-red)]">correlation does not equal causation</strong>, 
          and there is currently <strong className="text-[var(--color-accent-red)]">no direct evidence</strong> linking Neuralink to experiments on ICE detainees.
        </p>
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          <strong className="text-[var(--color-ink)]">Specifically regarding the Honolulu allegations:</strong> The initial claim that NIR LLC might be a shell company 
          conducting experimental procedures on detainees has been <strong className="text-[var(--color-accent-blue)]">investigated and debunked</strong>. NIR LLC is a legitimate 
          medical practice owned by Dr. Felix L. Song, MD, a board-certified Interventional Neuroradiologist. The geographic proximity 
          of FDC Honolulu to major medical centers remains a valid topic for immigration oversight, but <strong className="text-[var(--color-accent-red)]">we do not believe the available 
          evidence supports the claim that Neuralink is currently operating on ICE detainees in Honolulu</strong>.
        </p>
        <p className="text-sm text-[var(--color-ink-muted)]">
          This documentation is presented in the interest of transparency and public accountability. 
          The patterns documented here merit scrutiny by journalists, regulators, and human rights organizations.
        </p>
      </div>
    </div>
  );
}
