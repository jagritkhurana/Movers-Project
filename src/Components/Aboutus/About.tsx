import React from 'react'
import AboutCard from '../Utilities/AboutCard'
import {easeInOut, motion} from 'motion/react'

function About() {
  return (
    <>
      <section id='Aboutus'>
        <div className='md:w-auto md:h-auto mt-10 pb-20'>
          <div className='flex '>

            <div className=' flex flex-col gap-0 m-7 md:m-15 md:px-[120px] md:justify-center md:items-center'>
              <h1 className=' text-[30px] md:text-[45px] font-semibold tracking-wider text-[#18181B]'>About Us</h1>
              <img src="/About.svg" className='md:ml-[200px]' />
            </div>
            <div className='hidden md:flex justify-center items-center text-[18px] opacity-80 p-20 text-[#52525B] '>
              <p>we are dedicated to empowering truck drivers with smart, reliable, and user-friendly tools to simplify log tracking and ensure compliance.</p>
            </div>


          </div>

          <div className='flex justify-center items-center flex-col  md:flex-row md:justify-start md:items-start gap-10 '>
            <div className=' w-[350px]  h-auto md:w-[503px] md:h-[431px] bg-[#C2410C] shadow-sm text-white flex flex-col gap-12 justify-start p-10 opacity-80 rounded-[37px] md:ml-[135px]'>
              <h1 className='text-[20px] md:text-[24px] font-semibold text-white tracking-wider'>Our Mission</h1>
              <h1 className='text-[20px] md:text-[24px] font-semibold text-white tracking-wider'>Why We Built This App</h1>
              <h1 className='text-[20px] md:text-[24px] font-semibold text-white tracking-wider'>Our Vision</h1>
              <h1 className='text-[20px] md:text-[24px] font-semibold text-white tracking-wider'>Join Us on Our Journey</h1>
            </div>
            <motion.div 
            initial={{opacity:0,y:150}}
            whileInView={{opacity:1,y:0,transition:{
              duration:0.8,
              ease:easeInOut
              
            }}}
            
            viewport={{
              amount:0.1
            }}
            className='flex flex-col justify-center items-center gap-8'>
              <AboutCard
                title='Our Mission'
                discription='To transform the trucking industry by providing an all-in-one platform that not only monitors driving logs but also builds a connected driver community, promoting safety, compliance, and efficiency on the road.'
              />

              <div className=' w-[350px] h-auto flex flex-col md:w-[700px] md:h-[797px] gap-10 p-10 justify-start items-start rounded-[37px] border-[#F1D6CC]/30 bg-[#faf1ec]'>
                <h1 className='text-[30px] font-semibold tracking-wider text-[#18181B]'>Why We Built This App</h1>
                <p className='text-[18px] opacity-70 text-[#52525B]'>We recognize the challenges truck drivers face in maintaining accurate logs, staying compliant with government regulations, and finding dependable trucks. Our app is built to solve these issues by providing:</p>
                <div className='flex flex-col gap-1 mt-3'>
                  <h1 className='text-[22px] opacity-80 font-semibold tracking-wider text-[#18181B]'>Real-Time Log Tracking</h1>
                  <p className='text-[18px] opacity-70 text-[#52525B]'>Log driving hours effortlessly and stay compliant.</p>
                </div>
                <div className='flex flex-col gap-1 mt-3'>
                  <h1 className='text-[22px] opacity-80 font-semibold tracking-wider text-[#18181B]'>Smart Alerts & Reminders</h1>
                  <p className='text-[18px] opacity-70 text-[#52525B]'>Get timely alerts for breaks and driving schedules.</p>
                </div>
                <div className='flex flex-col gap-1 mt-3'>
                  <h1 className='text-[22px] opacity-80 font-semibold tracking-wider text-[#18181B]'>Truck Marketplace</h1>
                  <p className='text-[18px] opacity-70 text-[#52525B]'>Buy and sell trucks with ease using detailed listings and in-app chat.</p>
                </div>
                <div className='flex flex-col gap-1 mt-3'>
                  <h1 className='text-[22px] opacity-80 font-semibold tracking-wider text-[#18181B]'>Navigation & Safety Alerts</h1>
                  <p className='text-[18px] opacity-70 text-[#52525B]'>Navigate routes safely with real-time road alerts.</p>
                </div>




              </div>
              <AboutCard
                title='Our Vision'
                discription='To become the leading digital platform for truck drivers worldwide, improving productivity, safety, and driver connections on the road.'
              />
              <AboutCard
                title='Join Us on Our Journey'
                discription='We are continuously enhancing our app to meet the demands of modern truck drivers. Whether you’re an independent driver, a fleet owner, or a logistics company, Movers is here to support you throughout every mile of the journey.'
              />


            </motion.div>

          </div>


        </div>

      </section>
    </>
  )
}

export default About
