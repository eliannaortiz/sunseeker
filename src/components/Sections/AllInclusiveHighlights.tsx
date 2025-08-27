import React from 'react';
import { Utensils, Waves, Users, Gamepad2, Sparkles, Heart, Baby, Dumbbell } from 'lucide-react';
import Card from '../UI/Card';

const AllInclusiveHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Utensils,
      title: 'All Meals & Snacks',
      description: 'Unlimited dining at 4 restaurants plus 24/7 room service',
      color: 'from-orange-400 to-red-400'
    },
    {
      icon: Waves,
      title: 'Premium Beverages',
      description: 'Top-shelf liquors, cocktails, wines & fresh juices',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      icon: Gamepad2,
      title: 'Activities & Sports',
      description: 'Water sports, tennis, volleyball, yoga & fitness center',
      color: 'from-green-400 to-emerald-400'
    },
    {
      icon: Users,
      title: 'Kids Club',
      description: 'Supervised activities for children aged 4-12 years',
      color: 'from-purple-400 to-pink-400'
    },
    {
      icon: Sparkles,
      title: 'Entertainment',
      description: 'Live shows, DJ nights, cultural performances',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      icon: Heart,
      title: 'Spa Access',
      description: 'Complimentary spa facilities & wellness programs',
      color: 'from-pink-400 to-rose-400'
    },
    {
      icon: Baby,
      title: 'Family Services',
      description: 'Baby sitting, cribs, high chairs & family activities',
      color: 'from-indigo-400 to-purple-400'
    },
    {
      icon: Dumbbell,
      title: 'Fitness & Wellness',
      description: '24/7 gym, yoga classes & personal training',
      color: 'from-teal-400 to-cyan-400'
    }
  ];

  return (
    <section id="all-inclusive" className="py-16 md:py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-sky-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ ALL-INCLUSIVE LUXURY
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Everything You Need,
            <span className="block bg-gradient-to-r from-cyan-500 to-yellow-400 bg-clip-text text-transparent">
              All Included
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            No hidden costs, no surprises. Just pure relaxation and endless fun for the whole family.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <Card key={index} hover className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${highlight.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{highlight.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Save Up to ₹15,000 Per Day
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            Compared to paying separately for meals, drinks, and activities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-cyan-500 mb-2">₹8,000+</div>
              <div className="text-gray-600">Daily F&B Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-500 mb-2">₹5,000+</div>
              <div className="text-gray-600">Activities Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-500 mb-2">₹2,000+</div>
              <div className="text-gray-600">Amenities Value</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllInclusiveHighlights;