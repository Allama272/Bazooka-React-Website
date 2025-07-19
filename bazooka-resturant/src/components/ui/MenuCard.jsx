import { Plus, Heart, ShoppingCart, Check, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useState } from 'react';
import toast from 'react-hot-toast';

const MenuCard = ({ dish }) => {
  const { name, description, price, image, category, spicyLevel } = dish;
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const [justAdded, setJustAdded] = useState(false);
  const [wishlistAnimation, setWishlistAnimation] = useState(false);

  const isItemInCart = cartItems.some(item => item.id === dish.id);
  const isItemInWishlist = isInWishlist(dish.id);
  
  // Get the current quantity of this item in cart
  const cartItem = cartItems.find(item => item.id === dish.id);
  const currentQuantity = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(dish);
    toast.success(`${dish.name} added to cart! 🔥`);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  const handleIncrement = () => {
    updateQuantity(dish.id, currentQuantity + 1);
    toast.success(`Increased ${dish.name} quantity to ${currentQuantity + 1}`);
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      updateQuantity(dish.id, currentQuantity - 1);
      toast.success(`Decreased ${dish.name} quantity to ${currentQuantity - 1}`);
    } else {
      removeFromCart(dish.id);
      toast.success(`${dish.name} removed from cart`);
    }
  };

  const handleRemoveFromCart = () => {
    removeFromCart(dish.id);
    toast.success(`${dish.name} removed from cart`);
  };

  const handleWishlistToggle = () => {
    if (isItemInWishlist) {
      removeFromWishlist(dish.id);
      toast.success(`Removed from wishlist`);
    } else {
      addToWishlist(dish);
      toast.success(`${dish.name} added to wishlist! ❤️`);
    }
    setWishlistAnimation(true);
    setTimeout(() => setWishlistAnimation(false), 300);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative flex items-center justify-center p-1">
        <img
          src={image}
          alt={name}
          className="w-full h-32 sm:h-40 md:h-48 object-cover px-1 sm:px-2"
        />
        {spicyLevel && (
          <div className="absolute top-1 sm:top-2 left-1 sm:left-2 bg-bazooka-red text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold">
            {spicyLevel}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-1 sm:top-2 right-1 sm:right-2 p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
            wishlistAnimation ? 'scale-125' : 'scale-100'
          } ${
            isItemInWishlist
              ? 'bg-bazooka-red text-white'
              : 'bg-white text-gray-400 hover:text-bazooka-red'
          }`}
        >
          <Heart
            size={14}
            className={`sm:w-4 sm:h-4 ${isItemInWishlist ? 'fill-current' : ''}`}
          />
        </button>

        {/* In Cart Indicator */}
        {isItemInCart && (
          <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 bg-green-500 text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Check size={10} className="sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">In Cart ({currentQuantity})</span>
            <span className="sm:hidden">({currentQuantity})</span>
          </div>
        )}
      </div>

      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-base sm:text-lg md:text-xl font-heading text-bazooka-charcoal leading-tight flex-1 pr-2">
            {name}
          </h3>
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-bazooka-orange flex-shrink-0">
            ${price}
          </span>
        </div>

        <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-2">
          {description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-xs bg-bazooka-cream text-bazooka-charcoal px-2 sm:px-3 py-1 rounded-full">
            {category}
          </span>

          {/* Dynamic Button Area */}
          {!isItemInCart ? (
            // Add to Cart Button (when item is not in cart)
            <button
              onClick={handleAddToCart}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 text-xs sm:text-sm ${
                justAdded
                  ? 'bg-green-500 text-white'
                  : 'bg-bazooka-orange hover:bg-orange-600 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check size={14} className="sm:w-4 sm:h-4" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Add to Cart</span>
                  <span className="sm:hidden">Add</span>
                </>
              )}
            </button>
          ) : (
            // Quantity Controls (when item is in cart)
            <div className="flex items-center space-x-1 sm:space-x-2">
              {/* Decrease/Remove Button */}
              <button
                onClick={handleDecrement}
                className="bg-gray-100 hover:bg-gray-200 text-bazooka-charcoal p-1.5 sm:p-2 rounded-full transition-colors duration-300"
                title={currentQuantity === 1 ? 'Remove from cart' : 'Decrease quantity'}
              >
                <Minus size={12} className="sm:w-3.5 sm:h-3.5" />
              </button>

              {/* Quantity Display */}
              <span className="bg-bazooka-cream text-bazooka-charcoal px-2 sm:px-3 py-1 sm:py-2 rounded-full font-bold text-xs sm:text-sm min-w-[32px] sm:min-w-[40px] text-center">
                {currentQuantity}
              </span>

              {/* Increase Button */}
              <button
                onClick={handleIncrement}
                className="bg-bazooka-orange hover:bg-orange-600 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-300"
                title="Increase quantity"
              >
                <Plus size={12} className="sm:w-3.5 sm:h-3.5" />
              </button>

              {/* Remove All Button */}
              <button
                onClick={handleRemoveFromCart}
                className="bg-bazooka-red hover:bg-red-700 text-white p-1.5 sm:p-2 rounded-full transition-colors duration-300 ml-1 sm:ml-2"
                title="Remove all from cart"
              >
                <Trash2 size={12} className="sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Optional: Show item total when in cart */}
        {isItemInCart && (
          <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-gray-100">
            <div className="flex justify-between items-center text-xs sm:text-sm">
              <span className="text-gray-600">Item total:</span>
              <span className="font-bold text-bazooka-orange">
                ${(parseFloat(price) * currentQuantity).toFixed(2)}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCard;
