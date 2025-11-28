import tribeBanner from '/images/TRIBEBANNERS.webp';
import quantumBreath from '/Images/AIRMANA QUANTUM BREATH.svg';

const events = [
  {
    image: tribeBanner,
    title: 'Upcoming Event',
    name: 'Tribe Immersion Super Moon Party',
    location: 'The Windmill Bargara',
    date: 'December 5th',
    time: '6pm - 9pm',
    buttonText: 'View Event',
    link: 'https://events.humanitix.com/tribe-immersion-super-moon-white-dance-party'
  },
  {
    image: quantumBreath,
    title: 'Workshops & Experiences',
    name: "Airmana's Quantum Breath",
    location: 'Happiness Yoga',
    date: 'November 27th & December 11th',
    time: '6pm - 7:30pm',
    buttonText: 'View Workshops',
    link: 'https://passm8.com/airmana/purchase-pass/96?recipientClientId=1053'
  }
];

export default function EventsWorkshops() {
  return (
    <section id="events-workshops" className="py-20 px-6 bg-gradient-to-b from-white via-[#E5E7EB] to-[#4A5568]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-12 tracking-wide">
          Explore Airmana Experiences
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#2D3748] rounded-2xl overflow-hidden shadow-lg border border-white/10 hover:border-[#D6A7A3]/30 transition-all duration-300 group"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <p className="text-[#D6A7A3] text-xs tracking-widest uppercase mb-2 font-medium">
                  {event.title}
                </p>

                <h3 className="text-2xl font-light text-white mb-4">
                  {event.name}
                </h3>

                <div className="space-y-2 mb-6 text-gray-300">
                  <p className="flex items-center gap-2 text-sm">
                    <span className="text-[#D6A7A3]">📍</span>
                    {event.location}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <span className="text-[#D6A7A3]">📅</span>
                    {event.date}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <span className="text-[#D6A7A3]">⏰</span>
                    {event.time}
                  </p>
                </div>

                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3 bg-[#D6A7A3] text-[#0B1120] font-medium rounded-full hover:scale-105 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 tracking-wide"
                >
                  {event.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
