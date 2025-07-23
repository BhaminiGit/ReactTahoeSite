import React from 'react'
import TahoeLogo from '../assets/tahoe-logo-with-mountain.svg?react';
import TahoeLogoLine from '../components/TahoeLogoLine';


const Boating = () => {
  return (
    <>
      <div className='boatingPageTitleCard'>
        <div className="boatingTitle">
          <h1>Boating at Lake Tahoe</h1>
          <h2>A scenic adventure</h2>
        </div>
      </div>

      <div className="descript1Boating">
        <p>Explore Lake Tahoe's stunning waters by boat. Whether you're kayaking, sailing, or cruising on a motorboat, the lake's
          beautiful shores and crystal-clear waters offer the perfect setting for adventure..</p>
      </div>

     <TahoeLogoLine/>

      <h1 className='chooseAdventureHeading'>Choose Your Adventure</h1>

      <div className='boatingTypesSections'>
        <img className='kayakPic' src='src/assets/boatingKayak.png' />
        <div className="kayakInfo ml-5">
          <h2 className='kayakHeading'>Kayaks</h2>
          <div className='kayakDescription '>Glide through the serene waters of Lake Tahoe,
            exploring hidden coves and quiet shorelines. Perfect for those looking
            to enjoy the natural beauty at their own pace, these watercraft offer
            a peaceful, intimate experience with the lake's clear waters.
          </div>
        </div>
      </div>

      <div className='boatingTypesSections'>
        <div className="kayakInfo mr-5">
          <h2 className='kayakHeading'>Kayaks</h2>
          <div className='kayakDescription'>Glide through the serene waters of Lake Tahoe,
            exploring hidden coves and quiet shorelines. Perfect for those looking
            to enjoy the natural beauty at their own pace, these watercraft offer
            a peaceful, intimate experience with the lake's clear waters.
          </div>
        </div>
        <img className='kayakPic' src='src/assets/boatingKayak.png' />

      </div>

      <div className='boatingTypesSections'>
        <img className='kayakPic' src='src/assets/boatingKayak.png' />
        <div className="kayakInfo ml-5">
          <h2 className='kayakHeading'>Kayaks</h2>
          <div className='kayakDescription'>Glide through the serene waters of Lake Tahoe,
            exploring hidden coves and quiet shorelines. Perfect for those looking
            to enjoy the natural beauty at their own pace, these watercraft offer
            a peaceful, intimate experience with the lake's clear waters.
          </div>
        </div>
      </div>

      <h1 className='text-3xl font-bold underline'>TESTING TAILWIND CSS</h1>

    </>
  )
}

export default Boating