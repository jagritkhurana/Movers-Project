import React from 'react'
import { easeInOut, motion } from 'motion/react'
import ChooseCard from '../Utilities/ChooseCard'

function Choosing() {
  const container = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95
    },
    vissible: { opacity: 1, x: 0, scale: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  }
  const item={
      hidden:{opacity:0,x:150,scale:0.96},
      vissible:{opacity:1,x:0,scale:1,transition:{
          duration:1,
          ease:easeInOut,
      }}
    }
  
  return (
    <> 
    <section id=''>

      <div className='md:w-auto md:h-auto mt-10'>
        <div className='flex gap-10'>

          <div className=' flex flex-col gap-0 m-7 md:m-15 md:px-[135px] md:justify-center md:items-center'>
            <h1 className=' md:text-[45px] font-semibold tracking-wider'>Why Choose Our App?</h1>
            <img src="/Br.svg" className='md:ml-[-250px]' />
          </div>
          <div className='hidden md:flex justify-center items-center text-[22px] opacity-80'>
            <p>What Make Us Unique & Different From Others!</p>
          </div> 
  

        </div>
        <motion.div className='flex flex-col justify-center items-center md:justify-start md:items-start'
          variants={container}
          initial="hidden"
          whileInView='vissible'
          viewport={{
            amount: 0.2
          }}
          >
          <div className='flex flex-col md:flex-row gap-10 mb-0 m-10 md:ml-50'>
            <ChooseCard
              title="Stay Compliant"
              discription='Always drive within government guidelines with real-time alerts.'
              />
            <motion.img
              variants={item}
              src="/Chooseimg.svg" className=' hidden md:block w-[773px] h-[295px] rounded-[44px] ' />

          </div>
          <div className='flex flex-col gap-5 justify-start items-start'>
            <div className='flex flex-col md:flex-row gap-10 m-10 md:ml-50'>
              <ChooseCard
                title='Seamless Truck 
                Trading'
                discription='Buy or sell trucks with ease using detailed filters and in-app chat.'
                />
              <ChooseCard
                title='Easy Log 
                Management'
                discription='Graphical views and editable logs for complete transparency.'
              />
              <ChooseCard
                title='Community-Driven 
Navigation'
discription='Graphical views and editable logs for complete transparency.'
              />

            </div>

          </div>


        </motion.div>

      </div>
</section>
    </>
  )
}

export default Choosing
