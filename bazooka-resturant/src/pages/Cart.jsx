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
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-12">
              <ShoppingBag size={64} className="mx-auto text-gray-300 mb-6" />
              <h2 className="text-3xl font-heading text-bazooka-charcoal mb-4">
                Your Cart is Empty
              </h2>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any explosive dishes yet!
              </p>
              <Link 
                to="/menu" 
                className="btn-primary inline-flex items-center space-x-2"
              >
                <ArrowLeft size={20} />
                <span>Continue Shopping</span>
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
            Shopping Cart
          </h1>
          <Link 
            to="/menu" 
            className="text-bazooka-orange hover:text-orange-600 flex items-center space-x-2"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md">
              {/* Clear Cart Button */}
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-xl font-heading">Cart Items ({cartItems.length})</h2>
                <button 
                  onClick={clearCart}
                  className="text-bazooka-red hover:text-red-700 text-sm flex items-center space-x-1"
                >
                  <Trash2 size={16} />
                  <span>Clear Cart</span>
                </button>
              </div>

              {/* Cart Items List */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-4 flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <h3 className="font-heading text-lg text-bazooka-charcoal">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                      <p className="text-bazooka-orange font-bold">${item.price}</p>
                    </div>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="bg-gray-100 hover:bg-gray-200 text-bazooka-charcoal p-1 rounded-full"
                      >
                        <Minus size={16} />
                      </button>
                      
                      <span className="font-medium text-lg w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="bg-gray-100 hover:bg-gray-200 text-bazooka-charcoal p-1 rounded-full"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    {/* Item Total */}
                    <div className="text-right">
                      <p className="font-bold text-lg">
                        ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-bazooka-red hover:text-red-700 text-sm mt-1"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-heading text-bazooka-charcoal mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (8.5%)</span>
                  <span>${(cartTotal * 0.085).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Fee</span>
                  <span>$3.99</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-bazooka-orange">
                      ${(cartTotal + (cartTotal * 0.085) + 3.99).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="btn-primary w-full mb-3">
                Proceed to Checkout
              </button>
              
              <button className="btn-secondary w-full">
                Continue Shopping
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Free delivery on orders over $25!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
