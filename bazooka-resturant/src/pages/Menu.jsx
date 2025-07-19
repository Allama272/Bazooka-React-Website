import { useState } from 'react';
import MenuCard from '../components/ui/MenuCard';
import { menuData, categories } from '../data/menuData';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Get all dishes or filter by category
  const getFilteredDishes = () => {
    if (activeCategory === 'all') {
      return Object.values(menuData).flat();
    }
    return menuData[activeCategory] || [];
  };

  const filteredDishes = getFilteredDishes();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Menu Header */}
      <section className="bg-bazooka-charcoal text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading explosive-gradient bg-clip-text text-transparent mb-4">
            EXPLOSIVE MENU
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our arsenal of flavor-packed dishes that will blow your taste buds away
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white py-8 shadow-sm sticky top-12 lg:top-20 z-40">
        <div className="container mx-auto ">
          <div className="flex flex-wrap justify-center gap-2 lg:gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.key)}
                className={` px-3 lg:px-6 py-3 rounded-full font-semibold text-xs md:text-xl transition-all duration-300 ${
                  activeCategory === category.key
                    ? 'bg-bazooka-orange text-white shadow-lg'
                    : 'bg-gray-100 text-bazooka-charcoal hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredDishes.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDishes.map((dish) => (
                <MenuCard key={dish.id} dish={dish} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-500">No dishes found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 explosive-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading text-white mb-4">
            Ready to Order?
          </h2>
          <p className="text-xl text-white mb-8">
            Call us now or visit our restaurant for the ultimate explosive experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-bazooka-red hover:bg-gray-100">
              Call (555) 123-BOOM
            </button>
            <button className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-bazooka-orange">
              Get Directions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
