import React from 'react'
import TahoeLogo from '../assets/tahoe-logo-with-mountain.svg?react';


const TahoeLogoLine = () => {
  return (
   <>
       <div className="tahoeLineDivide">
           <hr className="divider-line" />
           <TahoeLogo className='divider-TahoeLogo' />
           <hr className="divider-line" />
         </div>
   
   </>
  )
}

export default TahoeLogoLine