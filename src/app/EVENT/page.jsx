'use client'

import React from 'react'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
} from "@/components/ui/card"

import Autoplay from "embla-carousel-autoplay"

import Link from 'next/link'

import { eventsData } from '@/components/Event/data'


const page = () => {
    return (
        <div className='bg-black'>
            <div className='w-[100%] flex flex-col gap-6'>
                <div className='text-zinc-600 font-bold text-5xl lg:text-7xl text-center mt-24'>
                    Explore our Events!
                </div>
                <div className='font-apple tracking-widest font-thin flex flex-col gap-4 text-center'>
                </div>
            </div>

            <div className=''>
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
                    className="w-full max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg p-4 mx-auto"
                >
                    <CarouselContent className=''>
                        {eventsData.map((event) => (
                            <CarouselItem key={event.id} className="md:basis-1/2 lg:basis-1/3">
                                <Card className='flex flex-col items-center justify-between h-full max-w-[80vw] mx-auto bg-black'>
                                    <CardTitle className='text-white mt-3 text-xl text-center px-3 pt-2 font-poppins'>
                                        {event.title}
                                    </CardTitle>
                                    <CardHeader className='text-gray-400 text-justify font-apple'>{event.description}</CardHeader>
                                    <CardFooter>
                                        <div className='flex flex-col items-center gap-1'>
                                            <Link href={event.report} className='text-white bg-slate-600 px-4 py-1 hover:scale-105 transition-all duration-300 rounded-full text-center text-md mb-3'>
                                                View Report
                                            </Link>
                                            <div className='text-gray-400 text-sm text-center h-10'>
                                                {event.date}
                                            </div>
                                        </div>
                                    </CardFooter>
                                </Card>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    )
}

export default page