import React from 'react';
import tab1img from '../../../../../assets/innerpage/education/tab1img.png';
import tab2im from '../../../../../assets/innerpage/education/tab2im.png';
import tab3img from '../../../../../assets/innerpage/education/tab3img.png';
const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap bg-EducationTabsbg ">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xl font-extrabold  px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 1
                    ? 'text-Primary bg-white'
                    : 'text-' + color + '-600 text-Grey bg-grey')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Learning Management Systems (LMS)
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xl font-extrabold  px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 2
                    ? 'text-Primary bg-white'
                    : 'text-' + color + '-600 text-Grey')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Augmented and Virtual Reality
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  'text-xl font-extrabold  px-5 py-3 shadow-lg rounded block leading-normal ' +
                  (openTab === 3
                    ? 'text-Primary bg-white'
                    : 'text-' + color + '-600 text-Grey')
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Artificial intelligence (AI)
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  rounded text-white">
            <div className="px-8 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? 'block' : 'hidden'} id="link1">
                  <div className="flex justify-between flex-col md:flex-row content-center items-center gap-6 text-white">
                    <div className="md:w-[50%] w-[100%]">
                      {' '}
                      <p className=" font-subheading text-justify mt-4">
                        Learning Management Systems (LMS) are software systems
                        that help educators and administrators manage their
                        training programs. They allow instructors to create,
                        deliver and assess online courses that can be accessed
                        anywhere by students.{' '}
                      </p>
                      <p className="font-subheading text-justify mt-6">
                        Learning Management Systems are used in education to:
                      </p>
                      <ul className="mt-5">
                        <li className="mt-3">
                          -Manage student enrollment and assessment
                        </li>
                        <li className="mt-3">
                          -Provide a platform for instructors to create new
                          courses or modify existing ones
                        </li>
                        <li className="mt-3">
                          -Collect student feedback on course content or
                          delivery
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-[50%] w-[100%]">
                      <img src={tab1img} alt="djhfj" className="w-full" />
                    </div>
                  </div>
                </div>
                <div className={openTab === 2 ? 'block' : 'hidden'} id="link2">
                  <div className="flex justify-between flex-col md:flex-row content-center items-center gap-6 text-white">
                    <div className="md:w-[50%] w-[100%]">
                      {' '}
                      <p className=" font-subheading text-justify mt-4">
                        Augmented and Virtual Reality are two technologies that
                        can be used in the education sector.
                      </p>
                      <p className="font-subheading text-justify mt-6">
                        Augmented Reality (AR) is a technology that overlays
                        digital information on real-world environments, such as
                        buildings or landscapes. This means that users can see
                        information about a place through their smartphone or
                        tablet screen.
                      </p>
                      <p className="font-subheading text-justify mt-6">
                        Virtual Reality (VR) is an immersive experience that
                        allows users to interact with virtual environments and
                        objects. VR can be used in education to teach students
                        about subjects like science or history by placing them
                        in the middle of an event.
                      </p>
                    </div>
                    <div className="md:w-[50%] w-[100%]">
                      <img src={tab2im} alt="djhfj" className="w-92" />
                    </div>
                  </div>
                </div>
                <div className={openTab === 3 ? 'block' : 'hidden'} id="link3">
                  <div className="flex justify-between flex-col md:flex-row content-center items-center gap-6 text-white">
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
                          outcomes based on their previous performance, allowing
                          teachers to better target their instruction.
                        </li>
                        <li className="mt-3">
                          To create personalized learning experiences for
                          students based on their interests and skill level.
                        </li>
                        <li className="mt-3">
                          To provide tutoring services that adapt as each
                          student progresses through the course material so they
                          can focus on areas where they need extra help.
                        </li>
                      </ul>
                    </div>
                    <div className="md:w-[50%] w-[100%]">
                      <img src={tab3img} alt="djhfj" className="w-92" />
                    </div>
                  </div>
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
      <Tabs color="pink" />
    </>
  );
}
