import { Heart, ShoppingCart, Trash2, ArrowLeft } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
    // Optionally remove from wishlist after adding to cart
    // removeFromWishlist(item.id);
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-12">
              <Heart size={64} className="mx-auto text-gray-300 mb-6" />
              <h2 className="text-3xl font-heading text-bazooka-charcoal mb-4">
                Your Wishlist is Empty
              </h2>
              <p className="text-gray-600 mb-8">
                Save your favorite explosive dishes here for later!
              </p>
              <Link 
                to="/menu" 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>Explore Menu</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-heading text-bazooka-charcoal mb-4">
            My Wishlist
          </h1>
          <div className="flex justify-between items-center">
            <Link 
              to="/menu" 
              className="text-bazooka-orange hover:text-orange-600 flex items-center space-x-2"
            >
              <ArrowLeft size={20} />
              <span>Continue Shopping</span>
            </Link>
            
            <button 
              onClick={clearWishlist}
              className="text-bazooka-red hover:text-red-700 flex items-center space-x-2"
            >
              <Trash2 size={16} />
              <span>Clear Wishlist</span>
            </button>
          </div>
        </div>

        {/* Wishlist Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.spicyLevel && (
                  <div className="absolute top-2 left-2 bg-bazooka-red text-white px-2 py-1 rounded-full text-xs font-bold">
                    🌶️ {item.spicyLevel}
                  </div>
                )}
                
                {/* Remove from Wishlist */}
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className="absolute top-2 right-2 bg-bazooka-red text-white p-2 rounded-full hover:bg-red-700 transition-colors duration-300"
                >
                  <Trash2 size={16} />
                </button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-heading text-bazooka-charcoal">{item.name}</h3>
                  <span className="text-2xl font-bold text-bazooka-orange">${item.price}</span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-bazooka-cream text-bazooka-charcoal px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  
                  <button 
                    onClick={() => handleAddToCart(item)}
                    className="bg-bazooka-orange hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-heading text-bazooka-charcoal mb-4">
              Ready to Order?
            </h2>
            <p className="text-gray-600 mb-6">
              Add all your wishlist items to cart and enjoy an explosive feast!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  wishlistItems.forEach(item => addToCart(item));
                  alert('All wishlist items added to cart!');
                }}
                className="btn-primary"
              >
                Add All to Cart
              </button>
              <Link to="/cart" className="btn-secondary">
                View Cart
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
