import React from 'react'
import { easeInOut, motion } from 'motion/react'

function Home() {
    return (
        <section id='Home'>

            <div className='min-h-screen bg-[linear-gradient(180deg,#cddcf3_0%,#e9edf4_28%,#ffffff_52%,#eef7f6_76%,#d8f3f1_100%)] flex '>
                <div className='w-screen mt-20 md:w-1/2 md:m-25'>
                    <div className=' flex justify-center items-center  flex-col gap-1 md:justify-start md:items-start'>
                        <p className='text-[25px] md:text-[45px] text-blue-700 font-semibold  tracking-wide'>Drive Smart. <span className='text-black'>Log Smarter.</span></p>
                        <p className='text-[25px] md:text-[45px] font-semibold ml-1  tracking-wider'>Effortless Log Tracking</p>
                        <p className='text-[25px] md:text-[45px] flex font-semibold ml-1.25 md:tracking-wider'>For Truck Drivers <span className=' md:mt-10 md:ml-3'>

                            <svg
                                width="135"
                                height="29"
                                viewBox="0 0 135 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.63077 1.63077H88.1905"
                                    stroke="#2851D3"
                                    strokeWidth="3.26154"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M55.7306 13.653H78.5728"
                                    stroke="#2851D3"
                                    strokeWidth="3.26154"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M13.653 26.8773H132.673"
                                    stroke="#2851D3"
                                    strokeWidth="3.26154"
                                    strokeLinecap="round"
                                />
                            </svg></span></p>
                        <div className=' flex flex-col justify-center items-center gap-0 md:hidden '>

                            <p className='text-[15px] opacity-80 mt-3 ml-2 md:hidden'>
                                Stay compliant, manage your driving hours, and
                            </p>
                            <p className='text-[15px] opacity-80  ml-2 md:hidden'>
                                navigate
                                with ease—all in one app.
                            </p>
                        </div>
                        <p className='hidden md:block text-[10px] mt-5 ml-2 md:text-[22px] opacity-80'>Stay compliant, manage your driving hours, and navigate </p>
                        <p className='hidden md:block text-[15px] md:text-[22px] ml-2 opacity-80'>with ease—all in one app.</p>
                        <p className='text-[15px] md:text-[22px] ml-3 mt-20'>Application Is Available On</p>
                        <div className='mt-4 ml-3 flex gap-4 hover:cursor-pointer'>
                            <img src="/Google.svg" className='w-[100px] h-[30px] md:w-[170px] md:h-[62px] object-contain' />
                            <img src="/Apple.svg" className='w-[100px] h-[30px] md:w-[170px] md:h-[62px] object-contain' />
                        </div>

                    </div>

                </div>
                <div className=' hidden md:block md:relative md:w-1/2'>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ ease: easeInOut, duration: 2 }}
                        className='relative'>
                        <img
                            src="/Baground.svg"
                            className='absolute top-5 left-5 z-0'
                        />
                        <img src="/Main.svg" className=' relative mt-20 h-auto object-contain  ' />

                    </motion.div>

                </div>


            </div>

            <div className='h-11 w-auto md:w-full md:h-auto p-10 bg-gray-200 flex justify-between items-center overflow-hidden gap-[50px]' >
                <motion.div
                    className='flex items-center justify-center gap-24 whitespace-nowrap w-max'
                    animate={{
                        x: ["0%", "-50%"]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 12,
                        ease: "linear"
                    }}
                >
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg"  />
                        <p className='text-sm md:text-xl md:font-semibold opacity-85 '>Trusted by Drivers</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className=' text-sm md:text-xl font-semibold opacity-85 '>Trusted by Buyers</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className=' text-sm md:text-xl font-semibold opacity-85 '>Easy Navigation</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl font-semibold opacity-85 '>Easy Logging</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl font-semibold opacity-85 '>Trusted by Drivers</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl font-semibold opacity-85 '>Trusted by Buyers</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl font-semibold opacity-85 '>Easy Navigation</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl font-semibold opacity-85 '>Easy Logging</p>

                    </div>






                </motion.div>




            </div>
        </section>
    )
}

export default Home
