
import { RiReactjsLine } from 'react-icons/ri'
import { FaJava } from "react-icons/fa";
import { SiMongodb } from 'react-icons/si'
import { SiMysql } from "react-icons/si";
import { FaNodeJs } from 'react-icons/fa'
import { animate, motion } from 'framer-motion'
import { FaPython } from "react-icons/fa"

const icons=(duration) => ({
    
    initial:{y:-10},
    animate:{y:[10,-10],
    transition:{duration,
        ease:"linear",
        repeat:Infinity,
        repeatType:"reverse"
    },
    },
}); 
function tech() {
  return (
    <div className='border-b border-neutral-800 pb-24 '>
        <motion.h2
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1.5}}
           className='my-20 text-center text-4xl'>Technologies</motion.h2>
        <motion.div 
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:1.5}}
          className='flex flex-wrap items-center justify-center gap-4'>
        <motion.div 
        variants={icons(1.5)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <RiReactjsLine className='text-7xl text-cyan-400'  /> 
        </motion.div>
        <motion.div  
         variants={icons(2)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMysql className='text-7xl text-blue-400'  /> 
        </motion.div>
        <motion.div 
         variants={icons(1.5)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <SiMongodb className='text-7xl text-green-400'  /> 
        </motion.div>
        <motion.div
         variants={icons(2.0)}
         initial="initial"
         animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaPython  className='text-7xl text-yellow-400'  /> 
        </motion.div>
        <motion.div 
         variants={icons(1.5)}
         initial="initial"
         animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaNodeJs className='text-7xl text-red-400'  /> 
        </motion.div>
        <motion.div 
         variants={icons(2)}
         initial="initial"
         animate="animate" 
        className='rounded-2xl border-4 border-neutral-800 p-4'>
            <FaJava  className='text-7xl text-orange-400'  /> 
        </motion.div>
        </motion.div>
    </div>
  )
}

export default tech