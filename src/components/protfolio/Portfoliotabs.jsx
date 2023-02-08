import React from 'react';
import ecommerfashi from '../../assets/portfolio/ecommerfashi.png';
import tablogo8 from '../../assets/tablogo8.png';
import tablogo1 from '../../assets/tablogo1.png';
import tablogo2 from '../../assets/tablogo2.png';
import tablogo3 from '../../assets/tablogo3.png';
import tablogo4 from '../../assets/tablogo4.png';
import tablogo5 from '../../assets/tablogo5.png';
import tablogo6 from '../../assets/tablogo6.png';
import tablogo7 from '../../assets/tablogo7.png';
// import tablogo8 from '../../assets/tablogo6';
// import tab1img from '../../../../../assets/innerpage/education/tab1img.png';
// import tab2im from '../../../../../assets/innerpage/education/tab2im.png';
// import tab3img from '../../../../../assets/innerpage/education/tab3img.png';
const Portfoliotabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap ">
        <div className="max-w-[1240px] mx-auto w-full p-4 md:p-10">
          <h1 className="text-Purpal uppercase font-heading  md:text-4xl text-2xl md:mb-5 min-w-fit mt-5 md:mt-0">
            our designs
          </h1>
          <hr className="h-1 bg-Orange md:w-[300px] m-0 w-[200px]"></hr>
          <div className="w-full mt-10">
            <ul
              className="bg-Orange flex mb-0 list-none flex-wrap flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xl  px-5 py-3  rounded block  ' +
                    (openTab === 1 ? 'text-white pb-2' : 'text-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Templates
                </a>
                {openTab === 1 ? (
                  <hr className="bg-white mx-auto w-[100px] text-center h-[2px]"></hr>
                ) : (
                  <hr className=" opacity-0 mx-auto w-[100px] text-center h-[2px]"></hr>
                )}
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xl   px-5 py-3 rounded block leading-normal ' +
                    (openTab === 2 ? 'text-white pb-2' : 'text-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Posts
                </a>
                {openTab === 2 ? (
                  <hr className="bg-white mx-auto w-[100px] text-center h-[2px]"></hr>
                ) : (
                  <hr className=" opacity-0 mx-auto w-[100px] text-center h-[2px]"></hr>
                )}
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    'text-xl  px-5 py-3  rounded block  ' +
                    (openTab === 3 ? 'text-white pb-2' : 'text-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Logo
                </a>
                {openTab === 3 ? (
                  <hr className="bg-white mx-auto w-[100px] text-center h-[2px]"></hr>
                ) : (
                  <hr className=" opacity-0 mx-auto w-[100px] text-center h-[2px]"></hr>
                )}
              </li>

              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center items-center">
                <a
                  className={
                    'text-xl   px-5 py-3  rounded block leading-normal ' +
                    (openTab === 4 ? 'text-white pb-2 ' : 'text-white')
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Mockups
                </a>
                {openTab === 4 ? (
                  <hr className="bg-white mx-auto w-[100px] text-center h-[2px]"></hr>
                ) : (
                  <hr className=" opacity-0 mx-auto w-[100px] text-center h-[2px]"></hr>
                )}
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded text-white">
              <div className="px-8 py-5 flex-auto">
                <div className="tab-content tab-space">
                  {/* tabs first part start */}
                  <div
                    className={openTab === 1 ? 'block' : 'hidden'}
                    id="link1"
                  >
                    <div className="mt-6 ">
                      <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
                        Agriculture
                      </h1>
                    </div>
                    <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />{' '}
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />{' '}
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />
                      </div>
                    </div>
                    <div className="mt-6 ">
                      <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
                        Ecommerce & Retail
                      </h1>
                    </div>
                    <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />{' '}
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />{' '}
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />
                      </div>
                    </div>
                    <div className="mt-6 ">
                      <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
                        Healthcare & Life Science
                      </h1>
                    </div>
                    <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />{' '}
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />{' '}
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />
                      </div>
                    </div>
                    <div className="mt-6 ">
                      <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
                        Banking & Finance
                      </h1>
                    </div>
                    <div className="flex justify-between flex-col md:flex-row content-center items-center mt-12 gap-6 text-white">
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />{' '}
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />{' '}
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        <img
                          src={ecommerfashi}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        />
                      </div>
                    </div>
                  </div>
                  {/* tabs first part end */}
                  {/* tabs second part start */}
                  <div
                    className={openTab === 2 ? 'block' : 'hidden'}
                    id="link2"
                  >
                    <div className="flex justify-between flex-col md:flex-row content-center items-center gap-6 text-white">
                      <div className="md:w-[50%] w-[100%]">
                        {/* <img
                          src={tab2im}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        /> */}
                      </div>
                    </div>
                  </div>
                  {/* tabs second part end */}
                  {/* tabs third part start */}
                  <div
                    className={openTab === 3 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <div className="flex  justify-between flex-col md:flex-row content-center items-center gap-6 text-white">
                      <div className="mt-6 ">
                        <h1 className="text-Purpal border-b-2  border-b-Orange rounded-md mx-auto  p-3 max-w-fit  text-center font-heading  md:text-3xl text-xl md:mb-5 min-w-fit mt-5 md:mt-0">
                          Logo
                        </h1>
                        <div className="flex justify-between flex-col md:flex-row content-center items-center gap-10 text-black">
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo1}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />{' '}
                          </div>
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo2}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />{' '}
                          </div>
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo3}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between flex-col md:flex-row content-center items-center gap-10 text-black">
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo4}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />{' '}
                          </div>
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo5}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />{' '}
                          </div>
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo6}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />
                          </div>
                        </div>
                        <div className="flex justify-between flex-col md:flex-row content-center items-center gap-10 text-black">
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo7}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />{' '}
                          </div>
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo8}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />{' '}
                          </div>
                          <div className="md:w-[50%] w-[100%]">
                            <img
                              src={tablogo8}
                              alt="djhfj"
                              className="md:h-[24rem] mx-auto"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* tabs third part end */}

                  {/*start fourth tab mockp*/}
                  <div
                    className={openTab === 4 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <div className="flex  justify-between flex-col md:flex-row   gap-6 text-white">
                      <div className="md:w-[50%] w-[100%]"> </div>
                      <div className="md:w-[50%] w-[100%]">
                        {/* <img
                          src={tab3img}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        /> */}
                      </div>
                    </div>
                    <div className="flex  justify-between flex-col md:flex-row content-center items-center gap-6 text-white">
                      <div className="md:w-[50%] w-[100%]">
                        {' '}
                        <p className=" font-subheading text-justify mt-4">
                          Artificial intelligence (AI) is a type of machine
                          learning that gives computers the ability to learn and
                          make decisions. It's considered one of the most
                          important technologies in education because it allows
                          teachers and students to better understand how people
                          learn, which means they can create more effective
                          educational programs and materials for learners.
                        </p>
                        <p className="font-subheading text-justify mt-6">
                          AI can be used in many different ways in education:
                        </p>
                        <ul className="mt-5 list-disc">
                          <li className="mt-3">
                            To develop models that predict student learning
                            outcomes based on their previous performance,
                            allowing teachers to better target their
                            instruction.
                          </li>
                          <li className="mt-3">
                            To create personalized learning experiences for
                            students based on their interests and skill level.
                          </li>
                          <li className="mt-3">
                            To provide tutoring services that adapt as each
                            student progresses through the course material so
                            they can focus on areas where they need extra help.
                          </li>
                        </ul>
                      </div>
                      <div className="md:w-[50%] w-[100%]">
                        {/* <img
                          src={tab3img}
                          alt="djhfj"
                          className="md:h-[24rem] mx-auto"
                        /> */}
                      </div>
                    </div>
                  </div>
                  {/*end fourth tab mockp*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function () {
  return (
    <>
      <Portfoliotabs color="pink" />
    </>
  );
}
