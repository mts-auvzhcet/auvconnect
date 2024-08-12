'use client'
import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import IntroLogo from '../Components/Feed/IntroLogo'
import Image from 'next/image'


gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const parentVideoDiv = useRef(null)
  const main = useRef(null)

  const div2 = useRef(null);
  const div2Video = useRef(null);
  const div2Box = useRef(null);

  const div3 = useRef(null);
  const div3Video = useRef(null);
  const div3Box = useRef(null);

  const div4 = useRef(null);
  const div4Video = useRef(null);
  const div4Box = useRef(null);

  const div4Images = useRef(null);
  const image1 = useRef(null);
  const image2 = useRef(null);
  


  useEffect(() => {   


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: '180px top',
        toggleActions: 'play reverse play reverse',
      }
    })

    const div2TL= gsap.timeline({
      scrollTrigger:{
        trigger:div2.current,
       // markers:true,
        start:"top top",
        bottom:"bottom top",
        scrub:2,
        toggleActions:'play reverse play reverse',
      }
    })

    div2TL.to(div2Video.current,{
      y:"-10vh",
      scrollTrigger:{
        // trigger:div2.current,
        scrub:10,
        start:"1500px top",
        bottom:"bottom 0px",
        //markers:true,
      }
    },"anim")

    div2TL.to(div2Box.current,{
      y:"-10vh",
      scrollTrigger:{
        // trigger:div2.current,
        scrub:10,
        start:"1500px top",
        bottom:"bottom 0px",
  
      }
    },"anim")

    gsap.to(main.current,{
      background:"white",
      scrollTrigger:{
       // markers:true,
        trigger:div4.current,
        start:"top 220vh",
        end:"bottom 320vh",
        toggleActions:'play reverse play reverse',
      }
    })

    const div4TL= gsap.timeline({
      scrollTrigger:{
        trigger:div4.current,
        //markers:true,
        start:"top 400vh",
        end:"+=200px top",
         scrub:5,
        toggleActions:'play reverse play reverse',
      }
    })

    div4TL.to(div4.current ,{
      marginTop:"30vh",
     },"div4")

    div4TL.to(div4Video.current,{
      width:"100%",
      y:"-30px",
    },"div4")


   if(window.innerWidth>560){ 
    
    div4TL.to(div4Box.current.querySelector('h6') ,{
      scale:1.1,
      x:"-30px",
      y:"-30px",
    },"div4")

    div4TL.to(div4Box.current.querySelector('h2') ,{
      scale:1.1,
      x:"30px",
      y:"-30px",
    },"div4")

    gsap.to(image1.current,{
     x:"5vw",
     duration:1,
     scrollTrigger:{
      trigger:div4Images.current,   
      start:"top top",
      end:"bottom top",
      toggleActions:'play none none reverse',
    }
    })

    gsap.to(image2.current,{
     x:"-5vw",
     duration:1,
     scrollTrigger:{
      trigger:div4Images.current,
      start:"top top",
      end:"bottom top",
      toggleActions:'play none none reverse',
    }
    })
  
  }

  


  }, []);


  return (
    <div ref={main} className='flex flex-col font-poppins bg-black overflow-x-hidden md:px-[0]'>

       <IntroLogo/> 
    
      <div ref={parentVideoDiv} className='z-20 flex flex-col w-[100vw] h-[60vh] sm:h-[90vh] items-center justify-center mb-[5vh]'>
        <div className='flex flex-col sm:ml-[55%] font-poppins shadow-smallBox shadow-slate-800 sm:mr-[2vw] px-[10px] sm:pl-[7vw] rounded-3xl'>
         <h6 className='sm:text-[40px] text-[4vh] text-slate-100 font-bold '>
         Double Dive
          </h6>
          <p className='pt-[0.5vh] tracking-tighter text-[3.5vw] sm:text-[1.25vw] text-gray-400 sm:pr-[2vw]'>
          SEA 5.0 is our latest vehicle, still under development. Double hull design meticulously crafted to enhance drag reduction and optimize underwater dynamics. Designed and fabricated in-house by our team, SEA 5.0 represents the culmination of our expertise, dedication, and passion for pushing the boundaries of underwater exploration.
          </p>
          </div>
        </div> 
     

      <div ref={div2} className='z-20 flex flex-col sm:flex-row-reverse justify-center max-h-[700px] items-center w-[100vw] h-[80vh] pl-[3vw] sm:mb-[5vh] bg-black'>
  
        <video ref={div2Video} src='/LandingPage/jetson.mp4' autoPlay loop muted className='sm:h-[60vh] sm:w-[60vw] w-[100vw] sm:scale-100 scale-125 sm:mr-[-8vw] sm:mb-[0px] mb-[15vh]'/>
     
        <div ref={div2Box} className='flex flex-col sm:mr-[2vw] sm:p-[10px] rounded-3xl'>
         <h6 className='sm:text-[40px] text-[4vh] text-slate-100 font-bold'>
         Freaking Fast
          </h6>
          <p className='pt-[0.5vh] text-gray-400 tracking-tighter sm:text-[1.25vw] text-[3.5vw]'>
          Powered by Nvidia’s top of the line boards –Jetson Xavier AGX. Customized cooling for better thermals in confined design. With 128 computing cores it can handle AI tasks on the go. Be it object detection, segmentation or if you just want to  be  pesky underwater Jetson have you got covered.
          </p>
          </div>
        </div> 

  
        <div ref={div4} className='z-20 flex flex-col justify-center items-center w-[100vw] sm:w-[90vw] mx-auto px-[10px] mb-[20vh] mt-[5vh] md:mt-[35vh]'>
  
        <div ref={div4Box} className='flex flex-col mb-[4vh]'>
         <h6 className='sm:text-[40px] md:text-[80px] text-[12vw] text-center mx-auto text-gray-700 font-bold tracking-wider'>
         Sea like never before
          </h6>
          <h2 className=' text-gray-400 md:text-[1.5vw]  sm:text-[2.25vw] text-[3.75vw] w-[75%] text-center mx-auto'>
          If you think cameras are creepy enough, wait till you see the RealSense. Powered by stereo vision and Infrared tech, this can  not only capture but can recreate all your surroundings in 3D. Helps the vehicle navigate using SLAM and still look better than those stupid fishes.
          </h2>
          </div>
          
            <div ref={div4Video} className='w-[90%] mt-[3vh] sm:mt-[0px] sm:w-[60%] sm:h-[80%] mx-auto overflow-hidden rounded-2xl'>
          <video  src='/LandingPage/realSense.mp4' autoPlay loop muted className='w-[100%]'/>
            </div>

            <div ref={div4Images} className='w-[100%] flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between mt-[30px] md:mt-[100px]'>
              <Image ref={image1} src="/LandingPage/objectDetection1.png" height={500} width={500} className='rounded-2xl image1 sm:w-[33vw]' />
              <Image ref={image2} src="/LandingPage/objectDetection2.png" height={500} width={500} className='rounded-2xl image2 sm:w-[33vw]' />
            </div>
     
        </div> 

       
      <div ref={div3} className='z-20 px-[10px] flex flex-col sm:flex-row justify-center items-center w-[100vw] max-[700px] h-[80vh] sm:pl-[5vw] font-poppins mt-[15vh] mb-[15vh] bg-black'>
    
        <video ref={div3Video} src='/LandingPage/thruster.mp4' autoPlay loop muted className=' sm:h-[60vh] sm:w-[60vw] w-[100vw] sm:scale-100 scale-125 ml-[-8vw] sm:mb-[0px] mb-[20vh]'/>
        
        <div ref={div3Box} className=' flex flex-col sm:mr-[2vw] sm:p-[10px] rounded-3xl'>
         <h6 className='sm:text-[40px] text-[4vh] text-slate-100 font-bold'>
         Kraken
          </h6>
          <p className='pt-[0.5vh] text-gray-400 tracking-tighter sm:text-[1.25vw] text-[3.5vw]'>
          SEA5.0 is not your ordinary mermaid, it got 4 BlueRobotics T200 thruster each pulling in 24 amps. That is more than your house can pull. Specially crafted for underwater use, it uses  hydrocarbon bearing lubricated by water giving it a top speed of 5m/s.  No mermaid can play tag with this bad boy
          </p>
          </div>
        </div> 



      </div>

  )
}
