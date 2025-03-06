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
import LatestNews from "@/components/custom/LatestNews";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {

    const main = useRef(null);
    const div2 = useRef(null);
    const div3 = useRef(null);
    const div4 = useRef(null);
    const heading1 = useRef(null);

    useEffect(() => {
        // Set the initial background color to black
        gsap.set(main.current, { backgroundColor: "black" });
        gsap.set(main.current.querySelectorAll("h1"), { color: "white" });

        let ctx = gsap.context(() => {

            ScrollTrigger.create({
                trigger: heading1.current,
                start: "top 80em",
                scrub: true,
                // markers: true,
                onEnter: () => {
                    gsap.to(heading1.current, { y: 300, opacity: 0, duration: 2, overwrite: "auto" });
                },
                onLeaveBack: () => {
                    gsap.to(heading1.current, { y: 0, opacity: 1, duration: 1, overwrite: "auto" });
                },
            })
            // Change to black when div2 is in view
            ScrollTrigger.create({
                trigger: div2.current,
                start: "top 0%",
                // end: "bottom 50%",
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
                start: "top 30%",
                // end: "bottom 50%",
                scrub: true,
                // markers: true,
                onEnter: () => {
                    gsap.to(main.current, { backgroundColor: "white", duration: 0.5, overwrite: "auto" });
                    gsap.to(main.current.querySelectorAll("h1"), { color: "black", duration: 0.5, overwrite: "auto" });
                },
                onLeaveBack: () => {
                    gsap.to(main.current, { backgroundColor: "white", duration: 0.5, overwrite: "auto" });
                    gsap.to(main.current.querySelectorAll("h1"), { color: "black", duration: 0.5, overwrite: "auto" });
                },
            });

            // Change to black when div4 is in view
            ScrollTrigger.create({
                trigger: div4.current,
                start: "top 30%",
                // end: "bottom 50%",
                scrub: true,
                // markers: true,
                onEnter: () => {
                    gsap.to(main.current, { backgroundColor: "black", duration: 0.5, overwrite: "auto" });
                    gsap.to(main.current.querySelectorAll("h1"), { color: "white", duration: 0.5, overwrite: "auto" });
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
                    <div className='text-neutral-200 font-extrabold text-[8vw] font-poppins z-10' ref={heading1}>
                        MTS-AUV ZHCET
                    </div>
                </div>
            </div>

            {/* our vehicles - cards  */}
            <div className="py-11" ref={div2}>
                <h1 className="text-center font-bold font-poppins text-3xl lg:text-5xl pb-8">
                    Our Vehicles!
                    <br />
                    Safina-E-Aabdoz&apos; (SEA)
                </h1>
                {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-3 mx-auto'> */}
                <div className="flex flex-wrap justify-center gap-2 mx-auto">
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
                    <h1 className='text-center font-bold font-poppins text-3xl lg:text-5xl pb-8'>
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

            {/* latest news  */}
            <div className='py-20' ref={div4}>
                <h1 className='text-center font-bold font-poppins text-3xl lg:text-5xl pb-8'>
                    Latest News!
                </h1>
                <div className='flex justify-center'>
                    <div>
                        <LatestNews />
                    </div>
                </div>
            </div>
        </div>
    );
}
