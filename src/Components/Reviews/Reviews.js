import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
