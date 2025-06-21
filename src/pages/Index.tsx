
import React from 'react';
import Navigation from '@/components/Navigation';
import Car3D from '@/components/Car3D';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Car, Award, ArrowRight, Sparkles, Star, Shield, Clock, Trophy, Zap, Heart, MapPin, Phone, Mail } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Magic Instructors",
      description: "Learn from certified professionals who make driving feel magical",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Premium Fleet",
      description: "Drive our luxury vehicles equipped with the latest safety technology",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: "99% Success Rate",
      description: "Our magical teaching methods ensure you pass on your first try",
      gradient: "from-emerald-500 to-teal-500"
    }
  ];

  const vehicles = [
    { type: 'hatchback' as const, name: 'Magic Hatch', color: '#8b5cf6', description: 'Perfect for city adventures and magical moments', price: '$45/lesson' },
    { type: 'sedan' as const, name: 'Luxury Sedan', color: '#3b82f6', description: 'Elegant rides for sophisticated driving experience', price: '$55/lesson' },
    { type: 'suv' as const, name: 'Adventure SUV', color: '#10b981', description: 'Conquer any terrain with confidence and style', price: '$65/lesson' }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Magic Driving made learning to drive an absolute joy! The instructors are patient and the cars are amazing.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c5?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      text: "I passed my test on the first try thanks to their incredible teaching methods. Truly magical!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      text: "The best driving school experience ever. Professional, fun, and effective!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full opacity-15 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="h-8 w-8 text-purple-300 animate-spin" />
                <span className="text-purple-300 font-medium">Welcome to Magic Driving</span>
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Drive with
                <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Pure Magic
                </span>
              </h1>
              
              <p className="text-xl mb-10 text-purple-100 leading-relaxed max-w-2xl">
                Experience the most enchanting way to learn driving. Our premium instructors and luxury vehicles 
                will make your journey from beginner to confident driver absolutely magical.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/booking">
                  <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                    <Sparkles className="mr-2 h-6 w-6" />
                    Start Your Magic Journey
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-purple-900 px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300 backdrop-blur-sm">
                    Explore Courses
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 mt-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200">5000+</div>
                  <div className="text-purple-300">Happy Students</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200">99%</div>
                  <div className="text-purple-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-200">15+</div>
                  <div className="text-purple-300">Expert Instructors</div>
                </div>
              </div>
            </div>
            
            <div className="animate-scale-in relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30"></div>
              <Car3D type="sedan" color="#ffffff" className="w-full h-96 relative z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-100 rounded-full opacity-50 blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="h-6 w-6 text-purple-600" />
              <span className="text-purple-600 font-medium">Why Choose Magic Driving?</span>
              <Star className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
              Experience the Magic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just teach driving - we create magical experiences that transform nervous beginners into confident drivers
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border-0 shadow-xl bg-gradient-to-br from-white to-gray-50 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex justify-center mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      {React.cloneElement(feature.icon, { className: "h-8 w-8 text-white" })}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-purple-900 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-purple-600" />
              <span className="text-purple-600 font-medium">Premium Vehicle Fleet</span>
              <Car className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
              Choose Your Magic Ride
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select from our premium collection of modern vehicles, each equipped with advanced safety features and magical comfort
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-xl bg-white">
                <div className="h-72 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-500"></div>
                  <Car3D type={vehicle.type} color={vehicle.color} className="w-full h-full relative z-10 group-hover:scale-110 transition-transform duration-500" />
                </div>
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{vehicle.name}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">{vehicle.price}</div>
                      <div className="text-sm text-gray-500">per session</div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">{vehicle.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {['Dual Controls', 'Advanced Safety', 'Premium Comfort', 'Latest Tech'].map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/booking">
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Choose This Vehicle
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-purple-600" />
              <span className="text-purple-600 font-medium">Student Love</span>
              <Heart className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
              Magical Testimonials
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <Sparkles className="h-16 w-16 mx-auto mb-8 text-purple-200 animate-spin" />
          <h2 className="text-5xl font-bold mb-8">Ready for Your Magic Journey?</h2>
          <p className="text-xl mb-10 text-purple-100 max-w-3xl mx-auto">
            Join thousands of successful drivers who discovered the magic of confident driving with us. 
            Your transformation starts with a single booking!
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50 px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <Trophy className="mr-3 h-6 w-6" />
              Begin Your Magic Adventure
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="h-10 w-10 text-purple-400" />
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Magic Driving
                  </span>
                  <div className="text-xs text-gray-400">Drive with Magic</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transform your driving dreams into reality with our magical teaching methods and premium vehicle experience.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">Quick Links</h4>
              <div className="space-y-3">
                {['Courses', 'Instructors', 'Testimonials', 'Book Session'].map((link) => (
                  <Link key={link} to={`/${link.toLowerCase().replace(' ', '-')}`} className="block text-gray-400 hover:text-purple-300 transition-colors duration-300">
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">Contact Magic</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span>hello@magicdriving.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span>123 Magic Street, Dream City</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-purple-300">Magic Hours</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Mon-Fri:</span>
                  <span>8AM - 8PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9AM - 6PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10AM - 4PM</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-12 text-center">
            <p className="text-gray-400">
              &copy; 2024 Magic Driving. All rights reserved. Made with ✨ and lots of magic.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
