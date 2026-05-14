import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='bg-[#FDFBF7] shadow-sm'  >
      <div className=' flex items-center justify-center md:max-w-[1400px] mx-auto   md:justify-between'>
        <div className='flex items-center justify-center md:mx-[67px]  mt-1'>
          <img src="https://i.postimg.cc/PrDx8hX8/Movers-logo-removebg-preview.png" className='w-[170px] object-contain' />
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-16  p-8 font-semibold text-[18px] text-[#18181B] opacity-95'>
            <li className='hover:text-[#C2410C] transition-colors'>
              <a href="#Home">Home</a>
            </li>
            <li className='hover:text-[#C2410C] transition-colors'>
              <a href="#Aboutus">About Us</a>
            </li>
            <li className='hover:text-[#C2410C] transition-colors'>
              <a href="#Features">Features</a>
            </li>
            <li className='hover:text-[#C2410C] transition-colors'> 
              <a href="#FAQ">FAQ</a>
            </li>
            <li className='hover:text-[#C2410C] transition-colors'>
              <a href="#Terms">Terms & Conditions</a>
            </li>
            <li className='bg-[#C2410C] hover:bg-[#A6360B] transition-all px-12 rounded-full mt-[-7px] font-light text-white py-2'>
              <a href="#Contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar
