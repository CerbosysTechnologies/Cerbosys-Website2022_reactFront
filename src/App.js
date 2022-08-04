import {Routes, Switch, Route} from "react-router-dom";
import Hero from './components/HomePage/Hero'
import WebDevelopment from './components/InnerPages/Services/Web/WebDevelopment';
import MobileDevelopment from './components/InnerPages/Services/Mobile/MobileDevelopment';
import DigitalMarketing from "./components/InnerPages/Services/Digital Marketing/DigitalMarketing";
import LeadGeneration from "./components/InnerPages/Services/Lead Generation/LeadGeneration"
import BrandingAndPackaging from './components/InnerPages/Services/Branding And Packaging/BrandingAndPackaging.jsx'
import UIAndUX from './components/InnerPages/Services/UI And UX/UI&UX.jsx';
import StaffAugmentation from './components/InnerPages/Services/Staff Augmentation/StaffAugmentation';

function App() {
  return (
  <Routes>
     <Route exact path="/" element={<Hero />} />
     <Route path="/WebDevelopment" element={<WebDevelopment />} />
     <Route path='/MobileDevelopment' element={< MobileDevelopment />} />
     <Route path='/DigitalMarketing' element={< DigitalMarketing />} />
     <Route path='/LeadGeneration' element={< LeadGeneration />} />
     <Route path='/BrandingAndPackaging' element={< BrandingAndPackaging />} />
     <Route path='/UIAndUX' element={< UIAndUX />} />
     <Route path='/StaffAugmentation' element={< StaffAugmentation />} />
  </Routes>
    
  

  
  
  );
}

export default App;
