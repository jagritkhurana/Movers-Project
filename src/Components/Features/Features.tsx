import React from 'react'
import FeatureCard from '../Utilities/FeatureCard'
import {  motion} from 'motion/react'


function Features() {

  const container = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95
    },
    vissible: { opacity:1,y:0,scale:1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  }


  return (
    <>
    <section id='Features'>

      <div className='w-scren md:w-auto  md:h-auto mt-10 bg-gray-200 pb-20 rounded-[80px] md:rounded-[98px]'>
        <div className='flex md:flex md:gap-10 '>
          <div className=' flex flex-col gap-0 m-15 md:px-[135px] md:justify-center md:items-center'>
            <h1 className=' md:text-[45px] font-semibold tracking-wider'>Key Features</h1>
            <img src="/Br.svg" className='md:ml-[120px]' />
          </div>
          <div className='hidden md:block md:flex justify-center items-center text-[22px] opacity-80'>
            <p>What Make Us Unique & Different From Others!</p>
          </div>

        </div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView='vissible'
          viewport={{
            amount: 0.2
          }}
          className='flex flex-col gap-5 justify-center items-center '>


          <FeatureCard
            icon='/Calender.svg'
            title=' Real-Time Log Tracking'
            discription={["Log your driving activities effortlessly in real-time and stay compliant with government guidelines."]}
            />
          <FeatureCard
            icon='/Noti.svg'
            title=' Smart Alerts & Reminders'
            discription={["Get reminders for breaks, off-time, and when you're allowed to drive, ensuring safe and",
              "compliant journeys."]}
              />
          <FeatureCard
            icon='/Calender.svg'
            title=' Easy Log Management'
            discription={["View logs in a graphical, easy-to-understand chart format.", "Edit logs within a 7-day window to maintain accuracy."]}
            />
          <FeatureCard
            icon='/Calender.svg'
            title=' Buy & Sell Trucks with Ease'
            discription={["List your truck for sale with complete details, including model, year, images, and more.", "Find pre-owned trucks using filters like model, manufacturer, location, and more."]}
            />
          <FeatureCard
            icon='/Navigation.svg'
            title=' Seamless Navigation & Safety Alerts'
            discription={["Navigate routes tailored for truck drivers with voice guidance.", "Mark road alerts like speed cameras, accidents, or poor road conditions for others."]}
            />
          <FeatureCard
            icon='/Com.svg'
            title=' In-App Communication'
            discription={["Connect directly with truck sellers through secure, in-app text-based chat."]}
            />
        </motion.div>

      </div>

            </section>
    </>
  )
}

export default Features
