import CustomerRelationHomePage from './components/CustomerRelationHomePage';
import Footer from './components/Footer';
import Hero from './components/Hero'
import IndustriesHomePage from './components/IndustriesHomePage';
import ServiceHomePage from './components/ServiceHomePage';
import TechnologyHomePage from './components/TechnologyHomePage';

function App() {
  return (
    <>
      <Hero />
      <ServiceHomePage />
      <IndustriesHomePage />
      <CustomerRelationHomePage />
      <TechnologyHomePage />
      <Footer />
    </>
  );
}

export default App;
