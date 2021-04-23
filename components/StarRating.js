import React, { useState } from 'react'
import StarRatings from 'react-star-ratings';

const StarRating = () => {
  const [rating, setRating] = useState(3)
  const changeRating = (newRating, name) => {
    setRating(newRating)
  }

  return (
    <div className="flex items-end">
      <StarRatings
        rating={rating}
        starRatedColor="#ec9e1f"
        starDimension="15px"
        starSpacing="3px"
        changeRating={changeRating}
        numberOfStars={5}
        name='rating'
      />
      <span className="text-sm ml-2">{rating}</span>
      <span className="text-sm ml-4">89 reviews</span>
    </div>
  )
}

export default StarRating