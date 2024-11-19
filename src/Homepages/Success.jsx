import React from 'react'
import CountUp from 'react-countup'
import Aos from 'aos'
import 'aos/dist/aos.css';
function Success() {
  Aos.init();
  return (
    <div className='flex md:flex-row flex-col md:space-x-1 space-y-8 text-center  px-4 justify-between p-8 border-2  mt-10 bg-[url(/m.png)] rounded-md' >


      <div className='bg-green-300  w-full  mt-6 sm:w-48 md:w-56 lg:w-64 px-6 py-4  rounded-md mb-4 border border-black' data-aos="fade-left" >

        <p className='text-xl font-semibold'>User</p>
         <CountUp className='text-xl' separator=',' decimal={0}end={100000} duration={60*10000} start={650} suffix='+'/>
      </div>

      <div className=' w-full sm:w-48 md:w-56 lg:w-64 px-6 py-4 border-2 rounded-md border-white bg-black 'data-aos="fade-right" >

        <p className='text-white text-xl font-semibold'>Lesson</p>
        <CountUp  className='text-xl text-white' end={200} start={100} suffix='+' duration={60*1000}/>
      </div>

      <div data-aos="fade-left" className=' w-full sm:w-48 md:w-56 lg:w-64 px-6 py-4 bg-indigo-500  rounded-md border-white'>
        <p className='text-xl text-white font-semibold'>vocabulary</p>
        <CountUp className='text-xl text-white' end={560} start={250} suffix='+' duration={60*1000}/>
      </div>
      <div className=' w-full sm:w-48 md:w-56 lg:w-64 px-6 py-4  border-2 shadow-xl rounded-md bg-fuchsia-500' data-aos="fade-left">
        <p className='text-xl font-semibold'>Tutorial</p>

        <CountUp end={99} className='text-xl font-semibold' start={9} suffix='+' duration={60*10000}/>
      </div>


    </div>
  )
}

export default Success