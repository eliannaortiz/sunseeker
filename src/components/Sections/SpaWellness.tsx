import React, { useState } from 'react';
import { Sparkles, Heart, Users, Clock, Star, Leaf, Waves, Sun, Moon, Gift } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const SpaWellness: React.FC = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const treatmentCategories = [
    { id: 'all', label: 'All Treatments', icon: Sparkles },
    { id: 'couples', label: 'For Couples', icon: Heart },
    { id: 'individual', label: 'Individual', icon: Users },
    { id: 'wellness', label: 'Wellness', icon: Leaf },
    { id: 'beauty', label: 'Beauty', icon: Sun }
  ];

  const treatments = [
    {
      id: 'couples-retreat',
      name: 'Couples Paradise Retreat',
      category: ['couples'],
      duration: '180 minutes',
      price: 12999,
      originalPrice: 15999,
      rating: 4.9,
      description: 'Ultimate romantic spa experience designed for couples seeking intimate relaxation and connection.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Side-by-side couples massage (90 min)',
        'Private jacuzzi session (30 min)',
        'Champagne and tropical fruits',
        'Aromatherapy and essential oils',
        'Private relaxation suite',
        'Sunset beach meditation'
      ],
      highlights: [
        'Private oceanview treatment room',
        'Certified couples therapy techniques',
        'Organic locally-sourced products',
        'Complimentary photography session'
      ],
      benefits: [
        'Stress relief and deep relaxation',
        'Enhanced emotional connection',
        'Improved circulation and flexibility',
        'Romantic bonding experience'
      ]
    },
    {
      id: 'ayurvedic-healing',
      name: 'Traditional Ayurvedic Healing',
      category: ['individual', 'wellness'],
      duration: '120 minutes',
      price: 8999,
      originalPrice: 10999,
      rating: 4.8,
      description: 'Ancient Indian healing traditions combined with modern spa luxury for complete mind-body wellness.',
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Consultation with Ayurvedic practitioner',
        'Abhyanga full body massage (90 min)',
        'Herbal steam therapy',
        'Personalized dosha assessment',
        'Herbal tea and wellness consultation',
        'Take-home herbal oil blend'
      ],
      highlights: [
        'Certified Ayurvedic practitioners',
        'Authentic Indian healing techniques',
        'Personalized treatment protocols',
        'Premium organic herbal products'
      ],
      benefits: [
        'Balances mind, body, and spirit',
        'Detoxification and purification',
        'Improved energy and vitality',
        'Enhanced overall well-being'
      ]
    },
    {
      id: 'deep-tissue-massage',
      name: 'Therapeutic Deep Tissue',
      category: ['individual'],
      duration: '90 minutes',
      price: 6999,
      originalPrice: 8499,
      rating: 4.7,
      description: 'Intensive therapeutic massage targeting deep muscle tension and chronic pain relief.',
      image: 'https://images.pexels.com/photos/3757954/pexels-photo-3757954.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Pre-treatment consultation',
        'Deep tissue massage (90 min)',
        'Hot stone therapy',
        'Muscle tension assessment',
        'Post-treatment stretching',
        'Recovery recommendations'
      ],
      highlights: [
        'Licensed therapeutic massage therapists',
        'Customized pressure and techniques',
        'Focus on problem areas',
        'Professional sports therapy methods'
      ],
      benefits: [
        'Relieves chronic muscle tension',
        'Improves flexibility and mobility',
        'Reduces inflammation',
        'Accelerates injury recovery'
      ]
    },
    {
      id: 'goan-spice-ritual',
      name: 'Goan Spice Ritual',
      category: ['individual', 'beauty'],
      duration: '150 minutes',
      price: 9999,
      originalPrice: 12499,
      rating: 4.8,
      description: 'Unique spa experience using local Goan spices and ingredients for skin rejuvenation and relaxation.',
      image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Turmeric and coconut body scrub',
        'Spice-infused oil massage (90 min)',
        'Kokum butter skin treatment',
        'Cashew and honey facial',
        'Feni-infused foot soak',
        'Local spice tea ceremony'
      ],
      highlights: [
        'Authentic Goan ingredients',
        'Traditional local recipes',
        'Skin brightening and nourishing',
        'Cultural spa experience'
      ],
      benefits: [
        'Natural skin brightening',
        'Deep moisturization',
        'Antioxidant protection',
        'Cultural immersion experience'
      ]
    },
    {
      id: 'prenatal-bliss',
      name: 'Prenatal Bliss Package',
      category: ['individual', 'wellness'],
      duration: '120 minutes',
      price: 7999,
      originalPrice: 9499,
      rating: 4.9,
      description: 'Specially designed spa treatments for expecting mothers, focusing on comfort and relaxation.',
      image: 'https://images.pexels.com/photos/3865674/pexels-photo-3865674.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Prenatal massage (90 min)',
        'Gentle facial treatment',
        'Foot and leg therapy',
        'Pregnancy-safe aromatherapy',
        'Relaxation and breathing techniques',
        'Nutritional wellness consultation'
      ],
      highlights: [
        'Certified prenatal massage therapists',
        'Pregnancy-safe products only',
        'Comfortable positioning systems',
        'Specialized techniques for each trimester'
      ],
      benefits: [
        'Reduces pregnancy discomfort',
        'Improves circulation',
        'Promotes better sleep',
        'Emotional well-being support'
      ]
    },
    {
      id: 'anti-aging-facial',
      name: 'Advanced Anti-Aging Facial',
      category: ['individual', 'beauty'],
      duration: '90 minutes',
      price: 8499,
      originalPrice: 10999,
      rating: 4.6,
      description: 'Cutting-edge facial treatment using advanced techniques and premium products for youthful skin.',
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Skin analysis and consultation',
        'Deep cleansing and exfoliation',
        'Collagen-boosting treatment',
        'LED light therapy',
        'Hydrating mask application',
        'Premium skincare products'
      ],
      highlights: [
        'Latest anti-aging technology',
        'Premium international skincare brands',
        'Customized treatment protocols',
        'Visible immediate results'
      ],
      benefits: [
        'Reduces fine lines and wrinkles',
        'Improves skin texture and tone',
        'Boosts collagen production',
        'Long-lasting youthful glow'
      ]
    },
    {
      id: 'detox-wellness',
      name: 'Complete Detox Wellness',
      category: ['wellness'],
      duration: '240 minutes',
      price: 14999,
      originalPrice: 18999,
      rating: 4.8,
      description: 'Comprehensive detoxification program combining multiple therapies for complete body cleansing.',
      image: 'https://images.pexels.com/photos/3865677/pexels-photo-3865677.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Lymphatic drainage massage',
        'Infrared sauna session',
        'Body wrap detox treatment',
        'Colon hydrotherapy',
        'Detox juice cleanse',
        'Wellness coaching session'
      ],
      highlights: [
        'Comprehensive detox program',
        'Medical-grade equipment',
        'Certified wellness practitioners',
        'Personalized detox protocols'
      ],
      benefits: [
        'Eliminates toxins from body',
        'Boosts immune system',
        'Increases energy levels',
        'Improves overall health'
      ]
    },
    {
      id: 'mens-grooming',
      name: 'Executive Men\'s Grooming',
      category: ['individual', 'beauty'],
      duration: '120 minutes',
      price: 7499,
      originalPrice: 9299,
      rating: 4.7,
      description: 'Comprehensive grooming package designed specifically for the modern gentleman.',
      image: 'https://images.pexels.com/photos/3997386/pexels-photo-3997386.jpeg?auto=compress&cs=tinysrgb&w=800',
      includes: [
        'Deep cleansing facial',
        'Professional beard grooming',
        'Scalp massage and treatment',
        'Manicure and pedicure',
        'Back and shoulder massage',
        'Grooming product consultation'
      ],
      highlights: [
        'Male-specific treatments',
        'Professional grooming techniques',
        'Premium men\'s skincare products',
        'Relaxing masculine environment'
      ],
      benefits: [
        'Professional appearance enhancement',
        'Stress relief and relaxation',
        'Improved skin health',
        'Confidence boost'
      ]
    }
  ];

  const wellnessPrograms = [
    {
      name: '7-Day Wellness Retreat',
      duration: '7 days',
      price: '₹49,999',
      description: 'Complete wellness transformation program',
      includes: ['Daily spa treatments', 'Yoga and meditation', 'Nutritional counseling', 'Fitness training'],
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Detox Weekend',
      duration: '3 days',
      price: '₹24,999',
      description: 'Intensive detoxification and cleansing program',
      includes: ['Detox treatments', 'Juice cleanse', 'Colon therapy', 'Wellness coaching'],
      image: 'https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Stress Relief Package',
      duration: '2 days',
      price: '₹18,999',
      description: 'Comprehensive stress management program',
      includes: ['Relaxation therapies', 'Meditation sessions', 'Aromatherapy', 'Mindfulness training'],
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const spaFacilities = [
    {
      icon: Waves,
      title: 'Hydrotherapy Pool',
      description: 'Therapeutic water treatments with mineral-rich pools'
    },
    {
      icon: Sun,
      title: 'Infrared Sauna',
      description: 'Deep tissue healing with advanced infrared technology'
    },
    {
      icon: Moon,
      title: 'Relaxation Lounges',
      description: 'Tranquil spaces for pre and post-treatment relaxation'
    },
    {
      icon: Leaf,
      title: 'Meditation Garden',
      description: 'Peaceful outdoor space for mindfulness and yoga'
    },
    {
      icon: Heart,
      title: 'Couples Suites',
      description: 'Private treatment rooms designed for romantic experiences'
    },
    {
      icon: Sparkles,
      title: 'Beauty Salon',
      description: 'Full-service salon for hair, nails, and beauty treatments'
    }
  ];

  const filteredTreatments = activeCategory === 'all' 
    ? treatments 
    : treatments.filter(treatment => treatment.category.includes(activeCategory));

  return (
    <section id="spa" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ WELLNESS & REJUVENATION
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Spa &
            <span className="block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Wellness
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Rejuvenate your mind, body, and soul with our world-class spa treatments and wellness programs
          </p>
        </div>

        {/* Treatment Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {treatmentCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-pink-50 border border-gray-200'
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTreatments.map((treatment) => (
            <Card key={treatment.id} hover padding="none" className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={treatment.image} 
                  alt={treatment.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{treatment.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {treatment.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{treatment.name}</h3>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="text-right">
                    <div className="text-sm text-gray-500 line-through">₹{treatment.originalPrice.toLocaleString()}</div>
                    <div className="text-2xl font-bold text-pink-600">₹{treatment.price.toLocaleString()}</div>
                  </div>
                  <div className="text-green-600 font-semibold text-sm">
                    Save ₹{(treatment.originalPrice - treatment.price).toLocaleString()}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{treatment.description}</p>

                {/* Treatment Highlights */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {treatment.includes.slice(0, 2).map((include, index) => (
                      <span key={index} className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full text-xs">
                        {include}
                      </span>
                    ))}
                    {treatment.includes.length > 2 && (
                      <span className="text-pink-600 text-xs px-2 py-1">
                        +{treatment.includes.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTreatment(treatment)}
                  className="w-full border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white"
                >
                  View Details & Book
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Spa Facilities */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            World-Class Spa Facilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {spaFacilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <Card key={index} hover className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{facility.title}</h4>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Wellness Programs */}
        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Wellness Programs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {wellnessPrograms.map((program, index) => (
              <Card key={index} hover className="text-center">
                <img 
                  src={program.image} 
                  alt={program.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <h4 className="text-lg font-bold text-gray-800 mb-2">{program.name}</h4>
                <div className="text-2xl font-bold text-purple-600 mb-3">{program.price}</div>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {program.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" size="sm" className="w-full">
                  Book Program
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Spa Booking CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-pink-500 to-purple-500 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Relax & Rejuvenate?</h3>
            <p className="mb-6 opacity-90">
              Book your spa treatments in advance or speak to our wellness experts for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Book Spa Treatments
              </Button>
              <Button
                variant="secondary"
                size="lg"
              >
                Wellness Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Treatment Details Modal */}
      {selectedTreatment && (
        <Modal
          isOpen={!!selectedTreatment}
          onClose={() => setSelectedTreatment(null)}
          title={selectedTreatment.name}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image and Pricing */}
            <div>
              <img 
                src={selectedTreatment.image} 
                alt={selectedTreatment.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="text-center mb-6">
                <div className="text-sm text-gray-500 line-through mb-1">₹{selectedTreatment.originalPrice.toLocaleString()}</div>
                <div className="text-4xl font-bold text-pink-600 mb-1">₹{selectedTreatment.price.toLocaleString()}</div>
                <div className="text-gray-600 mb-2">{selectedTreatment.duration}</div>
                <div className="text-green-600 font-semibold">
                  Save ₹{(selectedTreatment.originalPrice - selectedTreatment.price).toLocaleString()}
                </div>
              </div>
              <div className="flex items-center justify-center mb-4">
                <Star size={16} className="text-yellow-400 fill-current mr-1" />
                <span className="font-semibold">{selectedTreatment.rating}/5 Rating</span>
              </div>
            </div>

            {/* Treatment Details */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedTreatment.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Treatment Includes</h4>
              <ul className="space-y-2 mb-6">
                {selectedTreatment.includes.map((item: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Sparkles size={16} className="text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Benefits</h4>
              <ul className="space-y-2 mb-6">
                {selectedTreatment.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Heart size={16} className="text-purple-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setSelectedTreatment(null)}
              >
                Book This Treatment
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default SpaWellness;