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

| I want to change... | Edit |
|---|---|
| Team members (name, position, phone, email, LinkedIn, order) | `src/team/members.js` |
| A team photo | save it as `src/team/photos/firstname-lastname.png` (auto-matched by name) |
| Gallery photos | add / remove / rename files in `src/assets/gallery/` (shown in file-name order) |
| Our Associations logos | `src/content/associations.js` (+ the logo file in `src/assets/ourAssociations/`) |
| Our Network people | `src/content/network.js` (+ the photo in `src/assets/network/`) |
| Emails, social links, copyright, registration / YouTube links | `src/config/site.js` |
| Downloadable PDFs (Envisage) | `src/config/documents.js` (replace the file in `src/assets/`) |
| Navbar / footer links | `src/config/navigation.js` |
| Page routes | `src/App.js` |

## Project layout

```
src/
  config/       site-wide links, emails, PDFs, navigation (edit these for "fixed" text/links)
  content/      list-style page data (gallery, associations, network)
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
