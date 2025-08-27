import React, { useState } from 'react';
import { Camera, Eye, Heart, Share2, Download, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const PhotoGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryCategories = [
    { id: 'all', label: 'All Photos', icon: Camera },
    { id: 'property', label: 'Property', icon: Eye },
    { id: 'rooms', label: 'Rooms', icon: Heart },
    { id: 'dining', label: 'Dining', icon: Share2 },
    { id: 'activities', label: 'Activities', icon: Play },
    { id: 'guests', label: 'Guest Moments', icon: Heart }
  ];

  const galleryImages = [
    // Property Overview
    {
      id: 1,
      category: 'property',
      title: 'Resort Aerial View',
      description: 'Stunning bird\'s eye view of our beachfront paradise',
      image: 'https://images.pexels.com/photos/1449824/pexels-photo-1449824.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 342,
      featured: true
    },
    {
      id: 2,
      category: 'property',
      title: 'Private Beach Access',
      description: '500 meters of pristine Anjuna Beach exclusively for guests',
      image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 289
    },
    {
      id: 3,
      category: 'property',
      title: 'Infinity Pool Deck',
      description: 'Oceanfront infinity pool with panoramic views',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 456
    },
    {
      id: 4,
      category: 'property',
      title: 'Tropical Gardens',
      description: 'Lush landscaped gardens with native Goan flora',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 198
    },
    
    // Rooms & Suites
    {
      id: 5,
      category: 'rooms',
      title: 'Ocean View Suite',
      description: 'Luxurious suite with panoramic ocean views',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 234,
      featured: true
    },
    {
      id: 6,
      category: 'rooms',
      title: 'Private Villa Bedroom',
      description: 'Master bedroom in our exclusive beach villa',
      image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 187
    },
    {
      id: 7,
      category: 'rooms',
      title: 'Beachfront Balcony',
      description: 'Private balcony with direct beach access',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 312
    },
    {
      id: 8,
      category: 'rooms',
      title: 'Luxury Bathroom',
      description: 'Marble bathroom with rain shower and ocean views',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 156
    },

    // Dining Experiences
    {
      id: 9,
      category: 'dining',
      title: 'Beachside Dining',
      description: 'Romantic dinner with toes in the sand',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 423,
      featured: true
    },
    {
      id: 10,
      category: 'dining',
      title: 'Rooftop Restaurant',
      description: 'Fine dining with panoramic sunset views',
      image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 298
    },
    {
      id: 11,
      category: 'dining',
      title: 'Fresh Seafood Grill',
      description: 'Daily catch grilled to perfection',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 267
    },
    {
      id: 12,
      category: 'dining',
      title: 'Poolside Café',
      description: 'Casual dining by the infinity pool',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 189
    },

    // Activities & Entertainment
    {
      id: 13,
      category: 'activities',
      title: 'Water Sports Adventure',
      description: 'Jet skiing and parasailing with professional instructors',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 378
    },
    {
      id: 14,
      category: 'activities',
      title: 'Beach Volleyball',
      description: 'Daily tournaments on our professional sand court',
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 245
    },
    {
      id: 15,
      category: 'activities',
      title: 'Cultural Performance',
      description: 'Authentic Goan folk dance and music shows',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 334,
      featured: true
    },
    {
      id: 16,
      category: 'activities',
      title: 'Kids Club Fun',
      description: 'Supervised activities and games for children',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 212
    },
    {
      id: 17,
      category: 'activities',
      title: 'Sunset Yoga',
      description: 'Beach yoga sessions with certified instructors',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 289
    },

    // Guest Moments
    {
      id: 18,
      category: 'guests',
      title: 'Family Beach Day',
      description: 'Creating memories on our private beach',
      image: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 456
    },
    {
      id: 19,
      category: 'guests',
      title: 'Romantic Sunset',
      description: 'Couples enjoying magical Goan sunsets',
      image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 523,
      featured: true
    },
    {
      id: 20,
      category: 'guests',
      title: 'Celebration Moments',
      description: 'Special occasions made unforgettable',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
      likes: 367
    }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const featuredImages = galleryImages.filter(img => img.featured);

  const openLightbox = (image: any, index: number) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const currentImages = filteredImages;
    const maxIndex = currentImages.length - 1;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = currentImageIndex >= maxIndex ? 0 : currentImageIndex + 1;
    } else {
      newIndex = currentImageIndex <= 0 ? maxIndex : currentImageIndex - 1;
    }
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(currentImages[newIndex]);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            📸 VISUAL JOURNEY
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Photo
            <span className="block bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the beauty of Sunseeker Resort through the eyes of our guests and photographers
          </p>
        </div>

        {/* Featured Images Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Featured Highlights</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredImages.map((image, index) => (
              <Card key={image.id} hover padding="none" className="overflow-hidden group cursor-pointer">
                <div 
                  className="relative h-64 md:h-80"
                  onClick={() => openLightbox(image, index)}
                >
                  <img 
                    src={image.image} 
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="text-lg font-bold mb-1">{image.title}</h4>
                      <p className="text-sm opacity-90">{image.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                    <Heart size={14} className="text-red-500" />
                    <span className="text-sm font-semibold">{image.likes}</span>
                  </div>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-3 py-1 rounded-full text-xs font-bold">
                    FEATURED
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Main Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              hover 
              padding="none" 
              className="overflow-hidden group cursor-pointer aspect-square"
            >
              <div 
                className="relative h-full"
                onClick={() => openLightbox(image, index)}
              >
                <img 
                  src={image.image} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye size={32} className="mx-auto mb-2" />
                    <p className="text-sm font-semibold">View Photo</p>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="text-sm font-bold truncate">{image.title}</h4>
                </div>
                <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                  <Heart size={12} className="text-red-400" />
                  <span className="text-xs text-white font-semibold">{image.likes}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Instagram Integration CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white">
            <div className="flex items-center justify-center mb-4">
              <Camera size={32} className="mr-3" />
              <h3 className="text-2xl font-bold">Share Your Moments</h3>
            </div>
            <p className="mb-6 opacity-90">
              Tag us @sunseekerresort and use #SunseekerMoments to be featured in our gallery
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-purple-600"
              >
                Follow @SunseekerResort
              </Button>
              <Button
                variant="secondary"
                size="lg"
              >
                Upload Your Photos
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white rounded-b-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-1">{selectedImage.title}</h3>
                  <p className="text-sm opacity-90">{selectedImage.description}</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart size={16} className="text-red-400" />
                    <span className="text-sm font-semibold">{selectedImage.likes}</span>
                  </div>
                  <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <Share2 size={16} />
                  </button>
                  <button className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors">
                    <Download size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
              {currentImageIndex + 1} / {filteredImages.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;