
import Hero from './components/HomePage/Hero'
import WebDevelopment from './components/InnerPages/Services/Web/WebDevelopment';
import {Routes, Switch, Route} from "react-router-dom";

function App() {
  return (
  <Routes>
     <Route exact path="/" element={<Hero />} />
     <Route path="/WebDevelopment" element={<WebDevelopment />} />
  </Routes>
    
  

  
  
  );
}

export default App;
