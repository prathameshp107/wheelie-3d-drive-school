
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  const plans = [
    {
      name: 'Magic Starter',
      price: '$299',
      duration: '10 Sessions',
      icon: <Star className="h-8 w-8 text-blue-500" />,
      color: 'from-blue-500 to-cyan-500',
      features: [
        '10 Professional Lessons',
        'Basic Car (Hatchback)',
        'Standard Instructor',
        'Theory Materials',
        'Progress Tracking',
        'Certificate of Completion'
      ],
      popular: false
    },
    {
      name: 'Magic Premium',
      price: '$499',
      duration: '20 Sessions',
      icon: <Crown className="h-8 w-8 text-purple-500" />,
      color: 'from-purple-500 to-pink-500',
      features: [
        '20 Professional Lessons',
        'Premium Car (Sedan/SUV)',
        'Expert Instructor',
        'Advanced Theory + Practice',
        'Mock Test Sessions',
        'Guaranteed Pass Support',
        'Flexible Scheduling',
        'Priority Booking'
      ],
      popular: true
    },
    {
      name: 'Magic Elite',
      price: '$799',
      duration: '30 Sessions',
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      color: 'from-yellow-500 to-orange-500',
      features: [
        '30 Professional Lessons',
        'Luxury Vehicle Fleet',
        'Master Instructor (1-on-1)',
        'Advanced Driving Techniques',
        'Highway & City Training',
        'Night Driving Sessions',
        'Weather Condition Training',
        'Lifetime Support',
        'VIP Treatment'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-200 rounded-full opacity-30 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-pink-200 rounded-full opacity-40 blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-6 w-6 text-purple-600" />
            <span className="text-purple-600 font-medium">Magical Pricing Plans</span>
            <Crown className="h-6 w-6 text-purple-600" />
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
            Choose Your Magic Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your driving dreams into reality with our carefully crafted packages designed for every learner
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl border-0 shadow-xl ${
                plan.popular ? 'scale-105 shadow-2xl ring-4 ring-purple-200' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center py-2 text-sm font-semibold">
                  ⭐ Most Popular Choice ⭐
                </div>
              )}
              
              <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
              
              <CardContent className="p-8 bg-white/80 backdrop-blur-sm">
                <div className="text-center mb-8">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${plan.color} shadow-lg mb-4`}>
                    {React.cloneElement(plan.icon, { className: "h-8 w-8 text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center space-x-2">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/ {plan.duration}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/booking">
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:shadow-lg text-white rounded-full py-3 transition-all duration-300 transform hover:scale-105`}
                  >
                    Start Magic Journey
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            Not sure which plan is right for you? Our magic consultants are here to help!
          </p>
          <Link to="/contact">
            <Button variant="outline" size="lg" className="rounded-full px-8 py-3 border-2 border-purple-300 text-purple-700 hover:bg-purple-50">
              Get Personalized Recommendation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
