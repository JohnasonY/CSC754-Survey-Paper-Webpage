import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/header.jsx";
import Overview from "./page/overview.jsx";
import Bibliography from "./page/bibliography.jsx";
import AnnotatedBibliography from "./page/annotated-bibliography.jsx";
import Classification from "./page/classification.jsx";
import Presentation from "./page/presentation.jsx";
import FinalPaper from "./page/final-paper.jsx";

const pages = {
  bibliography: Bibliography,
  "annotated-bibliography": AnnotatedBibliography,
  classification: Classification,
  presentation: Presentation,
  "final-paper": FinalPaper
};

function getCurrentSlug() {
  return window.location.hash.replace("#/", "");
}

export default function App() {
  const [currentSlug, setCurrentSlug] = useState(getCurrentSlug);

  useEffect(() => {
    function handleHashChange() {
      setCurrentSlug(getCurrentSlug());
    }

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const MilestonePage = pages[currentSlug];

  return (
    <>
      {/* Always visible */}
      <Header currentSlug={currentSlug} />

      <main className="app">
        {MilestonePage ? (
          <MilestonePage />
        ) : (
          <Overview />
        )}
      </main>
    </>
  );
}