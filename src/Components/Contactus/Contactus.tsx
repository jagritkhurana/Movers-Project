import React from 'react'

function Contactus() {
  return (
 
    <>
      <section id='Contact'>
        <div className='w-auto h-auto pb-20 md:pb-0 rounded-[80px] md:rounded-[98px]  bg-[linear-gradient(195deg,#FFEDD5_0%,#FFFFFF_45%,#FAF1EC_100%)]'>
          <div className='flex flex-col justify-center items-center md:flex-row md:justify-start md:items-start md:gap-10'>
            <div className='flex flex-col w-auto gap-5   md:items-start m-15 md:ml-[175px] mr-0'>
              <h1 className=' text-[30px] md:text-[45px]  font-semibold tracking-wider md:ml-[10px] text-[#18181B]'>Contact Us</h1>
              <p className='text-[22px] opacity-80  md:ml-[10px] text-[#18181B]'>Got questions or feedback? </p>
              <p className='text-[22px] opacity-80 mr-[55px] mt-[-20px] md:ml-[10px] text-[#18181B]'>
               We’d love to hear from you!</p> 
               <img src="/Contact.svg" className='hidden md:block'  />


            </div>
            <div className='flex flex-col gap-5 justify-center items-center md:justify-start md:items-start md:m-15 md:mt-[125px] '>
              <input type="text"
              placeholder='Name'
              className='border-gray-400/40 border p-2 w-[300px] h-[50px] font-bold text-black md:w-[545px] md:h-[50px]'
              />
              <input type='email'
              placeholder='Email'
              className='border-gray-400/40 border p-2 font-bold  w-[300px] h-[50px] text-black md:w-[545px] md:h-[50px]'
              />
              <input type="text"
              placeholder='Phone number'
              className='border-gray-400/40 border p-2 font-bold  w-[300px] h-[50px] text-black md:w-[545px] md:h-[50px]'
              />
              <input type="text"
              placeholder='Write Us'
              className='border-gray-400/40 border p-2 font-bold  w-[300px] h-[50px] text-black md:w-[545px] md:h-[50px]'
              />
             <button className='md:w-[545px] md:h-[50px] text-white font-semibold  w-[300px] h-[50px] opacity-80 bg-[#C2410C] flex justify-center items-center'>
              SEND
             </button>

             <div className='flex flex-col md:flex-row gap-2 items-center md:justify-between  w-[300px] h-[50px] md:w-[545px] md:h-[50px]'>
              <div className='flex gap-2 justify-center items-center'>
                <img src="/Phone.svg" className='w-[20px] h-[20px] md:w-[28px] md:h-[28px]' />
                <div className='flex flex-col gap-0.5'>
                  <p className='text-xs md:text-sm font-semibold opacity-65'>PHONE</p>
                  <p className='text-xs md:text-sm text-[#C2410C] opacity-90'>12 3456 7890</p>

                </div>

              </div>
              <div className='flex gap-2 justify-center items-center'>
                <img src="/Fax.svg" className='w-[20px] h-[20px] md:w-[28px] md:h-[28px]' />
                <div className='flex flex-col gap-0.5'>
                  <p className='text-xs md:text-sm font-semibold opacity-65'>FAX</p>
                  <p className='text-xs md:text-sm text-[#C2410C] opacity-90'>12 3456 7890</p>

                </div>

              </div>
              <div className='flex gap-2 ml-[30px] md:ml-0 justify-center items-center'>
                <img src="/Email.svg" className='w-[20px] h-[20px] md:w-[28px] md:h-[28px]' />
                <div className='flex flex-col gap-0.5'>
                  <p className='text-xs md:text-sm font-semibold opacity-65'>EMAIL</p>
                  <p className='text-xs md:text-sm text-[#C2410C] opacity-90'>info@xyzx.com.in</p>

                </div>

              </div>
             
             </div>

            </div>


          </div>

        </div>

      </section>
    </>

  )
}

export default Contactus
