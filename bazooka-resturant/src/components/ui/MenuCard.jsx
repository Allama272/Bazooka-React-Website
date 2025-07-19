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
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ">
      <div className="relative flex items-center justify-center p-1">
        <img
          src={image}
          alt={name}
          className=" w-full object-cover px-2"
        />
        {spicyLevel && (
          <div className="absolute top-2 left-2 bg-bazooka-red text-white px-2 py-1 rounded-full text-xs font-bold">
            {spicyLevel}
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistToggle}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 ${
            wishlistAnimation ? 'scale-125' : 'scale-100'
          } ${
            isItemInWishlist
              ? 'bg-bazooka-red text-white'
              : 'bg-white text-gray-400 hover:text-bazooka-red'
          }`}
        >
          <Heart
            size={16}
            className={isItemInWishlist ? 'fill-current' : ''}
          />
        </button>

        {/* In Cart Indicator */}
        {isItemInCart && (
          <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
            <Check size={12} />
            <span>In Cart ({currentQuantity})</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-heading text-bazooka-charcoal">{name}</h3>
          <span className="text-2xl font-bold text-bazooka-orange">${price}</span>
        </div>

        <p className="text-gray-600 mb-4 text-sm">{description}</p>

        <div className="flex justify-between items-center">
          <span className="text-xs bg-bazooka-cream text-bazooka-charcoal px-3 py-1 rounded-full">
            {category}
          </span>

          {/* Dynamic Button Area */}
          {!isItemInCart ? (
            // Add to Cart Button (when item is not in cart)
            <button
              onClick={handleAddToCart}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                justAdded
                  ? 'bg-green-500 text-white'
                  : 'bg-bazooka-orange hover:bg-orange-600 text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check size={16} />
                  <span className="text-sm">Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={16} />
                  <span className="text-sm">Add to Cart</span>
                </>
              )}
            </button>
          ) : (
            // Quantity Controls (when item is in cart)
            <div className="flex items-center space-x-2">
              {/* Decrease/Remove Button */}
              <button
                onClick={handleDecrement}
                className="bg-gray-100 hover:bg-gray-200 text-bazooka-charcoal p-2 rounded-full transition-colors duration-300"
                title={currentQuantity === 1 ? 'Remove from cart' : 'Decrease quantity'}
              >
                <Minus size={14} />
              </button>

              {/* Quantity Display */}
              <span className="bg-bazooka-cream text-bazooka-charcoal px-3 py-2 rounded-full font-bold text-sm min-w-[40px] text-center">
                {currentQuantity}
              </span>

              {/* Increase Button */}
              <button
                onClick={handleIncrement}
                className="bg-bazooka-orange hover:bg-orange-600 text-white p-2 rounded-full transition-colors duration-300"
                title="Increase quantity"
              >
                <Plus size={14} />
              </button>

              {/* Remove All Button */}
              <button
                onClick={handleRemoveFromCart}
                className="bg-bazooka-red hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-300 ml-2"
                title="Remove all from cart"
              >
                <Trash2 size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Optional: Show item total when in cart */}
        {isItemInCart && (
          <div className="mt-3 pt-3 border-t border-gray-100">
            <div className="flex justify-between items-center text-sm">
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
