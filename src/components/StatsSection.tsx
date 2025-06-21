
import React from 'react';
import { Users, Award, Car, Clock, TrendingUp, Shield } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      number: "15,000+",
      label: "Happy Students",
      description: "Successfully trained drivers"
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      number: "99.2%",
      label: "Pass Rate",
      description: "First-time test success"
    },
    {
      icon: <Car className="h-8 w-8 text-green-600" />,
      number: "50+",
      label: "Premium Vehicles",
      description: "Modern safety features"
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      number: "24/7",
      label: "Support Available",
      description: "Always here to help"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-pink-600" />,
      number: "8+",
      label: "Years Experience",
      description: "Trusted driving education"
    },
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      number: "100%",
      label: "Safety Guarantee",
      description: "Certified instructors"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent mb-4">
            Magic by Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our achievements speak for themselves - join thousands of successful drivers who trusted Magic Driving
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg mb-4 group-hover:shadow-xl transition-shadow duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-sm font-semibold text-purple-600 mb-1">{stat.label}</div>
              <div className="text-xs text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3">
            <Award className="h-5 w-5 text-purple-600" />
            <span className="text-purple-800 font-medium">Certified by National Driving Education Board</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
