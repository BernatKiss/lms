import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Rating = ({ initialRating = 0, onRate = () => {} }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRating = (value) => {
    setRating(value);
    onRate?.(value);
  };

  useEffect(() => {
    if (initialRating !== null && initialRating !== undefined) {
      setRating(initialRating);
    }
  }, [initialRating]);

  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span
            key={index}
            className={`text-xl sm:text-2xl cursor-pointer transition-colors ${
              starValue <= rating ? "text-yellow-500" : "text-gray-400"
            }`}
            onClick={() => handleRating(starValue)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  initialRating: PropTypes.number,
  onRate: PropTypes.func,
};

export default Rating;
