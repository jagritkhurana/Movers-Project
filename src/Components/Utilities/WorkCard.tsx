import { easeInOut } from 'motion'
import React from 'react'
import {motion} from 'motion/react'

type WorkCardin={
    title:string,
    discription:string
}

function WorkCard({
    title,
    discription
}:WorkCardin) {

//      const item={
//     hidden:{opacity:0,x:-150,scale:0.96},
//     vissible:{opacity:1,x:0,scale:1,transition:{
//         duration:1,
//         ease:easeInOut,
//     }}
//   }


    const word=title.split(" ")
    const firstpart=word.slice(0,-1).join(" ")
    const secondpart=word.slice(-1)
  return (
    <>
    <div 
    // variants={item}
    className='w-[300px] h-[250px] p-10 ml-5 flex flex-col'>
        <h1 className='font-semibold tracking-wider text-[25px]'>
            {firstpart}
            <br />
            {secondpart}
        </h1>
        <p className='text-gray-600 text-lg text-[18px] leading-7 opacity-90 mt-2 w-[250px]'>{discription}</p>

    </div>


    </>
  )
}

export default WorkCard
