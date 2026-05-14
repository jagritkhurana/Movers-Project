import React from 'react'

type AboutCardin={
    title:string,
    discription:string 
}

function AboutCard({
    title,
    discription
}:AboutCardin) {
    return (
        <div className='flex flex-col w-[350px] h-auto md:w-[700px] md:h-[368px] gap-10 p-10 justify-start items-start rounded-[37px]  border-[#F1D6CC]/30 bg-[#faf1ec]'>
            <h1 className='text-[30px] font-semibold tracking-wider text-[#18181B]'>{title}</h1>
            <p className='text-[18px] opacity-70 text-[#52525B]'>{discription}</p>

        </div>
    )
}

export default AboutCard
 