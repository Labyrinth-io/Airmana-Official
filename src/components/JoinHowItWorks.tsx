import { CheckCircle, Calendar, Sparkles } from 'lucide-react';

export default function JoinHowItWorks() {
  return (
    <section className="relative bg-gradient-to-b from-[#0B1120] via-[#1A202C] to-[#0B1120] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: '"Artegra Sans Condensed SC", sans-serif' }}>
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D6A7A3] to-[#C89590] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <CheckCircle className="text-[#0B1120]" size={36} />
            </div>
            <h3 className="text-2xl font-light text-white mb-3">
              Choose Your Option
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Pick the membership or pass that suits you.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D6A7A3] to-[#C89590] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Calendar className="text-[#0B1120]" size={36} />
            </div>
            <h3 className="text-2xl font-light text-white mb-3">
              Book Your Session
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Use the timetable to lock in your class.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#D6A7A3] to-[#C89590] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="text-[#0B1120]" size={36} />
            </div>
            <h3 className="text-2xl font-light text-white mb-3">
              Show Up & Breathe
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Arrive a little early, settle in, and we'll guide you through the session.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-6">
            Ready to go all in?
          </p>
          <button className="bg-gradient-to-r from-[#D6A7A3] to-[#C89590] text-[#0B1120] px-12 py-5 rounded-full font-semibold text-lg hover:scale-105 hover:shadow-2xl hover:shadow-[#D6A7A3]/40 transition-all duration-300 tracking-wide">
            Join Airmana – $50/week
          </button>
        </div>
      </div>
    </section>
  );
}
