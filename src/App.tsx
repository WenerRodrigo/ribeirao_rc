import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import TermosUso from "./pages/TermosUso";

function App() {
  const [currentPage, setCurrentPage] = useState<string>("home");

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/politica-privacidade") {
      setCurrentPage("politica");
    } else if (path === "/termos-uso") {
      setCurrentPage("termos");
    } else {
      setCurrentPage("home");
    }

    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/politica-privacidade") {
        setCurrentPage("politica");
      } else if (path === "/termos-uso") {
        setCurrentPage("termos");
      } else {
        setCurrentPage("home");
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          const path = url.pathname;
          if (
            path === "/politica-privacidade" ||
            path === "/termos-uso" ||
            path === "/"
          ) {
            e.preventDefault();
            window.history.pushState({}, "", path);
            if (path === "/politica-privacidade") {
              setCurrentPage("politica");
            } else if (path === "/termos-uso") {
              setCurrentPage("termos");
            } else {
              setCurrentPage("home");
            }
            window.scrollTo(0, 0);
          }
        }
      }
    };

    document.addEventListener("click", handleLinkClick);
    return () => document.removeEventListener("click", handleLinkClick);
  }, []);

  if (currentPage === "politica") {
    return <PoliticaPrivacidade />;
  }

  if (currentPage === "termos") {
    return <TermosUso />;
  }

  return <HomePage />;
}

export default App;
