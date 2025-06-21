
import React from 'react';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookingStepsProps {
  currentStep: number;
  steps: string[];
}

const BookingSteps: React.FC<BookingStepsProps> = ({ currentStep, steps }) => {
  return (
    <div className="w-full py-8">
      <div className="flex items-center justify-center space-x-4 md:space-x-8">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  index < currentStep
                    ? "bg-green-500 border-green-500 text-white"
                    : index === currentStep
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "bg-gray-200 border-gray-300 text-gray-500"
                )}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span className="text-sm font-medium">{index + 1}</span>
                )}
              </div>
              <span
                className={cn(
                  "mt-2 text-xs font-medium text-center max-w-20",
                  index <= currentStep ? "text-gray-900" : "text-gray-500"
                )}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "w-12 md:w-20 h-0.5 mx-2 transition-all duration-300",
                  index < currentStep ? "bg-green-500" : "bg-gray-300"
                )}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingSteps;
