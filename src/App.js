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
import { Helmet } from "react-helmet";
import Termconditions from "./components/term&conditions/Termandconditions.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Common/Component/Footer";
import AboutUS from "./components/AboutUs/AboutUS";
import Blog from "./components/Blogs/Blog";
import BlogGetoneBlog from "./components/Blogs/BlogGetoneBlog";

function App() {
  document.addEventListener("contextmenu", handelRightClick);
  return (
    <>
      <Navbar />
      <Helmet>
        <title>
          Website Design & Mobile App Development Company | Cerbosys
        </title>
        <meta
          name="description"
          content="Cerbosys Technologies Inc. is one of the leading Website Design and  Mobile App Development company who provides services across the world. Contact us now for growth."
        />
      </Helmet>
      <FreeQuote />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        {/* Company Navbar start */}
        <Route path="/overview" element={<Overview />} />
        <Route
          path="/training-and-development"
          element={<TrainingAndDevelopment />}
        />
        <Route path="/team" element={<Team />} />
        <Route path="/life-at-cerbosys" element={<LifeCerbosys />} />
        <Route path="/diversity-at-cerbosys" element={<Diversity />} />
        <Route path="/testimonial" element={<Testimonial />} />
        {/* Company Navbar End */}
        {/* Service Navbar Start */}
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/lead-generation" element={<LeadGeneration />} />
        <Route
          path="/branding-and-packaging"
          element={<BrandingAndPackaging />}
        />
        <Route path="/mobile-app-development" element={<MobileDevelopment />} />
        <Route path="/uiux-development" element={<UIAndUX />} />
        {/* Service Navbar End */}
        {/* StaffAugmentation start */}
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />
        <Route path="/hire-react-js-developer" element={<Reactjs />} />{" "}
        <Route path="/hire-node-js-developer" element={<Nodejs />} />
        <Route path="/hire-android-developer" element={<Android />} />
        <Route path="/hire-ios-developer" element={<IOS />} />
        <Route path="/hire-flutter-developer" element={<Flutter />} />
        <Route path="/hire-laravel-developer" element={<Laravel />} />
        <Route path="/hire-codeIgniter-developer" element={<CodeIgniter />} />
        <Route path="/hire-angular-developer" element={<Angular />} />
        <Route path="/hire-dotnet-developer" element={<DotNet />} />
        {/* StaffAugmentation END */}
        {/* contact-us start */}
        <Route path="/contact-us" element={<ContactUs />} />
        {/* contact-us End */}
        <Route path="/current-opening" element={<CurrentOpening />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/one-blog" element={<BlogGetoneBlog />} />
        {/* Indstri Start */}
        <Route path="/agriculture" element={<Agriculture />} />
        <Route path="/ecommerce-development-services" element={<Ecommerce />} />
        <Route path="/health-care" element={<HealthCare />} />
        <Route path="/banking-and-finance" element={<Banking />} />
        <Route path="/mining" element={<Mining />} />
        <Route path="/transport-and-logistics" element={<Transport />} />
        <Route path="/education" element={<Education />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        {/* Indstri End */}
        <Route path="/case-study" element={<CaseStudy />} />
        <Route path="/terms-Conditions" element={<Termconditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/about-us" element={<AboutUS />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
