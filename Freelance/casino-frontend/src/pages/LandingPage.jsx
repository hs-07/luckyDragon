import React from "react";

import { gameImages, games, CardItems } from "../utils/constants";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="h-full w-full flex flex-col bg-black">
      {/* Hero Section */}
      <div className="mb-28">
        <div className="md:absolute top-0 left-0 w-full flex justify-between items-center md:p-8 z-20">
          <span className="text-white text-xl md:text-2xl font-bold">
            LuckyDragon
          </span>
          <Link
            to={"/contact"}
            className="px-6 py-2 rounded-full bg-transparent text-white border border-white hover:bg-white hover:text-black transition-colors"
          >
            Join now
          </Link>
        </div>
        <img
          src="/images/hero.svg"
          alt="hero"
          className="w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4 md:-mt-32">
          <h1 className="text-white text-[34px] md:text-[96px] leading-[34px] md:leading-[96px] font-bold mb-6 whitespace-nowrap">
            Don't miss out claim
            <br />
            your 500 bonus now !
          </h1>
          <Link
            to={"/contact"}
            className="px-12 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Claim now
          </Link>
        </div>
      </div>

      {/* Section-2 */}
      <div className="mb-20">
        <div className="flex justify-start md:justify-center gap-4 md:gap-6 mb-16 w-full overflow-x-auto px-4">
          {games.map((value, index) => (
            <div
              className="border flex items-center border-secondary whitespace-nowrap shrink-0 rounded-full px-10 py-2 text-secondary md:text-lg active:bg-primary hover:bg-primary hover:text-white hover:border-primary"
              key={index}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="flex justify-start md:justify-center gap-4 md:gap-6 w-full overflow-x-auto px-4">
          {gameImages.map((item, index) => (
            <img
              src={item}
              alt="game-img"
              className="rounded-2xl"
              key={index}
            />
          ))}
        </div>
      </div>

      {/* Section-3 */}
      <div className="mb-20">
        <div className="w-full flex justify-center mb-16">
          <span className="text-white md:text-[96px] text-[34px] font-[600] text-center ">
            What’s in it for you?
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 gap-6 md:gap-8">
          {CardItems.map((item, index) => (
            <div
              className="bg-gradient-to-b from-[#211E1E] to-[#381A1C] rounded-3xl p-6 border border-[#4A2E2A] flex flex-col gap-4"
              key={index}
            >
              <span className="text-[26px] md:text-[50px] text-white md:leading-[50px]">
                {item.title}
              </span>
              <p className="text-[16px] md:text-[24px] text-[#888888]">
                {item.description}
              </p>
              <div className="w-full flex justify-center">
                <img src={item.src} alt="alt-img" className="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section-4 */}
      <div className="mb-20">
        <div className="w-full flex justify-center items-center mb-16 flex-col gap-8 px-4">
          <span className="text-white md:text-[96px] text-[34px] font-[600] text-center leading-[34px] md:leading-[96px]">
            Our casino gaming platform is launching soon
          </span>
          <p className="text-[16px] md:text-[24px] text-[#888888] text-center max-w-[1200px]">
            We're inviting exclusive players to join the beta before the
            official release. Get in early, and enjoy all the action before
            anyone else!
          </p>
          <Link
            to={"/contact"}
            className="px-12 py-3 bg-primary text-white rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Claim now
          </Link>
        </div>
      </div>

      {/* Footer  */}
      <div className="w-full justify-center items-center py-4 bg-primary flex">
        <span className="text-white">©Lucky dragon 2024</span>
      </div>
    </div>
  );
};

export default LandingPage;
