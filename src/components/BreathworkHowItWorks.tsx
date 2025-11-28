import { Calendar, Wind, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: Calendar,
    title: 'Pick a Time That Suits Me',
    description: 'I just choose a slot below — no back-and-forth, no hassle.'
  },
  {
    icon: Wind,
    title: 'Arrive and Breathe',
    description: 'The space is calm and private. I\'m guided the whole way, so I can relax straight away.'
  },
  {
    icon: Sparkles,
    title: 'Walk Out Rebalanced',
    description: 'Within one session I can feel my chest loosen, my thoughts slow, and my whole body soften.'
  }
];

export default function BreathworkHowItWorks() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0B1120] via-[#2D3748] to-[#0B1120]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-center text-white mb-6 tracking-tight">
          Simple. Fast. No Stress.
        </h2>

        <div className="mt-20 space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 group"
            >
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-[#D6A7A3] flex items-center justify-center shadow-2xl shadow-pink-500/30 group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-110">
                  <step.icon className="text-white" size={40} />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="text-white font-semibold text-lg">{index + 1}</span>
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-medium text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
