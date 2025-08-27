import React, { useState } from 'react';
import { Calendar, Users, MapPin, Star } from 'lucide-react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import BookingForm from './BookingForm';

const Hero: React.FC = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1449824/pexels-photo-1449824.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl">
          <div className="text-center md:text-left">
            {/* Rating Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm font-semibold text-gray-800">4.9/5 Guest Rating</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Your Beach
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Paradise
              </span>
              Awaits
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              Experience luxury and adventure at Sunseeker Beach Resort - Goa's premier 
              all-inclusive destination for families and couples.
            </p>

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <MapPin size={16} className="text-yellow-400 mr-2" />
                <span className="text-white text-sm font-medium">Anjuna Beach</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Users size={16} className="text-yellow-400 mr-2" />
                <span className="text-white text-sm font-medium">All-Inclusive</span>
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar size={16} className="text-yellow-400 mr-2" />
                <span className="text-white text-sm font-medium">Year Round</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsBookingOpen(true)}
                className="text-lg px-8 py-4"
              >
                Check Availability
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('gallery')?.scrollIntoView()}
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-800"
              >
                View Gallery
              </Button>
            </div>

            {/* Price Starting From */}
            <div className="mt-8 text-center md:text-left">
              <p className="text-white/80 text-sm">Starting from</p>
              <p className="text-3xl md:text-4xl font-bold text-yellow-400">
                ₹12,999<span className="text-xl text-white/80">/night</span>
              </p>
              <p className="text-white/60 text-sm">*All-inclusive packages available</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="absolute bottom-8 left-4 right-4 md:relative md:bottom-auto md:left-auto md:right-auto md:mt-16">
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">150+</div>
              <div className="text-white text-sm">Rooms</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">4</div>
              <div className="text-white text-sm">Restaurants</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400">24/7</div>
              <div className="text-white text-sm">Service</div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      <Modal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Check Availability & Book Your Stay"
        size="lg"
      >
        <BookingForm onSuccess={() => setIsBookingOpen(false)} />
      </Modal>
    </section>
  );
};

export default Hero;