import React from 'react'

const home = () => {
  return (
<div className='mt-[80px] flex flex-col justify-center items-center'>
  <div className='font-bold text-6xl bg-gradient-to-r from-pink-500 via-red-500 to-purple-600 text-transparent bg-clip-text inset-0'>A Fast Blockchain</div>
  <div className='mt-[15px] font-bold text-5xl'>Chain Fair</div>
  <div className='mt-[20px] text-xl font-medium'>Our technology performs fast blockchain (120K TPS) and has guaranteed 
    <br/> 
    AI-based data security. Proof of stake, its consensus algorithm enables
    <br/>
     <span className='flex justify-center'>unlimited speed.</span>
     </div>
  <div className='flex flex-row gap-x-12 mt-[30px]'>
    <button className='text-lg font-semibold border border-4 rounded-2xl
    px-[15px] py-[5px] bg-gradient-to-r from-pink-500 via-red-500 to-purple-600
  '>
    Get Started</button>
    <button className='text-lg font-semibold border border-4 rounded-2xl
    px-[15px] py-[5px]'>Ecosystem</button>
  </div>
</div>

  )
}

export default home
