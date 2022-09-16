import React from "react";
import ankiticon from "../../../../assets/innerpage/team/ankitsir.png";
import vineeticon from "../../../../assets/innerpage/team/vineetsir.png";
import nidhiicon from "../../../../assets/innerpage/team/nidhimam.png";
import jyotiicon from "../../../../assets/innerpage/team/jyotimam.png";
import sadaficon from "../../../../assets/innerpage/team/sadafmam.png";
import aarificon from "../../../../assets/innerpage/team/arifsir.png";
import kanchanicon from "../../../../assets/innerpage/team/kanchanmam.png";
import omicon from "../../../../assets/innerpage/team/omprakashsir.png";
import laliticon from "../../../../assets/innerpage/team/lalitsir.png";
import rishabhicon from "../../../../assets/innerpage/team/rishabsir.png";
import shewtaicon from "../../../../assets/innerpage/team/swetamam.png";
import shubhamicon from "../../../../assets/innerpage/team/shubhamsir.png";
import akashicon from "../../../../assets/innerpage/team/aakashsir.png"; 
import prasangicon from "../../../../assets/innerpage/team/prasangsir.png";
import manwomanicon from "../../../../assets/innerpage/team/man_woman.png";

const Teambody = () => {
  return (
    <div>
      <div className="mx-auto w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto ">
          <p
            className="text-black font-content py-2 md:text-lg text-xs text-justify md:mt-8 mt-1
          items-center justify-center md:mx-20 mx-10"
          >
            We have a team of young, dynamic, well versed and talented
            individuals who are committed to delivering value to our clients. We
            understand that the success of any business is directly related to
            customer satisfaction.
            <br></br>
            <br></br>
            Our strength is our diverse set of skills, which we bring together
            to create innovative solutions for our clients.
            <br></br>
            <br></br>
            That's why we offer our clients the opportunity to work with us as a
            team. We can provide a full-featured service in terms of technical
            support, development and marketing.
            <br></br>
            <br></br>
            <strong>
              We're a friendly bunch who love what we do - come join us!
            </strong>
          </p>

          <p className="mt-4 font-subheading text-2xl text-center">
            Our <strong>Staff</strong> Comprises
          </p>

          {/* First Grid */}
          <div className="flex flex-wrap flex-col items-center justify-center mt-10">
            <img
              src={ankiticon}
              alt="Ankit Goyel"
              className="md:w-72 md:h-72 w-56 h-56 "
            />
            <p className="font-heading md:text-lg text-sm text-center mt-6">              
              <br></br> Hi, this is Ankit Goyel, CEO and Managing Director
              <br></br>
              <br></br>
              <i>“Let’s give your business a human touch online”</i>
            </p>
          </div>

          {/* First Grid Ends */}

          {/* Second Grid */}
          <div className="grid md:grid-cols-2 mt-8">
            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
              <img
                src={vineeticon}
                alt="Vineet Goyel"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">                
                <br></br>
                Hello, I am Vineet Goyel, Director of Technology
                <br></br>
                <br></br>
                <i>“Let’s innovate, connect and inspire” </i>
              </p>
            </div>

            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
              <img
                src={nidhiicon}
                alt="Nidhi Goyel"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">
                <br></br>
                Hi, I am Nidhi Garg Goyel Director of Finance
                <br></br>
                <br></br>
                <i>“In the end it’s all about investments”</i>
              </p>
            </div>
          </div>
          {/* Second Grid Ends */}

          {/* Third Grid */}
          <div className="grid md:grid-cols-2 mt-8">
            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
            <img
                src={jyotiicon}
                alt="Jyoti Rajpal"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">                
                <br></br>
                Hi, I am Jyoti Rajpal Senior Team Lead and Developer
                <br></br>
                <br></br>
                <i>
                  “Let’s work together and grow together to achieve something
                  which is beyond limitations”
                </i>
              </p>
            
            </div>

            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
            <img
                src={sadaficon}
                alt="Sadaf Armaani"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">               
                <br></br>
                Hello, I am Sadaf Armaani, Administrative Specialist
                <br></br>
                <br></br>
                <i>
                  “The only natural resource that matters is - the human
                  resource”{" "}
                </i>
              </p>
            </div>
          </div>
          {/* Third Grid Ends */}

          {/* Fourth Grid */}
          <div className="grid md:grid-cols-2 mt-8">
            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
              <img
                src={aarificon}
                alt="Aarif Hussain"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">                
                <br></br>
                Hi, I am Aarif Husain, Senior Designer
                <br></br>
                <br></br>
                <i>“I can't find Adobe Xd enough for my design”</i>
              </p>
            </div>

            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
              <img
                src={kanchanicon}
                alt="Kanchan Gupta"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">                
                <br></br>
                Hello, I am Kanchan Gupta, Marketing Executive
                <br></br>
                <br></br>
                <i>“Lead generation is the future of business generation”</i>
              </p>
            </div>
          </div>
          {/* Fourth Grid Ends */}

          {/* Fifth Grid */}
          <div className="grid md:grid-cols-2 mt-8">
            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
              <img
                src={omicon}
                alt="Om Prakash"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">                
                <br></br>
                Hey, I am Omprakash Nath, Digital marketer.
                <br></br>
                <br></br>
                <i>“Ready to feed, the #trending you need”</i>
              </p>
            </div>

            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
            <img
                src={shewtaicon}
                alt="Shweta Deshpande"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">             
                <br></br>
                Hey, this is Shweta Deshpande, Senior Digital Marketer
                <br></br>
                <br></br>
                <i>“Marketing is an art but promotion is a strategy”</i>
              </p>
              
            </div>
          </div>
          {/* Fifth Grid Ends */}

          {/* Sixth Grid */}
          <div className="grid md:grid-cols-2 mt-8">
            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
            <img
                src={akashicon}
                alt="Akash Yadav"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">              
                <br></br>
                Hey, I am Akash Yadav, Motion Graphics Designer
                <br></br>
                <br></br>
                <i>“Let’s promote your brand with visual trends”</i>
              </p>
            </div>

            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
            <img
                src={laliticon}
                alt="Lalit Yadav"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">                
                <br></br>
                Hey, I am Lalit Yadav, Front end Developer
                <br></br>
                <br></br>
                <i>“Don’t break the code, just write it”</i>
              </p>
            </div>
          </div>
          {/* Sixth Grid Ends */}

          {/* Seventh Grid */}
          <div className="grid md:grid-cols-2 mt-8">
            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
            <img
                src={rishabhicon}
                alt="Rishabh Shrivastava"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">                
                <br></br>
                Hi, I am Rishabh Shrivastava, Graphic Designer
                <br></br>
                <br></br>
                <i>“You believe we design, to make your business shine”</i>
              </p>
            
            </div>

            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
            <img
                src={prasangicon}
                alt="Prasang Jain"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">              
                <br></br>
                Hey, I am Prasang Jain, UI/UX and Graphic Designer
                <br></br>
                <br></br>
                <i>“We design the best to stand out from rest”</i>
              </p>
            
            </div>
          </div>
          {/* Seventh Grid Ends */}

          {/* 8 Grid */}
          <div className="grid md:grid-cols-2 mt-8">
            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
            <img
                src={shubhamicon}
                alt="Shubham Shrivastava"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">             
                <br></br>
                Hello, I am Shubham Shrivastava, Content Writer
                <br></br>
                <br></br>
                <i>“Content without emotion, is like a brand without promotion.”</i>
              </p>
             
            </div>

            <div className="mx-auto px-10 py-10 flex flex-col items-center justify-center mt-6">
              <img
                src={manwomanicon}
                alt="Coming Soon"
                className="md:w-72 md:h-72 w-56 h-56"
              />

              <p className="font-heading md:text-lg text-sm text-center mt-10">
              Many More....
                {/* <br></br>
                Hey, I am Akash Yadav, Motion Graphics Designer at Cerbosys.
                <br></br>
                <br></br>
                <i>“Let’s promote your brand with visual trends”!</i> */}
              </p>
            </div>
          </div>
          {/* 8 Grid Ends */}

        </div>
      </div>
    </div>
  );
};

export default Teambody;
