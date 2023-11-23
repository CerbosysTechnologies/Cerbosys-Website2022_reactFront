// import React from 'react';
// import GenerateSitemap from 'react-router-sitemap-maker';
const GenerateSitemap = require('react-router-sitemap-maker');
// import Routes from './src/Routers.js';
const Routes = require('./src/Routers.js');
const sitemap = async () => {
  try {
    const sitemapData = await GenerateSitemap(Routes(), {
      baseUrl: 'https://cerbosys.com',
      hashrouting: true,
      changeFrequency: 'monthly',
    });

    sitemapData.toFile('./build/sitemap.xml');
    console.log('Sitemap generated successfully!');
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
};


