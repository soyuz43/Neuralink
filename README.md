# Neuralink Clinical Trials Investigation

![Build Status](https://img.shields.io/github/actions/workflow/status/soyuz43/Neuralink/deploy.yml?label=build&logo=github)
![Deployment](https://img.shields.io/badge/deployment-live-brightgreen?logo=githubpages)
![Last Updated](https://img.shields.io/badge/last%20updated-2026-blue)
![License](https://img.shields.io/badge/license-CC%20BY%204.0-lightgrey)

## Project Overview

This repository contains an independent investigative documentation project examining Neuralink Corporation's clinical trials, regulatory compliance, and operational activities. The project employs open-source intelligence (OSINT) methodologies to compile, verify, and present publicly available information regarding Neuralink's brain-computer interface (BCI) development and human subject trials.

**Live Documentation:** [https://soyuz43.github.io/Neuralink/](https://soyuz43.github.io/Neuralink/)

---

## Investigation Scope

This investigation documents and analyzes the following areas of concern:

### Clinical Trial Operations
- **Geographic Distribution:** Seven (7) trial sites across four (4) countries (United States, United Kingdom, Canada, United Arab Emirates)
- **Trial Protocols:** PRIME, VOICE, and CONVOY studies with varying regulatory oversight
- **Surgical Procedures:** Invasive implantation of N1 devices into motor cortex and speech cortex regions
- **Patient Outcomes:** Documented tracking of 27+ implanted patients with varying levels of public disclosure

### Regulatory Compliance
- **FDA Status:** Devices remain investigational; no FDA approval for commercial distribution
- **International Expansion:** UAE-PRIME trial operating under different regulatory framework than U.S. sites
- **Regulatory Changes:** DOGE-led FDA personnel reductions affecting oversight capacity

### Ethical Concerns
- **Patient Welfare:** Documented financial hardship of Patient 4 (Mike Melgarejo) post-implantation
- **Animal Testing:** UC Davis primate research facility with documented mortality rates
- **Informed Consent:** Questions regarding patient selection and disclosure of risks
- **Data Privacy:** Neural data collection and potential surveillance implications

### Operational Infrastructure
- **Manufacturing Scale:** Austin, TX facility expansion from 112,000 to 390,000 square feet
- **Corporate Structure:** Shell entity arrangements (Riverbottoms Ranch LLC) for property acquisition
- **Surgical Hiring:** Recruitment of surgical personnel at non-clinical trial locations

### Circumstantial Evidence
- **Geographic Proximity:** Trial site locations relative to ICE detention facilities
- **Temporal Correlations:** Timing of regulatory changes and operational expansions
- **Contract Analysis:** Federal contracting patterns and entity verification

---

## Methodology

This project adheres to established OSINT investigation standards:

### Verification Standards
- **Primary Sources:** Direct links to government records, clinical trial registries, and official filings
- **Secondary Sources:** Investigative journalism, academic publications, and regulatory documents
- **Claim Classification:** All claims are categorized as Verified, Unsubstantiated, or Debunked
- **Source Attribution:** Every factual claim includes direct source links for independent verification

### Evidence Classification
- **Verified:** Claims supported by multiple primary sources or official documentation
- **Unsubstantiated:** Claims with circumstantial evidence but lacking direct proof
- **Debunked:** Claims investigated and found to be false or misleading

### Documentation Standards
- **Temporal Tracking:** All claims include dates and temporal context
- **Geographic Specificity:** Locations identified with precision (facility names, addresses, coordinates)
- **Entity Identification:** Corporate entities, individuals, and organizations fully identified with source links
- **Continuous Updates:** Documentation updated as new information becomes available

---

## Documentation Structure

The investigation is organized into eight (8) primary sections:

### Overview
Executive summary with key statistics and investigative findings. Provides high-level context for all subsequent sections.

### Clinical Trials
Comprehensive documentation of all active and planned trials, including:
- Trial site locations with interactive mapping
- Regulatory status by jurisdiction
- Surgical procedures and implantation protocols
- UAE-PRIME trial regulatory analysis

### Patient Registry
Systematic tracking of all identified patients:
- Patient identification and condition documentation
- Surgical dates and outcomes
- Public disclosure status
- Source documentation for each patient

### Controversies
Detailed examination of ethical and operational concerns:
- Patient 4 case study with GoFundMe documentation
- Animal testing mortality records
- FDA regulatory timeline
- Ethical framework analysis

### Circumstantial Evidence
Analysis of patterns and correlations requiring further investigation:
- Geographic proximity analysis
- Temporal correlation documentation
- Entity verification and debunking
- Regulatory capture indicators

### Austin Facility
Deep-dive investigation into manufacturing infrastructure:
- Property acquisition through shell entities
- Building permit analysis and scale documentation
- Corporate structure examination
- Hiring pattern analysis

### Technology
Technical documentation of Neuralink's BCI systems:
- N1 implant specifications
- R1 surgical robot capabilities
- Speech decoding pipeline
- Performance metrics and limitations
- "Black Box" transparency critique (decoder architecture opacity, Word Error Rate concerns)

### Sources
Comprehensive reference database:
- Organized by investigation category
- Direct links to all primary and secondary sources
- The Drey Dossier investigation series
- Academic and regulatory documents

---

## Technical Implementation

### Architecture
- **Framework:** React 18 with TypeScript
- **Styling:** Tailwind CSS 4 with custom design system
- **Build Tool:** Vite
- **Deployment:** GitHub Pages with automated CI/CD

### Design System
The interface employs an archival brutalist aesthetic with the following characteristics:
- Zero border-radius on all elements (sharp corners)
- Hard shadow system for tactile depth perception with "stacked sheet" model in dark mode
- Monospace typography (IBM Plex Mono) for headers and metadata
- Serif typography (Source Serif 4) for body text
- High-contrast color palette with dark mode support (system preference + manual toggle)
- Responsive design with hamburger navigation (<1024px) and "More" dropdown for overflow
- Accessibility-compliant touch targets (44px minimum)
- Fluid typography scaling with clamp() for optimal readability across devices

### Key Features
- **Dark Mode:** System preference detection with manual override, "stacked sheet" depth model with layered shadows
- **Responsive Navigation:** Hamburger menu for tablet/mobile (<1024px), "More" dropdown for overflow on desktop
- **Hash Routing:** Deep-linkable sections (#overview, #clinical-trials, #patients, etc.) with browser history support
- **Interactive Elements:** Clickable statistics, modal dialogs, source linking, direct GoFundMe links
- **Accessibility:** WCAG AA compliant contrast ratios, keyboard navigation, ARIA labels, 44px touch targets
- **Typography:** Fluid scaling with clamp(), optimized font loading via HTML <link>
- **Mobile Optimization:** Responsive grids, word-break for long URLs, scroll-margin for sticky headers

---

## Development

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Access at `http://localhost:3000`

### Production Build
```bash
npm run build
```
Output directory: `dist/`

### Preview Production Build
```bash
npm run preview
```

---

## Deployment

### Automated Deployment
The project uses GitHub Actions for continuous deployment:
- **Trigger:** Push to `main` branch
- **Build:** Vite production build
- **Deploy:** GitHub Pages deployment to `soyuz43.github.io/Neuralink/`
- **Configuration:** `.github/workflows/deploy.yml`

### Manual Deployment
```bash
npm run build
# Copy dist/ contents to GitHub Pages branch
```

---

## Content Management

### Updating Investigation Content
Each documentation section corresponds to a React component:

| Section | Component Path |
|---------|---------------|
| Overview | `src/components/OverviewTab.tsx` |
| Clinical Trials | `src/components/TrialsTab.tsx` |
| Patient Registry | `src/components/PatientsTab.tsx` |
| Controversies | `src/components/ControversiesTab.tsx` |
| Circumstantial Evidence | `src/components/CircumstantialTab.tsx` |
| Austin Facility | `src/components/AustinFacilityTab.tsx` |
| Technology | `src/components/TechnologyTab.tsx` |
| Sources | `src/components/SourcesTab.tsx` |

### Adding New Sources
Source links are managed within each component using the `SourceLink` component:
```tsx
<SourceLink 
  url="https://example.com/source"
  title="Source Title"
  description="Optional description"
/>
```

### Claim Verification Workflow
1. Gather primary source documentation
2. Verify claim against multiple independent sources
3. Classify as Verified, Unsubstantiated, or Debunked
4. Add source links with direct URLs
5. Update relevant component with new information
6. Build and deploy

---

## Legal Disclaimer

**This is an independent investigative documentation project. It is not affiliated with, endorsed by, or connected to Neuralink Corporation, Elon Musk, or any related entities.**

**Regulatory Status:** Neuralink devices are investigational and have NOT received approval from the U.S. Food and Drug Administration (FDA) or equivalent regulatory authorities in other jurisdictions. All clinical trials are conducted under Investigational Device Exemption (IDE) or equivalent regulatory frameworks.

**Information Accuracy:** All information presented is compiled from publicly available sources and is believed to be accurate as of the date of publication. However, the investigators make no warranties regarding completeness or accuracy. Users should independently verify all claims.

**No Medical Advice:** This documentation is for informational and investigative purposes only. It does not constitute medical advice, diagnosis, or treatment recommendations.

---

## Sources and References

All information in this investigation is derived from publicly available sources, including but not limited to:

### Primary Sources
- **Clinical Trial Registries:** ClinicalTrials.gov (NCT06589642, NCT07224256)
- **Regulatory Filings:** FDA IDE approvals, TDLR building permits, Texas Comptroller records
- **Government Databases:** USAspending.gov, Hawaii DCCA business registry, ICE facility locator
- **Corporate Filings:** Neuralink official statements, investor updates

### Investigative Journalism
- **The Drey Dossier:** Six-part investigative series on Substack
- **Major News Outlets:** Reuters, Bloomberg, CNBC, Fortune, Austin American-Statesman
- **Specialized Publications:** NeuraPod, MobiHealthNews, The Limbic

### Academic and Regulatory
- **Peer-Reviewed Research:** Nature, Frontiers in Human Neuroscience
- **Ethics Organizations:** Public Citizen, Physicians Committee for Responsible Medicine
- **Human Rights Reports:** Human Rights Watch, American Civil Liberties Union

### Complete Source List
The Sources tab within the documentation provides a comprehensive, categorized list of all references with direct links for independent verification.

---

## Contributing

This is an independent investigative project. Contributions are welcome in the following areas:

### Verification
- Independent verification of existing claims
- Identification of errors or outdated information
- Additional source documentation for existing claims

### Investigation
- New leads requiring investigation
- Additional circumstantial evidence analysis
- Corporate structure research
- Regulatory compliance analysis

### Technical
- Bug fixes and accessibility improvements
- Performance optimizations
- Additional source link validation

### Submission Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/investigation-update`)
3. Commit changes with detailed commit messages
4. Push to branch (`git push origin feature/investigation-update`)
5. Open a Pull Request with description of changes

All contributions will be reviewed for accuracy and source verification before merging.

---

## License

This investigative documentation is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).

You are free to:
- **Share** — copy and redistribute the material in any medium or format
- **Adapt** — remix, transform, and build upon the material for any purpose

Under the following terms:
- **Attribution** — You must give appropriate credit, provide a link to the license, and indicate if changes were made.

---

## Contact

For questions, corrections, or additional information regarding this investigation:

- **GitHub Issues:** [Report issues or request information](https://github.com/soyuz43/Neuralink/issues)
- **Pull Requests:** Contributions welcome (see Contributing section)

---

## Acknowledgments

This investigation builds upon the work of numerous journalists, researchers, and investigators who have documented Neuralink's activities. Special acknowledgment to:

- **The Drey Dossier** for comprehensive investigative reporting
- **NeuraPod** for patient tracking and trial site documentation
- **ClinicalTrials.gov** for transparent trial registration
- **All journalists and researchers** who have covered this story

---

**Last Updated:** 2026  
**Investigation Status:** Active  
**Documentation Version:** 3.0
