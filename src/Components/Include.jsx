import React from 'react'
import DisplayCard1 from './DisplayCard1'
const Include = () => {
  return (

    <div>
      <div className="mx-auto bg-black text-white flex flex-col justify-center gap-2 lg:gap-10 pt-10 pb-24 px-12 md:px-12 md:py-4 text-center md:text-left">
        <div className="flex flex-col gap-8 text-left py-2">
          <div className="text-left  ">

            <div className="flex ">
              <h1 className="text-4xl font-bold text-center">What's Included?</h1>
            </div>
            <div className='text-gray-300'>
            <p>Existing and in progress templates and progress.</p>
            </div>

          </div>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <DisplayCard1 image="card1.png" title="Identity design" details="The visuals of a brand play a huge role in customers' first impressions. I can make sure your brand design represents your values properly & looks professional." classname="hello" />
          <DisplayCard1 image="card2.png" title="Marketing design" details="You have a great looking brand. Awesome! Time to show people through social media and promotions. Let's make some great-looking and effective designs!" />
          <DisplayCard1 image="card3.png" title="Web design" details="Having a website for your brand is the baseline, but without proper structure and design principles it won't work well. I will help you stand out in the digital space." />
          <DisplayCard1 image="card4.png" title="Web design" details="Having a website for your brand is the baseline, but without proper structure and design principles it won't work well. I will help you stand out in the digital space." />
          <DisplayCard1 image="card5.png" title="Web design" details="Having a website for your brand is the baseline, but without proper structure and design principles it won't work well. I will help you stand out in the digital space." />
          <DisplayCard1 image="card6.png" title="Web design" details="Having a website for your brand is the baseline, but without proper structure and design principles it won't work well. I will help you stand out in the digital space." />
        </div>
      </div>

    </div>
  )
}

export default Include
