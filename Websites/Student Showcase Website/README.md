# CIIT Student Showcase

The **CIIT Student Showcase** is a web-based platform designed to highlight the creative works of CIITzens. It serves as a digital gallery for students, faculty, and staff to exhibit their talents in digital arts, programming, game development, and more.

---

## ## Features & Functionality

The platform is built to provide an engaging and professional portfolio experience:

* **Dynamic Gallery**: A central hub (`index.html`) featuring a grid-based showcase of student projects with hover effects and responsive layouts.
* **Creator Profiles**: Dedicated pages (e.g., `Halley Carvajal.html`) that highlight individual artists, featuring a bio, social links, and an interactive comment section.
* **Work Submission System**: A specialized form (`worksubmission.html`) that allows students to submit their creative work, complete with field validation and submission states.
* **Featured Creators Section**: A filtered view (`Feature_creator.html`) specifically for high-achieving artists and standout projects.
* **Institutional Guidelines**: A structured `Guidelines.html` page detailing submission rules, intellectual property rights, and technical requirements.
* **Immersive UI**: Built using **Tailwind CSS** and **Remix Icons**, the site features a modern aesthetic with deep-sea blue and yellow accents representing the CIIT brand.

---

## ## Technical Architecture

The project follows a modular frontend structure designed for scalability:

* **UI Framework**: **Tailwind CSS (v3.4.16)** for utility-first styling and responsive design.
* **Typography**: Integrated Google Fonts including *Pacifico*, *Krona One*, and *Montserrat* for a distinct brand identity.
* **Interactivity**: Vanilla JavaScript handles form validation, dynamic grid animations, and UI state changes (e.g., submission loading states).
* **Asset Management**: Standardized navigation and footer components across all pages to ensure a consistent user journey.

---

## ## Setup & Installation

To host or view the CIIT Student Showcase locally, follow these steps:

1.  **Clone the Repository**: Download all `.html` files and ensure they remain in the same root directory.
2.  **Asset Dependencies**:
    * Ensure the following image assets are in the root folder: `CIIT logo.png`, `CIITLOGO.png`, `instagram.png`, `facebook.png`, and any creator-specific images (e.g., `purple bg.png`).
3.  **Local Hosting**:
    * The project uses CDN-based scripts for Tailwind and Remix Icons, so an **active internet connection** is required for full styling.
    * Simply open `index.html` in any modern web browser to begin.
4.  **Submission Form Simulation**: The submission form is currently configured for frontend demonstration. To enable actual data collection, the `submit` event listener in `worksubmission.html` should be linked to a backend API.

---

## ## Submission Workflow

The platform follows a specific protocol for content updates:

1.  **Review**: Students read the submission rules in `Guidelines.html`.
2.  **Submit**: Users fill out the form in `worksubmission.html`, providing links to their work and personal info.
3.  **Showcase**: Once approved by screeners, the data is used to generate a new entry in the `index.html` grid and a new creator profile page.
