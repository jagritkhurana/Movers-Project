import React from 'react'
import FAQCards from '../Utilities/FAQCards'
import FAQCard from '../Utilities/FAQCard'

function FAQ() {
  return (
    <>
      <section id='FAQ'>
        <div className='md:w-auto md:h-auto mt-10 pb-10'>
          <div className='flex flex-col justify-center items-center md:justify-start md:items-start'>
            <h1 className=' text-[30px] md:text-[45px] md:m-15 md:px-[120px] font-semibold tracking-wider text-[#C2410C] '>FAQ</h1>
            <p className='text-[18px] opacity-80 md:mt-[-50px] md:px-[120px] md:ml-15 text-[#18181B]'>Frequently Asked question.</p>
          </div>
          <div className='flex flex-col md:flex-row m-15 justify-center items-center gap-10'>

            <div className='flex flex-col gap-10'>
              <FAQCard
              title='How does the log tracking feature work?'
              discription={["Our app allows drivers to log their driving activities in real-time, providing smart suggestions on when to drive, take breaks, or rest based on government regulations. The logs are displayed in an easy-to-understand graphical format."]}
              />
              <FAQCards
              title='Is the app compliant with government 
driving regulations?'
discription={["Absolutely! Our app is designed to help drivers stay compliant by providing real-time alerts and suggestions based on current driving guidelines."]}
              />


            </div>
            <div className='flex flex-col gap-10'>
              <FAQCard
              title=" Can I edit my driving logs?"
              discription={["Yes, users can edit their logs within a 7-day window. After this period, the entries are locked to maintain compliance and accuracy."]}
              />
              <FAQCards
              title='How can I buy or sell trucks using the app?'
              discription={["To Sell: List your truck by providing complete details, including model, year, mileage, images, and price. ",
                "To Buy: Browse available listings using filters like model, manufacturer, location, and more. You can also chat directly with the seller through our in-app messaging feature."
              ]}
              />

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQ
