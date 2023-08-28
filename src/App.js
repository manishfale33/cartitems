import React, { useState } from 'react';
import Cart from './components/Cart';
import Images from './assets/img/index';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [validCouponCodes, setValidCouponCodes] = useState(['DISCOUNT20', 'SUMMER25']);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [error, setError] = useState('');

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
      image: Images.blue,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      image: Images.red,
    },
  ]);

  const [savedForLater, setSavedForLater] = useState([]);

  const handleRemoveClick = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleSaveLaterClick = (itemId) => {
    const itemToSave = cartItems.find((item) => item.id === itemId);
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setSavedForLater([...savedForLater, itemToSave]);
    setCartItems(updatedCartItems);
  };

  const handleRemoveFromSaved = (itemId) => {
    const itemToRemove = savedForLater.find((item) => item.id === itemId);
    const updatedSavedForLater = savedForLater.filter((item) => item.id !== itemId);
    setCartItems([...cartItems, itemToRemove]);
    setSavedForLater(updatedSavedForLater);
  };

  const handleApplyCoupon = () => {
    setError(''); // Clear any previous error message.

    if (couponCode === '') {
      setError('Please enter a coupon code.');
    } else if (validCouponCodes.includes(couponCode)) {
      setAppliedCoupon(couponCode);
      setCouponCode('');
      setError('');
    } else {
      setError('Invalid coupon code. Please try again.');
    }
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="App-header">
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        <Cart
          cartItems={cartItems}
          savedForLater={savedForLater}
          onRemoveClick={handleRemoveClick}
          onSaveLaterClick={handleSaveLaterClick}
          onMoveBackToCart={handleRemoveFromSaved}
          couponCode={couponCode}
          onApplyCoupon={handleApplyCoupon}
          appliedCoupon={appliedCoupon}
          error={error}
        />
      </header>
    </div>
  );
}

export default App;
