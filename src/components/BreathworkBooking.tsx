export default function BreathworkBooking() {
  return (
    <section id="booking" className="py-24 px-6 bg-gradient-to-b from-[#0B1120] via-[#1a2332] to-[#0B1120]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Book My 1-to-1 Session
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            I choose a time that works, book instantly, and everything is confirmed right away.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <div className="aspect-video w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#E7B0B8]/20 to-[#B4A1E4]/20 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <p className="text-lg mb-2">Google Calendar Booking Embed</p>
              <p className="text-sm opacity-60">Replace this div with your Google Calendar iframe</p>
              <p className="text-xs opacity-40 mt-4 max-w-md mx-auto">
                Example: &lt;iframe src="your-google-calendar-url" width="100%" height="600"&gt;&lt;/iframe&gt;
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-400 text-sm">
            Instant confirmation • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}
