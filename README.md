# EDCIC Website

Official website of the Entrepreneurship Development Cell & Incubation Centre, St. Xavier's College (Autonomous), Kolkata.
Built with React (Create React App). Deployed on Vercel from the `main` branch.

## Run locally

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build (same check Vercel runs; lint warnings fail it)
```

## Where to change things

**Rule of thumb:** all words, names, links and picture choices live in `src/config/`, `src/content/` and `src/team/`. Page files in `src/pages/` only draw them.

| I want to change... | Edit |
|---|---|
| Team members (name, position, phone, email, LinkedIn, order) | `src/team/members.js` |
| A team photo | save it as `src/team/photos/firstname-lastname.png` (auto-matched by name) |
| Home page: hero text/buttons, principal's note, vision, events cards, initiatives cards, IIC certificate | `src/content/home.js` |
| About Us timeline | `src/content/about.js` |
| EAC page (text, speakers, photos) | `src/content/eac.js` |
| Prism, Initium (incl. stats), 360 Workshop, Entreprise, Elevator pages | `src/content/events.js` |
| Incubation Centre, Live Projects, EDF, Bizwalk, Envisage (incl. editorial team), Seed Stories pages | `src/content/initiatives.js` |
| 404 page and Archives page text | `src/content/misc.js` |
| Gallery photos | add / remove / rename files in `src/assets/gallery/` (shown in file-name order) |
| Our Associations logos | `src/content/associations.js` (+ the logo file in `src/assets/ourAssociations/`) |
| Our Network people | `src/content/network.js` (+ the photo in `src/assets/network/`) |
| Emails, social links, copyright, logos, registration / YouTube links | `src/config/site.js` |
| Downloadable PDFs (Envisage) | `src/config/documents.js` (replace the file in `src/assets/`) |
| Navbar / footer links | `src/config/navigation.js` |
| Page routes (URLs) | `src/App.js` |
| Colours, spacing, fonts | the matching file in `src/styles/` |

**Changing a picture:** either replace the file in `src/assets/` keeping the same file name, or change the `import ... from "../assets/..."` line at the top of the content file.

## Project layout

```
src/
  config/       site-wide links, emails, logos, PDFs, navigation
  content/      the text, lists and pictures of every page (one file per group of pages)
  team/         team members file + their photos
  pages/        one file per page
  components/   reusable sections
  styles/       CSS per page / component
  assets/       images and documents
public/         index.html, favicon, manifest
vercel.json     makes direct links like /team work on Vercel
```

## Deploying (Vercel)

- Build command `npm run build`, output directory `build` (defaults).
- `vercel.json` rewrites every route to `index.html` so refreshing or opening `/team` directly works.
- Vercel builds with `CI=true`, so any ESLint warning (e.g. an unused import) fails the build. Run `npm run build` locally before pushing.
- File names are case-sensitive on Vercel (Linux) but not on Mac/Windows: `image.JPG` and `image.jpg` are different there. Import paths must match the real file name exactly.
- Keep images small (under ~500 KB, max ~2000px wide); large photos make the site slow on phones.
