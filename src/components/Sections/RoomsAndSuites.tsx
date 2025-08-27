import React, { useState } from 'react';
import { Users, Wifi, Car, Coffee, Waves, Star, Eye, Calendar } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import BookingForm from './BookingForm';

const RoomsAndSuites: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<Record<string, number>>({});

  const rooms = [
    {
      id: 'standard',
      name: 'Standard Ocean View',
      price: 12999,
      originalPrice: 15999,
      size: '32 sqm',
      occupancy: '2 Adults + 1 Child',
      description: 'Comfortable rooms with stunning ocean views and modern amenities. Perfect for couples seeking a romantic getaway.',
      images: [
        'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Coffee, text: 'Mini Bar' },
        { icon: Waves, text: 'Ocean View' },
        { icon: Car, text: 'Parking' }
      ],
      features: [
        'King-size bed with premium linens',
        'Private balcony with ocean view',
        'Marble bathroom with rain shower',
        'Smart TV with international channels',
        'Mini refrigerator and coffee maker',
        'Daily housekeeping service'
      ],
      popular: false
    },
    {
      id: 'deluxe',
      name: 'Deluxe Beachfront',
      price: 18999,
      originalPrice: 23999,
      size: '45 sqm',
      occupancy: '2 Adults + 2 Children',
      description: 'Spacious beachfront rooms with direct beach access and premium amenities. Ideal for families and couples.',
      images: [
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: [
        { icon: Wifi, text: 'Free WiFi' },
        { icon: Coffee, text: 'Premium Mini Bar' },
        { icon: Waves, text: 'Beachfront' },
        { icon: Users, text: 'Family Friendly' }
      ],
      features: [
        'Direct beach access from room',
        'Separate living area with sofa bed',
        'Premium bathroom with bathtub',
        'Private terrace with beach chairs',
        'Complimentary beach towels',
        'Priority restaurant reservations'
      ],
      popular: true
    },
    {
      id: 'suite',
      name: 'Family Suite',
      price: 24999,
      originalPrice: 29999,
      size: '65 sqm',
      occupancy: '4 Adults + 2 Children',
      description: 'Luxurious two-bedroom suite perfect for families. Features separate living area and premium amenities.',
      images: [
        'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: [
        { icon: Users, text: '2 Bedrooms' },
        { icon: Coffee, text: 'Kitchenette' },
        { icon: Waves, text: 'Ocean View' },
        { icon: Star, text: 'Premium Service' }
      ],
      features: [
        'Two separate bedrooms with king beds',
        'Spacious living room with dining area',
        'Kitchenette with basic appliances',
        'Two full bathrooms with premium toiletries',
        'Large private balcony with ocean view',
        'Dedicated concierge service'
      ],
      popular: false
    },
    {
      id: 'villa',
      name: 'Private Beach Villa',
      price: 35999,
      originalPrice: 42999,
      size: '120 sqm',
      occupancy: '6 Adults + 4 Children',
      description: 'Ultimate luxury villa with private beach access, personal butler service, and exclusive amenities.',
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1743228/pexels-photo-1743228.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      amenities: [
        { icon: Users, text: '3 Bedrooms' },
        { icon: Waves, text: 'Private Beach' },
        { icon: Star, text: 'Butler Service' },
        { icon: Car, text: 'Golf Cart' }
      ],
      features: [
        'Three master bedrooms with en-suite bathrooms',
        'Private infinity pool overlooking the ocean',
        'Dedicated butler and housekeeping staff',
        'Private beach section with cabana',
        'Fully equipped kitchen and dining area',
        'Golf cart for resort transportation'
      ],
      popular: false
    }
  ];

  const handleImageNavigation = (roomId: string, direction: 'prev' | 'next') => {
    const room = rooms.find(r => r.id === roomId);
    if (!room) return;

    const currentIndex = activeImageIndex[roomId] || 0;
    const maxIndex = room.images.length - 1;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    }
    
    setActiveImageIndex(prev => ({ ...prev, [roomId]: newIndex }));
  };

  const openRoomDetails = (room: any) => {
    setSelectedRoom(room);
  };

  const closeRoomDetails = () => {
    setSelectedRoom(null);
  };

  return (
    <section id="rooms" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🏨 LUXURY ACCOMMODATIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Rooms & Suites
            <span className="block bg-gradient-to-r from-cyan-500 to-yellow-400 bg-clip-text text-transparent">
              Designed for Comfort
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From cozy ocean-view rooms to luxurious private villas, find your perfect home away from home
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {rooms.map((room) => (
            <Card key={room.id} hover padding="none" className="overflow-hidden relative">
              {room.popular && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-400 to-red-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              
              {/* Image Gallery */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={room.images[activeImageIndex[room.id] || 0]} 
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Navigation */}
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={() => handleImageNavigation(room.id, 'prev')}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => handleImageNavigation(room.id, 'next')}
                    className="w-10 h-10 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    →
                  </button>
                </div>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {room.images.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === (activeImageIndex[room.id] || 0) ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Room Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{room.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{room.size}</span>
                      <span>•</span>
                      <span>{room.occupancy}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">₹{room.originalPrice.toLocaleString()}</div>
                    <div className="text-2xl font-bold text-cyan-600">₹{room.price.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">per night</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{room.description}</p>

                {/* Amenities */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.amenities.map((amenity, index) => {
                    const Icon = amenity.icon;
                    return (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon size={16} className="text-cyan-500" />
                        <span className="text-sm text-gray-600">{amenity.text}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => openRoomDetails(room)}
                    icon={Eye}
                    className="flex-1"
                  >
                    View Details
                  </Button>
                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setIsBookingOpen(true)}
                    icon={Calendar}
                    className="flex-1"
                  >
                    Book Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Room Comparison CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-500 to-sky-500 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="mb-6 opacity-90">
              Our travel experts are here to help you find the perfect room for your stay
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-cyan-600"
              >
                Compare All Rooms
              </Button>
              <Button
                variant="secondary"
                size="lg"
              >
                Speak to Expert
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Room Details Modal */}
      {selectedRoom && (
        <Modal
          isOpen={!!selectedRoom}
          onClose={closeRoomDetails}
          title={selectedRoom.name}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Gallery */}
            <div>
              <img 
                src={selectedRoom.images[0]} 
                alt={selectedRoom.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="grid grid-cols-2 gap-2">
                {selectedRoom.images.slice(1).map((image: string, index: number) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${selectedRoom.name} ${index + 2}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            {/* Details */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">{selectedRoom.size} • {selectedRoom.occupancy}</div>
                  <div className="text-sm text-gray-500 line-through">₹{selectedRoom.originalPrice.toLocaleString()}</div>
                  <div className="text-3xl font-bold text-cyan-600">₹{selectedRoom.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">per night (inclusive of taxes)</div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{selectedRoom.description}</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-4">Room Features</h4>
              <ul className="space-y-2 mb-6">
                {selectedRoom.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  closeRoomDetails();
                  setIsBookingOpen(true);
                }}
                className="w-full"
              >
                Book This Room
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Booking Modal */}
      <Modal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        title="Book Your Perfect Stay"
        size="lg"
      >
        <BookingForm onSuccess={() => setIsBookingOpen(false)} />
      </Modal>
    </section>
  );
};

export default RoomsAndSuites;