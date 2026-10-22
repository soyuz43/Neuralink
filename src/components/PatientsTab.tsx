import Card from './Card';

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
      <Card title="Patient Registry Overview" icon="📊">
        <p className="mb-4">
          As of 2026, Neuralink has implanted <strong className="text-white">27+ patients</strong> across 
          clinical trials. Of these, <strong className="text-white">{publicPatients.length}</strong> have been 
          publicly identified by name. <strong className="text-amber-400">{undisclosedCount} patients</strong> have 
          no public information beyond Neuralink's count.
        </p>
        <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-4">
          <p className="text-sm text-amber-200/80">
            <strong>Transparency Concern:</strong> The inconsistent disclosure of patient information—sometimes 
            same-day, sometimes months later, sometimes never—creates a skewed public narrative where we 
            primarily hear about successes.
          </p>
        </div>
      </Card>

      {/* Patient List */}
      <div className="space-y-4">
        {patients.map((patient) => (
          <Card
            key={patient.id}
            variant={patient.controversy ? 'error' : patient.featured ? 'info' : 'default'}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-500 bg-gray-800 px-2 py-1 rounded">
                  P{patient.id}
                </span>
                <div>
                  <h3 className="font-bold text-white text-lg">
                    {patient.name}
                    {patient.controversy && (
                      <span className="ml-2 text-xs text-red-400 font-normal">⚠️ Controversy</span>
                    )}
                  </h3>
                  <p className="text-sm text-gray-400">{patient.condition}</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">{patient.surgeryDate}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-3 text-sm mb-3">
              <div>
                <span className="text-gray-500">Hospital:</span>{' '}
                <span className="text-gray-300">{patient.hospital}</span>
              </div>
              <div>
                <span className="text-gray-500">Study:</span>{' '}
                <span className={`font-mono text-xs px-2 py-0.5 rounded ${
                  patient.study === 'VOICE' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {patient.study}
                </span>
              </div>
              <div>
                <span className="text-gray-500">Status:</span>{' '}
                <span className="text-gray-300">{patient.status}</span>
              </div>
            </div>

            {patient.notes && (
              <div className="pt-3 mt-3 border-t border-gray-700/50">
                <p className="text-sm text-gray-400">{patient.notes}</p>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Undisclosed Patients */}
      <Card title="Undisclosed Patients" icon="🔒" variant="warning">
        <p className="mb-3">
          <strong className="text-amber-400">{undisclosedCount} patients</strong> have been implanted 
          but have no public information beyond Neuralink's count. Their names, conditions, hospitals, 
          and outcomes remain unknown.
        </p>
        <p className="text-sm text-gray-400">
          This lack of transparency makes it impossible to track outcomes or identify patterns of 
          complications. Patients who aren't posting could be fine and private, or they could be in 
          crisis with no systematic tracking.
        </p>
      </Card>
    </div>
  );
}
