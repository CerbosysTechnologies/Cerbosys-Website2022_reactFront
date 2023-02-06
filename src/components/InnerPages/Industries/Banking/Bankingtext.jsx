import React, { useState } from 'react';
import bankingicon1 from '../../../../assets/innerpage/banking/bankingicon1.png';
import bankingicon2 from '../../../../assets/innerpage/banking/bankingicon2.png';
const Bankingtext = () => {
  const [text, settext] = useState();

  return (
    <>
      <div className="px-20 py-4 bg-black">
        <h2
          className="font-heading cursor-pointer text-white w-[100px]"
          onMouseEnter={() => settext(!text)}
        >
          Cerbosys
        </h2>{' '}
        <div className="text-Green">{text ? 'hello guys' : 'hiii deepika'}</div>
      </div>
    </>
  );
};

export default Bankingtext;
