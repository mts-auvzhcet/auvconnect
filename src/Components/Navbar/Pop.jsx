'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { navBottom } from './data'
import Link from 'next/link'
import { fadeInOut, slideDown } from '../../utils/motion'
import Image from 'next/image'

const Pop = ({ toggle, setToggle }) => {

  const [toggleLink, setToggleLink] = useState(false)
  const [active, setActive] = useState("HOME")

  return (

    <div className='md:hidden flex flex-col h-[100vh]'>
      <div className='flex flex-col'>

    <motion.div className=' flex flex-row justify-between px-[20px] py-[15px] bg-zinc-900 shadow-3xl shadow-[#ffffffcc]md:shadow-none'>

      <div className=''>
        <Link
          onClick={() => setActive("HOME")}
          href="/" >
          <Image src="/AUV.png" alt="logo" height={25} width={25} />
        </Link>
      </div>

      <div className='pr-[10px] pt-[4px]'>
        <div onClick={() => (setToggle(!toggle))} className={`md:hidden`}>
          <div className={`bar bar1 ${toggle ? 'change' : ''}`}></div>
          <div className={`bar opacity-0 bar2 ${toggle ? 'change' : ''}`}></div>
          <div className={`bar bar3 ${toggle ? 'change' : ''}`}></div>
        </div>
      </div>

    </motion.div>

    <motion.div
     key={toggle ? 'visible' : 'hidden'}
    initial="hidden"
    animate="show" 
    variants={fadeInOut(0.1,0.5)}
    className={` ${toggle ? "flex md:hidden flex-col" : "hidden"} p-[10px] bg-zinc-900 border-primary rounded-b-[40px] font-apple w-[100vw] font-normal text-[#ffffffcc] h-[260px] flex-wrap pb-[30px] pt-[10px]`}>
        {navBottom.map((items,index)=>(
            <Link onClick={()=>{
              setToggle(!toggle);
              setActive(items.name)
              }} key={index} href={items.link} className={`${active===items.name ? "text-zinc-500 scale-105 font-bold" : "text-primary"} mt-[16px] w-fit ml-[17vw] text-[19px]`}>
                <motion.div
                key={toggle ? 'visible' : 'hidden'}
                initial="hidden"
                animate="show" 
                variants={fadeInOut(0.1,1.3)}
                >
                {items.name}
                </motion.div>
            </Link>
        ))}
    </motion.div>
      </div>

        
      <div className={`${toggle ? "blur" : ""} transition-all duration-200 ease-in-out h-[100%]`}></div>

   

    </div>

  )
}

export default Pop