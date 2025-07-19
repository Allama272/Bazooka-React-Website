import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const handleOrderNow = () => {
    navigate('/menu');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: 'url("https://i.ibb.co/b5xkLKjJ/s-173809763391592.jpg")',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-bazooka-red/40 to-orange-600/60" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-bazooka-orange/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-bazooka-red/30 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        {/* Main Title with Enhanced Animation */}
        <div className="mb-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-wider mb-4 transform transition-all duration-1000">
            <span className="inline-block bg-gradient-to-r from-bazooka-orange via-yellow-400 to-bazooka-red bg-clip-text text-transparent animate-pulse">
              BAZ
            </span>
            <span className="inline-block bg-gradient-to-r from-bazooka-red via-orange-500 to-bazooka-orange bg-clip-text text-transparent animate-pulse delay-300">
              OOK
            </span>
            <span className="inline-block bg-gradient-to-r from-yellow-400 via-bazooka-orange to-bazooka-red bg-clip-text text-transparent animate-pulse delay-600">
              A
            </span>
          </h1>

          <div className="inline-flex items-center px-4 py-2 bg-bazooka-orange/90 rounded-full text-black font-bold text-sm md:text-base mb-6 animate-bounce">
            💥 EXPLOSIVE TASTE EXPERIENCE 💥
          </div>
        </div>

        <p className="text-2xl md:text-4xl mb-12 font-bold tracking-wide leading-relaxed drop-shadow-lg">
          <span className="bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
            FLAVORS THAT WILL BLOW YOUR MIND
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
          <button
            className="group relative px-8 py-4 bg-gradient-to-r from-bazooka-orange to-bazooka-red text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-bazooka-orange/50 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3"
            aria-label="Order food from Bazooka Restaurant now" onClick={handleOrderNow}
          >
            <span>🚀 ORDER NOW</span>
            <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/50 hover:bg-white/30 hover:border-white transition-all duration-300"
            aria-label="View Bazooka Restaurant menu" onClick={handleOrderNow}
          >
            📋 VIEW MENU
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/80 text-sm md:text-base">
          <div className="flex items-center space-x-2">
            <span className="text-bazooka-orange">⭐</span>
            <span>Award Winning</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">🚚</span>
            <span>Fast Delivery</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-red-400">❤️</span>
            <span>Customer Favorite</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
