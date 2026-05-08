
import React from 'react'
import { easeInOut, easeOut, motion, scale} from 'motion/react'


type FeatureCardsin={
    icon:string,
    title:string,
    discription:string[]
}

function FeatureCard({
    icon,
    title,
    discription
}:FeatureCardsin) {
     const item={
    hidden:{opacity:0,y:80,scale:0.96},
    vissible:{opacity:1,y:0,scale:1,transition:{
        duration:1,
        ease:easeInOut,
    }}
  }
  return (
    <>
    <motion.div
    variants={item}
    
    className=' flex w-full max-w-[1216px] rounded-[50px] flex-col justify-start shadow-xl items-start gap-1 bg-white p-10'>
        <div className='flex gap-6 justify-center items-center'>
            <img src={icon} className='w-[22px] h-[22px]' />
            <p className='font-semibold tracking-wider text-[25px]'>{title}</p>
        </div>
        <div className='flex justify-center flex-col items-start ml-12 gap-1'>
            {discription.map((line,index)=>(
                <p
                key={index}
                className='text-gray-600 text-lg opacity-90'
                > {line}</p>
            ))}

        </div>

    </motion.div>
    </>
  )
}

export default FeatureCard
