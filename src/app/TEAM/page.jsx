'use client'

import React,{useEffect} from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import TeamCard from '../../Components/TEAM/TeamCard'



gsap.registerPlugin(ScrollTrigger)

const page = () => {

  return (
    <div className='bg-white w-[95%] mx-auto mt-[7vh] font-poppins '>

      <div className='w-[60%] mx-auto flex flex-col'>
      <div className=' w-[100%] flex flex-col gap-6'>
        <div className='text-zinc-600 font-thin text-[60px] text-center'>
      Coming onboard means joining the family
        </div>
        <div className='font-apple tracking-widest font-thin flex flex-col gap-4 text-center'>
        {/* <p>
        Philly Reps is a Marketing and Consulting House. We partner with our photographers to offer targeted marketing and consulting support to ensure their work and brands get the exposure they deserve. Because, let&apos;s face it, no one is going to hire you if they don&apos;t know you exist.
        </p> */}
        {/* <p>
        Our House was established by creatives for creatives. We know more than anyone that no talented artist deserves to starve and so we&apos;re offering a seat at the table. Call it comfort food, cheerleading, brand management, marketing support, an extra set of eyes, a photo editor, a photo therapist, a rep, a valuable member of your team, or simply someone you can be professionally honest with—we are something different to each and every one of the photographers we work with. And that&apos;s exactly the way we like it. In this industry, it&apos;s all about making impressions on the right people at the right time, and with the right content. We&apos;re here to help you do that in any way needed.
        </p> */}
        </div>
      </div>

      <div className='font-poppins w-[100%] mx-auto text-center flex flex-col-reverse text-zinc-500 gap-4'>
        <div className='  font-normal w-[80%] font-wide text-[60px] mx-auto text-center'>
           The Team
        </div>
        <div className='font-apple tracking-widest flex flex-col gap-4 font-light'>
          MEET
        </div>
      </div>

      </div>

    <div className='flex flex-col sm:flex-row flex-wrap mx-[10px] sm:mx-[25px] bg-white justify-between mt-[20px]'>
      
     <TeamCard photo="/Team/Ammar.jpeg" name="Mohd. Ammar" position="Chairperson"/>
     <TeamCard photo="/Team/Falak.png" name="Falak Fatima" position="Mentor"/>
     <TeamCard photo="/Team/Anas.png" name="Mohd. Anas" position="Treasurer"/>
     <TeamCard photo="/Team/Haadi.png" name="Haadi Akhtar" position="R&D Lead"/>
     <TeamCard photo="/Team/yusuf.png" name="Yusuf hasan" position="Computer Lead "/>
     <TeamCard photo="/Team/priyanshu.jpeg" name="Priyanshu Singh" position="Web Developer"/>
     
      
    </div>
    </div>

  )
}

export default page