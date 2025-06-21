
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Car, Award, Star } from 'lucide-react';

const FeaturesSection = () => {
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

  return (
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
  );
};

export default FeaturesSection;
