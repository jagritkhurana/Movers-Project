import React from 'react'
import {easeInOut, motion} from 'motion/react'

type FAQCardsin={
    title:string,
    discription:string[]

}


function FAQCards({
    title,
    discription
}:FAQCardsin) {
  return (
    <>
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1,transition:{
        duration:1,
        ease:easeInOut
    }}}
    viewport={{
        amount:0.2
    }}
    
    className='flex flex-col w-[300px] h-auto md:w-[597px] md:h-[253px] gap-10 p-10 justify-start items-start rounded-[32px] bg-gray-100'>
            <h1 className='text-[22px] font-semibold tracking-wider'>{title}</h1>
            <div className='flex flex-col '>
                {discription.map((line,index)=>(
                   <p 
                   key={index}
                   className='text-[16px] opacity-70'>{line}</p> 
                ))}
            </div>

        </motion.div>
    </>
  )
}

export default FAQCards
