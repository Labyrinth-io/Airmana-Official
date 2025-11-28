import { Dumbbell, Wind, Droplet } from 'lucide-react';

const pillars = [
  {
    icon: Dumbbell,
    title: 'Group Fitness',
    description: 'High-energy classes designed to build strength, boost endurance, and ignite your inner fire. From HIIT to functional training, our sessions are challenging, supportive, and never boring.',
    cta: 'Explore Classes'
  },
  {
    icon: Wind,
    title: 'Breathwork',
    description: 'Guided breathwork journeys that unlock deep healing, clarity, and transformation. Experience the power of conscious breathing in a safe, supportive environment.',
    cta: 'Learn More'
  },
  {
    icon: Droplet,
    title: 'Recovery',
    description: 'Ice bath and sauna contrast therapy to accelerate recovery, reduce inflammation, and enhance mental resilience. Feel the invigorating benefits of hot and cold therapy.',
    cta: 'Book Session'
  }
];

export default function Pillars() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-[#E5E7EB] to-[#4A5568]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-16 tracking-wide">
          Pillars of Wellness
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-[#2D3748] rounded-2xl p-10 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 border border-white/10 shadow-lg"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E7B0B8] to-[#B4A1E4] flex items-center justify-center mb-6 shadow-lg shadow-pink-500/30">
                <pillar.icon className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-medium text-[#D6A7A3] mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-100 leading-relaxed mb-8 flex-1">
                {pillar.description}
              </p>
              <button className="bg-[#2D3748] border-2 border-[#D6A7A3] text-[#D6A7A3] px-8 py-3 rounded-full hover:bg-[#D6A7A3] hover:text-[#0B1120] transition-all font-medium">
                {pillar.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
