import React from "react";
import { SlCalender } from "react-icons/sl";
import { BiComment } from "react-icons/bi";

const News = () => {
  return (
    <div>
      <h2 className='font-extrabold text-3xl text-[#2674BC]'>News Updates</h2>
      <p>-24 oct 2021</p>
      image
      <div className=' icons flex justify-around '>
        <span className=' flex items-center gap-2 '>
          <SlCalender className=' inline-block' />
          <p className=' font-extralight'>24 Oct 2021</p>
        </span>
        <span className='flex items-center gap-2'>
          <BiComment />
          <p className=' font-extralight'>136 comments</p>
        </span>
      </div>
    </div>
  );
};

export default News;
