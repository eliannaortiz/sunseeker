import React, { useState } from 'react';
import { Waves, Users, Heart, Gamepad2, Music, Camera, Clock, MapPin, Star, Calendar } from 'lucide-react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

const ActivitiesEntertainment: React.FC = () => {
  const [selectedActivity, setSelectedActivity] = useState<any>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const activityCategories = [
    { id: 'all', label: 'All Activities', icon: Gamepad2 },
    { id: 'families', label: 'For Families', icon: Users },
    { id: 'couples', label: 'For Couples', icon: Heart },
    { id: 'adventure', label: 'Adventure', icon: Waves },
    { id: 'entertainment', label: 'Entertainment', icon: Music }
  ];

  const activities = [
    {
      id: 'water-sports',
      name: 'Water Sports Center',
      category: ['families', 'adventure'],
      duration: '2-4 hours',
      difficulty: 'All Levels',
      price: 'Included',
      rating: 4.8,
      description: 'Thrilling water adventures with professional instructors and top-quality equipment.',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Jet Skiing', 'Parasailing', 'Banana Boat', 'Kayaking', 'Windsurfing', 'Snorkeling'],
      highlights: [
        'Professional PADI certified instructors',
        'All safety equipment provided',
        'Suitable for beginners to experts',
        'Complimentary underwater photography'
      ],
      schedule: [
        { time: '9:00 AM - 12:00 PM', activity: 'Morning Water Sports' },
        { time: '2:00 PM - 5:00 PM', activity: 'Afternoon Adventures' },
        { time: '6:00 PM - 7:00 PM', activity: 'Sunset Sailing' }
      ]
    },
    {
      id: 'kids-club',
      name: 'Sunseeker Kids Club',
      category: ['families'],
      duration: 'All Day',
      difficulty: 'Ages 4-12',
      price: 'Included',
      rating: 4.9,
      description: 'Supervised fun activities designed to create magical memories for children.',
      image: 'https://images.pexels.com/photos/1320684/pexels-photo-1320684.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Arts & Crafts', 'Beach Games', 'Treasure Hunts', 'Mini Disco', 'Swimming Lessons', 'Nature Walks'],
      highlights: [
        'Qualified childcare professionals',
        'Age-appropriate activities and games',
        'Safe and secure play areas',
        'Healthy snacks and refreshments included'
      ],
      schedule: [
        { time: '9:00 AM - 12:00 PM', activity: 'Morning Adventures' },
        { time: '12:00 PM - 1:00 PM', activity: 'Lunch & Rest Time' },
        { time: '2:00 PM - 5:00 PM', activity: 'Afternoon Fun' },
        { time: '7:00 PM - 8:30 PM', activity: 'Mini Disco Party' }
      ]
    },
    {
      id: 'couples-spa',
      name: 'Couples Spa Retreat',
      category: ['couples'],
      duration: '3 hours',
      difficulty: 'Relaxation',
      price: '₹8,999',
      rating: 4.7,
      description: 'Intimate spa experience designed for couples seeking relaxation and connection.',
      image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Couples Massage', 'Private Jacuzzi', 'Aromatherapy', 'Champagne Service', 'Sunset Meditation', 'Beach Picnic'],
      highlights: [
        'Private treatment rooms with ocean views',
        'Organic and locally sourced spa products',
        'Complimentary champagne and tropical fruits',
        'Professional couples therapy techniques'
      ],
      schedule: [
        { time: '10:00 AM - 1:00 PM', activity: 'Morning Spa Session' },
        { time: '3:00 PM - 6:00 PM', activity: 'Afternoon Retreat' },
        { time: '6:30 PM - 8:00 PM', activity: 'Sunset Beach Experience' }
      ]
    },
    {
      id: 'beach-volleyball',
      name: 'Beach Sports Arena',
      category: ['families', 'adventure'],
      duration: '1-2 hours',
      difficulty: 'All Levels',
      price: 'Included',
      rating: 4.6,
      description: 'Competitive and fun beach sports with tournaments and friendly matches.',
      image: 'https://images.pexels.com/photos/1263349/pexels-photo-1263349.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Beach Volleyball', 'Football', 'Frisbee', 'Beach Tennis', 'Tug of War', 'Sand Castle Building'],
      highlights: [
        'Professional sand courts',
        'Equipment provided for all sports',
        'Daily tournaments with prizes',
        'Family-friendly competitions'
      ],
      schedule: [
        { time: '8:00 AM - 10:00 AM', activity: 'Morning Matches' },
        { time: '4:00 PM - 6:00 PM', activity: 'Afternoon Tournaments' },
        { time: '7:00 PM - 8:00 PM', activity: 'Family Fun Time' }
      ]
    },
    {
      id: 'cultural-shows',
      name: 'Cultural Entertainment',
      category: ['entertainment', 'families'],
      duration: '1.5 hours',
      difficulty: 'All Ages',
      price: 'Included',
      rating: 4.8,
      description: 'Authentic Goan culture through music, dance, and traditional performances.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Folk Dance', 'Live Music', 'Fire Shows', 'Magic Shows', 'Cultural Workshops', 'Local Cuisine Tasting'],
      highlights: [
        'Authentic Goan folk performances',
        'Interactive cultural workshops',
        'Professional local artists',
        'Traditional costume photo opportunities'
      ],
      schedule: [
        { time: '7:00 PM - 8:30 PM', activity: 'Evening Cultural Show' },
        { time: '9:00 PM - 10:30 PM', activity: 'Fire Show & Live Music' },
        { time: '10:30 PM - 12:00 AM', activity: 'DJ Night & Dancing' }
      ]
    },
    {
      id: 'adventure-excursions',
      name: 'Adventure Excursions',
      category: ['adventure', 'couples'],
      duration: 'Full Day',
      difficulty: 'Moderate',
      price: '₹4,999',
      rating: 4.7,
      description: 'Explore Goa\'s natural beauty with guided adventure tours and excursions.',
      image: 'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Jungle Trekking', 'Waterfall Visits', 'Spice Plantation Tours', 'Dolphin Watching', 'Scuba Diving', 'ATV Rides'],
      highlights: [
        'Professional local guides',
        'Transportation and lunch included',
        'Small group sizes for personalized experience',
        'Photography service available'
      ],
      schedule: [
        { time: '8:00 AM - 12:00 PM', activity: 'Morning Adventure' },
        { time: '12:00 PM - 1:00 PM', activity: 'Traditional Goan Lunch' },
        { time: '2:00 PM - 6:00 PM', activity: 'Afternoon Exploration' }
      ]
    },
    {
      id: 'fitness-wellness',
      name: 'Fitness & Wellness',
      category: ['couples', 'families'],
      duration: '1 hour',
      difficulty: 'All Levels',
      price: 'Included',
      rating: 4.5,
      description: 'Maintain your wellness routine with our comprehensive fitness and wellness programs.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Beach Yoga', 'Aqua Aerobics', 'Pilates', 'Meditation', 'Personal Training', 'Zumba'],
      highlights: [
        'Certified fitness instructors',
        'Beachfront yoga pavilion',
        'State-of-the-art equipment',
        'Personalized wellness consultations'
      ],
      schedule: [
        { time: '6:30 AM - 7:30 AM', activity: 'Sunrise Yoga' },
        { time: '9:00 AM - 10:00 AM', activity: 'Aqua Aerobics' },
        { time: '5:00 PM - 6:00 PM', activity: 'Sunset Meditation' },
        { time: '7:00 PM - 8:00 PM', activity: 'Evening Zumba' }
      ]
    },
    {
      id: 'teen-zone',
      name: 'Teen Activity Zone',
      category: ['families'],
      duration: '3-4 hours',
      difficulty: 'Ages 13-17',
      price: 'Included',
      rating: 4.6,
      description: 'Exciting activities designed specifically for teenagers to have fun and make friends.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      activities: ['Gaming Lounge', 'Beach Sports', 'DJ Workshops', 'Photography Classes', 'Social Media Challenges', 'Movie Nights'],
      highlights: [
        'Dedicated teen-only spaces',
        'Latest gaming consoles and VR',
        'Social media content creation workshops',
        'Supervised but independent activities'
      ],
      schedule: [
        { time: '10:00 AM - 1:00 PM', activity: 'Morning Gaming & Sports' },
        { time: '3:00 PM - 6:00 PM', activity: 'Creative Workshops' },
        { time: '8:00 PM - 10:00 PM', activity: 'Teen Social Hour' }
      ]
    }
  ];

  const entertainmentSchedule = [
    { day: 'Monday', morning: 'Beach Yoga', afternoon: 'Water Sports', evening: 'Cultural Show' },
    { day: 'Tuesday', morning: 'Aqua Aerobics', afternoon: 'Kids Club', evening: 'Live Music' },
    { day: 'Wednesday', morning: 'Beach Volleyball', afternoon: 'Spa Treatments', evening: 'Fire Show' },
    { day: 'Thursday', morning: 'Adventure Tours', afternoon: 'Teen Activities', evening: 'DJ Night' },
    { day: 'Friday', morning: 'Fitness Classes', afternoon: 'Family Games', evening: 'Cultural Dance' },
    { day: 'Saturday', morning: 'Water Sports', afternoon: 'Couples Activities', evening: 'Beach Party' },
    { day: 'Sunday', morning: 'Relaxation', afternoon: 'Photography Walk', evening: 'Farewell Show' }
  ];

  const filteredActivities = activeCategory === 'all' 
    ? activities 
    : activities.filter(activity => activity.category.includes(activeCategory));

  return (
    <section id="activities" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            🎯 ENDLESS ENTERTAINMENT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Activities &
            <span className="block bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Entertainment
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From thrilling water sports to cultural shows, create unforgettable memories with activities designed for every age and interest
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {activityCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-green-50 border border-gray-200'
                }`}
              >
                <Icon size={18} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredActivities.map((activity) => (
            <Card key={activity.id} hover padding="none" className="overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={activity.image} 
                  alt={activity.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star size={14} className="text-yellow-400 fill-current" />
                  <span className="text-sm font-semibold">{activity.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {activity.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{activity.name}</h3>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Clock size={14} className="mr-1" />
                    {activity.duration}
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {activity.difficulty}
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{activity.description}</p>

                {/* Activity Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {activity.activities.slice(0, 3).map((act, index) => (
                    <span key={index} className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">
                      {act}
                    </span>
                  ))}
                  {activity.activities.length > 3 && (
                    <span className="text-green-600 text-xs px-2 py-1">
                      +{activity.activities.length - 3} more
                    </span>
                  )}
                </div>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedActivity(activity)}
                  className="w-full border-green-400 text-green-600 hover:bg-green-400 hover:text-white"
                >
                  View Details & Schedule
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Weekly Entertainment Schedule */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
            Weekly Entertainment Schedule
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-green-200">
                  <th className="text-left py-4 px-2 font-semibold text-gray-800">Day</th>
                  <th className="text-left py-4 px-2 font-semibold text-gray-800">Morning</th>
                  <th className="text-left py-4 px-2 font-semibold text-gray-800">Afternoon</th>
                  <th className="text-left py-4 px-2 font-semibold text-gray-800">Evening</th>
                </tr>
              </thead>
              <tbody>
                {entertainmentSchedule.map((schedule, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-green-50 transition-colors">
                    <td className="py-4 px-2 font-semibold text-green-600">{schedule.day}</td>
                    <td className="py-4 px-2 text-gray-600">{schedule.morning}</td>
                    <td className="py-4 px-2 text-gray-600">{schedule.afternoon}</td>
                    <td className="py-4 px-2 text-gray-600">{schedule.evening}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activity Booking CTA */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready for Adventure?</h3>
            <p className="mb-6 opacity-90">
              Book your activities in advance or speak to our activity coordinators for personalized recommendations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-600"
              >
                Book Activities
              </Button>
              <Button
                variant="secondary"
                size="lg"
              >
                Speak to Coordinator
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Activity Details Modal */}
      {selectedActivity && (
        <Modal
          isOpen={!!selectedActivity}
          onClose={() => setSelectedActivity(null)}
          title={selectedActivity.name}
          size="xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image and Basic Info */}
            <div>
              <img 
                src={selectedActivity.image} 
                alt={selectedActivity.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Duration:</span>
                  <span className="text-green-600">{selectedActivity.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Difficulty:</span>
                  <span className="text-gray-600">{selectedActivity.difficulty}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Price:</span>
                  <span className="text-green-600 font-bold">{selectedActivity.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-800">Rating:</span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current mr-1" />
                    <span className="font-semibold">{selectedActivity.rating}/5</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div>
              <p className="text-gray-600 mb-6 leading-relaxed">{selectedActivity.description}</p>
              
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Activities Included</h4>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {selectedActivity.activities.map((activity: string, index: number) => (
                  <div key={index} className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm">
                    {activity}
                  </div>
                ))}
              </div>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Highlights</h4>
              <ul className="space-y-2 mb-6">
                {selectedActivity.highlights.map((highlight: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>

              <h4 className="text-lg font-semibold text-gray-800 mb-3">Daily Schedule</h4>
              <div className="space-y-2 mb-6">
                {selectedActivity.schedule.map((slot: any, index: number) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg">
                    <span className="text-sm font-medium text-gray-800">{slot.time}</span>
                    <span className="text-sm text-gray-600">{slot.activity}</span>
                  </div>
                ))}
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => setSelectedActivity(null)}
              >
                Book This Activity
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default ActivitiesEntertainment;