
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Car3D from './Car3D';
import { cn } from '@/lib/utils';

interface CarOption {
  type: 'hatchback' | 'sedan' | 'suv';
  name: string;
  description: string;
  price: string;
  features: string[];
}

interface CarSelectorProps {
  selectedCar: string;
  onCarSelect: (carType: string) => void;
}

const CarSelector: React.FC<CarSelectorProps> = ({ selectedCar, onCarSelect }) => {
  const carOptions: CarOption[] = [
    {
      type: 'hatchback',
      name: 'Maruti Swift',
      description: 'Perfect for city driving and parking practice',
      price: '₹1,200/lesson',
      features: ['Easy handling', 'Fuel efficient', 'Compact size', 'Beginner friendly']
    },
    {
      type: 'sedan',
      name: 'Honda City',
      description: 'Ideal for highway training and smooth rides',
      price: '₹1,500/lesson',
      features: ['Comfortable seating', 'Highway ready', 'Advanced features', 'Smooth drive']
    },
    {
      type: 'suv',
      name: 'Hyundai Creta',
      description: 'Advanced vehicle handling and commanding view',
      price: '₹1,800/lesson',
      features: ['High seating', 'All terrain', 'Premium features', 'Powerful engine']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Training Vehicle</h3>
        <p className="text-gray-600">Select the car that best suits your learning needs</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {carOptions.map((car) => (
          <Card
            key={car.type}
            className={cn(
              "cursor-pointer transition-all duration-300 hover:shadow-xl border-2",
              selectedCar === car.type
                ? "border-blue-500 bg-blue-50 shadow-lg scale-105"
                : "border-gray-200 hover:border-blue-300"
            )}
            onClick={() => onCarSelect(car.type)}
          >
            <CardContent className="p-6">
              <div className="h-48 mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden">
                <Car3D type={car.type} className="w-full h-full" />
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h4>
              <p className="text-gray-600 text-sm mb-3">{car.description}</p>
              
              <div className="flex justify-between items-center mb-4">
                <span className="text-2xl font-bold text-blue-600">{car.price}</span>
                {selectedCar === car.type && (
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Selected
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                    {feature}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CarSelector;
