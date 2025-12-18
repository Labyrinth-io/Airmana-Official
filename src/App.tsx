import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const HeadsetHire = lazy(() => import('./pages/HeadsetHire'));
const Breathwork = lazy(() => import('./pages/Breathwork'));
const Join = lazy(() => import('./pages/Join'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={
        <div className="min-h-screen bg-[#0B1120] flex items-center justify-center">
          <div className="text-[#D6A7A3] text-xl">Loading...</div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headset-hire" element={<HeadsetHire />} />
          <Route path="/breathwork" element={<Breathwork />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
