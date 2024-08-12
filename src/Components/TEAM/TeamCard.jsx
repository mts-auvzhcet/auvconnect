'use client'

import React from 'react'
import Image from 'next/image'

// import linkedin from '../Footer/img/linkedin.svg'

const TeamCard = ({photo,name,position}) => {
  return (
    <div className='flex flex-col gap-5 sm:gap-7 font-poppins mt-[20px] sm:w-[31%] mb-[30px] sm:mb-[50px]'>
      {/* image */}
      <div className=''>
      <Image src={photo} alt="image" height={550} width={550} className='rounded-lg'/>
      </div>

      {/* name position */}
      <div className='ml-[5px] flex flex-col gap-2'>
        <div className='tracking-[3.75px] font-semibold text-[15px]'>
          {name}
        </div>
        <div className='font-light text-[15px] tracking-[2px] '>
        {position}
        </div>
      </div>

      {/* message */}
      {/* <div className='ml-[5px] text-[16px] font-apple '>
      In West Philadelphia, born and raised… Khalid spent his early days curating visual displays. He went on to merchandise some of Philadelphia’s finest props and antiques before embarking on a 10+ year career in Arts Education. Khalid Stewart defines what it means to be both artist and educator. Equipped with a BFA from the University of The Arts and years of dealing with the art and practice of creating strong visual content, he now manages and directs the vision and the voice of Philly Reps.
      </div> */}
    </div>

  )
}

export default TeamCard