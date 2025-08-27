import React, { useState } from 'react';
import { Utensils, Clock, Users, Star, ChefHat, Wine, Coffee, Waves } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const DiningExperience: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null);

  const restaurants = [
    {
      id: 'oceana',
      name: 'Oceana Beachside Grill',
      cuisine: 'Fresh Seafood & Grills',
      timing: '12:00 PM - 11:00 PM',
      location: 'Beachfront',
      rating: 4.8,
      priceRange: '₹₹₹',
      description: 'Dine with your toes in the sand at our signature beachfront restaurant. Fresh catches of the day grilled to perfection.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Goan Fish Curry', 'Grilled Lobster', 'Tandoori Prawns', 'Beach BBQ Platter'],
      features: ['Beachfront seating', 'Live cooking stations', 'Sunset views', 'Private cabanas'],
      ambiance: 'Casual beachside dining with stunning ocean views',
      highlights: [
        'Fresh seafood caught daily by local fishermen',
        'Traditional Goan spices and cooking methods',
        'Romantic sunset dinner setting',
        'Interactive grilling experience'
      ]
    },
    {
      id: 'spice-route',
      name: 'Spice Route',
      cuisine: 'Authentic Indian & Asian',
      timing: '7:00 AM - 10:30 PM',
      location: 'Main Building',
      rating: 4.9,
      priceRange: '₹₹',
      description: 'Journey through India\'s diverse culinary landscape with authentic regional specialties and pan-Asian favorites.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Butter Chicken', 'Biryani Varieties', 'Thai Green Curry', 'Masala Dosa'],
      features: ['Live cooking stations', 'Regional specialties', 'Vegetarian options', 'Spice garden herbs'],
      ambiance: 'Elegant dining with traditional Indian décor',
      highlights: [
        'Chefs from different Indian states',
        'Fresh spices from our herb garden',
        'Extensive vegetarian and vegan options',
        'Traditional cooking techniques'
      ]
    },
    {
      id: 'azure-rooftop',
      name: 'Azure Rooftop',
      cuisine: 'International Fine Dining',
      timing: '6:00 PM - 12:00 AM',
      location: 'Rooftop Terrace',
      rating: 4.7,
      priceRange: '₹₹₹₹',
      description: 'Elevated dining experience with panoramic ocean views. Contemporary international cuisine with a focus on presentation.',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Wagyu Steaks', 'Sushi & Sashimi', 'Molecular Gastronomy', 'Wine Pairings'],
      features: ['360° ocean views', 'Premium bar', 'Live music', 'Private dining'],
      ambiance: 'Sophisticated rooftop dining with city and ocean views',
      highlights: [
        'Award-winning sommelier wine selection',
        'Molecular gastronomy presentations',
        'Live jazz performances on weekends',
        'Private chef\'s table experiences'
      ]
    },
    {
      id: 'palm-cafe',
      name: 'Palm Café',
      cuisine: 'Casual All-Day Dining',
      timing: '6:00 AM - 11:00 PM',
      location: 'Pool Deck',
      rating: 4.6,
      priceRange: '₹₹',
      description: 'Relaxed poolside dining with international comfort food, fresh salads, and tropical beverages.',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800',
      specialties: ['Club Sandwiches', 'Fresh Salads', 'Smoothie Bowls', 'Wood-fired Pizza'],
      features: ['Poolside service', 'Healthy options', 'Kids menu', '24/7 room service'],
      ambiance: 'Casual poolside atmosphere perfect for families',
      highlights: [
        'Healthy and organic menu options',
        'Kids-friendly meals and activities',
        'Fresh tropical fruit selections',
        'Poolside cocktail service'
      ]
    }
  ];

  const diningPackages = [
    {
      name: 'Romantic Dinner Package',
      price: '₹8,999',
      description: 'Private beachside dinner for two with personalized service',
      includes: ['3-course meal', 'Wine pairing', 'Private setup', 'Dedicated server'],
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Family Feast Experience',
      price: '₹12,999',
      description: 'All-day dining experience for family of 4 across all restaurants',
      includes: ['Breakfast buffet', 'Lunch at any restaurant', 'Dinner & drinks', 'Kids activities'],
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Culinary Journey',
      price: '₹15,999',
      description: 'Progressive dining experience across all 4 restaurants',
      includes: ['Welcome drinks', '4-course tasting', 'Wine pairings', 'Chef interaction'],
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const beverageProgram = [
    { icon: Wine, title: 'Premium Bar', description: 'Top-shelf spirits and craft cocktails' },
    { icon: Coffee, title: 'Specialty Coffee', description: 'Barista-crafted beverages all day' },
    { icon: Waves, title: 'Fresh Juices', description: 'Tropical fruit juices and smoothies' },
    { icon: Star, title: 'Signature Cocktails', description: 'Unique Sunseeker cocktail creations' }
  ];

  return (
    <section id="dining" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🍽️ CULINARY EXCELLENCE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Dining
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From beachside grills to rooftop fine dining, embark on a culinary journey that celebrates local flavors and international cuisine
          </p>
        </div>

        {/* Restaurants Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {restaurants.map((restaurant) => (
            <Card key={restaurant.id} hover padding="none" className="overflow-hidden">
              <div className="relative h-48 md:h-56">
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{restaurant.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {restaurant.priceRange}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{restaurant.name}</h3>
                    <p className="text-cyan-600 font-medium">{restaurant.cuisine}</p>
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    <div className="flex items-center mb-1">
                      <Clock size={14} className="mr-1" />
                      {restaurant.timing}
                    </div>
                    <div>{restaurant.location}</div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{restaurant.description}</p>

                {/* Specialties */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Signature Dishes</h4>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.slice(0, 3).map((specialty, index) => (
                      <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                        {specialty}
                      </span>
                    ))}
                    {restaurant.specialties.length > 3 && (
                      <span className="text-orange-600 text-xs px-2 py-1">
                        +{restaurant.specialties.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {restaurant.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setSelectedRestaurant(restaurant)}
                  className="w-full border-orange-400 text-orange-600 hover:bg-orange-400 hover:text-white"
                >
                  View Menu & Details
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Dining Packages */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Special Dining Packages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {diningPackages.map((pkg, index) => (
              <Card key={index} hover className="text-center">
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-bold text-gray-800 mb-2">{pkg.name}</h4>
                <div className="text-2xl font-bold text-orange-600 mb-3">{pkg.price}</div>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="sm" className="w-full">
                  Book Package
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Beverage Program */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Premium Beverage Program
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {beverageProgram.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="font-bold text-gray-800 mb-2">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              All beverages included in our all-inclusive packages
            </p>
            <Button variant="secondary" size="lg">
              View Full Beverage Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Restaurant Details Modal */}
      {selectedRestaurant && (
        <Modal
          isOpen={!!selectedRestaurant}
          onClose={() => setSelectedRestaurant(null)}
          title={selectedRestaurant.name}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image and Basic Info */}
            <div>
              <img 
                src={selectedRestaurant.image} 
                alt={selectedRestaurant.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Cuisine:</span>
                  <span className="text-cyan-600">{selectedRestaurant.cuisine}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Timing:</span>
                  <span className="text-gray-600">{selectedRestaurant.timing}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Location:</span>
                  <span className="text-gray-600">{selectedRestaurant.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Rating:</span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{selectedRestaurant.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedRestaurant.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Ambiance</h4>
              <p className="text-gray-600 mb-4">{selectedRestaurant.ambiance}</p>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Signature Dishes</h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {selectedRestaurant.specialties.map((specialty: string, index: number) => (
                  <div key={index} className="bg-orange-50 text-orange-700 px-3 py-2 rounded-lg text-sm">
                    {specialty}
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Highlights</h4>
              <ul className="space-y-2 mb-6">
                {selectedRestaurant.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <ChefHat size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setSelectedRestaurant(null)}
              >
                Make Reservation
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default DiningExperience;