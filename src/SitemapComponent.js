import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; // Choose a style
import xmlFormatter from 'xml-formatter';

function Sitemap() {
  const [sitemapData, setSitemapData] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.cerbosys.com/cerbosys/sitemap.xml', {
        headers: { Accept: 'application/xml' },
      })
      .then((response) => {
        //const data = response.data;
        // console.log('Sitemap => ', data);
        // setSitemapData(data);

        // Replace newline characters with HTML line breaks
        //const formattedXml = response.data.replace(/\n/g, '<br>');
        //setSitemapData(data);
        //const xml = response.text();
        //setSitemapData(data);
        // Ensure that the response is XML and not treated as HTML
        const contentType = response.headers['content-type'];
        if (contentType && contentType.includes('application/xml')) {
          const formattedXml = xmlFormatter(response.data, {
            indentation: '  ', // Set the desired indentation
            collapseContent: true, // Optional: collapse empty elements
          });
          setSitemapData(formattedXml);
        } else {
          console.error('Unexpected content type:', contentType);
        }
      })
      .catch((error) => {
        console.error('Error fetching sitemap:', error);
      });
  }, []);
  return (
    <>
      {/* <SyntaxHighlighter language="xml">{sitemapData}</SyntaxHighlighter> */}
      <pre>{sitemapData}</pre>

      {/* Use <textarea> to render XML content */}
      {/* <textarea
      value={sitemapData}
      readOnly
      style={{ width: '100%', height: '400px' }}
    /> */}
    </>
  );
}

export default Sitemap;
