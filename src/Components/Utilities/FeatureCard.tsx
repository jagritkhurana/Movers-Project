
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
    
    className=' flex w-[370px] rounded-[40px] md:w-full md:max-w-[1216px] md:rounded-[50px] flex-col justify-start shadow-xl items-start gap-1 bg-white p-10'>
        <div className='flex gap-6 justify-center items-center'>
            <img src={icon} className='w-[15px] h-[15px] md:w-[22px] md:h-[22px]' />
            <p className='font-semibold text-[18px] md:tracking-wider md:text-[25px]'>{title}</p>
        </div>
        <div className='flex items-start justify-start md:justify-center flex-col ml-10  md:ml-12 gap-1'>
            {discription.map((line,index)=>(
                <p
                key={index}
                className='text-gray-600 text-xs md:text-lg opacity-90'
                > {line}</p>
            ))}

        </div> 
 
    </motion.div>
    </> 
  )
}

export default FeatureCard
