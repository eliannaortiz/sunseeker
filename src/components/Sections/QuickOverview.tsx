import React from 'react';
import { MapPin, Star, Award, Users, Calendar, Wifi } from 'lucide-react';
import Card from '../UI/Card';

const QuickOverview: React.FC = () => {
  const stats = [
    { number: '4.9', label: 'Guest Rating', icon: Star, suffix: '/5' },
    { number: '150+', label: 'Luxury Rooms', icon: Users, suffix: '' },
    { number: '500m', label: 'Private Beach', icon: MapPin, suffix: '' },
    { number: '24/7', label: 'Concierge', icon: Calendar, suffix: '' }
  ];

  const awards = [
    {
      title: 'TripAdvisor Travelers\' Choice',
      year: '2024',
      description: 'Top 10 Beach Resorts in Goa'
    },
    {
      title: 'World Travel Awards',
      year: '2024',
      description: 'India\'s Leading Beach Resort'
    },
    {
      title: 'Booking.com Guest Review',
      year: '2024',
      description: '9.2/10 Exceptional Rating'
    }
  ];

  const quickFacts = [
    { icon: MapPin, text: '2 minutes walk to Anjuna Beach' },
    { icon: Wifi, text: 'Complimentary high-speed WiFi' },
    { icon: Users, text: 'Family-friendly with kids club' },
    { icon: Award, text: 'Award-winning hospitality' }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-sky-500 rounded-full flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                  {stat.number}<span className="text-lg text-cyan-500">{stat.suffix}</span>
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - About */}
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-orange-400 to-red-400 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              🏆 AWARD WINNING RESORT
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Where Luxury Meets
              <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                Adventure
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nestled on the pristine shores of Anjuna Beach, Sunseeker Resort offers an unparalleled 
              all-inclusive experience. From world-class dining to thrilling water sports, every moment 
              is designed to create lasting memories for families and couples alike.
            </p>

            {/* Quick Facts */}
            <div className="space-y-4 mb-8">
              {quickFacts.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <div key={index} className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center mr-4">
                      <Icon size={16} className="text-white" />
                    </div>
                    <span className="text-gray-700">{fact.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Awards & Recognition */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center lg:text-left">
              Awards & Recognition
            </h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <Card key={index} className="flex items-start space-x-4 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">{award.title}</h4>
                    <p className="text-sm text-gray-600 mb-1">{award.description}</p>
                    <span className="text-xs text-cyan-600 font-semibold">{award.year}</span>
                  </div>
                </Card>
              ))}
            </div>

            {/* Location Highlight */}
            <Card className="mt-8 bg-gradient-to-r from-cyan-500 to-sky-500 text-white">
              <div className="flex items-center mb-4">
                <MapPin size={24} className="mr-3" />
                <h4 className="text-xl font-bold">Prime Location</h4>
              </div>
              <p className="mb-4">
                Located in the heart of North Goa, just minutes from famous beaches, 
                vibrant markets, and historic attractions.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>• Anjuna Flea Market: 5 min</div>
                <div>• Chapora Fort: 15 min</div>
                <div>• Baga Beach: 20 min</div>
                <div>• Goa Airport: 45 min</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickOverview;