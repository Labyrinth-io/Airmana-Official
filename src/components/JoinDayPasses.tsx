import { Check } from 'lucide-react';

export default function JoinDayPasses() {
  return (
    <section className="relative bg-[#0B1120] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
            Just Want to Try It?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Choose a short pass if you're not ready for a weekly membership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
          <div className="bg-gradient-to-br from-[#1A202C] to-[#0B1120] border border-white/10 rounded-2xl p-8 hover:border-[#D6A7A3]/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-light text-white mb-2">
                1-Day Pass
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-3">
                <span className="text-4xl font-bold text-[#D6A7A3]">$15</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Perfect for a single visit or if you're curious to experience Airmana once.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D6A7A3]/20 flex items-center justify-center mt-0.5">
                  <Check className="text-[#D6A7A3]" size={14} />
                </div>
                <p className="text-gray-200 text-sm">Access one session</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D6A7A3]/20 flex items-center justify-center mt-0.5">
                  <Check className="text-[#D6A7A3]" size={14} />
                </div>
                <p className="text-gray-200 text-sm">Great for first-timers</p>
              </div>
            </div>

            <button className="w-full bg-[#D6A7A3]/10 hover:bg-[#D6A7A3]/20 text-[#D6A7A3] border border-[#D6A7A3] px-6 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 tracking-wide">
              Get 1-Day Pass – $15
            </button>
          </div>

          <div className="bg-gradient-to-br from-[#1A202C] to-[#0B1120] border border-white/10 rounded-2xl p-8 hover:border-[#D6A7A3]/50 transition-all duration-300 hover:scale-[1.02]">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-light text-white mb-2">
                3-Day Pass
              </h3>
              <div className="flex items-baseline justify-center gap-2 mb-3">
                <span className="text-4xl font-bold text-[#D6A7A3]">$25</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Come a few times in a week and feel the full Airmana flow.
              </p>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D6A7A3]/20 flex items-center justify-center mt-0.5">
                  <Check className="text-[#D6A7A3]" size={14} />
                </div>
                <p className="text-gray-200 text-sm">Up to three sessions in 7 days</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#D6A7A3]/20 flex items-center justify-center mt-0.5">
                  <Check className="text-[#D6A7A3]" size={14} />
                </div>
                <p className="text-gray-200 text-sm">Ideal for short trials</p>
              </div>
            </div>

            <button className="w-full bg-[#D6A7A3]/10 hover:bg-[#D6A7A3]/20 text-[#D6A7A3] border border-[#D6A7A3] px-6 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 tracking-wide">
              Get 3-Day Pass – $25
            </button>
          </div>
        </div>

        <p className="text-center text-gray-400 text-sm">
          You can upgrade to the $50/week membership at any time.
        </p>
      </div>
    </section>
  );
}
