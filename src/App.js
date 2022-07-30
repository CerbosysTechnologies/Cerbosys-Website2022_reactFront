
import {Routes, Switch, Route} from "react-router-dom";
import Hero from './components/HomePage/Hero'
import WebDevelopment from './components/InnerPages/Services/Web/WebDevelopment';
import MobileDevelopment from './components/InnerPages/Services/Mobile/MobileDevelopment';

function App() {
  return (
  <Routes>
     <Route exact path="/" element={<Hero />} />
     <Route path="/WebDevelopment" element={<WebDevelopment />} />
     <Route path='/MobileDevelopment' element={< MobileDevelopment />} />
  </Routes>
    
  

  
  
  );
}

export default App;
