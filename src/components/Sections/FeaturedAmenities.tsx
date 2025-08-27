import React from 'react';
import { Waves, Utensils, Dumbbell, Sparkles, Users, Car } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const FeaturedAmenities: React.FC = () => {
  const amenities = [
    {
      icon: Waves,
      title: 'Private Beach Access',
      description: 'Exclusive 500-meter stretch of pristine Anjuna Beach with complimentary beach chairs and umbrellas.',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Beach volleyball court', 'Water sports center', 'Beach bar service', 'Sunset viewing deck']
    },
    {
      icon: Utensils,
      title: '4 Signature Restaurants',
      description: 'From authentic Goan cuisine to international favorites, our restaurants offer diverse culinary experiences.',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Beachside seafood grill', 'Rooftop fine dining', 'Poolside café', '24/7 room service']
    },
    {
      icon: Dumbbell,
      title: 'Wellness & Fitness',
      description: 'State-of-the-art fitness center and rejuvenating spa treatments for complete wellness.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['24/7 modern gym', 'Yoga pavilion', 'Spa treatments', 'Personal training']
    },
    {
      icon: Sparkles,
      title: 'Entertainment Hub',
      description: 'Live entertainment, cultural shows, and vibrant nightlife to keep you entertained.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Live music nights', 'Cultural performances', 'DJ parties', 'Game room']
    },
    {
      icon: Users,
      title: 'Family Paradise',
      description: 'Dedicated facilities and activities designed to create unforgettable family memories.',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Kids club (4-12 years)', 'Family pool area', 'Playground', 'Teen activity zone']
    },
    {
      icon: Car,
      title: 'Premium Services',
      description: 'Concierge services and transportation to make your stay seamless and comfortable.',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800',
      features: ['Airport transfers', '24/7 concierge', 'Tour arrangements', 'Car rental service']
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            World-Class
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Amenities
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every detail crafted for your comfort and enjoyment
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card key={index} hover padding="none" className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={amenity.image} 
                      alt={amenity.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full flex items-center justify-center mr-4">
                        <Icon size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800">{amenity.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{amenity.description}</p>
                    <ul className="space-y-2">
                      {amenity.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => document.getElementById('rooms')?.scrollIntoView()}
            className="mr-4 mb-4"
          >
            Explore Our Rooms
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => document.getElementById('gallery')?.scrollIntoView()}
            className="mb-4"
          >
            View Photo Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAmenities;