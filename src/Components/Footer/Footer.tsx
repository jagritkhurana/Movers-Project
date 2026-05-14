import { ArrowUp } from 'lucide-react';

function Footer() {
  return (
    <>
      <div className=' w-screen h-auto md:h-[323px] rounded-tl-[86px] relative rounded-tr-[86px]  border-[#F1D6CC]/30 bg-[#faf1ec] md:flex justify-center items-center md:justify-start md:items-start md:gap-15'>
        <div className=' flex justify-center items-center  md:m-10 md:ml-[130px]'>
          <img src="https://i.postimg.cc/PrDx8hX8/Movers-logo-removebg-preview.png" className='w-[170px] object-contain' />
        </div>
         <div className='flex flex-col mt-[-15px] ml-[100px] md:gap-2 md:mt-[80px] md:ml-[20px]'>
          <p className=' text-[15px] md:text-[20px] md:tracking-wider font-semibold  opacity-90 '>Product</p>
          <a href="#Features" className='text-[15px] md:text-[20px] md:tracking-wider md:mt-5 font-semibold   text-[#C2410C] opacity-80'>Features</a>
          <a href="#Works" className=' text-[15px] md:text-[20px] md:tracking-wider font-semibold text-[#C2410C] opacity-80'>How it Works</a>
        </div>
        <div className='flex flex-col mt-[-70px] ml-[225px] md:gap-2 md:mt-[80px] md:ml-[20px]'>
          <p className=' text-[15px] md:text-[20px] md:tracking-wider font-semibold  opacity-90 '>Support</p>
          <a href="#Contact" className= ' text-[15px] md:text-[20px] md:tracking-wider md:mt-5 font-semibold   text-[#C2410C] opacity-80'>Contact Us</a>
          <a href="#FAQ" className=' text-[15px] md:text-[20px] md:tracking-wider font-semibold text-[#C2410C] opacity-80'>FAQ</a>
        </div>
        <div className='flex flex-col md:gap-2 mt-[15px] ml-[100px] md:mt-[80px] md:ml-[20px]'>
          <p className='text-[15px] md:text-[20px] md:tracking-wider font-semibold   opacity-90'>Company</p>
          <a href="#Aboutus" className='text-[15px] md:text-[20px] md:tracking-wider md:mt-5 font-semibold  text-[#C2410C] opacity-80'>About Us</a>
        </div>
        <div className='flex flex-col md:gap-2 mt-[-45px] ml-[220px] md:mt-[80px] md:ml-[20px]'>
          <p className='text-[15px] md:text-[20px] md:tracking-wider font-semibold opacity-90 '>Download Now</p>
          <img src="/Google.svg" className='w-[80px] h-[50px] md:w-[170px] mt-[-10px] md:mt-0 md:h-[60px]' />
          <img src="/Apple.svg" className='mt-[-25px] w-[80px] h-[50px] md:w-[170px] md:mt-0 md:h-[60px] ' />
        </div> 

        <div className='relative'>
          <button
          onClick={()=>window.scrollTo({
            top:0,
            behavior:"smooth",
          })}
          className='absolute w-[40px] h-[40px] md:w-[68px] md:h-[68px] top-[-60px] right-[10px] rounded-full md:top-[230px] md:left-[160px] bg-[#C2410C]  opacity-80 hover:cursor-pointer '>
            <ArrowUp className=' hidden md:block ml-2 text-white ' size={50}/>
            <ArrowUp className=' text-white ml-1.5 md:hidden ' size={30}/>

          </button>

          
        </div>


      </div> 
      <div className='w-auto h-[63px]  bg-gray-950 flex justify-center items-center'>
        <p className='text-[14px] tracking-wider text-white opacity-80'>Copyright © fleetify 2025 . All rights reserved.</p>

      </div>

    </>
  )
}

export default Footer
