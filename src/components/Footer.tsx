
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Sparkles className="h-10 w-10 text-purple-400" />
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Magic Driving
                </span>
                <div className="text-xs text-gray-400">Drive with Magic</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transform your driving dreams into reality with our magical teaching methods and premium vehicle experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Quick Links</h4>
            <div className="space-y-3">
              {['Courses', 'Instructors', 'Testimonials', 'Book Session'].map((link) => (
                <Link key={link} to={`/${link.toLowerCase().replace(' ', '-')}`} className="block text-gray-400 hover:text-purple-300 transition-colors duration-300">
                  {link}
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Contact Magic</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="h-5 w-5 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="h-5 w-5 text-purple-400" />
                <span>hello@magicdriving.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span>123 Magic Street, Dream City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Magic Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Mon-Fri:</span>
                <span>8AM - 8PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>9AM - 6PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>10AM - 4PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12 text-center">
          <p className="text-gray-400">
            &copy; 2024 Magic Driving. All rights reserved. Made with ✨ and lots of magic.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
