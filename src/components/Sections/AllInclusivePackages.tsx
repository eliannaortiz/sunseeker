import React, { useState } from 'react';
import { Check, X, Star, Users, Calendar, Gift, Crown, Sparkles } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const AllInclusivePackages: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const [showComparison, setShowComparison] = useState(false);

  const packages = [
    {
      id: 'classic',
      name: 'Classic All-Inclusive',
      price: 15999,
      originalPrice: 19999,
      duration: 'per night',
      popular: false,
      color: 'from-cyan-500 to-blue-500',
      description: 'Perfect for families seeking great value with all essentials included',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'All meals at 3 restaurants',
        'Local alcoholic & non-alcoholic beverages',
        'Kids club (4-12 years)',
        'Basic water sports',
        'Beach access & loungers',
        'Evening entertainment',
        'WiFi throughout resort',
        'Daily housekeeping'
      ],
      excludes: [
        'Premium liquors',
        'Spa treatments',
        'Adventure excursions',
        'Private dining'
      ],
      highlights: [
        'Great value for families',
        'All basic amenities covered',
        'Kids eat and play free',
        'No hidden costs'
      ]
    },
    {
      id: 'premium',
      name: 'Premium All-Inclusive',
      price: 22999,
      originalPrice: 28999,
      duration: 'per night',
      popular: true,
      color: 'from-orange-500 to-red-500',
      description: 'Enhanced experience with premium amenities and exclusive access',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'All meals at 4 restaurants',
        'Premium alcoholic & non-alcoholic beverages',
        'Kids club with extended hours',
        'All water sports included',
        'Priority beach cabana access',
        'Live entertainment & shows',
        'Spa facility access',
        '24/7 room service',
        'Mini-bar restocked daily',
        'Late checkout (2 PM)'
      ],
      excludes: [
        'Signature spa treatments',
        'Private excursions',
        'Butler service'
      ],
      highlights: [
        'Most popular choice',
        'Premium dining access',
        'Spa facilities included',
        'Extended kids club hours'
      ]
    },
    {
      id: 'luxury',
      name: 'Luxury All-Inclusive',
      price: 35999,
      originalPrice: 42999,
      duration: 'per night',
      popular: false,
      color: 'from-purple-500 to-pink-500',
      description: 'Ultimate luxury experience with personalized service and exclusive privileges',
      image: 'https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'All meals at 4 restaurants + room service',
        'Top-shelf premium beverages',
        'Personal butler service',
        'All activities & excursions',
        'Private beach cabana',
        'Exclusive adult-only areas',
        'Spa treatments (2 per stay)',
        'Airport transfers',
        'Laundry service',
        'Late checkout (4 PM)',
        'Welcome champagne & fruits',
        'Exclusive dining experiences'
      ],
      excludes: [],
      highlights: [
        'Ultimate luxury experience',
        'Personal butler service',
        'All activities included',
        'Exclusive privileges'
      ]
    }
  ];

  const valueBreakdown = [
    {
      category: 'Dining & Beverages',
      classic: '₹8,000',
      premium: '₹12,000',
      luxury: '₹18,000',
      description: 'Daily value of meals and drinks'
    },
    {
      category: 'Activities & Entertainment',
      classic: '₹3,000',
      premium: '₹5,000',
      luxury: '₹8,000',
      description: 'Sports, shows, and activities'
    },
    {
      category: 'Kids Club & Services',
      classic: '₹2,000',
      premium: '₹3,500',
      luxury: '₹5,000',
      description: 'Childcare and family services'
    },
    {
      category: 'Spa & Wellness',
      classic: '₹0',
      premium: '₹2,500',
      luxury: '₹6,000',
      description: 'Spa access and treatments'
    },
    {
      category: 'Premium Services',
      classic: '₹1,000',
      premium: '₹2,000',
      luxury: '₹8,000',
      description: 'Concierge, transfers, butler'
    }
  ];

  const seasonalOffers = [
    {
      title: 'Early Bird Special',
      discount: '25% OFF',
      validity: 'Book 60 days in advance',
      description: 'Save up to ₹10,000 per night',
      color: 'bg-green-500'
    },
    {
      title: 'Family Package',
      discount: 'Kids Stay Free',
      validity: 'Up to 2 children under 12',
      description: 'Includes kids club and meals',
      color: 'bg-blue-500'
    },
    {
      title: 'Honeymoon Special',
      discount: 'Free Upgrade',
      validity: 'Couples packages',
      description: 'Complimentary spa and dining',
      color: 'bg-pink-500'
    },
    {
      title: 'Extended Stay',
      discount: '4th Night Free',
      validity: 'Minimum 4 nights',
      description: 'Perfect for longer vacations',
      color: 'bg-purple-500'
    }
  ];

  return (
    <section id="packages" className="py-16 md:py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            💎 ALL-INCLUSIVE PACKAGES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Choose Your
            <span className="block bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Perfect Package
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From family-friendly value to ultimate luxury, find the perfect all-inclusive experience tailored to your needs
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg) => (
            <Card key={pkg.id} hover padding="none" className={`overflow-hidden relative ${pkg.popular ? 'ring-4 ring-orange-200 scale-105' : ''}`}>
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center">
                    <Crown size={16} className="mr-2" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
              
              <div className="p-6">
                {/* Package Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.description}</p>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 line-through">₹{pkg.originalPrice.toLocaleString()}</div>
                    <div className="text-4xl font-bold text-gray-800">₹{pkg.price.toLocaleString()}</div>
                    <div className="text-gray-600">{pkg.duration}</div>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">
                    Save ₹{(pkg.originalPrice - pkg.price).toLocaleString()}
                  </div>
                </div>

                {/* Package Image */}
                <img 
                  src={pkg.image} 
                  alt={pkg.name}
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />

                {/* Includes */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    What's Included
                  </h4>
                  <ul className="space-y-2">
                    {pkg.includes.slice(0, 6).map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <Check size={14} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                    {pkg.includes.length > 6 && (
                      <li className="text-sm text-purple-600 font-medium">
                        +{pkg.includes.length - 6} more inclusions
                      </li>
                    )}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.highlights.map((highlight, index) => (
                      <div key={index} className="bg-purple-50 text-purple-700 px-3 py-2 rounded-lg text-xs text-center">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => setSelectedPackage(pkg)}
                  >
                    View Full Details
                  </Button>
                  <Button
                    variant="outline"
                    size="md"
                    className="w-full"
                    onClick={() => document.getElementById('booking')?.scrollIntoView()}
                  >
                    Book This Package
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Value Breakdown */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Daily Value Breakdown
          </h3>
          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <th className="text-left py-4 px-4 font-semibold">Category</th>
                    <th className="text-center py-4 px-4 font-semibold">Classic</th>
                    <th className="text-center py-4 px-4 font-semibold">Premium</th>
                    <th className="text-center py-4 px-4 font-semibold">Luxury</th>
                  </tr>
                </thead>
                <tbody>
                  {valueBreakdown.map((item, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                      <td className="py-4 px-4">
                        <div className="font-semibold text-gray-800">{item.category}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </td>
                      <td className="text-center py-4 px-4 font-bold text-cyan-600">{item.classic}</td>
                      <td className="text-center py-4 px-4 font-bold text-orange-600">{item.premium}</td>
                      <td className="text-center py-4 px-4 font-bold text-purple-600">{item.luxury}</td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-bold">
                    <td className="py-4 px-4 text-gray-800">Total Daily Value</td>
                    <td className="text-center py-4 px-4 text-cyan-600">₹14,000</td>
                    <td className="text-center py-4 px-4 text-orange-600">₹25,000</td>
                    <td className="text-center py-4 px-4 text-purple-600">₹45,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Seasonal Offers */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Special Offers & Deals
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalOffers.map((offer, index) => (
              <Card key={index} hover className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 ${offer.color} rounded-full flex items-center justify-center`}>
                  <Gift size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{offer.title}</h4>
                <div className="text-2xl font-bold text-purple-600 mb-2">{offer.discount}</div>
                <p className="text-sm text-gray-600 mb-2">{offer.validity}</p>
                <p className="text-xs text-gray-500">{offer.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Package Comparison CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help Choosing?</h3>
            <p className="mb-6 opacity-90">
              Our package experts will help you find the perfect all-inclusive experience for your vacation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowComparison(true)}
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Compare All Packages
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

      {/* Package Details Modal */}
      {selectedPackage && (
        <Modal
          isOpen={!!selectedPackage}
          onClose={() => setSelectedPackage(null)}
          title={selectedPackage.name}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Package Image and Pricing */}
            <div>
              <img 
                src={selectedPackage.image} 
                alt={selectedPackage.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through mb-1">₹{selectedPackage.originalPrice.toLocaleString()}</div>
                <div className="text-4xl font-bold text-gray-800 mb-1">₹{selectedPackage.price.toLocaleString()}</div>
                <div className="text-gray-600 mb-2">{selectedPackage.duration}</div>
                <div className="text-green-600 font-semibold">
                  Save ₹{(selectedPackage.originalPrice - selectedPackage.price).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Package Details */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedPackage.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                <Check size={18} className="text-green-500 mr-2" />
                Everything Included
              </h4>
              <ul className="space-y-2 mb-6">
                {selectedPackage.includes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              {selectedPackage.excludes.length > 0 && (
                <>
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <X size={18} className="text-red-500 mr-2" />
                    Not Included
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {selectedPackage.excludes.map((item: string, index: number) => (
                      <li key={index} className="flex items-start space-x-2">
                        <X size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setSelectedPackage(null);
                  document.getElementById('booking')?.scrollIntoView();
                }}
              >
                Book This Package
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Package Comparison Modal */}
      <Modal
        isOpen={showComparison}
        onClose={() => setShowComparison(false)}
        title="Package Comparison"
        size="xl"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-purple-200">
                <th className="text-left py-4 px-2 font-semibold text-gray-800">Features</th>
                <th className="text-center py-4 px-2 font-semibold text-cyan-600">Classic</th>
                <th className="text-center py-4 px-2 font-semibold text-orange-600">Premium</th>
                <th className="text-center py-4 px-2 font-semibold text-purple-600">Luxury</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-2 font-medium">Price per night</td>
                <td className="text-center py-3 px-2">₹15,999</td>
                <td className="text-center py-3 px-2">₹22,999</td>
                <td className="text-center py-3 px-2">₹35,999</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-2">Restaurant access</td>
                <td className="text-center py-3 px-2">3 restaurants</td>
                <td className="text-center py-3 px-2">4 restaurants</td>
                <td className="text-center py-3 px-2">All + room service</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-2">Beverage selection</td>
                <td className="text-center py-3 px-2">Local brands</td>
                <td className="text-center py-3 px-2">Premium brands</td>
                <td className="text-center py-3 px-2">Top shelf</td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-2">Spa access</td>
                <td className="text-center py-3 px-2"><X size={16} className="text-red-500 mx-auto" /></td>
                <td className="text-center py-3 px-2"><Check size={16} className="text-green-500 mx-auto" /></td>
                <td className="text-center py-3 px-2"><Check size={16} className="text-green-500 mx-auto" /></td>
              </tr>
              <tr className="border-b border-gray-100">
                <td className="py-3 px-2">Butler service</td>
                <td className="text-center py-3 px-2"><X size={16} className="text-red-500 mx-auto" /></td>
                <td className="text-center py-3 px-2"><X size={16} className="text-red-500 mx-auto" /></td>
                <td className="text-center py-3 px-2"><Check size={16} className="text-green-500 mx-auto" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </Modal>
    </section>
  );
};

export default AllInclusivePackages;