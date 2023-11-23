import { createSitemap } from 'sitemap';
import { createServer } from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from './src/Routers'; // Adjust the path based on your project structure

const server = createServer((req, res) => {
  const sitemap = createSitemap({
    hostname: 'https://cerbosys.com', // Change this to your actual website URL
    urls: [
      { url: '/', changefreq: 'daily', priority: 0.7 },
      { url: '/overview', changefreq: 'daily', priority: 0.7 },
      { url: '/training-and-development', changefreq: 'daily', priority: 0.7 },
      // Add more URLs dynamically based on your routes
    ],
  });

  if (req.url === '/sitemap.xml') {
    res.setHeader('Content-Type', 'application/xml');
    res.end(sitemap.toString());
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

const port = 3000; // Choose an available port

server.listen(port, () => {
  console.log(`Sitemap server is listening on http://localhost:${port}`);
});
