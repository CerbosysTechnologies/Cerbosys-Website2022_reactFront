import React from 'react';
import { Routes, Switch, Route, Navigate } from 'react-router-dom';
import Hero from './components/HomePage/Hero';
import WebDevelopment from './components/InnerPages/Services/Web/WebDevelopment';
import MobileDevelopment from './components/InnerPages/Services/Mobile/MobileDevelopment';
import DigitalMarketing from './components/InnerPages/Services/Digital Marketing/DigitalMarketing';
import LeadGeneration from './components/InnerPages/Services/Lead Generation/LeadGeneration';
import BrandingAndPackaging from './components/InnerPages/Services/Branding And Packaging/BrandingAndPackaging.jsx';
import UIAndUX from './components/InnerPages/Services/UI And UX/UI&UX.jsx';
import StaffAugmentation from './components/InnerPages/Services/Staff Augmentation/StaffAugmentation';
import Team from './components/InnerPages/Company/Team/Team';
import Overview from './components/InnerPages/Company/Overview/Overview';
import CurrentOpening from './components/InnerPages/Company/CurrentOpening/CurrentOpening';
import Diversity from './components/InnerPages/Company/DiversityCerbosys/Diversity';
// import Thanku from "./components/Common/Component/Thankumodal";
import ContactUs from './components/InnerPages/OtherPages/ContactUs/ContactUs';
import TrainingAndDevelopment from './components/InnerPages/Company/TrainingAndDevelopment/TrainingAndDevelopment';
import LifeCerbosys from './components/InnerPages/Company/LifeCerbosys/LifeCerbosys';
import FreeQuote from './components/Common/Component/FreeQuote';
import Testimonial from './components/InnerPages/Company/Testimonial/Testimonial';
import { ScrollToTop } from './components/Common/Component/ScrollToTop';
import Agriculture from './components/InnerPages/Industries/Agriculture/Agriculture';
import Banking from './components/InnerPages/Industries/Banking/Banking';
import Ecommerce from './components/InnerPages/Industries/Ecommerce/Ecommerce';
import HealthCare from './components/InnerPages/Industries/HealthCare/HealthCare';
import Mining from './components/InnerPages/Industries/Mining/Mining';
import Transport from './components/InnerPages/Industries/Transportation/Transport';
import Education from './components/InnerPages/Industries/Education/Education';
import RealEstate from './components/InnerPages/Industries/RealEstate/RealEstate';
import Manufacturing from './components/InnerPages/Industries/Manufacuring/Manufacturing';
import DotNet from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/.Net/DotNet';
import Android from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Android/Android';
import { handelRightClick } from './components/Common/utils/Desbalrightclick';
import CaseStudy from './components/CaseStudy/CaseStudy';
import Angular from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Angular/Angular';
import CodeIgniter from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/CodeIgniter/CodeIgniter';
import Flutter from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Flutter/Flutter';
import IOS from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/IOS/IOS';
import Laravel from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Laravel/Laravel';
import Nodejs from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Nodejs/Nodejs';
import Reactjs from './components/InnerPages/Services/Staff Augmentation/StaffAug InnerPages/Reactjs/Reactjs';
import { Helmet } from 'react-helmet';
import Termconditions from './components/term&conditions/Termandconditions.jsx';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Common/Component/Footer';
import AboutUS from './components/AboutUs/AboutUS';
import Blog from './components/Blogs/Blog';
import BlogGetoneBlog from './components/Blogs/BlogGetoneBlog';
import Solution from './components/Solution/Solution';
import SchoolERP from './components/Solution/School/SchoolERP';
import ECommerse from './components/Solution/E-Commerse/E-Commerse';
import CaseStudyByOne from './components/CaseStudy/CaseStudyByOne';
import Search from './search';
import Softwaredevelopment from './components/InnerPages/Services/SoftwareDevelopment/Softwaredevelopment';
import CurrentOpningGetbyOne from './components/InnerPages/Company/CurrentOpening/CurrentOpningGetbyOne';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Portfolio from './components/protfolio/Portfolio';
import NotFound from './components/Common/Component/NotFound';
import FreeEnquiry from './components/Common/Component/FreeEnquiry';
import { BannerEnquiry } from './components/Common/Component/BannerEnquiry';
import Sitemap from './SitemapComponent.js';
const Routers = () => {
  return (
    <div>
      {/* <Route exact path="/sitemap.xml" element={<Sitemap />} /> */}

      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route exact path="/overview" element={<Overview />} />
        <Route
          exact
          path="/training-and-development"
          element={<TrainingAndDevelopment />}
        />
        <Route exact path="/team" element={<Team />} />
        <Route exact path="/life-at-cerbosys" element={<LifeCerbosys />} />
        <Route exact path="/diversity-at-cerbosys" element={<Diversity />} />
        <Route exact path="/testimonial" element={<Testimonial />} />
        <Route exact path="/web-development" element={<WebDevelopment />} />
        <Route
          exact
          path="/software-development"
          element={<Softwaredevelopment />}
        />
        <Route exact path="/digital-marketing" element={<DigitalMarketing />} />
        <Route exact path="/lead-generation" element={<LeadGeneration />} />
        <Route
          exact
          path="/branding-and-packaging"
          element={<BrandingAndPackaging />}
        />
        <Route
          exact
          path="/mobile-app-development"
          element={<MobileDevelopment />}
        />
        <Route exact path="/ui-ux-designing" element={<UIAndUX />} />
        <Route
          exact
          path="/staff-augmentation"
          element={<StaffAugmentation />}
        />
        <Route exact path="/hire-react-js-developer" element={<Reactjs />} />{' '}
        <Route exact path="/hire-node-js-developer" element={<Nodejs />} />
        <Route exact path="/hire-android-developer" element={<Android />} />
        <Route exact path="/hire-ios-developer" element={<IOS />} />
        <Route exact path="/hire-flutter-developer" element={<Flutter />} />
        <Route exact path="/hire-laravel-developer" element={<Laravel />} />
        <Route
          exact
          path="/hire-codeIgniter-developer"
          element={<CodeIgniter />}
        />
        <Route exact path="/hire-angular-developer" element={<Angular />} />
        <Route exact path="/hire-dotnet-developer" element={<DotNet />} />
        <Route exact path="/contact-us" element={<ContactUs />} />
        <Route exact path="/free-enquiry" element={<FreeEnquiry />} />
        <Route exact path="/current-opening" element={<CurrentOpening />} />
        <Route
          exact
          path="/current-opening/:id"
          element={<CurrentOpningGetbyOne />}
        />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:id" element={<BlogGetoneBlog />} />
        <Route exact path="/agriculture" element={<Agriculture />} />
        <Route exact path="/ecommerce-and-retail" element={<Ecommerce />} />
        <Route exact path="/health-care" element={<HealthCare />} />
        <Route exact path="/banking-and-finance" element={<Banking />} />
        <Route exact path="/mining" element={<Mining />} />
        <Route exact path="/transport-and-logistics" element={<Transport />} />
        <Route exact path="/education" element={<Education />} />
        <Route exact path="/real-estate" element={<RealEstate />} />
        <Route exact path="/manufacturing" element={<Manufacturing />} />
        <Route exact path="/whitepapers" element={<CaseStudy />} />
        <Route exact path="/whitepapers/:id" element={<CaseStudyByOne />} />
        <Route exact path="/terms-Conditions" element={<Termconditions />} />
        <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route exact path="/about-us" element={<AboutUS />} />
        <Route exact path="/solution" element={<Solution />} />
        <Route exact path="/Portfolio" element={<Portfolio />} />
        <Route exact path="/solution/schoolerp" element={<SchoolERP />} />
        <Route exact path="/solution/E-Commerse" element={<ECommerse />} />
        <Route exact path="/banner-enquiry" element={<BannerEnquiry />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>

    // <Route exact path="/sitemap.xml" element={<Sitemap />} />
  );
};

export default Routers;
