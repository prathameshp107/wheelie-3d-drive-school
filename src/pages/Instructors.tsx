
import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Star, Calendar, Users, Award, Clock, Car } from 'lucide-react';

const Instructors = () => {
  const instructors = [
    {
      id: 1,
      name: "Sarah Johnson",
      experience: "8 years",
      rating: 4.9,
      reviews: 234,
      specialty: "Beginner Friendly",
      languages: ["English", "Spanish"],
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      bio: "Sarah specializes in helping nervous drivers build confidence. Her patient and encouraging approach has helped hundreds of students pass their test on the first try.",
      achievements: ["DVSA Certified", "First Aid Certified", "5-Star Instructor"],
      stats: {
        students: 450,
        passRate: 96,
        lessons: 3200
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      experience: "12 years",
      rating: 4.8,
      reviews: 189,
      specialty: "Advanced Techniques",
      languages: ["English", "Mandarin"],
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Michael brings over a decade of experience in driver education. He's known for his technical expertise and ability to teach complex driving scenarios.",
      achievements: ["Master Instructor", "Defensive Driving Specialist", "Highway Training Expert"],
      stats: {
        students: 680,
        passRate: 94,
        lessons: 4800
      }
    },
    {
      id: 3,
      name: "Emma Thompson",
      experience: "6 years",
      rating: 4.9,
      reviews: 156,
      specialty: "Manual Transmission",
      languages: ["English", "French"],
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Emma is our manual transmission specialist. She makes learning to drive stick shift easy and enjoyable, with a focus on smooth gear changes and hill starts.",
      achievements: ["Manual Specialist", "Young Driver Expert", "Patience Award Winner"],
      stats: {
        students: 320,
        passRate: 98,
        lessons: 2100
      }
    },
    {
      id: 4,
      name: "David Rodriguez",
      experience: "10 years",
      rating: 4.7,
      reviews: 203,
      specialty: "Intensive Courses",
      languages: ["English", "Spanish"],
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "David specializes in intensive driving courses, helping students learn quickly without compromising on safety. Perfect for those with time constraints.",
      achievements: ["Intensive Course Expert", "Quick Pass Specialist", "Time Management Pro"],
      stats: {
        students: 520,
        passRate: 92,
        lessons: 3600
      }
    },
    {
      id: 5,
      name: "Lisa Wang",
      experience: "7 years",
      rating: 4.8,
      reviews: 178,
      specialty: "Senior Drivers",
      languages: ["English"],
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "Lisa has a special talent for working with mature learners. Her understanding and tailored approach helps senior drivers feel comfortable behind the wheel.",
      achievements: ["Senior Specialist", "Adaptive Training Expert", "Compassion Award"],
      stats: {
        students: 290,
        passRate: 95,
        lessons: 2400
      }
    },
    {
      id: 6,
      name: "James Wilson",
      experience: "15 years",
      rating: 4.9,
      reviews: 312,
      specialty: "Test Preparation",
      languages: ["English"],
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      bio: "James is our most experienced instructor and test preparation expert. His students have one of the highest first-time pass rates in the region.",
      achievements: ["Master Instructor", "Test Expert", "20+ Years Experience"],
      stats: {
        students: 850,
        passRate: 97,
        lessons: 5900
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Meet Our Expert Instructors</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Learn from certified professionals who are passionate about road safety and helping you become a confident driver
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Users className="h-8 w-8 text-blue-600" />, number: "15+", label: "Certified Instructors" },
              { icon: <Award className="h-8 w-8 text-green-600" />, number: "96%", label: "Average Pass Rate" },
              { icon: <Clock className="h-8 w-8 text-purple-600" />, number: "50k+", label: "Lessons Completed" },
              { icon: <Star className="h-8 w-8 text-yellow-600" />, number: "4.8", label: "Average Rating" }
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Teaching Team</h2>
            <p className="text-xl text-gray-600">Each instructor brings unique expertise and years of experience</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {instructors.map((instructor) => (
              <Card key={instructor.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg">
                <div className="relative">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-gray-900 font-semibold">
                      {instructor.experience}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600 text-white">
                      {instructor.specialty}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{instructor.name}</h3>
                    <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                      <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                      <span className="text-sm font-semibold text-gray-900">{instructor.rating}</span>
                      <span className="text-xs text-gray-600 ml-1">({instructor.reviews})</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{instructor.bio}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Car className="h-4 w-4 mr-2 text-blue-600" />
                      <span>Languages: {instructor.languages.join(", ")}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {instructor.achievements.map((achievement, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {achievement}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center text-xs bg-gray-50 rounded-lg p-3 mb-4">
                    <div>
                      <div className="font-bold text-blue-600">{instructor.stats.students}</div>
                      <div className="text-gray-600">Students</div>
                    </div>
                    <div>
                      <div className="font-bold text-green-600">{instructor.stats.passRate}%</div>
                      <div className="text-gray-600">Pass Rate</div>
                    </div>
                    <div>
                      <div className="font-bold text-purple-600">{instructor.stats.lessons}</div>
                      <div className="text-gray-600">Lessons</div>
                    </div>
                  </div>
                  
                  <Link to="/booking">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300">
                      Book with {instructor.name.split(' ')[0]}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructor Qualities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes Our Instructors Special</h2>
            <p className="text-xl text-gray-600">Every instructor meets our high standards for safety, professionalism, and teaching excellence</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fully Qualified",
                description: "All instructors are DVSA approved with current certifications and regular training updates",
                icon: <Award className="h-12 w-12 text-blue-600" />
              },
              {
                title: "Patient & Supportive",
                description: "We carefully select instructors who are naturally patient and create a comfortable learning environment",
                icon: <Users className="h-12 w-12 text-green-600" />
              },
              {
                title: "Safety First",
                description: "Every instructor prioritizes safety with dual-control vehicles and comprehensive risk assessment training",
                icon: <Car className="h-12 w-12 text-red-600" />
              },
              {
                title: "Flexible Teaching",
                description: "Our instructors adapt their teaching style to match each student's learning preferences and pace",
                icon: <Clock className="h-12 w-12 text-purple-600" />
              },
              {
                title: "Continuous Training",
                description: "Regular professional development ensures our instructors stay current with best practices and regulations",
                icon: <Star className="h-12 w-12 text-yellow-600" />
              },
              {
                title: "Proven Results",
                description: "Track record of success with high pass rates and positive student feedback across all experience levels",
                icon: <Calendar className="h-12 w-12 text-orange-600" />
              }
            ].map((quality, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-6">
                    {quality.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900">{quality.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{quality.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Learn with the Best?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Choose your preferred instructor and start your driving journey with confidence. All our instructors are committed to your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Book Your Instructor
              </Button>
            </Link>
            <Link to="/testimonials">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
                Read Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Instructors;
