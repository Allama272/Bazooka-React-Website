import { Users, Award, Clock, Heart, Zap, MapPin } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "25K+", label: "Happy Customers" },
    { icon: <Award className="w-8 h-8" />, number: "4.8★", label: "Customer Rating" },
    { icon: <Clock className="w-8 h-8" />, number: "15min", label: "Average Delivery" },
    { icon: <Heart className="w-8 h-8" />, number: "100%", label: "Fresh Daily" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://i.ibb.co/b5xkLKjJ/s-173809763391592.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-bazooka-red/40 to-orange-600/60" />
        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-6xl font-heading explosive-gradient bg-clip-text text-transparent mb-4">
              Our Crispy Story
            </h1>
            <p className="text-xl max-w-2xl">
              Delivering explosive flavors across Egypt, one crispy bite at a time
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-heading text-bazooka-charcoal mb-6">
                The Bazooka Revolution
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Bazooka Restaurant started as a bold vision to revolutionize fried chicken 
                in Egypt. We believed that crispy, golden perfection shouldn't be ordinary—
                it should be an explosive experience that ignites all your senses.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From our signature **Fire Super Bazooka Sandwich** to our legendary 
                **Family Meals** that bring people together, every recipe has been 
                crafted to deliver maximum flavor impact. Our secret? Premium ingredients, 
                explosive spice blends, and cooking techniques that create the perfect crunch.
              </p>
              <p className="text-lg text-gray-600">
                Today, Bazooka stands as Egypt's destination for **explosive fried chicken**, 
                where every meal is a celebration and every bite delivers the boom you crave.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://i.ibb.co/qFrhn8LV/s-1738097500692438.jpg"
                alt="Bazooka chicken strips"
                className="rounded-lg shadow-lg"
              />
              <img 
                src="https://i.ibb.co/35Y0SYDY/s-1738097978863110.jpg"
                alt="Bazooka rice bowl"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 explosive-gradient">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-heading mb-2">{stat.number}</div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-bazooka-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-heading text-bazooka-charcoal mb-8">
              Our Explosive Mission
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              "To create the crispiest, most flavorful fried chicken experience in Egypt. 
              We're committed to bringing families together through explosive taste, 
              premium quality, and service that makes every customer feel like family."
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-bazooka-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading mb-2">Explosive Flavor</h3>
                <p className="text-gray-600">Bold spices and secret recipes that create unforgettable taste</p>
              </div>
              <div className="text-center">
                <div className="bg-bazooka-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading mb-2">Crispy Perfection</h3>
                <p className="text-gray-600">Golden, crunchy coating that delivers the perfect bite every time</p>
              </div>
              <div className="text-center">
                <div className="bg-bazooka-orange text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading mb-2">Family Love</h3>
                <p className="text-gray-600">Bringing Egyptian families together through shared explosive meals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-heading text-bazooka-charcoal mb-4">
              Our Explosive Signature Dishes
            </h2>
            <p className="text-xl text-gray-600">
              The legendary creations that made Bazooka famous across Egypt
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-bazooka-cream p-6 rounded-lg">
              <img 
                src="https://i.ibb.co/b5xkLKjJ/s-173809763391592.jpg"
                alt="Bazooka Crispy Chicken"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-heading mb-2">Crispy Chicken Perfection</h3>
              <p className="text-bazooka-orange mb-2">Our Signature Recipe</p>
              <p className="text-gray-600">Golden, crispy coating with tender, juicy chicken inside</p>
            </div>
            <div className="text-center bg-bazooka-cream p-6 rounded-lg">
              <img 
                src="https://i.ibb.co/CNt8Y8c/s-1745150752564953.jpg"
                alt="Fire Super Bazooka Sandwich"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-heading mb-2">Fire Super Bazooka</h3>
              <p className="text-bazooka-orange mb-2">Most Popular Sandwich</p>
              <p className="text-gray-600">Spicy strips, turkey, cheese, and our explosive chili sauce</p>
            </div>
            <div className="text-center bg-bazooka-cream p-6 rounded-lg">
              <img 
                src="https://i.ibb.co/35Y0SYDY/s-1738097978863110.jpg"
                alt="Bazooka Family Meal"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-heading mb-2">Family Feast</h3>
              <p className="text-bazooka-orange mb-2">Perfect for Sharing</p>
              <p className="text-gray-600">Complete meals that bring Egyptian families together</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Service Section */}
      <section className="py-20 explosive-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="flex justify-center mb-6">
              <MapPin className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-4xl font-heading mb-6">
              Serving Egypt with Explosive Flavors
            </h2>
            <p className="text-xl mb-8">
              From our kitchen to your table, we deliver the Bazooka experience 
              across Egypt with the same crispy perfection and explosive taste.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-heading mb-4">🚚 Fast Delivery</h3>
                <p>Hot, crispy chicken delivered straight to your door in record time</p>
              </div>
              <div>
                <h3 className="text-2xl font-heading mb-4">📱 Easy Ordering</h3>
                <p>Order your explosive favorites with just a few taps</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
