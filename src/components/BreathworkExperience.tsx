import { Heart, User, Timer } from 'lucide-react';

const experiences = [
  {
    icon: Heart,
    title: 'Gentle, Guided Breathing',
    description: 'Someone who actually knows what they\'re doing walks me through it so I don\'t overthink or "do it wrong."'
  },
  {
    icon: User,
    title: 'Completely Personal',
    description: 'I can just show up as I am — stressed, tired, overwhelmed — and the session adapts to me.'
  },
  {
    icon: Timer,
    title: 'Quick Reset or Deep Release',
    description: 'Whether I\'ve got twenty minutes or forty-five, I leave feeling lighter, clearer, and more grounded than when I arrived.'
  }
];

export default function BreathworkExperience() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0B1120] via-[#1a2332] to-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-center text-white mb-6 tracking-tight">
          Exactly What I Need
        </h2>
        <p className="text-center text-gray-400 text-xl mb-16">Nothing Complicated</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-[#0B1120] rounded-3xl p-10 hover:scale-105 transition-all duration-300 border border-white/10 hover:border-pink-500/30 group"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E7B0B8] to-[#B4A1E4] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/20 group-hover:shadow-pink-500/40 transition-shadow duration-300">
                <experience.icon className="text-white" size={36} />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 text-center">
                {experience.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-center">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
