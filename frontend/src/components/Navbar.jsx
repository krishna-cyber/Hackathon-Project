import React from "react";

const Navbar = () => {
  return (
    <div className='nav'>
      <nav className='flex justify-around items-center'>
        <div className='logo'>
          <img className=' h-12' src='./src/images/logo1.jpg' alt='logo' />
        </div>
        <div className='links'>
          <ul className=' flex gap-10'>
            <li>Find a doctor</li>
            <li>Find a hospital</li>
            <li>Health a to z</li>
          </ul>
        </div>
        <div className='login flex gap-5 items-center'>
          <a href='' className=' text-[#2674BC]'>
            Sign in
          </a>
          <a href='' className='color-white px-2 py-2  bg-[#3777df] rounded-lg'>
            sign up
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
