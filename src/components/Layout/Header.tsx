import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import Button from '../UI/Button';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const sectionIds = ['home', 'all-inclusive', 'rooms', 'dining', 'activities', 'spa', 'gallery', 'reviews', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'Activities', href: '#activities' },
    { label: 'All-Inclusive', href: '#all-inclusive' },
    { label: 'Spa', href: '#spa' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const headerHeight = 80; // Approximate header height
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    
    setIsMenuOpen(false);
  };
  return (
    <>
      {/* Top contact bar - hidden on mobile */}
      <div className="hidden md:block bg-gradient-to-r from-cyan-500 to-sky-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 83209 12345</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>stay@sunseekerresort.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} />
            <span>Anjuna Beach, Goa</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/10 backdrop-blur-sm'
      } ${isScrolled ? 'md:top-0' : 'md:top-10'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold">
                <span className={`bg-gradient-to-r from-cyan-500 to-yellow-400 bg-clip-text text-transparent ${
                  isScrolled ? '' : 'text-white'
                }`}>
                  Sunseeker
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  href={item.href}
                  className={`font-medium transition-colors hover:text-yellow-400 ${
                    activeSection === item.href.substring(1) 
                      ? 'text-yellow-400' 
                      : isScrolled ? 'text-gray-800' : 'text-white'
                  }`}
                  role="menuitem"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <Button
                  size="sm"
                  onClick={() => document.getElementById('booking')?.scrollIntoView()}
                  aria-label="Book your stay at Sunseeker Resort"
                >
                  Book Now
                </Button>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/20'
                }`}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t" role="dialog" aria-label="Mobile navigation">
            <nav className="container mx-auto px-4 py-6" role="navigation" aria-label="Mobile navigation">
              <div className="flex flex-col space-y-4">
                {navigationItems.map((item) => (
                  <a
                    key={item.label}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    href={item.href}
                    className={`font-medium py-2 border-b border-gray-100 transition-colors hover:text-cyan-500 cursor-pointer ${
                      activeSection === item.href.substring(1) 
                        ? 'text-cyan-500 font-semibold' 
                        : 'text-gray-800'
                    }`}
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4">
                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={() => {
                      setIsMenuOpen(false);
                      document.getElementById('booking')?.scrollIntoView();
                    }}
                    aria-label="Book your stay at Sunseeker Resort"
                  >
                    Book Your Stay
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;