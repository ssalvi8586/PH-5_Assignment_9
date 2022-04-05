import React from "react";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [reviews, setReviews] = useReviews();

  const navigate = useNavigate();
  return (
    <div>
      <div className="grid grid-cols-1 gap-y-4 md:gap-4 justify-items-center items-center md:grid-cols-5 my-5 mx-8">
        <div className="col-span-3">
          <h3 className="text-3xl font-extrabold">Your next Macbook</h3>
          <h3 className="text-3xl font-extrabold  text-violet-700">
            Be the PRO
          </h3>
          <p className="mt-2">
            Choose the best laptop to get the best of youself.
          </p>
        </div>
        <div className="col-span-2">
          <img
            src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/mbp_top1.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex m-5 flex-col items-center">
        <h4 className="text-2xl text-center">
          Customer reviews({reviews.length})
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-10">
          {reviews.slice(0, 3).map((review) => (
            // console.log(review.id);
            <Review key={review.id} review={review} />
          ))}
        </div>
        <button
          onClick={() => navigate("/reviews")}
          className="rounded-full bg-violet-700 px-5 py-2 text-white w-min md:w-2/6"
        >
          See All Comments
        </button>
      </div>
    </div>
  );
};

export default Home;
