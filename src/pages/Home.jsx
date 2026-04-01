import React from 'react'
import HeroSection from '../component/homeComponents/heroSection/HeroSection'
import Services from '../component/homeComponents/serve/Services'
import TrandingItems from '../component/homeComponents/trandingItems/TrandingItems'

function Home() {
  const data={
    name : "Quick Store",
    tagline : "Best Deals on Latest Products",
    details : "Shop the highest quality items at unbeatable prices."
  }


  return (
    <div className='home py-5'>
      <HeroSection data={data} />
      <TrandingItems />
      <Services />
    </div>
  )
}

export default Home
