
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Car3D from '@/components/Car3D';
import { Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
