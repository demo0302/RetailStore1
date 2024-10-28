import { FC } from "react";
import { Link } from "react-router-dom";

const HeroSection: FC = () => {
  return (
    <div className="bg-[#b3edf9] dark:bg-slate-600 font-lora">
      <div className="container px-4 grid md:grid-cols-2 py-8 mx-auto">
        <div className="flex items-center">
          <div className="max-w-[450px] space-y-4">
            <p className="text-black dark:text-white">
               <span className="font-bold"></span>
            </p>
            <div className="text-black font-bold text-4xl md:text-5xl dark:text-white">
              Databse  Open Ended Project 
            </div>
            <div>Made by -: Raj Nandini Singh and Saubhagya Singh</div>
            <Link
              to="/product/6"
              data-test="hero-btn"
              className="inline-block bg-white rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
