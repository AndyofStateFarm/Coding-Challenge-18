import React, { useState } from 'react';

function RateMovieButton() {
  const [rating, setRating] = useState(0);
  const [isRated, setIsRated] = useState(false);

  const handleRating = (stars) => {
    setRating(stars);
    setIsRated(true);
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <span key={star} onClick={() => handleRating(star)}>
          {star <= rating ? '★' : '☆'}
        </span>
      ))}
      {isRated && <p>Thank you for your rating!</p>}
    </div>
  );
}

export default RateMovieButton;