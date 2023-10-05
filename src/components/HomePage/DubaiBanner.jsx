import React from "react";
import Slide from "react-reveal/Slide";
import {Link} from "react-router-dom";
const DubaiBanner = () => {
  return (
    <div>
      <Link to="http://gitex.cerbosys.com" target="_blank">
        <Slide top duration={4000}>
          <div className="mx-auto w-full md:h-[20rem] lg:block hidden h-40  px-4 bg-banner bg-cover bg-no-repeat  bg-center"></div>
        </Slide>
        <Slide top duration={4000}>
          <div className="mx-auto w-full md:h-[25rem] lg:hidden block  h-40 py-5 px-4 bg-banner bg-contain bg-no-repeat  bg-center"></div>
        </Slide>
      </Link>
    </div>
  );
};

export default DubaiBanner;
