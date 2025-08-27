import React, { useState } from 'react';
import { Gift, Calendar, Users, Heart, Star, Clock, Tag, Percent, Crown, Sparkles } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const SeasonalOffers: React.FC = () => {
  const [selectedOffer, setSelectedOffer] = useState<any>(null);

  const currentOffers = [
    {
      id: 'early-bird-2025',
      title: 'Early Bird Special 2025',
      discount: '25% OFF',
      validUntil: '2025-03-31',
      description: 'Book your 2025 vacation now and save big on all room categories',
      image: 'https://images.pexels.com/photos/1449824/pexels-photo-1449824.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '₹15,999',
      offerPrice: '₹11,999',
      savings: '₹4,000',
      conditions: [
        'Book 60 days in advance',
        'Valid for stays until Dec 2025',
        'Non-refundable booking',
        'Subject to availability'
      ],
      includes: [
        'All-inclusive dining',
        'Premium beverages',
        'Kids club access',
        'Water sports activities',
        'Evening entertainment'
      ],
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'family-summer-2025',
      title: 'Family Summer Bonanza',
      discount: 'Kids Stay Free',
      validUntil: '2025-06-30',
      description: 'Perfect family vacation with kids staying and eating absolutely free',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '₹22,999',
      offerPrice: '₹18,999',
      savings: '₹4,000',
      conditions: [
        'Up to 2 children under 12',
        'Minimum 3 nights stay',
        'Valid for summer season',
        'Family room required'
      ],
      includes: [
        'Kids meals included',
        'Kids club activities',
        'Family pool access',
        'Beach games',
        'Children entertainment'
      ],
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'honeymoon-special',
      title: 'Honeymoon Paradise',
      discount: 'Free Upgrade + Spa',
      validUntil: '2025-12-31',
      description: 'Romantic getaway with complimentary room upgrade and couples spa',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '₹18,999',
      offerPrice: '₹16,999',
      savings: '₹2,000',
      conditions: [
        'Valid marriage certificate',
        'Within 6 months of wedding',
        'Minimum 4 nights stay',
        'Advance booking required'
      ],
      includes: [
        'Room upgrade to suite',
        'Couples spa treatment',
        'Romantic dinner setup',
        'Champagne welcome',
        'Late checkout'
      ],
      featured: true,
      color: 'from-pink-500 to-rose-500'
    },
    {
      id: 'monsoon-retreat',
      title: 'Monsoon Magic Retreat',
      discount: '30% OFF',
      validUntil: '2025-09-30',
      description: 'Experience Goa\'s lush monsoon beauty with special indoor activities',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '₹12,999',
      offerPrice: '₹8,999',
      savings: '₹4,000',
      conditions: [
        'Valid June to September',
        'Weather-dependent activities',
        'Indoor entertainment focus',
        'Flexible cancellation'
      ],
      includes: [
        'Spa treatments',
        'Indoor activities',
        'Cooking classes',
        'Cultural workshops',
        'Monsoon special menu'
      ],
      featured: false,
      color: 'from-teal-500 to-green-500'
    },
    {
      id: 'extended-stay',
      title: 'Extended Stay Bonus',
      discount: '4th Night Free',
      validUntil: '2025-11-30',
      description: 'Stay longer and save more with our extended vacation package',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '₹51,996',
      offerPrice: '₹38,997',
      savings: '₹12,999',
      conditions: [
        'Minimum 4 nights stay',
        'Same room category',
        'Consecutive nights only',
        'Valid year-round'
      ],
      includes: [
        'All-inclusive benefits',
        'Extended spa access',
        'Complimentary excursions',
        'Priority reservations',
        'Late checkout'
      ],
      featured: false,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      id: 'loyalty-member',
      title: 'Loyalty Member Exclusive',
      discount: '20% OFF + Perks',
      validUntil: '2025-12-31',
      description: 'Exclusive benefits for our returning guests and loyalty members',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      originalPrice: '₹18,999',
      offerPrice: '₹15,199',
      savings: '₹3,800',
      conditions: [
        'Previous stay required',
        'Loyalty program membership',
        'Valid for all seasons',
        'Stackable with other offers'
      ],
      includes: [
        'Priority check-in',
        'Room upgrade (subject to availability)',
        'Complimentary airport transfer',
        'Exclusive member events',
        'Flexible booking terms'
      ],
      featured: false,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const offerCategories = [
    { id: 'all', label: 'All Offers', count: currentOffers.length },
    { id: 'featured', label: 'Featured', count: currentOffers.filter(o => o.featured).length },
    { id: 'family', label: 'Family', count: 2 },
    { id: 'couples', label: 'Couples', count: 2 },
    { id: 'seasonal', label: 'Seasonal', count: 3 }
  ];

  const loyaltyProgram = {
    name: 'Sunseeker Rewards',
    tiers: [
      {
        name: 'Silver Member',
        requirement: '1-2 stays',
        benefits: ['5% discount on future bookings', 'Priority customer service', 'Late checkout (2 PM)'],
        color: 'from-gray-400 to-gray-500'
      },
      {
        name: 'Gold Member',
        requirement: '3-5 stays',
        benefits: ['10% discount on bookings', 'Room upgrade (subject to availability)', 'Complimentary spa access', 'Welcome amenities'],
        color: 'from-yellow-400 to-yellow-500'
      },
      {
        name: 'Platinum Member',
        requirement: '6+ stays',
        benefits: ['15% discount on bookings', 'Guaranteed room upgrade', 'Airport transfers', 'Exclusive member events', 'Personal concierge'],
        color: 'from-purple-400 to-purple-500'
      }
    ]
  };

  const upcomingOffers = [
    {
      title: 'Diwali Festival Special',
      launchDate: '2025-10-01',
      description: 'Celebrate Diwali with traditional festivities and special packages',
      discount: '35% OFF'
    },
    {
      title: 'Christmas & New Year Gala',
      launchDate: '2025-11-01',
      description: 'Ring in the New Year with exclusive celebrations and packages',
      discount: 'Special Packages'
    },
    {
      title: 'Valentine\'s Romance Package',
      launchDate: '2025-01-15',
      description: 'Romantic getaway packages for couples celebrating love',
      discount: 'Couple Specials'
    }
  ];

  return (
    <section id="offers" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🎁 EXCLUSIVE DEALS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Special Offers &
            <span className="block bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              Seasonal Deals
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover amazing savings and exclusive packages designed to make your Goan vacation even more special
          </p>
        </div>

        {/* Featured Offers Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Featured Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentOffers.filter(offer => offer.featured).map((offer) => (
              <Card key={offer.id} hover padding="none" className="overflow-hidden relative">
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                    <Crown size={14} className="mr-1" />
                    FEATURED
                  </div>
                </div>
                
                <div className="relative h-48">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-lg font-bold text-red-600">{offer.discount}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{offer.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm text-gray-500 line-through">{offer.originalPrice}</div>
                      <div className="text-2xl font-bold text-green-600">{offer.offerPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Save</div>
                      <div className="text-lg font-bold text-red-600">{offer.savings}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock size={14} className="mr-1" />
                      Valid until {new Date(offer.validUntil).toLocaleDateString()}
                    </div>
                  </div>

                  <Button
                    variant="primary"
                    size="md"
                    onClick={() => setSelectedOffer(offer)}
                    className="w-full"
                  >
                    View Details
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* All Current Offers */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">All Current Offers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentOffers.filter(offer => !offer.featured).map((offer) => (
              <Card key={offer.id} hover padding="none" className="overflow-hidden">
                <div className="relative h-40">
                  <img 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-sm font-bold text-red-600">{offer.discount}</span>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{offer.title}</h4>
                  <p className="text-gray-600 mb-3 text-sm">{offer.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-lg font-bold text-green-600">{offer.offerPrice}</div>
                    <div className="text-sm text-red-600 font-semibold">Save {offer.savings}</div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedOffer(offer)}
                    className="w-full border-amber-400 text-amber-600 hover:bg-amber-400 hover:text-white"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Loyalty Program */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            {loyaltyProgram.name}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loyaltyProgram.tiers.map((tier, index) => (
              <Card key={index} hover className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                  <Crown size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{tier.name}</h4>
                <div className="text-sm text-gray-600 mb-4">{tier.requirement}</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <Star size={14} className="text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="primary" size="lg">
              Join Sunseeker Rewards
            </Button>
          </div>
        </div>

        {/* Upcoming Offers */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Coming Soon</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingOffers.map((offer, index) => (
              <Card key={index} className="text-center opacity-75">
                <Calendar size={48} className="mx-auto mb-4 text-amber-500" />
                <h4 className="text-lg font-bold text-gray-800 mb-2">{offer.title}</h4>
                <div className="text-amber-600 font-semibold mb-2">{offer.discount}</div>
                <p className="text-gray-600 text-sm mb-3">{offer.description}</p>
                <div className="text-xs text-gray-500">
                  Launching {new Date(offer.launchDate).toLocaleDateString()}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <Card className="max-w-2xl mx-auto bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center">
          <Gift size={48} className="mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-4">Never Miss a Deal</h3>
          <p className="mb-6 opacity-90">
            Subscribe to our newsletter and be the first to know about exclusive offers and seasonal deals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-600"
            >
              Subscribe to Newsletter
            </Button>
            <Button
              variant="secondary"
              size="lg"
            >
              Follow on Social Media
            </Button>
          </div>
        </Card>
      </div>

      {/* Offer Details Modal */}
      {selectedOffer && (
        <Modal
          isOpen={!!selectedOffer}
          onClose={() => setSelectedOffer(null)}
          title={selectedOffer.title}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image and Pricing */}
            <div>
              <img 
                src={selectedOffer.image} 
                alt={selectedOffer.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-red-600 mb-2">{selectedOffer.discount}</div>
                <div className="flex items-center justify-center space-x-4 mb-2">
                  <span className="text-lg text-gray-500 line-through">{selectedOffer.originalPrice}</span>
                  <span className="text-3xl font-bold text-green-600">{selectedOffer.offerPrice}</span>
                </div>
                <div className="text-lg text-red-600 font-semibold">
                  You Save {selectedOffer.savings}
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <div className="flex items-center text-amber-800 mb-2">
                  <Clock size={16} className="mr-2" />
                  <span className="font-semibold">Valid Until: {new Date(selectedOffer.validUntil).toLocaleDateString()}</span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedOffer.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">What's Included</h4>
              <ul className="space-y-2 mb-6">
                {selectedOffer.includes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Gift size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Terms & Conditions</h4>
              <ul className="space-y-2 mb-6">
                {selectedOffer.conditions.map((condition: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Tag size={16} className="text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{condition}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setSelectedOffer(null)}
              >
                Book This Offer
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default SeasonalOffers;