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
        <div className='flex flex-col w-[350px] h-auto md:w-[700px] md:h-[368px] gap-10 p-10 justify-start items-start rounded-[37px] bg-gray-100'>
            <h1 className='text-[30px] font-semibold tracking-wider'>{title}</h1>
            <p className='text-[18px] opacity-70'>{discription}</p>

        </div>
    )
}

export default AboutCard
 