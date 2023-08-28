import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash, FaSave, FaArrowLeft } from 'react-icons/fa'; // Import FaArrowLeft

const CartItem = ({ item, onRemoveClick, onSaveLaterClick, onMoveBackToCart, showMoveBackToCart }) => {
  return (
    <div className="border p-2 m-2 flex items-center">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 mr-4"
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{item.name}</h2>
        <p className="text-gray-700">{item.description}</p>
        <p className="text-red-500 font-semibold">${item.price}</p>
      </div>
      <div className="flex flex-col">
        <div>
          <button
            onClick={() => onRemoveClick(item.id)}
            className="text-red-500 font-semibold hover:text-red-700"
          >
            <FaTrash className="inline-block" />
            Remove
          </button>
        </div>
        <div>
          {!showMoveBackToCart ? ( // Hide "Save Later" button if showMoveBackToCart is true
            <button
              onClick={() => onSaveLaterClick(item.id)}
              className="text-green-500 font-semibold hover:text-green-700"
            >
              <FaSave className="inline-block" />
              Save Later
            </button>
          ) : (
            <button
              onClick={() => onMoveBackToCart(item.id)}
              className="text-blue-500 font-semibold hover:text-blue-700"
            >
              <FaArrowLeft className="inline-block" /> {/* Add FaArrowLeft icon */}
              Back to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
  onSaveLaterClick: PropTypes.func.isRequired,
  onMoveBackToCart: PropTypes.func.isRequired,
  showMoveBackToCart: PropTypes.bool, // This prop is optional
};

export default CartItem;
