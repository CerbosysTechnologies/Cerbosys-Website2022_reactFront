import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Sitemap() {
  const [sitemapData, setSitemapData] = useState([]);
  console.log(sitemapData);
  useEffect(() => {
    axios.get('https://api.cerbosys.com/cerbosys/sitemap.xml')
      .then(response => {
        const data = response.data;
        console.log('Sitemap => ', data);
        setSitemapData(data);
      })
      .catch(error => {
        console.error('Error fetching sitemap:', error);
      });
  }, []);
  return (

   <div>{sitemapData}</div>
  );
}

export default Sitemap;