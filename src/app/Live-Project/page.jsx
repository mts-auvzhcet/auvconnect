'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)


const Page = () => {

    const main = useRef(null)
    // autobase
    const videoRef = useRef(null)
    const heading = useRef(null)
    const content = useRef(null)
    const section1 = useRef(null)
    const div1 = useRef(null)
    const div2 = useRef(null)
    const image1 = useRef(null)
    const image2 = useRef(null)
    const image3 = useRef(null)
    const image4 = useRef(null)

    // 3d printer
    const heading2 = useRef(null)
    const content2 = useRef(null)
    const section2 = useRef(null)

    useEffect(() => {

        if (window.innerWidth > 560) {

            const section1TL = gsap.timeline({
                scrollTrigger: {
                    trigger: section1.current,
                    scrub: 4,
                    toggleActions: 'play reverse play reverse',
                    // markers:true,
                    start: "top 100px",
                    end: "bottom 100px",
                }
            })

            section1TL.to(videoRef.current, {
                width: "100%",
                marginTop: "10vh"
            }, "section1")

            section1TL.to(heading.current, {
                x: "-50px",
            }, "section1")

            section1TL.to(content.current, {
                x: "50px",
            }, "section1")

            gsap.to(main.current, {
                background: "white",
                scrollTrigger: {
                    // markers:true,
                    trigger: div1.current,
                    start: "top 400px",
                    end: "bottom 400px",
                    toggleActions: 'play reverse play reverse',
                }
            })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: div1.current,
                    // markers:true,  
                    start: "top 400px",
                    end: "bottom 400px",
                    toggleActions: 'play none none reverse',
                }
            })

            tl.to(image1.current, {
                x: "2vw",
                duration: 1,
                ease: "power1.inOut"
            }, "img")
            tl.to(image2.current, {
                x: "-2vw",
                duration: 1,
                ease: "power1.inOut"
            }, "img")
            tl.to(image3.current, {
                x: "2vw",
                duration: 1,
                ease: "power1.inOut"
            }, "img")
            tl.to(image4.current, {
                x: "-2vw",
                duration: 1,
                ease: "power1.inOut"
            }, "img")

        }


    })

    return (
        <div ref={main} className='bg-black pt-[20px]'>

            <div className='sm:w-[90vw] w-[100vw] mx-auto'>
                {/* heading and video */}
                <div ref={section1} className='w-[100%]'>
                    <div className='w-[100%] flex flex-col justify-center items-center font-poppins font-medium pt-[70px] mb-[20px]'>
                        <div ref={heading} className='text-primary mx-auto text-center text-[12vw] md:text-[6vw] '>
                            AutoBase 1.0
                        </div>
                        <div ref={content} className='text-gray-400 text-[5vw] md:text-[1.6vw] w-[70%] text-center mx-auto font-light'>
                            If you think cameras are creepy enough, wait till you see the RealSense. Powered by stereo vision and Infrared tech, this can  not only capture but can recreate all your surroundings in 3D. Helps the vehicle navigate using SLAM and still look better than those stupid fishes.
                        </div>
                    </div>

                    <div ref={videoRef} className='sm:w-[60%] sm:h-[80%] mx-auto overflow-hidden rounded-xl' >
                        <video src='/Live_project/pathDetector.mp4' loop muted autoPlay className='w-[100%]' />
                    </div>

                </div>

                {/* images */}
                <div ref={div1} className='flex flex-col p-[30px]'>

                    <div className='w-[100%] flex flex-row justify-between mt-[50px]'>
                        <Image ref={image1} src="/Live_project/img1.png" height={600} width={600} className='rounded-2xl image1  w-[40vw]' />
                        <Image ref={image2} src="/Live_project/img2.png" height={600} width={600} className='rounded-2xl image2  w-[40vw]' />
                    </div>

                    <div className='w-[100%] flex flex-row justify-between mt-[50px]'>
                        <Image ref={image3} src="/Live_project/img2.png" height={600} width={600} className='rounded-2xl image1 w-[40vw]' />
                        <Image ref={image4} src="/Live_project/img4.png" height={600} width={600} className='rounded-2xl image2 w-[40vw]' />
                    </div>

                </div>
                {/* 3r pinter with 2 vids and 1 image and 1 content */}
                <div ref={section2} className='w-[100%] flex flex-col justify-center items-center p-4'>
                    <div ref={heading2} className='w-[100%] flex flex-col justify-center items-center font-poppins font-medium pt-[70px] mb-[20px]'>
                        <div className='text-primary mx-auto text-center text-[12vw] md:text-[6vw] '>
                            3D Printer
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row justify-between items-center gap-5' ref={content2}>
                        <div className='w-[85%] md:w-[30%] overflow-hidden rounded-xl'>
                            <video src='/Live_project/printer_vid1.mov' loop muted autoPlay className='w-full' />
                        </div>
                        <div className='text-gray-400 text-center font-light w-[85%] md:w-[30%] text-[5vw] md:text-[2.5vw]'>
                            A 3D printer is like a futuristic sculptor, capable of bringing your wildest ideas to life layer by layer. It turns digital designs into tangible objects by building them from the ground up, using materials like plastic, metal, or even ceramics.
                        </div>
                        <div className='w-[85%] md:w-[30%] overflow-hidden rounded-xl'>
                            <video src='/Live_project/printer_vid2.mov' loop muted autoPlay className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page