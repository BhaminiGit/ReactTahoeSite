import React from 'react'
import { motion } from 'motion/react'
import GuessQuestion from './GuessQuestion'


const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}
const GuessTheSpot = () => {
    return (
        <div className=' p-10 h-200 bg-darkblue'>
            <h1 className='guessSpotHeading text-white flex justify-center font-sansSerif m-7 text-5xl font-bold'> Guess The Spot</h1>
            <GuessQuestion questionNumber = {1}/>
        </div>
    )
}

export default GuessTheSpot