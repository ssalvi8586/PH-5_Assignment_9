import React from "react";

const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-y-4 md:gap-4 justify-items-center items-center md:grid-cols-5 my-5 mx-8">
      <div className="col-span-3">
        <h3 className="text-3xl font-extrabold">Your next Macbook</h3>
        <h3 className="text-3xl font-extrabold  text-violet-700">Be the PRO</h3>
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
  );
};

export default Home;
