import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../../Common/Component/Footer";
import Navbar from "../../../Navbar/Navbar";
import Teambody from "./Teambody";
import TeamForm from "./TeamForm";

const Team = () => {
  return (
    <div>
      <>


      <Helmet>
          <title>
           Meet Our Team |Cerbosys
          </title>
          <meta
            name="description"
            content="Cerbosys’s progressive growth is defined by a zealous and committed leadership team of intellectual leaders. Explore their experience, expertise, and responsibilities. "
          />
        </Helmet>
        {/* <Navbar /> */}
        <div className="mx-auto w-full md:h-[48rem] bg-TeamCerbosys h-96 py-12 px-4 bg-cover md:bg-top bg-center">
          {/* Content Section */}
          <div className="flex flex-col justify-center text-center items-center md:h-[30rem] h-96 mx-auto">
            <h1 className="text-white font-heading py-2 md:text-7xl text-2xl md:mb-48 mb-28">
              Meet Our Team
            </h1>

            {/* <p className="text-Primary font-heading py-2 md:text-lg text-xs md:w-[480px] text-justify mt-36">
              We have a team of young, dynamic, well versed and talented
              individuals who are committed to delivering value to our clients.
              We understand that the success of any business is directly related
              to customer satisfaction.
            </p> */}
          </div>
          {/* Content Section Ends */}
        </div>
      </>
      <Teambody />
      <TeamForm />
      {/* <Footer /> */}
    </div>
  );
};

export default Team;
