import React from "react";

const Review = (props) => {
  const { username, comment, ratings } = props.review;

  return (
    <div className="shadow-lg p-3 rounded-lg">
      <span className="font-bold">Name: </span>
      {username} <br />
      <span className="font-bold">Comment: </span>
      {comment} <br />
      <span className="font-bold">Ratings: </span>
      {ratings}
    </div>
  );
};

export default Review;
