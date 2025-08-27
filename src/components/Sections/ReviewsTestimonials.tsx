import React, { useState } from 'react';
import { Star, Quote, ThumbsUp, Calendar, MapPin, Users, Heart, Camera, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const ReviewsTestimonials: React.FC = () => {
  const [selectedReview, setSelectedReview] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const reviewFilters = [
    { id: 'all', label: 'All Reviews', count: 847 },
    { id: 'families', label: 'Families', count: 342 },
    { id: 'couples', label: 'Couples', count: 289 },
    { id: 'solo', label: 'Solo Travelers', count: 156 },
    { id: 'business', label: 'Business', count: 60 }
  ];

  const featuredReviews = [
    {
      id: 1,
      name: 'Priya & Rajesh Sharma',
      location: 'Mumbai, Maharashtra',
      category: 'families',
      rating: 5,
      date: '2024-12-15',
      stayDuration: '5 nights',
      roomType: 'Family Suite',
      title: 'Perfect Family Vacation - Exceeded All Expectations!',
      review: 'Our family of 4 had the most incredible time at Sunseeker! The kids club was amazing - our 8 and 10 year olds made so many friends and loved every activity. The staff went above and beyond, especially Ravi at the kids club who made sure our children felt special every day. The all-inclusive package was fantastic value - we never had to worry about extra costs. The beach is pristine and the water sports were thrilling. Already planning our next visit!',
      images: [
        'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      likes: 234,
      helpful: 189,
      verified: true,
      highlights: ['Kids Club', 'All-Inclusive Value', 'Beach Access', 'Staff Service'],
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 2,
      name: 'Ananya & Vikram Patel',
      location: 'Bangalore, Karnataka',
      category: 'couples',
      rating: 5,
      date: '2024-12-10',
      stayDuration: '3 nights',
      roomType: 'Deluxe Beachfront',
      title: 'Magical Honeymoon Experience',
      review: 'Sunseeker made our honeymoon absolutely magical! The couples spa treatment was divine - we felt so relaxed and connected. The beachside dinner was incredibly romantic with personalized service. Our room had the most stunning ocean view and the private balcony was perfect for morning coffee together. The staff surprised us with champagne and flowers which made us feel so special. Every detail was perfect!',
      images: [
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      likes: 312,
      helpful: 267,
      verified: true,
      highlights: ['Romantic Dining', 'Couples Spa', 'Ocean Views', 'Personalized Service'],
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 3,
      name: 'Arjun Mehta',
      location: 'Delhi, NCR',
      category: 'solo',
      rating: 5,
      date: '2024-12-08',
      stayDuration: '4 nights',
      roomType: 'Standard Ocean View',
      title: 'Solo Traveler Paradise - Made So Many Friends!',
      review: 'As a solo traveler, I was initially nervous, but Sunseeker made me feel welcome from day one. The group activities were fantastic - I joined beach volleyball tournaments and made friends from all over India. The yoga sessions at sunrise were incredibly peaceful and the instructors were amazing. The food was outstanding with so many options. I never felt alone and had the most rejuvenating vacation. Highly recommend for solo travelers!',
      images: [
        'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      likes: 156,
      helpful: 134,
      verified: true,
      highlights: ['Solo Friendly', 'Group Activities', 'Yoga Classes', 'Social Atmosphere'],
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 4,
      name: 'Kavitha & Family',
      location: 'Chennai, Tamil Nadu',
      category: 'families',
      rating: 5,
      date: '2024-12-05',
      stayDuration: '6 nights',
      roomType: 'Private Beach Villa',
      title: 'Luxury Family Experience - Worth Every Rupee!',
      review: 'We splurged on the private villa for our family reunion and it was absolutely worth it! The villa was spacious enough for our extended family of 8. The private beach section was incredible - the kids could play safely while adults relaxed. The butler service was exceptional, anticipating our every need. The cultural shows were educational and entertaining. The Goan spice spa treatment was unique and refreshing. This will be our annual family tradition!',
      images: [
        'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      likes: 289,
      helpful: 245,
      verified: true,
      highlights: ['Private Villa', 'Butler Service', 'Family Reunion', 'Cultural Shows'],
      avatar: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 5,
      name: 'Rohit Gupta',
      location: 'Pune, Maharashtra',
      category: 'business',
      rating: 4,
      date: '2024-12-03',
      stayDuration: '2 nights',
      roomType: 'Deluxe Beachfront',
      title: 'Perfect Business Retreat Location',
      review: 'Brought my team here for a business retreat and it was perfect! The conference facilities were modern and well-equipped. The team building activities on the beach were fantastic for bonding. The WiFi was excellent throughout the resort. The spa treatments helped everyone unwind after intense sessions. The dining options impressed our international clients. Great balance of work and relaxation. Will definitely return for future corporate events.',
      images: [
        'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      likes: 98,
      helpful: 87,
      verified: true,
      highlights: ['Business Facilities', 'Team Building', 'WiFi Quality', 'Corporate Events'],
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      id: 6,
      name: 'Meera & Suresh Kumar',
      location: 'Hyderabad, Telangana',
      category: 'couples',
      rating: 5,
      date: '2024-11-28',
      stayDuration: '4 nights',
      roomType: 'Standard Ocean View',
      title: '25th Anniversary Celebration Made Special',
      review: 'Celebrated our 25th wedding anniversary at Sunseeker and it was magical! The staff surprised us with room decorations and a special anniversary cake. The sunset dinner on the beach was incredibly romantic. The Ayurvedic couples massage was so relaxing and rejuvenating. We loved the cultural performances - felt like experiencing authentic Goa. The photography service captured beautiful memories. Thank you for making our milestone celebration unforgettable!',
      images: [
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=400'
      ],
      likes: 267,
      helpful: 234,
      verified: true,
      highlights: ['Anniversary Special', 'Romantic Dining', 'Couples Spa', 'Photography'],
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  const videoTestimonials = [
    {
      id: 1,
      name: 'The Agarwal Family',
      location: 'Mumbai',
      thumbnail: 'https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '2:34',
      title: 'Our Amazing Family Vacation',
      description: 'Watch the Agarwal family share their incredible experience at Sunseeker Resort'
    },
    {
      id: 2,
      name: 'Newlyweds Priya & Arjun',
      location: 'Bangalore',
      thumbnail: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '1:45',
      title: 'Perfect Honeymoon Destination',
      description: 'A romantic testimonial from our honeymooning couple'
    },
    {
      id: 3,
      name: 'Corporate Team Retreat',
      location: 'Delhi',
      thumbnail: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400',
      duration: '3:12',
      title: 'Best Business Retreat Ever',
      description: 'How Sunseeker transformed their corporate team building experience'
    }
  ];

  const overallStats = {
    averageRating: 4.9,
    totalReviews: 847,
    ratingDistribution: [
      { stars: 5, count: 678, percentage: 80 },
      { stars: 4, count: 127, percentage: 15 },
      { stars: 3, count: 34, percentage: 4 },
      { stars: 2, count: 6, percentage: 1 },
      { stars: 1, count: 2, percentage: 0 }
    ],
    highlights: [
      { category: 'Staff Service', rating: 4.9, mentions: 756 },
      { category: 'Food Quality', rating: 4.8, mentions: 689 },
      { category: 'Beach Access', rating: 4.9, mentions: 634 },
      { category: 'Kids Activities', rating: 4.8, mentions: 445 },
      { category: 'Value for Money', rating: 4.7, mentions: 567 },
      { category: 'Room Quality', rating: 4.8, mentions: 623 }
    ]
  };

  const filteredReviews = activeFilter === 'all' 
    ? featuredReviews 
    : featuredReviews.filter(review => review.category === activeFilter);

  const navigateTestimonial = (direction: 'prev' | 'next') => {
    const maxIndex = videoTestimonials.length - 1;
    if (direction === 'next') {
      setCurrentTestimonialIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    } else {
      setCurrentTestimonialIndex(prev => prev <= 0 ? maxIndex : prev - 1);
    }
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            ⭐ GUEST EXPERIENCES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Reviews &
            <span className="block bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Testimonials
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why families and couples choose Sunseeker Resort for their perfect Goan getaway
          </p>
        </div>

        {/* Overall Rating Stats */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rating Summary */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="text-6xl font-bold text-yellow-500 mr-4">{overallStats.averageRating}</div>
                  <div>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={24} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <div className="text-gray-600">Based on {overallStats.totalReviews.toLocaleString()} reviews</div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-800 mb-2">Exceptional Rating</div>
                <div className="text-gray-600">96% of guests rate us 4 stars or higher</div>
              </div>

              {/* Rating Distribution */}
              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Rating Breakdown</h4>
                {overallStats.ratingDistribution.map((rating) => (
                  <div key={rating.stars} className="flex items-center mb-2">
                    <div className="flex items-center w-16">
                      <span className="text-sm font-medium mr-2">{rating.stars}</span>
                      <Star size={14} className="text-yellow-400 fill-current" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-yellow-400 to-orange-400 h-2 rounded-full"
                          style={{ width: `${rating.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 w-12">{rating.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Category Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            What Guests Love Most
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {overallStats.highlights.map((highlight, index) => (
              <Card key={index} hover className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Star size={28} className="text-white" />
                </div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">{highlight.category}</h4>
                <div className="flex items-center justify-center mb-2">
                  <div className="flex items-center mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className={`${i < Math.floor(highlight.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-800">{highlight.rating}</span>
                </div>
                <p className="text-sm text-gray-600">{highlight.mentions} mentions</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Review Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {reviewFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-50 border border-gray-200'
              }`}
            >
              <span>{filter.label}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full text-xs">{filter.count}</span>
            </button>
          ))}
        </div>

        {/* Featured Reviews */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredReviews.map((review) => (
            <Card key={review.id} hover padding="none" className="overflow-hidden">
              <div className="p-6">
                {/* Review Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={review.avatar} 
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">{review.name}</h4>
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin size={12} className="mr-1" />
                        {review.location}
                        {review.verified && (
                          <span className="ml-2 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                            Verified Stay
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className={`${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <div className="text-xs text-gray-500">{review.date}</div>
                  </div>
                </div>

                {/* Stay Details */}
                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {review.stayDuration}
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {review.roomType}
                  </div>
                </div>

                {/* Review Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-3">{review.title}</h3>

                {/* Review Text */}
                <p className="text-gray-600 mb-4 leading-relaxed">{review.review}</p>

                {/* Review Images */}
                {review.images && review.images.length > 0 && (
                  <div className="flex space-x-2 mb-4">
                    {review.images.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`Review photo ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setSelectedReview(review)}
                      />
                    ))}
                    {review.images.length > 2 && (
                      <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
                        <Camera size={20} className="text-gray-500" />
                      </div>
                    )}
                  </div>
                )}

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.highlights.map((highlight, index) => (
                    <span key={index} className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs">
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Review Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors">
                      <ThumbsUp size={16} />
                      <span className="text-sm">Helpful ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                      <Heart size={16} />
                      <span className="text-sm">{review.likes}</span>
                    </button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedReview(review)}
                    className="border-yellow-400 text-yellow-600 hover:bg-yellow-400 hover:text-white"
                  >
                    Read Full Review
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Video Testimonials
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <Card hover padding="none" className="overflow-hidden">
              <div className="relative">
                <img 
                  src={videoTestimonials[currentTestimonialIndex].thumbnail} 
                  alt={videoTestimonials[currentTestimonialIndex].title}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-colors group">
                    <Play size={32} className="text-yellow-600 ml-1 group-hover:scale-110 transition-transform" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-xl font-bold mb-1">{videoTestimonials[currentTestimonialIndex].title}</h4>
                  <p className="text-sm opacity-90 mb-2">{videoTestimonials[currentTestimonialIndex].description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-semibold">{videoTestimonials[currentTestimonialIndex].name}</span>
                      <span className="text-sm opacity-75 ml-2">{videoTestimonials[currentTestimonialIndex].location}</span>
                    </div>
                    <span className="bg-black/60 px-2 py-1 rounded text-sm">{videoTestimonials[currentTestimonialIndex].duration}</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Navigation Buttons */}
            <button
              onClick={() => navigateTestimonial('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronLeft size={24} className="text-gray-800" />
            </button>
            <button
              onClick={() => navigateTestimonial('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              <ChevronRight size={24} className="text-gray-800" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {videoTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonialIndex ? 'bg-yellow-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Write Review CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <Quote size={48} className="mx-auto mb-4 opacity-80" />
            <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
            <p className="mb-6 opacity-90">
              Help future guests by sharing your Sunseeker Resort experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-orange-600"
              >
                Write a Review
              </Button>
              <Button
                variant="secondary"
                size="lg"
              >
                Upload Photos
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Review Detail Modal */}
      {selectedReview && (
        <Modal
          isOpen={!!selectedReview}
          onClose={() => setSelectedReview(null)}
          title={selectedReview.title}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guest Info and Images */}
            <div>
              <div className="flex items-center mb-6">
                <img 
                  src={selectedReview.avatar} 
                  alt={selectedReview.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-xl font-bold text-gray-800">{selectedReview.name}</h4>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin size={14} className="mr-1" />
                    {selectedReview.location}
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className={`${i < selectedReview.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{selectedReview.date}</span>
                  </div>
                </div>
              </div>

              {/* Review Images */}
              {selectedReview.images && (
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {selectedReview.images.map((image: string, index: number) => (
                    <img 
                      key={index}
                      src={image} 
                      alt={`Review photo ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Review Content */}
            <div>
              <div className="mb-6">
                <div className="flex items-center text-sm text-gray-600 mb-4 space-x-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {selectedReview.stayDuration}
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {selectedReview.roomType}
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{selectedReview.review}</p>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-800 mb-3">Highlights</h5>
                <div className="flex flex-wrap gap-2">
                  {selectedReview.highlights.map((highlight: string, index: number) => (
                    <span key={index} className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-full text-sm">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-yellow-600 transition-colors">
                    <ThumbsUp size={16} />
                    <span className="text-sm">Helpful ({selectedReview.helpful})</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-red-600 transition-colors">
                    <Heart size={16} />
                    <span className="text-sm">{selectedReview.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default ReviewsTestimonials;