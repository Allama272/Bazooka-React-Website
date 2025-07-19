import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-6 sm:p-12">
              <ShoppingBag size={48} className="sm:w-16 sm:h-16 mx-auto text-gray-300 mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl font-heading text-bazooka-charcoal mb-3 sm:mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Looks like you haven't added any explosive dishes yet!
              </p>
              <Link 
                to="/menu" 
                className="btn-primary inline-flex items-center space-x-2 text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
              >
                <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
                <span>Continue Shopping</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading text-bazooka-charcoal mb-3 sm:mb-4">
            Shopping Cart
          </h1>
          <Link 
            to="/menu" 
            className="text-bazooka-orange hover:text-orange-600 flex items-center space-x-2 text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {/* Clear Cart Button */}
              <div className="p-4 sm:p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg sm:text-xl font-heading">
                  Cart Items ({cartItems.length})
                </h2>
                <button 
                  onClick={clearCart}
                  className="text-bazooka-red hover:text-red-700 text-xs sm:text-sm flex items-center space-x-1 px-2 py-1 rounded hover:bg-red-50 transition-colors duration-200"
                >
                  <Trash2 size={14} className="sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Clear Cart</span>
                  <span className="sm:hidden">Clear</span>
                </button>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 sm:p-6">
                    {/* Mobile Layout */}
                    <div className="sm:hidden">
                      <div className="flex space-x-3 mb-3">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-base text-bazooka-charcoal truncate">
                            {item.name}
                          </h3>
                          <p className="text-gray-600 text-xs mb-1 line-clamp-2">{item.description}</p>
                          <p className="text-bazooka-orange font-bold text-sm">${item.price}</p>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3 bg-gray-50 rounded-full px-3 py-2">
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="bg-white hover:bg-gray-100 text-bazooka-charcoal p-2 rounded-full shadow-sm transition-all duration-200"
                          >
                            <Minus size={14} />
                          </button>
                          
                          <span className="font-medium text-base w-8 text-center">
                            {item.quantity}
                          </span>
                          
                          <button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="bg-white hover:bg-gray-100 text-bazooka-charcoal p-2 rounded-full shadow-sm transition-all duration-200"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        {/* Item Total & Remove */}
                        <div className="text-right">
                          <p className="font-bold text-base mb-1">
                            ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                          </p>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-bazooka-red hover:text-red-700 text-xs px-2 py-1 rounded hover:bg-red-50 transition-colors duration-200"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden sm:flex items-center space-x-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 lg:w-24 lg:h-24 object-cover rounded-lg flex-shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading text-lg lg:text-xl text-bazooka-charcoal">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm lg:text-base mb-2 line-clamp-2">{item.description}</p>
                        <p className="text-bazooka-orange font-bold text-base lg:text-lg">${item.price}</p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="bg-gray-100 hover:bg-gray-200 text-bazooka-charcoal p-2 rounded-full transition-all duration-200"
                        >
                          <Minus size={16} />
                        </button>
                        
                        <span className="font-medium text-lg w-8 text-center">
                          {item.quantity}
                        </span>
                        
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="bg-gray-100 hover:bg-gray-200 text-bazooka-charcoal p-2 rounded-full transition-all duration-200"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-right">
                        <p className="font-bold text-lg lg:text-xl">
                          ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-bazooka-red hover:text-red-700 text-sm mt-1 px-2 py-1 rounded hover:bg-red-50 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 lg:sticky lg:top-24">
              <h2 className="text-lg sm:text-xl font-heading text-bazooka-charcoal mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Tax (8.5%)</span>
                  <span>${(cartTotal * 0.085).toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Delivery Fee</span>
                  <span>$3.99</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-base sm:text-lg">
                    <span>Total</span>
                    <span className="text-bazooka-orange">
                      ${(cartTotal + (cartTotal * 0.085) + 3.99).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full mb-3 text-sm sm:text-base py-3 sm:py-4">
                Proceed to Checkout
              </button>
              
              <Link to="/menu" className="btn-secondary w-full block text-center text-sm sm:text-base py-3 sm:py-4">
                Continue Shopping
              </Link>
              
              <div className="mt-4 text-center text-xs sm:text-sm text-gray-600">
                <p>🚚 Free delivery on orders over 250 EGP!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
