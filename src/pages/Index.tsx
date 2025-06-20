
import React from 'react';
import Navigation from '@/components/Navigation';
import Car3D from '@/components/Car3D';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Car, Award, ArrowRight } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from certified professionals with years of experience"
    },
    {
      icon: <Car className="h-8 w-8 text-blue-600" />,
      title: "Modern Fleet",
      description: "Practice with our well-maintained, latest model vehicles"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "High Success Rate",
      description: "98% of our students pass their driving test on first attempt"
    }
  ];

  const vehicles = [
    { type: 'hatchback' as const, name: 'Hatchback', color: '#ef4444', description: 'Perfect for city driving and beginners' },
    { type: 'sedan' as const, name: 'Sedan', color: '#1e40af', description: 'Comfortable and spacious for highway training' },
    { type: 'suv' as const, name: 'SUV', color: '#059669', description: 'Advanced training with larger vehicles' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Master the Road with
                <span className="text-blue-300 block">Confidence</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100 leading-relaxed">
                Professional driving lessons with modern vehicles, expert instructors, and flexible scheduling. 
                Start your journey to becoming a confident driver today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/booking">
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                    Start Learning Today
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/courses">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                    View Courses
                  </Button>
                </Link>
              </div>
            </div>
            <div className="animate-scale-in">
              <Car3D type="sedan" color="#ffffff" className="w-full h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose DriveLearn?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive driving education with modern teaching methods and state-of-the-art vehicles
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicle Fleet Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Vehicle Fleet</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our diverse range of modern vehicles, each equipped with dual controls and safety features
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {vehicles.map((vehicle, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200">
                  <Car3D type={vehicle.type} color={vehicle.color} className="w-full h-full" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.description}</p>
                  <Link to="/booking">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300">
                      Choose This Vehicle
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "5000+", label: "Students Trained" },
              { number: "98%", label: "Pass Rate" },
              { number: "15+", label: "Expert Instructors" },
              { number: "10", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in">
                <div className="text-4xl font-bold text-blue-300 mb-2">{stat.number}</div>
                <div className="text-lg text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Driving Journey?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful drivers who learned with us. Book your first lesson today!
          </p>
          <Link to="/booking">
            <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-12 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
              Book Your First Lesson
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">DriveLearn</span>
              </div>
              <p className="text-gray-400">
                Professional driving school dedicated to making you a confident and safe driver.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/courses" className="block text-gray-400 hover:text-white transition-colors">Courses</Link>
                <Link to="/instructors" className="block text-gray-400 hover:text-white transition-colors">Instructors</Link>
                <Link to="/testimonials" className="block text-gray-400 hover:text-white transition-colors">Testimonials</Link>
                <Link to="/booking" className="block text-gray-400 hover:text-white transition-colors">Book Now</Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>📞 +1 (555) 123-4567</p>
                <p>✉️ info@drivelearn.com</p>
                <p>📍 123 Driving St, City, State</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Hours</h4>
              <div className="text-gray-400 space-y-2">
                <p>Mon-Fri: 8AM - 8PM</p>
                <p>Saturday: 9AM - 6PM</p>
                <p>Sunday: 10AM - 4PM</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>&copy; 2024 DriveLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
