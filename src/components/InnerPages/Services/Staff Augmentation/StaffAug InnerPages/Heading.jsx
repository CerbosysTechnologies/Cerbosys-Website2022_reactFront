import { Title } from '@mui/icons-material';
import React from 'react';

const Heading = ({ title, className }) => {
  return (
    <h2 className={`uppercase font-heading md:text-3xl text-2xl ${className}`}>
      {title}
    </h2>
  );
};

export default Heading;
