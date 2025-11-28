import { Volume2, Clock, MapPin, Package } from 'lucide-react';

const benefits = [
  {
    icon: Volume2,
    title: 'High-Quality Audio',
    description: 'Clear, consistent sound suitable for classes, workshops, and larger group events.'
  },
  {
    icon: Clock,
    title: 'Flexible Hire Options',
    description: 'Hire by the hour, day, or multiple days depending on your event needs.'
  },
  {
    icon: MapPin,
    title: 'Easy Pickup & Return',
    description: 'Collect from 8 Electra Street, Bundaberg Central, and drop off when your hire period ends.'
  },
  {
    icon: Package,
    title: 'Complete Kit Provided',
    description: 'Includes transmitter, charging cables, and all necessary components for your event.'
  }
];

export default function HeadsetBenefits() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a2332] via-[#2D3748] to-[#1a2332]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-16 tracking-wide">
          Reliable Headsets for Any Event
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#0B1120] rounded-2xl p-8 hover:scale-105 transition-transform duration-300 border border-white/10"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E7B0B8] to-[#B4A1E4] flex items-center justify-center flex-shrink-0 shadow-lg shadow-pink-500/20">
                  <benefit.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-[#D6A7A3] mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
