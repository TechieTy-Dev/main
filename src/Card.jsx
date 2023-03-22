import React from 'react'
import "./App.css"

const Card = () => {
  return (
    <div className='w-100 h-100 lg:w-[60%] lg:flex lg:flex-row lg:mx-auto lg:mt-64 lg:shadow-lg lg:rounded-2xl'>
    <div className='bg-gradient flex flex-col text-center rounded-b-3xl pt-4 text-white lg:rounded-3xl lg:w-[45%]' >
  <h3 className='lavender font-semibold lg:mt-2'>Your Result</h3>
  <div className='circle-gradient text-white w-32  h-32 rounded-full text-center flex flex-col justify-center align-middle mx-auto mt-4 lg:mt-8'>
  <h1 className='text-5xl font-extrabold'>76</h1>
  <p className='text-xs text-gray-400 '>of 100</p>
  </div>
 
  <h2 className='font-bold text-2xl lg:mt-12'>Great</h2>
  <p className='lavender w-[65%] mb-6 mx-auto mt-2 lg:mt-4 lg:w-[65%]'>You scored higher than 65% of the people who have taken these tests.</p>
  </div>
  {/* CARD BTM */}
  <div className="w-[80%] mx-auto pt-2 pb-4 lg:w-[50%] lg:p-6 lg:rounded-br-lg">
 <h3 className='gray mt-4 font-extrabold lg:text-xl'>Summary</h3>
 {/* REACTION CARD */}
 <div className='flex justify-between red-bg w-100 p-4 mt-4 mb-3 rounded-lg lg:w-[90%]'>
    <div className='flex align-middle justify-center gap-4'>
 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#F55" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10.833 8.333V2.5l-6.666 9.167h5V17.5l6.666-9.167h-5Z"/></svg>
 <h4 className='red font-semibold'> Reaction </h4>
 </div>
  <p className='text-gray-400  font-medium'><span className="gray font-extrabold">80</span> / 100</p>
  </div>
  {/* MEMORY CARD */}
  <div className='flex justify-between orange-bg w-100 p-4 mt-4 mb-3 rounded-lg lg:w-[90%]'>
    <div className='flex align-middle justify-center gap-4'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M5.833 11.667a2.5 2.5 0 1 0 .834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M3.553 13.004a3.333 3.333 0 0 1-.728-5.53m.025-.067a2.083 2.083 0 0 1 2.983-2.824m.199.054A2.083 2.083 0 1 1 10 3.75v12.917a1.667 1.667 0 0 1-3.333 0M10 5.833a2.5 2.5 0 0 0 2.5 2.5m1.667 3.334a2.5 2.5 0 1 1-.834 4.858"/><path stroke="#FFB21E" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M16.447 13.004a3.334 3.334 0 0 0 .728-5.53m-.025-.067a2.083 2.083 0 0 0-2.983-2.824M10 3.75a2.085 2.085 0 0 1 2.538-2.033 2.084 2.084 0 0 1 1.43 2.92m-.635 12.03a1.667 1.667 0 0 1-3.333 0"/></svg>
 <h4 className='orange font-semibold'>Memory</h4>
 </div>
  <p className='text-gray-400  font-medium'><span className="gray font-extrabold"> 92</span> / 100</p>
  </div>
{/* VERBAL CARD */}
<div className='flex justify-between green-bg w-100 p-4 mt-4 mb-3 rounded-lg lg:w-[90%]'>
    <div className='flex align-middle justify-center gap-4'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#00BB8F" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M7.5 10h5M10 18.333A8.333 8.333 0 1 0 1.667 10c0 1.518.406 2.942 1.115 4.167l-.699 3.75 3.75-.699A8.295 8.295 0 0 0 10 18.333Z"/></svg>
 <h4 className='green font-semibold'>Verbal</h4>
 </div>
  <p className='text-gray-400  font-medium'><span className="gray font-extrabold"> 61</span> / 100</p>
  </div>

  {/* Visual Card */}
  <div className='flex justify-between blue-bg w-100 p-4 mt-4 mb-3 rounded-lg lg:w-[90%]'>
    <div className='flex align-middle justify-center gap-4'>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M10 11.667a1.667 1.667 0 1 0 0-3.334 1.667 1.667 0 0 0 0 3.334Z"/><path stroke="#1125D6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.25" d="M17.5 10c-1.574 2.492-4.402 5-7.5 5s-5.926-2.508-7.5-5C4.416 7.632 6.66 5 10 5s5.584 2.632 7.5 5Z"/></svg>
 <h4 className='blue font-semibold'> Visual</h4>
 </div>
  <p className='text-gray-400 font-medium'><span className="gray font-extrabold"> 72</span> / 100</p>
  </div>

 


 <button className="gray-bg w-[100%] p-4 h-[60px] text-white font-semibold rounded-full text-center mt-3  hover:bg-[#1125d4] hover:cursor-pointer lg:w-[90%]">Continue</button> 
 </div>
    </div>
  )
}

export default Card