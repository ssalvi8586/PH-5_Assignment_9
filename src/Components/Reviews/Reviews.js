import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useReviews();
  //   console.log(reviews);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
      {reviews.map((review) => (
        // console.log(review.id);
        <Review review={review} />
      ))}
    </div>
  );
};

export default Reviews;