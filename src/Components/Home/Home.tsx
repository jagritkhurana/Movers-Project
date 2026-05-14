import React from 'react'
import { easeInOut, motion } from 'motion/react'

function Home() {
    return (
        <section id='Home'>

            <div className='min-h-screen bg-[linear-gradient(180deg,#FFEDD5_0%,#FFFBF7_50%,#FFFFFF_100%)] flex '>
                <div className='w-full mt-20 md:w-1/2 md:m-25'>
                    <div className=' flex justify-center items-center  flex-col gap-1 md:justify-start md:items-start'>
                        <p className='text-[25px] md:text-[45px] text-[#C2410C] font-semibold  tracking-wide'>Drive Smart. <span className='text-[#18181B]'>Log Smarter.</span></p>
                        <p className='text-[25px] md:text-[45px] font-semibold ml-1 text-[#18181B] tracking-wider'>Effortless Log Tracking</p>
                        <p className='text-[25px] md:text-[45px] flex font-semibold text-[#18181B]   ml-1.25 md:tracking-wider'>For Truck Drivers <span className=' md:mt-10 md:ml-3'>

                            <svg
                                width="135"
                                height="29"
                                viewBox="0 0 135 29"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.63077 1.63077H88.1905"
                                    stroke="#C2410C"
                                    strokeWidth="3.26154"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M55.7306 13.653H78.5728"
                                    stroke="#C2410C"
                                    strokeWidth="3.26154"
                                    strokeLinecap="round"
                                />

                                <path
                                    d="M13.653 26.8773H132.673"
                                    stroke="#C2410C"
                                    strokeWidth="3.26154"
                                    strokeLinecap="round"
                                />
                            </svg></span></p>
                        <div className=' flex flex-col justify-center items-center gap-0 md:hidden text-[#52525B]'>

                            <p className='text-[15px] opacity-80 mt-3 ml-2 md:hidden'>
                                Stay compliant, manage your driving hours, and
                            </p>
                            <p className='text-[15px] opacity-80  ml-2 md:hidden'>
                                navigate
                                with ease—all in one app.
                            </p>
                        </div>
                        <p className='hidden md:block text-[10px] mt-5 ml-2 md:text-[22px] text-[#52525B] opacity-80'>Remain compliant, track your driving hours, and navigate </p>
                        <p className='hidden md:block text-[15px] md:text-[22px] ml-2 text-[#52525B] opacity-80'>with ease—all in one app.</p>
                        <p className='text-[15px] md:text-[22px] ml-3 text-[#18181B] mt-20'>Application Is Available On</p>
                        <div className='mt-4 ml-3 flex gap-4 hover:cursor-pointer'>
                            <img src="/Google.svg" className='w-[100px] h-[30px] md:w-[170px] md:h-[62px] object-contain' />
                            <img src="/Apple.svg" className='w-[100px] h-[30px] md:w-[170px] md:h-[62px] object-contain' />
                        </div>

                    </div>

                </div>
                <div className=' hidden md:block md:relative md:w-1/2'>
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ ease: easeInOut, duration: 2 }}
                        viewport={{amount:0.2}}
                        className='relative'>
                        <img
                            src="/Baground.svg"
                            className='absolute top-5 left-5 z-0'
                        />
                        <img src="https://media.licdn.com/dms/image/v2/C4E22AQET0EgfTT0iLw/feedshare-shrink_800/feedshare-shrink_800/0/1603824924124?e=2147483647&v=beta&t=CtgmdHRACHtiL5_3b6vUpN4Zu34Fn74UHNhUKDjDMx8" className=' relative mt-20  object-cover w-[523px] h-[586px] rounded-[36px] ' />

                    </motion.div>

                </div>


            </div>

            <div className='h-11 w-auto md:w-full md:h-auto p-10 bg-[#faf1ec] flex justify-between border-y border-[#E5C4B8] text-[#18181B]  items-center overflow-hidden gap-[50px]' >
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
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl text-[#18181B]  tracking-widest md:font-semibold opacity-85 '>Trusted by Drivers</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className=' text-sm md:text-xl text-[#18181B]  tracking-widest font-semibold opacity-85 '>Trusted by Buyers</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className=' text-sm md:text-xl text-[#18181B] tracking-widest  font-semibold opacity-85 '>Easy Navigation</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl  text-[#18181B] tracking-widest font-semibold opacity-85 '>Easy Logging</p>

                    </div>
                    <div className='flex justify-center  items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl  text-[#18181B] tracking-widest font-semibold opacity-85 '>Trusted by Drivers</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl text-[#18181B]  font-semibold opacity-85 '>Trusted by Buyers</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl text-[#18181B]  font-semibold opacity-85 '>Easy Navigation</p>

                    </div>
                    <div className='flex justify-center items-center gap-4 min-w-fit'>
                        <img src="/roller.svg" />
                        <p className='text-sm md:text-xl  text-[#18181B] tracking-widest font-semibold opacity-85 '>Easy Logging</p>

                    </div>






                </motion.div>




            </div>
        </section>
    )
}

export default Home
