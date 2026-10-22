const patients = [
  {
    id: 1,
    name: 'Noland Arbaugh',
    condition: 'SCI (Tetraplegia)',
    surgeryDate: 'January 2024',
    hospital: 'Barrow Neurological Institute, Phoenix, AZ',
    study: 'PRIME',
    publicDisclosure: 'Same day as surgery',
    socialMedia: 'Active on X',
    status: 'Publicly active, positive updates',
    notes: 'First Neuralink patient. Reported 85% thread retraction at one month, resolved via software updates.',
    featured: true,
  },
  {
    id: 2,
    name: 'Alex Conley',
    condition: 'SCI',
    surgeryDate: 'July 2024',
    hospital: 'Barrow Neurological Institute, Phoenix, AZ',
    study: 'PRIME, CONVOY',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Minimal presence',
    status: 'Controlling robot arm',
    notes: 'Second patient. Had procedure modifications to reduce brain motion and place implant closer to surface.',
    featured: false,
  },
  {
    id: 3,
    name: 'Brad Smith',
    condition: 'ALS',
    surgeryDate: 'November 2024',
    hospital: 'Barrow Neurological Institute, Phoenix, AZ',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Active on X',
    status: 'First ALS patient, publicly active',
    notes: 'First ALS patient. Featured in Neuralink promotional materials.',
    featured: true,
  },
  {
    id: 4,
    name: 'Mike Melgarejo',
    condition: 'ALS (advanced)',
    surgeryDate: 'February 2025',
    hospital: 'Barrow Neurological Institute, Phoenix, AZ',
    study: 'PRIME',
    publicDisclosure: 'Featured in Neuralink Summer 2025 update',
    socialMedia: 'NO public social media presence',
    status: 'GoFundMe crisis campaign June 2025',
    notes: 'Featured in Neuralink promotional video talking about working full-time. GoFundMe created 4 months post-surgery stating he was "ready to give up on life" and in complete crisis. Shivon Zilis donated $3,000.',
    featured: true,
    controversy: true,
  },
  {
    id: 5,
    name: 'RJ Tanner',
    condition: 'SCI',
    surgeryDate: 'April 2025',
    hospital: 'University of Miami Health, Miami, FL',
    study: 'PRIME, CONVOY',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Minimal information',
    status: 'Limited public information',
    notes: 'First patient at University of Miami site.',
    featured: false,
  },
  {
    id: 6,
    name: 'Rob Greiner',
    condition: 'SCI',
    surgeryDate: 'June 2025',
    hospital: 'Barrow Neurological Institute, Phoenix, AZ',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'Limited public information',
    notes: '',
    featured: false,
  },
  {
    id: 7,
    name: 'Jake Schneider',
    condition: 'ALS',
    surgeryDate: 'June 2025',
    hospital: 'Barrow Neurological Institute, Phoenix, AZ',
    study: 'PRIME, CONVOY',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'Limited public information',
    notes: 'Also referred to as "Patient 7" in VOICE trial demonstrations.',
    featured: false,
  },
  {
    id: 8,
    name: 'Nick Wray',
    condition: 'ALS',
    surgeryDate: 'July 2025',
    hospital: 'University of Miami Health, Miami, FL',
    study: 'PRIME, CONVOY',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'Feeding himself unassisted',
    notes: 'Milestone: First patient to feed himself unassisted with implant.',
    featured: true,
  },
  {
    id: 9,
    name: 'Audrey Crews',
    condition: 'SCI',
    surgeryDate: 'July 2025',
    hospital: 'University of Miami Health, Miami, FL',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Active on X',
    status: 'First woman with Neuralink implant',
    notes: 'First female patient. Publicly active with updates.',
    featured: true,
  },
  {
    id: 10,
    name: 'Not publicly disclosed',
    condition: 'Unknown',
    surgeryDate: '2025',
    hospital: 'Unknown',
    study: 'Unknown',
    publicDisclosure: 'Not disclosed',
    socialMedia: 'None',
    status: 'No public information',
    notes: 'Patient exists per Neuralink count but no details shared.',
    featured: false,
  },
  {
    id: 11,
    name: 'Not publicly disclosed',
    condition: 'Unknown',
    surgeryDate: '2025',
    hospital: 'Unknown',
    study: 'Unknown',
    publicDisclosure: 'Not disclosed',
    socialMedia: 'None',
    status: 'No public information',
    notes: 'Patient exists per Neuralink count but no details shared.',
    featured: false,
  },
  {
    id: 12,
    name: 'Not publicly disclosed',
    condition: 'Unknown',
    surgeryDate: '2025',
    hospital: 'Unknown',
    study: 'Unknown',
    publicDisclosure: 'Not disclosed',
    socialMedia: 'None',
    status: 'No public information',
    notes: 'Patient exists per Neuralink count but no details shared.',
    featured: false,
  },
  {
    id: 13,
    name: 'Paul (last name not disclosed)',
    condition: 'Motor Neurone Disease (ALS)',
    surgeryDate: 'October 2025',
    hospital: 'University College London Hospitals, UK',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'First UK Neuralink patient',
    notes: 'First patient in United Kingdom.',
    featured: true,
  },
  {
    id: 14,
    name: 'Not publicly disclosed',
    condition: 'Unknown',
    surgeryDate: '2025',
    hospital: 'Unknown',
    study: 'Unknown',
    publicDisclosure: 'Not disclosed',
    socialMedia: 'None',
    status: 'No public information',
    notes: '',
    featured: false,
  },
  {
    id: 15,
    name: 'Not publicly disclosed',
    condition: 'Unknown',
    surgeryDate: '2025',
    hospital: 'Unknown',
    study: 'Unknown',
    publicDisclosure: 'Not disclosed',
    socialMedia: 'None',
    status: 'No public information',
    notes: '',
    featured: false,
  },
  {
    id: 16,
    name: 'Not publicly disclosed',
    condition: 'Unknown',
    surgeryDate: '2025',
    hospital: 'Unknown',
    study: 'Unknown',
    publicDisclosure: 'Not disclosed',
    socialMedia: 'None',
    status: 'No public information',
    notes: '',
    featured: false,
  },
  {
    id: 17,
    name: 'Not publicly disclosed',
    condition: 'Unknown',
    surgeryDate: '2025',
    hospital: 'Unknown',
    study: 'Unknown',
    publicDisclosure: 'Not disclosed',
    socialMedia: 'None',
    status: 'No public information',
    notes: '',
    featured: false,
  },
  {
    id: 18,
    name: 'Jon Noble',
    condition: 'SCI',
    surgeryDate: 'December 2025',
    hospital: 'University College London Hospitals, UK',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'UK patient',
    notes: '',
    featured: false,
  },
  {
    id: 19,
    name: 'Sebastian Gomez-Peña',
    condition: 'SCI',
    surgeryDate: 'December 2025',
    hospital: 'University College London Hospitals, UK',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'UK patient',
    notes: '',
    featured: false,
  },
  {
    id: 20,
    name: 'Eoin Egan',
    condition: 'Motor Neurone Disease (ALS)',
    surgeryDate: 'December 2025',
    hospital: 'University College London Hospitals, UK',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'First Irish BCI recipient',
    notes: 'First Irish patient with brain-computer interface.',
    featured: true,
  },
  {
    id: 21,
    name: 'Kenneth Shock',
    condition: 'ALS',
    surgeryDate: 'January 2026',
    hospital: 'UT Southwestern Medical Center, Dallas, TX',
    study: 'VOICE',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'VOICE trial patient',
    notes: 'First identified VOICE trial patient at Dallas site.',
    featured: true,
  },
  {
    id: 22,
    name: 'Zach McManus',
    condition: 'ALS',
    surgeryDate: '2026 (month not disclosed)',
    hospital: 'Barrow Neurological Institute, Phoenix, AZ',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'Driving robot vacuum with mind',
    notes: 'Demonstrated robot vacuum control.',
    featured: true,
  },
  {
    id: 23,
    name: '"LeBrain James"',
    condition: 'Not public',
    surgeryDate: '2026 (month not disclosed)',
    hospital: 'Not public',
    study: 'Not public',
    publicDisclosure: 'Self-disclosed on X',
    socialMedia: 'Active on X',
    status: 'Publicly active',
    notes: 'Uses pseudonym on social media.',
    featured: false,
  },
  {
    id: 24,
    name: 'CJ Johnson',
    condition: 'SCI',
    surgeryDate: 'March 2026',
    hospital: 'University of Miami Health, Miami, FL',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'Miami patient',
    notes: '',
    featured: false,
  },
  {
    id: 25,
    name: 'Terence Mandable',
    condition: 'Bulbar-onset ALS',
    surgeryDate: '2026 (month not disclosed)',
    hospital: 'UT Southwestern Medical Center, Dallas, TX',
    study: 'VOICE',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'VOICE trial patient',
    notes: 'Second identified VOICE trial patient.',
    featured: true,
  },
  {
    id: 26,
    name: 'Lee Marten',
    condition: 'ALS',
    surgeryDate: 'May 2026',
    hospital: 'Toronto General Hospital - UHN, Canada',
    study: 'PRIME',
    publicDisclosure: 'Post-surgery',
    socialMedia: 'Unknown',
    status: 'First Canadian ALS patient',
    notes: 'First Canadian ALS patient; first implant through the dura.',
    featured: true,
  },
  {
    id: 27,
    name: 'Not publicly disclosed',
    condition: 'Unknown',
    surgeryDate: '2026',
    hospital: 'Unknown',
    study: 'Unknown',
    publicDisclosure: 'Not disclosed',
    socialMedia: 'None',
    status: 'No public information',
    notes: '',
    featured: false,
  },
];

export default function KnownPatients() {
  const publicPatients = patients.filter(p => p.name !== 'Not publicly disclosed');
  const undisclosedCount = patients.filter(p => p.name === 'Not publicly disclosed').length;

  return (
    <section id="known-patients" className="scroll-mt-20">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span className="text-3xl">👥</span> Known Patients Registry
      </h2>

      <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700 mb-6">
        <p className="text-sm text-gray-400 leading-relaxed">
          As of 2026, Neuralink has implanted <strong className="text-white">27+ patients</strong> across clinical trials.
          Of these, <strong className="text-white">{publicPatients.length}</strong> have been publicly identified by name.
          <strong className="text-amber-400"> {undisclosedCount} patients</strong> have no public information beyond Neuralink's count.
          This lack of systematic tracking raises concerns about patient outcomes and transparency.
        </p>
      </div>

      <div className="space-y-4">
        {patients.map((patient) => (
          <div
            key={patient.id}
            className={`p-4 rounded-lg border transition-all ${
              patient.controversy
                ? 'bg-red-500/5 border-red-500/30'
                : patient.featured
                ? 'bg-blue-500/5 border-blue-500/20'
                : 'bg-gray-800/30 border-gray-700'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-gray-500 bg-gray-800 px-2 py-1 rounded">
                  P{patient.id}
                </span>
                <h3 className="font-bold text-white">
                  {patient.name}
                  {patient.controversy && (
                    <span className="ml-2 text-xs text-red-400 font-normal">⚠️ Controversy</span>
                  )}
                </h3>
              </div>
              <span className="text-xs text-gray-500">{patient.surgeryDate}</span>
            </div>

            <div className="grid gap-2 sm:grid-cols-2 text-sm mb-3">
              <div>
                <span className="text-gray-500">Condition:</span>{' '}
                <span className="text-gray-300">{patient.condition}</span>
              </div>
              <div>
                <span className="text-gray-500">Study:</span>{' '}
                <span className={`font-mono text-xs px-2 py-0.5 rounded ${
                  patient.study === 'VOICE' ? 'bg-purple-500/10 text-purple-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {patient.study}
                </span>
              </div>
              <div className="sm:col-span-2">
                <span className="text-gray-500">Hospital:</span>{' '}
                <span className="text-gray-300">{patient.hospital}</span>
              </div>
            </div>

            <div className="text-xs text-gray-400 space-y-1">
              <div>
                <span className="text-gray-500">Public Disclosure:</span> {patient.publicDisclosure}
              </div>
              <div>
                <span className="text-gray-500">Social Media:</span> {patient.socialMedia}
              </div>
              <div>
                <span className="text-gray-500">Status:</span> {patient.status}
              </div>
              {patient.notes && (
                <div className="pt-2 mt-2 border-t border-gray-700/50">
                  <span className="text-gray-500">Notes:</span> {patient.notes}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 rounded-lg bg-amber-900/20 border border-amber-800/30">
        <h3 className="font-bold text-amber-400 text-sm mb-2">Transparency Concerns</h3>
        <p className="text-sm text-amber-200/80 leading-relaxed">
          The inconsistent disclosure of patient information—sometimes same-day, sometimes months later,
          sometimes never—creates a skewed public narrative where we primarily hear about successes.
          Patients who aren't posting could be fine and private, or they could be in crisis with no
          systematic tracking. This opacity makes it impossible to distinguish between patients struggling
          because of the technology and patients simply choosing privacy.
        </p>
      </div>
    </section>
  );
}
