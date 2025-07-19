import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Truck, Users, Zap } from 'lucide-react';
import ContactForm from '../components/ui/ContactForm';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Order Hotline",
      details: "16123",
      subtitle: "Fast delivery across Egypt"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "orders@bazookaegy.com",
      subtitle: "Questions & feedback welcome"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "Multiple Branches",
      subtitle: "Serving all major Egyptian cities"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Hours",
      details: "Daily: 11AM-12AM",
      subtitle: "Fresh chicken delivered hot"
    }
  ];

  const serviceAreas = [
    { city: "Cairo", deliveryTime: "25-35 min", icon: "🏙️" },
    { city: "Alexandria", deliveryTime: "30-40 min", icon: "🌊" },
    { city: "Giza", deliveryTime: "25-35 min", icon: "🏛️" },
    { city: "Sharm El Sheikh", deliveryTime: "35-45 min", icon: "🏖️" }
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, name: "Facebook", url: "https://www.facebook.com/bazookaegy", followers: "3.9M+" },
    { icon: <Instagram size={24} />, name: "Instagram", url: "https://www.instagram.com/bazookaegy", followers: "432K+" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-bazooka-charcoal via-bazooka-red to-orange-600 text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-bazooka-orange/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/20 rounded-full animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-black tracking-wider mb-6">
              <span className="bg-gradient-to-r from-bazooka-orange via-yellow-400 to-white bg-clip-text text-transparent">
                GET YOUR
              </span>
              <br />
              <span className="bg-gradient-to-r from-white via-yellow-400 to-bazooka-orange bg-clip-text text-transparent">
                EXPLOSIVE FIX
              </span>
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-bold">
              🔥 Ready to experience crispy perfection? Order now! 🔥
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group px-8 py-4 bg-bazooka-orange text-black font-bold text-xl rounded-full shadow-2xl hover:shadow-bazooka-orange/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                <Truck className="w-6 h-6 group-hover:animate-bounce" />
                <span>ORDER NOW: 16123</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-20 bg-gradient-to-br from-bazooka-cream via-white to-bazooka-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-bazooka-charcoal mb-4">
              Connect with Bazooka
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to get your explosive chicken fix
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-center transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-bazooka-orange to-bazooka-red text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-bazooka-charcoal mb-3">
                  {info.title}
                </h3>
                <p className="text-2xl font-black text-bazooka-orange mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600">
                  {info.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-bazooka-charcoal mb-4">
              We Deliver Explosive Flavors Across Egypt
            </h2>
            <p className="text-xl text-gray-600">
              Fresh, hot, and crispy - delivered to your doorstep
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <div key={index} className="bg-gradient-to-br from-bazooka-cream to-white p-6 rounded-2xl border-2 border-bazooka-orange/20 hover:border-bazooka-orange/50 transition-all duration-300">
                <div className="text-center">
                  <div className="text-4xl mb-3">{area.icon}</div>
                  <h3 className="text-xl font-bold text-bazooka-charcoal mb-2">{area.city}</h3>
                  <p className="text-bazooka-orange font-bold">{area.deliveryTime}</p>
                  <p className="text-sm text-gray-600 mt-2">Average delivery time</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-bazooka-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <h2 className="text-3xl font-black text-bazooka-charcoal mb-6">
                🍗 Share Your Bazooka Experience
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Love our explosive chicken? Have a special request? Want to join our team? 
                We're all ears and ready to make your Bazooka experience even better!
              </p>
              <ContactForm />
            </div>

            {/* Services & Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-bazooka-charcoal mb-8">
                  🚀 Why Choose Bazooka?
                </h2>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white p-4 rounded-2xl text-center shadow-lg">
                    <div className="text-2xl font-black text-bazooka-orange">15min</div>
                    <div className="text-sm text-gray-600">Average Delivery</div>
                  </div>
                  <div className="bg-white p-4 rounded-2xl text-center shadow-lg">
                    <div className="text-2xl font-black text-bazooka-orange">4.8★</div>
                    <div className="text-sm text-gray-600">Customer Rating</div>
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="bg-white p-8 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-bazooka-charcoal mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-bazooka-orange mr-2" />
                  Our Explosive Services
                </h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-bazooka-orange rounded-full"></span>
                    <span>**Fast Delivery** - Hot chicken in 15-30 minutes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-bazooka-orange rounded-full"></span>
                    <span>**Party Catering** - Feed your crowd with explosive flavors</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-bazooka-orange rounded-full"></span>
                    <span>**Corporate Orders** - Office meals that boost morale</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-bazooka-orange rounded-full"></span>
                    <span>**Custom Spice Levels** - From mild to explosive heat</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="bg-gradient-to-br from-bazooka-red to-orange-600 p-8 rounded-3xl text-white">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  Join Our Explosive Community
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl hover:bg-white/30 transition-all duration-300 text-center group"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <div className="flex justify-center mb-2 group-hover:scale-110 transition-transform duration-300">
                        {social.icon}
                      </div>
                      <div className="text-sm font-bold">{social.followers}</div>
                    </a>
                  ))}
                </div>
                <p className="text-white/90">
                  Follow us for behind-the-scenes content, exclusive offers, and the latest explosive creations!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bazooka-charcoal via-bazooka-red to-orange-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Craving Explosive Chicken Right Now?
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              Don't wait! Our crispy, golden chicken is just one call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:16123"
                className="group px-12 py-5 bg-bazooka-orange text-black font-black text-2xl rounded-full shadow-2xl hover:shadow-bazooka-orange/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
              >
                <Phone className="w-6 h-6 group-hover:animate-pulse" />
                <span>CALL 16123 NOW</span>
              </a>
              <div className="text-center">
                <div className="text-sm text-white/80">Or download our app</div>
                <div className="flex space-x-2 mt-2">
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">📱 iOS</span>
                  <span className="text-xs bg-white/20 px-3 py-1 rounded-full">🤖 Android</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
