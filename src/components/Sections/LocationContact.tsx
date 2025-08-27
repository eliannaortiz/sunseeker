import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Car, Plane, Train, Ship, Star, Camera, Navigation, Info } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Form from '../UI/Form';
import Modal from '../UI/Modal';

const LocationContact: React.FC = () => {
  const [selectedAttraction, setSelectedAttraction] = useState<any>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const locationHighlights = [
    {
      icon: MapPin,
      title: 'Prime Beachfront Location',
      description: 'Direct access to 500m of pristine Anjuna Beach',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Car,
      title: 'Easy Accessibility',
      description: '45 minutes from Goa Airport, well-connected roads',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Star,
      title: 'Tourist Hub',
      description: 'Walking distance to famous markets and attractions',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Camera,
      title: 'Scenic Surroundings',
      description: 'Surrounded by lush hills and coconut groves',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const nearbyAttractions = [
    {
      id: 1,
      name: 'Anjuna Flea Market',
      distance: '5 minutes walk',
      type: 'Shopping & Culture',
      rating: 4.6,
      description: 'Famous Wednesday flea market with local handicrafts, jewelry, and souvenirs',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Local handicrafts', 'Vintage items', 'Live music', 'Food stalls'],
      timings: 'Wednesday: 8:00 AM - 6:00 PM',
      tips: 'Best visited in the morning for better deals and fewer crowds'
    },
    {
      id: 2,
      name: 'Chapora Fort',
      distance: '15 minutes drive',
      type: 'Historical Site',
      rating: 4.4,
      description: 'Historic Portuguese fort offering panoramic views of the coastline',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Sunset views', 'Photography spot', 'Historical significance', 'Bollywood fame'],
      timings: 'Daily: 6:00 AM - 6:00 PM',
      tips: 'Visit during sunset for breathtaking views and perfect photo opportunities'
    },
    {
      id: 3,
      name: 'Baga Beach',
      distance: '20 minutes drive',
      type: 'Beach & Nightlife',
      rating: 4.3,
      description: 'Vibrant beach known for water sports, beach shacks, and nightlife',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Water sports', 'Beach shacks', 'Nightlife', 'Shopping'],
      timings: '24/7 (Beach shacks: 8:00 AM - 11:00 PM)',
      tips: 'Try the famous seafood at beach shacks and enjoy parasailing'
    },
    {
      id: 4,
      name: 'Mapusa Market',
      distance: '25 minutes drive',
      type: 'Local Market',
      rating: 4.2,
      description: 'Traditional Goan market for spices, cashews, and local produce',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Local spices', 'Fresh produce', 'Cashew nuts', 'Authentic experience'],
      timings: 'Friday: 6:00 AM - 2:00 PM',
      tips: 'Best day is Friday when the market is most vibrant and fully stocked'
    },
    {
      id: 5,
      name: 'Vagator Beach',
      distance: '10 minutes drive',
      type: 'Beach & Cliffs',
      rating: 4.5,
      description: 'Dramatic red cliffs and pristine beach, perfect for photography',
      image: 'https://images.pexels.com/photos/1449824/pexels-photo-1449824.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Red cliff formations', 'Photography', 'Peaceful atmosphere', 'Sunset views'],
      timings: '24/7',
      tips: 'Less crowded than other beaches, perfect for peaceful walks'
    },
    {
      id: 6,
      name: 'Spice Plantation Tour',
      distance: '45 minutes drive',
      type: 'Nature & Culture',
      rating: 4.7,
      description: 'Guided tour through organic spice plantations with traditional lunch',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Organic spices', 'Traditional lunch', 'Elephant rides', 'Cultural show'],
      timings: 'Daily: 9:00 AM - 5:00 PM',
      tips: 'Book through resort for better rates and transportation'
    }
  ];

  const transportationOptions = [
    {
      icon: Plane,
      title: 'Goa Airport (Dabolim)',
      distance: '45 minutes',
      description: 'Direct flights from major Indian cities',
      options: ['Airport shuttle service', 'Private taxi', 'Pre-paid taxi'],
      cost: '₹1,200 - ₹1,800'
    },
    {
      icon: Train,
      title: 'Thivim Railway Station',
      distance: '20 minutes',
      description: 'Nearest railway station with good connectivity',
      options: ['Resort pickup service', 'Local taxi', 'Auto-rickshaw'],
      cost: '₹400 - ₹600'
    },
    {
      icon: Car,
      title: 'By Road',
      distance: 'Well connected',
      description: 'NH66 highway connectivity from Mumbai/Bangalore',
      options: ['Self-drive', 'Private cab', 'State transport'],
      cost: 'Varies by origin'
    },
    {
      icon: Ship,
      title: 'Cruise Terminal',
      distance: '35 minutes',
      description: 'Mormugao Port for cruise passengers',
      options: ['Resort transfer', 'Taxi service', 'Shared shuttle'],
      cost: '₹800 - ₹1,200'
    }
  ];

  const contactInfo = {
    address: {
      line1: 'Sunseeker Beach Resort',
      line2: 'Anjuna Beach Road, Anjuna',
      line3: 'North Goa, Goa 403509, India'
    },
    phone: {
      primary: '+91 83209 12345',
      reservations: '+91 83209 12346',
      concierge: '+91 83209 12347'
    },
    email: {
      general: 'stay@sunseekerresort.com',
      reservations: 'bookings@sunseekerresort.com',
      events: 'events@sunseekerresort.com'
    },
    hours: {
      reception: '24/7',
      concierge: '6:00 AM - 11:00 PM',
      reservations: '8:00 AM - 10:00 PM'
    }
  };

  const contactFormFields = [
    { label: 'Full Name', name: 'fullName', type: 'text', required: true },
    { label: 'Email Address', name: 'email', type: 'email', required: true },
    { label: 'Phone Number', name: 'phone', type: 'tel', required: true },
    { 
      label: 'Inquiry Type', 
      name: 'inquiryType', 
      type: 'select', 
      required: true,
      options: [
        { value: 'booking', label: 'Room Booking' },
        { value: 'events', label: 'Events & Weddings' },
        { value: 'dining', label: 'Restaurant Reservations' },
        { value: 'spa', label: 'Spa Appointments' },
        { value: 'activities', label: 'Activities & Tours' },
        { value: 'general', label: 'General Inquiry' }
      ]
    },
    { label: 'Message', name: 'message', type: 'textarea', required: true, placeholder: 'Please share your inquiry details...' }
  ];

  const handleContactSubmit = (data: Record<string, string>) => {
    console.log('Contact Form Data:', data);
    alert('Thank you for your inquiry! Our team will respond within 24 hours.');
    setIsContactModalOpen(false);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            📍 PRIME LOCATION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Location &
            <span className="block bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Perfectly positioned in the heart of North Goa, minutes from famous attractions and pristine beaches
          </p>
        </div>

        {/* Location Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {locationHighlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} hover className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Interactive Map Placeholder */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <div className="relative h-64 md:h-96 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={48} className="text-teal-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Interactive Resort Map</h3>
                <p className="text-gray-600 mb-4">Explore our location and nearby attractions</p>
                <Button variant="primary" size="lg">
                  View on Google Maps
                </Button>
              </div>
              {/* Map overlay with location markers */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center text-sm font-semibold text-gray-800">
                  <MapPin size={16} className="text-teal-600 mr-2" />
                  Sunseeker Resort
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="text-sm text-gray-600">
                  <div>Lat: 15.5732° N</div>
                  <div>Long: 73.7395° E</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Nearby Attractions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nearbyAttractions.map((attraction) => (
              <Card key={attraction.id} hover padding="none" className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{attraction.rating}</span>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {attraction.distance}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-bold text-gray-800">{attraction.name}</h4>
                    <span className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                      {attraction.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{attraction.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {attraction.highlights.slice(0, 3).map((highlight, index) => (
                      <span key={index} className="bg-teal-50 text-teal-700 px-2 py-1 rounded-full text-xs">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedAttraction(attraction)}
                    className="w-full border-teal-400 text-teal-600 hover:bg-teal-400 hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Transportation Options */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            How to Reach Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transportationOptions.map((transport, index) => {
              const Icon = transport.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{transport.title}</h4>
                  <div className="text-teal-600 font-semibold mb-2">{transport.distance}</div>
                  <p className="text-gray-600 text-sm mb-3">{transport.description}</p>
                  <div className="text-sm text-gray-600 mb-3">
                    {transport.options.map((option, idx) => (
                      <div key={idx} className="flex items-center justify-center mb-1">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                        {option}
                      </div>
                    ))}
                  </div>
                  <div className="text-sm font-semibold text-teal-600">{transport.cost}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Details */}
          <Card>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
            
            {/* Address */}
            <div className="mb-6">
              <div className="flex items-start space-x-3 mb-4">
                <MapPin size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                  <div className="text-gray-600">
                    <div>{contactInfo.address.line1}</div>
                    <div>{contactInfo.address.line2}</div>
                    <div>{contactInfo.address.line3}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="mb-6">
              <div className="flex items-start space-x-3">
                <Phone size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Phone Numbers</h4>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                      <span>General:</span>
                      <span className="font-medium">{contactInfo.phone.primary}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reservations:</span>
                      <span className="font-medium">{contactInfo.phone.reservations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Concierge:</span>
                      <span className="font-medium">{contactInfo.phone.concierge}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="mb-6">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Email Addresses</h4>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                      <span>General:</span>
                      <span className="font-medium">{contactInfo.email.general}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Bookings:</span>
                      <span className="font-medium">{contactInfo.email.reservations}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Events:</span>
                      <span className="font-medium">{contactInfo.email.events}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div>
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-teal-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Operating Hours</h4>
                  <div className="space-y-1 text-gray-600">
                    <div className="flex justify-between">
                      <span>Reception:</span>
                      <span className="font-medium">{contactInfo.hours.reception}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Concierge:</span>
                      <span className="font-medium">{contactInfo.hours.concierge}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Reservations:</span>
                      <span className="font-medium">{contactInfo.hours.reservations}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Contact Form */}
          <Card>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Inquiry</h3>
            <p className="text-gray-600 mb-6">
              Have a question? Send us a message and we'll get back to you within 24 hours.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsContactModalOpen(true)}
              className="w-full mb-4"
            >
              Send Inquiry
            </Button>
            <div className="grid grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="md"
                className="border-teal-400 text-teal-600 hover:bg-teal-400 hover:text-white"
              >
                Call Now
              </Button>
              <Button
                variant="outline"
                size="md"
                className="border-teal-400 text-teal-600 hover:bg-teal-400 hover:text-white"
              >
                WhatsApp
              </Button>
            </div>
          </Card>
        </div>

        {/* Emergency Contact */}
        <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-center">
          <h3 className="text-xl font-bold mb-4">24/7 Emergency Assistance</h3>
          <p className="mb-4 opacity-90">
            For urgent matters or emergencies during your stay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-red-600"
            >
              Emergency Hotline: +91 83209 99999
            </Button>
          </div>
        </Card>
      </div>

      {/* Attraction Details Modal */}
      {selectedAttraction && (
        <Modal
          isOpen={!!selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
          title={selectedAttraction.name}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image and Basic Info */}
            <div>
              <img 
                src={selectedAttraction.image} 
                alt={selectedAttraction.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Distance:</span>
                  <span className="text-teal-600 font-bold">{selectedAttraction.distance}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Type:</span>
                  <span className="text-gray-600">{selectedAttraction.type}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Rating:</span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{selectedAttraction.rating}/5</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Timings:</span>
                  <span className="text-gray-600 text-sm">{selectedAttraction.timings}</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedAttraction.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Highlights</h4>
              <div className="grid grid-cols-2 gap-2 mb-6">
                {selectedAttraction.highlights.map((highlight: string, index: number) => (
                  <div key={index} className="bg-teal-50 text-teal-700 px-3 py-2 rounded-lg text-sm">
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex items-start">
                  <Info size={16} className="text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-yellow-800 mb-1">Insider Tip</h5>
                    <p className="text-yellow-700 text-sm">{selectedAttraction.tips}</p>
                  </div>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setSelectedAttraction(null)}
              >
                Get Directions
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Contact Form Modal */}
      <Modal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Send Us Your Inquiry"
        size="lg"
      >
        <Form
          title=""
          fields={contactFormFields}
          onSubmit={handleContactSubmit}
          submitLabel="Send Inquiry"
        />
      </Modal>
    </section>
  );
};

export default LocationContact;