import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import ServiceHomePage from "../../components/HomePage/ServiceHomePage";
import TechnologyHomePage from "../../components/HomePage/TechnologyHomePage";
import IndustriesHomePage from "../../components/HomePage/IndustriesHomePage";
import CustomerRelationHomePage from "../../components/HomePage/CustomerRelationHomePage";
import Footer from "../../components/Common/Component/Footer";
import ClientLogoPage from "./ClientLogoPage";
import { Random } from "react-animated-text";
import TypeWriter from "react-typewriter-effect";
import MovingComponent from "react-moving-text";
import Recommendations from "./Recommendations";
import { Link } from "react-router-dom";

const Hero = () => {
  {
    /* animation for buthhon logic start */
  }

  const AnimationsForChaining = ["swing"];
  const [animationIndex, setAnimationIndex] = useState(0);
  const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex + 1);
    setAnimationType([animationIndex + 1]);
  };
  {
    /* animation for buthhon logic end */
  }

  return (
    <>
      <Navbar />
      <div className="mx-auto w-full md:h-screen h-full py-16 px-4 bg-Hero bg-cover md:bg-top bg-center">
        {/* Content Section */}
        <div className="flex flex-col justify-center text-center items-center h-3/4 mx-auto">
          {/* Home Contet Animation start */}
          <p className="text-white text-center font-heading py-3 md:text-6xl text-xl md:w-[1000px] w-[400px] mb-8 md:mt-2 mt-24">
            {/* The Ideal Web and Mobile Solutions for your emerging business- You’re just one click away!! */}
            <span className="whitespace-nowrap text-white text-center font-heading py-3 md:text-5xl text-xl md:w-[1000px] w-[400px] mb-8 md:mt-2 mt-24">
              WE WORK FOR
              <TypeWriter
                textStyle={{
                  color: "#0F52BA",
                  fontSize: "1.5em",
                  textAlign: "center",
                }}
                startDelay={2000}
                cursorColor="#0F52BA"
                multiText={[
                  "INNOVATION ",
                  "PASSION ",
                  "SATISFACTION",
                  "INNOVATION ",
                  "PASSION ",
                  "SATISFACTION",
                  "INNOVATION ",
                  "PASSION ",
                  "SATISFACTION",
                  "INNOVATION ",
                  "PASSION ",
                  "SATISFACTION",
                  "INNOVATION ",
                  "PASSION ",
                  "SATISFACTION",
                ]}
                multiTextDelay={5000}
                typeSpeed={80}
              ></TypeWriter>
            </span>
          </p>
          {/* Home Contet Animation End */}

          {/* <p className="text-white font-heading md:text-lg text-sm mb-8 md:w-[730px] w-[350px] mt-36">
            Generating innovative ideas that convert the clicks into leads for
            your business - with the help of highly enthusiastic and creative
            tech-wizards.
          </p> */}

          {/* animation for buthhon start */}
          <MovingComponent
            onAnimationEnd={handleChainAnimation}
            type={animationType}
            duration="20000ms"
            // timing="linear"
            fillMode="forwards"
            iteration={100}
          >
            <Link to="/ContactUs">
            <button
              className="bg-Green rounded-full font-heading md:px-5 md:py-2 md:text-lg
              text-white uppercase px-3 py-1.5 text-xs mb-6 md:mt-10"
            >
              Click to Connect
            </button>
            </Link>
          </MovingComponent>
          {/* animation for buthhon end */}

          <p className="font-heading text-white md:text-base text-xs md:mt-3 mt-10">
            {/* <div style={exampleStyle}> */}
            <Random
              text="Let's collaborate to accelerate your
                business growth"
              effect="jump"
              effectChange={0.4}
              effectDuration={0.5}
            />

            {/* </div> */}
            {/* Let's collaborate to accelerate your business growth with us!! */}
          </p>
        </div>

        {/* Content Section Ends*/}

        {/* Testing Code */}

        {/* Testing Code Ends */}
      </div>
      <ServiceHomePage />
      <IndustriesHomePage />
      <CustomerRelationHomePage />
      <ClientLogoPage />
      <TechnologyHomePage />
      <Recommendations />
      <Footer />
    </>
  );
};

export default Hero;
