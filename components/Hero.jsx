import React from "react";
import Image from "next/image";
import Logo from "../public/logo-vam.png";

export const Hero = ({ heading, message }) => {
  return (
    <div className="flex items-center justify-center h-screen  bg-fixed bg-center bg-cover">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <video src="/video1.mp4" autoPlay muted loop className="absolute" />
      <div className="items-center mt-[-20px] text-white/95 z-[2] ">
        <h2 className="text-center md:text-[80px] sm:text-[80px] text-[40px] px-4 font-bold mx-auto">
          {heading}
        </h2>
        <p className="py-2 text-xl mt-[-5px] text-center mx-auto px-4">
          {message}
        </p>
        <div className="py-4 text-center mx-auto">
          <button
            className="items-center rounded-full px-4 py-2 border border-white font-semibold  hover:bg-white hover:text-black"
            type="button"
          >
            Explore Now
          </button>
        </div>
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 0,
            pointerEvents: "none",
            width: "100%",
            height: "100%",
          }}
        >
          <div className="class" style={{ position: "absolute" }}>
            <Image src={Logo} alt="/" width={200} height={200} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
