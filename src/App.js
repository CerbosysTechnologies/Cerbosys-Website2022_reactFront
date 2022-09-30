import { Routes, Switch, Route } from "react-router-dom";
import Hero from "./components/HomePage/Hero";
import WebDevelopment from "./components/InnerPages/Services/Web/WebDevelopment";
import MobileDevelopment from "./components/InnerPages/Services/Mobile/MobileDevelopment";
import DigitalMarketing from "./components/InnerPages/Services/Digital Marketing/DigitalMarketing";
import LeadGeneration from "./components/InnerPages/Services/Lead Generation/LeadGeneration";
import BrandingAndPackaging from "./components/InnerPages/Services/Branding And Packaging/BrandingAndPackaging.jsx";
import UIAndUX from "./components/InnerPages/Services/UI And UX/UI&UX.jsx";
import StaffAugmentation from "./components/InnerPages/Services/Staff Augmentation/StaffAugmentation";
import Team from "./components/InnerPages/Company/Team/Team";
import Overview from "./components/InnerPages/Company/Overview/Overview";
import CurrentOpening from "./components/InnerPages/Company/CurrentOpening/CurrentOpening";
import Diversity from "./components/InnerPages/Company/DiversityCerbosys/Diversity";
// import Thanku from "./components/Common/Component/Thankumodal";
import ContactUs from "./components/InnerPages/OtherPages/ContactUs/ContactUs";
import TrainingAndDevelopment from "./components/InnerPages/Company/TrainingAndDevelopment/TrainingAndDevelopment";
import LifeCerbosys from "./components/InnerPages/Company/LifeCerbosys/LifeCerbosys";
import FreeQuote from "./components/Common/Component/FreeQuote";
import Testimonial from "./components/InnerPages/Company/Testimonial/Testimonial";
import { ScrollToTop } from "../src/components/Common/Component/ScrollToTop";
import Agriculture from "./components/InnerPages/Industries/Agriculture/Agriculture";
import Banking from "./components/InnerPages/Industries/Banking/Banking";
import Ecommerce from "./components/InnerPages/Industries/Ecommerce/Ecommerce";
import HealthCare from "./components/InnerPages/Industries/HealthCare/HealthCare";
import Mining from "./components/InnerPages/Industries/Mining/Mining";
import Transport from "./components/InnerPages/Industries/Transportation/Transport";
import Education from "./components/InnerPages/Industries/Education/Education";
import RealEstate from "./components/InnerPages/Industries/RealEstate/RealEstate";
import Manufacturing from "./components/InnerPages/Industries/Manufacuring/Manufacturing";
import DotNet from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/.Net/DotNet";
import Android from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Android/Android";
import { handelRightClick } from "../src/components/Common/utils/Desbalrightclick";
import CaseStudy from "./components/CaseStudy/CaseStudy";
import Angular from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Angular/Angular";
import CodeIgniter from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/CodeIgniter/CodeIgniter";
import Flutter from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Flutter/Flutter";
import IOS from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/IOS/IOS";
import Laravel from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Laravel/Laravel";
import Nodejs from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Nodejs/Nodejs";
import Reactjs from "./components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Reactjs/Reactjs";

function App() {
  document.addEventListener("contextmenu", handelRightClick);
  return (
    <>
      <FreeQuote />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/WebDevelopment" element={<WebDevelopment />} />
        <Route path="/MobileDevelopment" element={<MobileDevelopment />} />
        <Route path="/DigitalMarketing" element={<DigitalMarketing />} />
        <Route path="/LeadGeneration" element={<LeadGeneration />} />
        <Route
          path="/BrandingAndPackaging"
          element={<BrandingAndPackaging />}
        />
        <Route path="/UIAndUX" element={<UIAndUX />} />
        <Route path="/StaffAugmentation" element={<StaffAugmentation />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Overview" element={<Overview />} />
        <Route path="/CurrentOpening" element={<CurrentOpening />} />
        <Route path="/Diversity" element={<Diversity />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route
          path="/TrainingAndDevelopment"
          element={<TrainingAndDevelopment />}
        />
        <Route path="/LifeCerbosys" element={<LifeCerbosys />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Agriculture" element={<Agriculture />} />
        <Route path="/Banking" element={<Banking />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/Mining" element={<Mining />} />
        <Route path="/Transport" element={<Transport />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/RealEstate" element={<RealEstate />} />
        <Route path="/Manufacturing" element={<Manufacturing />} />
        <Route path="/DotNet" element={<DotNet />} />
        <Route path="/Android" element={<Android />} />
        <Route path="/CaseStudy" element={<CaseStudy />} />
        <Route path="/Angular" element={<Angular />} />
        <Route path="/CodeIgniter" element={<CodeIgniter />} />
        <Route path="/Flutter" element={<Flutter />} />
        <Route path="/IOS" element={<IOS />} />
        <Route path="/Laravel" element={<Laravel />} />
        <Route path="/Nodejs" element={<Nodejs />} />
        <Route path="/Reactjs" element={<Reactjs />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
