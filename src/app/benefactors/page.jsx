"use client"
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from 'next/image'

// Placeholder data for Benefactors and Sponsors
const benefactors = [
    {
        id: 1,
        name: "Aliagrh Muslim University",
        image: "/benefactors/amu.png",
    },
    {
        id: 2,
        name: "AMU Old Boys Association",
        image: "/benefactors/amuoldboysassociation.png", // Using existing logo as placeholder
    },

]

const sponsors = [
    {
        id: 1,
        name: "Designing Printing Innovation",
        image: "/benefactors/depi.png",
    },
    {
        id: 2,
        name: "KTM",
        image: "/benefactors/KTM logo.png",
    },
    {
        id: 3,
        name: "Shiva Group",
        image: "/benefactors/SG.png",
    },
    {
        id: 4,
        name: "Triumph",
        image: "/benefactors/TRIUMPH.png",
    },
]

const Section = ({ title, items }) => (
    <div className="w-full mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12 font-poppins">
            {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 md:px-12">
            {items.map((item) => (
                <Card key={item.id} className="bg-zinc-900 border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
                    <CardHeader className="p-8 h-48 flex items-center justify-center relative">
                        <div className="relative w-full h-full">
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                style={{ objectFit: 'contain' }}
                                className="drop-shadow-md"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="pb-8 px-6 pt-0 text-center">
                        <CardTitle className="text-lg font-medium text-zinc-300">
                            {item.name}
                        </CardTitle>
                    </CardContent>
                </Card>
            ))}
        </div>
    </div>
)

export default function BenefactorsPage() {
    return (
        <div className="min-h-screen bg-black pt-[100px] pb-20">
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6 font-poppins">
                        Our Supporters
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl text-center max-w-2xl px-4">
                        We are grateful for the generous support from our benefactors and sponsors who make our innovations possible.
                    </p>
                </div>

                <Section title="Benefactors" items={benefactors} />
                <Section title="Sponsors" items={sponsors} />
            </div>
        </div>
    )
}
