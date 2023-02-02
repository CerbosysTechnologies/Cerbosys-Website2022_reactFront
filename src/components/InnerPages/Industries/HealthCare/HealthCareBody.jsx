import React from 'react';
// import healthphone1 from '../../../../assets/innerpage/healthcare/healthphone1.png';
// import healthphone2 from '../../../../assets/innerpage/healthcare/healthphone2.png';
// import healthcarebusinesssicon from '../../../../assets/innerpage/healthcare/healthimage.svg';
import multymob from '../../../../assets/innerpage/healthcare/multymob.png';
import Healthsilder from './Healthsilder';
import Managmentsys from './Managmentsys';

const HealthCareBody = () => {
  return (
    <div>
      {/*start healthcare life  science section*/}
      <div className="w-full mt-4">
        <div className="max-w-[1240px] mx-auto ">
          <div className="flex flex-wrap md:flex-nowrap justify-between items-center md:gap-10 p-6">
            <div className="md:w-[50%] w-[100%]">
              <img src={multymob} alt="img" className="md:h-[24rem] w-full" />
            </div>
            <div className="md:w-[50%] w-[100%]">
              <h1 className="text-Secondary font-heading pt-2 md:text-3xl text-xl md:mb-10 min-w-fit">
                HEALTHCARE
                <span className="text-Green">&nbsp;&</span>
                &nbsp;LIFE SCIENCE
              </h1>
              <p className="mt-3 min-w-fit">
                Healthcare and life science industries are the two broad fields
                of study that stem from the field of engineering. These two
                fields share a common goal, which is to solve problems by
                discovering and developing new solutions.
              </p>
              <p className="mt-3">
                {' '}
                We are a young but growing company that is dedicated to making
                the lives of doctors easier by giving them a platform &
                technology trends in the healthcare industry where they can
                easily book appointments with patients and manage their
                schedules.
              </p>
              <p className="mt-3">
                Our services are 100% mobile-friendly, so you can use them
                anywhere, anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* healthcare life  science*/}
      {/* healthsilder */}
      <Healthsilder />
      {/*  */}
      <div className="bg-HealthCarebody mx-auto w-full h-[400px] py-12  bg-cover bg-center md:bg-top "></div>

      <Managmentsys type="usew" />
    </div>
  );
};

export default HealthCareBody;
