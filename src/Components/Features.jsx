import React from 'react'
import FeatureCard from './FeatureCard'
const Features = () => {
    return (
        <div className="mx-auto bg-black text-white flex flex-col justify-center gap-2 lg:gap- pt-10 pb-24 px-12 md:px-12 md:py-4 text-center md:text-left">
        <div className="flex flex-col gap-8 text-left py-2">
          <div className="text-left  ">

           

          </div>

        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FeatureCard image="feature1.png" title="Identity design" details="The visuals of a brand play a huge role in customers' first impressions. I can make sure your brand design represents your values properly & looks professional." classname="hello" />
          <FeatureCard image="feature2.png" title="Identity design" details="The visuals of a brand play a huge role in customers' first impressions. I can make sure your brand design represents your values properly & looks professional." classname="hello" />
          <FeatureCard image="feature3.png" title="Identity design" details="The visuals of a brand play a huge role in customers' first impressions. I can make sure your brand design represents your values properly & looks professional." classname="hello" />
          <FeatureCard image="feature4.png" title="Identity design" details="The visuals of a brand play a huge role in customers' first impressions. I can make sure your brand design represents your values properly & looks professional." classname="hello" />
        </div>
      </div>

        

   
  )
}

export default Features
