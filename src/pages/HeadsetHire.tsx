import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import airmanaLogo from '/images/Airmanalogotransparent.webp';
import HeadsetHireHero from '../components/HeadsetHireHero';
import HeadsetBenefits from '../components/HeadsetBenefits';
import HowItWorks from '../components/HowItWorks';
import EventTypes from '../components/EventTypes';
import HeadsetQuoteForm from '../components/HeadsetQuoteForm';
import Footer from '../components/Footer';

export default function HeadsetHire() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={airmanaLogo}
              alt="Airmana Logo"
              className="w-12 h-12 object-contain"
              loading="eager"
            />
            <h1 className="text-white text-xl sm:text-2xl tracking-[0.2em] sm:tracking-[0.3em] font-light whitespace-nowrap" style={{ fontFamily: '"Artegra Sans Condensed SC", sans-serif' }}>
              A I R M A N A
            </h1>
          </Link>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/#timetable" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">CLASSES</Link>
            <Link to="/#events-workshops" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">EVENTS</Link>
            <Link to="/breathwork" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">BREATHWORK</Link>
            <Link to="/headset-hire" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">HEADSET HIRE</Link>
            <Link to="/join" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">JOIN</Link>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/98 px-6 py-4 border-t border-white/10">
            <Link to="/#timetable" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>CLASSES</Link>
            <Link to="/#events-workshops" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>EVENTS</Link>
            <Link to="/breathwork" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>BREATHWORK</Link>
            <Link to="/headset-hire" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>HEADSET HIRE</Link>
            <Link to="/join" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>JOIN</Link>
            <Link to="/#contact" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>CONTACT</Link>
          </div>
        )}
      </nav>

      <HeadsetHireHero />
      <HeadsetBenefits />
      <HowItWorks />
      <EventTypes />
      <HeadsetQuoteForm />
      <Footer />
    </div>
  );
}
