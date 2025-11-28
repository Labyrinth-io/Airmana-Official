import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Features from '../components/Features';
import Pillars from '../components/Pillars';
import WhyChoose from '../components/WhyChoose';
import Testimonials from '../components/Testimonials';
import Timetable from '../components/Timetable';
import EventsWorkshops from '../components/EventsWorkshops';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0B1120]">
      <Hero />
      <Welcome />
      <Features />
      <Pillars />
      <WhyChoose />
      <Testimonials />
      <Timetable />
      <EventsWorkshops />
      <Contact />
      <Footer />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#D6A7A3] text-[#0B1120] p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="Scroll to top"
        >
          <ChevronUp size={24} />
        </button>
      )}

      <a
        href="#contact"
        className="fixed bottom-8 right-24 bg-[#D6A7A3] text-[#0B1120] px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform z-50 font-medium hidden md:block"
      >
        Book My Class
      </a>
    </div>
  );
}
