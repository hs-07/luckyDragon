import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "../components/form";
import Submitted from "../components/submitted";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return isSubmitted ? (
    <Submitted />
  ) : (
    <div className="min-h-screen h-full bg-primaryGradient w-full flex md:items-center md:px-6">
      <div className="flex w-full justify-start md:justify-center md:items-center flex-col md:flex-row">
        <div className="w-full flex md:hidden flex-col items-start px-6 text-white">
          <div className="flex gap-4 items-center text-[24px] mb-8 mt-4">
            <Link to={"/"}>
              <img src="/images/back.svg" alt="back" className="" />
            </Link>
            <span className="">Claim bonus</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[24px]">To claim bonus</span>
            <p className="">
              Please fill out the form below and secure your place in our
              exclusive beta access:
            </p>
          </div>
        </div>
        <div className="w-1/2 text-white hidden md:flex flex-col ">
          <span className="text-[36px] md:text-[80px] leading-[80px]">
            Claim bonus now
          </span>
          <p className="text-[32px]">
            Please fill out the form below and secure your place in our
            exclusive beta access:
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <Form setIsSubmitted={setIsSubmitted} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
