import { easeInOut } from 'motion'
import React from 'react'
import {motion} from 'motion/react'

type ChooseCardin = {
    title: string,
    discription: string
}

function ChooseCard({
    title,
    discription
}: ChooseCardin) {
     const item={
    hidden:{opacity:0,x:150,scale:0.96},
    vissible:{opacity:1,x:0,scale:1,transition:{
        duration:1,
        ease:easeInOut,
    }}
  }


    const word=title.split(" ")
    const firstpart=word.slice(0,-1).join(" ")
    const secondpart=word.slice(-1)
    return (
        <>
            <motion.div 
            variants={item}
            className='md:w-[373px] md:h-[295px] p-10 rounded-[44px] flex flex-col gap-3 overflow-auto bg-[linear-gradient(135deg,_#f5f5f5_0%,_#dde7f4_50%,_#bfd1e8_100%)]'>
                <h1 className='font-semibold tracking-wider text-[25px] overflow-auto'>
                    {firstpart}
                    <br />
                    {secondpart}

                </h1>
                <p className='text-gray-600 text-lg text-[18px] leading-7 opacity-90 w-[250px]'>{discription}</p>
            </motion.div>
        </>
    )
}

export default ChooseCard
 