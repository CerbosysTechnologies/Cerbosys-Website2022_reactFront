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
import Thanku from "./components/Common/Component/Thankumodal";
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

function App() {
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
        <Route path="/TrainingAndDevelopment" element={<TrainingAndDevelopment />} />
        <Route path="/LifeCerbosys" element={<LifeCerbosys />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/Agriculture" element={<Agriculture />} />
        <Route path="/Banking" element={<Banking />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/HealthCare" element={<HealthCare />} />
        <Route path="/Mining" element={<Mining />} />
        <Route path="/Transport" element={<Transport />} />
      </Routes>
      <ScrollToTop />
    </>
  );
}

export default App;
