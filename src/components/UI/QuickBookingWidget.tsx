import React, { useState } from 'react';
import { Calendar, Users, Search } from 'lucide-react';
import Button from './Button';
import Modal from './Modal';
import BookingForm from '../Sections/BookingForm';

const QuickBookingWidget: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      {/* Floating Quick Booking Widget - Mobile */}
      <div className="fixed bottom-4 left-4 right-4 z-30 md:hidden">
        <div className="bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full flex items-center justify-center">
                <Calendar size={20} className="text-white" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-800">Quick Book</div>
                <div className="text-xs text-gray-500">Best rates guaranteed</div>
              </div>
            </div>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setIsBookingOpen(true)}
              className="px-6"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>

      {/* Desktop Sticky Widget */}
      <div className="hidden md:block fixed top-1/2 right-6 transform -translate-y-1/2 z-30">
        <div className="bg-white rounded-xl shadow-2xl p-6 w-64 border border-gray-100">
          <h3 className="text-lg font-bold text-gray-800 mb-4 text-center">Quick Booking</h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Check-in</span>
              <div className="flex items-center text-cyan-600">
                <Calendar size={16} className="mr-1" />
                <span>Select Date</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Guests</span>
              <div className="flex items-center text-cyan-600">
                <Users size={16} className="mr-1" />
                <span>2 Adults</span>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="text-center mb-3">
                <div className="text-2xl font-bold text-gray-800">₹12,999</div>
                <div className="text-sm text-gray-500">per night</div>
              </div>
              
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsBookingOpen(true)}
                className="w-full"
                icon={Search}
              >
                Check Availability
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Book Your Perfect Stay"
        size="lg"
      >
        <BookingForm onSuccess={() => setIsBookingOpen(false)} />
      </Modal>
    </>
  );
};

export default QuickBookingWidget;