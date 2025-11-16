import { Check } from 'lucide-react';

export default function JoinHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#0B1120] via-[#1A202C] to-[#0B1120] pt-32 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide" style={{ fontFamily: '"Artegra Sans Condensed SC", sans-serif' }}>
            Airmana Membership
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            One simple membership that gives you access to everything Airmana offers – movement, recovery, and breathwork.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#D6A7A3]/20 to-[#D6A7A3]/5 border-2 border-[#D6A7A3] rounded-3xl p-8 md:p-10 shadow-2xl shadow-[#D6A7A3]/20 hover:shadow-[#D6A7A3]/30 transition-all duration-300 hover:scale-[1.02]">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-[#D6A7A3] to-[#C89590] text-[#0B1120] px-6 py-2 rounded-full text-sm font-semibold tracking-wider shadow-lg">
                MOST POPULAR
              </span>
            </div>

            <div className="text-center mb-8 mt-4">
              <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
                Unlimited Membership
              </h2>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-bold text-[#D6A7A3]">$50</span>
                <span className="text-2xl text-gray-300">/week</span>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Unlimited group fitness + group breathwork sessions, plus access to all Airmana features.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D6A7A3] flex items-center justify-center mt-1">
                  <Check className="text-[#0B1120]" size={16} />
                </div>
                <p className="text-lg text-gray-200">Unlimited group fitness sessions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D6A7A3] flex items-center justify-center mt-1">
                  <Check className="text-[#0B1120]" size={16} />
                </div>
                <p className="text-lg text-gray-200">Unlimited group breathwork sessions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D6A7A3] flex items-center justify-center mt-1">
                  <Check className="text-[#0B1120]" size={16} />
                </div>
                <p className="text-lg text-gray-200">Access to all classes on weekly timetable</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D6A7A3] flex items-center justify-center mt-1">
                  <Check className="text-[#0B1120]" size={16} />
                </div>
                <p className="text-lg text-gray-200">Access to Sauna and Icebath</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D6A7A3] flex items-center justify-center mt-1">
                  <Check className="text-[#0B1120]" size={16} />
                </div>
                <p className="text-lg text-gray-200">Improve your strength, mobility, endurance</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D6A7A3] flex items-center justify-center mt-1">
                  <Check className="text-[#0B1120]" size={16} />
                </div>
                <p className="text-lg text-gray-200">Improve your breath and energy</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D6A7A3] flex items-center justify-center mt-1">
                  <Check className="text-[#0B1120]" size={16} />
                </div>
                <p className="text-lg text-gray-200">Train, stretch and breathe in one formula</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D6A7A3] flex items-center justify-center mt-1">
                  <Check className="text-[#0B1120]" size={16} />
                </div>
                <p className="text-lg text-gray-200">Come to as many classes as you like</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#D6A7A3] to-[#C89590] text-[#0B1120] px-8 py-5 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-[#D6A7A3]/40 transition-all duration-300 tracking-wide">
              Join Airmana – $50/week
            </button>
          </div>

          <p className="text-center text-gray-400 mt-8 text-sm">
            No experience needed. We guide you through every session.
          </p>
        </div>
      </div>
    </section>
  );
}
