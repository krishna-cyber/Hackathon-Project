import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TbMedicineSyrup } from "react-icons/tb";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='links flex justify-around '>
        <div className='logo-section flex flex-col'>
          <div className='logos flex'>
            <TbMedicineSyrup className=' text-3xl' />
            <span className=' ml-3 font-bold text-2xl'>Health Care</span>
          </div>
          <div className='links flex gap-4 text-[#4aa5d6] mt-2'>
            <BsFacebook className='text-2xl' />
            <AiFillTwitterCircle className='text-2xl' />
          </div>
        </div>
        <div className='patients-link'>
          <h3 className=' font-semibold text-lg'>for patients</h3>
          <ul className=' list-none flex flex-col gap-2'>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
            <li>link 4</li>
          </ul>
        </div>
        <div className='hospital-links'>
          <h3 className=' font-semibold text-lg'>for hospital</h3>
          <ul className=' list-none flex flex-col gap-2'>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
            <li>link 4</li>
          </ul>
        </div>
      </div>
      <p className=' text-center text-lg font-light mt-4'>
        © 2021 All Rights Reserved. Developed by Alpha Hack💖💖
      </p>
    </div>
  );
};

export default Footer;
