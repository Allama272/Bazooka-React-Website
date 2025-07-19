import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bazooka-charcoal text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-heading explosive-gradient bg-clip-text text-transparent mb-4">
              BAZOOKA
            </h3>
            <p className="text-gray-300 mb-4">
              Explosive flavors that will blow your mind! Experience the ultimate 
              comfort food destination with bold dishes and unforgettable taste.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/bazookaegy" className="text-bazooka-orange hover:text-orange-400 transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/bazookaegy" className="text-bazooka-orange hover:text-orange-400 transition-colors">
                Instagram
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-heading mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-bazooka-orange" />
                <span className="text-gray-300">16455</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-bazooka-orange" />
                <span className="text-gray-300">info@bazookaegy.com.</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-bazooka-orange" />
                <span className="text-gray-300">10th Omar, Aziz Kheil, Alexandria Governorate 21611</span>
              </div>
            </div>
          </div>


        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Restaurant Bazooka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
