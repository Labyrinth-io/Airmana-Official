import { MapPin, Mail } from 'lucide-react';

export default function BreathworkLocation() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0B1120] via-[#2D3748] to-[#0B1120]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-light text-center text-white mb-6 tracking-tight">
          Where I'll Be
        </h2>

        <div className="mt-16 bg-[#0B1120] rounded-3xl p-12 border border-white/10 hover:border-pink-500/30 transition-colors duration-300">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E7B0B8] to-[#B4A1E4] flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/20">
              <MapPin className="text-white" size={32} />
            </div>
            <div>
              <h3 className="text-3xl font-medium text-white mb-3">Airmana</h3>
              <p className="text-xl text-gray-300 mb-2">8 Electra Street, Bundaberg Central</p>
            </div>
          </div>

          <p className="text-lg text-gray-300 leading-relaxed mb-8 ml-22">
            A quiet, private room designed specifically for slowing down and feeling safe enough to breathe deeply without distraction.
          </p>

          <div className="flex justify-center pt-6">
            <a
              href="mailto:info@airmana.com"
              className="inline-flex items-center gap-3 px-10 py-4 bg-[#D6A7A3] hover:bg-[#D6A7A3]/80 border border-[#D6A7A3] hover:border-[#D6A7A3]/80 text-[#0B1120] text-lg font-medium rounded-full transition-all duration-300 backdrop-blur-sm group"
            >
              <Mail className="group-hover:scale-110 transition-transform" size={24} />
              Ask a Question
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Private parking available • Accessible space • Calm and welcoming environment
          </p>
        </div>
      </div>
    </section>
  );
}
