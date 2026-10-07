# 🎓 Veerasit Kaewbundit — Academic & Research Portfolio

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Website-6366f1?style=flat-square&logo=github)](https://veerasit-k.github.io)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=flat-square)](LICENSE)
[![Google Scholar](https://img.shields.io/badge/Scholar-Citations-4285F4?style=flat-square&logo=google-scholar)](https://scholar.google.com/citations?user=68e_O6kAAAAJ&hl=en)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/veerasit-kaewbundit/)

A lean, minimal, and high-performance **Academic & Research Portfolio** designed for AI engineers, researchers, and prospective graduate scholars. Built with zero build pipelines, pure vanilla web standards, and instant GitHub Pages deployment.

---

## 🏛️ Overview

This portfolio presents the scholarly work, research publications, enterprise engineering leadership, and academic background of **Veerasit Kaewbundit** (AI Engineer & Applied AI Researcher at CardX, SCBX Group Enterprise AI CoE and Department of Industrial Engineering, Kasetsart University).

### 🌟 Key Highlights & Design System
- **Scholarly Design Aesthetic:** Minimalist editorial design inspired by leading research institutions (Stanford, Oxford, DeepMind Research).
- **Default Dark Mode with Ambient Aurora:** Deep obsidian slate background (`#0b0f17`) layered with soft ambient radial glows and a subtle mathematical/engineering grid pattern (`38px × 38px`).
- **Interactive Light Theme Switcher:** Warm parchment academic tone (`#faf9f6`) toggled via navbar with persistent `localStorage` preference.
- **Frosted-Glass Depth:** Structural cards utilize `backdrop-filter: blur(12px)` for layered visual hierarchy.
- **Scientific Artwork Showcases:** Curated visual artwork frames accompanying peer-reviewed publications and bachelor's thesis.
- **Dynamic Experience Counter:** Client-side JavaScript computing years of industry experience from career inception (Apr 2023).
- **Tabbed Publications:** Segmented view for peer-reviewed journal articles (*Scopus Q1/Q2*) and forthcoming work-in-progress.
- **Zero-Dependency Core:** 100% Vanilla HTML5, CSS3, and ES6 JavaScript — no npm, node_modules, bundlers, or frameworks required.

---

## 📁 Repository Structure

```text
portfolio/
├── index.html                       # Semantic HTML5 document (SEO & OpenGraph ready)
├── README.md                        # Documentation & deployment guide
└── assets/
    ├── css/
    │   └── style.css                # CSS custom properties, typography & layout system
    ├── js/
    │   └── main.js                  # Theme engine, tab state & dynamic calculation logic
    └── images/
        ├── profile.jpg              # Scholar portrait image
        ├── pub-pm25-art.jpg         # Paper 1: Atmospheric PM2.5 Deep Learning (Scopus Q1)
        ├── pub-rice-art.jpg         # Paper 2: Rice Seed Vigor Computer Vision (Scopus Q1)
        ├── pub-albumin-art.jpg      # Paper 3: Chicken Albumin Molecular Dynamics (Scopus Q1)
        ├── pub-farmers-art.jpg      # Paper 4: Agricultural Workers Mental Health (Scopus Q2)
        ├── pub-aod-art.jpg          # Paper 5: Aerosol Optical Depth Forecasting
        ├── thesis-dermatology-art.jpg # Bachelor's Thesis: Nail Dermoscopy Triage
        ├── wip-media-art.jpg        # WIP 1: Digital Media Engagement Dynamics
        └── wip-nanopore-art.jpg     # WIP 2: Nanofluidic Pore Conductance Modeling
```

---

## 🚀 Local Development & Preview

Because this project is built entirely on native web standards, you can preview it immediately:

### Option 1: Direct File Opening
Double-click `index.html` to open directly in any modern web browser.

### Option 2: Python Local Server (Recommended)
Open a terminal inside the project directory and execute:
```bash
python -m http.server 8000
```
Navigate to: [http://localhost:8000](http://localhost:8000)

---

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository
1. Navigate to [GitHub New Repository](https://github.com/new).
2. Set the repository name:
   - **Recommended (User Site):** `Veerasit-k.github.io`  
     *(Produces the canonical root URL: `https://veerasit-k.github.io`)*
   - **Alternative (Project Site):** `portfolio`  
     *(Produces: `https://veerasit-k.github.io/portfolio/`)*
3. Select **Public**.
4. Leave *Initialize with README* **unchecked**.
5. Click **Create repository**.

### Step 2: Push Local Code to GitHub
Open Terminal / PowerShell in the workspace root (`c:\Research\portfolio`) and run:

```bash
# If your repo is named Veerasit-k.github.io:
git remote add origin https://github.com/Veerasit-k/Veerasit-k.github.io.git
git push -u origin main

# OR if your repo is named portfolio:
git remote add origin https://github.com/Veerasit-k/portfolio.git
git push -u origin main
```

### Step 3: Enable GitHub Pages (Only needed if using `portfolio`)
- For `Veerasit-k.github.io`: GitHub Pages activates **automatically**.
- For other repo names:
  1. Go to repository **Settings** > **Pages**
  2. Under **Build and deployment > Branch**: Select `main` and `/(root)`
  3. Click **Save**

Your site will be live across worldwide CDNs within 1–2 minutes!

---

## 📝 Customization & Maintenance

| Item | File / Path | Notes |
| :--- | :--- | :--- |
| **Biographical & Research Content** | [index.html](index.html) | Update publications, experience timeline, and contact information |
| **Theme & Aesthetic Tokens** | [assets/css/style.css](assets/css/style.css) | Modify color variables (`:root` / `[data-theme="light"]`) and typography |
| **Scripts & Logic** | [assets/js/main.js](assets/js/main.js) | Adjust career start date in `initYearsExp()` or theme persistence |
| **Profile Portrait** | `assets/images/profile.jpg` | Recommended: Square ratio, 400×400px or larger |
| **Scientific Artworks** | `assets/images/*.jpg` | Match naming convention outlined in project structure |

---

## 📄 License

This portfolio codebase is open-sourced under the [MIT License](LICENSE).
Personal research writings, publication abstracts, and intellectual content © Veerasit Kaewbundit.
