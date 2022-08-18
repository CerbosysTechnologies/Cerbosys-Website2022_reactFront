import React from "react";
import teammembericon from "../../../../assets/innerpage/team/team_member_image.png";

const Teambody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto ">
          <p className="font-subheading text-2xl text-center">
            <strong>Staff</strong> Comprises
          </p>

          {/* First Grid */}
          <div className="grid md:grid-cols-2 mt-8">
            <div className="mx-auto flex flex-col md:px-14 px-10 text-justify">
              <img src={teammembericon} className="" />
            </div>
            <div className="mx-auto flex flex-col md:px-1 px-10 text-justify md:mt-16 text-Primary">
              <h1 className="font-heading md:text-2xl  text-lg mb-8 ">
                Member 1
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              excepturi aliquid laudantium possimus obcaecati nulla doloribus
              aspernatur perferendis numquam quis asperiores quasi dolor sint
              magni, quaerat pariatur eum in expedita. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit excepturi aliquid
              laudantium possimus obcaecati nulla doloribus aspernatur
              perferendis numquam quis asperiores quasi dolor sint magni,
              quaerat pariatur eum in expedita.
            </div>
          </div>
          {/* First Grid Ends*/}

          {/* Second Grid */}
          <div className="grid md:grid-cols-2 mt-16">
            <div className="mx-auto flex flex-col md:px-14 px-10 text-justify md:mt-16 text-Primary">
              <h1 className="font-heading md:text-2xl text-lg mb-8 ">
                Member 1
              </h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              excepturi aliquid laudantium possimus obcaecati nulla doloribus
              aspernatur perferendis numquam quis asperiores quasi dolor sint
              magni, quaerat pariatur eum in expedita. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Sit excepturi aliquid
              laudantium possimus obcaecati nulla doloribus aspernatur
              perferendis numquam quis asperiores quasi dolor sint magni,
              quaerat pariatur eum in expedita.
            </div>
            <div className="mx-auto flex flex-col md:px-8 px-10 text-justify">
              <img src={teammembericon} className="" />
            </div>
          </div>
          {/* Second Grid Ends*/}
        </div>
      </div>
    </div>
  );
};

export default Teambody;
