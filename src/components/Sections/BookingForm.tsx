import React, { useState } from 'react';
import Form from '../UI/Form';

interface BookingFormProps {
  onSuccess: () => void;
}

const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const [step, setStep] = useState(1);

  const bookingFields = [
    { label: 'Check-in Date', name: 'checkin', type: 'date', required: true },
    { label: 'Check-out Date', name: 'checkout', type: 'date', required: true },
    { 
      label: 'Room Type', 
      name: 'roomType', 
      type: 'select', 
      required: true,
      options: [
        { value: 'standard', label: 'Standard Ocean View - ₹12,999/night' },
        { value: 'deluxe', label: 'Deluxe Beachfront - ₹18,999/night' },
        { value: 'suite', label: 'Family Suite - ₹24,999/night' },
        { value: 'villa', label: 'Private Villa - ₹35,999/night' },
      ]
    },
    { 
      label: 'Adults', 
      name: 'adults', 
      type: 'select', 
      required: true,
      options: [
        { value: '1', label: '1 Adult' },
        { value: '2', label: '2 Adults' },
        { value: '3', label: '3 Adults' },
        { value: '4', label: '4+ Adults' },
      ]
    },
    { 
      label: 'Children', 
      name: 'children', 
      type: 'select', 
      required: false,
      options: [
        { value: '0', label: 'No Children' },
        { value: '1', label: '1 Child' },
        { value: '2', label: '2 Children' },
        { value: '3', label: '3+ Children' },
      ]
    },
  ];

  const guestFields = [
    { label: 'Full Name', name: 'fullName', type: 'text', required: true },
    { label: 'Email Address', name: 'email', type: 'email', required: true },
    { label: 'Phone Number', name: 'phone', type: 'tel', required: true },
    { label: 'Special Requests', name: 'requests', type: 'textarea', required: false, placeholder: 'Any special requirements or requests...' },
  ];

  const handleBookingSubmit = (data: Record<string, string>) => {
    console.log('Booking Data:', data);
    setStep(2);
  };

  const handleGuestSubmit = (data: Record<string, string>) => {
    console.log('Guest Data:', data);
    // Simulate booking confirmation
    alert('🎉 Booking request submitted successfully! Our team will contact you within 24 hours to confirm your reservation.');
    onSuccess();
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center mb-8">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 1 ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            1
          </div>
          <div className={`w-16 h-1 ${step >= 2 ? 'bg-cyan-500' : 'bg-gray-200'}`}></div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            step >= 2 ? 'bg-cyan-500 text-white' : 'bg-gray-200 text-gray-500'
          }`}>
            2
          </div>
        </div>
      </div>

      {step === 1 ? (
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Select Your Stay Details</h4>
          <Form
            title=""
            fields={bookingFields}
            onSubmit={handleBookingSubmit}
            submitLabel="Continue to Guest Details"
          />
        </div>
      ) : (
        <div>
          <button 
            onClick={() => setStep(1)}
            className="text-cyan-500 hover:text-cyan-600 mb-4 text-sm flex items-center"
          >
            ← Back to Stay Details
          </button>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Guest Information</h4>
          <Form
            title=""
            fields={guestFields}
            onSubmit={handleGuestSubmit}
            submitLabel="Submit Booking Request"
          />
        </div>
      )}
    </div>
  );
};

export default BookingForm;