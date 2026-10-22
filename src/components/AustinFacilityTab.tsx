import Card from './Card';
import SourceLink from './SourceLink';
import { Icons } from './Icons';

export default function AustinFacilityTab() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="dossier-card dossier-card--white">
        <div className="flex items-center gap-3 mb-4">
          <Icons.Location size={32} className="text-[var(--color-ink)]" />
          <h1 className="text-[2rem] leading-[1.1] tracking-tight">
            INVESTIGATIVE FOCUS: THE AUSTIN FACILITY & UNDISCLOSED SCALING
          </h1>
        </div>
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-verified-bg)] mb-4">
          <span className="status-badge status-badge--verified">STATUS: VERIFIED (CORPORATE & REGULATORY DATA)</span>
        </div>
      </div>

      {/* The Shell Entity Structure */}
      <Card title="The Shell Entity Structure" icon={<Icons.Document size={24} />}>
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          Public records confirm that the land for Neuralink's Austin-area expansion was acquired in 2021 under the pastoral-sounding shell entity 
          <strong className="text-[var(--color-ink)]"> 'Riverbottoms Ranch LLC'</strong> (alongside adjacent holdings by 'Horse Ranch LLC'). 
          Texas Comptroller filings identify the president of this entity as <a href="https://en.wikipedia.org/wiki/Jared_Birchall" target="_blank" rel="noopener noreferrer" className="source-link">Jared Birchall</a>.
        </p>
      </Card>

      {/* The Key Figure */}
      <Card title="The Key Figure" icon={<Icons.Patients size={24} />}>
        <p className="text-[var(--color-ink-light)] leading-relaxed">
          <a href="https://en.wikipedia.org/wiki/Jared_Birchall" target="_blank" rel="noopener noreferrer" className="source-link">Jared Birchall</a> is the Managing Director of Excession LLC, Elon Musk's single-family office, and currently serves as the CEO of Neuralink.
        </p>
      </Card>

      {/* The Verified Scale of Construction */}
      <Card title="The Verified Scale of Construction" icon={<Icons.Location size={24} />}>
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          Texas Department of Licensing and Regulation (TDLR) permits and site plans document the following verified facts:
        </p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-blue)] font-bold text-mono">01</span>
            <div>
              <strong className="text-[var(--color-ink)]">Permitted Use:</strong> TDLR permits explicitly describe a new three-story, 112,000-square-foot building housing offices, a machine shop, and "cleanroom device manufacturing" at 2200 Caldwell Lane, Del Valle, TX.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-blue)] font-bold text-mono">02</span>
            <div>
              <strong className="text-[var(--color-ink)]">Future Projections:</strong> Site plans indicate a long-term vision for up to 390,000 square feet of cleanroom manufacturing space, representing a documented conversion from rural agricultural land to a major industrial facility.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-blue)] font-bold text-mono">03</span>
            <div>
              <strong className="text-[var(--color-ink)]">The Discrepancy:</strong> This massive scale vastly exceeds the needs of Neuralink's current, small-scale human clinical trials (only 2 patients implanted when construction began in July 2024), suggesting aggressive, undisclosed scaling of implant production ahead of public announcements.
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-blue)] font-bold text-mono">04</span>
            <div>
              <strong className="text-[var(--color-ink)]">Property Value Transformation:</strong> The 2020 assessment valued the property at $350,000 (rural ranch land). By 2025, that assessment had jumped to $6.1 million, with construction phases totaling nearly $20 million.
            </div>
          </li>
        </ul>
      </Card>

      {/* Timeline Context */}
      <Card title="Timeline Context" icon={<Icons.Overview size={24} />} variant="warning">
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          Construction on this facility <strong className="text-[var(--color-ink)]">began on July 15, 2024</strong>. At that exact point in time, Neuralink had implanted their technology in exactly <strong className="text-[var(--color-accent-red)]">two people</strong> in the entire history of the company.
        </p>
        <p className="text-[var(--color-ink-light)] leading-relaxed">
          By November 2025, according to their public statements, Neuralink had thirteen patients total across all of their clinical trials. The manufacturing infrastructure was designed and built as if volume production was already a certainty, before the technology had been proven to work reliably in humans over any meaningful timeframe.
        </p>
      </Card>

      {/* Surgical Hiring */}
      <Card title="Surgical Hiring in Austin" icon={<Icons.Warning size={24} />} variant="error">
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          In spring 2025, Neuralink job postings specified Austin or Texas as the required location for surgical positions including:
        </p>
        <ul className="space-y-2 mb-4">
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>OR Specialist</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Neurosurgeon Resident</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[var(--color-accent-red)]">•</span>
            <span>Surgical Physician Assistant</span>
          </li>
        </ul>
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          The OR Specialist posting described the role as "Participating in preclinical animal studies and human clinical surgeries at Neuralink." The Neurosurgeon Resident posting described training protocols for "experimental procedures using human cadavers or large animal subjects."
        </p>
        <div className="disclaimer-box">
          <div className="disclaimer-box__text">
            <strong>Critical Question:</strong> Austin does not appear anywhere as an approved clinical trial location in FDA documentation or ClinicalTrials.gov. The standard framework for medical device clinical trials requires separation between the company developing the technology and the facility where it's being tested on human subjects. This raises immediate questions about where exactly these procedures are happening and under what kind of regulatory oversight.
          </div>
        </div>
      </Card>

      {/* Note on Environmental Claims */}
      <Card title="Note on Environmental Claims" icon={<Icons.Warning size={24} />}>
        <div className="dossier-card dossier-card--compact dossier-card--no-hover bg-[var(--color-mixed-bg)]">
          <p className="text-sm text-[var(--color-ink-light)] leading-relaxed">
            While online speculation has pointed to satellite imagery of 'discolored liquid' near the site's On-Site Sewage Facility (OSSF) as evidence of illegal waste dumping, there are currently <strong className="text-[var(--color-ink)]">no public Texas Commission on Environmental Quality (TCEQ) violations, environmental complaints, or water quality reports linking Neuralink to Colorado River contamination</strong>. This dossier focuses on verified regulatory and bioethical data, and will update this section if official environmental enforcement actions are filed.
          </p>
        </div>
      </Card>

      {/* Primary Source Links */}
      <Card title="Primary Source Links" icon={<Icons.Sources size={24} />}>
        <div className="space-y-3">
          <SourceLink 
            url="https://en.wikipedia.org/wiki/Jared_Birchall"
            title="Jared Birchall (Wikipedia)"
          />
          <SourceLink 
            url="https://www.tdlr.texas.gov/TABS/Search/Print/TABS2024022676"
            title="Texas Dept. of Licensing and Regulation (TDLR) Permit Details - Project ATX1"
          />
          <SourceLink 
            url="https://www.statesman.com/story/business/technology/2022/09/09/elon-musks-neuralink-has-plans-for-lab-office-facility-in-austin-area/66120121007/"
            title="Austin American-Statesman: Elon Musk's Neuralink has plans for lab, office facility in Austin area"
          />
          <SourceLink 
            url="https://therealdeal.com/texas/austin/2024/07/10/musk-plans-neuralink-office-outside-austin/"
            title="The Real Deal: Musk plans Neuralink office outside Austin"
          />
          <SourceLink 
            url="https://www.tdlr.texas.gov/TABS/Search/Project/TABS2026011928"
            title="TDLR TABS: Additional Neuralink tenant improvement project"
          />
          <SourceLink 
            url="https://comptroller.texas.gov/taxes/franchise/account-status/search/32077356775"
            title="Texas Comptroller: River Bottoms Ranch LLC (Tax ID 32077356775)"
          />
          <SourceLink 
            url="https://thedreydossier.substack.com/p/who-tf-is-in-my-head-part-6-the-neuralink"
            title="The Drey Dossier Part 6: The Neuralink Ranch"
          />
        </div>
      </Card>

      {/* Conclusion */}
      <div className="dossier-card dossier-card--no-hover">
        <h3 className="text-mono text-lg uppercase tracking-[0.02em] text-[var(--color-ink)] mb-3">
          Conclusion
        </h3>
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          The documented evidence reveals a significant discrepancy between Neuralink's public narrative of careful, limited clinical trials and the operational reality of industrial-scale manufacturing infrastructure being built on a 37-acre property in Del Valle, Texas. The facility, registered under a shell company with a pastoral name, is being constructed at a scale that suggests plans far beyond what has been communicated publicly.
        </p>
        <p className="text-[var(--color-ink-light)] leading-relaxed mb-4">
          The recruitment of surgical staff for a location that does not appear in any clinical trial registries, combined with job postings referencing both animal studies and human surgeries "at Neuralink," raises serious questions about regulatory compliance and the separation between device development and clinical testing that is supposed to protect trial participants.
        </p>
        <p className="text-sm text-[var(--color-ink-muted)]">
          This documentation is presented in the interest of transparency and public accountability. The patterns documented here merit scrutiny by journalists, regulators, and human rights organizations.
        </p>
      </div>
    </div>
  );
}
