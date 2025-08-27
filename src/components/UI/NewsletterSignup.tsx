import React, { useState } from 'react';
import { Mail, Gift, Check, Star, Bell, Sparkles } from 'lucide-react';
import Button from './Button';
import Card from './Card';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Get first access to special deals and packages'
    },
    {
      icon: Bell,
      title: 'Early Bird Alerts',
      description: 'Be notified about seasonal promotions before anyone else'
    },
    {
      icon: Sparkles,
      title: 'VIP Perks',
      description: 'Receive member-only benefits and room upgrades'
    },
    {
      icon: Star,
      title: 'Insider Tips',
      description: 'Get local recommendations and resort updates'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <Card className="max-w-md mx-auto text-center bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">Welcome to the Family! 🎉</h3>
        <p className="opacity-90 mb-4">
          You're now subscribed to exclusive Sunseeker offers and updates.
        </p>
        <div className="text-sm opacity-80">
          Check your email for a special welcome offer!
        </div>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Benefits */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Join Our VIP List
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Be the first to know about exclusive offers, seasonal packages, and special events at Sunseeker Resort.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Signup Form */}
        <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail size={28} className="text-white" />
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">Get Exclusive Offers</h4>
            <p className="text-gray-600">Subscribe and save up to 25% on your next stay</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors"
              />
            </div>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </div>
              ) : (
                'Subscribe for Exclusive Offers'
              )}
            </Button>
            
            <div className="text-xs text-gray-500 text-center">
              By subscribing, you agree to receive promotional emails from Sunseeker Resort. 
              You can unsubscribe at any time.
            </div>
          </form>

          {/* Social Proof */}
          <div className="mt-6 pt-6 border-t border-cyan-200">
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <div className="flex -space-x-1">
                  <div className="w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full border-2 border-white"></div>
                </div>
                <span>12,000+ subscribers</span>
              </div>
              <div className="flex items-center space-x-1">
                <Star size={14} className="text-yellow-400 fill-current" />
                <span>4.9/5 rating</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewsletterSignup;