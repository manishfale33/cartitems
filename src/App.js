import React, { useState } from 'react';
import Cart from './components/Cart';
import Images from './assets/img/index';
function App() {
  const [darkMode, setDarkMode] = useState(false); // Initialize with light mode

  // Function to toggle between light and dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Product 1',
      description: 'Description of Product 1',
      price: 10.99,
      image: Images.blue, // Replace with the actual image source
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'Description of Product 2',
      price: 19.99,
      image: Images.red, // Replace with the actual image source
    },
    // Add more items as needed
  ]);

  const handleRemoveClick = (itemId) => {
    // Implement your remove item logic here
    // Update the cartItems state by removing the item with the provided itemId
  };

  return (
    <div className="App">
      <header className="App-header">
        <Cart cartItems={cartItems} onRemoveClick={handleRemoveClick} />
      </header>
    </div>
  );
}

export default App;
