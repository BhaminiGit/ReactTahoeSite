import React, { useState } from 'react'
import { motion } from 'motion/react'

const GuessQuestion = (questionNumber) => {

    const [questionComment, setQuestionComment] = useState("")
    const [showPictureInfo, setShowPictureInfo] = useState(true)

    const handleAnswer = (questionNumber, answerChoice) => {

        if (answerChoice === 1) {
            setQuestionComment('Correct!')
            setShowPictureInfo(true)

        } else {
            setQuestionComment('Wrong!')
            setShowPictureInfo(false)
        }


    }

    return (
        <div className='questionBox '>

            <div className='questionPicContainer relative w-full max-w-2xl h-100 mx-auto'>
                
                <img className='questionPic absolute inset-0 w-full h-full z-0 object-center'
                 src='src/assets/guessPics/Caverocklaketahoe.jpeg' />
                 {showPictureInfo ?   (
                  <div className="questionPicOverlay absolute flex flex-col items-center justify-center inset-0  bg-gray-50/50 z-10">
                    <h2 className="questionPicExplanation font-sansSerif text-darkblue font-semibold text-4xl flex ">You are correct</h2>
                    <motion.button className='font-sans border-darkblue text-blue font-bold mt-10 border-2 bg-gray-50/50 py-2 px-3 rounded-3xl'
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#01315D", color: "#ffffff", borderWidth: "1px", borderColor: "#ffffff", border: 1 }}
                    transition={{ bounceStiffness: 100 }}
                    onClick={() => handleAnswer(questionNumber, 2)}>Next Question</motion.button>
                  </div> 
                 ) : ( <div className="questionPicOverlay absolute inset-0 z-10"></div> )
                 }
            </div>

            <ul className='answerChoices flex flex-wrap mt-10 justify-center gap-10 '>
                <motion.li className=' text-darkblue bg-white border-darkblue border-1 rounded-3xl pl-5 pr-5 pt-1 pb-1 font-sans text-3xl '
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#01315D", color: "#ffffff", borderWidth: "1px", borderColor: "#ffffff", border: 1 }}
                    transition={{ bounceStiffness: 100 }}
                    onClick={() => handleAnswer(questionNumber, 1)}
                >
                    word1</motion.li>

                <motion.li className=' text-darkblue bg-white border-darkblue border-1 rounded-3xl pl-5 pr-5 pt-1 pb-1 font-sans text-3xl '
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#01315D", color: "#ffffff", borderWidth: "1px", borderColor: "#ffffff", border: 1 }}
                    transition={{ bounceStiffness: 100 }}
                    onClick={() => handleAnswer(questionNumber, 2)}
                >word2</motion.li>
                <motion.li className=' text-darkblue bg-white border-darkblue border-1 rounded-3xl pl-5 pr-5 pt-1 pb-1 font-sans text-3xl '
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1, backgroundColor: "#01315D", color: "#ffffff", borderWidth: "1px", borderColor: "#ffffff", border: 1 }}
                    transition={{ bounceStiffness: 100 }}
                    onClick={() => handleAnswer(questionNumber, 3)}
                >word3</motion.li>


            </ul>
            <p className='questionComment text-white font-sans text-lg block mx-auto my-8 w-fit '>{questionComment}</p>


        </div>
    )
}

export default GuessQuestion