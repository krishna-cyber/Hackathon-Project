import React from "react";
import { SlCalender } from "react-icons/sl";
import { BiComment } from "react-icons/bi";

const News = () => {
  return (
    <div className=' '>
      <h2 className='font-extrabold text-3xl text-[#2674BC]'>News Updates</h2>
      <p>-24 oct 2021</p>
      <div className='images flex justify-center items-center'>
        <img className=' h-48 w-[70%]' src='./src/images/logo1.jpg' alt='' />
      </div>

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
      <h3 className=' title font-semibold text-lg mt-4 text-[#2674BC]'>
        "Informed Citizen: Stay Up-to-Date on Government News and Policies"
      </h3>
      <p className=' px-4 mt-2'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
        officia voluptates similique repudiandae natus nulla sit ipsam ipsa,
        magni explicabo, corrupti aut cum delectus perspiciatis tenetur suscipit
        incidunt officiis quisquam.
      </p>
    </div>
  );
};

export default News;
