import { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

// Action types
const WISHLIST_ACTIONS = {
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  CLEAR_WISHLIST: 'CLEAR_WISHLIST',
  LOAD_WISHLIST: 'LOAD_WISHLIST'
};

// Wishlist reducer
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case WISHLIST_ACTIONS.ADD_TO_WISHLIST:
      if (state.find(item => item.id === action.payload.id)) {
        return state; // Item already in wishlist
      }
      return [...state, action.payload];
    
    case WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST:
      return state.filter(item => item.id !== action.payload);
    
    case WISHLIST_ACTIONS.CLEAR_WISHLIST:
      return [];
    
    case WISHLIST_ACTIONS.LOAD_WISHLIST:
      return action.payload;
    
    default:
      return state;
  }
};

// Wishlist Provider Component
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, dispatch] = useReducer(wishlistReducer, []);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const savedWishlist = localStorage.getItem('bazooka-wishlist');
    if (savedWishlist) {
      try {
        const parsedWishlist = JSON.parse(savedWishlist);
        dispatch({ type: WISHLIST_ACTIONS.LOAD_WISHLIST, payload: parsedWishlist });
      } catch (error) {
        console.error('Error loading wishlist from localStorage:', error);
      }
    }
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('bazooka-wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  // Wishlist functions
  const addToWishlist = (item) => {
    dispatch({ type: WISHLIST_ACTIONS.ADD_TO_WISHLIST, payload: item });
  };

  const removeFromWishlist = (itemId) => {
    dispatch({ type: WISHLIST_ACTIONS.REMOVE_FROM_WISHLIST, payload: itemId });
  };

  const clearWishlist = () => {
    dispatch({ type: WISHLIST_ACTIONS.CLEAR_WISHLIST });
  };

  const isInWishlist = (itemId) => {
    return wishlistItems.some(item => item.id === itemId);
  };

  // Computed values
  const wishlistCount = wishlistItems.length;

  const value = {
    wishlistItems,
    wishlistCount,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
