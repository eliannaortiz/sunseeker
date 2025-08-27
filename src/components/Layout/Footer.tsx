import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-cyan-500 to-sky-500 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-lg mb-6 opacity-90">Get exclusive offers and updates delivered to your inbox</p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Hotel Info */}
          <div>
            <h4 className="text-2xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-yellow-400 bg-clip-text text-transparent">
                Sunseeker
              </span>
            </h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your ultimate beach paradise in Goa. Experience luxury, adventure, and relaxation 
              in our all-inclusive resort designed for families and couples.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-xl font-semibold mb-6 text-cyan-400">Contact Us</h5>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Sunseeker Beach Resort</p>
                  <p className="text-gray-300">Anjuna Beach Road, Anjuna</p>
                  <p className="text-gray-300">North Goa, Goa 403509</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-cyan-400 flex-shrink-0" />
                <p className="text-gray-300">+91 83209 12345</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-cyan-400 flex-shrink-0" />
                <p className="text-gray-300">stay@sunseekerresort.com</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-6 text-cyan-400">Quick Links</h5>
            <ul className="space-y-3">
              <li><a href="#rooms" className="text-gray-300 hover:text-white transition-colors">Rooms & Suites</a></li>
              <li><a href="#dining" className="text-gray-300 hover:text-white transition-colors">Dining</a></li>
              <li><a href="#activities" className="text-gray-300 hover:text-white transition-colors">Activities</a></li>
              <li><a href="#spa" className="text-gray-300 hover:text-white transition-colors">Spa & Wellness</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#offers" className="text-gray-300 hover:text-white transition-colors">Special Offers</a></li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h5 className="text-xl font-semibold mb-6 text-cyan-400">Policies</h5>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cancellation Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Sunseeker Beach Resort. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span>Made with ❤️ in India</span>
            <span className="hidden md:inline">|</span>
            <span>Your Paradise Awaits</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;