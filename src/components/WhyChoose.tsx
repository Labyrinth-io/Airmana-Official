import { Users, Sparkles, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Users,
    title: 'Supportive Community',
    description: 'Join a welcoming tribe of like-minded individuals who celebrate your progress and inspire your growth.'
  },
  {
    icon: Sparkles,
    title: 'Holistic Integration',
    description: 'Experience the synergy of movement, breath, and recovery working together to optimise your wellbeing.'
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Our members consistently report improved fitness, mental clarity, reduced stress, and deeper connection.'
  }
];

export default function WhyChoose() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#4A5568] via-[#2D3748] to-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-16 tracking-wide">
          Why Choose Airmana
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-[#1a2332] rounded-2xl p-10 text-center hover:scale-105 transition-transform duration-300 border border-white/10"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D6A7A3] to-[#E7B0B8] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pink-500/20">
                <reason.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-medium text-[#D6A7A3] mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
