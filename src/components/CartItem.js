import React from 'react';
import { FaTrash, FaSave } from 'react-icons/fa'; // Import the trash and save icons

const CartItem = ({ item, onRemoveClick, onSaveLaterClick }) => {
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
      <div className="flex flex-col"> {/* Wrap buttons in a flex container */}
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
          <button
            onClick={() => onSaveLaterClick(item.id)}
            className="text-green-500 font-semibold hover:text-green-700"
          >
            <FaSave className="inline-block" />
            Save Later
          </button>
        </div>
      </div>
      {/* Add any additional elements for promotions and coupon code */}
    </div>
  );
};

export default CartItem;
