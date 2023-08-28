import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';

const Cart = ({ cartItems, onRemoveClick, onSaveLaterClick, onMoveBackToCart, savedForLater }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [error, setError] = useState('');

  const handleApplyCoupon = () => {
    setError(''); // Clear any previous error message.

    // Your coupon validation logic goes here.
    // For demonstration, let's assume a valid coupon code is 'DISCOUNT20'.
    const validCouponCode = 'DISCOUNT20';

    if (couponCode === '') {
      setError('Please enter a coupon code.');
    } else if (couponCode === validCouponCode) {
      // Coupon is valid, apply it.
      setAppliedCoupon(couponCode);
      setCouponCode('');
      setError(''); // Clear any previous error message.
    } else {
      // Coupon is invalid, display an error message.
      setError('Invalid coupon code. Please try again.');
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
      <div className="flex flex-col lg:flex-row">
        <div className="flex-grow">
          <div className="mb-2 flex items-center">
            <hr className="flex-grow border-t" />
            <span className="mx-2 font-bold">{cartItems.length} Items</span>
            <hr className="flex-grow border-t" />
          </div>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemoveClick={onRemoveClick}
              onSaveLaterClick={onSaveLaterClick}
            />
          ))}
        </div>
        {savedForLater && savedForLater.length > 0 && (
          <div className="lg:ml-4">
            <h2 className="text-xl font-semibold mb-4">Saved for Later</h2>
            {savedForLater.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onMoveBackToCart={onMoveBackToCart}
                showMoveBackToCart
              />
            ))}
          </div>
        )}
        <div className="lg:ml-4">
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Total: ${totalPrice.toFixed(2)}</h2>
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
            <p className="text-green-500 mb-4">Applied Coupon: {appliedCoupon}</p>
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

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onSaveLaterClick: PropTypes.func.isRequired,
  onMoveBackToCart: PropTypes.func.isRequired,
  savedForLater: PropTypes.arrayOf(PropTypes.object).isRequired,
  couponCode: PropTypes.string.isRequired,
  onApplyCoupon: PropTypes.func.isRequired,
  appliedCoupon: PropTypes.string,
  error: PropTypes.string.isRequired,
};

export default Cart;
