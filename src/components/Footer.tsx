import { Facebook, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1A202C] via-[#2D3748] to-[#0B1120] border-t border-white/10 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-white text-3xl tracking-[0.3em] font-light mb-4" style={{ fontFamily: '"Artegra Sans Condensed SC", sans-serif' }}>
            A I R M A N A
          </h2>
          <a
            href="https://maps.app.goo.gl/5KBo5vp8JSEdhewo9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 text-sm hover:text-[#D6A7A3] transition-colors"
          >
            8 Electra Street, Bundaberg Central, QLD 4670
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="#timetable" className="text-gray-400 hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">
            CLASSES
          </a>
          <a href="#events-workshops" className="text-gray-400 hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">
            EVENTS
          </a>
          <Link to="/breathwork" className="text-gray-400 hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">
            BREATHWORK
          </Link>
          <Link to="/headset-hire" className="text-gray-400 hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">
            HEADSET HIRE
          </Link>
          <a href="https://passm8.com/airmana" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">
            JOIN
          </a>
          <a href="#contact" className="text-gray-400 hover:text-[#D6A7A3] transition-colors text-sm tracking-wider">
            CONTACT
          </a>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://www.facebook.com/airmanaenergy/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#D6A7A3] flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Facebook"
          >
            <Facebook className="text-[#0B1120]" size={18} />
          </a>
          <a
            href="https://www.instagram.com/airmana_/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-[#D6A7A3] flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <Instagram className="text-[#0B1120]" size={18} />
          </a>
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>&copy; 2025 Airmana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
