import React from "react";

const Info = () => {
  return (
    <section className='info p-2 flex justify-around'>
      <div className=' w-full p-8'>
        <h3 className=' font-bold text-lg w-1/2 text-center'>
          Quotes of the day
        </h3>
        <p className=' text-[#2674BC] text-center mt-4'>
          Eat a healthy, balanced diet that is low in sugar and saturated fat.
          This can help to keep blood sugar levels in check.
        </p>
      </div>
      <div className='w-[30%] mr-4'>
        <h3 className='font-bold text-lg text-center'>Latest News</h3>
        <p className=' mt-4 text-red-500'>
          "Government Launches National Polio Immunization Campaign"
        </p>
      </div>
    </section>
  );
};

export default Info;
