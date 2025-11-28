import { MapPin, Phone, Mail } from 'lucide-react';
import { useState, FormEvent, ChangeEvent } from 'react';
import { submitHeadsetInquiry, HeadsetInquiry } from '../lib/supabase';

const DURATION_OPTIONS = [
  '4 Hours',
  '1 Day',
  '2 Days',
  '3 Days',
  '1 Week',
  'Custom Duration'
];

const EVENT_TYPES = [
  'Breathwork / Meditation / Yoga',
  'Fitness Class',
  'Workshop / Seminar',
  'Corporate Event',
  'Silent Disco',
  'Retreat / Outdoor Session',
  'School Event',
  'Other'
];

export default function HeadsetQuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event_date: '',
    duration: '',
    number_of_headsets: '',
    event_type: '',
    event_details: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }

    if (name === 'number_of_headsets') {
      const num = parseInt(value);
      if (num > 40) {
        setErrors(prev => ({ ...prev, [name]: 'Maximum 40 headsets allowed' }));
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.event_date) newErrors.event_date = 'Event date is required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.number_of_headsets) {
      newErrors.number_of_headsets = 'Number of headsets is required';
    } else {
      const num = parseInt(formData.number_of_headsets);
      if (num < 1 || num > 40) {
        newErrors.number_of_headsets = 'Please enter a number between 1 and 40';
      }
    }
    if (!formData.event_type) newErrors.event_type = 'Event type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const inquiry: HeadsetInquiry = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        event_date: formData.event_date,
        duration: formData.duration,
        number_of_headsets: parseInt(formData.number_of_headsets),
        event_type: formData.event_type,
        event_details: formData.event_details
      };

      await submitHeadsetInquiry(inquiry);

      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        event_date: '',
        duration: '',
        number_of_headsets: '',
        event_type: '',
        event_details: ''
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      setSubmitError('Failed to submit your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="py-20 px-6 bg-gradient-to-b from-[#1a2332] via-[#2D3748] to-[#0B1120]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light text-center text-[#D6A7A3] mb-16 tracking-wide">
          Request a Quote
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-[#0B1120] rounded-2xl p-10 border border-white/10">
            <h3 className="text-2xl font-medium text-[#D6A7A3] mb-8">
              Pickup Location & Contact
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 text-gray-100">
                <MapPin className="text-[#D6A7A3] flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-medium mb-1">Address</p>
                  <p>8 Electra Street, Bundaberg Central</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-gray-100">
                <Phone className="text-[#D6A7A3] flex-shrink-0" size={24} />
                <a href="tel:+61413428182" className="hover:text-[#D6A7A3] transition-colors">
                  +61 413 428 182
                </a>
              </div>

              <div className="flex items-center gap-4 text-gray-100">
                <Mail className="text-[#D6A7A3] flex-shrink-0" size={24} />
                <a href="mailto:info@airmana.com.au" className="hover:text-[#D6A7A3] transition-colors">
                  info@airmana.com.au
                </a>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="bg-gradient-to-br from-[#D6A7A3]/20 to-[#E7B0B8]/10 rounded-xl p-6 border border-[#D6A7A3]/30">
                <p className="text-[#D6A7A3] font-medium text-lg">
                  Quick Response Guarantee
                </p>
                <p className="text-gray-200 mt-2">
                  All equipment must be picked up and returned to this location.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-2xl">
            <h3 className="text-2xl font-medium text-[#0B1120] mb-6">
              Quote Request Form
            </h3>

            {submitted ? (
              <div className="bg-[#D6A7A3] text-[#0B1120] p-8 rounded-xl text-center">
                <p className="text-xl font-medium mb-2">Thank you for your enquiry!</p>
                <p>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-[#6E7680] mb-2 text-sm font-medium">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-[#D6D6D6]'
                      } focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[#6E7680] mb-2 text-sm font-medium">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-[#D6D6D6]'
                      } focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-[#6E7680] mb-2 text-sm font-medium">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.phone ? 'border-red-500' : 'border-[#D6D6D6]'
                    } focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="event_date" className="block text-[#6E7680] mb-2 text-sm font-medium">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="event_date"
                      name="event_date"
                      value={formData.event_date}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.event_date ? 'border-red-500' : 'border-[#D6D6D6]'
                      } focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all`}
                    />
                    {errors.event_date && <p className="text-red-500 text-sm mt-1">{errors.event_date}</p>}
                  </div>

                  <div>
                    <label htmlFor="duration" className="block text-[#6E7680] mb-2 text-sm font-medium">
                      Duration *
                    </label>
                    <select
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.duration ? 'border-red-500' : 'border-[#D6D6D6]'
                      } focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all`}
                    >
                      <option value="">Select duration</option>
                      {DURATION_OPTIONS.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.duration && <p className="text-red-500 text-sm mt-1">{errors.duration}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="number_of_headsets" className="block text-[#6E7680] mb-2 text-sm font-medium">
                      Number of Headsets (1-40) *
                    </label>
                    <input
                      type="number"
                      id="number_of_headsets"
                      name="number_of_headsets"
                      value={formData.number_of_headsets}
                      onChange={handleChange}
                      required
                      min="1"
                      max="200"
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.number_of_headsets ? 'border-red-500' : 'border-[#D6D6D6]'
                      } focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all`}
                    />
                    {errors.number_of_headsets && <p className="text-red-500 text-sm mt-1">{errors.number_of_headsets}</p>}
                  </div>

                  <div>
                    <label htmlFor="event_type" className="block text-[#6E7680] mb-2 text-sm font-medium">
                      Event Type *
                    </label>
                    <select
                      id="event_type"
                      name="event_type"
                      value={formData.event_type}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.event_type ? 'border-red-500' : 'border-[#D6D6D6]'
                      } focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all`}
                    >
                      <option value="">Select event type</option>
                      {EVENT_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.event_type && <p className="text-red-500 text-sm mt-1">{errors.event_type}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="event_details" className="block text-[#6E7680] mb-2 text-sm font-medium">
                    Event Details & Special Requirements
                  </label>
                  <textarea
                    id="event_details"
                    name="event_details"
                    value={formData.event_details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-[#D6D6D6] focus:border-[#D6A7A3] focus:ring-2 focus:ring-[#D6A7A3]/20 outline-none transition-all resize-none"
                  />
                </div>

                {submitError && (
                  <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg text-sm">
                    {submitError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                  className="w-full bg-[#D6A7A3] text-[#0B1120] py-4 rounded-lg font-medium text-lg hover:scale-105 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Quote'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
