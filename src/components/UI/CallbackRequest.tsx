import React, { useState } from 'react';
import { Phone, Clock, User, Calendar, Check, AlertCircle } from 'lucide-react';
import Button from './Button';
import Card from './Card';

interface CallbackFormData {
  name: string;
  phone: string;
  preferredTime: string;
  inquiry: string;
}

const CallbackRequest: React.FC = () => {
  const [formData, setFormData] = useState<CallbackFormData>({
    name: '',
    phone: '',
    preferredTime: '',
    inquiry: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const timeSlots = [
    { value: 'morning', label: '9:00 AM - 12:00 PM' },
    { value: 'afternoon', label: '12:00 PM - 4:00 PM' },
    { value: 'evening', label: '4:00 PM - 8:00 PM' },
    { value: 'anytime', label: 'Anytime (9 AM - 8 PM)' }
  ];

  const inquiryTypes = [
    'Room booking inquiry',
    'Wedding planning',
    'Corporate events',
    'Spa appointments',
    'Restaurant reservations',
    'All-inclusive packages',
    'Transportation services',
    'General information'
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[+]?[\d\s-()]{10,}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time';
    }

    if (!formData.inquiry.trim()) {
      newErrors.inquiry = 'Please select an inquiry type';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      console.log('Callback request:', formData);
    }, 1500);
  };

  const handleInputChange = (field: keyof CallbackFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Callback Requested! 📞</h3>
        <p className="opacity-90 mb-4">
          Thank you! Our team will call you within the next 2 hours during your preferred time.
        </p>
        <div className="bg-white/20 rounded-lg p-3 text-sm">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Phone size={16} />
            <span>We'll call: {formData.phone}</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Clock size={16} />
            <span>Preferred time: {timeSlots.find(slot => slot.value === formData.preferredTime)?.label}</span>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="max-w-lg mx-auto">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <Phone size={28} className="text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Request a Callback</h3>
        <p className="text-gray-600">
          Our travel experts will call you back within 2 hours to assist with your booking
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter your full name"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          {errors.name && (
            <div className="flex items-center mt-1 text-sm text-red-600">
              <AlertCircle size={14} className="mr-1" />
              {errors.name}
            </div>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Phone size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+91 98765 43210"
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          {errors.phone && (
            <div className="flex items-center mt-1 text-sm text-red-600">
              <AlertCircle size={14} className="mr-1" />
              {errors.phone}
            </div>
          )}
        </div>

        {/* Preferred Time */}
        <div>
          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Call Time <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Clock size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <select
              id="preferredTime"
              value={formData.preferredTime}
              onChange={(e) => handleInputChange('preferredTime', e.target.value)}
              className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors appearance-none ${
                errors.preferredTime ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select preferred time</option>
              {timeSlots.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>
          {errors.preferredTime && (
            <div className="flex items-center mt-1 text-sm text-red-600">
              <AlertCircle size={14} className="mr-1" />
              {errors.preferredTime}
            </div>
          )}
        </div>

        {/* Inquiry Type */}
        <div>
          <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-2">
            What can we help you with? <span className="text-red-500">*</span>
          </label>
          <select
            id="inquiry"
            value={formData.inquiry}
            onChange={(e) => handleInputChange('inquiry', e.target.value)}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors appearance-none ${
              errors.inquiry ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select inquiry type</option>
            {inquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.inquiry && (
            <div className="flex items-center mt-1 text-sm text-red-600">
              <AlertCircle size={14} className="mr-1" />
              {errors.inquiry}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Requesting Callback...</span>
            </div>
          ) : (
            'Request Callback'
          )}
        </Button>

        {/* Additional Info */}
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Phone size={14} className="text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-cyan-800 mb-1">Quick Response Guarantee</h4>
              <p className="text-sm text-cyan-700">
                Our travel experts will call you back within 2 hours during business hours (9 AM - 8 PM IST). 
                For immediate assistance, call us at <strong>+91 83209 12345</strong>.
              </p>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
};

export default CallbackRequest;