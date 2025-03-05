'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import Link from 'next/link'
import { eventsData } from '@/components/custom/eventData'

export default function Page() {
    const [activeGallery, setActiveGallery] = useState(null);

    const handleGalleryClick = (eventId) => {
        setActiveGallery(activeGallery === eventId ? null : eventId); 
    };

    return (
        <div className='flex flex-col items-center justify-center bg-black'>
            <div className='w-[100%] flex flex-col gap-6'>
                <div className='text-zinc-600 font-bold text-5xl lg:text-7xl text-center mt-24'>
                    Explore our Events!
                </div>
                <div className='font-apple tracking-widest font-thin flex flex-col gap-4 text-center'>
                </div>
            </div>

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 1000,
                        stopOnMouseEnter: true,
                        stopOnInteraction: false,
                    }),
                ]}
                className="w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg p-4 mx-auto"
            >
                <CarouselContent className="">
                    {eventsData.map((event) => (
                        <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                            <Card className="flex flex-col items-center justify-between h-full max-w-[80vw] mx-auto bg-black relative">
                                <CardTitle className="text-white mt-3 text-xl text-center px-3 pt-2 font-poppins">
                                    {event.title}
                                </CardTitle>
                                <CardHeader className="text-gray-400 text-justify font-apple">
                                    {event.description}
                                </CardHeader>
                                <CardFooter className='flex flex-col items-center gap-3'>
                                    <div className="flex flex-row gap-2">
                                        <Button>
                                            <Link href={event.report} target='_blank'>
                                                Report
                                            </Link>
                                        </Button>
                                        <Button onClick={() => handleGalleryClick(event.id)}>
                                            Gallery
                                        </Button>
                                    </div>
                                    <div className='text-gray-400 text-sm text-center h-10'>
                                        {event.date}
                                    </div>
                                </CardFooter>

                                {/* Gallery Overlay */}
                                <CardContent
                                    className={`absolute inset-0 bg-black bg-opacity-90 p-2 my-3 gap-2 flex flex-col items-center justify-center overflow-y-scroll hide-scrollbar transition-opacity duration-300 ease-in-out ${activeGallery === event.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                                >
                                    <Button onClick={() => setActiveGallery(null)}>Close</Button>
                                    <CardContent className="flex flex-col gap-2 mt-2 overflow-y-scroll hide-scrollbar">
                                        {event.images.map((image, index) => (
                                            <Image
                                                key={index}
                                                src={image}
                                                alt={`Event ${event.title} image ${index + 1}`}
                                                className="w-full h-auto rounded-lg"
                                                width={200}
                                                height={200}
                                            />
                                        ))}
                                    </CardContent>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                    
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}