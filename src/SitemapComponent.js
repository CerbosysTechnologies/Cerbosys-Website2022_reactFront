import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Sitemap() {
  const [sitemapData, setSitemapData] = useState(null);

  useEffect(() => {
    axios.get('https://api.cerbosys.com/cerbosys/sitemap.xml',{
      responseType: 'text',
    }).then(response => {
         const data = response.data;
        // console.log('Sitemap => ', data);
        // setSitemapData(data);

        // Replace newline characters with HTML line breaks
      const formattedXml = response.data.replace(/\n/g, '<br>');
      setSitemapData(data);
       
       
       
      
      })
      .catch(error => {
        console.error('Error fetching sitemap:', error);
      });
  }, []);
  return (
    <div className='py-20'>
    {/* Use <textarea> to render XML content */}
    <textarea
      value={sitemapData}
      readOnly
      style={{ width: '100%', height: '400px' }}
    />
  </div>
  );
}

export default Sitemap;
