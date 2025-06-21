
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Car, User, Phone, Mail, MapPin, ChevronRight, Star } from 'lucide-react';
import BookingSteps from '@/components/BookingSteps';
import ModernDatePicker from '@/components/ModernDatePicker';
import CarSelector from '@/components/CarSelector';
import { useToast } from '@/hooks/use-toast';

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    carType: '',
    courseType: '',
    date: '',
    time: '',
    instructor: '',
    message: ''
  });

  const steps = ['Vehicle', 'Schedule', 'Details', 'Confirm'];

  const carTypes = [
    { value: 'hatchback', label: 'Hatchback - Perfect for city driving' },
    { value: 'sedan', label: 'Sedan - Comfortable highway training' },
    { value: 'suv', label: 'SUV - Advanced vehicle handling' }
  ];

  const courseTypes = [
    { value: 'beginner', label: 'Beginner Course', price: '₹5,000', duration: '15 lessons' },
    { value: 'advanced', label: 'Advanced Course', price: '₹7,500', duration: '20 lessons' },
    { value: 'highway', label: 'Highway Training', price: '₹3,000', duration: '8 lessons' },
    { value: 'parking', label: 'Parking Mastery', price: '₹2,500', duration: '6 lessons' },
    { value: 'night', label: 'Night Driving', price: '₹4,000', duration: '10 lessons' }
  ];

  const instructors = [
    { 
      value: 'john', 
      label: 'John Smith', 
      experience: '15+ years', 
      specialty: 'Defensive driving expert',
      rating: 4.9,
      image: '/placeholder.svg'
    },
    { 
      value: 'sarah', 
      label: 'Sarah Johnson', 
      experience: '12+ years', 
      specialty: 'Highway specialist',
      rating: 4.8,
      image: '/placeholder.svg'
    },
    { 
      value: 'mike', 
      label: 'Mike Chen', 
      experience: '10+ years', 
      specialty: 'Beginner friendly',
      rating: 4.9,
      image: '/placeholder.svg'
    }
  ];

  const timeSlots = [
    { time: '09:00 AM', available: true },
    { time: '10:30 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '01:30 PM', available: true },
    { time: '03:00 PM', available: true },
    { time: '04:30 PM', available: false },
    { time: '06:00 PM', available: true }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking form submitted:', formData);
    toast({
      title: "Booking Confirmed! 🎉",
      description: "We'll contact you soon to confirm your lesson details.",
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8">
            <CarSelector 
              selectedCar={formData.carType} 
              onCarSelect={(carType) => setFormData({...formData, carType})} 
            />
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Select Your Course</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {courseTypes.map((course) => (
                  <Card
                    key={course.value}
                    className={`cursor-pointer transition-all duration-200 border-2 ${
                      formData.courseType === course.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setFormData({...formData, courseType: course.value})}
                  >
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-semibold text-gray-900">{course.label}</h4>
                          <p className="text-sm text-gray-600 mt-1">{course.duration}</p>
                        </div>
                        <span className="text-lg font-bold text-blue-600">{course.price}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Schedule</h3>
              <p className="text-gray-600">Select your preferred date and time</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700">Select Date</label>
                <ModernDatePicker
                  date={selectedDate}
                  onDateSelect={setSelectedDate}
                  placeholder="Choose your lesson date"
                />
              </div>

              <div className="space-y-4">
                <label className="text-sm font-medium text-gray-700">Available Time Slots</label>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.time}
                      disabled={!slot.available}
                      onClick={() => setFormData({...formData, time: slot.time})}
                      className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                        formData.time === slot.time
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : slot.available
                          ? 'border-gray-200 hover:border-blue-300'
                          : 'border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <div className="text-sm font-medium">{slot.time}</div>
                      {!slot.available && <div className="text-xs text-gray-400">Booked</div>}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-medium text-gray-700">Choose Your Instructor</label>
              <div className="grid md:grid-cols-3 gap-4">
                {instructors.map((instructor) => (
                  <Card
                    key={instructor.value}
                    className={`cursor-pointer transition-all duration-200 border-2 ${
                      formData.instructor === instructor.value
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                    onClick={() => setFormData({...formData, instructor: instructor.value})}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-3"></div>
                      <h4 className="font-semibold text-gray-900">{instructor.label}</h4>
                      <p className="text-sm text-gray-600">{instructor.experience}</p>
                      <p className="text-xs text-gray-500 mt-1">{instructor.specialty}</p>
                      <div className="flex items-center justify-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium ml-1">{instructor.rating}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Details</h3>
              <p className="text-gray-600">Please provide your contact information</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <MapPin className="w-4 h-4 mr-2" />
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter your address"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Additional Notes</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all duration-200"
                placeholder="Any special requirements or questions?"
              />
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Booking Summary</h3>
              <p className="text-gray-600">Please review your booking details</p>
            </div>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Course Details</h4>
                    <div className="space-y-2">
                      <p><span className="text-gray-600">Vehicle:</span> {formData.carType}</p>
                      <p><span className="text-gray-600">Course:</span> {formData.courseType}</p>
                      <p><span className="text-gray-600">Date:</span> {selectedDate?.toDateString()}</p>
                      <p><span className="text-gray-600">Time:</span> {formData.time}</p>
                      <p><span className="text-gray-600">Instructor:</span> {formData.instructor}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Contact Details</h4>
                    <div className="space-y-2">
                      <p><span className="text-gray-600">Name:</span> {formData.name}</p>
                      <p><span className="text-gray-600">Email:</span> {formData.email}</p>
                      <p><span className="text-gray-600">Phone:</span> {formData.phone}</p>
                      <p><span className="text-gray-600">Address:</span> {formData.address}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navigation />
      
      {/* Modern Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Driving Lesson</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience modern driving education with our interactive booking system
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BookingSteps currentStep={currentStep} steps={steps} />
      </div>

      {/* Main Booking Content */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit}>
                {renderStepContent()}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-12 pt-8 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevStep}
                    disabled={currentStep === 0}
                    className="px-8 py-3"
                  >
                    Previous
                  </Button>

                  {currentStep < steps.length - 1 ? (
                    <Button
                      type="button"
                      onClick={handleNextStep}
                      className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
                    >
                      Next Step <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 px-8 py-3"
                    >
                      Confirm Booking
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Modern Contact Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8">Need Help with Booking?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Phone className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <p className="font-semibold">Call Us</p>
              <p className="text-blue-200">+1 (555) 123-4567</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Mail className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <p className="font-semibold">Email Us</p>
              <p className="text-blue-200">booking@drivelearn.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Clock className="w-8 h-8 mx-auto mb-4 text-blue-300" />
              <p className="font-semibold">Operating Hours</p>
              <p className="text-blue-200">Mon-Sun: 8AM - 8PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
