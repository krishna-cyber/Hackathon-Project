import React from "react";
import { FiSearch } from "react-icons/fi";
import News from "./News";
// import MapContainer from "./MyMap";

const Hero = () => {
  return (
    <div className=' flex justify-around gap-4 w-full'>
      <div className='right w-1/2 '>
        <div className='card p-4 bg-white flex justify-center items-center rounded-md w-full flex-col'>
          <form
            action=''
            className='w-full flex justify-center items-center relative'>
            <input
              className=' bg-[#EDF4Ff] p-2 w-1/2 rounded-md'
              type='
                text'
              placeholder='Search Doctor or Hospital'
            />
            <FiSearch className=' absolute right-[30%]' />
          </form>

          <p className=' mt-3 font-semibold'>Most searches</p>
          <div className=' flex gap-5 mt-2'>
            <p className=' bg-[#D9D9D9] px-3 rounded-sm py-1 text-[#2674BC]'>
              Family
            </p>
            <p className=' bg-[#D9D9D9] px-3 rounded-sm py-1 text-[#2674BC]'>
              Doctors
            </p>
            <p className=' bg-[#D9D9D9] px-3 rounded-sm py-1 text-[#2674BC]'>
              Ambulance
            </p>
            <p className=' bg-[#D9D9D9] px-3 rounded-sm py-1 text-[#2674BC]'>
              Hospital
            </p>
            <p className=' bg-[#D9D9D9] px-3 rounded-sm py-1 text-[#2674BC]'>
              Blood Bank
            </p>
          </div>
        </div>
        <div className='map'>
          <h2 className=' font-extrabold text-2xl text-[#2674BC] mt-3 p-4'>
            LOCATION
          </h2>

          <div className='map'></div>
        </div>
      </div>
      <div className='left w-1/2'>
        <div className='news bg-white p-4 flex flex-col gap-3'>
          <News />
        </div>
      </div>
    </div>
  );
};

export default Hero;
