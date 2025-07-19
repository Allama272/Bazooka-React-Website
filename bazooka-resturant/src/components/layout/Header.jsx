import { useState } from 'react';
import { Menu, X, ShoppingCart, Heart } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOrderNow = () => {
    navigate('/menu');
  };

  return (
    <header className="bg-bazooka-charcoal shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-3xl font-heading text-white">
            <img 
              src="/images/logo.png" 
              alt="Bazooka Restaurant" 
              className="h-8 lg:h-14 w-auto" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-xl">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white hover:text-bazooka-orange transition-colors duration-300 font-semibold ${
                  location.pathname === item.path ? 'text-bazooka-orange' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Cart & Wishlist Icons + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Wishlist Icon */}
            <Link 
              to="/wishlist" 
              className="relative text-white hover:text-bazooka-orange transition-colors duration-300"
            >
              <Heart size={24} />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-bazooka-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Icon */}
            <Link 
              to="/cart" 
              className="relative text-white hover:text-bazooka-orange transition-colors duration-300"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-bazooka-red text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className="btn-primary" onClick={handleOrderNow}>
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-white hover:text-bazooka-orange transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-bazooka-orange' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Cart & Wishlist */}
              <div className="flex space-x-4 pt-2">
                <Link 
                  to="/wishlist" 
                  className="flex items-center space-x-2 text-white hover:text-bazooka-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Heart size={20} />
                  <span>Wishlist ({wishlistCount})</span>
                </Link>
                
                <Link 
                  to="/cart" 
                  className="flex items-center space-x-2 text-white hover:text-bazooka-orange"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <ShoppingCart size={20} />
                  <span>Cart ({cartCount})</span>
                </Link>
              </div>
              
              <button 
                className="btn-primary text-left" 
                onClick={() => { setIsMenuOpen(false); handleOrderNow(); }}
              >
                Order Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
