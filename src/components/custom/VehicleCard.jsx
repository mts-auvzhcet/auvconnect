'use client'

import React from 'react';
import Image from 'next/image';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const VehicleCard = ({ photo, title, keyFeatures }) => {
    return (
        <Card className='bg-black text-gray-400 transition duration-300 ease-in-out w-[300px] h-auto'>
            <CardHeader className='flex items-center justify-center'>
                <Image src={photo} alt={title} width={800} height={800} />
                <CardTitle className='text-bold text-xl'>{title}</CardTitle>
            </CardHeader>
            <CardContent className='text-justify'>
                <p className='font-semibold'>Key Features:</p>
                <ul>
                    {keyFeatures.map((feature, index) => (
                        <li key={index} className='list-disc list-inside text-sm'>{feature}</li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export default VehicleCard;