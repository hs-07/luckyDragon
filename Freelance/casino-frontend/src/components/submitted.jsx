import React from "react";

import { Link } from "react-router-dom";

const Submitted = () => {
  return (
    <div className="min-h-screen flex items-center justify-center absolute w-full h-full inset-0 bg-primaryGradient">
      <div className="flex flex-col justify-center items-center text-white gap-2">
        <img
          src="/images/success.svg"
          alt="success"
          className=""
          width={100}
          height={100}
        />
        <span className="text-[26px]">Thank you for signing up !</span>
        <p className="max-w-[400px] text-center">
          Your spot is reserved, and we can’t wait to welcome you to the future
          of casino gaming.
        </p>
        <Link
          to={"/"}
          className="px-12 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-red-700 transition-colors mt-24"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
};

export default Submitted;
