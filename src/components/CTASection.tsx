
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sparkles, Trophy, ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
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
  );
};

export default CTASection;
