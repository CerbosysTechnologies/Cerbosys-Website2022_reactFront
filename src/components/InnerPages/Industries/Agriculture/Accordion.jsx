import React from 'react';
import { useState } from 'react';
import { AiFillCaretUp, AiFillCaretDown } from 'react-icons/ai';

const Accordion = () => {
  const [show, setShow] = useState('');
  const [show1, setShow1] = useState('');
  const [show2, setShow2] = useState('');
  const [show3, setShow3] = useState('');
  const [show4, setShow4] = useState('');

  return (
    <>
      <div
        className={
          show
            ? 'bg-Primary text-white rounded-lg mt-3 ease-in duration-150'
            : 'text-Primary  mt-3 ease-in duration-150'
        }
      >
        <div
          onClick={() => setShow(!show)}
          className="cursor-pointer flex justify-between border-2 border-Primary p-4 rounded-lg "
        >
          <h6 className="font-heading">Mobile app development</h6>
          <div>{show ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
        </div>
        {show ? (
          <p className="p-4">
            Mobile apps are becoming more and more important in agriculture, as
            they allow farmers to access information about weather conditions
            and crop health, as well as other useful tools like apps for
            tracking animal health, GPS locators for equipment maintenance, and
            more.
          </p>
        ) : (
          ''
        )}
      </div>
      <div
        className={
          show4
            ? 'bg-Primary text-white rounded-lg mt-3 ease-in duration-150'
            : 'text-Primary  mt-3 ease-in duration-150'
        }
      >
        <div
          onClick={() => setShow4(!show4)}
          className="cursor-pointer flex justify-between border-2 border-Primary p-4 rounded-lg "
        >
          <h6 className="font-heading">Automation</h6>
          <div>{show4 ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
        </div>
        {show4 ? (
          <>
            <p className="p-4">
              Automation is transforming the farming industry. It's helping
              farmers turn out more food, faster and with less labor, while also
              reducing their costs.
            </p>
            <p className="px-4 py-2">
              The biggest change is that farmers are using automation to do
              things that used to be done by humans: they're now able to plant
              seeds, fertilize them, water them, and harvest them all at once.
              This allows them to get more out of each acre of land than ever
              before--and it also means that they no longer need as much labor
              as before.
            </p>
          </>
        ) : (
          ''
        )}
      </div>

      <div
        className={
          show1
            ? 'bg-Primary text-white rounded-lg mt-3 ease-in duration-150'
            : 'text-Primary  mt-3 ease-in duration-150'
        }
      >
        <div
          onClick={() => setShow1(!show1)}
          className="cursor-pointer flex justify-between border-2 border-Primary p-4 rounded-lg "
        >
          <h6 className="font-heading">GIS software and GPS agriculture</h6>
          <div>{show1 ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
        </div>
        {show1 ? (
          <p className="p-4">
            GIS & GPS software allows farmers to create maps with data points
            that represent each field in their operation. These maps can then be
            used by managers to see at a glance how crops are performing, which
            fields need more attention, and where there might be opportunities
            for expansion.
          </p>
        ) : (
          ''
        )}
      </div>
      <div
        className={
          show2
            ? 'bg-Primary text-white rounded-lg mt-3 ease-in duration-150'
            : 'text-Primary  mt-3 ease-in duration-150'
        }
      >
        <div
          onClick={() => setShow2(!show2)}
          className="cursor-pointer flex justify-between border-2 border-Primary p-4 rounded-lg "
        >
          <h6 className="font-heading">Farming software and online data</h6>
          <div>{show2 ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
        </div>
        {show2 ? (
          <>
            <p className="p-4">
              The farming industry is rapidly changing, and it's transforming
              with the help of technology.
            </p>
            <p className="px-4 py-2">
              There are several major trends in agriculture at play:
            </p>
            <ul className="px-4 py-2 ">
              <li>- The rise of data collection and analysis</li>
              <li>
                - The growth of online farming software, which allows farmers to
                make more informed decisions about their farms
              </li>
              <li>- The use of drones for aerial photosynthetic analysis</li>
            </ul>
          </>
        ) : (
          ''
        )}
      </div>
      <div
        className={
          show3
            ? 'bg-Primary text-white rounded-lg mt-3 ease-in duration-150'
            : 'text-Primary  mt-3 ease-in duration-150'
        }
      >
        <div
          onClick={() => setShow3(!show3)}
          className="cursor-pointer flex justify-between border-2 border-Primary p-4 rounded-lg "
        >
          <h6 className="font-heading">Agriculture ecommerce</h6>
          <div>{show3 ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
        </div>
        {show3 ? (
          <p className="p-4">
            The Internet has made it easier than ever for farmers to market
            their goods and services, but it can also be tough for them to get
            their products into the hands of consumers who they know will buy
            them. This is where agriculture ecommerce comes in: It allows
            farmers to reach out directly to consumers online, which means they
            can reach more people and sell more products than ever before.
          </p>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Accordion;
