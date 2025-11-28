import { Zap, Heart, Focus, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'High Energy',
    description: 'Dynamic group fitness classes that build strength, endurance, and confidence.'
  },
  {
    icon: Heart,
    title: 'Deep Healing',
    description: 'Breathwork and recovery practices that restore balance and release tension.'
  },
  {
    icon: Focus,
    title: 'Mindful Focus',
    description: 'Guided sessions that cultivate presence, clarity, and inner peace.'
  },
  {
    icon: Sparkles,
    title: 'Creative Expression',
    description: 'Movement and breath as pathways to joy, authenticity, and self-discovery.'
  }
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#4A5568] via-[#E5E7EB] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-300 border border-gray-200 shadow-md"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E7B0B8] to-[#D6A7A3] flex items-center justify-center mb-6 shadow-lg shadow-pink-500/20">
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-medium text-[#0B1120] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
