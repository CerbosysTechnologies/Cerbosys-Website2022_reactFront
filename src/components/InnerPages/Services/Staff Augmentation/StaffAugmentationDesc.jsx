import React from "react";
import staffaugmentationicon from "../../../../assets/innerpage/staffaugmentation/staff_image.png";
import staffaugmentation_articon from "../../../../assets/innerpage/staffaugmentation/illustrator.svg";

const StaffAugmentationDesc = () => {
  return (
    <div>
      <div className=" mx-auto w-full py-16 px-4 ">
        <div className="max-w-[1240px] mx-auto ">
          {/* First Section */}
          <div className="grid md:grid-cols-2">
            {/* Content Section */}
            <div className="mx-auto flex flex-col md:px-24 px-14 text-justify">
              <h1 className="font-heading md:text-2xl text-lg">
                {" "}
                Staff Augmentation{" "}
              </h1>
              <p className="font-content md:text-lg text-sm mt-3">
                Staff augmentation is a process of hiring additional employees
                to work on a project-by-project basis. The process can be used
                to supplement a company's existing workforce or to bring in
                specific skill sets not available in-house. Staff augmentation
                can be an effective way to reduce the risk of project failure
                and improve project outcomes. Staff augmentation can also be a
                cost-effective way to manage fluctuations in workload.
              </p>
            </div>
            {/* Content Section Ends*/}

            {/* Image Section */}
            <img
              src={staffaugmentationicon}
              alt="Staff Augmentation Icon"
              className="mx-auto md:w-[28rem]
             w-[18rem] mt-8"
            />
            {/* Image Section Ends*/}
          </div>
          {/* Grid Div */}
          {/* First Section Ends */}

          {/* Second Section */}
          <div className="grid md:grid-cols-2 bg-Primary mt-8 rounded-3xl gap-2">
            {/* Image Section */}
            <img
              src={staffaugmentation_articon}
              alt="Staff Augmentation Icon"
              className="md:w-[24rem] mx-auto my-8
             w-[18rem] mt-8"
            />
            {/* Image Section Ends*/}

            {/* Content Section */}
            <div className="flex flex-col md:px-24 px-14 mx-auto text-justify mt-8">
              <h1 className="font-heading md:text-2xl text-lg text-white">
                We are aware of the Technology Pulse that Leads to Better
                Performance
              </h1>
              <p className="font-content md:text-lg text-sm mb-8 text-white mt-3">
                Our staff augmentation team helps businesses, especially
                small-size businesses to hire the best skilled and talented
                employees. Which eventually nurtures the performance of that
                business online.
                <br></br>
                <br></br>
                Our main focus is to churn out additional employees to help with
                specific tasks or projects that deliver real value to our
                clients.
              </p>
            </div>
            {/* Content Section Ends*/}
          </div>
          {/* Grid Div */}
          {/* Second Section Ends */}
        </div>
        {/* Max Width Div Ends */}
      </div>
      {/* Second Div Ends */}
    </div>
  );
};

export default StaffAugmentationDesc;
