import React from 'react'

function Navbar() {
  return (
    <>
    <nav  >
      <div className=' flex items-center justify-center md:max-w-[1400px] mx-auto   md:justify-between'>
        <div className='flex items-center justify-center md:mx-[67px]  mt-1'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj0vGGqVZWpM5VM8pyY1Og2vQpz40Z6YMQAkXeag0VIR1FndHEZXKeL2Q&s=10" className='w-[170px] object-contain' />
        </div>
        <div className='hidden md:block'>
          <ul className='flex gap-16  p-8 font-semibold text-[18px] opacity-95'>
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#Aboutus">About Us</a>
            </li>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li> 
              <a href="#FAQ">FAQ</a>
            </li>
            <li>
              <a href="#Terms">Terms & Conditions</a>
            </li>
            <li className='bg-blue-600 px-12 rounded-full mt-[-7px] font-light text-white py-2'>
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
