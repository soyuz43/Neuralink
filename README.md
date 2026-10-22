# Neuralink Documentation - Modern Tabbed Interface

A comprehensive, modern documentation site for Neuralink's clinical trials, built with React, TypeScript, and Tailwind CSS.

## 🎨 Design Changes

### From Single-Page Scroll to Tabbed Interface

**Before:** Long scrolling page with sidebar navigation (Time Cube-style)
**After:** Modern tabbed interface with organized content sections

### Key Features

- **Tab-based navigation** at the top for easy section switching
- **Card-based layouts** for better visual hierarchy
- **Responsive design** that works on mobile and desktop
- **Clean, modern UI** with proper spacing and typography
- **Color-coded warnings** for important information
- **Organized content** by topic instead of chronological

## 📑 Tab Structure

### 1. Overview Tab
- Hero section with key statistics
- Quick information cards
- Navigation shortcuts to other tabs

### 2. Clinical Trials Tab
- Global trial locations map
- UAE-PRIME trial details
- VOICE trial information
- Speech cortex surgery details

### 3. Patients Tab
- Complete patient registry
- Individual patient cards with status
- Transparency concerns highlighted

### 4. Controversies Tab
- Patient 4 (Mike Melgarejo) case study
- Animal testing documentation
- FDA regulatory timeline
- Ethical concerns

### 5. Technology Tab
- N1 implant specifications
- R1 surgical robot details
- Speech decoding pipeline
- Performance metrics
- Future roadmap

### 6. Sources Tab
- Organized by category
- Direct links to all references
- The Drey Dossier investigation series
- Academic and news sources

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Vite** - Build tool

## 🌐 Deployment

The site is deployed to GitHub Pages at:
https://soyuz43.github.io/Neuralink/

### Deployment Configuration

- **Base path:** `/Neuralink/` (configured in `vite.config.js`)
- **GitHub Actions:** Automatic deployment on push to main
- **Build output:** `dist/` folder

## 📝 Content Updates

To update content, edit the corresponding tab component:
- `src/components/OverviewTab.tsx`
- `src/components/TrialsTab.tsx`
- `src/components/PatientsTab.tsx`
- `src/components/ControversiesTab.tsx`
- `src/components/TechnologyTab.tsx`
- `src/components/SourcesTab.tsx`

## ⚠️ Disclaimer

This is an independent documentation project. Not affiliated with Neuralink Corp.

Neuralink devices are investigational and have NOT been approved by the FDA or other regulatory authorities.

## 📚 Sources

All information is compiled from publicly available sources including:
- The Drey Dossier investigation series (Substack)
- Clinical trial registries
- News reports and investigations
- Academic publications
- Official Neuralink statements

See the Sources tab for complete references with direct links.
