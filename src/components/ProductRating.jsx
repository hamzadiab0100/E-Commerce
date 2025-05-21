import React from 'react';
import { FaStar } from "react-icons/fa";

const ProductRating = ({ rating }) => {
  return (
    <div className="flex my-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <FaStar
          key={star}
          className={`
            text-xl mr-1
            ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}
          `}
        />
      ))}
    </div>
  );
};

export default ProductRating;
