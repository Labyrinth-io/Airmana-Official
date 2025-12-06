import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-[#4A5568] via-[#2D3748] to-[#1A202C]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-16 tracking-wide">
          Get in Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#F7F7F7] rounded-2xl p-8">
            <h3 className="text-2xl font-medium text-[#0B1120] mb-6">
              Send us a Message
            </h3>

            {submitted ? (
              <div className="bg-[#D6A7A3] text-[#0B1120] p-6 rounded-xl text-center font-medium">
                Thank you! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#6E7680] mb-2 text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D6D6D6] focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#6E7680] mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#D6D6D6] focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#6E7680] mb-2 text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#D6D6D6] focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#6E7680] mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#D6D6D6] focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D6A7A3] text-[#0B1120] py-4 rounded-lg font-medium text-lg hover:scale-105 hover:shadow-lg transition-all"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="bg-[#2D3748] rounded-2xl p-8 border border-white/10">
            <div className="mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.8043023629903!2d152.3517819!3d-24.870532599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6bebb9cc6170680b%3A0x5c1f763c5e29be0b!2sAIRMANA!5e0!3m2!1sen!2sau!4v1764989218861!5m2!1sen!2sau"
                className="w-full h-64 rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 text-gray-100">
                <MapPin className="text-[#D6A7A3] flex-shrink-0 mt-1" size={20} />
                <a
                  href="https://maps.app.goo.gl/5KBo5vp8JSEdhewo9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D6A7A3] transition-colors"
                >
                  8 Electra Street, Bundaberg Central, QLD 4670
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-100">
                <Phone className="text-[#D6A7A3] flex-shrink-0" size={20} />
                <a href="tel:0413428182" className="text-gray-100 hover:text-[#D6A7A3] transition-colors">
                  0413 428 182
                </a>
              </div>
              <div className="flex items-center gap-4 text-gray-100">
                <Mail className="text-[#D6A7A3] flex-shrink-0" size={20} />
                <a href="mailto:info@airmana.com.au" className="text-gray-100 hover:text-[#D6A7A3] transition-colors">
                  info@airmana.com.au
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-gray-200 mb-4">Follow Us</p>
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/airmanaenergy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#D6A7A3] flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook className="text-[#0B1120]" size={20} />
                </a>
                <a
                  href="https://www.instagram.com/airmana_/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#D6A7A3] flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram className="text-[#0B1120]" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
