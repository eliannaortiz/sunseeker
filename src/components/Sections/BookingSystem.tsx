import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Check, Clock, Star, Shield, Phone, Mail, MapPin, Gift } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import Form from '../UI/Form';

const BookingSystem: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<any>({});
  const [isAvailabilityChecked, setIsAvailabilityChecked] = useState(false);
  const [availableRooms, setAvailableRooms] = useState<any[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const bookingSteps = [
    { id: 1, title: 'Check Availability', icon: Calendar },
    { id: 2, title: 'Select Room', icon: Users },
    { id: 3, title: 'Guest Details', icon: MapPin },
    { id: 4, title: 'Payment', icon: CreditCard },
    { id: 5, title: 'Confirmation', icon: Check }
  ];

  const availabilityFields = [
    { label: 'Check-in Date', name: 'checkin', type: 'date', required: true },
    { label: 'Check-out Date', name: 'checkout', type: 'date', required: true },
    { 
      label: 'Adults', 
      name: 'adults', 
      type: 'select', 
      required: true,
      options: [
        { value: '1', label: '1 Adult' },
        { value: '2', label: '2 Adults' },
        { value: '3', label: '3 Adults' },
        { value: '4', label: '4+ Adults' }
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
        { value: '3', label: '3+ Children' }
      ]
    }
  ];

  const guestDetailsFields = [
    { label: 'Primary Guest Name', name: 'primaryName', type: 'text', required: true },
    { label: 'Email Address', name: 'email', type: 'email', required: true },
    { label: 'Phone Number', name: 'phone', type: 'tel', required: true },
    { label: 'Address Line 1', name: 'address1', type: 'text', required: true },
    { label: 'Address Line 2', name: 'address2', type: 'text', required: false },
    { label: 'City', name: 'city', type: 'text', required: true },
    { 
      label: 'State', 
      name: 'state', 
      type: 'select', 
      required: true,
      options: [
        { value: 'maharashtra', label: 'Maharashtra' },
        { value: 'karnataka', label: 'Karnataka' },
        { value: 'delhi', label: 'Delhi' },
        { value: 'gujarat', label: 'Gujarat' },
        { value: 'rajasthan', label: 'Rajasthan' },
        { value: 'tamil-nadu', label: 'Tamil Nadu' },
        { value: 'west-bengal', label: 'West Bengal' },
        { value: 'other', label: 'Other' }
      ]
    },
    { label: 'PIN Code', name: 'pincode', type: 'text', required: true },
    { label: 'Special Requests', name: 'specialRequests', type: 'textarea', required: false, placeholder: 'Any special requirements or preferences...' }
  ];

  const paymentFields = [
    { label: 'Cardholder Name', name: 'cardName', type: 'text', required: true },
    { label: 'Card Number', name: 'cardNumber', type: 'text', required: true, placeholder: '1234 5678 9012 3456' },
    { label: 'Expiry Date', name: 'expiryDate', type: 'text', required: true, placeholder: 'MM/YY' },
    { label: 'CVV', name: 'cvv', type: 'text', required: true, placeholder: '123' },
    { 
      label: 'Billing Address Same as Guest Address', 
      name: 'sameAddress', 
      type: 'select', 
      required: true,
      options: [
        { value: 'yes', label: 'Yes, same as guest address' },
        { value: 'no', label: 'No, different billing address' }
      ]
    }
  ];

  const mockAvailableRooms = [
    {
      id: 'standard-ocean',
      name: 'Standard Ocean View',
      size: '32 sqm',
      occupancy: '2 Adults + 1 Child',
      price: 12999,
      originalPrice: 15999,
      savings: 3000,
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['Ocean View', 'Free WiFi', 'Mini Bar', 'Air Conditioning'],
      available: 8,
      rating: 4.7,
      package: 'Classic All-Inclusive'
    },
    {
      id: 'deluxe-beachfront',
      name: 'Deluxe Beachfront',
      size: '45 sqm',
      occupancy: '2 Adults + 2 Children',
      price: 18999,
      originalPrice: 23999,
      savings: 5000,
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['Beachfront', 'Private Balcony', 'Premium Mini Bar', 'Butler Service'],
      available: 5,
      rating: 4.8,
      package: 'Premium All-Inclusive',
      popular: true
    },
    {
      id: 'family-suite',
      name: 'Family Suite',
      size: '65 sqm',
      occupancy: '4 Adults + 2 Children',
      price: 24999,
      originalPrice: 29999,
      savings: 5000,
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['2 Bedrooms', 'Living Area', 'Kitchenette', 'Family Services'],
      available: 3,
      rating: 4.9,
      package: 'Premium All-Inclusive'
    },
    {
      id: 'private-villa',
      name: 'Private Beach Villa',
      size: '120 sqm',
      occupancy: '6 Adults + 4 Children',
      price: 35999,
      originalPrice: 42999,
      savings: 7000,
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400',
      amenities: ['Private Beach', '3 Bedrooms', 'Personal Butler', 'Golf Cart'],
      available: 2,
      rating: 5.0,
      package: 'Luxury All-Inclusive'
    }
  ];

  const handleAvailabilityCheck = (data: Record<string, string>) => {
    console.log('Availability Check:', data);
    setBookingData({ ...bookingData, ...data });
    setAvailableRooms(mockAvailableRooms);
    setIsAvailabilityChecked(true);
    setCurrentStep(2);
  };

  const handleRoomSelection = (room: any) => {
    setSelectedRoom(room);
    setBookingData({ ...bookingData, selectedRoom: room });
    setCurrentStep(3);
  };

  const handleGuestDetails = (data: Record<string, string>) => {
    console.log('Guest Details:', data);
    setBookingData({ ...bookingData, guestDetails: data });
    setCurrentStep(4);
  };

  const handlePayment = (data: Record<string, string>) => {
    console.log('Payment Details:', data);
    setBookingData({ ...bookingData, paymentDetails: data });
    // Simulate payment processing
    setTimeout(() => {
      setCurrentStep(5);
      setIsPaymentModalOpen(false);
    }, 2000);
  };

  const calculateNights = () => {
    if (bookingData.checkin && bookingData.checkout) {
      const checkin = new Date(bookingData.checkin);
      const checkout = new Date(bookingData.checkout);
      const diffTime = Math.abs(checkout.getTime() - checkin.getTime());
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
    return 1;
  };

  const calculateTotal = () => {
    if (!selectedRoom) return 0;
    const nights = calculateNights();
    const roomTotal = selectedRoom.price * nights;
    const taxes = Math.round(roomTotal * 0.18); // 18% GST
    return roomTotal + taxes;
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8 overflow-x-auto">
      <div className="flex items-center space-x-4 min-w-max px-4">
        {bookingSteps.map((step, index) => {
          const Icon = step.icon;
          const isActive = currentStep === step.id;
          const isCompleted = currentStep > step.id;
          
          return (
            <div key={step.id} className="flex items-center">
              <div className={`flex items-center space-x-2 ${isActive ? 'text-cyan-600' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  isActive ? 'bg-cyan-500 text-white' : 
                  isCompleted ? 'bg-green-500 text-white' : 
                  'bg-gray-200 text-gray-500'
                }`}>
                  {isCompleted ? <Check size={20} /> : <Icon size={20} />}
                </div>
                <span className="font-medium text-sm hidden sm:block">{step.title}</span>
              </div>
              {index < bookingSteps.length - 1 && (
                <div className={`w-8 h-0.5 mx-4 ${isCompleted ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderAvailabilityStep = () => (
    <Card className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Check Availability</h3>
      <Form
        title=""
        fields={availabilityFields}
        onSubmit={handleAvailabilityCheck}
        submitLabel="Check Availability"
      />
    </Card>
  );

  const renderRoomSelection = () => (
    <div className="max-w-6xl mx-auto">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Available Rooms for {bookingData.checkin} to {bookingData.checkout}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableRooms.map((room) => (
          <Card key={room.id} hover padding="none" className={`overflow-hidden relative ${room.popular ? 'ring-2 ring-orange-400' : ''}`}>
            {room.popular && (
              <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
            )}
            
            <div className="relative h-48">
              <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span className="text-sm font-semibold">{room.rating}</span>
              </div>
              <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {room.available} rooms left
              </div>
            </div>

            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">{room.name}</h4>
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm text-gray-600">
                  {room.size} • {room.occupancy}
                </div>
                <div className="text-cyan-600 font-medium text-sm">{room.package}</div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</div>
                  <div className="text-2xl font-bold text-gray-800">₹{room.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">per night</div>
                </div>
                <div className="text-right">
                  <div className="text-green-600 font-semibold">Save ₹{room.savings.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">per night</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {room.amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                    {amenity}
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                size="lg"
                onClick={() => handleRoomSelection(room)}
                className="w-full"
              >
                Select This Room
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderGuestDetails = () => (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Guest Information</h3>
            <Form
              title=""
              fields={guestDetailsFields}
              onSubmit={handleGuestDetails}
              submitLabel="Continue to Payment"
            />
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-4">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Booking Summary</h4>
            {selectedRoom && (
              <div>
                <img src={selectedRoom.image} alt={selectedRoom.name} className="w-full h-32 object-cover rounded-lg mb-4" />
                <h5 className="font-bold text-gray-800 mb-2">{selectedRoom.name}</h5>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span>{bookingData.checkin}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span>{bookingData.checkout}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nights:</span>
                    <span>{calculateNights()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span>{bookingData.adults} Adults{bookingData.children !== '0' ? `, ${bookingData.children} Children` : ''}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between mb-2">
                    <span>Room Rate ({calculateNights()} nights):</span>
                    <span>₹{(selectedRoom.price * calculateNights()).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Taxes & Fees:</span>
                    <span>₹{Math.round(selectedRoom.price * calculateNights() * 0.18).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>Total:</span>
                    <span>₹{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );

  const renderPaymentStep = () => (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h3>
            <div className="mb-6">
              <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg border border-green-200">
                <Shield size={24} className="text-green-600" />
                <div>
                  <h4 className="font-semibold text-green-800">Secure Payment</h4>
                  <p className="text-sm text-green-600">Your payment information is encrypted and secure</p>
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsPaymentModalOpen(true)}
              className="w-full"
            >
              Proceed to Secure Payment
            </Button>
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-4">
            <h4 className="text-lg font-bold text-gray-800 mb-4">Final Summary</h4>
            {selectedRoom && (
              <div>
                <h5 className="font-bold text-gray-800 mb-2">{selectedRoom.name}</h5>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span>Dates:</span>
                    <span>{bookingData.checkin} to {bookingData.checkout}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Guests:</span>
                    <span>{bookingData.adults} Adults{bookingData.children !== '0' ? `, ${bookingData.children} Children` : ''}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Package:</span>
                    <span>{selectedRoom.package}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-bold text-xl text-green-600">
                    <span>Total Amount:</span>
                    <span>₹{calculateTotal().toLocaleString()}</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="max-w-2xl mx-auto text-center">
      <Card>
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check size={40} className="text-white" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-4">Booking Confirmed!</h3>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for choosing Sunseeker Resort. Your booking has been confirmed and you will receive a confirmation email shortly.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
          <h4 className="font-bold text-gray-800 mb-4">Booking Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Booking ID:</span>
              <span className="font-mono">SS{Date.now().toString().slice(-6)}</span>
            </div>
            <div className="flex justify-between">
              <span>Room:</span>
              <span>{selectedRoom?.name}</span>
            </div>
            <div className="flex justify-between">
              <span>Dates:</span>
              <span>{bookingData.checkin} to {bookingData.checkout}</span>
            </div>
            <div className="flex justify-between">
              <span>Total Paid:</span>
              <span className="font-bold">₹{calculateTotal().toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <Phone size={24} className="mx-auto mb-2 text-cyan-500" />
            <div className="text-sm font-semibold">24/7 Support</div>
            <div className="text-xs text-gray-600">+91 83209 12345</div>
          </div>
          <div className="text-center">
            <Mail size={24} className="mx-auto mb-2 text-cyan-500" />
            <div className="text-sm font-semibold">Email Support</div>
            <div className="text-xs text-gray-600">stay@sunseekerresort.com</div>
          </div>
          <div className="text-center">
            <Clock size={24} className="mx-auto mb-2 text-cyan-500" />
            <div className="text-sm font-semibold">Check-in</div>
            <div className="text-xs text-gray-600">3:00 PM onwards</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg" className="flex-1">
            Download Confirmation
          </Button>
          <Button variant="outline" size="lg" className="flex-1">
            Add to Calendar
          </Button>
        </div>
      </Card>
    </div>
  );

  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            📅 SECURE BOOKING
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Book Your
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Perfect Stay
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Secure your dream vacation with our easy booking system and instant confirmation
          </p>
        </div>

        {/* Step Indicator */}
        {renderStepIndicator()}

        {/* Booking Steps */}
        <div className="min-h-[600px]">
          {currentStep === 1 && renderAvailabilityStep()}
          {currentStep === 2 && renderRoomSelection()}
          {currentStep === 3 && renderGuestDetails()}
          {currentStep === 4 && renderPaymentStep()}
          {currentStep === 5 && renderConfirmation()}
        </div>

        {/* Back Button */}
        {currentStep > 1 && currentStep < 5 && (
          <div className="text-center mt-8">
            <Button
              variant="outline"
              size="md"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              ← Back to Previous Step
            </Button>
          </div>
        )}
      </div>

      {/* Payment Modal */}
      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title="Secure Payment"
        size="lg"
      >
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-4 p-4 bg-blue-50 rounded-lg">
            <Shield size={24} className="text-blue-600" />
            <div className="text-center">
              <h4 className="font-semibold text-blue-800">256-bit SSL Encryption</h4>
              <p className="text-sm text-blue-600">Your payment is 100% secure and encrypted</p>
            </div>
          </div>
        </div>
        
        <Form
          title=""
          fields={paymentFields}
          onSubmit={handlePayment}
          submitLabel={`Pay ₹${calculateTotal().toLocaleString()}`}
        />
        
        <div className="mt-6 text-center">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <span>We accept:</span>
            <div className="flex space-x-2">
              <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">VISA</div>
              <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">MC</div>
              <div className="w-8 h-5 bg-green-600 rounded text-white text-xs flex items-center justify-center">UPI</div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default BookingSystem;