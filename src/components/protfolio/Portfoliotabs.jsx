import React from 'react';
import ecommerfashi from '../../assets/portfolio/ecommerfashi.png';
import Tabslogo from './Tabslogo';
import Tabsmouckup from './Tabsmouckup';

import Tabs2 from './Tabspost';
import Tabspost from './Tabspost';
import Tabstemplate from './Tabstemplate';
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
                    <Tabstemplate />
                  </div>
                  {/* tabs first part end */}
                  {/* tabs second part start */}
                  <div
                    className={openTab === 2 ? 'block' : 'hidden'}
                    id="link2"
                  >
                    <Tabspost />
                  </div>
                  {/* tabs second part end */}
                  {/* tabs third part start */}
                  <div
                    className={openTab === 3 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <Tabslogo />
                  </div>
                  {/* tabs third part end */}

                  {/*start fourth tab mockp*/}
                  <div
                    className={openTab === 4 ? 'block' : 'hidden'}
                    id="link3"
                  >
                    <Tabsmouckup />
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
