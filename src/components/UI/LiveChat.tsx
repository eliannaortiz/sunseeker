import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, Clock, Minimize2 } from 'lucide-react';
import Button from './Button';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'text' | 'options' | 'contact';
}

const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickOptions = [
    'Room availability',
    'Pricing information',
    'All-inclusive packages',
    'Spa appointments',
    'Restaurant reservations',
    'Airport transfers',
    'Wedding planning',
    'Activities booking'
  ];

  const initialMessages: Message[] = [
    {
      id: 1,
      text: "Hello! Welcome to Sunseeker Resort! 🌊 I'm here to help you with any questions about your perfect Goan getaway. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'text'
    }
  ];

  useEffect(() => {
    if (messages.length === 0) {
      setMessages(initialMessages);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setHasNewMessage(false);
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, sender: 'user' | 'bot', type: 'text' | 'options' | 'contact' = 'text') => {
    const newMessage: Message = {
      id: Date.now(),
      text,
      sender,
      timestamp: new Date(),
      type
    };
    setMessages(prev => [...prev, newMessage]);
    
    if (!isOpen && sender === 'bot') {
      setHasNewMessage(true);
    }
  };

  const simulateTyping = (callback: () => void, delay: number = 1500) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const getBotResponse = (userMessage: string) => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('room') || message.includes('availability')) {
      return "Great! I can help you check room availability. We have several room types available:\n\n🏨 Standard Ocean View - ₹12,999/night\n🌊 Deluxe Beachfront - ₹18,999/night\n👨‍👩‍👧‍👦 Family Suite - ₹24,999/night\n🏖️ Private Villa - ₹35,999/night\n\nWhat dates are you looking at?";
    }
    
    if (message.includes('price') || message.includes('cost') || message.includes('rate')) {
      return "Our rates vary by season and room type. Here are our current starting prices:\n\n💰 All-inclusive packages from ₹12,999/night\n🎁 Early bird discount: 25% off\n👨‍👩‍👧‍👦 Kids stay free (under 12)\n💑 Honeymoon packages available\n\nWould you like me to check specific dates for you?";
    }
    
    if (message.includes('package') || message.includes('inclusive')) {
      return "Our all-inclusive packages include everything you need for a perfect vacation:\n\n✅ All meals at 4 restaurants\n✅ Premium beverages\n✅ Kids club & activities\n✅ Water sports\n✅ Evening entertainment\n✅ Spa facility access\n✅ WiFi throughout resort\n\nWhich package interests you most?";
    }
    
    if (message.includes('spa') || message.includes('massage')) {
      return "Our award-winning spa offers incredible treatments:\n\n💆‍♀️ Couples Paradise Retreat - ₹12,999\n🌿 Ayurvedic Healing - ₹8,999\n💪 Deep Tissue Massage - ₹6,999\n🌶️ Goan Spice Ritual - ₹9,999\n\nWould you like me to check availability or book an appointment?";
    }
    
    if (message.includes('restaurant') || message.includes('dining') || message.includes('food')) {
      return "We have 4 amazing restaurants:\n\n🦞 Oceana Beachside Grill - Fresh seafood\n🍛 Spice Route - Indian & Asian cuisine\n🥂 Azure Rooftop - Fine dining\n☕ Palm Café - Casual all-day dining\n\nWould you like me to make a reservation?";
    }
    
    if (message.includes('wedding') || message.includes('event')) {
      return "Congratulations! We'd love to host your special day! 💕\n\n🏖️ Beachfront ceremonies\n🌺 Garden venues\n🏊‍♀️ Poolside celebrations\n\nPackages from ₹3.5L to ₹15L\n\nShall I connect you with our wedding specialist?";
    }
    
    if (message.includes('activity') || message.includes('fun') || message.includes('entertainment')) {
      return "So many exciting activities await you:\n\n🏄‍♂️ Water sports (jet skiing, parasailing)\n🏐 Beach volleyball tournaments\n🎭 Cultural shows & live music\n👶 Kids club (ages 4-12)\n🧘‍♀️ Yoga & fitness classes\n\nWhat type of activities interest you most?";
    }
    
    if (message.includes('transfer') || message.includes('airport') || message.includes('transport')) {
      return "We offer convenient airport transfers:\n\n✈️ Goa Airport: 45 minutes (₹1,200-₹1,800)\n🚂 Thivim Station: 20 minutes (₹400-₹600)\n🚗 Private car service available\n\nWould you like me to arrange a transfer for you?";
    }
    
    if (message.includes('book') || message.includes('reservation')) {
      return "I'd be happy to help you book! For the best rates and instant confirmation, I recommend:\n\n1️⃣ Use our online booking system\n2️⃣ Call our reservations team: +91 83209 12346\n3️⃣ Email: bookings@sunseekerresort.com\n\nWould you like me to transfer you to a booking specialist?";
    }
    
    if (message.includes('location') || message.includes('address') || message.includes('where')) {
      return "We're perfectly located in North Goa:\n\n📍 Anjuna Beach Road, Anjuna\n🏖️ 500m private beach access\n🛍️ 5 min walk to Anjuna Flea Market\n🏰 15 min to Chapora Fort\n✈️ 45 min from Goa Airport\n\nWould you like directions or transport options?";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're very welcome! 😊 Is there anything else I can help you with today? I'm here 24/7 to make your Sunseeker experience perfect!";
    }
    
    if (message.includes('bye') || message.includes('goodbye')) {
      return "Thank you for chatting with us! Have a wonderful day and we look forward to welcoming you to Sunseeker Resort soon! 🌊☀️";
    }
    
    // Default response
    return "Thank you for your message! I'd be happy to help you with information about our rooms, dining, activities, spa, or bookings. You can also speak directly with our team:\n\n📞 Call: +91 83209 12345\n📧 Email: stay@sunseekerresort.com\n\nWhat would you like to know more about?";
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    addMessage(inputText, 'user');
    const userMessage = inputText;
    setInputText('');
    
    simulateTyping(() => {
      const botResponse = getBotResponse(userMessage);
      addMessage(botResponse, 'bot');
    });
  };

  const handleQuickOption = (option: string) => {
    addMessage(option, 'user');
    
    simulateTyping(() => {
      const botResponse = getBotResponse(option);
      addMessage(botResponse, 'bot');
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-IN', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        >
          <MessageCircle size={28} className="group-hover:scale-110 transition-transform" />
          {hasNewMessage && (
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">1</span>
            </div>
          )}
          <div className="absolute -top-12 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Chat with us! 💬
          </div>
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-full">
        {/* Header */}
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Bot size={20} />
            </div>
            <div>
              <h4 className="font-semibold">Sunseeker Support</h4>
              <div className="flex items-center space-x-1 text-xs opacity-90">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Online now</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <Minimize2 size={16} />
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded transition-colors"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {!isMinimized && (
          <>
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white text-gray-800 shadow-sm border'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && (
                        <Bot size={16} className="text-cyan-500 mt-1 flex-shrink-0" />
                      )}
                      <div className="flex-1">
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-cyan-100' : 'text-gray-500'
                        }`}>
                          {formatTime(message.timestamp)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 shadow-sm border px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot size={16} className="text-cyan-500" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick Options */}
              {messages.length <= 1 && !isTyping && (
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 text-center">Quick options:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {quickOptions.slice(0, 4).map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickOption(option)}
                        className="text-xs bg-white border border-gray-200 hover:border-cyan-300 hover:bg-cyan-50 px-3 py-2 rounded-lg transition-colors text-left"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
              
              {/* Contact Options */}
              <div className="flex items-center justify-center space-x-4 mt-3 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <Phone size={12} />
                  <span>+91 83209 12345</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={12} />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LiveChat;