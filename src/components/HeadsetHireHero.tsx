export default function HeadsetHireHero() {
  const scrollToForm = () => {
    const form = document.getElementById('quote-form');
    if (form) {
      const formPosition = form.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = formPosition - (window.innerHeight / 2) + (form.offsetHeight / 2);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="relative bg-black pt-20">
      <div className="relative py-24 px-6 bg-gradient-to-b from-black via-[#0B1120] to-[#1a2332]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-wide">
            Professional Headset Hire for Silent Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Wireless headsets for fitness classes, breathwork sessions, workshops, corporate events, and silent discos. Simple pickup and drop-off from Airmana in Bundaberg.
          </p>
          <button
            onClick={scrollToForm}
            className="bg-[#D6A7A3] text-[#0B1120] px-12 py-4 rounded-full font-medium text-lg hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all tracking-wide"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
