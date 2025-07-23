import React from 'react'
import { motion, scale,useScroll } from 'motion/react'


const gridContainerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25
        },
    },

}

const gridSquareVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1 }
}
const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(252, 211, 77, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(252, 211, 77, 1)",
  },
}

const FramerMotionTest = () => {
    const {scrollYProgress: completionProgress } = useScroll()

    return (
        <div className='flex flex-col gap-10 overflow-x-hidden'>
            <motion.section variants={gridContainerVariants}
                initial="hidden"
                animate="show"
                className='grid grid-cols-3 p-10 gap-10'>

                    {/* square and circle slowly moving down/up */}
               
                <motion.div variants={gridSquareVariants}
                    className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
                    <motion.div className='w-20 h-20 bg-stone-100 rounded-lg'
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}></motion.div>

                    <motion.div className='w-20 h-20 bg-stone-100 rounded-full'
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}></motion.div>
                </motion.div>


                {/* square/circle changing shape zooming in/out */}
              
                <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10'>
                    <motion.div className="w-1/3 h-1/3 shadow-md bg-rose-400"
                        animate={{
                            scale: [1, 2, 2, 1],
                            rotate: [0, 90, 90, 0],
                            borderRadius: ["10%", "10%", "50%", "10%"],
                        }}
                        transition={{duration: 5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1}}

                    ></motion.div>
                </motion.div>

                {/* pulsing button */}

                <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10'>
                    <motion.button className='bg-emerald-600 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light tracking-wide'
                    whileTap={{ scale: 0.2}}
                    whileHover={{scale: 1.1, backgroundColor : "#000000", color: "#f349f9" }}
                    transition={{ bounceDamping: 40, bounceStiffness: 100}} 
                    >Subscribe</motion.button>
                </motion.div>


                          {/* circle that moves with mouse */}
                <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10'>
                    <motion.div className='w-10 h-10 bg-orange-500 rounded-3xl curser-grab'
                    drag
                    dragConstraints={{ 
                        top: -150, 
                        right: 150,
                        left: -150,
                        bottom: 150 

                    }}
                    dragElastic = {0}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 10}}
                    dragMomentum={false}></motion.div>
                </motion.div>

{/* squares that move as you scroll */}

                <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10'>
                    <motion.div className='w-40 aspect-square bg-gray-50/20 rounded-xl'>
                        <motion.div className='w-full bg-gray-400 rounded-xl h-full origin-bottom' style={{ scaleY: completionProgress}}></motion.div>
                    </motion.div>
                </motion.div>

                {/* animated bolt */}

                <motion.div variants={gridSquareVariants} className='bg-slate-800 aspect-square rounded-lg justify-center items-center flex gap-10'>
                    <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className={"w-1/2 stroke-amber-500 stroke-[-.5]"}>
                        <motion.path 
                         d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                         variants={svgIconVariants}
                         initial="hidden"
                         animate="visible"
                         transition={{
                             default: {
                                duration: 2, 
                                ease: "easeInOut", 
                                delay: 2, 
                                repeat: Infinity, 
                                repeatType: "reverse", 
                                repeatDelay: 1},

                            fill: {
                                duration: 2, 
                                ease: "easeIn", 
                                delay: 2, 
                                repeat: Infinity, 
                                repeatType: "reverse", 
                                repeatDelay: 1}
                         }}
                        />
                    </motion.svg>
                </motion.div>
            </motion.section>
            <section className="flex flex-col gap-10 mb-10"></section>
        </div>
    )
}

export default FramerMotionTest