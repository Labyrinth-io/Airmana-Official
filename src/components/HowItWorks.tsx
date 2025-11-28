import { ClipboardList, MapPin, Play, RotateCcw } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Submit Your Event Details',
    description: 'Tell us your date, duration, and how many headsets you need.'
  },
  {
    icon: MapPin,
    title: 'Collect Your Headsets',
    description: 'Pick up from 8 Electra Street, Bundaberg Central at your scheduled time.'
  },
  {
    icon: Play,
    title: 'Run Your Event',
    description: 'You manage the setup and operation; our kits are straightforward and ready to use.'
  },
  {
    icon: RotateCcw,
    title: 'Return the Equipment',
    description: 'Drop the headsets back to the same location once your hire is finished.'
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a2332] via-[#0B1120] to-[#1a2332]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-16 tracking-wide">
          Simple Hire Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-[#2D3748] rounded-2xl p-8 text-center hover:scale-105 transition-transform duration-300 border border-white/10"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#D6A7A3] flex items-center justify-center text-[#0B1120] font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D6A7A3] to-[#E7B0B8] flex items-center justify-center mx-auto mb-6 mt-4 shadow-lg shadow-pink-500/20">
                <step.icon className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-medium text-[#D6A7A3] mb-4">
                {step.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
