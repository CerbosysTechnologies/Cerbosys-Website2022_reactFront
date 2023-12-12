import React, { useEffect, useState } from 'react';

function Sitemap({ data }) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default Sitemap;