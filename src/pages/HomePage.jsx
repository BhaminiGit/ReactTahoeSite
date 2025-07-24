import React from 'react'
import { Link } from 'react-router-dom'
import GuessTheSpot from '../components/GuessTheSpot';
import TahoeLogoLine from '../components/TahoeLogoLine';


const HomePage = () => {
  return (
    <>
      <div className="heroPic">
        <h1>Lake Tahoe</h1>
        <h2>America's Best Lake & Ski Destination</h2>
        <h3>Find different activities every season. Ski or hike the great outdoors. Visit art galleries or shop indoors. There's something for everyone</h3>

        <div className='heroBtns'>
          <button className="downloadAppBtn"> Download the App</button>
          <button className='thingsDoBtn'> Things to do </button>
        </div>

      </div>

      <div className="descript1Tahoe">
        <p>Straddling the border between California and Nevada,
          Lake Tahoe is renowned for its crystal-clear waters and stunning alpine scenery.</p>
      </div>

     <TahoeLogoLine/>

      <div className='deepestLakeSectionContainer'>
        <div className='deepestLakeImgAndDesk'>
          <img className="deepestLakeImg" src='/assets/homepage/deepestLake.jpeg'></img>
          <div className='deepestLakeDesc'>Lake Tahoe is the second deepest lake in the United States, reaching a max
            depth of 1,645 ft (501 m).</div>
        </div>
      </div>

      <div className='thingsToDoSection'>
        
        <div className='thingsToDoHeading'>Things To Do</div>

        <div className='thingsToDoGrid'>
          <div className='TTD1'></div>
          <div className='TTD2' >
            <h1>Take a Hike</h1>
            <h2>
              Lake Tahoe hiking trails range from easy strolls to steep switchbacks leading into the upper atmosphere. Enjoy hundreds of miles of scenic hiking trails. What path will you take?
            </h2>
            <Link  className="learnMoreLink"> Learn More</Link>

          </div>
          <div className='TTD3'>
            <h1>Boating on Lake Tahoe</h1>
            <h2>One of the best ways to experience the spectacular scenery of Emerald Bay's magnificent teal waters, the pristine rocky shorelines of Zephyr Cove, and Sand Harbor is by boat. Kayaks, sailboats, motor boats and more... which excites you most?</h2>
            <Link  className="learnMoreLink"to="/boating">Learn More </Link>
          </div>
          <div className='TTD4'></div>
          <div className='TTD5'></div>
          <div className='TTD6'>
            <h1>Ski Down a Mountain</h1>
            <h2>Lake Tahoe is one of the top ski destinations in North America. Beginners to experts alike will enjoy beautiful scenery, great snow, and state-of-the-art ski lifts. Will you be skiing or snow boarding?</h2>
            <Link  className="learnMoreLink">Learn More</Link>
          </div>
        </div>
      </div>

      <TahoeLogoLine className />

      {/* <div className='h-40'></div>
      <TahoeLogoLine style="margin-bottom: 20px"/> */}


      <GuessTheSpot/>

    </>
  )
}

export default HomePage