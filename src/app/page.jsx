'use client'

import { useEffect, useRef, React } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VehicleCard from "@/components/custom/VehicleCard";
import vehicleData from "@/components/custom/vehicleData";
import TestimonialCard from "@/components/custom/TestimonialCard";
import testimonialData from "@/components/custom/testimonialData";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const main = useRef(null);
    const div1 = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);

    useEffect(() => {
        // Set the initial background color to black
        gsap.set(main.current, { backgroundColor: "black" });
        gsap.set(main.current.querySelectorAll("h1"), { color: "white" });
    
        let ctx = gsap.context(() => {
            // Change to black when div2 is in view
            ScrollTrigger.create({
                trigger: div2.current,
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                onEnter: () => {
                    gsap.to(main.current, { backgroundColor: "black", duration: 0.5, overwrite: "auto" });
                    gsap.to(main.current.querySelectorAll("h1"), { color: "white", duration: 0.5, overwrite: "auto" });
                },
                onLeaveBack: () => {
                    gsap.to(main.current, { backgroundColor: "black", duration: 0.5, overwrite: "auto" });
                    gsap.to(main.current.querySelectorAll("h1"), { color: "white", duration: 0.5, overwrite: "auto" });
                },
            });
    
            // Change to white when div3 is in view
            ScrollTrigger.create({
                trigger: div3.current,
                start: "top 50%",
                end: "bottom 50%",
                scrub: true,
                onEnter: () => {
                    gsap.to(main.current, { backgroundColor: "white", duration: 0.5, overwrite: "auto" });
                    gsap.to(main.current.querySelectorAll("h1"), { color: "black", duration: 0.5, overwrite: "auto" });
                },
                onLeaveBack: () => {
                    gsap.to(main.current, { backgroundColor: "black", duration: 0.5, overwrite: "auto" });
                    gsap.to(main.current.querySelectorAll("h1"), { color: "white", duration: 0.5, overwrite: "auto" });
                },
            });
        });
    
        return () => ctx.revert(); // Cleanup GSAP on unmount
    }, []);
    
    
    return (
        <div className="pt-10" ref={main}>
            {/* video  */}
            <div className='relative'>
                <video src="/LandingPage/SEA_5.0.mp4" loop muted autoPlay className="w-full h-full object-cover" />
                <div className='absolute inset-0 flex justify-center items-center'>
                    <span className='text-neutral-200 font-extrabold text-[8vw] font-poppins z-10'>
                        MTS-AUV ZHCET
                    </span>
                </div>
            </div>

            {/* our vehicles - cards  */}
            <div className="py-11" ref={div2}>
                <h1 className="text-center font-medium font-poppins text-3xl lg:text-5xl pb-8">
                    Our Vehicles!
                    <br />
                    Safina-E-Aabdoz&apos; (SEA)
                </h1>
                {/* <div className="flex flex-wrap justify-center items-center gap-4">
                    {vehicleData.map((vehicle, index) => (
                        <VehicleCard
                            key={index}
                            photo={vehicle.photo}
                            title={vehicle.title}
                            keyFeatures={vehicle.keyFeatues}
                        />
                    ))}
                </div> */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3'>
                    {vehicleData.map((vehicle, index) => (
                        <VehicleCard
                            key={index}
                            photo={vehicle.photo}
                            title={vehicle.title}
                            keyFeatures={vehicle.keyFeatues}
                        />
                    ))} 
                </div>
            </div>

            {/* testimonials */}
            <div className='py-20' ref={div3}>
                <div>
                    <h1 className='text-center font-medium font-poppins text-3xl lg:text-5xl pb-8'>
                        Words of Wisdom by our very own!
                    </h1>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    plugins={[
                        Autoplay({
                            delay: 3000,
                            stopOnMouseEnter: true,
                            stopOnInteraction: false,
                        }),
                    ]}
                    className=""
                >
                    <CarouselContent className=''>
                        {testimonialData.map((testimonial) => (
                            <CarouselItem key={testimonial.id} className="">
                                <TestimonialCard
                                    remark={testimonial.remark}
                                    image={testimonial.image}
                                    name={testimonial.name}
                                    designation={testimonial.designation}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </div>
    );
}
