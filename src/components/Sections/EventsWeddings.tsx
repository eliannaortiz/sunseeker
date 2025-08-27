import React, { useState } from 'react';
import { Heart, Users, Crown, Camera, Music, Sparkles, Calendar, MapPin, Star, Gift, Phone, Mail } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import Form from '../UI/Form';

const EventsWeddings: React.FC = () => {
  const [selectedVenue, setSelectedVenue] = useState<any>(null);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const eventTypes = [
    {
      icon: Heart,
      title: 'Destination Weddings',
      description: 'Magical beachfront ceremonies with personalized service',
      capacity: '50-300 guests',
      price: 'Starting ₹8,50,000',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional meetings and team building retreats',
      capacity: '20-200 attendees',
      price: 'Starting ₹2,50,000',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Crown,
      title: 'Social Celebrations',
      description: 'Anniversaries, birthdays, and milestone celebrations',
      capacity: '25-150 guests',
      price: 'Starting ₹1,50,000',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Camera,
      title: 'Pre-Wedding Shoots',
      description: 'Romantic photography sessions on pristine beaches',
      capacity: 'Couple + team',
      price: 'Starting ₹75,000',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const weddingVenues = [
    {
      id: 'beach-pavilion',
      name: 'Beachfront Wedding Pavilion',
      capacity: '200-300 guests',
      setting: 'Oceanfront',
      price: '₹12,50,000',
      description: 'Stunning beachfront venue with panoramic ocean views, perfect for sunset ceremonies',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Panoramic ocean views',
        'Sunset ceremony timing',
        'Professional sound system',
        'Bridal preparation suite',
        'Guest seating for 300',
        'Floral decoration included'
      ],
      includes: [
        'Venue decoration with flowers',
        'Professional photography (4 hours)',
        'Wedding cake (3-tier)',
        'Bridal suite for preparation',
        'Sound system and microphones',
        'Dedicated wedding coordinator'
      ]
    },
    {
      id: 'garden-terrace',
      name: 'Tropical Garden Terrace',
      capacity: '100-200 guests',
      setting: 'Garden',
      price: '₹8,50,000',
      description: 'Intimate garden setting surrounded by lush tropical landscaping and fairy lights',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Lush tropical gardens',
        'Fairy light canopy',
        'Intimate atmosphere',
        'Climate-controlled',
        'Guest seating for 200',
        'Dance floor included'
      ],
      includes: [
        'Garden venue with lighting',
        'Floral arrangements',
        'Wedding cake (2-tier)',
        'Basic photography (2 hours)',
        'Sound system',
        'Event coordination'
      ]
    },
    {
      id: 'poolside-deck',
      name: 'Infinity Pool Deck',
      capacity: '50-100 guests',
      setting: 'Poolside',
      price: '₹6,50,000',
      description: 'Modern poolside venue with infinity pool backdrop and contemporary styling',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: [
        'Infinity pool backdrop',
        'Modern contemporary design',
        'Poolside bar access',
        'Lounge seating areas',
        'Guest seating for 100',
        'Ambient lighting'
      ],
      includes: [
        'Poolside venue setup',
        'Contemporary decorations',
        'Wedding cake (1-tier)',
        'Cocktail hour setup',
        'Basic sound system',
        'Coordination services'
      ]
    }
  ];

  const weddingPackages = [
    {
      name: 'Royal Wedding Package',
      price: '₹15,00,000',
      guests: '200-300',
      duration: '3 days',
      description: 'Ultimate luxury wedding experience with premium services',
      includes: [
        'Beachfront ceremony venue',
        'Reception dinner for all guests',
        'Bridal suite for 2 nights',
        'Professional photography & videography',
        'Floral decorations and mandap',
        'Traditional Goan cultural show',
        'Welcome dinner for families',
        'Mehendi and sangeet arrangements',
        'Dedicated wedding planner',
        'Airport transfers for couple'
      ],
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Intimate Wedding Package',
      price: '₹8,50,000',
      guests: '50-100',
      duration: '2 days',
      description: 'Perfect for close family and friends celebrations',
      includes: [
        'Garden or poolside ceremony',
        'Reception dinner',
        'Bridal suite for 1 night',
        'Photography (4 hours)',
        'Basic floral decorations',
        'Wedding cake',
        'Sound system and coordination',
        'Welcome drinks for guests'
      ],
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Elopement Package',
      price: '₹3,50,000',
      guests: '10-25',
      duration: '1 day',
      description: 'Romantic intimate ceremony for couples',
      includes: [
        'Beachfront ceremony setup',
        'Intimate dinner for guests',
        'Bridal suite for 1 night',
        'Photography (2 hours)',
        'Simple floral arrangements',
        'Wedding cake',
        'Champagne toast'
      ],
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const corporateServices = [
    {
      icon: Users,
      title: 'Conference Facilities',
      description: 'Modern meeting rooms with AV equipment',
      capacity: '20-200 attendees'
    },
    {
      icon: Sparkles,
      title: 'Team Building',
      description: 'Beach activities and group challenges',
      capacity: '10-100 participants'
    },
    {
      icon: Music,
      title: 'Gala Dinners',
      description: 'Elegant evening events with entertainment',
      capacity: '50-300 guests'
    },
    {
      icon: Gift,
      title: 'Incentive Programs',
      description: 'Reward trips and recognition events',
      capacity: '20-150 participants'
    }
  ];

  const inquiryFormFields = [
    { label: 'Full Name', name: 'fullName', type: 'text', required: true },
    { label: 'Email Address', name: 'email', type: 'email', required: true },
    { label: 'Phone Number', name: 'phone', type: 'tel', required: true },
    { 
      label: 'Event Type', 
      name: 'eventType', 
      type: 'select', 
      required: true,
      options: [
        { value: 'wedding', label: 'Wedding Ceremony' },
        { value: 'reception', label: 'Wedding Reception' },
        { value: 'corporate', label: 'Corporate Event' },
        { value: 'social', label: 'Social Celebration' },
        { value: 'photoshoot', label: 'Pre-Wedding Shoot' }
      ]
    },
    { label: 'Event Date', name: 'eventDate', type: 'date', required: true },
    { label: 'Number of Guests', name: 'guestCount', type: 'number', required: true },
    { label: 'Budget Range', name: 'budget', type: 'select', required: false,
      options: [
        { value: '3-5', label: '₹3-5 Lakhs' },
        { value: '5-10', label: '₹5-10 Lakhs' },
        { value: '10-15', label: '₹10-15 Lakhs' },
        { value: '15+', label: '₹15+ Lakhs' }
      ]
    },
    { label: 'Special Requirements', name: 'requirements', type: 'textarea', required: false, placeholder: 'Any specific requirements or preferences...' }
  ];

  const handleInquirySubmit = (data: Record<string, string>) => {
    console.log('Event Inquiry Data:', data);
    alert('🎉 Thank you for your inquiry! Our events team will contact you within 24 hours to discuss your special celebration.');
    setIsInquiryOpen(false);
  };

  return (
    <section id="events" className="py-16 md:py-24 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            💕 SPECIAL CELEBRATIONS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Events &
            <span className="block bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              Weddings
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Create unforgettable memories with our bespoke event planning and stunning beachfront venues
          </p>
        </div>

        {/* Event Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventTypes.map((eventType, index) => {
            const Icon = eventType.icon;
            return (
              <Card key={index} hover className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${eventType.color} flex items-center justify-center`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{eventType.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{eventType.description}</p>
                <div className="text-sm text-gray-600 mb-2">{eventType.capacity}</div>
                <div className="text-lg font-bold text-rose-600">{eventType.price}</div>
              </Card>
            );
          })}
        </div>

        {/* Wedding Venues */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Wedding Venues
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {weddingVenues.map((venue) => (
              <Card key={venue.id} hover padding="none" className="overflow-hidden">
                <div className="relative h-48">
                  <img 
                    src={venue.image} 
                    alt={venue.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-rose-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {venue.capacity}
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{venue.name}</h4>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-rose-600 font-medium">{venue.setting}</span>
                    <span className="text-2xl font-bold text-gray-800">{venue.price}</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{venue.description}</p>

                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Key Features</h5>
                    <div className="grid grid-cols-2 gap-1">
                      {venue.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedVenue(venue)}
                    className="w-full border-rose-400 text-rose-600 hover:bg-rose-400 hover:text-white"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Wedding Packages */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Wedding Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weddingPackages.map((pkg, index) => (
              <Card key={index} hover className="text-center">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-bold text-gray-800 mb-2">{pkg.name}</h4>
                <div className="text-2xl font-bold text-rose-600 mb-2">{pkg.price}</div>
                <div className="text-sm text-gray-600 mb-3">
                  {pkg.guests} guests • {pkg.duration}
                </div>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="text-xs text-gray-600 mb-4 space-y-1 text-left">
                  {pkg.includes.slice(0, 5).map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                  {pkg.includes.length > 5 && (
                    <li className="text-rose-600 font-medium">+{pkg.includes.length - 5} more inclusions</li>
                  )}
                </ul>
                <Button variant="primary" size="sm" className="w-full">
                  Inquire Now
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Corporate Services */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Corporate Events
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                  <div className="text-sm text-blue-600 font-medium">{service.capacity}</div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-rose-500 to-pink-500 text-white">
            <Heart size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Plan Your Perfect Event</h3>
            <p className="mb-6 opacity-90">
              Our dedicated events team will help you create unforgettable memories
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsInquiryOpen(true)}
                className="border-white text-white hover:bg-white hover:text-rose-600"
              >
                Send Inquiry
              </Button>
              <Button
                variant="secondary"
                size="lg"
              >
                Call Events Team
              </Button>
            </div>
            <div className="mt-6 text-sm opacity-90">
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +91 83209 12348
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  events@sunseekerresort.com
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Venue Details Modal */}
      {selectedVenue && (
        <Modal
          isOpen={!!selectedVenue}
          onClose={() => setSelectedVenue(null)}
          title={selectedVenue.name}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image and Basic Info */}
            <div>
              <img 
                src={selectedVenue.image} 
                alt={selectedVenue.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Capacity:</span>
                  <span className="text-rose-600 font-bold">{selectedVenue.capacity}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Setting:</span>
                  <span className="text-gray-600">{selectedVenue.setting}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Starting Price:</span>
                  <span className="text-2xl font-bold text-gray-800">{selectedVenue.price}</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedVenue.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Venue Features</h4>
              <ul className="space-y-2 mb-6">
                {selectedVenue.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Sparkles size={16} className="text-rose-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Package Includes</h4>
              <ul className="space-y-2 mb-6">
                {selectedVenue.includes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Gift size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setSelectedVenue(null);
                  setIsInquiryOpen(true);
                }}
              >
                Request Quote
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Inquiry Form Modal */}
      <Modal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        title="Event Inquiry"
        size="lg"
      >
        <Form
          title=""
          fields={inquiryFormFields}
          onSubmit={handleInquirySubmit}
          submitLabel="Send Inquiry"
        />
      </Modal>
    </section>
  );
};

export default EventsWeddings;