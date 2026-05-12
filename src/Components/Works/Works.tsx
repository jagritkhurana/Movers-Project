import React from 'react'
import WorkCard from '../Utilities/WorkCard'
import {easeInOut, motion} from 'motion/react'

function Works() {
  const container = {
    hidden: {
      opacity: 0,
      x: -150,
      scale: 0.95
    },
    vissible: { opacity: 1, x: 0, scale: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  }

  const item={
      hidden:{opacity:0,x:-150,scale:0.96},
      vissible:{opacity:1,x:0,scale:1,transition:{
          duration:1,
          ease:easeInOut,
      }}
    }
  return (
    <>
      <div className='md:w-auto  md:h-auto mt-10 bg-[linear-gradient(90deg,_#eaf6fb_0%,_#f3f4fb_52%,_#f6eaf5_100%)] pb-20 rounded-[80px] md:rounded-[98px]'>
        <div className='flex md:flex md:gap-10'>
          <div className=' flex gap-2 md:gap-0 m-15 md:px-[135px] md:justify-center md:items-center'>
            <h1 className=' text-[30px] md:text-[45px] font-semibold tracking-wider'><span className=' md:text-[45px] font-semibold tracking-wider text-blue-800'>How It</span> Works</h1>
            <img src="/Work.svg" className='w-[50px] mt-2 md:ml-10 md:mt-2 md:w-[120px]' />
          </div>

        </div>
        <motion.div 
        variants={container}
        initial='hidden'
        whileInView='vissible'
        viewport={{
            amount: 0.2
          }}
        className='w-auto h-auto grid grid-cols-1  md:grid-cols-3  md:w-[1200px] md:h-[550px] md:ml-[130px]'>

          <motion.div  
          variants={item}className='border-r-2 border-b-2   border-black/25 '>
            <WorkCard
              title='Seamless Truck 
               Trading'
              discription='Quick registration with email or mobile number verification.'
            />
          </motion.div>
          <motion.div 
          variants={item} className='border-b-2 border-r-2  border-black/25 '>
            <WorkCard
              title='Log Your 
               Time'
              discription='Real-time activity logging with smart suggestions.'
            />
          </motion.div>
          <motion.div 
          variants={item} className=' border-b-2 border-black/25 '>
            <WorkCard
              title='Stay 
              Connected'
              discription='In-app messaging and notifications for seamless communication.'
            />
          </motion.div>
          <motion.div  
          variants={item}className='border-b-2  md:border-r-2 md:border-b-0  border-black/25 '>
            <WorkCard
              title='View & Manage 
               Logs'
              discription='Access graphical logs and manage previous entries.'
            />
          </motion.div>
          <motion.div 
          variants={item} className='border-b-2  md:border-r-2 md:border-b-0  border-black/25 '>
            <WorkCard
              title='Buy & Sell 
              Trucks'
              discription='Effortlessly publish your truck or find pre-owned trucks.'
            />
          </motion.div>
          <motion.div
          variants={item}
          className='p-10 ml-5 flex gap-2 flex-col'>
            <p className='text-[30px] font-semibold tracking-wider'><span className='text-[30px] font-semibold tracking-wider text-blue-800'>Download </span>Now</p>
            <div className='flex flex-col gap-1'>
              <img src="/Google.svg"   className='w-[170px] h-[60px]' />
              <img src="/Apple.svg" className='w-[170px] h-[60px] ' />
            </div>


          </motion.div>



        </motion.div>

      </div> 
    </>
  )
}

export default Works 
