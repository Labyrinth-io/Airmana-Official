import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import airmanaLogo from '/images/Airmanalogotransparent.webp';

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTimetable = () => {
    const timetable = document.getElementById('timetable');
    timetable?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="relative min-h-screen bg-black overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <img
              src={airmanaLogo}
              alt="Airmana Logo"
              className="w-12 h-12 object-contain"
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
            <a href="#timetable" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">CLASSES</a>
            <a href="#events-workshops" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">EVENTS</a>
            <Link to="/breathwork" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">BREATHWORK</Link>
            <Link to="/headset-hire" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">HEADSET HIRE</Link>
            <Link to="/join" className="text-white hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">JOIN</Link>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-black/98 px-6 py-4 border-t border-white/10">
            <a href="#timetable" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>CLASSES</a>
            <a href="#events-workshops" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>EVENTS</a>
            <Link to="/breathwork" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>BREATHWORK</Link>
            <Link to="/headset-hire" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>HEADSET HIRE</Link>
            <Link to="/join" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>JOIN</Link>
            <a href="#contact" className="block text-white hover:text-[#D6A7A3] transition-colors py-3 text-sm tracking-wider" onClick={() => setMobileMenuOpen(false)}>CONTACT</a>
          </div>
        )}
      </nav>

      <div className="relative h-screen flex items-center justify-center bg-[#0B1120]">
        <div className="relative z-20 flex flex-col items-center justify-center w-full px-6 pt-32 md:pt-24 pb-16 md:pb-24">
          <div className="w-full h-auto object-contain scale-90">
            <img
              src={airmanaLogo}
              alt="Airmana"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="mt-12">
            <button
              onClick={scrollToTimetable}
              className="bg-[#D6A7A3] text-[#0B1120] px-10 py-4 rounded-full font-medium text-lg hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all tracking-wide"
            >
              VIEW TIMETABLE
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
