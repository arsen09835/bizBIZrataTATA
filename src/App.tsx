import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Portfolio } from './pages/Portfolio';
import { SitiWeb } from './pages/services/SitiWeb';
import { VisibilitaOrganica } from './pages/services/VisibilitaOrganica';
import { VisibilitaSponsorizzata } from './pages/services/VisibilitaSponsorizzata';
import { NotFound } from './pages/NotFound';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contatto" element={<Contact />} />
          <Route path="/servizi/siti-web" element={<SitiWeb />} />
          <Route path="/servizi/visibilita-organica" element={<VisibilitaOrganica />} />
          <Route path="/servizi/visibilita-sponsorizzata" element={<VisibilitaSponsorizzata />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
