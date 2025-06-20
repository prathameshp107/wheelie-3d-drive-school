
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Users, Car, Star, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Beginner's Course",
      duration: "6 weeks",
      lessons: "12 lessons",
      price: "$299",
      popular: false,
      features: [
        "Basic vehicle controls",
        "Traffic rules and signs",
        "Parking techniques",
        "City driving practice",
        "Highway introduction",
        "Mock driving test"
      ],
      description: "Perfect for complete beginners who have never driven before. Learn all the fundamentals in a safe and supportive environment."
    },
    {
      id: 2,
      title: "Standard Course",
      duration: "4 weeks",
      lessons: "8 lessons",
      price: "$399",
      popular: true,
      features: [
        "Advanced driving techniques",
        "Highway driving",
        "Night driving",
        "Adverse weather conditions",
        "Defensive driving",
        "Test preparation"
      ],
      description: "Comprehensive course covering all aspects of driving. Most popular choice for new drivers preparing for their road test."
    },
    {
      id: 3,
      title: "Intensive Course",
      duration: "1-2 weeks",
      lessons: "15 lessons",
      price: "$599",
      popular: false,
      features: [
        "Fast-track learning",
        "Daily lessons available",
        "Comprehensive training",
        "Test booking assistance",
        "Priority scheduling",
        "Pass guarantee*"
      ],
      description: "Accelerated program for those who need to learn quickly. Intensive daily lessons with flexible scheduling."
    },
    {
      id: 4,
      title: "Refresher Course",
      duration: "Flexible",
      lessons: "4-8 lessons",
      price: "$199",
      popular: false,
      features: [
        "Skill assessment",
        "Confidence building",
        "Specific skill focus",
        "Flexible scheduling",
        "Experienced drivers",
        "Custom curriculum"
      ],
      description: "Ideal for drivers who haven't driven in a while or want to improve specific skills and build confidence."
    }
  ];

  const specialCourses = [
    {
      title: "Automatic Transmission",
      description: "Learn to drive with automatic cars - easier for beginners",
      price: "From $249",
      icon: <Car className="h-8 w-8 text-blue-600" />
    },
    {
      title: "Manual Transmission",
      description: "Master clutch control and gear shifting techniques",
      price: "From $299",
      icon: <Car className="h-8 w-8 text-green-600" />
    },
    {
      title: "Senior Driving",
      description: "Specialized courses for mature learners (55+)",
      price: "From $279",
      icon: <Users className="h-8 w-8 text-purple-600" />
    },
    {
      title: "Nervous Drivers",
      description: "Patient instruction for anxious or nervous learners",
      price: "From $329",
      icon: <Star className="h-8 w-8 text-orange-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Driving Courses</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our comprehensive range of driving courses designed to suit every learning style and schedule
          </p>
        </div>
      </section>

      {/* Main Courses */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Main Courses</h2>
            <p className="text-xl text-gray-600">Structured programs to get you road-ready</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className={`relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${course.popular ? 'ring-2 ring-blue-500 shadow-lg' : 'shadow-md'}`}>
                {course.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{course.title}</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mt-2">{course.price}</div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.lessons}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 text-sm">{course.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">What's Included:</h4>
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/booking" className="block">
                    <Button className={`w-full ${course.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-full transition-all duration-300`}>
                      Choose This Course
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Specialized Training</h2>
            <p className="text-xl text-gray-600">Tailored courses for specific needs and preferences</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialCourses.map((course, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {course.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{course.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  <div className="text-lg font-bold text-blue-600 mb-4">{course.price}</div>
                  <Link to="/booking">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What's Included in Every Course</h2>
            <p className="text-xl text-gray-600">Comprehensive training with all the essentials</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Qualified Instructors",
                description: "All instructors are DVSA certified with extensive teaching experience",
                icon: <Star className="h-8 w-8 text-yellow-500" />
              },
              {
                title: "Dual-Control Vehicles",
                description: "All our cars are equipped with instructor controls for maximum safety",
                icon: <Car className="h-8 w-8 text-blue-600" />
              },
              {
                title: "Theory Test Support",
                description: "Access to online theory test materials and mock tests",
                icon: <CheckCircle className="h-8 w-8 text-green-600" />
              },
              {
                title: "Flexible Scheduling",
                description: "Book lessons at times that suit your schedule, including weekends",
                icon: <Clock className="h-8 w-8 text-purple-600" />
              },
              {
                title: "Progress Tracking",
                description: "Regular assessments and feedback to monitor your learning progress",
                icon: <Users className="h-8 w-8 text-red-600" />
              },
              {
                title: "Test Day Support",
                description: "Use of our car for your driving test and pre-test lesson",
                icon: <ArrowRight className="h-8 w-8 text-orange-600" />
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="pt-6 text-center">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Choose your course and book your first lesson today. Our expert instructors are ready to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Book Your Course
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Ask Questions
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
