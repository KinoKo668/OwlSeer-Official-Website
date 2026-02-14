import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { PerformanceProvider, LanguageProvider } from "./app/contexts";
import { ScrollToTop } from "./app/components/ScrollToTop";
import App from "./app/App.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <LanguageProvider>
        <PerformanceProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} storageKey="owlseer-theme-v2">
            <App />
          </ThemeProvider>
        </PerformanceProvider>
      </LanguageProvider>
    </BrowserRouter>
  </HelmetProvider>
);
  
