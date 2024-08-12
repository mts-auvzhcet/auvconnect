'use client'

import React, { useEffect, useRef,useState } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import Image from 'next/image'



gsap.registerPlugin(ScrollTrigger)


const IntroLogo = () => {

  const main =useRef(null)
  const movingText =useRef(null)
  const imageRef=useRef(null)
  const videoRef=useRef(null)
  const parentVideoRef=useRef(null)

  const [isVisible, setIsVisible] = useState(false)



  useEffect(()=>{
    var x,width,y,marginTop,end

    if(window.innerWidth<560){
     x="0";
     y="48vh"
     width="85%"
     marginTop="15vh"
      end="+=450px top"
    } else{
       x="-23vw"
       y="125vh"
       width="46%"
       marginTop="0px"
       end="+=750px top"
    }

    var tl=gsap.timeline({
      scrollTrigger:{
        trigger:main.current,
        //markers:true,
        start:"50px top",
        end:end,
        scrub:true,
        toggleActions:'play reverse play reverse',
        onEnter:()=> setIsVisible(true),
        onLeaveBack:()=>setIsVisible(false),
      }
    })


    tl.to(parentVideoRef.current,{
      width:width,
      y:y,
      x:x,
      scrollTrigger:{
      trigger:parentVideoRef.current,
      toggleActions: 'play reverse play reverse',
      start:"50px top",
      end:"+=900px top",
      //markers:true,
      scrub:2,
      scrollTrigger:{
      trigger:parentVideoRef.current,
      pin:true,
     }
      }
    },"anim")

    tl.to(parentVideoRef.current,{
      marginTop:marginTop
    })

    tl.to(movingText.current,{
      opacity:0,
      //y:"-100px",
      scrollTrigger:{
         scrub:2,
        //markers:true,
        start:"top top",
        end:"+=250px top",
      }
    },"anim")

    
  },[])

 
  return (
    <div 
    ref={main}
    className="h-[100vh] w-[100vw] flex justify-center">
       <div ref={parentVideoRef} className="absolute h-[100%] w-[100%] md:mt-[-1.5%] overflow-clip mx-auto" >
        <Image alt="machine" ref={imageRef} src="/LandingPage/SEA_5.0.png" width={2000} height={2000} className={`image-transition md:scale-100 sm:scale-110 scale-125 ${isVisible ? 'opacity-0' : 'opacity-100'} absolute lg:mt-[2.75%] md:mt-[17%] sm:mt-[25%] mt-[50%]`} />
        
        {isVisible && 
        <video ref={videoRef} autoPlay loop muted src="/LandingPage/SEA_5.0.mp4" style={{ opacity: isVisible ? 1 : 0 }} className={`video-transition ${isVisible ? 'opacity-100' : 'opacity-0'} absolute md:scale-100 sm:scale-110 scale-125 lg:mt-[2.75%] md:mt-[17%] sm:mt-[25%] mt-[50%] z-100`} />
        }
      </div>
    <div ref={movingText} className='font-poppins font-medium z-20 text-[11vw] sm:text-[10vw] md:text-[9vw] flex justify-center mt-[66%] sm:mt-[42%] md:mt-[33.5%] lg:mt-[19.5%]'>
      <p  className='md:ml-[2vw] transition-all duration-500 ease-in-out cursor-pointer h-fit gradient-text text'>
      SEA 5.O
      </p>
      </div>
    </div>
  )
}

export default IntroLogo




