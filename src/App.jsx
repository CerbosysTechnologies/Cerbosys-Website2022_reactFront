import React from 'react';

import FreeQuote from './components/Common/Component/FreeQuote';

import { ScrollToTop } from '../src/components/Common/Component/ScrollToTop';

import { handelRightClick } from '../src/components/Common/utils/Desbalrightclick';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Common/Component/Footer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Routers from './Routers.js';
import { useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  // jab hme code push karna hota hai server
  //  tab ise uncomment  karna padega
  //  useEffect(() => {
  //   if (window.location.protocol === 'http:') {
  //     window.location.href = `https://${window.location.hostname}${window.location.pathname}`;
  //   }
  // }, []);
  // document.addEventListener('contextmenu', handelRightClick);
  // Define routes without Navbar and Footer
  // const routesWithoutNavbarFooter = ['/sitemap.xml', '*'];
  // Get the current route

  // const currentRoute = window.location.pathname;

  // Check if the current route should not have Navbar and Footer
  // const shouldRenderNavbarFooter =!routesWithoutNavbarFooter.includes(currentRoute);

  return (
    <>
      <div className="selection:bg-Green selection:text-white">
        {/* {shouldRenderNavbarFooter && <Navbar />}
        <Routers />
        {shouldRenderNavbarFooter && <Footer />}
        <FreeQuote /> */}
       <Navbar />
        <Routers />
        <Footer />
        <FreeQuote />
      </div>
      <ScrollToTop />
    </>
  );
}

export default App;
