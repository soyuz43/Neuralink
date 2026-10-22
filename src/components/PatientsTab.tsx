import Card from './Card';
import { Icons } from './Icons';

const patients = [
  {
    id: 1,
    name: 'Noland Arbaugh',
    condition: 'SCI (Tetraplegia)',
    surgeryDate: 'January 2024',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'Publicly active',
    notes: 'First Neuralink patient. Reported 85% thread retraction at one month, resolved via software updates.',
    featured: true,
  },
  {
    id: 2,
    name: 'Alex Conley',
    condition: 'SCI',
    surgeryDate: 'July 2024',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME, CONVOY',
    status: 'Controlling robot arm',
    notes: 'Procedure modifications to reduce brain motion and place implant closer to surface.',
    featured: false,
  },
  {
    id: 3,
    name: 'Brad Smith',
    condition: 'ALS',
    surgeryDate: 'November 2024',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'First ALS patient',
    notes: 'First ALS patient. Featured in Neuralink promotional materials.',
    featured: true,
  },
  {
    id: 4,
    name: 'Mike Melgarejo',
    condition: 'ALS (advanced)',
    surgeryDate: 'February 2025',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'GoFundMe crisis',
    notes: 'Featured in Neuralink promotional video. GoFundMe created 4 months post-surgery stating he was "ready to give up on life." Shivon Zilis donated $3,000.',
    featured: true,
    controversy: true,
  },
  {
    id: 5,
    name: 'RJ Tanner',
    condition: 'SCI',
    surgeryDate: 'April 2025',
    hospital: 'University of Miami Health',
    study: 'PRIME, CONVOY',
    status: 'Limited information',
    notes: 'First patient at University of Miami site.',
    featured: false,
  },
  {
    id: 6,
    name: 'Rob Greiner',
    condition: 'SCI',
    surgeryDate: 'June 2025',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME',
    status: 'Limited information',
    notes: '',
    featured: false,
  },
  {
    id: 7,
    name: 'Jake Schneider',
    condition: 'ALS',
    surgeryDate: 'June 2025',
    hospital: 'Barrow Neurological Institute',
    study: 'PRIME, CONVOY',
    status: 'Limited information',
    notes: 'Also referred to as "Patient 7" in VOICE trial demonstrations.',
    featured: false,
  },
  {
    id: 8,
    name: 'Nick Wray',
    condition: 'ALS',
    surgeryDate: 'July 2025',
    hospital: 'University of Miami Health',
    study: 'PRIME, CONVOY',
    status: 'Feeding himself',
    notes: 'First patient to feed himself unassisted with implant.',
    featured: true,
  },
  {
    id: 9,
    name: 'Audrey Crews',
    condition: 'SCI',
    surgeryDate: 'July 2025',
    hospital: 'University of Miami Health',
    study: 'PRIME',
    status: 'First woman',
    notes: 'First female patient. Publicly active with updates.',
    featured: true,
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
                    {patient.name}
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
