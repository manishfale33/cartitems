import React, { useState } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemoveClick }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const handleApplyCoupon = () => {
    // Add your coupon code validation and application logic here
    // For demonstration, we'll just set it as applied
    setAppliedCoupon(couponCode);
    setCouponCode('');
  };

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      {/* Shopping Cart Heading */}
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>

      {/* Cart Items and Total */}
      <div className="flex flex-col lg:flex-row">
        {/* Cart Items */}
        <div className="flex-grow">
          <div className="mb-2 flex items-center">
            <hr className="flex-grow border-t" />
            <span className="mx-2 font-bold">{cartItems.length} Items</span>
            <hr className="flex-grow border-t" />
          </div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemoveClick={onRemoveClick} />
          ))}
        </div>

        {/* Total and Coupon */}
        <div className="lg:ml-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
            {/* Add margin below the Total */}
            <div className="mb-2"></div>
            <h2 className="text-xl font-semibold">Coupon Code</h2>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border rounded px-2 py-1 mr-2 w-48 focus:ring focus:ring-blue-300 transition duration-300"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Apply
              </button>
            </div>
          </div>

          {appliedCoupon && (
            <p className="text-green-500 mb-4">
              Applied Coupon: {appliedCoupon}
            </p>
          )}

          <div className="mb-2"></div>

          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
