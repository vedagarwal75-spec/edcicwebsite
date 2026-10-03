import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Archives from "./pages/Archives";
import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import Initium from "./pages/Initium";
import Entreprise from "./pages/Entreprise";
import Workshop360 from "./pages/_360";
import Envisage from "./pages/Envisage";
import Initiatives from "./components/Initiatives";
import SeedStories from "./pages/SeedStories";
import IncubationCentre from "./pages/IncubationCentre";
import Edf from "./pages/Edf";
import LiveProjects from "./pages/LiveProjects";
import Bizwalk from "./pages/Bizwalk";
import OurNetwork from "./pages/OurNetwork";
import OurAssociations from "./pages/OurAssociations";
import EacBanner from "./components/EacBanner";

// Heavy pages (3D / WebGL / timeline libraries) load only when visited,
// which keeps the first load light on phones.
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Prism = lazy(() => import("./pages/Prism"));
const Elevator = lazy(() => import("./pages/Elevator"));
const EacPage = lazy(() => import("./pages/Eac"));
const Recruited = lazy(() => import("./pages/Recruited"));

function App() {
  return (
    <div className="app">
      <Navbar />
      <Suspense fallback={null}>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/archives" element={<Archives />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/network" element={<OurNetwork />} />
        <Route path="/associations" element={<OurAssociations />} />

        {/* Initiative Pages */}
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/initiatives/bizwalk" element={<Bizwalk />} />
        <Route path="/initiatives/seed-stories" element={<SeedStories />} />
        <Route path="/initiatives/edf" element={<Edf />} />
        <Route path="/initiatives/live-projects" element={<LiveProjects />} />
        <Route path="/initiatives/incubation-centre" element={<IncubationCentre />} />
        <Route path="/initiatives/incubation" element={<IncubationCentre />} />
        <Route path="/initiatives/envisage" element={<Envisage />} />

        {/* Event Pages */}
        <Route path="/events/prism" element={<Prism />} />
        <Route path="/events/initium" element={<Initium />} />
        <Route path="/events/elevator" element={<Elevator />} />
        <Route path="/events/entreprise" element={<Entreprise />} />
        <Route path="/events/eac" element={<EacPage />} />
        <Route path="/events/workshop" element={<Workshop360 />} />
        <Route path="/events/360" element={<Workshop360 />} />

        {/* Legacy/Shortcut Routes */}
        <Route path="/prism" element={<Prism />} />
        <Route path="/initium" element={<Initium />} />
        <Route path="/elevator" element={<Elevator />} />
        <Route path="/eac" element={<EacPage />} />
        <Route path="/360" element={<Workshop360 />} />
        <Route path="/envisage" element={<Envisage />} />
        <Route path="/bizwalk" element={<Bizwalk />} />
        <Route path="/seed-stories" element={<SeedStories />} />
        <Route path="/start-up-voice" element={<SeedStories />} />
        <Route path="/edf" element={<Edf />} />
        <Route path="/live-projects" element={<LiveProjects />} />
        <Route path="/incubation-centre" element={<IncubationCentre />} />

        {/* Special Routes */}
        <Route path="/eac-banner" element={<EacBanner />} />
        <Route path="/recruited" element={<Recruited />} />

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
