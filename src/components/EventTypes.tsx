import { Wind, Dumbbell, Users, Briefcase, Music, TreePine, GraduationCap, MoreHorizontal } from 'lucide-react';

const eventTypes = [
  {
    icon: Wind,
    title: 'Breathwork / Meditation / Yoga'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Classes'
  },
  {
    icon: Users,
    title: 'Workshops & Training'
  },
  {
    icon: Briefcase,
    title: 'Corporate Sessions'
  },
  {
    icon: Music,
    title: 'Silent Discos'
  },
  {
    icon: TreePine,
    title: 'Retreats & Outdoor Activities'
  },
  {
    icon: GraduationCap,
    title: 'School Events'
  },
  {
    icon: MoreHorizontal,
    title: 'Other Custom Events'
  }
];

export default function EventTypes() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#1a2332] via-[#2D3748] to-[#1a2332]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-16 tracking-wide">
          Suitable For Many Event Types
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {eventTypes.map((type, index) => (
            <div
              key={index}
              className="bg-[#0B1120] rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 border border-white/10"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E7B0B8] to-[#B4A1E4] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pink-500/20">
                <type.icon className="text-white" size={28} />
              </div>
              <h3 className="text-base font-medium text-gray-200 leading-snug">
                {type.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
