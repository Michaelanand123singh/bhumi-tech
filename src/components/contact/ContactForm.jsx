import React, { useState } from 'react';
import {
  User,
  Building2,
  Mail,
  Phone,
  MessageCircle,
  Briefcase,
  FileText,
  ChevronDown,
  CheckCircle,
  Send,
} from 'lucide-react';
import { trackFormSubmit, trackContact } from '../../utils/analytics';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    whatsapp: false,
    service: '',
    contentType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Track form submission
    trackFormSubmit('contact_form', 'contact_page');
    trackContact('form', 'contact_page');

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);

      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          fullName: '',
          company: '',
          email: '',
          phone: '',
          whatsapp: false,
          service: '',
          contentType: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  const services = [
    { value: 'distribution', label: 'Content Distribution' },
    { value: 'anti-piracy', label: 'Anti-Piracy Solutions' },
    { value: 'both', label: 'Both Services' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' },
  ];

  const contentTypes = [
    { value: 'film', label: 'Film/Movie' },
    { value: 'web-series', label: 'Web Series' },
    { value: 'music', label: 'Music/Album' },
    { value: 'tv-show', label: 'TV Show' },
    { value: 'live-event', label: 'Live Events/Sports' },
    { value: 'documentary', label: 'Documentary' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-brown-100/50 premium-glow">
      <div className="mb-8">
        <div className="inline-block mb-4">
          <span className="bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
            Get In Touch
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">Send Us a Message</h2>
        <p className="text-[#4a4a4a] text-base leading-relaxed">
          Fill out the details below and we'll get back to you within 24 hours
        </p>
      </div>

      {submitSuccess ? (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-10 text-center animate-scale-in">
          <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-scale-in">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-black mb-3">Message Sent Successfully!</h3>
          <p className="text-[#4a4a4a] text-lg leading-relaxed">
            We've received your enquiry and will respond within 24 hours. Our team will get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a] pointer-events-none" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 hover:border-green-300 bg-white"
                placeholder="John Doe"
                required
              />
            </div>
          </div>

          {/* Company Name */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Company / Production House Name
            </label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a] pointer-events-none" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full pl-12 pr-4 py-3.5 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 hover:border-green-300 bg-white"
                placeholder="Your Company Name"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a] pointer-events-none" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 hover:border-green-300 bg-white"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-black mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a] pointer-events-none" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-12 pr-4 py-3.5 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 hover:border-green-300 bg-white"
                  placeholder="+91 XXX XXX XXXX"
                  required
                />
              </div>
            </div>
          </div>

          {/* WhatsApp Checkbox */}
          <div className="flex items-center p-4 bg-green-50/30 rounded-lg border border-green-100/50">
            <input
              type="checkbox"
              name="whatsapp"
              checked={formData.whatsapp}
              onChange={handleChange}
              className="w-5 h-5 text-green-600 border-brown-300 rounded focus:ring-green-500 focus:ring-2 cursor-pointer"
            />
            <label className="ml-3 text-sm text-black flex items-center cursor-pointer">
              <MessageCircle className="w-4 h-4 text-green-600 mr-2" />
              This number is on WhatsApp
            </label>
          </div>

          {/* Service Interest */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Service Interest <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a] pointer-events-none" />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full pl-12 pr-10 py-3.5 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 hover:border-green-300 appearance-none bg-white cursor-pointer"
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value}>
                    {service.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a] pointer-events-none" />
            </div>
          </div>

          {/* Content Type */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">Content Type</label>
            <div className="relative">
              <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a] pointer-events-none" />
              <select
                name="contentType"
                value={formData.contentType}
                onChange={handleChange}
                className="w-full pl-12 pr-10 py-3.5 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 hover:border-green-300 appearance-none bg-white cursor-pointer"
              >
                <option value="">Select content type</option>
                {contentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4a4a4a] pointer-events-none" />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Message / Project Details <span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3.5 border border-brown-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all duration-300 hover:border-green-300 resize-none bg-white"
              placeholder="Tell us about your project, requirements, or any specific questions..."
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                Send Enquiry
                <Send className="ml-2 w-5 h-5" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;

