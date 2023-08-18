import React, { useEffect } from "react";
import axios from "axios";
import { xml2js, js2xml } from "xml-js";

const SitemapGenerator = () => {
  useEffect(() => {
    generateSitemap();
  }, []);

  const generateSitemap = async () => {
    try {
      // Fetch your website data from the API
      const response = await axios.get("https://cerbosys.in:3700/cerbosys");
      const data = response.data;

      // Parse the data to get the list of URLs
      const urls = parseDataToUrls(data);

      // Generate the sitemap XML
      const sitemapXml = generateSitemapXml(urls);

      // Host the sitemap on your server (you may need to configure your server to serve sitemap.xml)

      // Log the sitemap for testing purposes
      console.log(sitemapXml);
    } catch (error) {
      console.error("Error generating sitemap:", error);
    }
  };

  const parseDataToUrls = (data) => {
    // Parse your data to extract the URLs of your pages
    // Example: Assuming your data has a property called "slug"
    console.log(data);
    return data.map((item) => `/blog/${item.slug}`);
  };

  const generateSitemapXml = (urls) => {
    const sitemapData = {
      elements: [
        {
          type: "element",
          name: "urlset",
          elements: urls.map((url) => ({
            type: "element",
            name: "url",
            elements: [
              {
                type: "element",
                name: "loc",
                elements: [
                  { type: "text", text: `https://cerbosys.com/${url}` },
                ],
              },
            ],
          })),
        },
      ],
    };

    const sitemapXml = js2xml(sitemapData, { compact: true, spaces: 2 });
    return sitemapXml;
  };

  return <div>Sitemap Generator</div>;
};

export default SitemapGenerator;
