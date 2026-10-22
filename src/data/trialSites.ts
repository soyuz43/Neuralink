export interface TrialSite {
  id: string;
  city: string;
  state: string;
  country: string;
  facility: string;
  trials: string[];
  firstImplant: string;
  status: 'active' | 'enrolling' | 'pending';
  flag: string;
  description: string;
  details: {
    about: string;
    trialDetails: string;
    nearbyFacilities?: string;
    sources: Array<{ title: string; url: string }>;
  };
}

export const trialSites: TrialSite[] = [
  {
    id: 'phoenix',
    city: 'Phoenix',
    state: 'AZ',
    country: 'USA',
    facility: 'Barrow Neurological Institute',
    trials: ['PRIME', 'CONVOY'],
    firstImplant: 'January 2024',
    status: 'active',
    flag: '🇺🇸',
    description: 'First Neuralink trial site. Location of Patient 1 (Noland Arbaugh) implant.',
    details: {
      about: 'Barrow Neurological Institute is a leading neuroscience research and treatment center located in Phoenix, Arizona. It was the first site selected for Neuralink\'s PRIME clinical trial and saw the world\'s first human Neuralink implant in January 2024.',
      trialDetails: 'The PRIME study (Precise Robotically Implanted Brain-Computer Interface) investigates hands-free control of computers and robotic arms for people with quadriplegia from ALS, brain stem stroke, or spinal cord injury. The CONVOY study expands this research.',
      nearbyFacilities: 'Located in Maricopa County, relatively near the Eloy and Florence ICE detention centers in Pinal County, Arizona. This geographic proximity has been noted by investigators.',
      sources: [
        { title: 'Barrow Neurological Institute: PRIME Study Site Announcement', url: 'https://www.barrowneuro.org/about/news-and-articles/press-releases/prime-study-site-announcement/' },
        { title: 'Neuralink Official Clinical Trials Page', url: 'https://neuralink.com/trials/' },
        { title: 'NeuraPod: Barrow Neurological Institute', url: 'https://www.neurapod.com/clinical-trial-sites/barrow-neurological-institute' },
        { title: 'Florence Project: Eloy Detention Center Report (June 2024 - Nov 2025)', url: 'https://firrp.org/medical-neglect-strip-searches-and-abuse-deadly-and-dehumanizing-conditions-in-the-eloy-detention-center-june-2024-november-2025/' },
        { title: 'Axios: Arizona ICE solitary confinement spike', url: 'https://www.axios.com/local/phoenix/2025/10/08/arizona-ice-solitary-confinement-rise' },
      ],
    },
  },
  {
    id: 'dallas',
    city: 'Dallas',
    state: 'TX',
    country: 'USA',
    facility: 'UT Southwestern Medical Center',
    trials: ['VOICE'],
    firstImplant: '2025',
    status: 'active',
    flag: '🇺🇸',
    description: 'Home of the VOICE trial for speech restoration. Speech cortex surgery performed here.',
    details: {
      about: 'UT Southwestern Medical Center in Dallas, Texas is a leading academic medical center. It is the exclusive site for Neuralink\'s VOICE trial, which focuses on speech restoration through brain-computer interfaces.',
      trialDetails: 'The VOICE trial (NCT07224256) is an Early Feasibility Study evaluating the N1 Implant and R1 System for speech restoration. It targets patients with severe speech impairment from ALS, stroke, spinal cord injury, or other conditions. The implant is placed in the speech cortex to decode imagined speech into text or synthesized voice.',
      sources: [
        { title: 'ClinicalTrials.gov: VOICE Trial (NCT07224256)', url: 'https://clinicaltrials.gov/study/NCT07224256' },
        { title: 'Neuralink Speech Restoration Trial', url: 'https://neuralink.com/trials/speech-restoration/' },
        { title: 'NeuraPod: UT Southwestern Medical Center', url: 'https://www.neurapod.com/clinical-trial-sites/ut-southwestern-medical-center' },
        { title: 'Reuters: Neuralink plans brain implant trial for speech impairments', url: 'https://www.reuters.com/business/healthcare-pharmaceuticals/elon-musks-neuralink-plans-brain-implant-trial-speech-impairments-2025-09-19/' },
      ],
    },
  },
  {
    id: 'miami',
    city: 'Miami',
    state: 'FL',
    country: 'USA',
    facility: 'University of Miami Health',
    trials: ['PRIME', 'CONVOY'],
    firstImplant: 'April 2025',
    status: 'active',
    flag: '🇺🇸',
    description: 'Second U.S. trial site. Located in same county as Krome ICE detention facility.',
    details: {
      about: 'The Miami Project to Cure Paralysis at University of Miami Miller School of Medicine was selected as the second U.S. site for Neuralink\'s PRIME clinical trial in January 2025. The first implant occurred in April 2025.',
      trialDetails: 'Same PRIME and CONVOY studies as Phoenix, investigating device control for paralysis patients. The Miami Project has a long history of spinal cord injury research.',
      nearbyFacilities: 'Located in Miami-Dade County, the same county as the Krome Service Processing Center, a major ICE intake and detention facility. Investigative reporting has documented severe medical emergencies and deaths at Krome with neurological symptoms.',
      sources: [
        { title: 'The Miami Project: Neuralink Trial Site Selection', url: 'https://news.med.miami.edu/the-miami-project-to-cure-paralysis-selected-as-site-for-neuralink-clinical-trial/' },
        { title: 'NeuraPod: University of Miami Health', url: 'https://www.neurapod.com/clinical-trial-sites/university-of-miami-health' },
        { title: 'Miami Herald: Krome deaths and neurological symptoms', url: 'https://www.miamiherald.com/news/local/immigration/article304966226.html' },
        { title: 'WLRN: Medical emergencies at Krome', url: 'https://www.wlrn.org/immigration/2025-08-29/increased-medical-emergencies-at-krome-as-immigrant-detention-swells' },
        { title: 'ICE Facility Locator: Krome Service Processing Center', url: 'https://www.ice.gov/detain/detention-facilities' },
      ],
    },
  },
  {
    id: 'toronto',
    city: 'Toronto',
    state: 'ON',
    country: 'Canada',
    facility: 'University Health Network (UHN)',
    trials: ['CAN-PRIME'],
    firstImplant: 'August 2025',
    status: 'active',
    flag: '🇨🇦',
    description: 'First Canadian Neuralink trial site. First implant through the dura performed here.',
    details: {
      about: 'University Health Network (UHN) in Toronto, Ontario is Canada\'s first site for Neuralink clinical trials. The CAN-PRIME study began in 2025, with the first implant in August 2025.',
      trialDetails: 'The CAN-PRIME study mirrors the U.S. PRIME study but operates under Canadian regulatory authority (Health Canada). Patient 26 (Lee Marten) was the first Canadian ALS patient and the first to have an implant placed through the dura.',
      sources: [
        { title: 'NeuraPod: Toronto General Hospital - UHN', url: 'https://www.neurapod.com/clinical-trial-sites/toronto-general-hospital---university-health-network-uhn' },
        { title: 'University Health Network', url: 'https://www.uhn.ca/' },
      ],
    },
  },
  {
    id: 'london',
    city: 'London',
    state: '',
    country: 'United Kingdom',
    facility: 'University College London Hospitals',
    trials: ['GB-PRIME'],
    firstImplant: 'October 2025',
    status: 'active',
    flag: '🇬🇧',
    description: 'First UK Neuralink site. Part of the GB-PRIME study.',
    details: {
      about: 'University College London Hospitals (UCLH) is one of two UK sites for Neuralink\'s GB-PRIME study. The first implant occurred in October 2025. Multiple UK patients have been implanted here.',
      trialDetails: 'The GB-PRIME study operates under UK MHRA regulatory authority. Patients 13 (Paul), 18 (Jon Noble), 19 (Sebastian Gomez-Peña), and 20 (Eoin Egan) were all implanted at UCLH.',
      sources: [
        { title: 'NeuraPod: University College London Hospitals', url: 'https://www.neurapod.com/clinical-trial-sites/university-college-london-hospitals' },
        { title: 'UCLH NHS Foundation Trust', url: 'https://www.uclh.nhs.uk/' },
      ],
    },
  },
  {
    id: 'newcastle',
    city: 'Newcastle upon Tyne',
    state: '',
    country: 'United Kingdom',
    facility: 'Newcastle upon Tyne Hospitals',
    trials: ['GB-PRIME'],
    firstImplant: 'Pending',
    status: 'enrolling',
    flag: '🇬🇧',
    description: 'Second UK Neuralink site. Currently enrolling patients.',
    details: {
      about: 'Newcastle upon Tyne Hospitals is the second UK site for the GB-PRIME study. As of late 2025, the site is actively enrolling patients.',
      trialDetails: 'Part of the same GB-PRIME study as UCLH London, operating under UK MHRA regulatory authority.',
      sources: [
        { title: 'NeuraPod: Newcastle upon Tyne Hospitals', url: 'https://www.neurapod.com/clinical-trial-sites/newcastle-upon-tyne-hospitals' },
      ],
    },
  },
  {
    id: 'abu-dhabi',
    city: 'Abu Dhabi',
    state: '',
    country: 'UAE',
    facility: 'Cleveland Clinic Abu Dhabi',
    trials: ['UAE-PRIME'],
    firstImplant: 'Pending',
    status: 'enrolling',
    flag: '🇦🇪',
    description: 'First international Neuralink trial. Operates under UAE regulatory authority, not FDA.',
    details: {
      about: 'Cleveland Clinic Abu Dhabi is the site of Neuralink\'s first international clinical trial, UAE-PRIME. This partnership with the Department of Health Abu Dhabi has raised significant questions about regulatory arbitrage.',
      trialDetails: 'The UAE-PRIME trial explicitly includes speech impairment patients—the same population targeted by the VOICE trial. This means speech cortex surgery could be performed under UAE regulatory authority rather than FDA oversight. The regulatory framework may differ significantly from U.S. standards.',
      sources: [
        { title: 'Bloomberg Law: Neuralink to Launch Trial in Abu Dhabi', url: 'https://news.bloomberglaw.com/tech-and-telecom-law/neuralink-to-launch-brain-implant-clinical-trial-in-abu-dhabi' },
        { title: 'Khaleej Times: UAE\'s first brain chip trials', url: 'https://www.khaleejtimes.com/uae/neuralink-brain-chips-trial-abu-dhabi-cleveland-clinic' },
        { title: 'Cleveland Clinic Abu Dhabi: BCI Systems', url: 'https://www.clevelandclinicabudhabi.ae/en/health-library/health-resources/treatments-and-procedures/shaping-the-future-of-neurological-care' },
        { title: 'Teslarati: Neuralink Blindsight trials in UAE', url: 'https://www.teslarati.com/neuralink-blindsight-human-trials/' },
      ],
    },
  },
];
