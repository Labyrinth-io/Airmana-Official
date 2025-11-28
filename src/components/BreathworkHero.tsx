export default function BreathworkHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d3748] via-[#4a5568] to-[#2d3748]" />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="mb-12">
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <div className="w-full h-full bg-gradient-to-br from-[#E7B0B8]/20 to-[#B4A1E4]/20 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm mb-2">Video embed placeholder</p>
                <p className="text-xs opacity-60">Replace with your video embed code</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center space-y-8 mt-16">
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight tracking-tight">
            I Just Want to Feel<br />
            <span className="text-[#D6A7A3]">
              Calm Again
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
            A private breathwork session where I can switch off, slow down, and finally feel my body settle.<br />
            <span className="text-gray-400">No noise. No pressure. Just space to breathe and reset properly.</span>
          </p>

          <div className="pt-6">
            <a
              href="#booking"
              className="inline-block px-12 py-5 bg-[#D6A7A3] text-[#0B1120] text-lg font-medium rounded-full hover:scale-105 transition-all duration-300 shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50"
            >
              Book My Session
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none" />
    </section>
  );
}
