
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Car3D from '@/components/Car3D';
import { CheckCircle, Car, Sparkles } from 'lucide-react';

const VehicleFleetSection = () => {
  const vehicles = [
    { type: 'hatchback' as const, name: 'Magic Hatch', color: '#8b5cf6', description: 'Perfect for city adventures and magical moments', price: '$45/lesson' },
    { type: 'sedan' as const, name: 'Luxury Sedan', color: '#3b82f6', description: 'Elegant rides for sophisticated driving experience', price: '$55/lesson' },
    { type: 'suv' as const, name: 'Adventure SUV', color: '#10b981', description: 'Conquer any terrain with confidence and style', price: '$65/lesson' }
  ];

  return (
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
  );
};

export default VehicleFleetSection;
