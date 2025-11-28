import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Airmana's Breathwork left me lighter, clearer, and deeply reconnected — a safe, healing space that felt truly life-changing.",
    author: 'Trish C'
  },
  {
    text: "Returning to breathwork with Airmana has been amazing — peaceful sessions that leave me feeling lighter every time.",
    author: 'Max R'
  },
  {
    text: "My private session was beautiful, safe, and full of care, intention, and music with that guided deep relaxation.",
    author: 'Tessa G'
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0B1120] via-[#2D3748] to-[#4A5568]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-8 tracking-wide">
          What Our Community is Saying
        </h2>
        <div className="flex gap-1 mb-16 justify-center">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="text-[#FFD700] fill-current" size={28} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F7F7F7] rounded-2xl p-8 hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#FFD700] fill-current" size={20} />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 text-center italic">
                "{testimonial.text}"
              </p>
              <p className="text-gray-600 font-medium text-center">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
