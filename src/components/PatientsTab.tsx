import Card from './Card';
import { Icons } from './Icons';

const patients = [
  {
    id: 1,
    name: 'Noland Arbaugh',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Noland_Arbaugh',
    condition: 'SCI (Tetraplegia)',
    surgeryDate: 'January 2024',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'Publicly active',
    notes: 'First Neuralink patient, a 29-year-old quadriplegic who became the first human to receive a Neuralink brain implant in January 2024. Experienced significant thread retraction (85% of threads) within weeks of implant. Neuralink stated software modifications improved performance, and by July 2024 the threads had become stable. Neuralink changed surgical procedures for subsequent patients. Limited public information since mid-2025.',
    featured: true,
    sources: [
      { title: 'Neuralink: Two Years of Telepathy Updates', url: 'https://neuralink.com/updates/two-years-of-telepathy/' },
      { title: 'NBC News: Implant suffers setback after threads retract', url: 'https://www.nbcnews.com/science/science-news/implant-elon-musks-neuralink-suffers-setback-threads-retract-patients-rcna151443' },
      { title: 'Reuters: Neuralink has faced issues with its tiny wires for years', url: 'https://www.reuters.com/technology/musks-neuralink-has-faced-issues-with-its-tiny-wires-years-sources-say-2024-05-15/' },
      { title: 'Fortune: Neuralink participant says life changed 18 months post-surgery', url: 'https://fortune.com/2025/08/23/neuralink-participant-1-noland-arbaugh-18-months-post-surgery-life-changed-elon-musk/' },
      { title: 'Noland Arbaugh - Wikipedia', url: 'https://en.wikipedia.org/wiki/Noland_Arbaugh' },
    ],
  },
  {
    id: 2,
    name: 'Alex Conley',
    condition: 'SCI',
    surgeryDate: 'July 2024',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME, CONVOY',
    status: 'Controlling robot arm',
    notes: 'Second Neuralink patient. Procedure modifications were made to reduce brain motion and place the implant closer to the surface following thread retraction issues with Patient 1. Demonstrated control of robotic arm using thought.',
    featured: false,
    sources: [
      { title: 'Neuralink: Two Years of Telepathy Updates', url: 'https://neuralink.com/updates/two-years-of-telepathy/' },
      { title: 'NeuraPod: Alex Conley Patient Profile', url: 'https://www.neurapod.com/neuralink-patients/alex-conley' },
    ],
  },
  {
    id: 3,
    name: 'Brad Smith',
    condition: 'ALS',
    surgeryDate: 'November 2024',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'First ALS patient',
    notes: 'First ALS patient to receive Neuralink implant. Featured in Neuralink promotional materials demonstrating device capabilities.',
    featured: true,
    sources: [
      { title: 'Neuralink: Two Years of Telepathy Updates', url: 'https://neuralink.com/updates/two-years-of-telepathy/' },
      { title: 'NeuraPod: Brad Smith Patient Profile', url: 'https://www.neurapod.com/neuralink-patients/brad-smith' },
    ],
  },
  {
    id: 4,
    name: 'Mike Melgarejo',
    condition: 'ALS (advanced)',
    surgeryDate: 'February 2025',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'GoFundMe crisis',
    notes: 'Featured in Neuralink promotional video discussing full-time work capability. Four months post-surgery (June 2025), a GoFundMe was created by gaming friend Ryan Biggs stating Mike was "not in a good place—mentally, financially, physically, or emotionally" and "ready to give up on life." Campaign raised over $21,000. <a href="https://en.wikipedia.org/wiki/Shivon_Zilis" target="_blank" rel="noopener noreferrer" className="source-link">Shivon Zilis</a> (Neuralink Director of Operations) donated $3,000. Family has stated his absence from social media is due to ALS progression and privacy, not corporate cover-up. No public social media presence.',
    featured: true,
    controversy: true,
    sources: [
      { title: 'GoFundMe: "Those things we do, so others may live"', url: 'https://www.gofundme.com/f/those-things-we-do-so-others-may-live' },
      { title: 'The Drey Dossier: Part 4 - Where TF Is Patient Four?', url: 'https://thedreydossier.substack.com/p/who-tf-is-in-my-head-part-4-where' },
      { title: 'NeuraPod: Mike Melgarejo Patient Profile', url: 'https://www.neurapod.com/neuralink-patients/mike-melgarejo' },
      { title: 'Distractify: What Happened to Neuralink Patient 4?', url: 'https://www.distractify.com/p/what-happened-to-neuralink-patient-4' },
    ],
  },
  {
    id: 5,
    name: 'RJ Tanner',
    condition: 'SCI',
    surgeryDate: 'April 2025',
    hospital: 'University of Miami Health',
    study: 'PRIME, CONVOY',
    status: 'Limited information',
    notes: 'First patient at University of Miami site. Part of the expansion to Miami facility.',
    featured: false,
    sources: [
      { title: 'NeuraPod: RJ Tanner Patient Profile', url: 'https://www.neurapod.com/neuralink-patients/rj-tanner' },
    ],
  },
  {
    id: 6,
    name: 'Rob Greiner',
    condition: 'SCI',
    surgeryDate: 'June 2025',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'Limited information',
    notes: 'Implanted at Barrow Neurological Institute. Limited public information available.',
    featured: false,
    sources: [
      { title: 'NeuraPod: Rob Greiner Patient Profile', url: 'https://www.neurapod.com/neuralink-patients/rob-greiner' },
    ],
  },
  {
    id: 7,
    name: 'Jake Schneider',
    condition: 'ALS',
    surgeryDate: 'June 2025',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME, CONVOY',
    status: 'Limited information',
    notes: 'Also referred to as "Patient 7" in VOICE trial demonstrations. Demonstrated speech decoding capabilities.',
    featured: false,
    sources: [
      { title: 'NeuraPod: Jake Schneider Patient Profile', url: 'https://www.neurapod.com/neuralink-patients/jake-schneider' },
    ],
  },
  {
    id: 8,
    name: 'Nick Wray',
    condition: 'ALS',
    surgeryDate: 'July 2025',
    hospital: 'University of Miami Health',
    study: 'PRIME, CONVOY',
    status: 'Feeding himself',
    notes: 'First patient to feed himself unassisted with the Neuralink implant. Demonstrated significant functional improvement post-implant.',
    featured: true,
    sources: [
      { title: 'Neuralink: Two Years of Telepathy Updates', url: 'https://neuralink.com/updates/two-years-of-telepathy/' },
      { title: 'NeuraPod: Nick Wray Patient Profile', url: 'https://www.neurapod.com/neuralink-patients/nick-wray' },
    ],
  },
  {
    id: 9,
    name: 'Audrey Crews',
    condition: 'SCI',
    surgeryDate: 'July 2025',
    hospital: 'University of Miami Health',
    study: 'PRIME',
    status: 'First woman',
    notes: 'First female patient to receive Neuralink implant. Publicly active with social media updates about her experience.',
    featured: true,
    sources: [
      { title: 'Neuralink: Two Years of Telepathy Updates', url: 'https://neuralink.com/updates/two-years-of-telepathy/' },
      { title: 'NeuraPod: Audrey Crews Patient Profile', url: 'https://www.neurapod.com/neuralink-patients/audrey-crews' },
    ],
  },
  {
    id: 13,
    name: 'Paul',
    condition: 'ALS',
    surgeryDate: 'October 2025',
    hospital: 'University College London Hospitals',
    study: 'PRIME',
    status: 'First UK patient',
    notes: 'First patient in United Kingdom.',
    featured: true,
  },
  {
    id: 21,
    name: 'Kenneth Shock',
    condition: 'ALS',
    surgeryDate: 'January 2026',
    hospital: 'UT Southwestern Medical Center',
    study: 'VOICE',
    status: 'VOICE trial',
    notes: 'First identified VOICE trial patient at Dallas site.',
    featured: true,
  },
  {
    id: 22,
    name: 'Zach McManus',
    condition: 'ALS',
    surgeryDate: '2026',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'Robot vacuum control',
    notes: 'Demonstrated robot vacuum control.',
    featured: true,
  },
  {
    id: 25,
    name: 'Terence Mandable',
    condition: 'Bulbar-onset ALS',
    surgeryDate: '2026',
    hospital: 'UT Southwestern Medical Center',
    study: 'VOICE',
    status: 'VOICE trial',
    notes: 'Second identified VOICE trial patient.',
    featured: true,
  },
  {
    id: 26,
    name: 'Lee Marten',
    condition: 'ALS',
    surgeryDate: 'May 2026',
    hospital: 'Toronto General Hospital',
    study: 'PRIME',
    status: 'First Canadian ALS',
    notes: 'First Canadian ALS patient; first implant through the dura.',
    featured: true,
  },
];

export default function PatientsTab() {
  const publicPatients = patients.filter(p => p.name !== 'Not publicly disclosed');
  const undisclosedCount = 27 - publicPatients.length;

  return (
    <div className="space-y-6">
      {/* Summary */}
      <Card title="Patient Registry Overview" icon={<Icons.Patients size={24} />}>
        <p className="mb-4">
          As of 2026, Neuralink has implanted <strong className="text-[var(--color-ink)]">27+ patients</strong> across 
          clinical trials. Of these, <strong className="text-[var(--color-ink)]">{publicPatients.length}</strong> have been 
          publicly identified by name. <strong className="text-[var(--color-accent-red)]">{undisclosedCount} patients</strong> have 
          no public information beyond Neuralink's count.
        </p>
        <div className="disclaimer-box">
          <div className="disclaimer-box__title">Transparency Concern</div>
          <div className="disclaimer-box__text">
            The inconsistent disclosure of patient information—sometimes same-day, sometimes months later, 
            sometimes never—creates a skewed public narrative where we primarily hear about successes.
          </div>
        </div>
      </Card>

      {/* Patient List */}
      <div className="space-y-4">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`dossier-card ${patient.controversy ? 'bg-[var(--color-unverified-bg)]' : ''}`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-mono text-xs text-[var(--color-ink-muted)] bg-[var(--color-desk)] px-2 py-1 border border-[var(--color-ink)]">
                  P{patient.id}
                </span>
                <div>
                  <h3 className="text-mono text-lg uppercase tracking-[0.02em] text-[var(--color-ink)]">
                    {patient.wikipediaUrl ? (
                      <a href={patient.wikipediaUrl} target="_blank" rel="noopener noreferrer" className="source-link">
                        {patient.name}
                      </a>
                    ) : (
                      patient.name
                    )}
                    {patient.controversy && (
                      <span className="ml-2 text-xs text-[var(--color-accent-red)] font-normal">
                        // Controversy
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-[var(--color-ink-muted)]">{patient.condition}</p>
                </div>
              </div>
              <span className="text-mono text-xs text-[var(--color-ink-muted)]">{patient.surgeryDate}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-3 text-sm mb-3">
              <div className="metadata-row">
                <span className="metadata-row__label">Hospital</span>
                <span className="metadata-row__value">{patient.hospital}</span>
              </div>
              <div className="metadata-row">
                <span className="metadata-row__label">Study</span>
                <span className={`status-badge text-xs ${patient.study === 'VOICE' ? 'status-badge--mixed' : 'status-badge--neutral'}`}>
                  {patient.study}
                </span>
              </div>
              <div className="metadata-row">
                <span className="metadata-row__label">Status</span>
                <span className="metadata-row__value">{patient.status}</span>
              </div>
            </div>

            {patient.notes && (
              <div className="divider" />
            )}
            {patient.notes && (
              <p className="text-sm text-[var(--color-ink-light)]">{patient.notes}</p>
            )}
          </div>
        ))}
      </div>

      {/* Undisclosed Patients */}
      <Card title="Undisclosed Patients" icon={<Icons.Warning size={24} />} variant="warning">
        <p className="mb-3">
          <strong className="text-[var(--color-accent-red)]">{undisclosedCount} patients</strong> have been implanted 
          but have no public information beyond Neuralink's count. Their names, conditions, hospitals, 
          and outcomes remain unknown.
        </p>
        <p className="text-sm text-[var(--color-ink-muted)]">
          This lack of transparency makes it impossible to track outcomes or identify patterns of 
          complications. Patients who aren't posting could be fine and private, or they could be in 
          crisis with no systematic tracking.
        </p>
      </Card>
    </div>
  );
}
