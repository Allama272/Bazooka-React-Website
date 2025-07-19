import Hero from '../components/ui/Hero';
import { ChefHat, Clock, Award, Heart } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <ChefHat className="w-14 h-14 text-bazooka-orange animate-pulse" aria-hidden="true" />, 
      title: "Explosive Flavors",
      description: "Bold combinations that will blow your taste buds away"
    },
    {
      icon: <Clock className="w-14 h-14 text-bazooka-orange animate-pulse delay-150" aria-hidden="true" />, 
      title: "Fast Service",
      description: "Quick delivery without compromising on quality"
    },
    {
      icon: <Award className="w-14 h-14 text-bazooka-orange animate-pulse delay-300" aria-hidden="true" />, 
      title: "Award Winning",
      description: "Recognized for excellence in comfort food"
    },
    {
      icon: <Heart className="w-14 h-14 text-bazooka-orange animate-pulse delay-450" aria-hidden="true" />, 
      title: "Made with Love",
      description: "Every dish crafted with passion and care"
    }
  ];

  return (
    <main className="min-h-screen">
      <Hero />

      {/* Features Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <header className="text-center mb-20 max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-bazooka-charcoal leading-tight">
              Why Choose Bazooka?
            </h2>
            <p className="mt-6 text-2xl text-bazooka-dark-gray">
              We don't just serve food, we create explosive experiences that keep you coming back for more.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <article
                key={index}
                className="bg-white bg-opacity-90 p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 cursor-default"
                aria-label={`${feature.title} feature`}
              >
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-bazooka-charcoal mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-center text-bazooka-dark-gray text-lg">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 bg-gradient-to-r from-bazooka-red to-orange-600 text-white text-center"
        aria-labelledby="cta-heading"
      >
        <div className="container mx-auto px-6 max-w-3xl">
          <h2
            id="cta-heading"
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
          >
            Ready to Experience the Explosion?
          </h2>
          <p className="text-xl md:text-2xl mb-10 drop-shadow-md">
            Order now and taste the difference that makes us legendary.
          </p>
          <button
            className="inline-block px-12 py-4 font-bold text-bazooka-red bg-white rounded-full shadow-lg hover:shadow-2xl hover:bg-yellow-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-opacity-75"
            aria-label="Order now from Bazooka Restaurant"
          >
            Order Now
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
